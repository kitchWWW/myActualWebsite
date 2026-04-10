#!/usr/bin/env python3
"""
migrate_pdf_embeds.py

Replaces all <embed ... type="application/pdf" ...> tags with <iframe> tags
using Google Docs Viewer, which renders PDFs inline in modern browsers.

Chrome 115+ dropped cross-origin inline PDF rendering for <embed>/<object>;
the Google Docs Viewer iframe approach works across all major browsers.

Usage:
    python migrate_pdf_embeds.py [--dry-run]

Options:
    --dry-run   Print what would change without modifying any files.
"""

import os
import re
import sys

DRY_RUN = "--dry-run" in sys.argv

# Search root is the directory containing this script.
ROOT = os.path.dirname(os.path.abspath(__file__))

# File extensions to scan.
EXTENSIONS = {".html", ".py"}

# Matches a single-line <embed> with type="application/pdf".
# Captures: (leading whitespace, src URL, width value, height value, trailing attributes)
SINGLE_LINE_PATTERN = re.compile(
    r'(<embed\s[^>]*?src=["\'])([^"\']+)(["\'][^>]*?type=["\']application/pdf["\'][^>]*?'
    r'width=["\']([^"\']+)["\'][^>]*?height=["\']([^"\']+)["\'][^>]*/?>)',
    re.IGNORECASE | re.DOTALL,
)

# A more flexible pattern that handles attribute order variations.
# Captures just the full embed tag and extracts src, width, height separately.
EMBED_PATTERN = re.compile(
    r'<embed\b([^>]*?type=["\']application/pdf["\'][^>]*?)(?:/>|>)',
    re.IGNORECASE | re.DOTALL,
)

ATTR_SRC = re.compile(r'\bsrc=["\']([^"\']+)["\']', re.IGNORECASE)
ATTR_WIDTH = re.compile(r'\bwidth=["\']([^"\']+)["\']', re.IGNORECASE)
ATTR_HEIGHT = re.compile(r'\bheight=["\']([^"\']+)["\']', re.IGNORECASE)


def make_iframe(src: str, width: str, height: str) -> str:
    encoded_src = src  # Google Viewer accepts plain URLs here; no manual encoding needed.
    viewer_url = f"https://docs.google.com/viewer?url={encoded_src}&embedded=true"
    return (
        f'<iframe\n'
        f'  src="{viewer_url}"\n'
        f'  width="{width}"\n'
        f'  height="{height}"\n'
        f'  frameborder="0"\n'
        f'></iframe>'
    )


def replace_embeds(content: str) -> tuple[str, int]:
    """Return (new_content, number_of_replacements)."""
    count = 0

    def replacer(m: re.Match) -> str:
        nonlocal count
        attrs = m.group(1)
        src_m = ATTR_SRC.search(attrs)
        width_m = ATTR_WIDTH.search(attrs)
        height_m = ATTR_HEIGHT.search(attrs)

        if not src_m:
            return m.group(0)  # Can't replace without a src — leave it alone.

        src = src_m.group(1)
        width = width_m.group(1) if width_m else "100%"
        height = height_m.group(1) if height_m else "800px"

        count += 1
        return make_iframe(src, width, height)

    new_content = EMBED_PATTERN.sub(replacer, content)
    return new_content, count


def scan_and_migrate():
    total_files = 0
    total_replacements = 0

    for dirpath, dirnames, filenames in os.walk(ROOT):
        # Skip hidden dirs and common non-project dirs.
        dirnames[:] = [
            d for d in dirnames
            if not d.startswith(".")
            and d not in {"bower_components", "node_modules", "__pycache__", "z_old"}
        ]

        for filename in filenames:
            ext = os.path.splitext(filename)[1].lower()
            if ext not in EXTENSIONS:
                continue

            filepath = os.path.join(dirpath, filename)
            rel = os.path.relpath(filepath, ROOT)

            with open(filepath, "r", encoding="utf-8", errors="replace") as f:
                original = f.read()

            if 'type="application/pdf"' not in original and "type='application/pdf'" not in original:
                continue  # Fast skip for files with no PDF embeds.

            new_content, count = replace_embeds(original)

            if count == 0:
                continue

            total_files += 1
            total_replacements += count

            if DRY_RUN:
                print(f"[dry-run] {rel}: {count} replacement(s)")
            else:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated {rel}: {count} replacement(s)")

    print()
    if DRY_RUN:
        print(f"Dry run complete. Would update {total_files} file(s), {total_replacements} embed(s) total.")
    else:
        print(f"Done. Updated {total_files} file(s), {total_replacements} embed(s) total.")


if __name__ == "__main__":
    if DRY_RUN:
        print("=== DRY RUN — no files will be modified ===\n")
    scan_and_migrate()
