#!/bin/bash
echo "Starting from Sonata Server Call"
echo $1
cd engines/SonataGenerator-master
mkdir out/$1
java runner $1 $2 $3 $4 $5
echo "Completed run"
cd out/$1
/Applications/Lilypond.app/Contents/Resources/bin/lilypond PianoSonataScore.ly
lilypond PianoSonataScore.ly
