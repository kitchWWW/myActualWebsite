#!/bin/bash

rm -rf out/1234*
mkdir out/1234
python build.py 1234 hello
cd out/1234

for i in *.ly; do lilypond $i; done

for i in *.pdf; do convert           \
   -verbose       \
   -density 550   \
    $i      \
   -quality 200   \
   -flatten       \
   -sharpen 0x1.0 \
   -trim          \
    $i.png; done