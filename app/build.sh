 #!/bin/bash 
curl http://brianellissound.com/NMDC/allThoughts.txt -s > NMDC/allThoughts.txt
timestamp=$(date +%s)
zip -r app.zip ./* .ebextensions > /dev/null
mv app.zip ../dist/$timestamp.zip 
echo $timestamp
