import datetime
import sys
import copy
import random
import json
from json import JSONEncoder

class MyEncoder(JSONEncoder):
	def default(self, o):
		return o.__dict__    




class Player:
	part = []
	insturment = ''
	clef = ''
	def __init__(self, insturment):
		self.insturment = insturment
		self.part = []
		if insturment == BASS:
			self.clef = 'bass'
		elif insturment == LEAD:
			self.clef = 'treble'
		else:
			# this is mids. Should really be like half bass (guitar) but whatevs.
			self.clef = 'treble'

	def __repr__(self):
		return "\n("+self.insturment+" : "+str(self.part)+")"

	def __str__(self):
		return "\n("+self.insturment+" : "+str(self.part)+")"

class Bit:
	dur = 0
	instruction = 0
	dynamic = ''
	rootNote = 0

	def __init__(self,dur,instruction,dynamic,rootNote):
		self.dur = dur
		self.instruction = instruction
		self.dynamic = dynamic
		self.rootNote = rootNote

	def __repr__(self):
		return "("+str(self.dur)+" : "+self.instruction+" : " +self.dynamic+ " : " + str(self.rootNote)+ ")"

	def __str__(self):
		return "("+str(self.dur)+" : "+self.instruction+" : " +self.dynamic+ " : " + str(self.rootNote)+ ")"


toLily = ['c','cis','d','ees','e','f','fis','g','gis','a','bes','b']
scale = [0,2,4,5,7,9,11]
def processMeasure(measure,rootNote):
	global toLily
	global scale
	copyMeasure = measure
	for i in range(len(scale)): 
		toNote = (i+rootNote) % len(scale)
		resNote = toLily[scale[toNote]]
		copyMeasure = copyMeasure.replace("["+str(i)+"]",resNote)
	return copyMeasure

measureValues = {}
measureValues['1_1_n_lead'] = "<[0]' [2]'>1:32"
measureValues['1_1_n_mid'] = "<[0]' [4]>1:32"
measureValues['1_1_n_bass'] = "<[0], [0]>1:32"
measureValues['1_1_s_lead'] = 's1^"Solo, root note: [0]"'
measureValues['1_1_s_mid'] = 's1^"Solo, root note: [0]"'
measureValues['1_1_s_bass'] = 's1^"Solo, root note: [0]"'

measureValues['2_0_n_bass'] = "[2],4 [2],4 [2],4 [2],4"
measureValues['2_1_n_bass'] = "[2],8 [3],8 [2],4 [2],4 [2],4"
measureValues['2_2_n_bass'] = "[2],4 [2],8 [3],8 [2],4 [2],4"
measureValues['2_3_n_bass'] = "[2],4 [2],4 [2],8 [3],8 [2],4"
measureValues['2_4_n_bass'] = "[2],4 [2],4 [2],4 [2],8 [3],8"

measureValues['2_0_s_bass'] = "[2],8 [3],8 [2],8 [3],8 [2],8 [3],8 [2],8 [3],8"
measureValues['2_1_s_bass'] = measureValues['2_0_s_bass']
measureValues['2_2_s_bass'] = measureValues['2_0_s_bass']
measureValues['2_3_s_bass'] = measureValues['2_0_s_bass']
measureValues['2_4_s_bass'] = measureValues['2_0_s_bass']

measureValues['2_0_n_lead'] = "[0]''4 [0]''4 [0]''4 [0]''4"
measureValues['2_1_n_lead'] = "[0]''8 [4]''8 [0]''4 [0]''4 [0]''4"
measureValues['2_2_n_lead'] = "[0]''4 [0]''8 [4]''8 [0]''4 [0]''4"
measureValues['2_3_n_lead'] = "[0]''4 [0]''4 [0]''8 [4]''8 [0]''4"
measureValues['2_4_n_lead'] = "[0]''4 [0]''4 [0]''4 [0]''8 [4]''8"

measureValues['2_0_s_lead'] = "[0]''8 [4]''8 [0]''8 [4]''8 [0]''8 [4]''8 [0]''8 [4]''8  "
measureValues['2_1_s_lead'] = measureValues['2_0_s_lead']
measureValues['2_2_s_lead'] = measureValues['2_0_s_lead']
measureValues['2_3_s_lead'] = measureValues['2_0_s_lead']
measureValues['2_4_s_lead'] = measureValues['2_0_s_lead']

