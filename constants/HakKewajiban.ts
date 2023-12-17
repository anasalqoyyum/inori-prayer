import HakKewajiban from '@/pages/hak-kewajiban'

export const HakUmum = [
	'Hak Ekonomi',
	'Hak Politik',
	'Hak Ikut Peperangan dan Mempertahankan',
	'Hak Obligasi',
	'Hak Keluarga',
	'Hak Hukum',
	'Hak Sosial',
]

export const HakKhusus = [
	'Hak Finansial: Pernikahan dan Tunjangan',
	'Hak Spiritual: Perilaku yang baik, Kesejahteraan, Pelayanan, dan Hak untuk hidup bersama ',
]

export const HakA = [
	'Hak dalam memberikan keperluan (Sandang, Pangan, Papan, dan memperlakukan baik)',
	'Hak Mahar',
	'Hak Nafkah',
	'Hak Waris',
]

export const HakB = ['Hak Waris']

export const HakC = [`Hak Shalat Berjama'ah`, `Hak Jima'`]

type HakKewajiban = {
	title: string
	content: string
	hadis: { title?: string; content: string; definition: string }[]
	subContent?: string[]
}

export const HakList: {
	title: string
	hadis: {
		title?: string
		content: string
		defintion: string
	}
}[] = [
	{
		title: 'Hak dalam memberikan keperluan (Sandang, Pangan, Papan, dan memperlakukan baik)',
		hadis: {
			title: 'Ibnu Majah no. 1850, bab Haq al-Maratu ‘ala Zaujiha.',
			content:
				'حَدَّثَنَا أَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ قَالَ: حَدَّثَنَا يَزِيدُ بْنُ هَارُونَ، عَنْ شُعْبَةَ، عَنْ أَبِي قَزْعَةَ، عَنْ حَكِيمِ بْنِ مُعَاوِيَةَ، عَنْ أَبِيهِ، أَنَّ رَجُلًا سَأَلَ النَّبِيَّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ مَا حَقُّ الْمَرْأَةِ عَلَى الزَّوْجِ؟ قَالَ: أَنْ يُطْعِمَهَا إِذَا طَعِمَ، وَأَنْ يَكْسُوَهَا إِذَا اكْتَسَى، وَلَا يَضْرِبِ الْوَجْهَ، وَلَا يُقَبِّحْ، وَلَا يَهْجُرْ إِلَّا فِي الْبَيْتِ',
			defintion: `Telah menceritakan kepada kami Abu Bakr bin Abu Syaibah berkata: telah menceritakan kepada kami Yazid bin Harun dari Syu'bah dari Abu Qaz'ah dari Hakim bin Mu'awiyah dari Bapaknya berkata: "Seorang laki-laki bertanya kepada Nabi shallallahu 'alaihi wa sallam, "Apa hak seorang wanita atas suaminya?" beliau menjawab: "Memberi makan kepadanya apabila dia makan, memberi pakaian apabila ia berpakaian, tidak memukul wajah, tidak menjelek-jelekkannya dan tidak boleh mendiamkannya kecuali di dalam rumah."`,
		},
	},
	{
		title: 'Hak Mahar',
		hadis: {
			title: 'Shahih Bukhari no. 5064 bab at-Targhibu fi an-Nikahi',
			content:
				'حَدَّثَنَا عَلِيٌّ، سَمِعَ حَسَّانَ بْنَ إِبْرَاهِيمَ، عَنْ يُونُسَ بْنِ يَزِيدَ، عَنِ الزُّهْرِيِّ، قَالَ: أَخْبَرَنِي عُرْوَةُ، أَنَّهُ سَأَلَ عَائِشَةَ عَنْ قَوْلِهِ تَعَالَى: {وَإِنْ خِفْتُمْ أَلَّا تُقْسِطُوا فِي اليَتَامَى فَانْكِحُوا مَا طَابَ لَكُمْ مِنَ النِّسَاءِ مَثْنَى وَثُلاَثَ وَرُبَاعَ، فَإِنْ خِفْتُمْ أَلَّا تَعْدِلُوا فَوَاحِدَةً أَوْ مَا مَلَكَتْ أَيْمَانُكُمْ ذَلِكَ أَدْنَى أَلَّا تَعُولُوا} [النساء: 3] قَالَتْ: «يَا ابْنَ أُخْتِي اليَتِيمَةُ، تَكُونُ فِي حَجْرِ وَلِيِّهَا فَيَرْغَبُ فِي [ص:3] مَالِهَا وَجَمَالِهَا، يُرِيدُ أَنْ يَتَزَوَّجَهَا بِأَدْنَى مِنْ سُنَّةِ صَدَاقِهَا، فَنُهُوا أَنْ يَنْكِحُوهُنَّ إِلَّا أَنْ يُقْسِطُوا لَهُنَّ، فَيُكْمِلُوا الصَّدَاقَ، وَأُمِرُوا بِنِكَاحِ مَنْ سِوَاهُنَّ مِنَ النِّسَاءِ»',
			defintion: `Telah menceritakan kepada kami Ali Ia telah mendengar Hassan bin Ibrahim dari Yunus bin Yazid dari Az Zuhri ia berkata: Telah mengabarkan kepadaku Urwah bahwa Dia bertanya kepada 'Aisyah tentang firman Allah Ta'ala: {Dan jika kalian khawatir tidak bisa berlaku adil terhadap anak yatim, maka nikahilah wanita yang baik-baik, dua, tiga, atau empat, jika kalian tidak bisa berlaku adil, maka kawinilah satu saja, atau hamba sahaya kalian, itu lebih dekat agar kalian tidak melanggar batas} (QS. An Nisaa': 3). Maka 'Aisyah menjelaskan: "Wahai anak saudaraku, maksudnya adalah seorang anak perempuan yatim bertempat tinggal di rumah walinya. Lalu ia pun menginginkan harta dan juga kecantikannya. Ia ingin menikahinya dengan mahar yang sedikit, maka mereka dilarang untuk menikahinya kecuali mereka dapat berbuat adil terhadap mereka dan menyempurnakan mahar. Karena itu, mereka diperintahkan untuk menikahi wanita-wanita selain mereka."`,
		},
	},
	{
		title: 'Hak Nafkah',
		hadis: {
			title:
				'Shahih Bukhari no. 56, bab Bahwa Amalan-Amalan itu Tergantung niat dan tujuannya, serta setiap orang akan mendapatkan sesuai yang diniatkannya.',
			content:
				'دَّثَنَا الحَكَمُ بْنُ نَافِعٍ، قَالَ: أَخْبَرَنَا شُعَيْبٌ، عَنِ الزُّهْرِيِّ، قَالَ: حَدَّثَنِي عَامِرُ بْنُ سَعْدٍ، عَنْ سَعْدِ بْنِ أَبِي وَقَّاصٍ، أَنَّهُ أَخْبَرَهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: «إِنَّكَ لَنْ تُنْفِقَ نَفَقَةً تَبْتَغِي بِهَا وَجْهَ اللَّهِ إِلَّا أُجِرْتَ عَلَيْهَا، حَتَّى مَا تَجْعَلُ فِي فَمِ امْرَأَتِكَ»',
			defintion: `Telah menceritakan kepada kami Al Hakam bin Nafi' berkata: telah mengabarkan kepada kami Syu'aib dari Az Zuhri berkata: telah menceritakan kepadaku 'Amir bin Sa'd dari Sa'd bin Abu Waqash bahwasanya dia mengabarkan, bahwa Rasulullah shallallahu 'alaihi wa sallam bersabda: "Sesungguhnya, tidaklah kamu menafkahkan suatu nafkah yang dimaksudkan mengharap wajah Allah kecuali kamu akan diberi pahala termasuk sesuatu yang kamu suapkan ke mulut istrimu."`,
		},
	},
	{
		title: 'Hak Waris',
		hadis: {
			title:
				'Dalam kitab Kifayatul Akhyar fi Halli Ghayat al-Ikhtishar  karya Abu Bakr bin Muhammad al-Husaini dalam kitabnya. beliau memaparkan kewajiban perempuan sebagaimana pada hadis Shahih Bukhari no. 6732, bab Miratsu Alwalidu min abihi wa umihi, sebagai berikut: ',
			content:
				'حَدَّثَنَا مُوسَى بْنُ إِسْمَاعِيلَ، حَدَّثَنَا وُهَيْبٌ، حَدَّثَنَا ابْنُ طَاوُسٍ، عَنْ أَبِيهِ، عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا، عَنِ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: «أَلْحِقُوا الفَرَائِضَ بِأَهْلِهَا، فَمَا بَقِيَ فَهُوَ لِأَوْلَى رَجُلٍ ذَكَرٍ»',
			defintion: `Telah menceritakan kepada kami Musa bin Isma'il telah menceritakan kepada kami Wuhaib telah menceritakan kepada kami Ibnu Thawus dari ayahnya dari Ibnu 'Abbas radliallahu 'anhuma, dari Nabi shallallahu 'alaihi wa sallam bersabda: "Berikanlah bagian fara'idh (warisan yang telah ditetapkan) kepada yang berhak, maka bagian yang tersisa bagi pewaris lelaki yang paling dekat (nasabnya)."`,
		},
	},
]

