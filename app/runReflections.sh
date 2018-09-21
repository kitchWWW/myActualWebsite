#!/bin/bash
echo "Starting from Reflections Server Call"
echo $1
cd engines/Reflections-master
mkdir out/$1
java runner $1 $2 $3 $4 $5
echo "Completed run"
cd out/$1
/Applications/Lilypond.app/Contents/Resources/bin/lilypond ReflectionsScore.ly
lilypond ReflectionsScore.ly