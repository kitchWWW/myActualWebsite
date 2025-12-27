import os

def find_nth(haystack, needle, n):
    start = haystack.find(needle)
    while start >= 0 and n > 1:
        start = haystack.find(needle, start+len(needle))
        n -= 1
    return start

fd  = open("pages/music_REAL.html")
lines = fd.readlines()
print(lines)
date = 9999
urlBit = ""
printedTitle = ""
instrumentation = ""
allBits = []
for i in range(len(lines)):
	l = lines[i]
	if('"title"' in l):
		date = l[18:][:4]
		continue
	if("pieceTitle" in l):
		urlBit = l[l.index("href=")+6 :]
		urlBit = urlBit[:urlBit.index('"')]
		printedTitle = l[find_nth(l,'">',2)+2 :]
		printedTitle = printedTitle[:printedTitle.index('</a>')]
	if("pieceInsturmentation" in l):
		instrumentation = l[l.index('/')+1 :]
		instrumentation = instrumentation[:instrumentation.index('</span>')]
		# print(printedTitle, instrumentation, urlBit, date)
		bits = [urlBit,printedTitle, instrumentation,date,True,[]]
		allBits.append(bits)
		print(str(bits)+",")

print(allBits)
		