export const KewajibanList: HakKewajiban[] = [
	{
		title: 'Kewajiban taat kepada Allah',
		content:
			'Melaksanakan apa yang diperintahkan dan menjauhi apa yang dilarang, Sebagaimana pada hadis riwayat Sunan Ibnu Majah no. 1 bab min kitabun al-mauqi’u ar-rasimiy berbunyi:',
		hadis: [
			{
				content:
					'حَدَّثَنَا أَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ، قَالَ: حَدَّثَنَا شَرِيكٌ، عَنِ الْأَعْمَشِ، عَنْ أَبِي صَالِحٍ، عَنْ أَبِي هُرَيْرَةَ، قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: «مَا أَمَرْتُكُمْ بِهِ فَخُذُوهُ، وَمَا نَهَيْتُكُمْ عَنْهُ فَانْتَهُوا',
				definition: `Telah menceritakan kepada kami Abu Bakar bin Abu Syaibah berkata: telah menceritakan kepada kami Syarik dari Al A'masy dari Abu Shalih dari Abu Hurairah ia berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda: "Apa yang aku perintahkan maka ambillah, dan apa yang aku larang maka tinggalkanlah."`,
			},
		],
	},
	{
		title: 'Kewajiban sebagai istri suami',
		content:
			'Kewajiban sebagai istri untuk suami seperti memenuhi kebutuhan suami, memakai, wewangian untuk suami, menghormati kerabat serta keluarganya mencari ridha suami, dan menjaga harta suami. sebagaimana pada riwayat:',
		hadis: [
			{
				title: 'Musnad Ahmad no. 1661 bab Musnad Abdurrahman bin ‘Auf al-Zahiriy r.a., berbunyi:',
				content:
					'حَدَّثَنَا يَحْيَى بْنُ إِسْحَاقَ، حَدَّثَنَا ابْنُ لَهِيعَةَ، عَنْ عُبَيْدِ اللهِ بْنِ أَبِي جَعْفَرٍ، أَنَّ ابْنَ قَارِظٍ، أَخْبَرَهُ عَنْ عَبْدِ الرَّحْمَنِ بْنِ عَوْفٍ، قَالَ: قَالَ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: " إِذَا صَلَّتِ الْمَرْأَةُ خَمْسَهَا، وَصَامَتْ شَهْرَهَا، وَحَفِظَتْ فَرْجَهَا، وَأَطَاعَتْ زَوْجَهَا قِيلَ لَهَا: ادْخُلِي الْجَنَّةَ مِنْ أَيِّ أَبْوَابِ الْجَنَّةِ شِئْتِ"',
				definition: `Telah menceritakan kepada kami Yahya bin Ishaq telah menceritakan kepada kami ibnu Lahi’ah dari Abdullah bin Abi Ja’far sesungguhnya ibnu Qaridh, saudaranya dari Abdurrahman bin Auf berkata : Nabi Muhammad saw bersabda: “jika seorang wanita menunaikan shalat lima waktu, berpuasa di bulan Ramadhan, menjaga kemaluannya dan menaati suaminya, niscaya akan dikatakan kepadanya: “masuklah kedalam surga dari pintu manapun yang kamu mau”`,
			},
			{
				title: 'Shahih Bukhari:5188, bab Firman Allah Ta’alaa : (Jagalah dirimu dan keluargamu dari api neraka)',
				content:
					'حَدَّثَنَا أَبُو النُّعْمَانِ حَدَّثَنَا حَمَّادُ بْنُ زَيْدٍ عَنْ أَيُّوبَ عَنْ نَافِعٍ عَنْ عَبْدِ اللَّهِ قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ فَالْإِمَامُ رَاعٍ وَهُوَ مَسْئُولٌ وَالرَّجُلُ رَاعٍ عَلَى أَهْلِهِ وَهُوَ مَسْئُولٌ وَالْمَرْأَةُ رَاعِيَةٌ عَلَى بَيْتِ زَوْجِهَا وَهِيَ مَسْئُولَةٌ وَالْعَبْدُ رَاعٍ عَلَى مَالِ سَيِّدِهِ وَهُوَ مَسْئُولٌ أَلَا فَكُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ',
				definition: `Telah menceritakan kepada kami Abu Nu'man Telah menceritakan kepada kami Hammad bin Zaid dari Ayyub dari Nafi' dari Abdullah ia berkata: Nabi shallallahu 'alaihi wa sallam bersabda: "Setiap kalian adalah pemimpin, dan setiap kalian akan dimintai pertanggungjawabannya. Seorang laki-laki adalah pemimpin atas keluarganya dan ia akan dimintai pertanggungjawabannya. Seorang wanita adalah pemimpin atas rumah suaminya, dan ia pun akan dimintai pertanggung jawabannya. Dan seorang budak juga pemimpin atas harta tuannya dan ia juga akan dimintai pertanggung jawabannya. Sungguh setiap kalian adalah pemimpin dan setiap kalian akan dimintai pertanggung jawabannya."`,
			},
		],
	},
	{
		title: 'Kewajiban sebagai ibu bagi anak-anak',
		content:
			'Kewajiban sebagai ibu bagi anak-anaknya seperti mendidik anak, menyayangi anak., tidak dibentak, dll. Sebagaimana riwayat Musnad Ahmad no. 12593 bab Anas bin Malik r.a, berbunyi: ',
		hadis: [
			{
				content:
					'حَدَّثَنَا يُونُسُ، حَدَّثَنَا مُحَمَّدُ بْنُ زِيَادٍ الْبُرْجُمِيُّ، قَالَ: سَمِعْتُ ثَابِتًا الْبُنَانِيَّ يُحَدِّثُ، عَنْ أَنَسِ بْنِ مَالِكٍ قَالَ: قَالَ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: " مَنْ كَانَ لَهُ ثَلَاثُ بَنَاتٍ، أَوْ ثَلَاثُ أَخَوَاتٍ، اتَّقَى اللهَ وَأَقَامَ عَلَيْهِنَّ، كَانَ مَعِي فِي الْجَنَّةِ هَكَذَا " وَأَشَارَ بِأَصَابِعِهِ الْأَرْبَعِ',
				definition: `Telah menceritakan kepada kami Yunus telah menceritakan kepada kami Muhammad bin Ziyad al-Burjumi berkata: saya telah mendengar Tsabit al-Bunani menceritakan dari Anas bin Malik berkata: Rasulullah Shallallahu'alaihi wa Sallam bersabda: "Barang siapa memiliki tiga anak atau tiga saudara perempuan yang bertakwa kepada Allah 'azza wajalla, dan ia memberi nafkah dan mendidik mereka, maka dia berada bersamaku di surga seperti ini", dan beliau Rasulullah Shallallahu'alaihi wa Sallam mendemonstrasikan dengan keempat jarinya.`,
			},
		],
	},
]

