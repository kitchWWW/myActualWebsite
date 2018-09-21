#!/bin/bash
cd engines/Generative-Music-master
find . -name "*.class" -type f -delete
javac runner.java
echo "Completed compile portion"
