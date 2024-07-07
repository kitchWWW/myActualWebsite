import os


cateogries = ["everything","listen", "perform", "music","coding","teaching","art","theater"]
cateogryNames = ["everything","listen","things you can perform","SKIP","SKIP","SKIP","SKIP","SKIP"]

data = [
	['#!/purplegreen','purplegreen','fixed media and disklavier', 2024, True, ["perform","listen"]],
	['#!/zinetude','zinetude','choose-your-own-adventure flexible ensemble', 2024, True, ["perform"]],
	['#!/attentionMeditation','Attention Meditation','open instrumentation', 2024, True, ["perform","listen"]],
	['https://motion-into-midi.com/','motion-into-midi.com','online midi instrument', 2024, True, ["coding"]],
	['#!/soundmachinesound','Sound; Machine; Sound; Me; Sound','installation', 2024, True, ["perform","listen"]],
	['#!/nebulousEpiphanies','nebulous epiphanies & mostly truths','flexible ensemble', 2024, True, ["perform","music"]],
	['https://go.brianellissound.com/databend/index.html','data bending','online utility', 2024, True, ["coding"]],
	['https://go.brianellissound.com/smallMovementAmplifier/solo/index.html','Small Movement Amplifier','body awareness tool', 2024, True, ["coding"]],
	['https://audiobox.metademolab.com/maker','Audiobox Maker','online AI DAW', 2023, True, []],
	['#!/cloudCollage','Cloud Collage','cellphone orchestra', 2023, True, ["perform","listen"]],
	['#!/spliceworkshop','SPLICE Workshop','presentation', 2023, True, ["teaching"]],
	['#!/fishSchool','Fish School','interactive theater', 2023, True, ["perform","listen","music","coding","theater"]],
	['#!/groundwindow','Ground Window','video installation', 2023, True, ["coding","art"]],
	['#!/menu','MENU','flexible ensemble and video', 2023, True, ["perform","listen","music"]],
	['#!/cyberworm','Cyberworm','AR puppet', 2023, True, ["coding", "theater"]],
	['https://www.insideoffthewall.com/uglycry','#UGLYCRY','deep fakes and AR', 2023, True, ["coding","theater"]],
	['#!/contactlite','Contact Lite','percussion quartet', 2023, True, ["perform","listen","music", "coding"]],
	['#!/thereandbackam','there and back A.M.','ambient music', 2023, True, ["listen",]],
	['#!/musicThatSoundsGood','Music that sounds good','album <i>(release Aug 2024)</i>', 2023, False, ["listen",]],
	['http://brooklynmotioncapture.org/', 'Brooklyn Motion Capture Dance Ensemble', ' founder', '2022', True, []],
	['#!/WeGrowTogether', 'We Grow Together', ' dancers and audience', '2022', True, ["perform","listen","music"]],
	['#!/ten', 'Ten Water Events', ' dancer and live electronics', '2022', True, ["perform","listen","music"]],
	['#!/fromtheshells', 'From the shells...', ' 360 VR Sound Bath', '2022', True, ["listen","music"]],
	['#!/chinatown', 'Chinatown: Homecoming', ' projection art', '2022', True, []],
	['#!/technecyborg', 'Techne Cyborg', ' concert series', '2022', True, ["listen",]],
	['#!/technecyborgsolo', 'The Cyborg Thinks', ' solo performance', '2022', True, ["listen",]],
	['#!/series1nft', 'Playing Data', ' nft collection', '2022', True, ["perform","music"]],
	['#!/mgc', 'Margins Guitar Collective', ' solo recital', '2021', True, ["listen","music"]],
	['#!/youtuber', 'To Make A Short Story Long', ' youtube dj-ing', '2021', True, ["perform","listen","music"]],
	['#!/emeraldfuturespostlude', 'Emerald Futures: Postlude', ' irl installation', '2021', True, []],
	['#!/someonesmoon', "Someone's Moon", ' mixed quartet', '2021', True, ["perform","listen","music"]],
	['#!/ambientdulcimer', 'Mountain Dulcimer', ' ambient music', '2021', True, ["listen",]],
	['#!/sometitlesarewords', 'Some Titles Are Words', ' ar installation', '2021', True, ["perform","listen","music"]],
	['#!/tubeisyou', 'TUBE IS YOU', ' ar installation', '2021', True, ["perform","listen",]],
	['#!/sansduothree', 'SANS; duo', ' zoooooom!', '2021', True, ["listen",]],
	['https://go.brianellissound.com/december1952/index.html', 'December 1952', ' web realization', '2021', True, ["listen","music"]],
	['#!/whisper', 'Whisper Garden', ' irl installation', '2021', True, ["perform","listen","music"]],
	['#!/whisper', 'Extrapolations on a Vega Banjo', ' vr installation', '2021', True, ["perform","listen",]],
	['#!/paperandpen', 'Music for Paper & Pen', ' solo ritual', '2021', True, ["perform","listen",]],
	['#!/playground', 'Stay; ho(me)', ' vr installation', '2021', True, ["listen","music"]],
	['#!/thisyear', 'This year alone...', ' collaborative improvisation', '2021', True, ["perform","listen",]],
	['#!/m4a', 'Music for Audiences', ' concert series', '2021', True, ["perform","listen","music"]],
	['#!/sansduotwo', 'SANS; duo', ' one year later!', '2021', True, ["listen",]],
	['#!/breaking', 'breaking', ' clarinet solo', '2021', True, ["perform","listen","music"]],
	['#!/cgle', 'Classical Guitar + Electronics', ' call - apply now!', '2020', True, ["listen","music"]],
	['#!/sightreadchristmas', 'Christmas Music', ' classical guitar', '2020', True, ["perform","music"]],
	['https://sounds.pink', 'sounds.pink', ' tool for AI musical interfaces', '2020', True, []],
	['#!/wildthings', 'Wild Things', ' for the Subaerial Collective', '2020', True, ["perform","listen","music"]],
	['https://eartalk.org', 'Ear Talk', ' live group composition', '2020', True, ["listen","music"]],
	['#!/shared', 'Shared Music', ' percussion trio & dance trio', '2020', True, ["perform","listen","music"]],
	['#!/nimb', 'No Input Mixing', ' live improvisation', '2020', True, ["listen",]],
	['#!/zfest', 'Z Festival', ' performance, video editing, composition', '2020', True, ["listen",]],
	['https://ar-guitar.com', 'AR-Guitar', ' an air guitar', '2020', True, []],
	['#!/nationwide', 'Nationwide Counterpoint', ' piano septet and voice', '2020', True, ["perform","listen","music"]],
	['#!/ideas', 'Ideas of Space', ' improvization ritual', '2020', True, ["perform","listen","music"]],
	['#!/covid', 'Obligatory COVID-19 Art', ' performance art', '2020', True, ["perform","listen","music"]],
	['#!/agendas', 'AGENDA(S) Project', ' live improvisation', '2020', True, ["listen",]],
	['#!/sansduoone', 'SANS; duo', ' first concert', '2020', True, ["listen",]],
	['#!/eeg', 'Serene Music', ' soloist + live electronics', '2020', True, ["perform","music"]],
	['#!/battery', 'My Battery Is Low...', ' percussion + electronics', '2019', True, ["perform","listen","music"]],
	['https://songitude.com', 'Songitude', ' location based sound installations', '2019', True, []],
	['#!/earTraining', 'Ear Training For Non-Human Ears', ' album', '2019', True, ["listen","music"]],
	['#!/alabama', 'Divining Alabama', ' violin + electronics', '2019', True, ["perform","listen","music"]],
	['#!/megsong', "Meg's Song", ' classical guitar + live electronics', '2019', True, ["perform","listen","music"]],
	['#!/wch', 'Who Comes Home', ' guided improvisation', '2019', True, ["perform","listen",]],
	['#!/thesis', 'Technology & Musical Agency', ' a thesis', '2019', True, []],
	['#!/asking', 'Asking For It', ' interactive installation', '2019', True, ["perform","listen",]],
	['#!/softMusic', 'Soft Music', ' for ensemble of voices', '2019', True, ["perform","listen","music"]],
	['#!/threenotes', 'Three Notes', ' for solo or ensemble', '2019', True, ["perform","listen","music"]],
	['#!/split', 'Split Music', ' for soloist + companion', '2018', True, ["perform","listen","music"]],
	['#!/planing', 'Planing in Five Parts', ' composition for Fixed Media', '2018', True, ["listen",]],
	['#!/minimalismGuitar', 'Minimalism and the Guitar', ' solo concert performance', '2018', True, ["listen"]],
	['#!/unset', 'UNSET 2.0', ' performative collaborative storytelling', '2018', True, ["listen"]],
	['#!/fleet', 'Fleet', ' a collaboration among Ears, Eyes + Feet', '2018', True, ["listen"]],
	['#!/smallMusic', 'Small Music', ' for soloist + live electronics', '2018', True, ["perform","listen","music"]],
	['#!/songsAndInterludes', 'Songs and Interludes', ' for large ensemble', '2017', True, ["perform","listen","music"]],
	['#!/songCycle', 'Song Cycle', ' composition for violin + typist', '2017', True, ["perform","listen","music"]],
	['#!/twoVoices', 'Counterpoint Visualization', ' after Tymoczko', '2017', True, ["coding"]],
	['#!/genSon', 'Fresh Sonatas', ' program to generate short piano piece', '2017', True, ["listen","music","coding"]],
	['#!/reflections', 'Reflections', ' composition for solist', '2017', True, ["perform","music"]],
	['#!/epoch', 'Epoch Music', ' composition for small ensemble', '2016', True, ["music","coding"]],
	['#!/genMel', 'Melody Generator', ' define style and generate melody', '2016', True, ["listen","coding"]],
	['#!/departure', 'Departure', ' composition for classical guitar duet', '2015', True, ["perform","listen","music"]],
]