// FIXME: DELETE ABOVE, After Revisi
export const HakSuamiTerhadapIstri: HakKewajiban[] = [
	{
		title: 'Hak Mendapatkan Perlakuan Baik',
		content: `Dalam kitab ini KH. Hasyim Asy'ari menjelaskan bahwa seorang istri berhak untuk mendapatkan  perlakuan baik dari sang Suami, tidak boleh menjelek-jelekan istri, tidak boleh memukul istri, dll.  Sebagaimana seperti pada hadis Nabi di bawah ini: Ibnu Majah no. 1850, bab Haq al-Maratu ‘ala Zaujiha.`,
		hadis: [
			{
				content:
					'حَدَّثَنَا أَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ قَالَ: حَدَّثَنَا يَزِيدُ بْنُ هَارُونَ، عَنْ شُعْبَةَ، عَنْ أَبِي قَزْعَةَ، عَنْ حَكِيمِ بْنِ مُعَاوِيَةَ، عَنْ أَبِيهِ، أَنَّ رَجُلًا سَأَلَ النَّبِيَّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ مَا حَقُّ الْمَرْأَةِ عَلَى الزَّوْجِ؟ قَالَ: أَنْ يُطْعِمَهَا إِذَا طَعِمَ، وَأَنْ يَكْسُوَهَا إِذَا اكْتَسَى، وَلَا يَضْرِبِ الْوَجْهَ، وَلَا يُقَبِّحْ، وَلَا يَهْجُرْ إِلَّا فِي الْبَيْتِ',
				definition: `Telah menceritakan kepada kami Abu Bakr bin Abu Syaibah berkata: telah menceritakan kepada kami Yazid bin Harun dari Syu'bah dari Abu Qaz'ah dari Hakim bin Mu'awiyah dari Bapaknya berkata: "Seorang laki-laki bertanya kepada Nabi shallallahu 'alaihi wa sallam, "Apa hak seorang wanita atas suaminya?" beliau menjawab: "Memberi makan kepadanya apabila dia makan, memberi pakaian apabila ia berpakaian, tidak memukul wajah, tidak menjelek-jelekkannya dan tidak boleh mendiamkannya kecuali di dalam rumah."`,
			},
		],
	},
	{
		title: 'Hak Mahar',
		content: `Dalam kitab ini KH. Hasyim Asy'ari menjelaskan bahwa istri berhak mendapatkan mahar dari suaminya. Mahar merupakan hak mutlak seorang wanita yang dinikahi dengan penuh kerelaan.  Berikut merupakan hadis seorang istri berhak mendapatkan hak mahar dari suami pada hadis riwayat Shahih Bukhari no. 5064 bab at-Targhibu fi an-Nikahi `,
		hadis: [
			{
				content:
					' حَدَّثَنَا عَلِيٌّ، سَمِعَ حَسَّانَ بْنَ إِبْرَاهِيمَ، عَنْ يُونُسَ بْنِ يَزِيدَ، عَنِ الزُّهْرِيِّ، قَالَ: أَخْبَرَنِي عُرْوَةُ، أَنَّهُ سَأَلَ عَائِشَةَ عَنْ قَوْلِهِ تَعَالَى: {وَإِنْ خِفْتُمْ أَلَّا تُقْسِطُوا فِي اليَتَامَى فَانْكِحُوا مَا طَابَ لَكُمْ مِنَ النِّسَاءِ مَثْنَى وَثُلاَثَ وَرُبَاعَ، فَإِنْ خِفْتُمْ أَلَّا تَعْدِلُوا فَوَاحِدَةً أَوْ مَا مَلَكَتْ أَيْمَانُكُمْ ذَلِكَ أَدْنَى أَلَّا تَعُولُوا} [النساء: 3] قَالَتْ: «يَا ابْنَ أُخْتِي اليَتِيمَةُ، تَكُونُ فِي حَجْرِ وَلِيِّهَا فَيَرْغَبُ فِي [ص:3] مَالِهَا وَجَمَالِهَا، يُرِيدُ أَنْ يَتَزَوَّجَهَا بِأَدْنَى مِنْ سُنَّةِ صَدَاقِهَا، فَنُهُوا أَنْ يَنْكِحُوهُنَّ إِلَّا أَنْ يُقْسِطُوا لَهُنَّ، فَيُكْمِلُوا الصَّدَاقَ، وَأُمِرُوا بِنِكَاحِ مَنْ سِوَاهُنَّ مِنَ النِّسَاءِ',
				definition: `Telah menceritakan kepada kami Ali Ia telah mendengar Hassan bin Ibrahim dari Yunus bin Yazid dari Az Zuhri ia berkata: Telah mengabarkan kepadaku Urwah bahwa Dia bertanya kepada 'Aisyah tentang firman Allah Ta'ala: {Dan jika kalian khawatir tidak bisa berlaku adil terhadap anak yatim, maka nikahilah wanita yang baik-baik, dua, tiga, atau empat, jika kalian tidak bisa berlaku adil, maka kawinilah satu saja, atau hamba sahaya kalian, itu lebih dekat agar kalian tidak melanggar batas} (QS. An Nisaa': 3). Maka 'Aisyah menjelaskan: "Wahai anak saudaraku, maksudnya adalah seorang anak perempuan yatim bertempat tinggal di rumah walinya. Lalu ia pun menginginkan harta dan juga kecantikannya. Ia ingin menikahinya dengan mahar yang sedikit, maka mereka dilarang untuk menikahinya kecuali mereka dapat berbuat adil terhadap mereka dan menyempurnakan mahar. Karena itu, mereka diperintahkan untuk menikahi wanita-wanita selain mereka."`,
			},
		],
	},
	{
		title: 'Hak Nafkah',
		content: `Nafkah yang diberikan istri dari suami berupa nafkah batin maupun lahir seperti makan dan minum, pakaian dan hingga tempat tinggal walaupun istri kaya maupun miskin. Berikut merupakan hadis seorang istri berhak mendapatkan hak nafkah dari suami pada hadis riwayat Shahih Bukhari no. 56, bab Bahwa Amalan-Amalan itu Tergantung niat dan tujuannya, serta setiap orang akan mendapatkan sesuai yang diniatkannya.`,
		hadis: [
			{
				content:
					'دَّثَنَا الحَكَمُ بْنُ نَافِعٍ، قَالَ: أَخْبَرَنَا شُعَيْبٌ، عَنِ الزُّهْرِيِّ، قَالَ: حَدَّثَنِي عَامِرُ بْنُ سَعْدٍ، عَنْ سَعْدِ بْنِ أَبِي وَقَّاصٍ، أَنَّهُ أَخْبَرَهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: «إِنَّكَ لَنْ تُنْفِقَ نَفَقَةً تَبْتَغِي بِهَا وَجْهَ اللَّهِ إِلَّا أُجِرْتَ عَلَيْهَا، حَتَّى مَا تَجْعَلُ فِي فَمِ امْرَأَتِكَ',
				definition: `Telah menceritakan kepada kami Al Hakam bin Nafi' berkata: telah mengabarkan kepada kami Syu'aib dari Az Zuhri berkata: telah menceritakan kepadaku 'Amir bin Sa'd dari Sa'd bin Abu Waqash bahwasanya dia mengabarkan, bahwa Rasulullah shallallahu 'alaihi wa sallam bersabda: "Sesungguhnya, tidaklah kamu menafkahkan suatu nafkah yang dimaksudkan mengharap wajah Allah kecuali kamu akan diberi pahala termasuk sesuatu yang kamu suapkan ke mulut istrimu."`,
			},
		],
	},
	{
		title: 'Mendapatkan bimbingan dari suami agar selalu taat kepada Allah',
		content: `Seorang Istri wajib untuk taat kepada Allah, melakukan segala perintah Allah dan menjauhi segala larangan yang diberikan. Sebagaimana pada hadis riwayat Sunan Ibnu Majah no. 1 bab min kitabun al-mauqi’u ar-rasimiy berbunyi:`,
		hadis: [
			{
				content:
					'حَدَّثَنَا أَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ، قَالَ: حَدَّثَنَا شَرِيكٌ، عَنِ الْأَعْمَشِ، عَنْ أَبِي صَالِحٍ، عَنْ أَبِي هُرَيْرَةَ، قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: «مَا أَمَرْتُكُمْ بِهِ فَخُذُوهُ، وَمَا نَهَيْتُكُمْ عَنْهُ فَانْتَهُوا',
				definition: `Telah menceritakan kepada kami Abu Bakar bin Abu Syaibah berkata: telah menceritakan kepada kami Syarik dari Al A'masy dari Abu Shalih dari Abu Hurairah ia berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda: "Apa yang aku perintahkan maka ambillah, dan apa yang aku larang maka tinggalkanlah."`,
			},
		],
	},
	{
		title: 'Mendapat perlakuan adil',
		content: `Seorang suami harus mampu untuk berlaku adil kepada istrinya sebagaimana pada hadi Nabi riwayat Shahih Bukhari no 4573:`,
		hadis: [
			{
				content:
					'حَدَّثَنَا إِبْرَاهِيمُ بْنُ مُوسَى أَخْبَرَنَا هِشَامٌ عَنْ ابْنِ جُرَيْجٍ قَالَ أَخْبَرَنِي هِشَامُ بْنُ عُرْوَةَ عَنْ أَبِيهِ عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْه	أَنَّ رَجُلًا كَانَتْ لَهُ يَتِيمَةٌ فَنَكَحَهَا وَكَانَ لَهَا عَذْقٌ وَكَانَ يُمْسِكُهَا عَلَيْهِ وَلَمْ يَكُنْ لَهَا مِنْ نَفْسِهِ شَيْءٌ فَنَزَلَتْ فِيهِ{ وَإِنْ خِفْتُمْ أَنْ لَا تُقْسِطُوا فِي الْيَتَامَى } أَحْسِبُهُ قَالَ كَانَتْ شَرِيكَتَهُ فِي ذَلِكَ الْعَذْقِ وَفِي مَالِهِ',
				definition: `Telah menceritakan kepada kami Ibrahim bin Musa Telah mengabarkan kepada kami Hisyam dari Ibnu Juraij berkata: Telah mengabarkan kepadaku Hisyam bin 'Urwah dari Bapaknya dari 'Aisyah radliyallahu 'anha bahwa Seorang laki-laki memiliki seorang wanita yatim. Lalu dia menikahinya karena wanita itu memiliki kebun kurma. Hingga dia disuruh menjaga kebun itu yang sebenarnya dia tidak mencintai wanita itu. Maka turunlah ayat: (Dan jika kamu takut tidak akan dapat berlaku adil terhadap (hak-hak) perempuan yang yatim bilamana kamu mengawininya) (QS. An Nisa: 3). Aku mengira Hisyam berkata: Wanita itu dia sertakan dalam mengurus kebun kurma dan hartanya.`,
			},
		],
	},
]

