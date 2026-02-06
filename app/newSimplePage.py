def insert (source_str, insert_str, pos):
    return source_str[:pos] + insert_str + source_str[pos:]

import os
import sys

nameToUse = "tmp"
if(len(sys.argv) >= 2):
	nameToUse = sys.argv[1]
else:
	print("ERROR!!! you MUST decide on a name here!\n")
	print("python newSimplePage.py newNameYep\n\n")
	exit()

with open('webApp.js', 'r') as file:
    data = file.read()
if(nameToUse in data):
	print("ERROR!!! you must use a NEW name here!!\n")
	print("python newSimplePage.py newNameYep\n\n")
	exit()

# Check against redirect alias names
reservedAliases = ['sonata', 'melody', 'batterylow', 'askingforit', 'callforscores', 'christmas', 'softmusic', 'threeNotes', 'ideasofspace']
if(nameToUse.lower() in [r.lower() for r in reservedAliases]):
	print("ERROR!!! '"+nameToUse+"' conflicts with a server redirect alias!\n")
	exit()

# Check against POST endpoint path segments
postEndpoints = ['goSonata', 'goConcerto', 'goThreeNotes', 'gobattery', 'goReflections', 'goSmallMusic', 'goSoftMusic', 'goVoices', 'goMelody', 'NMDCAudienceSumbit', 'NMDCAdminUpload', 'playgroundEmailSubmit', 'someonesMoonPost']
if(nameToUse in postEndpoints):
	print("ERROR!!! '"+nameToUse+"' conflicts with a server POST endpoint!\n")
	exit()

# Check against existing directories
if(os.path.isdir(nameToUse)):
	print("ERROR!!! '"+nameToUse+"' conflicts with an existing directory!\n")
	exit()


fd = open("simplePages/"+nameToUse+".html",'w')
fd.write("""
<h1 class="title">"""+nameToUse+"""</h1>
<div class="pagePieceDate">2021</div>
<div class="pagePieceInsturmentation">ambient improvisation</div>
<br/>

<div class="container">
<iframe src="//www.youtube.com/embed/CbT79fQ5Iew" 
frameborder="0" allowfullscreen class="video"></iframe>
</div>
<br>
A live improvisation broo.

""")
fd.close()

fd = open("simplePages/all.js",'a')
fd.write("""
angular.module('myApp."""+nameToUse+"""', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/"""+nameToUse+"""', {
      templateUrl: 'simplePages/"""+nameToUse+""".html',
      controller: '"""+nameToUse+"""Ctrl'
    });
  }])
  .controller('"""+nameToUse+"""Ctrl', [function() {}]);
	""")

specialCom = "// DO NOT CHANGE THIS COMMENT: New stuff goes here"

with open('webApp.js', 'r') as file:
    data = file.read()
    whereToInsert = data.index(specialCom) + len(specialCom)
    ret = insert(data,"\n   'myApp."+nameToUse+"',", whereToInsert)
    fd = open("webApp2.js",'w')
    fd.write(ret)
    fd.close()
os.system("mv webApp2.js webApp.js")

print("done!")
print()