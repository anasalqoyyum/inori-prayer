export interface Hadis {
	title: string
	slug: string
	info: {
		shahih: string
		derajat: string
		kitab: string
		bab: string
		sumber?: string
	}
	content: string
	definition: string
	takhrij: string[]
}

export const HadisList: Hadis[] = [
	{
		title: 'Hadis Pertama',
		slug: 'hadis-pertama',
		info: {
			shahih: 'Shahih Bukhari:294',
			derajat: 'Shahih',
			kitab: 'Haid',
			bab: 'Bagaimana permulaan munculnya haid',
			sumber: 'Shahih Bukhari, juz 1, 66. Maktabah Shamela'
		},
		content:
			'حَدَّثَنَا عَلِيُّ بْنُ عَبْدِ اللَّهِ قَالَ حَدَّثَنَا سُفْيَانُ قَالَ سَمِعْتُ عَبْدَ الرَّحْمَنِ بْنَ الْقَاسِمِ قَالَ سَمِعْتُ الْقَاسِمَ بْنَ مُحَمَّدٍ يَقُولُ سَمِعْتُ عَائِشَةَ تَقُولُ خَرَجْنَا لَا نَرَى إِلَّا الْحَجَّ فَلَمَّا كُنَّا بِسَرِفَ حِضْتُ فَدَخَلَ عَلَيَّ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَأَنَا أَبْكِي قَالَ مَا لَكِ أَنُفِسْتِ قُلْتُ نَعَمْ قَالَ إِنَّ هَذَا أَمْرٌ كَتَبَهُ اللَّهُ عَلَى بَنَاتِ آدَمَ فَاقْضِي مَا يَقْضِي الْحَاجُّ غَيْرَ أَنْ لَا تَطُوفِي بِالْبَيْتِ قَالَتْ وَضَحَّى رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنْ نِسَائِهِ بِالْبَقَرِ',
		definition: `Telah menceritakan kepada kami 'Ali bin 'Abdullah berkata: telah menceritakan kepada kami Sufyan berkata: Aku mendengar 'Abdurrahman bin Al Qasim berkata: Aku mendengar Al Qasim bin Muhammad berkata: Aku mendengar 'Aisyah berkata: Kami keluar dan tidak ada tujuan selain untuk ibadah haji. Ketika tiba di Sarif aku mengalami haid, kemudian Rasulullah shallallahu 'alaihi wa sallam masuk menemuiku sementara aku sedang menangis. Beliau bertanya: "Apa yang terjadi denganmu? Apakah kamu datang haid?" Aku jawab: "Ya." Beliau lalu bersabda: "Sesungguhnya ini adalah perkara yang telah Allah tetapkan bagi kaum wanita dari anak cucu Adam. Lakukanlah apa yang dilakukan oleh orang-orang yang haji, kecuali thawaf di Ka'bah." 'Aisyah berkata: "Kemudian Rasulullah shallallahu 'alaihi wa sallam berkurban dengan menyembelih seekor sapi yang diniatkan untuk semua istrinya."`,
		takhrij: [
			'Shahih Bukhari:5133',
			'Shahih Muslim:2114',
			'Shahih Muslim:2115',
			'Shahih Muslim:2127',
			'Sunan Abu Dawud:1521',
			'Sunan Nasa’I:288',
			'Sunan Nasa’i:346',
			'Sunan Ibnu Majah:754',
			'Musnad Ahmad:13802',
			'Musnad Ahmad:24891',
			'Musnad Ahmad:25139'
		]
	},
	{
		title: 'Hadis Kedua',
		slug: 'hadis-kedua',
		info: {
			shahih: 'Shahih Bukhari:1862',
			derajat: 'Shahih',
			kitab: 'Denda Hasil Buruan',
			bab: 'Hajinya kaum wanita',
			sumber: 'Shahih Bukhari, juz 3, 19. Maktabah Shamela'
		},
		content: `حَدَّثَنَا أَبُو النُّعْمَانِ حَدَّثَنَا حَمَّادُ بْنُ زَيْدٍ عَنْ عَمْرٍو عَنْ أَبِي مَعْبَدٍ مَوْلَى ابْنِ عَبَّاسٍ عَنْ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لَا تُسَافِرْ الْمَرْأَةُ إِلَّا مَعَ ذِي مَحْرَمٍ وَلَا يَدْخُلُ عَلَيْهَا رَجُلٌ إِلَّا وَمَعَهَا مَحْرَمٌ فَقَالَ رَجُلٌ يَا رَسُولَ اللَّهِ إِنِّي أُرِيدُ أَنْ أَخْرُجَ فِي جَيْشِ كَذَا وَكَذَا وَامْرَأَتِي تُرِيدُ الْحَجَّ فَقَالَ اخْرُجْ مَعَهَ`,
		definition: `Telah menceritakan kepada kami Abu An-Nu'man telah menceritakan kepada kami Hammad bin Zaid dari 'Amru dari Abu Ma'bad, sahayanya Ibnu 'Abbas, dari Ibnu 'Abbas radliyallahu 'anhuma berkata: Nabi shallallahu 'alaihi wa sallam bersabda: "Janganlah seorang wanita bepergian kecuali bersama mahramnya dan janganlah seorang laki-laki menemui seorang wanita kecuali wanita itu bersama mahramnya". Kemudian ada seorang laki-laki yang berkata: "Wahai Rasulullah, sebenarnya aku berkehendak untuk berangkat bersama pasukan perang ini dan ini namun isteriku hendak menunaikan haji". Maka Beliau bersabda: "Berangkatlah haji bersama isterimu"`,
		takhrij: [
			'Shahih Bukhari:4832',
			'Shahih Muslim:2384',
			'Shahih Muslim:2391',
			'Sunan Abu Daud:1467',
			'Musnad Ahmad:4386',
			'Musnad Ahmad:4467',
			'Musnad Ahmad:6007'
		]
	},
	{
		title: 'Hadis Ketiga',
		slug: 'hadis-ketiga',
		info: {
			shahih: 'Shahih Bukhari:3237',
			derajat: 'Shahih',
			kitab: 'Denda Hasil Buruan',
			bab: 'Hajinya kaum wanita',
			sumber: 'Shahih Bukhari, juz 4, 116. Maktabah Shamela'
		},
		content: `حَدَّثَنَا مُسَدَّدٌ حَدَّثَنَا أَبُو عَوَانَةَ عَنْ الْأَعْمَشِ عَنْ أَبِي حَازِمٍ عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا دَعَا الرَّجُلُ امْرَأَتَهُ إِلَى فِرَاشِهِ فَأَبَتْ فَبَاتَ غَضْبَانَ عَلَيْهَا لَعَنَتْهَا الْمَلَائِكَةُ حَتَّى تُصْبِحَ تَابَعَهُ شُعْبَةُ وَأَبُو حَمْزَةَ وَابْنُ دَاوُدَ وَأَبُو مُعَاوِيَةَ عَنْ الْأَعْمَش`,
		definition: `Telah bercerita kepada kami Musaddad telah bercerita kepada kami Abu 'Awanah dari Al A'masy dari Abu Hazim dari Abu Hurairah radliyallahu 'anhu berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda: Jika seorang suami mengajak istrinya ke tempat tidurnya, lalu istrinya menolaknya sehingga dia melalui malam itu dalam keadaan marah, maka malaikat melaknat istrinya itu hingga shubuh."`,
		takhrij: ['Shahih Bukhari:4794', 'Shahih Muslim:2596', 'Sunan Abu Daud:1829', 'Musnad Ahmad:9294', 'Musnad Ahmad:9835']
	},
	{
		title: 'Hadis Keempat',
		slug: 'hadis-keempat',
		info: {
			shahih: 'Shahih Bukhari:3331',
			derajat: 'Shahih',
			kitab: 'Hadis yang meriwayatkan tentang para Nabi',
			bab: 'Pencipta Adam dan Keturunannya',
			sumber: 'Shahih Bukhari, juz 4, 133. Maktabah Shamela'
		},
		content: `ا أَبُو كُرَيْبٍ وَمُوسَى بْنُ حِزَامٍ قَالَا حَدَّثَنَا حُسَيْنُ بْنُ عَلِيٍّ عَنْ زَائِدَةَ عَنْ مَيْسَرَةَ الْأَشْجَعِيِّ عَنْ أَبِي حَازِمٍ عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ اسْتَوْصُوا بِالنِّسَاءِ فَإِنَّ الْمَرْأَةَ خُلِقَتْ مِنْ ضِلَعٍ وَإِنَّ أَعْوَجَ شَيْءٍ فِي الضِّلَعِ أَعْلَاهُ فَإِنْ ذَهَبْتَ تُقِيمُهُ كَسَرْتَهُ وَإِنْ تَرَكْتَهُ لَمْ يَزَلْ أَعْوَجَ فَاسْتَوْصُوا بِالنِّسَاء`,
		definition: `Telah bercerita kepada kami Abu Kuraib dan Musa bin Hizam keduanya berkata: telah bercerita kepada kami Husain bin "Ali dari Za'idah dari Maisarah Al Asyka'iy dari Abu Hazim dari Abu Hurairah radliyallahu 'anhu berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda: "Nasehatilah para wanita karena wanita diciptakan dari tulang rusuk yang bengkok, dan yang paling bengkok dari tulang rusuk adalah pangkalnya, jika kamu mencoba untuk meluruskannya maka dia akan patah namun bila kamu biarkan maka dia akan tetap bengkok. Untuk itu nasehatilah para wanita".`,
		takhrij: ['Shahih Muslim:2670', 'Sunan Darimi:2124']
	},
	{
		title: 'Hadis Kelima',
		slug: 'hadis-kelima',
		info: {
			shahih: 'Shahih Bukhari:4425',
			derajat: 'Shahih',
			kitab: 'Peperangan',
			bab: 'Surat Nabi kepada Kisra dan Qaishar',
			sumber: 'Shahih Bukhari, juz 6. 8 Maktabah Shamela'
		},
		content: `حَدَّثَنَا عُثْمَانُ بْنُ الْهَيْثَمِ حَدَّثَنَا عَوْفٌ عَنْ الْحَسَنِ عَنْ أَبِي بَكْرَةَ قَالَ لَقَدْ نَفَعَنِي اللَّهُ بِكَلِمَةٍ سَمِعْتُهَا مِنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَيَّامَ الْجَمَلِ بَعْدَ مَا كِدْتُ أَنْ أَلْحَقَ بِأَصْحَابِ الْجَمَلِ فَأُقَاتِلَ مَعَهُمْ قَالَ لَمَّا بَلَغَ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَنَّ أَهْلَ فَارِسَ قَدْ مَلَّكُوا عَلَيْهِمْ بِنْتَ كِسْرَى قَالَ لَنْ يُفْلِحَ قَوْمٌ وَلَّوْا أَمْرَهُمْ امْرَأَة`,
		definition: `Telah menceritakan kepada kami Utsman bin Haitsam Telah menceritakan kepada kami Auf dari Al Hasan dari Abu Bakrah dia berkata: Sungguh Allah telah memberikan manfaat kepadaku dengan suatu kalimat yang pernah aku dengar dari Rasulullah, -yaitu pada waktu perang Jamal tatkala aku hampir bergabung dengan para penunggang unta lalu aku ingin berperang bersama mereka.- Dia berkata: Tatkala sampai kepada Rasulullah shallallahu 'alaihi wa sallam, bahwa penduduk Persia telah dipimpin oleh seorang anak perempuan putri raja Kisra, beliau bersabda: "Suatu kaum tidak akan beruntung, jika dipimpin oleh seorang wanita."`,
		takhrij: [
			'Shahih Bukhari:6570',
			'Sunan Tirmidzi:2188',
			`Sunan Nasa'i:5293`,
			'Musnad Ahmad:19507',
			'Musnad Ahmad:19542',
			'Musnad Ahmad:19575'
		]
	},
	{
		title: 'Hadis Keenam',
		slug: 'hadis-keenam',
		info: {
			shahih: 'Shahih Muslim:1467',
			derajat: 'Shahih',
			kitab: 'Menyusui',
			bab: 'Sebaik-baik harta dunia adalah wanita yang shalihah',
			sumber: 'Shahih Muslim, juz 2. 1090. Maktabah Shamela'
		},
		content: `حَدَّثَنِي مُحَمَّدُ بْنُ عَبْدِ اللَّهِ بْنِ نُمَيْرٍ الْهَمْدَانِيُّ حَدَّثَنَا عَبْدُ اللَّهِ بْنُ يَزِيدَ حَدَّثَنَا حَيْوَةُ أَخْبَرَنِي شُرَحْبِيلُ بْنُ شَرِيكٍ أَنَّهُ سَمِعَ أَبَا عَبْدِ الرَّحْمَنِ الْحُبُلِيَّ يُحَدِّثُ عَنْ عَبْدِ اللَّهِ بْنِ عَمْرٍو أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ الدُّنْيَا مَتَاعٌ وَخَيْرُ مَتَاعِ الدُّنْيَا الْمَرْأَةُ الصَّالِحَة`,
		definition: `Telah menceritakan kepadaku Muhammad bin Abdullah bin Numair Al Hamdani telah menceritakan kepada kami Abdullah bin Yazid telah menceritakan kepada kami Haiwah telah mengabarkan kepadaku Syurahbil bin Syarik bahwa dia pernah mendengar Abu Abdurrahman Al Hubuli telah bercerita dari Abdullah bin 'Amru bahwasannya Rasulullah shallallahu 'alaihi wa sallam bersabda: "Dunia adalah perhiasan dan sebaik-baik perhiasan adalah wanita shalihah."`,
		takhrij: ['Sunan An-Nasai:3180, Musnad Ahmad:6279']
	},
	{
		title: 'Hadis Ketujuh',
		slug: 'hadis-ketujuh',
		info: {
			shahih: 'Shahih Muslim:1468',
			derajat: 'Shahih',
			kitab: 'Menyusui',
			bab: 'Wasiat untuk memperhatikan wanita',
			sumber: 'Shahih Muslim juz 2 , 1090 . Maktabah Shamela'
		},
		content: `و حَدَّثَنِي حَرْمَلَةُ بْنُ يَحْيَى أَخْبَرَنَا ابْنُ وَهْبٍ أَخْبَرَنِي يُونُسُ عَنْ ابْنِ شِهَابٍ حَدَّثَنِي ابْنُ الْمُسَيَّبِ عَنْ أَبِي هُرَيْرَةَ قَالَ قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِنَّ الْمَرْأَةَ كَالضِّلَعِ إِذَا ذَهَبْتَ تُقِيمُهَا كَسَرْتَهَا وَإِنْ تَرَكْتَهَا اسْتَمْتَعْتَ بِهَا وَفِيهَا عِوَجٌ و حَدَّثَنِيهِ زُهَيْرُ بْنُ حَرْبٍ وَعَبْدُ بْنُ حُمَيْدٍ كِلَاهُمَا عَنْ يَعْقُوبَ بْنِ إِبْرَاهِيمَ بْنِ سَعْدٍ عَنْ ابْنِ أَخِي الزُّهْرِيِّ عَنْ عَمِّهِ بِهَذَا الْإِسْنَادِ مِثْلَهُ سَوَاء`,
		definition: `Dan telah menceritakan kepada kami Harmalah bin Yahya telah mengabarkan kepada kami Ibnu Wahb telah mengabarkan kepadaku Yunus dari Ibnu Syihab telah menceritakan kepadaku Ibnu Musayyab dari Abu Hurairah dia berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda: "Sesungguhnya seorang wanita bagaikan tulang rusuk, jika kamu meluruskannya, niscaya akan patah, jika kamu membiarkannya, maka kamu dapat bersenang-senang dengannya namun tetap bengkok." Dan telah menceritakan kepadaku Zuhair bin Harb dan Abd bin Humaid keduanya dari Ya'qub bin Ibrahim bin Sa'ad dari anak saudaraku yaitu Az Zuhri dari pamannya dengan isnad seperti ini.`,
		takhrij: ['Shahih Bukhari:4786', 'Sunan Tirmidzi:1109']
	},
	{
		title: 'Hadis Kedelapan',
		slug: 'hadis-kedelapan',
		info: {
			shahih: 'Shahih Muslim:2225',
			derajat: 'Shahih',
			kitab: 'Salam',
			bab: 'Firasat Sial, bersikap optimis dan pesimis',
			sumber: 'Shahih Muslim juz 4 , 1746. Maktabah Shamela'
		},
		content: `و حَدَّثَنَا عَبْدُ اللَّهِ بْنُ مَسْلَمَةَ بْنِ قَعْنَبٍ حَدَّثَنَا مَالِكُ بْنُ أَنَسٍ ح و حَدَّثَنَا يَحْيَى بْنُ يَحْيَى قَالَ قَرَأْتُ عَلَى مَالِكٍ عَنْ ابْنِ شِهَابٍ عَنْ حَمْزَةَ وَسَالِمٍ ابْنَيْ عَبْدِ اللَّهِ بْنِ عُمَرَ عَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ الشُّؤْمُ فِي الدَّارِ وَالْمَرْأَةِ وَالْفَرَسِ`,
		definition: `Dan telah menceritakan kepada kami 'Abdullah bin Maslamah bin Qa'nab: Telah menceritakan kepada kami Malik bin Anas: Demikian juga diriwayatkan dari jalur lainnya, Dan telah menceritakan kepada kami Yahya bin Yahya dia berkata: Aku membaca atas Malik dari Ibnu Syihab dari Hamzah dan Salim Ibnu 'Abdullah bin 'Umar dari 'Abdullah bin 'Umar bahwa Rasulullah shallallahu 'alaihi wa sallam bersabda: Terkadang pengaruh jahat (kecelakaan atau kesialan) itu terdapat pada tiga perkara: "Di dalam rumah tangga, dalam diri wanita, dan pada kuda."`,
		takhrij: [
			'Shahih Bukhari:2646',
			'Shahih Bukhari:4703',
			'Shahih Bukhari:4704',
			'Shahih Muslim:4128',
			'Shahih Muslim:4130',
			'Sunan Abu Dawud:3421',
			'Sunan Tirmidzi:2750',
			`Sunan An-Nasa'i:3512`
		]
	},
	{
		title: 'Hadis Kesembilan',
		slug: 'hadis-kesembilan',
		info: {
			shahih: 'Shahih Muslim:1461',
			derajat: 'Shahih',
			kitab: 'Menyusui',
			bab: 'Kadar waktu suami menginap di istri yang janda dan yang gadis setelah menikahinya',
			sumber: 'Shahih Muslim juz 2, 1084. Maktabah Shamela'
		},
		content: `حَدَّثَنَا يَحْيَى بْنُ يَحْيَى أَخْبَرَنَا هُشَيْمٌ عَنْ خَالِدٍ عَنْ أَبِي قِلَابَةَ عَنْ أَنَسِ بْنِ مَالِكٍ قَالَ إِذَا تَزَوَّجَ الْبِكْرَ عَلَى الثَّيِّبِ أَقَامَ عِنْدَهَا سَبْعًا وَإِذَا تَزَوَّجَ الثَّيِّبَ عَلَى الْبِكْرِ أَقَامَ عِنْدَهَا ثَلَاثًا قَالَ خَالِدٌ وَلَوْ قُلْتُ إِنَّهُ رَفَعَهُ لَصَدَقْتُ وَلَكِنَّهُ قَالَ السُّنَّةُ كَذَلِكَ`,
		definition: `Telah menceritakan kepada kami Yahya bin Yahya telah mengabarkan kepada kami Husyaim dari Khalid dari Abu Qilabah dari Anas bin Malik dia berkata: Apabila seorang laki-laki menikahi seorang gadis, maka dia tinggal bersamanya selama tujuh hari, dan jika seorang laki-laki menikahi janda, maka dia tinggal bersamanya selama tiga hari. Khalid berkata: Seandainya saya katakan (kepada Anas) bahwa hadits tersebut saya marfu'kan, niscaya dia akan membenarkanku, akan tetapi dia berkata: Demikianlah yang sesuai dengan sunnah.`,
		takhrij: ['Shahih Bukhari:4812', 'Shahih Bukhari:4813', 'Sunan Abu Dawud:1814', 'Sunan Tirmidzi:1058', `Musnad Ahmad:6378`]
	},
	{
		title: 'Hadis Kesepuluh',
		slug: 'hadis-kesepuluh',
		info: {
			shahih: 'Shahih Muslim:335',
			derajat: 'Shahih',
			kitab: 'Haid',
			bab: 'Wanita haid wajib mengqadha puasa tanpa perlu mengqadha shalatnya',
			sumber: 'Shahih Muslim juz 1, 265. Maktabah Shamela'
		},
		content: `و حَدَّثَنَا مُحَمَّدُ بْنُ الْمُثَنَّى حَدَّثَنَا مُحَمَّدُ بْنُ جَعْفَرٍ حَدَّثَنَا شُعْبَةُ عَنْ يَزِيدَ قَالَ سَمِعْتُ مُعَاذَةَ أَنَّهَا سَأَلَتْ عَائِشَةَ أَتَقْضِي الْحَائِضُ الصَّلَاةَ فَقَالَتْ عَائِشَةُ أَحَرُورِيَّةٌ أَنْتِ قَدْ كُنَّ نِسَاءُ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَحِضْنَ أَفَأَمَرَهُنَّ أَنْ يَجْزِينَ قَالَ مُحَمَّدُ بْنُ جَعْفَرٍ تَعْنِي يَقْضِينَ`,
		definition: `Dan telah menceritakan kepada kami Muhammad bin al-Mutsanna telah menceritakan kepada kami Muhammad bin Ja'far telah menceritakan kepada kami Syu'bah dari Yazid dia berkata: saya mendengar Mu'adzah bahwa dia bertanya kepada Aisyah, "Apakah wanita haid harus mengqadha shalat?" Aisyah menjawab, "Apakah kamu dari golongan Haruriyyah? Sungguh kami dulu, para istri Nabi shallallahu 'alaihi wa sallam haid, apakah beliau memerintahkan mereka untuk mengqadha shalat?" Muhammad bin Ja'far berkata: maksudnya mengqadha'nya.`,
		takhrij: ['Musnad Ahmad:24345']
	},
	{
		title: 'Hadis Kesebelas',
		slug: 'hadis-kesebelas',
		info: {
			shahih: 'Sunan Tirmidzi:1100',
			derajat: 'Shahih',
			kitab: 'Nikah',
			bab: 'Menikahi Gadis',
			sumber: 'Sunan Tirmidzi  juz 2, 397. Maktabah Shamela'
		},
		content: `حَدَّثَنَا قُتَيْبَةُ حَدَّثَنَا حَمَّادُ بْنُ زَيْدٍ عَنْ عَمْرِو بْنِ دِينَارٍ عَنْ جَابِرِ بْنِ عَبْدِ اللَّهِ قَالَ تَزَوَّجْتُ امْرَأَةً فَأَتَيْتُ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَ أَتَزَوَّجْتَ يَا جَابِرُ فَقُلْتُ نَعَمْ فَقَالَ بِكْرًا أَمْ ثَيِّبًا فَقُلْتُ لَا بَلْ ثَيِّبًا فَقَالَ هَلَّا جَارِيَةً تُلَاعِبُهَا وَتُلَاعِبُكَ فَقُلْتُ يَا رَسُولَ اللَّهِ إِنَّ عَبْدَ اللَّهِ مَاتَ وَتَرَكَ سَبْعَ بَنَاتٍ أَوْ تِسْعًا فَجِئْتُ بِمَنْ يَقُومُ عَلَيْهِنَّ قَالَ فَدَعَا لِي قَالَ وَفِي الْبَاب عَنْ أُبَيِّ بْنِ كَعْبٍ وَكَعْبِ بْنِ عُجْرَةَ قَالَ أَبُو عِيسَى حَدِيثُ جَابِرِ بْنِ عَبْدِ اللَّهِ حَدِيثٌ حَسَنٌ صَحِيحٌ`,
		definition: `Telah menceritakan kepada kami Qutaibah, telah menceritakan kepada kami Hammad bin Zaid dari 'Amr bin Dinar dari Jabir bin Abdullah berkata: “Saya baru saja menikahi seorang wanita. Kemudian saya menemui Nabi shallallahu 'alaihi wa sallam. Beliau bertanya: 'Apakah kamu baru saja menikah wahai Jabir?' Saya menjawab: 'Ya.' Beliau bertanya: 'Gadis atau janda.' Saya menjawab: 'Janda.' Beliau bertanya: 'Kenapa kamu tidak menikahi gadis saja. Kamu bisa bermain-main dengannya dan dia bisa bercanda denganmu.' Saya menjawab: 'Wahai Rasulullah, Abdullah telah meninggal dan meninggalkan tujuh anak perempuan atau sembilan. Saya datang (menikahi istrinya) agar bisa mengurus mereka.'" (Jabir bin Abdullah) berkata: "Kemudian beliau mendoakanku." (Abu Isa At Tirmidzi) berkata: "Hadits semakna diriwayatkan dari Ubay bin Ka'ab, dan Ka'ab bin Ujrah." Abu Isa berkata: "Hadits Jabir bin Abdullah merupakan hadits hasan sahih."`,
		takhrij: ['Shahih Bukhari:2745', 'Sunan Ibnu Majah:1850', 'Sunan Ibnu Majah:2707']
	},
	{
		title: 'Hadis Kedua Belas',
		slug: 'hadis-keduabelas',
		info: {
			shahih: 'Sunan Ibnu Majah:4003',
			derajat: 'Shahih',
			kitab: 'Fitnah',
			bab: 'Fitnah Wanita',
			sumber: 'Sunan Ibnu Majah, Juz 2, 1326. Maktabah Shamela'
		},
		content: `حَدَّثَنَا مُحَمَّدُ بْنُ رُمْحٍ أَنْبَأَنَا اللَّيْثُ بْنُ سَعْدٍ عَنْ ابْنِ الْهَادِ عَنْ عَبْدِ اللَّهِ بْنِ دِينَارٍ عَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ عَنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَنَّهُ قَالَ يَا مَعْشَرَ النِّسَاءِ تَصَدَّقْنَ وَأَكْثِرْنَ مِنْ الِاسْتِغْفَارِ فَإِنِّي رَأَيْتُكُنَّ أَكْثَرَ أَهْلِ النَّارِ فَقَالَتْ امْرَأَةٌ مِنْهُنَّ جَزْلَةٌ وَمَا لَنَا يَا رَسُولَ اللَّهِ أَكْثَرَ أَهْلِ النَّارِ قَالَ تُكْثِرْنَ اللَّعْنَ وَتَكْفُرْنَ الْعَشِيرَ مَا رَأَيْتُ مِنْ نَاقِصَاتِ عَقْلٍ وَدِينٍ أَغْلَبَ لِذِي لُبٍّ مِنْكُنَّ قَالَتْ يَا رَسُولَ اللَّهِ وَمَا نُقْصَانُ الْعَقْلِ وَالدِّينِ قَالَ أَمَّا نُقْصَانِ الْعَقْلِ فَشَهَادَةُ امْرَأَتَيْنِ تَعْدِلُ شَهَادَةَ رَجُلٍ فَهَذَا مِنْ نُقْصَانِ الْعَقْلِ وَتَمْكُثُ اللَّيَالِيَ مَا تُصَلِّي وَتُفْطِرُ فِي رَمَضَانَ فَهَذَا مِنْ نُقْصَانِ الدِّينِ`,
		definition: `Telah menceritakan kepada kami Muhammad bin Rumh telah memberitakan kepada kami Al Laits bin Sa'd dari Ibnu Al Had dari Abdullah bin Dinar dari Abdullah bin Umar dari Rasulullah shallallahu 'alaihi wa sallam, bahwa beliau bersabda: "Wahai para wanita, perbanyaklah sedekah dan istighfar, sungguh saya melihat kebanyakan kalian adalah penghuni neraka." Lalu seorang wanita berbadan gemuk dari mereka bertanya, "Wahai Rasulullah, kenapa kami yang paling banyak masuk ke dalam neraka?" Beliau menjawab: "Kalian banyak melaknat dan mengkhianati perlakuan suami, saya tidak pernah melihat makhluk berakal yang akal dan agamanya kurang selain kalian." Wanita tersebut kembali bertanya, "Wahai Rasulullah, apa yang dimaksud dengan kekurangan akal dan agama?" beliau menjawab: "Adapun akalnya kurang disebabkan karena kesaksian dua orang wanita sama dengan kesaksian seorang laki-laki, ini termasuk dari kekurangan akal. Kalian berdiam beberapa hati tidak shalat dan berbuka di bulan Ramadan adalah bukti kurangnya agama kalian."`,
		takhrij: ['Bukhari:1369', 'Musnad Ahmad:5091']
	},
	{
		title: 'Hadis Ketiga Belas',
		slug: 'hadis-ketigabelas',
		info: {
			shahih: 'Shahih Muslim:440',
			derajat: 'Shahih',
			kitab: 'Shalat',
			bab: 'Meluruskan barisan dan keutamaan shaf pertama',
			sumber: 'Shahih Muslim, Juz 1, 326. Maktabah Shamela'
		},
		content: `حَدَّثَنَا زُهَيْرُ بْنُ حَرْبٍ حَدَّثَنَا جَرِيرٌ عَنْ سُهَيْلٍ عَنْ أَبِيهِ عَنْ أَبِي هُرَيْرَةَ قَالَ قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ خَيْرُ صُفُوفِ الرِّجَالِ أَوَّلُهَا وَشَرُّهَا آخِرُهَا وَخَيْرُ صُفُوفِ النِّسَاءِ آخِرُهَا وَشَرُّهَا أَوَّلُهَا حَدَّثَنَا قُتَيْبَةُ بْنُ سَعِيدٍ قَالَ حَدَّثَنَا عَبْدُ الْعَزِيزِ يَعْنِي الدَّرَاوَرْدِيَّ عَنْ سُهَيْلٍ بِهَذَا الْإِسْنَادِ`,
		definition: `Telah menceritakan kepada kami Zuhair bin Harb telah menceritakan kepada kami Jarir dari Suhail dari Bapaknya dari Abu Hurairah radhiyallahu'anhu dia berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda, "Sebaik-baik shaf kaum laki-laki adalah di depan, dan sejelek-jeleknya adalah pada akhirnya. Dan sebaik-baik shaf wanita adalah akhirnya, dan sejelek-jeleknya adalah awal shaf." Telah menceritakan kepada kami Qutaibah bin Sa'id dia berkata: telah menceritakan kepada kami Abdul Aziz, yaitu ad-Darawardi dari Suhail dengan isnad ini.`,
		takhrij: [
			'Sunan Abu Dawud:580',
			'Sunan Tirmidzi:208',
			'Sunan Nasau:811',
			'Sunan Ibnu Majah:990',
			'Sunan Ibnu Majah:991',
			'Musnad Ahmad:7058',
			'Musnad Ahmad:8074'
		]
	},
	{
		title: 'Hadis Keempat Belas',
		slug: 'hadis-keempatbelas',
		info: {
			shahih: 'Sunan Ibnu Majah:1850',
			derajat: 'Shahih',
			kitab: 'Nikah',
			bab: 'Hak istri atas suami',
			sumber: 'Sunan Ibnu Majah, Juz 1, 593. Maktabah Shamela'
		},
		content: `حَدَّثَنَا أَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ حَدَّثَنَا يَزِيدُ بْنُ هَارُونَ عَنْ شُعْبَةَ عَنْ أَبِي قَزْعَةَ عَنْ حَكِيمِ بْنِ مُعَاوِيَةَ عَنْ أَبِيهِ أَنَّ رَجُلًا سَأَلَ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مَا حَقُّ الْمَرْأَةِ عَلَى الزَّوْجِ قَالَ أَنْ يُطْعِمَهَا إِذَا طَعِمَ وَأَنْ يَكْسُوَهَا إِذَا اكْتَسَى وَلَا يَضْرِبْ الْوَجْهَ وَلَا يُقَبِّحْ وَلَا يَهْجُرْ إِلَّا فِي الْبَيْتِ`,
		definition: `Telah menceritakan kepada kami Abu Bakr bin Abu Syaibah berkata: telah menceritakan kepada kami Yazid bin Harun dari Syu'bah dari Abu Qaz'ah dari Hakim bin Mu'awiyah dari Bapaknya berkata: "Seorang laki-laki bertanya kepada Nabi shallallahu 'alaihi wa sallam, "Apa hak seorang wanita atas suaminya?" beliau menjawab: "Memberi makan kepadanya apabila dia makan, memberi pakaian apabila ia berpakaian, tidak memukul wajah, tidak menjelek-jelekkannya dan tidak boleh mendiamkannya kecuali di dalam rumah."`,
		takhrij: []
	},
	{
		title: 'Hadis Kelima Belas',
		slug: 'hadis-kelimabelas',
		info: {
			shahih: 'Shahih Bukhari:5090',
			derajat: 'Shahih',
			kitab: 'Nikah',
			bab: 'Sekufu dalam agama',
			sumber: 'Shahih Bukhari juz 7, 7. Maktabah Shamela'
		},
		content: `حَدَّثَنَا مُسَدَّدٌ حَدَّثَنَا يَحْيَى عَنْ عُبَيْدِ اللَّهِ قَالَ حَدَّثَنِي سَعِيدُ بْنُ أَبِي سَعِيدٍ عَنْ أَبِيهِ عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ عَنْ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ تُنْكَحُ الْمَرْأَةُ لِأَرْبَعٍ لِمَالِهَا وَلِحَسَبِهَا وَجَمَالِهَا وَلِدِينِهَا فَاظْفَرْ بِذَاتِ الدِّينِ تَرِبَتْ يَدَاكَ`,
		definition: `Telah menceritakan kepada kami Musaddad Telah menceritakan kepada kami Yahya dari Ubaidullah ia berkata: Telah menceritakan kepadaku Sa'id bin Abu Sa'id dari bapaknya dari Abu Hurairah radliyallahu 'anhu, dari Nabi shallallahu 'alaihi wa sallam, beliau bersabda: “Wanita itu dinikahi karena empat hal, karena hartanya, karena keturunannya, karena kecantikannya dan karena agamanya. Maka pilihlah karena agamanya, niscaya kamu akan beruntung."`,
		takhrij: ['Shahih Muslim:2661', 'Sunan Abu Daud:1751', 'Sunan An-Nasa’I:3178', 'Sunan Ibnu Majah:1848', 'Musnad Ahmad:9156']
	},
	{
		title: 'Hadis Keenam Belas',
		slug: 'hadis-keenambelas',
		info: {
			shahih: 'Shahih Bukhari:5885',
			derajat: 'Shahih',
			kitab: 'Pakaian',
			bab: 'Laki-laki menyerupai perempuan dan sebaliknya',
			sumber: 'Shahih Bukhari juz 7, 159. Maktabah Shamela'
		},
		content: `حَدَّثَنَا مُحَمَّدُ بْنُ بَشَّارٍ حَدَّثَنَا غُنْدَرٌ حَدَّثَنَا شُعْبَةُ عَنْ قَتَادَةَ عَنْ عِكْرِمَةَ عَنْ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ لَعَنَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ الْمُتَشَبِّهِينَ مِنْ الرِّجَالِ بِالنِّسَاءِ وَالْمُتَشَبِّهَاتِ مِنْ النِّسَاءِ بِالرِّجَالِ تَابَعَهُ عَمْرٌو أَخْبَرَنَا شُعْبَةُ`,
		definition: `Telah menceritakan kepada kami Muhammad bin Basyar telah menceritakan kepada kami Ghundar telah menceritakan kepada kami Syu’bah dari Qatadah dari Ikrimah dari Ibnu Abbas r.a. Dia Berkata “Allah Melaknat laki-laki yang menyerupai wanita dan wanita yang menyerupai laki-laki” Hadis ini diperkuat dengan hadis ‘Amru telah mengabarkan kepada kami Syu’bah.`,
		takhrij: [
			'Sunan Abu Dawud:3576',
			'Sunan Tirmidzi:2709',
			'Sunan Ibnu Majah:1894',
			'Musnad Ahmad:1878',
			'Musnad Ahmad:1902',
			'Musnad Ahmad:2150',
			'Musnad Ahmad:2177',
			'Musnad Ahmad:2901',
			'Musnad Ahmad:2984'
		]
	},
	{
		title: 'Hadis Ketujuh Belas',
		slug: 'hadis-ketujuhbelas',
		info: {
			shahih: 'Shahih Bukhari:6017',
			derajat: 'Shahih',
			kitab: 'Adab',
			bab: 'Jangan seseorang menganggap remeh untuk memberi hadiah tetangga',
			sumber: 'Shahih Bukhari juz 8, 10. Maktabah Shamela'
		},
		content: `حَدَّثَنَا عَبْدُ اللَّهِ بْنُ يُوسُفَ حَدَّثَنَا اللَّيْثُ حَدَّثَنَا سَعِيدٌ هُوَ الْمَقْبُرِيُّ عَنْ أَبِيهِ عَنْ أَبِي هُرَيْرَةَ قَالَ كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ يَا نِسَاءَ الْمُسْلِمَاتِ لَا تَحْقِرَنَّ جَارَةٌ لِجَارَتِهَا وَلَوْ فِرْسِنَ شَاةٍ`,
		definition: `Telah menceritakan kepada kami Abdullah bin Yusuf telah menceritakan kepada kami Al Laits telah menceritakan kepada kami Sa'id yaitu Al Maqburi dari Ayahnya dari Abu Hurairah dia berkata: Nabi shallallahu 'alaihi wa sallam bersabda: "Wahai para wanita muslimah, janganlah antara tetangga yang satu dengan yang lainnya saling meremehkan walaupun hanya dengan memberi kaki kambing."`,
		takhrij: [
			'Shahih Muslim:1711',
			'Musnad Ahmad:7274',
			'Musnad Ahmad:7721',
			'Musnad Ahmad:9210',
			'Musnad Ahmad:9999',
			'Musnad Ahmad:10170'
		]
	},
	{
		title: 'Hadis Kedelepan Belas',
		slug: 'hadis-kedelapanbelas',
		info: {
			shahih: 'Sunan Tirmidzi:2613',
			derajat: 'Shahih',
			kitab: 'Iman',
			bab: 'Iman bertambah dan berkurang',
			sumber: 'Sunan Tirmidzi  juz 4, 306. Maktabah Shamela'
		},
		content: `حَدَّثَنَا أَبُو عَبْدِ اللَّهِ هُرَيْمُ بْنُ مِسْعَرٍ الْأَزْدِيُّ التِّرْمِذِيُّ حَدَّثَنَا عَبْدُ الْعَزِيزِ بْنُ مُحَمَّدٍ عَنْ سُهَيْلِ بْنِ أَبِي صَالِحٍ عَنْ أَبِيهِ عَنْ أَبِي هُرَيْرَةَ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ خَطَبَ النَّاسَ فَوَعَظَهُمْ ثُمَّ قَالَ يَا مَعْشَرَ النِّسَاءِ تَصَدَّقْنَ فَإِنَّكُنَّ أَكْثَرُ أَهْلِ النَّارِ فَقَالَتْ امْرَأَةٌ مِنْهُنَّ وَلِمَ ذَاكَ يَا رَسُولَ اللَّهِ قَالَ لِكَثْرَةِ لَعْنِكُنَّ يَعْنِي وَكُفْرِكُنَّ الْعَشِيرَ قَالَ وَمَا رَأَيْتُ مِنْ نَاقِصَاتِ عَقْلٍ وَدِينٍ أَغْلَبَ لِذَوِي الْأَلْبَابِ وَذَوِي الرَّأْيِ مِنْكُنَّ قَالَتْ امْرَأَةٌ مِنْهُنَّ وَمَا نُقْصَانُ دِينِهَا وَعَقْلِهَا قَالَ شَهَادَةُ امْرَأَتَيْنِ مِنْكُنَّ بِشَهَادَةِ رَجُلٍ وَنُقْصَانُ دِينِكُنَّ الْحَيْضَةُ تَمْكُثُ إِحْدَاكُنَّ الثَّلَاثَ وَالْأَرْبَعَ لَا تُصَلِّي وَفِي الْبَاب عَنْ أَبِي سَعِيدٍ وَابْنِ عُمَرَ قَالَ أَبُو عِيسَى هَذَا حَدِيثٌ حَسَنٌ صَحِيحٌ غَرِيبٌ مِنْ هَذَا الْوَجْهِ`,
		definition: `Telah bercerita kepada kami Abu Abdillah Huraim bin Mis'ar Al Azdi At Tirmdzi telah menceritakan kepada kami Abdul Aziz bin Muhammad dari Suhail bin Abu Shalih dari bapaknya dari Abu Hurairah bahwa Rasulullah shallallahu 'alaihi wa sallam berkhutbah di hadapan para sahabat lalu menasehati mereka kemudian berkata: "Wahai para wanita berinfaqlah karena kalian adalah penghuni neraka yang paling banyak". Maka salah seorang wanita bertanya: 'Kenapa demikian wahai Rasulullah? ' Beliau menjawab: "Karena kalian banyak melaknat yaitu mengingkari terhadap (nikmat) suami, " lalu beliau bersabda: "Dan aku tidak melihat dari orang-orang yang sedikit akal dan agamanya lebih banyak orang yang memiliki hati dan pikiran daripada kalian", salah seorang wanita bertanya, 'Apa kekurangan agama dan akal wanita? ' Beliau menjawab: "Persaksian dua orang wanita dari kalian adalah sama dengan persaksian seorang lelaki sedangkan kekurangan din (agama) kalian adalah adanya masa haid yang dapat menahan salah seorang dari kalian tiga sampai empat hari dari melaksanakan sholat." Dan dalam bab ini ada hadits dari Abu Sa'id dan Ibnu Umar, Abu Isa berkata: 'Hadits ini hasan shahih gharib dari jalur sanad ini".`,
		takhrij: ['Shahih Bukhari:293', 'Musnad Ahmad:3388', 'Musnad Ahmad:3815', 'Musnad Sunan Darimi:989']
	},
	{
		title: 'Hadis Kesembilan Belas',
		slug: 'hadis-kesembilanbelas',
		info: {
			shahih: 'Sunan Abu Dawud:678',
			derajat: 'Shahih',
			kitab: 'Shaf',
			bab: 'Shaf wanita dan larangan untuk menghindari shaf pertama',
			sumber: 'Sunan Abu Dawud juz 1, 181. Maktabah Shamela'
		},
		content: `حَدَّثَنَا مُحَمَّدُ بْنُ الصَّبَّاحِ الْبَزَّازُ حَدَّثَنَا خَالِدٌ وَإِسْمَعِيلُ بْنُ زَكَرِيَّاءَ عَنْ سُهَيْلِ بْنِ أَبِي صَالِحٍ عَنْ أَبِيهِ عَنْ أَبِي هُرَيْرَةَ قَالَ قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ خَيْرُ صُفُوفِ الرِّجَالِ أَوَّلُهَا وَشَرُّهَا آخِرُهَا وَخَيْرُ صُفُوفِ النِّسَاءِ آخِرُهَا وَشَرُّهَا أَوَّلُهَا`,
		definition: `Telah menceritakan kepada kami Muhammad bin Ash Shabbah Al Bazzaz telah menceritakan kepada kami Khalid dan Isma'il bin Zakariyya dari Suhail bin Abi Shalih dari Ayahnya dari Abu Hurairah dia berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda: “Sebaik baik shaf laki laki adalah shaf yang pertama dan sejelek jeleknya adalah shaf yang terakhir. Sebaik baik shaf wanita adalah yang terakhir dan sejelek jeleknya adalah shaf yang pertama."`,
		takhrij: [
			'Shahih Muslim:664',
			'Sunan Tirmidzi:208',
			'Sunan Nasa’I:811',
			'Sunan Ibnu Majah:990',
			'Sunan Ibnu Majah:991',
			'Musnad Ahmad:7058',
			'Musnad Ahmad:8074'
		]
	},
	{
		title: 'Hadis Kedua Puluh',
		slug: 'hadis-keduapuluh',
		info: {
			shahih: 'Shahih Bukhari:5108',
			derajat: 'Shahih',
			kitab: 'Nikah',
			bab: 'Seorang wanita tidak boleh dimadu dengan bibinya',
			sumber: 'Shahih Bukhari  juz 7, 12. Maktabah Shamela'
		},
		content: `حَدَّثَنَا عَبْدَانُ أَخْبَرَنَا عَبْدُ اللَّهِ أَخْبَرَنَا عَاصِمٌ عَنْ الشَّعْبِيِّ سَمِعَ جَابِرًا رَضِيَ اللَّهُ عَنْهُ قَالَ نَهَى رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَنْ تُنْكَحَ الْمَرْأَةُ عَلَى عَمَّتِهَا أَوْ خَالَتِهَا وَقَالَ دَاوُدُ وَابْنُ عَوْنٍ عَنْ الشَّعْبِيِّ عَنْ أَبِي هُرَيْرَةَ`,
		definition: `Telah menceritakan kepada kami Abdan Telah mengabarkan kepada kami Abdullah Telah mengabarkan kepada kami Ashim dari Asy Sya'bi bahwa ia mendengar Jabir radhiyallahu 'anhu berkata: ”Rasulullah shallallahu 'alaihi wa sallam melarang bilamana wanita dimadu dengan bibinya baik dari jalur ibu atau bapaknya." Dawud berkata: Dan Ibnu 'Aun dari Asy Sya'bi dari Abu Hurairah.`,
		takhrij: [
			'Shahih Bukhari:4719',
			'Shahih Muslim:2518',
			'Shahih Muslim:2520',
			'Sunan Tirmidzi:1044',
			'Sunan Tirmidzi:1045',
			'Sunan Nasa’I:3238'
		]
	},
	{
		title: 'Hadis Kedua Puluh Satu',
		slug: 'hadis-keduapuluhsatu',
		info: {
			shahih: 'Shahih Bukhari:1007',
			derajat: 'Shahih',
			kitab: 'Washiyat',
			bab: 'Tidak ada wasiat untuk orang yang mendapat waris',
			sumber: 'Shahih Bukhari, Juz 8, 152. Maktabah Shamela'
		},
		content: `حَدَّثَنَا مُحَمَّدُ بْنُ يُوسُفَ عَنْ وَرْقَاءَ عَنْ ابْنِ أَبِي نَجِيحٍ عَنْ عَطَاءٍ عَنْ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ كَانَ الْمَالُ لِلْوَلَدِ وَكَانَتْ الْوَصِيَّةُ لِلْوَالِدَيْنِ فَنَسَخَ اللَّهُ مِنْ ذَلِكَ مَا أَحَبَّ فَجَعَلَ لِلذَّكَرِ مِثْلَ حَظِّ الْأُنْثَيَيْنِ وَجَعَلَ لِلْأَبَوَيْنِ لِكُلِّ وَاحِدٍ مِنْهُمَا السُّدُسَ وَجَعَلَ لِلْمَرْأَةِ الثُّمُنَ وَالرُّبُعَ وَلِلزَّوْجِ الشَّطْرَ وَالرُّبُعَ`,
		definition: `Telah bercerita kepada kami Muhammad bin Yusuf dari Warqa' dari Ibnu Abi Najih dari 'Atha' dari Ibnu 'Abbas radliyallahu 'anhuma berkata: Dahulu harta warisan menjadi milik anak sedangkan wasiat hak kedua orang tua. Kemudian Allah menghapus ketentuan ini dengan yang lebih disenangi-Nya. Maka Allah menjadikan bagian warisan anak laki-laki dua kali dari bagian anak perempuan dan untuk kedua orang tua masing-masing mendapat seperenam sedangkan untuk istri seperdelapan atau seperempat sedangkan suami mendapat setengah atau seperempat.`,
		takhrij: ['Shahih Bukhari:4578', 'Shahih Bukhari:6739']
	},
	{
		title: 'Hadis Kedua Puluh Dua',
		slug: 'hadis-keduapuluhdua',
		info: {
			shahih: 'Shahih Muslim:2548',
			derajat: 'Shahih',
			kitab: 'Adab',
			bab: 'Siapa yang paling berhak digauli dengan baik',
			sumber: 'Shahih Muslim  juz 4, 1974. Maktabah Shamela'
		},
		content: `حَدَّثَنَا قُتَيْبَةُ بْنُ سَعِيدٍ حَدَّثَنَا جَرِيرٌ عَنْ عُمَارَةَ بْنِ الْقَعْقَاعِ بْنِ شُبْرُمَةَ عَنْ أَبِي زُرْعَةَ عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ جَاءَ رَجُلٌ إِلَى رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَ يَا رَسُولَ اللَّهِ مَنْ أَحَقُّ النَّاسِ بِحُسْنِ صَحَابَتِي قَالَ أُمُّكَ قَالَ ثُمَّ مَنْ قَالَ ثُمَّ أُمُّكَ قَالَ ثُمَّ مَنْ قَالَ ثُمَّ أُمُّكَ قَالَ ثُمَّ مَنْ قَالَ ثُمَّ أَبُوكَ وَقَالَ ابْنُ شُبْرُمَةَ وَيَحْيَى بْنُ أَيُّوبَ حَدَّثَنَا أَبُو زُرْعَةَ مِثْلَهُ`,
		definition: `Telah menceritakan kepada kami Qutaibah bin Sa'id telah menceritakan kepada kami Jarir dari 'Umarah bin Al Qa'qa' bin Syubrumah dari Abu Zur'ah dari Abu Hurairah radhiyallahu 'anhu dia berkata: "Seorang laki-laki datang kepada Rasulullah shallallahu 'alaihi wa sallam sambil berkata: "Wahai Rasulullah, siapakah orang yang paling berhak aku berbakti kepadanya?" beliau menjawab: "Ibumu." Dia bertanya lagi: "Kemudian siapa?" beliau menjawab: "Ibumu." Dia bertanya lagi: "kemudian siapa lagi?" beliau menjawab: "Ibumu." Dia bertanya lagi: "Kemudian siapa?" dia menjawab: "Kemudian ayahmu." Ibnu Syubrumah dan Yahya bin Ayyub berkata: telah menceritakan kepada kami Abu Zur'ah hadits seperti di atas."`,
		takhrij: ['Shahih Muslim:4621', 'Sunan Tirmidzi:1819', 'Sunan Ibnu Majah:2697', 'Sunan Ibnu Majah:3648', 'Musnad Ahmad:7994']
	},
	{
		title: 'Hadis Kedua Puluh Tiga',
		slug: 'hadis-keduapuluhtiga',
		info: {
			shahih: 'Sunan Ibnu Majah:3669',
			derajat: 'Shahih',
			kitab: 'Adab',
			bab: 'Berbakti kepada orang tua dan berbuat baik kepada anak wanita',
			sumber: 'Sunan Ibnu Majah  juz 2, 1210. Maktabah Shamela'
		},
		content: `حَدَّثَنَا الْحُسَيْنُ بْنُ الْحَسَنِ الْمَرْوَزِيُّ حَدَّثَنَا ابْنُ الْمُبَارَكِ عَنْ حَرْمَلَةَ بْنِ عِمْرَانَ قَالَ سَمِعْتُ أَبَا عُشَانَةَ الْمُعَافِرِيَّ قَالَ سَمِعْتُ عُقْبَةَ بْنَ عَامِرٍ يَقُولُ سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ مَنْ كَانَ لَهُ ثَلَاثُ بَنَاتٍ فَصَبَرَ عَلَيْهِنَّ وَأَطْعَمَهُنَّ وَسَقَاهُنَّ وَكَسَاهُنَّ مِنْ جِدَتِهِ كُنَّ لَهُ حِجَابًا مِنْ النَّارِ يَوْمَ الْقِيَامَةِ`,
		definition: `Telah menceritakan kepada kami Al Husain bin Hasan Al Mawarzi telah menceritakan kepada kami Ibnu Al Mubarak dari Harmalah bin 'Imran dia berkata: saya mendengar Abu 'Usyanah Al Mu'afiri berkata: saya mendengar 'Uqbah bin 'Amir berkata: "Saya mendengar Rasulullah shallallahu 'alaihi wa sallam bersabda: "Barangsiapa memiliki tiga orang anak perempuan, lalu ia dapat bersabar dalam mengurusi mereka, memberinya makan, minum serta pakaian kepada mereka dari usaha kerasnya, maka mereka akan menjadi penghalang baginya dari api neraka di hari Kiamat kelak."`,
		takhrij: ['Musnad Ahmad:8071', 'Musnad Ahmad:122133', 'Musnad Ahmad:16762', 'Musnad Ahmad:22881']
	},
	{
		title: 'Hadis Kedua Puluh Empat',
		slug: 'hadis-keduapuluhempat',
		info: {
			shahih: 'Shahih Bukhari:5195',
			derajat: 'Shahih',
			kitab: 'Nikah',
			bab: 'Wanita tidak boleh menerima laki-laki di rumah suaminya kecuali dengan izin',
			sumber: 'Shahih Bukhari  juz 7, 30. Maktabah Shamela'
		},
		content: `حَدَّثَنَا أَبُو الْيَمَانِ أَخْبَرَنَا شُعَيْبٌ حَدَّثَنَا أَبُو الزِّنَادِ عَنْ الْأَعْرَجِ عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ لَا يَحِلُّ لِلْمَرْأَةِ أَنْ تَصُومَ وَزَوْجُهَا شَاهِدٌ إِلَّا بِإِذْنِهِ وَلَا تَأْذَنَ فِي بَيْتِهِ إِلَّا بِإِذْنِهِ وَمَا أَنْفَقَتْ مِنْ نَفَقَةٍ عَنْ غَيْرِ أَمْرِهِ فَإِنَّهُ يُؤَدَّى إِلَيْهِ شَطْرُهُ وَرَوَاهُ أَبُو الزِّنَادِ أَيْضًا عَنْ مُوسَى عَنْ أَبِيهِ عَنْ أَبِي هُرَيْرَةَ فِي الصَّوْمِ`,
		definition: `Telah menceritakan kepada kami Abul Yaman Telah mengabarkan kepada kami Syu'aib Telah menceritakan kepada kami Abu Zinad dari Al A'raj dari Abu Hurairah radhiyallahu 'anhu, bahwa Rasulullah shallallahu 'alaihi wa sallam bersabda: “Tidak halal bagi seorang wanita untuk berpuasa sementara suaminya ada dirumah, kecuali dengan seizinnya. Dan tidak boleh mengizinkan seseorang masuk ke dalam rumahnya kecuali dengan seizinnya. Dan sesuatu yang ia infakkan tanpa seizinnya, maka setengahnya harus dikembalikan pada suaminya." Hadits ini juga diriwayatkan oleh Az Zinad dari Musa dari bapaknya dari Abu Hurairah dalam bab shaum.`,
		takhrij: [
			'Sunan Abu Daud:2102',
			'Musnad Ahmad:7841',
			'Musnad Ahmad:9607',
			'Musnad Ahmad:9780',
			'Sunan Darimi:1656',
			'Sunan Darimi:1658'
		]
	},
	{
		title: 'Hadis Kedua Puluh Lima',
		slug: 'hadis-keduapuluhlima',
		info: {
			shahih: 'Shahih Bukhari:5184',
			derajat: 'Shahih',
			kitab: 'Nikah',
			bab: 'Bersikap lembut dengan wanita',
			sumber: 'Shahih Bukhari  juz 7, 26. Maktabah Shamela'
		},
		content: `حَدَّثَنَا عَبْدُ الْعَزِيزِ بْنُ عَبْدِ اللَّهِ قَالَ حَدَّثَنِي مَالِكٌ عَنْ أَبِي الزِّنَادِ عَنْ الْأَعْرَجِ عَنْ أَبِي هُرَيْرَةَ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ الْمَرْأَةُ كَالضِّلَعِ إِنْ أَقَمْتَهَا كَسَرْتَهَا وَإِنْ اسْتَمْتَعْتَ بِهَا اسْتَمْتَعْتَ بِهَا وَفِيهَا عِوَجٌ`,
		definition: `Telah menceritakan kepada kami Abdul Aziz bin Abdullah ia berkata: Telah menceritakan kepadaku Malik bin Anas dari Abu Zinad dari Al A'raj dari Abu Hurairah bahwa Rasulullah shallallahu 'alaihi wa sallam bersabda Wanita itu bagaikan tulang rusuk, bila kamu memaksa untuk meluruskannya, niscaya kamu akan mematahkannya, dan jika kamu bermesraan dan menurutinya, maka kamu dapat bermesraan namun padanya terdapat kebengkokan."`,
		takhrij: ['Shahih Muslim:2669', 'Sunan Tirmidzi:1109', 'Musnad Ahmad:25180']
	}
]