export const HakIstriTerhadapSuami: HakKewajiban[] = [
	{
		title: 'Istri Wajib Mentaati segala hal yang diperintahkan oleh suami',
		content: `Sebagaimana pada hadis riwayat Abu Dawud no 1828:`,
		hadis: [
			{
				content:
					'حَدَّثَنَا عَمْرُو بْنُ عَوْنٍ أَخْبَرَنَا إِسْحَقُ بْنُ يُوسُفَ عَنْ شَرِيكٍ عَنْ حُصَيْنٍ عَنْ الشَّعْبِيِّ عَنْ قَيْسِ بْنِ سَعْدٍ قَالَ أَتَيْتُ الْحِيرَةَ فَرَأَيْتُهُمْ يَسْجُدُونَ لِمَرْزُبَانٍ لَهُمْ فَقُلْتُ رَسُولُ اللَّهِ أَحَقُّ أَنْ يُسْجَدَ لَهُ قَالَ فَأَتَيْتُ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقُلْتُ إِنِّي أَتَيْتُ الْحِيرَةَ فَرَأَيْتُهُمْ يَسْجُدُونَ لِمَرْزُبَانٍ لَهُمْ فَأَنْتَ يَا رَسُولَ اللَّهِ أَحَقُّ أَنْ نَسْجُدَ لَكَ قَالَ أَرَأَيْتَ لَوْ مَرَرْتَ بِقَبْرِي أَكُنْتَ تَسْجُدُ لَهُ قَالَ قُلْتُ لَا قَالَ فَلَا تَفْعَلُوا لَوْ كُنْتُ آمِرًا أَحَدًا أَنْ يَسْجُدَ لِأَحَدٍ لَأَمَرْتُ النِّسَاءَ أَنْ يَسْجُدْنَ لِأَزْوَاجِهِنَّ لِمَا جَعَلَ اللَّهُ لَهُمْ عَلَيْهِنَّ مِنْ الْحَقِّ',
				definition: `Telah menceritakan kepada kami 'Amr bin 'Aun, telah mengabarkan kepada kami Ishaq bin Yusuf dari Syarik, dari Hushain, dari Asy Sya'bi dari Qais bin Sa'd, ia berkata: Aku datang ke Al Hirah (negeri lama yang berada di Kufah), maka aku melihat mereka bersujud kepada penunggang kuda mereka yang pemberani. Lalu aku katakan: Rasulullah shallallahu 'alaihi wa sallam lebih berhak untuk dilakukan sujud kepadanya. Qais bin Sa'd berkata: Kemudian aku datang kepada Nabi shallallahu 'alaihi wa sallam dan aku katakan: "Sesungguhnya aku datang ke Al Hirah dan aku melihat mereka bersujud kepada penunggang kuda mereka yang pemberani. Engkau wahai Rasulullah, lebih berhak untuk kami bersujud kepadamu." Beliau berkata: "Bagaimana pendapatmu, seandainya engkau melewati kuburan ku, apakah engkau akan bersujud kepadanya?" Qais bin Sa'd berkata: Aku katakan: "Tidak." Beliau bersabda: "Jangan kalian lakukan, seandainya aku boleh memerintahkan seseorang untuk bersujud kepada seseorang, niscaya aku perintahkan para wanita agar bersujud kepada suami-suami mereka, karena hak yang telah Allah berikan atas mereka."`,
			},
		],
	},
	{
		title: 'Istri tidak boleh berpuasa sunnah kecuali seizin suami',
		content: `Segala sesuatu hal yang akan dilakukan oleh istri harus sesuai dengan izin suami sebagaimana pada hadis riwayat musnad Ahmad : 9734`,
		hadis: [
			{
				content:
					'حَدَّثَنَا وَكِيعٌ وَعَبْدُ الرَّحْمَنِ عَنْ سُفْيَانَ عَنْ أَبِي الزِّنَادِ عَنْ مُوسَى بْنِ أَبِي عُثْمَانَ عَنْ أَبِيهِ عَنْ أَبِي هُرَيْرَةَ قَالَ	قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لَا تَصُمْ الْمَرْأَةُ يَوْمًا وَاحِدًا وَزَوْجُهَا شَاهِدٌ إِلَّا بِإِذْنِهِ قَالَ وَكِيعٌ إِلَّا رَمَضَانَ',
				definition: `Telah menceritakan kepada kami Waki' dan Abdurrahman dari Sufyan dari Abu Az Zinad dari Musa bin Abi Utsman dari bapaknya dari Abu Hurairah berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda: "Janganlah seorang istri berpuasa sehari penuh ketika ada suaminya kecuali dengan izinnya." Waki' menyebutkan, "Kecuali pada bulan Ramadhan."`,
			},
		],
	},
]

