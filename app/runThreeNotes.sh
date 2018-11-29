#!/bin/bash
echo "Starting from ThreeNotes Server Call"
echo $1 $2 $3
cd engines/ThreeNotes-master
mkdir out/$1
python build.py $1 $2 $3
echo "Completed run"
cd out/$1
/Applications/Lilypond.app/Contents/Resources/bin/lilypond ThreeNotesScore.ly
lilypond ThreeNotesScore.ly