measureValues['2_0_n_mid'] = "[4]4 [4]4 [4]4 [4]4"
measureValues['2_1_n_mid'] = "[4]8 [6]8 [4]4 [4]4 [4]4"
measureValues['2_2_n_mid'] = "[4]4 [4]8 [6]8 [4]4 [4]4"
measureValues['2_3_n_mid'] = "[4]4 [4]4 [4]8 [6]8 [4]4"
measureValues['2_4_n_mid'] = "[4]4 [4]4 [4]4 [4]8 [6]8"

measureValues['2_0_s_mid'] = "[4]8 [6]8 [4]8 [6]8 [4]8 [6]8 [4]8 [6]8 "
measureValues['2_1_s_mid'] = measureValues['2_0_s_mid']
measureValues['2_2_s_mid'] = measureValues['2_0_s_mid']
measureValues['2_3_s_mid'] = measureValues['2_0_s_mid']
measureValues['2_4_s_mid'] = measureValues['2_0_s_mid']



measureValues['3_1_n_lead'] = " <[0]'' [4]'>8 <[0]'' [4]'> r4 <[0]'' [4]'>8 <[0]'' [4]'> r4 "
measureValues['3_2_n_lead'] = " <[0]'' [4]'>8 <[0]'' [4]'> r4 <[2]'' [4]'>8 <[2]'' [4]'> r4  "
measureValues['3_3_n_lead'] = " <[2]'' [4]'>8 <[2]'' [4]'> r4 <[3]'' [4]'>8 <[3]'' [4]'> r4  "
measureValues['3_4_n_lead'] = " [2]''8 [2]''8 r4 [0]''8 [0]'' r4  "

measureValues['3_1_n_mid'] = " [2]'8 [2]'8 [3]'8 [3]'8 [2]'8 [2]'8 [3]'8 [3]'8"
measureValues['3_2_n_mid'] = " [2]'8 [2]'8 [1]'8 [1]'8 [2]'8 [2]'8 [1]'8 [1]'8"
measureValues['3_3_n_mid'] = " [2]'8 [2]'8 [1]'8 [1]'8 [1]'8 [1]'8 [2]'8 [2]'8"
measureValues['3_4_n_mid'] = " [2]'8 [2]'8 [1]'8 [1]'8 [0]'8 [0]'8 [6]8 [6]8"

measureValues['3_1_n_bass'] = "r4 [5],8 [5],8  r4 [5],8 [5],8 "
measureValues['3_2_n_bass'] = "r4 [5],8 [5],8  r4 [3],8 [3],8 "
measureValues['3_3_n_bass'] = "r4 [3],8 [3],8  r4 [0]8 [0]8 "
measureValues['3_4_n_bass'] = "r4 [1],8 [1],8  r4 [6],,8 [6],,8 "



measureValues['tacet'] = 'r1^"Tacet" '


# measureValues['3_0_n_lead'] = "   "
# measureValues['3_1_n_lead'] = "   "
# measureValues['3_2_n_lead'] = "   "
# measureValues['3_3_n_lead'] = "   "
# measureValues['3_4_n_lead'] = "   "









def partCheck(parts):
	allSums = []
	for p in parts:
		mySum = 0
		for b in p.part:
			mySum += b.dur
		allSums.append(mySum)
	for s in allSums:
		if s != allSums[0]:
			print("WHOA ERROR ERROR ERROR ERROR")
			return
	print("--> all good!")


idCount = 0
def genId():
	global idCount
	idCount+=1
	return "_"+str(idCount)