export const KewajibanIstriTerhadapSuami: HakKewajiban[] = [
	{
		title: 'Kewajiban Taat Kepada Suami',
		content: `Kewajiban menaati suami adalah perintah Allah SWT. karena dalam rumah tangga seorang suami adalah kepala keluarga yang harus didengar dan ditaati selama dalam batas kebaikan dan sesuai dengan ajaran Islam , Sebagaimana pada hadis riwayat Abu Dawud no 1828`,
		hadis: [
			{
				content:
					'حَدَّثَنَا عَمْرُو بْنُ عَوْنٍ أَخْبَرَنَا إِسْحَقُ بْنُ يُوسُفَ عَنْ شَرِيكٍ عَنْ حُصَيْنٍ عَنْ الشَّعْبِيِّ عَنْ قَيْسِ بْنِ سَعْدٍ قَالَ أَتَيْتُ الْحِيرَةَ فَرَأَيْتُهُمْ يَسْجُدُونَ لِمَرْزُبَانٍ لَهُمْ فَقُلْتُ رَسُولُ اللَّهِ أَحَقُّ أَنْ يُسْجَدَ لَهُ قَالَ فَأَتَيْتُ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقُلْتُ إِنِّي أَتَيْتُ الْحِيرَةَ فَرَأَيْتُهُمْ يَسْجُدُونَ لِمَرْزُبَانٍ لَهُمْ فَأَنْتَ يَا رَسُولَ اللَّهِ أَحَقُّ أَنْ نَسْجُدَ لَكَ قَالَ أَرَأَيْتَ لَوْ مَرَرْتَ بِقَبْرِي أَكُنْتَ تَسْجُدُ لَهُ قَالَ قُلْتُ لَا قَالَ فَلَا تَفْعَلُوا لَوْ كُنْتُ آمِرًا أَحَدًا أَنْ يَسْجُدَ لِأَحَدٍ لَأَمَرْتُ النِّسَاءَ أَنْ يَسْجُدْنَ لِأَزْوَاجِهِنَّ لِمَا جَعَلَ اللَّهُ لَهُمْ عَلَيْهِنَّ مِنْ الْحَقِّ',
				definition: `Telah menceritakan kepada kami 'Amr bin 'Aun, telah mengabarkan kepada kami Ishaq bin Yusuf dari Syarik, dari Hushain, dari Asy Sya'bi dari Qais bin Sa'd, ia berkata: Aku datang ke Al Hirah (negeri lama yang berada di Kufah), maka aku melihat mereka bersujud kepada penunggang kuda mereka yang pemberani. Lalu aku katakan: Rasulullah shallallahu 'alaihi wa sallam lebih berhak untuk dilakukan sujud kepadanya. Qais bin Sa'd berkata: Kemudian aku datang kepada Nabi shallallahu 'alaihi wa sallam dan aku katakan: "Sesungguhnya aku datang ke Al Hirah dan aku melihat mereka bersujud kepada penunggang kuda mereka yang pemberani. Engkau wahai Rasulullah, lebih berhak untuk kami bersujud kepadamu." Beliau berkata: "Bagaimana pendapatmu, seandainya engkau melewati kuburan ku, apakah engkau akan bersujud kepadanya?" Qais bin Sa'd berkata: Aku katakan: "Tidak." Beliau bersabda: "Jangan kalian lakukan, seandainya aku boleh memerintahkan seseorang untuk bersujud kepada seseorang, niscaya aku perintahkan para wanita agar bersujud kepada suami-suami mereka, karena hak yang telah Allah berikan atas mereka."`,
			},
		],
	},
	{
		title: 'Bersikap Ridha dan Syukur Pada Suami',
		content: `Kewajiban sebagai istri untuk suami seperti memenuhi kebutuhan suami, memakai, wewangian untuk suami, menghormati kerabat serta keluarganya mencari ridha suami, dan menjaga harta suami. sebagaimana pada riwayat: Musnad Ahmad no. 1661 bab Musnad Abdurrahman bin ‘Auf al-Zahiriy r.a., berbunyi:`,
		hadis: [
			{
				content:
					'حَدَّثَنَا يَحْيَى بْنُ إِسْحَاقَ، حَدَّثَنَا ابْنُ لَهِيعَةَ، عَنْ عُبَيْدِ اللهِ بْنِ أَبِي جَعْفَرٍ، أَنَّ ابْنَ قَارِظٍ، أَخْبَرَهُ عَنْ عَبْدِ الرَّحْمَنِ بْنِ عَوْفٍ، قَالَ: قَالَ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: " إِذَا صَلَّتِ الْمَرْأَةُ خَمْسَهَا، وَصَامَتْ شَهْرَهَا، وَحَفِظَتْ فَرْجَهَا، وَأَطَاعَتْ زَوْجَهَا قِيلَ لَهَا: ادْخُلِي الْجَنَّةَ مِنْ أَيِّ أَبْوَابِ الْجَنَّةِ شِئْتِ "',
				definition: `Telah menceritakan kepada kami Yahya bin Ishaq telah menceritakan kepada kami ibnu Lahi’ah dari Abdullah bin Abi Ja’far sesungguhnya ibnu Qaridh, saudaranya dari Abdurrahman bin Auf berkata : Nabi Muhammad saw bersabda: “jika seorang wanita menunaikan shalat lima waktu, berpuasa di bulan Ramadhan, menjaga kemaluannya dan menaati suaminya, niscaya akan dikatakan kepadanya: “masuklah kedalam surga dari pintu manapun yang kamu mau”`,
			},
		],
	},
	{
		title: 'Kewajiban Mengurus dan Mengatur Rumah Tangga',
		content: `Sebagaimana diketahui bahwa seorang istri memiliki tanggung jawab untuk mengurus segala hal dan mengatur rumah tangga. Entah itu untuk anaknya, suaminya ataupun dirinya sendiri. Berikut hadis mengenai tanggung jawab seorang istri yaitu Shahih Bukhari : 5188, bab Firman Allah Ta’alaa : (Jagalah dirimu dan keluargamu dari api neraka)`,
		hadis: [
			{
				content:
					'حَدَّثَنَا أَبُو النُّعْمَانِ حَدَّثَنَا حَمَّادُ بْنُ زَيْدٍ عَنْ أَيُّوبَ عَنْ نَافِعٍ عَنْ عَبْدِ اللَّهِ قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ فَالْإِمَامُ رَاعٍ وَهُوَ مَسْئُولٌ وَالرَّجُلُ رَاعٍ عَلَى أَهْلِهِ وَهُوَ مَسْئُولٌ وَالْمَرْأَةُ رَاعِيَةٌ عَلَى بَيْتِ زَوْجِهَا وَهِيَ مَسْئُولَةٌ وَالْعَبْدُ رَاعٍ عَلَى مَالِ سَيِّدِهِ وَهُوَ مَسْئُولٌ أَلَا فَكُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ',
				definition: `Telah menceritakan kepada kami Abu Nu'man Telah menceritakan kepada kami Hammad bin Zaid dari Ayyub dari Nafi' dari Abdullah ia berkata: Nabi shallallahu 'alaihi wa sallam bersabda: "Setiap kalian adalah pemimpin, dan setiap kalian akan dimintai pertanggungjawabannya. Seorang laki-laki adalah pemimpin atas keluarganya dan ia akan dimintai pertanggungjawabannya. Seorang wanita adalah pemimpin atas rumah suaminya, dan ia pun akan dimintai pertanggung jawabannya. Dan seorang budak juga pemimpin atas harta tuannya dan ia juga akan dimintai pertanggung jawabannya. Sungguh setiap kalian adalah pemimpin dan setiap kalian akan dimintai pertanggung jawabannya."`,
			},
		],
	},
	{
		title: 'Kewajiban Memelihara dan Mendidik Anak',
		content: `Kewajiban sebagai ibu bagi anak-anaknya seperti mendidik anak, menyayangi anak., tidak dibentak, dll. Sebagaimana riwayat Musnad Ahmad no. 12593 bab Anas bin Malik r.a, berbunyi:`,
		hadis: [
			{
				content:
					'حَدَّثَنَا يُونُسُ، حَدَّثَنَا مُحَمَّدُ بْنُ زِيَادٍ الْبُرْجُمِيُّ، قَالَ: سَمِعْتُ ثَابِتًا الْبُنَانِيَّ يُحَدِّثُ، عَنْ أَنَسِ بْنِ مَالِكٍ قَالَ: قَالَ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: " مَنْ كَانَ لَهُ ثَلَاثُ بَنَاتٍ، أَوْ ثَلَاثُ أَخَوَاتٍ، اتَّقَى اللهَ وَأَقَامَ عَلَيْهِنَّ، كَانَ مَعِي فِي الْجَنَّةِ هَكَذَا " وَأَشَارَ بِأَصَابِعِهِ الْأَرْبَعِ',
				definition: `Telah menceritakan kepada kami Yunus telah menceritakan kepada kami Muhammad bin Ziyad al-Burjumi berkata: saya telah mendengar Tsabit al-Bunani menceritakan dari Anas bin Malik berkata: Rasulullah Shallallahu'alaihi wa Sallam bersabda: "Barangsiapa memiliki tiga anak atau tiga saudara perempuan yang bertakwa kepada Allah 'azza wa jalla, dan ia memberi nafkah dan mendidik mereka, maka dia berada bersamaku di surga seperti ini", dan beliau Rasulullah Shallallahu'alaihi wa Sallam mendemonstrasikan dengan keempat jarinya.`,
			},
		],
	},
	{
		title: 'Kewajiban menjaga harta benda suami',
		content: `Istri tidak boleh membelanjakan harta tanpa seizin suami, dimana berbelanja berlebih-lebihan. Sebagaimana hadis Nabi Muhammad saw riwayat Shahih Bukhari no. 5082 bab nikah, berbunyi:`,
		hadis: [
			{
				content:
					'حَدَّثَنَا أَبُو الْيَمَانِ أَخْبَرَنَا شُعَيْبٌ حَدَّثَنَا أَبُو الزِّنَادِ عَنْ الْأَعْرَجِ عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ عَنْ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ خَيْرُ نِسَاءٍ رَكِبْنَ الْإِبِلَ صَالِحُ نِسَاءِ قُرَيْشٍ أَحْنَاهُ عَلَى وَلَدٍ فِي صِغَرِهِ وَأَرْعَاهُ عَلَى زَوْجٍ فِي ذَاتِ يَدِهِ',
				definition: `Telah menceritakan kepada kami Abul Yaman Telah mengabarkan kepada kami Syu'aib Telah menceritakan kepada kami Abu Zinad dari Al A'raj dari Abu Hurairah radliyallahu 'anhu, dari Nabi shallallahu 'alaihi wa sallam, beliau bersabda: "Sebaik-baik wanita adalah yang dapat mengendarai unta. Sebaik-baik wanita Quraisy adalah yang paling lembut dan simpati pada anak di masa kecilnya, dan paling bisa menjaga harta suaminya."`,
			},
		],
	},
]

