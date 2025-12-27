#!/bin/bash
echo "Starting from Voices Server Call"
echo $1 $2 $3
cd engines/twoVoices-master
mkdir out/$1
java runner $1 $2 $3
echo "Completed run"
cd out/$1
/Applications/Lilypond.app/Contents/Resources/bin/lilypond twoVoicesScore.ly
lilypond twoVoicesScore.ly
