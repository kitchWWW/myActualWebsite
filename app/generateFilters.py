import os



data = [
	['#!/spliceworkshop','SPLICE Workshop','presentation', 2023, True, ["teaching"]],
	['#!/fishSchool','Fish School','interactive theater', 2023, False, ["music","creative coding","theater"]],
	['#!/groundwindow','Ground Window','video installation', 2023, False, ["creative coding","visual art"]],
	['#!/menu','MENU','flexible ensemble and video', 2023, True, ["music"]],
	['#!/cyberworm','Cyberworm','AR puppet', 2023, True, ["creative coding", "theater"]],
	['#!/uglycry','#UGLYCRY','deep fakes and AR', 2023, False, ["creative coding","theater"]],
	['#!/contactlite','Contact Lite','percussion quartet', 2023, False, ["music", "creative coding"]],
	['#!/thereandbackam','there and back A.M.','ambient music', 2023, True, ["music"]],
	['#!/musicThatSoundsGood','Music that sounds good','album', 2023, False, ["music"]],
	['#!/bmcde', 'Brooklyn Motion Capture Dance Ensemble', ' founder', '2022', False, []],
	['#!/WeGrowTogether', 'We Grow Together', ' dancers and audience', '2022', False, []],
	['#!/ten', 'Ten Water Events', ' dancer and live electronics', '2022', False, []],
	['#!/fromtheshells', 'From the shells...', ' 360 VR Sound Bath', '2022', True, []],
	['#!/chinatown', 'Chinatown: Homecoming', ' projection art', '2022', True, []],
	['#!/technecyborg', 'Techne Cyborg', ' concert series', '2022', True, []],
	['#!/technecyborgsolo', 'The Cyborg Thinks', ' solo performance', '2022', True, []],
	['#!/series1nft', 'Playing Data', ' nft collection', '2022', True, []],
	['#!/mgc', 'Margins Guitar Collective', ' solo recital', '2021', True, []],
	['#!/youtuber', 'To Make A Short Story Long', ' youtube dj-ing', '2021', True, []],
	['#!/emeraldfuturespostlude', 'Emerald Futures: Postlude', ' irl installation', '2021', True, []],
	['#!/someonesmoon', "Someone's Moon", ' mixed quartet', '2021', True, []],
	['#!/ambientdulcimer', 'Mountain Dulcimer', ' ambient music', '2021', True, []],
	['#!/sometitlesarewords', 'Some Titles Are Words', ' ar installation', '2021', True, []],
	['#!/tubeisyou', 'TUBE IS YOU', ' ar installation', '2021', True, []],
	['#!/sansduothree', 'SANS; duo', ' zoooooom!', '2021', True, []],
	['https://go.brianellissound.com/december1952/index.html', 'December 1952', ' web realization', '2021', True, []],
	['#!/whisper', 'Whisper Garden', ' irl installation', '2021', True, []],
	['#!/whisper', 'Extrapolations on a Vega Banjo', ' vr installation', '2021', True, []],
	['#!/paperandpen', 'Music for Paper & Pen', ' solo ritual', '2021', True, []],
	['#!/playground', 'Stay; ho(me)', ' vr installation', '2021', True, []],
	['#!/thisyear', 'This year alone...', ' collaborative improvisation', '2021', True, []],
	['#!/m4a', 'Music for Audiences', ' concert series', '2021', True, []],
	['#!/sansduotwo', 'SANS; duo', ' one year later!', '2021', True, []],
	['#!/breaking', 'breaking', ' clarinet solo', '2021', True, []],
	['#!/cgle', 'Classical Guitar + Electronics', ' call - apply now!', '2020', True, []],
	['#!/sightreadchristmas', 'Christmas Music', ' classical guitar', '2020', True, []],
	['https://sounds.pink', 'sounds.pink', ' tool for AI musical interfaces', '2020', True, []],
	['#!/wildthings', 'Wild Things', ' for the Subaerial Collective', '2020', True, []],
	['https://eartalk.org', 'Ear Talk', ' live group composition', '2020', True, []],
	['#!/shared', 'Shared Music', ' percussion trio & dance trio', '2020', True, []],
	['#!/nimb', 'No Input Mixing', ' live improvisation', '2020', True, []],
	['#!/zfest', 'Z Festival', ' performance, video editing, composition', '2020', True, []],
	['https://ar-guitar.com', 'AR-Guitar', ' an air guitar', '2020', True, []],
	['#!/nationwide', 'Nationwide Counterpoint', ' piano septet and voice', '2020', True, []],
	['#!/ideas', 'Ideas of Space', ' improvization ritual', '2020', True, []],
	['#!/covid', 'Obligatory COVID-19 Art', ' performance art', '2020', True, []],
	['#!/agendas', 'AGENDA(S) Project', ' live improvisation', '2020', True, []],
	['#!/sansduoone', 'SANS; duo', ' first concert', '2020', True, []],
	['#!/eeg', 'Serene Music', ' soloist + live electronics', '2020', True, []],
	['#!/battery', 'My Battery Is Low...', ' percussion + electronics', '2019', True, []],
	['https://songitude.com', 'Songitude', ' location based sound installations', '2019', True, []],
	['#!/earTraining', 'Ear Training For Non-Human Ears', ' album', '2019', True, []],
	['#!/alabama', 'Divining Alabama', ' violin + electronics', '2019', True, []],
	['#!/megsong', "Meg's Song", ' classical guitar + live electronics', '2019', True, []],
	['#!/wch', 'Who Comes Home', ' guided improvisation', '2019', True, []],
	['#!/thesis', 'Technology & Musical Agency', ' a thesis', '2019', True, []],
	['#!/asking', 'Asking For It', ' interactive installation', '2019', True, []],
	['#!/softMusic', 'Soft Music', ' for ensemble of voices', '2019', True, []],
	['#!/threenotes', 'Three Notes', ' for solo or ensemble', '2019', True, []],
	['#!/split', 'Split Music', ' for soloist + companion', '2018', True, []],
	['#!/planing', 'Planing in Five Parts', ' composition for Fixed Media', '2018', True, []],
	['#!/minimalismGuitar', 'Minimalism and the Guitar', ' solo concert performance', '2018', True, []],
	['#!/unset', 'UNSET 2.0', ' performative collaborative storytelling', '2018', True, []],
	['#!/fleet', 'Fleet', ' a collaboration among Ears, Eyes + Feet', '2018', True, []],
	['#!/smallMusic', 'Small Music', ' for soloist + live electronics', '2018', True, []],
	['#!/songsAndInterludes', 'Songs and Interludes', ' for large ensemble', '2017', True, []],
	['#!/songCycle', 'Song Cycle', ' composition for violin + typist', '2017', True, []],
	['#!/twoVoices', 'Counterpoint Visualization', ' after Tymoczko', '2017', True, []],
	['#!/genSon', 'Fresh Sonatas', ' program to generate short piano piece', '2017', True, []],
	['#!/reflections', 'Reflections', ' composition for solist', '2017', True, []],
	['#!/epoch', 'Epoch Music', ' composition for small ensemble', '2016', True, []],
	['#!/genMel', 'Melody Generator', ' define style and generate melody', '2016', True, []],
	['#!/departure', 'Departure', ' composition for classical guitar duet', '2015', True, []],
]

prevDate=99999

bitsToPrint = []
for i in range(len(data)):
	# print(data[i])
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
fd = open("pages/music.html",'w')
fd.write("\n".join(bitsToPrint))
fd.close()