export const KewajibanSuamiTerhadapIstri: HakKewajiban[] = [
	{
		title: 'Suami wajib memberi nafkah lahir kepada istri seperti pakaian dan tempat tinggal',
		content: `Sebagaimana riwayat Musnad Ahmad no. 12593 bab Anas bin Malik r.a, berbunyi:`,
		hadis: [
			{
				content:
					'دَّثَنَا الحَكَمُ بْنُ نَافِعٍ، قَالَ: أَخْبَرَنَا شُعَيْبٌ، عَنِ الزُّهْرِيِّ، قَالَ: حَدَّثَنِي عَامِرُ بْنُ سَعْدٍ، عَنْ سَعْدِ بْنِ أَبِي وَقَّاصٍ، أَنَّهُ أَخْبَرَهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: «إِنَّكَ لَنْ تُنْفِقَ نَفَقَةً تَبْتَغِي بِهَا وَجْهَ اللَّهِ إِلَّا أُجِرْتَ عَلَيْهَا، حَتَّى مَا تَجْعَلُ فِي فَمِ امْرَأَتِكَ',
				definition: `Telah menceritakan kepada kami Al Hakam bin Nafi' berkata: telah mengabarkan kepada kami Syu'aib dari Az Zuhri berkata: telah menceritakan kepadaku 'Amir bin Sa'd dari Sa'd bin Abu Waqash bahwasanya dia mengabarkan, bahwa Rasulullah shallallahu 'alaihi wa sallam bersabda: "Sesungguhnya, tidaklah kamu menafkahkan suatu nafkah yang dimaksudkan mengharap wajah Allah kecuali kamu akan diberi pahala termasuk sesuatu yang kamu suapkan ke mulut istrimu."`,
			},
		],
	},
	{
		title: 'Menggauli istri secara makruf yaitu dengan cara yang layak dan patut yaitu dikasih sayangi, menghargai, memperhatikan, dll',
		content: `Seorang suami ketika menggauli seorang istri harus secara layak, baik, dan sesuai dengan syariat sebagaimana hadis riwayat Tirmidzi 3830 bab budi perkerti yang baik, berbunyi:`,
		hadis: [
			{
				content:
					'حَدَّثَنَا مُحَمَّدُ بْنُ يَحْيَى حَدَّثَنَا مُحَمَّدُ بْنُ يُوسُفَ حَدَّثَنَا سُفْيَانُ عَنْ هِشَامِ بْنِ عُرْوَةَ عَنْ أَبِيهِ عَنْ عَائِشَةَ قَالَتْ قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ وَأَنَا خَيْرُكُمْ لِأَهْلِي وَإِذَا مَاتَ صَاحِبُكُمْ فَدَعُوهُ قَالَ أَبُو عِيسَى هَذَا حَدِيثٌ حَسَنٌ غَرِيبٌ صَحِيحٌ مِنْ حَدِيثِ الثَّوْرِيِّ مَا أَقَلَّ مَنْ رَوَاهُ عَنْ الثَّوْرِيِّ وَرُوِيَ هَذَا عَنْ هِشَامِ بْنِ عُرْوَةَ عَنْ أَبِيهِ عَنْ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مُرْسَلًا',
				definition: `Telah menceritakan kepada kami Muhammad bin Yahya telah menceritakan kepada kami Muhammad bin Yusuf telah menceritakan kepada kami Sufyan dari Hisyam bin 'Urwah dari ayahnya dari Aisyah dia berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda: "Sebaik-baik kalian adalah yang paling baik terhadap istrinya, dan aku adalah orang yang paling baik terhadap istriku , apabila sahabat kalian meninggal dunia maka biarkanlah dia (tinggalkanlah dia jangan membicarakan keburukan- keburukannya)." Abu Isa berkata: "Hadits ini adalah hadits hasan gharib shahih dari hadits Ats Tsauri, dan sangat sedikit perawi yang meriwayatkannya dari Ats Tsauri, dan hadits ini diriwayatkan pula dari Hisyam bin 'Urwah dari ayahnya dari Nabi shallallahu 'alaihi wa sallam secara mursal."`,
			},
		],
	},
	{
		title: 'Memimpin keluarga dengan cara membimbing dan memelihara semua anggota keluarga dengan penuh tanggung jawab.',
		content: `Seorang Suami harus memiliki tanggung jawab bagi keluarganya, dengan cara untuk membimbing keluarga dengan cara yang baik sesuai dengan syariat Islam. Karena suami adalah pemimpin bagi keluarganya. Sebagaimana hadis yang ada di bawah ini riwayat Bukhari no. 7138`,
		hadis: [
			{
				content:
					'حَدَّثَنَا إِسْمَاعِيلُ حَدَّثَنِي مَالِكٌ عَنْ عَبْدِ اللَّهِ بْنِ دِينَارٍ عَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ أَلَا كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ فَالْإِمَامُ الَّذِي عَلَى النَّاسِ رَاعٍ وَهُوَ مَسْئُولٌ عَنْ رَعِيَّتِهِ وَالرَّجُلُ رَاعٍ عَلَى أَهْلِ بَيْتِهِ وَهُوَ مَسْئُولٌ عَنْ رَعِيَّتِهِ وَالْمَرْأَةُ رَاعِيَةٌ عَلَى أَهْلِ بَيْتِ زَوْجِهَا وَوَلَدِهِ وَهِيَ مَسْئُولَةٌ عَنْهُمْ وَعَبْدُ الرَّجُلِ رَاعٍ عَلَى مَالِ سَيِّدِهِ وَهُوَ مَسْئُولٌ عَنْهُ أَلَا فَكُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ',
				definition: `Telah menceritakan kepada kami Ismail Telah menceritakan kepadaku Malik dari Abdullah bin Dinar dari Abdullah bin Umar radliallahu 'anhuma, Rasulullah shallallahu 'alaihi wa sallam bersabda: "Ketahuilah setiap kalian adalah pemimpin, dan setiap kalian akan dimintai pertanggungjawabannya atas yang dipimpin, penguasa yang memimpin rakyat banyak dia akan dimintai pertanggungjawaban atas yang dipimpinnya, setiap kepala keluarga adalah pemimpin anggota keluarganya dan dia dimintai pertanggungjawaban atas yang dipimpinnya, dan istri pemimpin terhadap keluarga rumah suaminya dan juga anak-anaknya, dan dia akan dimintai pertanggungjawabannya terhadap mereka, dan budak seseorang juga pemimpin terhadap harta tuannya dan akan dimintai pertanggungjawaban terhadapnya, ketahuilah, setiap kalian adalah bertanggung jawab atas yang dipimpinnya."`,
			},
		],
	},
	{
		title: 'Membantu istri dalam tugas rumah sehari-hari dalam hal mengasuh dan mendidik anak ',
		content: `Seorang suami tak hanya untuk bekerja dan memberi nafkah ke anak dan istri namun, berhak bagi suami untuk membantu istrinya. Ketika sedang dirumah membantu tugas rumah tangga ataupun ikut andil dalam mengasuh dan mendidik anak. Sebagaimana hadis Nabi riwayat Bukhari no. 6039`,
		hadis: [
			{
				content:
					'حَدَّثَنَا حَفْصُ بْنُ عُمَرَ حَدَّثَنَا شُعْبَةُ عَنْ الْحَكَمِ عَنْ إِبْرَاهِيمَ عَنْ الْأَسْوَدِ قَالَ سَأَلْتُ عَائِشَةَ مَا كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَصْنَعُ فِي أَهْلِهِ قَالَتْ كَانَ فِي مِهْنَةِ أَهْلِهِ فَإِذَا حَضَرَتْ الصَّلَاةُ قَامَ إِلَى الصَّلَاةِ',
				definition: `Telah menceritakan kepada kami Hafsh bin Umar telah menceritakan kepada kami Syu'bah dari Al Hakam dari Ibrahim dari Al Aswad dia berkata: saya bertanya kepada Aisyah "Apakah Nabi shallallahu 'alaihi wa sallam pernah ikut membantu pekerjaan rumah isterinya?" Aisyah menjawab: "Beliau suka membantu pekerjaan rumah isterinya, apabila tiba waktu shalat, maka beliau beranjak untuk melaksanakan shalat."`,
			},
		],
	},
	{
		title: 'Menjaga martabat dan kehormatan istrinya',
		content: `Memberikan pendidikan agama kepada istrinya agar taat kepada Allah dan Rasul, berperilaku baik, dan menjaga diri dari perbuatan dosa. Seperti hal pada hadis Nabi riwayat Muslim no. 2448, sebagai berikut:`,
		hadis: [
			{
				content:
					'حَدَّثَنَا عَلِيُّ بْنُ حُجْرٍ السَّعْدِيُّ وَأَحْمَدُ بْنُ جَنَابٍ كِلَاهُمَا عَنْ عِيسَى وَاللَّفْظُ لِابْنِ حُجْرٍ حَدَّثَنَا عِيسَى بْنُ يُونُسَ حَدَّثَنَا هِشَامُ بْنُ عُرْوَةَ عَنْ أَخِيهِ عَبْدِ اللَّهِ بْنِ عُرْوَةَ عَنْ عُرْوَةَ عَنْ عَائِشَةَ أَنَّهَا قَالَتْ جَلَسَ إِحْدَى عَشْرَةَ امْرَأَةً فَتَعَاهَدْنَ وَتَعَاقَدْنَ أَنْ لَا يَكْتُمْنَ مِنْ أَخْبَارِ أَزْوَاجِهِنَّ شَيْئًا قَالَتْ الْأُولَى زَوْجِي لَحْمُ جَمَلٍ غَثٍّ عَلَى رَأْسِ جَبَلٍ وَعْرٍ لَا سَهْلٌ فَيُرْتَقَى وَلَا سَمِينٌ فَيُنْتَقَلَ قَالَتْ الثَّانِيَةُ زَوْجِي لَا أَبُثُّ خَبَرَهُ إِنِّي أَخَافُ أَنْ لَا أَذَرَهُ إِنْ أَذْكُرْهُ أَذْكُرْ عُجَرَهُ وَبُجَرَهُ قَالَتْ الثَّالِثَةُ زَوْجِي الْعَشَنَّقُ إِنْ أَنْطِقْ أُطَلَّقْ وَإِنْ أَسْكُتْ أُعَلَّقْ قَالَتْ الرَّابِعَةُ زَوْجِي كَلَيْلِ تِهَامَةَ لَا حَرَّ وَلَا قُرَّ وَلَا مَخَافَةَ وَلَا سَآمَةَ قَالَتْ الْخَامِسَةُ زَوْجِي إِنْ دَخَلَ فَهِدَ وَإِنْ خَرَجَ أَسِدَ وَلَا يَسْأَلُ عَمَّا عَهِدَ قَالَتْ السَّادِسَةُ زَوْجِي إِنْ أَكَلَ لَفَّ وَإِنْ شَرِبَ اشْتَفَّ وَإِنْ اضْطَجَعَ الْتَفَّ وَلَا يُولِجُ الْكَفَّ لِيَعْلَمَ الْبَثَّ قَالَتْ السَّابِعَةُ زَوْجِي غَيَايَاءُ أَوْ عَيَايَاءُ طَبَاقَاءُ كُلُّ دَاءٍ لَهُ دَاءٌ شَجَّكِ أَوْ فَلَّكِ أَوْ جَمَعَ كُلًّا لَكِ قَالَتْ الثَّامِنَةُ زَوْجِي الرِّيحُ رِيحُ زَرْنَبٍ وَالْمَسُّ مَسُّ أَرْنَبٍ قَالَتْ التَّاسِعَةُ زَوْجِي رَفِيعُ الْعِمَادِ طَوِيلُ النِّجَادِ عَظِيمُ الرَّمَادِ قَرِيبُ الْبَيْتِ مِنْ النَّادِي قَالَتْ الْعَاشِرَةُ زَوْجِي مَالِكٌ وَمَا مَالِكٌ مَالِكٌ خَيْرٌ مِنْ ذَلِكَ لَهُ إِبِلٌ كَثِيرَاتُ الْمَبَارِكِ قَلِيلَاتُ الْمَسَارِحِ إِذَا سَمِعْنَ صَوْتَ الْمِزْهَرِ أَيْقَنَّ أَنَّهُنَّ هَوَالِكُ قَالَتْ الْحَادِيَةَ عَشْرَةَ زَوْجِي أَبُو زَرْعٍ فَمَا أَبُو زَرْعٍ أَنَاسَ مِنْ حُلِيٍّ أُذُنَيَّ وَمَلَأَ مِنْ شَحْمٍ عَضُدَيَّ وَبَجَّحَنِي فَبَجَحَتْ إِلَيَّ نَفْسِي وَجَدَنِي فِي أَهْلِ غُنَيْمَةٍ بِشِقٍّ فَجَعَلَنِي فِي أَهْلِ صَهِيلٍ وَأَطِيطٍ وَدَائِسٍ وَمُنَقٍّ فَعِنْدَهُ أَقُولُ فَلَا أُقَبَّحُ وَأَرْقُدُ فَأَتَصَبَّحُ وَأَشْرَبُ فَأَتَقَنَّحُ أُمُّ أَبِي زَرْعٍ فَمَا أُمُّ أَبِي زَرْعٍ عُكُومُهَا رَدَاحٌ وَبَيْتُهَا فَسَاحٌ ابْنُ أَبِي زَرْعٍ فَمَا ابْنُ أَبِي زَرْعٍ مَضْجَعُهُ كَمَسَلِّ شَطْبَةٍ وَيُشْبِعُهُ ذِرَاعُ الْجَفْرَةِ بِنْتُ أَبِي زَرْعٍ فَمَا بِنْتُ أَبِي زَرْعٍ طَوْعُ أَبِيهَا وَطَوْعُ أُمِّهَا وَمِلْءُ كِسَائِهَا وَغَيْظُ جَارَتِهَا جَارِيَةُ أَبِي زَرْعٍ فَمَا جَارِيَةُ أَبِي زَرْعٍ لَا تَبُثُّ حَدِيثَنَا تَبْثِيثًا وَلَا تُنَقِّثُ مِيرَتَنَا تَنْقِيثًا وَلَا تَمْلَأُ بَيْتَنَا تَعْشِيشًا قَالَتْ خَرَجَ أَبُو زَرْعٍ وَالْأَوْطَابُ تُمْخَضُ فَلَقِيَ امْرَأَةً مَعَهَا وَلَدَانِ لَهَا كَالْفَهْدَيْنِ يَلْعَبَانِ مِنْ تَحْتِ خَصْرِهَا بِرُمَّانَتَيْنِ فَطَلَّقَنِي وَنَكَحَهَا فَنَكَحْتُ بَعْدَهُ رَجُلًا سَرِيًّا رَكِبَ شَرِيًّا وَأَخَذَ خَطِّيًّا وَأَرَاحَ عَلَيَّ نَعَمًا ثَرِيًّا وَأَعْطَانِي مِنْ كُلِّ رَائِحَةٍ زَوْجًا قَالَ كُلِي أُمَّ زَرْعٍ وَمِيرِي أَهْلَكِ فَلَوْ جَمَعْتُ كُلَّ شَيْءٍ أَعْطَانِي مَا بَلَغَ أَصْغَرَ آنِيَةِ أَبِي زَرْعٍ قَالَتْ عَائِشَةُ قَالَ لِي رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ كُنْتُ لَكِ كَأَبِي زَرْعٍ لِأُمِّ زَرْعٍ و حَدَّثَنِيهِ الْحَسَنُ بْنُ عَلِيٍّ الْحُلْوَانِيُّ حَدَّثَنَا مُوسَى بْنُ إِسْمَعِيلَ حَدَّثَنَا سَعِيدُ بْنُ سَلَمَةَ عَنْ هِشَامِ بْنِ عُرْوَةَ بِهَذَا الْإِسْنَادِ غَيْرَ أَنَّهُ قَالَ عَيَايَاءُ طَبَاقَاءُ وَلَمْ يَشُكَّ وَقَالَ قَلِيلَاتُ الْمَسَارِحِ وَقَالَ وَصِفْرُ رِدَائِهَا وَخَيْرُ نِسَائِهَا وَعَقْرُ جَارَتِهَا وَقَالَ وَلَا تَنْقُثُ مِيرَتَنَا تَنْقِيثًا وَقَالَ وَأَعْطَانِي مِنْ كُلِّ ذَابِحَةٍ زَوْجًا',
				definition: `Telah menceritakan kepada kami 'Ali bin Hujr As Sa'di dan Ahmad bin Janab keduanya dari 'Isa, sedangkan lafazh (hadits) ini milik Ibnu Hujr: Telah menceritakan kepada kami 'Isa bin Yunus: Telah menceritakan kepada kami Hisyam bin 'Urwah dari saudara laki-lakinya 'Abdullah bin 'Urwah dari 'Urwah dari 'Aisyah dia berkata: "Sebelas orang wanita tengah duduk-duduk. Setelah itu mereka saling berjanji untuk tidak menutupi sedikitpun informasi tentang suami mereka. Wanita pertama berkata: 'Suami saya berdaging unta yang kurus di puncak gunung yang tidak rata, tidak datar sehingga dapat diangkat, tidak gemuk sehingga dapat dipindahkan. Wanita yang kedua berkata: 'Suami saya, saya tidak mau menceritakan keadaannya, karena saya takut ditinggalkannya. Jika saya menceritakannya maka saya menceritakan kerongkongan dan pusarnya. (membuka rahasia dan keburukannya -pent). Wanita yang ketiga berkata: 'Suami saya tinggi hati. Jika saya berbicara saya takut diceraikannya. Sebaliknya jika saya diam, saya akan dibiarkannya.' Wanita yang keempat berkata: 'Suami saya seperti malam Thihamah, tidak panas dan tidak dingin, tidak menakutkan dan tidak pula membosankan.' Wanita yang kelima berkata: 'Suami saya, apabila masuk ke rumah seperti macan dan jika keluar seperti singa. Tidak pernah bertanya tentang apa yang ada di rumah.' Wanita yang keenam berkata: 'Suami saya, apabila makan rakus, apabila minum dihabiskan semuanya, apabila tidur membalik badan tidak meraba dengan telapak tangannya untuk mengetahui kesedihan.' Wanita yang ketujuh berkata: 'Suami saya impoten, bodoh dan setiap penyakit ada padanya. Merusak kepala dan menumpulkan tubuh istrinya, atau keduanya dilakukan.' Wanita yang kedelapan berkata: 'Suami saya, usapannya seperti usapan kelinci dan wanginya bagaikan pohon yang semerbak.' Wanita yang kesembilan berkata: Suami saya tinggi tiangnya, panjang pedangnya, mulia keabuannya dan rumahnya dekat dengan perkumpulan (dermawan dan murah hati -pent).' Wanita yang kesepuluh berkata: 'Suami saya bernama Malik, apa yang dinamakan Malik? 'Malik yang lebih bagus dari sebutannya. Dia memiliki unta yang banyak bila berdiam di kandangnya, jarang sekali keluar untuk menggembalakannya. Jika mendengar suara batang kayu, maka unta itu akan mengetahui bahwa ia akan disembelih.' Wanita yang kesebelas berkata: 'Suami saya Abu Zara'. Apa yang engkau ketahui tentang Abu Zara? Ia menggerakkan telinga saya dengan perhiasan, kedua lengan tangan saya diisi dengan daging menggembirakan saya. maka senanglah diri saya. Ia mendapatkan saya pada keluarga penggembala kambing yang sedikit dan susah payah, lalu menjadikan saya pada keluarga yang memiliki kuda, unta, kerbau dan sawah. Saya berbicara di depannya dengan tidak mencacinya, tidur bersamanya hingga Subuh, dan saya minum sampai puas. Ibu Abu Zara', tahukah engkau tentang ibu Abu Zara'? Tempat makannya mewah dan rumahnya luas. Putra Abu Zara', tahukah engkau putra Abu Zara'? Tempat tidurnya terbuat dari pelepah kurma yang halus, dia cukup kenyang dengan makan daging tulang hasta kambing. Putri Abu Zara', tahukah engkau tentang putri Abu Zara'? Ia taat kepada ayah dan ibunya, pakaiannya sesak dan membuat marah suaminya (karena rasa cemburu). Pembantu Abu Zara', tahukah engkau tentang pembantu Abu Zara'? Ia adalah seorang yang tidak pernah menyebarkan apa yang kami bicarakan, tidak curang dalam mengurus makanan kami dan tidak pula membuat rumah kami kotor. Wanita yang kesebelas tersebut berkata: 'Suatu ketika Abu Zara' bepergian pada musim banyak susu, lalu dia bertemu dengan seorang yang membawa dua orang anaknya yang lebih mirip seperti dua ekor macan. Kedua orang anak itu bermain dengan buah delima yang berada di bawah pinggang ibunya. Setelah itu, Abu Zara' menceraikan saya dan menikahi wanita itu. Kemudian saya menikah lagi dengan seorang laki-laki yang kaya raya. Penunggang kuda yang gagah dengan memegang tongkat dari Khaththi. Pada waktu senja, binatang ternak yang banyak digiring kepada saya, memberikan kepada saya setiap dua pasangan dari binatang ternak tersebut, dan dia berkata kepada saya: "Makanlah wahai Ummu Zara' dan berikan kepada keluargamu." Akan tetapi jika aku kumpulkan semua yang diberikan olehnya, maka tidak akan memenuhi tempat yang terkecil yang dimiliki Abu Zara'. Aisyah berkata: "Kemudian Rasulullah shallallahu 'alaihi wa sallam bersabda kepada saya: "Aku bagimu seperti Abu Zara' terhadap Ummu Zara'." Dan telah menceritakan kepadaku Al Hasan Ali Al Hulwani telah menceritakan kepadaku Musa bin Isma'il telah menceritakan kepadaku Sa'id bin Salamah dan Hisyam bin 'Urwah dengan sanad ini, namun dia mengatakan: 'Impoten dan bodoh.' Dan dia tidak meragukan redaksi haditsnya, dia juga berkata: "Jarang sekali keluar untuk menggembalakannya." Dia juga berkata: "Pakaiannya sesak (karena perutnya agak besar) dan sangat cantik bagi seorang wanita." Dia juga berkata: "tidak curang dalam mengurus makanan kami." Dan (berkata): "(Abu Zara') memberikan kepadaku dari setiap binatang sembelihan satu pasang."`,
			},
		],
	},
]

