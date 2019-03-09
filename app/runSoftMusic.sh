#!/bin/bash
echo "Starting from Soft Music Server Call"
echo $1
cd engines/SoftMusic-master
mkdir out/$1
python go.py $1 $2 $3
echo "Completed run"
cd out/$1