#SCENE 1
def addRollChordScene(rootNote,TOTAL_FADE_IN_TIME,TOTAL_PLAY_TIME,versionPrefix,hasSoloist):
	soloist = random.choice(range(len(parts)))
	others = range(len(parts))
	if hasSoloist:
		others.remove(soloist)
	else:
		soloist = len(parts)+5# just needs to be higher

	versionPrefixs = []
	for p in range(len(parts)):
		versionPrefixs.append(random.choice(versionPrefix))

	# now we orchestrate a smooth-ish fade in
	random.shuffle(others)
	entryTimes = random.sample(range(1,TOTAL_FADE_IN_TIME), len(others)-2)
	entryTimes.append(0)
	entryTimes.append(TOTAL_FADE_IN_TIME)
	random.shuffle(entryTimes)
	for p in range(len(parts)):
		if p == soloist:
			b = Bit(TOTAL_FADE_IN_TIME,FADE_OUT,'',0)
			parts[p].part.append(b)
		else:
			entryIndex = p
			if entryIndex > soloist:
				entryIndex -= 1
			parts[p].part.append(Bit(entryTimes[entryIndex],FADE_OUT,'',0))
			parts[p].part.append(Bit(TOTAL_FADE_IN_TIME - entryTimes[entryIndex],
				versionPrefixs[p]+'_n_'+parts[p].insturment+genId(),
				'fade in',
				rootNote))
	
	# now let them actually play for a while
	for p in range(len(parts)):
		if p == soloist:
			b = Bit(TOTAL_PLAY_TIME,
				versionPrefixs[p]+"_s_"+parts[p].insturment+genId(),
				'loud',
				rootNote)
			parts[p].part.append(b)
		else:
			entryIndex = p
			if entryIndex > soloist:
				entryIndex -= 1
			parts[p].part.append(Bit(TOTAL_PLAY_TIME,
				versionPrefixs[p]+'_n_'+parts[p].insturment+genId(),
				'medium',
				rootNote))
	



######### START BUILDING THE PIECE

timestamp = '1234' #sys.argv[1]
dedication = 'Brian' # sys.argv[2]
BEGINNING_WAIT = 10

BASS = 'bass'
MID = 'mid'
LEAD = 'lead'
CONTINUE = 'continue'
FADE_OUT = 'fade_out'
TACET = 'tacet'

howManyOfEach = [BASS,BASS,MID,MID,LEAD,LEAD]

parts = []
for p in howManyOfEach:
	pl = Player(p)
	pl.part.append(Bit(10,TACET,'silent',0))
	parts.append(pl)


print(parts)
partCheck(parts)


addRollChordScene(1,15,20,['1_1'],False)
addRollChordScene(0,10,30,['1_1'],True)

addRollChordScene(4,30,10,['2_0'],False)
addRollChordScene(2,40,10,['2_1','2_2'],False)
addRollChordScene(2,40,10,['2_1','2_2'],False)
addRollChordScene(0,40,10,['2_2','2_3'],True)
addRollChordScene(2,40,10,['2_3','2_4'],False)
addRollChordScene(0,40,10,['2_1','2_2','2_3','2_4'],True)
addRollChordScene(4,30,40,['2_0'],True)

addRollChordScene(0,10,20,['3_1'],False)
addRollChordScene(0,10,30,['3_2'],False)
addRollChordScene(0,10,30,['3_3'],False)
addRollChordScene(0,10,30,['3_4'],False)


print(parts)
partCheck(parts)




#revise it down and clean it up just a little
for p in range(len(parts)):
	i = 0
	while i <len(parts[p].part):
		if parts[p].part[i].instruction==CONTINUE:
			parts[p].part[i-1].dur += parts[p].part[i].dur
			del parts[p].part[i]
			i-=1

		if parts[p].part[i].instruction==FADE_OUT and parts[p].part[i-1].instruction==TACET:
			parts[p].part[i-1].dur += parts[p].part[i].dur
			del parts[p].part[i]
			i-=1

		if parts[p].part[i].dur == 0:
			del parts[p].part[i]
			i-=1
		i+=1

print(parts)
partCheck(parts)

for p in parts:
	for b in p.part:
		if b.instruction in [FADE_OUT]:
			continue
		print b
		fd = open("portion.ly")
		outfd = open("out/"+str(timestamp)+'/'+b.instruction+".ly",'w')
		for l in fd:
			if l.startswith("%"):
				if 'name' in l:
					l = p.insturment
					l = ""
				elif 'clef' in l:
					l = '\\clef '+p.clef
				else:
					if '_' in b.instruction:
						actualInstruction = '_'.join(b.instruction.split("_")[:-1])
					else:
						actualInstruction = b.instruction
					if actualInstruction in measureValues:
						l = processMeasure(measureValues[actualInstruction],b.rootNote)+"\n"
					else:
						print "WHOA WAIT NO THIS IS NOT GOOD"
						print b.instruction
						l = "a b c d\n"
			outfd.write(l)
		outfd.close()
		fd.close()


totalOutFd = open("out/"+str(timestamp)+'/totalScore.json','w')
totalOutFd.write(json.dumps(parts,cls=MyEncoder))
totalOutFd.close()









