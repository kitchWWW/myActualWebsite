#!/bin/bash
echo "Starting from Battery Server Call"
echo $1 $2 $3 $4
cd engines/BatteryLow-master
python make.py $1 $2 $3 $4
echo "Completed run"
cd out/$1
/Applications/Lilypond.app/Contents/Resources/bin/lilypond score.ly
lilypond score.ly