for catToGenerateIndex in range(len(cateogries)):
	catToGenerate = cateogries[catToGenerateIndex]
	print(cateogryNames[catToGenerateIndex])
	print("SKIP" in cateogryNames[catToGenerateIndex])
	if("SKIP" in cateogryNames[catToGenerateIndex]):
		continue
	bitsToPrint = []
	for i in range(len(cateogries)):
		navLink = "not-ready-nav-link"
		if(cateogries[i] == catToGenerate):
			navLink = "nav-link"
		delin = " // "
		if(i > 1):
			delin = ""
		template = '<span class="pieceTitle"><a class="'+navLink+'" href="#!/'+cateogries[i]+'" role="tab">'+cateogryNames[i]+'</a></span> '+delin+'\n'
		if("SKIP" in cateogryNames[i]):
			continue
		bitsToPrint.append(template)
	bitsToPrint.append("<br><br>")
	prevDate=99999

	for i in range(len(data)):
		# print(data[i])
		targetRole = " "
		if(catToGenerate == "everything" or catToGenerate in data[i][5]):
			if(data[i][3]!=prevDate):
				prevDate = data[i][3]
				bitsToPrint.append('<br><h1 class="title">'+str(data[i][3])+'</h1>')
			linkAddress = "#!/inprogress"
			kindOfLink = "not-ready-nav-link"
			if(data[i][4]):
				linkAddress = str(data[i][0])
				kindOfLink = "nav-link"
			linkRole =' role="tab"'
			if("#!/" not in linkAddress):
				linkRole = ""
				targetRole = ' target="_blank" '

			bitsToPrint.append('<span class="pieceTitle"><a class="'+kindOfLink+'" href="'+linkAddress+'"  '+targetRole + linkRole+'>'+str(data[i][1])+'</a></span>\n<span class="pieceInsturmentation">/ '+str(data[i][2])+'</span>\n<br>')
	# print(bitsToPrint)
	fd = open("pages/"+catToGenerate+".html",'w')
	fd.write("\n".join(bitsToPrint))
	fd.close()



