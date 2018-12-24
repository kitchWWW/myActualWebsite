#!/bin/bash
echo "Starting from Small Music Server Call"
echo $1
cd engines/SmallMusic-master
mkdir out/$1
java runner $1 $2 $3 $4
echo "Completed run"
cd out/$1
/Applications/Lilypond.app/Contents/Resources/bin/lilypond SmallMusic.ly
lilypond SmallMusic.ly