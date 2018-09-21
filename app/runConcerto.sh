#!/bin/bash
echo "Starting from Concerto Server Call"
echo $1
cd engines/babysFirstConcerto-master
mkdir out/$1
python create.py ${1} ${2} ${3} ${4} ${5} ${6} ${7} ${8} ${9} ${10}} ${11} ${12} ${13} ${14} ${15} ${16} ${17} ${18} ${19} ${20} ${21} ${22} ${23} ${24} ${25} ${26} ${27} ${28} ${29} ${30} ${31} ${32} ${33} ${34} ${35} ${36} ${37} ${38}
echo "Completed run"
cd out/$1
/Applications/Lilypond.app/Contents/Resources/bin/lilypond fullOutput.ly
lilypond fullOutput.ly