export const HakPublik: { title: string; content: string }[] = [
	{
		title: 'Hak dalam bekerja',
		content: 'Perempuan boleh saja bekerja selama perempuan itu membutuhkan pekerjaan dan pekerjaannya membutuhkan perempuan itu.',
	},
	{
		title: 'Hak dalam berkarir',
		content:
			'Perempuan boleh saja berkarir sesuai dengan tingkat pendidikan yang sesuai dan dengan persetujuan suami. Tidak lupa dengan peran pendidikan bagi anak dan tanggung jawab pada suami',
	},
	{
		title: 'Hak dalam memimpin',
		content:
			'Dalam hal kepemimpinan seorang perempuan tidak bermaksud untuk merebut posisi dan peran kepemimpinan seorang laki-laki tapi perempuan dan laki-laki menyalurkan potensi kepemimpinan mereka sepenuhnya tanpa superioritas pada satu sama lain.',
	},
	{
		title: 'Hak dalam politik',
		content:
			'Dalam hal politik, perempuan berhak untuk melibatkan diri secara aktif dalam proses pembangunan bangsa. Perempuan juga diharapkan mampu memberantas keburukan bangsa. sehingga perempuan berhak untuk berperan dalam pembangunan seperti kaum lelaki. Dengan tujuan perempuan harus terlibat dalam kehidupan bermasyarakat, berbangsa, dan bernegara agar dapat menyuarakan suaranya dalam meningkatkan kualitas kinerja perannya dalam ranah publik maupun keluarga.',
	},
]
