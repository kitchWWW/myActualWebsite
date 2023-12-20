import os


cateogries = ["everything","music","coding","teaching","art","theater"]
cateogryNames = ["everything","music you can play","SKIP","SKIP","SKIP","SKIP"]

data = [
	['#!/spliceworkshop','SPLICE Workshop','presentation', 2023, True, ["teaching"]],
	['#!/fishSchool','Fish School','interactive theater', 2023, False, ["music","coding","theater"]],
	['#!/groundwindow','Ground Window','video installation', 2023, False, ["coding","art"]],
	['#!/menu','MENU','flexible ensemble and video', 2023, True, ["music"]],
	['#!/cyberworm','Cyberworm','AR puppet', 2023, True, ["coding", "theater"]],
	['#!/uglycry','#UGLYCRY','deep fakes and AR', 2023, False, ["coding","theater"]],
	['#!/contactlite','Contact Lite','percussion quartet', 2023, False, ["music", "coding"]],
	['#!/thereandbackam','there and back A.M.','ambient music', 2023, True, []],
	['#!/musicThatSoundsGood','Music that sounds good','album', 2023, False, []],
	['http://brooklynmotioncapture.org/', 'Brooklyn Motion Capture Dance Ensemble', ' founder', '2022', True, []],
	['#!/WeGrowTogether', 'We Grow Together', ' dancers and audience', '2022', False, ["music"]],
	['#!/ten', 'Ten Water Events', ' dancer and live electronics', '2022', False, ["music"]],
	['#!/fromtheshells', 'From the shells...', ' 360 VR Sound Bath', '2022', True, ["music"]],
	['#!/chinatown', 'Chinatown: Homecoming', ' projection art', '2022', True, []],
	['#!/technecyborg', 'Techne Cyborg', ' concert series', '2022', True, []],
	['#!/technecyborgsolo', 'The Cyborg Thinks', ' solo performance', '2022', True, []],
	['#!/series1nft', 'Playing Data', ' nft collection', '2022', True, ["music"]],
	['#!/mgc', 'Margins Guitar Collective', ' solo recital', '2021', True, ["music"]],
	['#!/youtuber', 'To Make A Short Story Long', ' youtube dj-ing', '2021', True, ["music"]],
	['#!/emeraldfuturespostlude', 'Emerald Futures: Postlude', ' irl installation', '2021', True, []],
	['#!/someonesmoon', "Someone's Moon", ' mixed quartet', '2021', True, ["music"]],
	['#!/ambientdulcimer', 'Mountain Dulcimer', ' ambient music', '2021', True, []],
	['#!/sometitlesarewords', 'Some Titles Are Words', ' ar installation', '2021', True, ["music"]],
	['#!/tubeisyou', 'TUBE IS YOU', ' ar installation', '2021', True, []],
	['#!/sansduothree', 'SANS; duo', ' zoooooom!', '2021', True, []],
	['https://go.brianellissound.com/december1952/index.html', 'December 1952', ' web realization', '2021', True, ["music"]],
	['#!/whisper', 'Whisper Garden', ' irl installation', '2021', True, ["music"]],
	['#!/whisper', 'Extrapolations on a Vega Banjo', ' vr installation', '2021', True, []],
	['#!/paperandpen', 'Music for Paper & Pen', ' solo ritual', '2021', True, []],
	['#!/playground', 'Stay; ho(me)', ' vr installation', '2021', True, ["music"]],
	['#!/thisyear', 'This year alone...', ' collaborative improvisation', '2021', True, []],
	['#!/m4a', 'Music for Audiences', ' concert series', '2021', True, ["music"]],
	['#!/sansduotwo', 'SANS; duo', ' one year later!', '2021', True, []],
	['#!/breaking', 'breaking', ' clarinet solo', '2021', True, ["music"]],
	['#!/cgle', 'Classical Guitar + Electronics', ' call - apply now!', '2020', True, ["music"]],
	['#!/sightreadchristmas', 'Christmas Music', ' classical guitar', '2020', True, ["music"]],
	['https://sounds.pink', 'sounds.pink', ' tool for AI musical interfaces', '2020', True, []],
	['#!/wildthings', 'Wild Things', ' for the Subaerial Collective', '2020', True, ["music"]],
	['https://eartalk.org', 'Ear Talk', ' live group composition', '2020', True, ["music"]],
	['#!/shared', 'Shared Music', ' percussion trio & dance trio', '2020', True, ["music"]],
	['#!/nimb', 'No Input Mixing', ' live improvisation', '2020', True, []],
	['#!/zfest', 'Z Festival', ' performance, video editing, composition', '2020', True, []],
	['https://ar-guitar.com', 'AR-Guitar', ' an air guitar', '2020', True, []],
	['#!/nationwide', 'Nationwide Counterpoint', ' piano septet and voice', '2020', True, ["music"]],
	['#!/ideas', 'Ideas of Space', ' improvization ritual', '2020', True, ["music"]],
	['#!/covid', 'Obligatory COVID-19 Art', ' performance art', '2020', True, ["music"]],
	['#!/agendas', 'AGENDA(S) Project', ' live improvisation', '2020', True, []],
	['#!/sansduoone', 'SANS; duo', ' first concert', '2020', True, []],
	['#!/eeg', 'Serene Music', ' soloist + live electronics', '2020', True, ["music"]],
	['#!/battery', 'My Battery Is Low...', ' percussion + electronics', '2019', True, ["music"]],
	['https://songitude.com', 'Songitude', ' location based sound installations', '2019', True, []],
	['#!/earTraining', 'Ear Training For Non-Human Ears', ' album', '2019', True, ["music"]],
	['#!/alabama', 'Divining Alabama', ' violin + electronics', '2019', True, ["music"]],
	['#!/megsong', "Meg's Song", ' classical guitar + live electronics', '2019', True, ["music"]],
	['#!/wch', 'Who Comes Home', ' guided improvisation', '2019', True, []],
	['#!/thesis', 'Technology & Musical Agency', ' a thesis', '2019', True, []],
	['#!/asking', 'Asking For It', ' interactive installation', '2019', True, []],
	['#!/softMusic', 'Soft Music', ' for ensemble of voices', '2019', True, ["music"]],
	['#!/threenotes', 'Three Notes', ' for solo or ensemble', '2019', True, ["music"]],
	['#!/split', 'Split Music', ' for soloist + companion', '2018', True, ["music"]],
	['#!/planing', 'Planing in Five Parts', ' composition for Fixed Media', '2018', True, []],
	['#!/minimalismGuitar', 'Minimalism and the Guitar', ' solo concert performance', '2018', True, []],
	['#!/unset', 'UNSET 2.0', ' performative collaborative storytelling', '2018', True, []],
	['#!/fleet', 'Fleet', ' a collaboration among Ears, Eyes + Feet', '2018', True, []],
	['#!/smallMusic', 'Small Music', ' for soloist + live electronics', '2018', True, ["music"]],
	['#!/songsAndInterludes', 'Songs and Interludes', ' for large ensemble', '2017', True, ["music"]],
	['#!/songCycle', 'Song Cycle', ' composition for violin + typist', '2017', True, ["music"]],
	['#!/twoVoices', 'Counterpoint Visualization', ' after Tymoczko', '2017', True, ["coding"]],
	['#!/genSon', 'Fresh Sonatas', ' program to generate short piano piece', '2017', True, ["music","coding"]],
	['#!/reflections', 'Reflections', ' composition for solist', '2017', True, ["music"]],
	['#!/epoch', 'Epoch Music', ' composition for small ensemble', '2016', True, ["music","coding"]],
	['#!/genMel', 'Melody Generator', ' define style and generate melody', '2016', True, ["coding"]],
	['#!/departure', 'Departure', ' composition for classical guitar duet', '2015', True, ["music"]],
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
		template = '<span class="pieceTitle"><a class="'+navLink+'" href="#!/'+cateogries[i]+'"  role="tab">'+cateogryNames[i]+'</a></span>\n'		
		if("SKIP" in cateogryNames[i]):
			continue
		bitsToPrint.append(template)
	bitsToPrint.append("<br><br>")
	prevDate=99999

	for i in range(len(data)):
		# print(data[i])
		if(catToGenerate == "everything" or catToGenerate in data[i][5]):
			if(data[i][3]!=prevDate):
				prevDate = data[i][3]
				bitsToPrint.append('<h1 class="title">'+str(data[i][3])+'</h1>')
			linkAddress = "#!/inprogress"
			kindOfLink = "not-ready-nav-link"
			if(data[i][4]):
				linkAddress = str(data[i][0])
				kindOfLink = "nav-link"
			linkRole =' role="tab"'
			if("#!/" not in linkAddress):
				linkRole = ""

			bitsToPrint.append('<span class="pieceTitle"><a class="'+kindOfLink+'" href="'+linkAddress+'" '+linkRole+'>'+str(data[i][1])+'</a></span>\n<span class="pieceInsturmentation">/ '+str(data[i][2])+'</span>\n<br>')
	# print(bitsToPrint)
	fd = open("pages/"+catToGenerate+".html",'w')
	fd.write("\n".join(bitsToPrint))
	fd.close()



