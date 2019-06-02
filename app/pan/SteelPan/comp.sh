#!/bin/bash

rm -rf out/1234*
mkdir out/1234
python build.py 1234 hello
cd out/1234

for i in *.ly; do lilypond $i ; done

for i in *.pdf; do time convert           \
   -verbose       \
   -density 350   \
    $i      \
   -quality 100   \
   -flatten       \
   -trim          \
    $i.png; done