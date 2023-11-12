export interface Hadis {
	title: string
	slug: string
	info: {
		shahih: string
		derajat: string
		kitab: string
		bab: string
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
			shahih: 'Shahih Bukhari:285',
			derajat: 'Shahih',
			kitab: 'Haid',
			bab: 'Bagaimana permulaan munculnya haid'
		},
		content:
			'حَدَّثَنَا أَبُو النُّعْمَانِ حَدَّثَنَا حَمَّادُ بْنُ زَيْدٍ عَنْ عَمْرٍو عَنْ أَبِي مَعْبَدٍ مَوْلَى ابْنِ عَبَّاسٍ عَنْ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لَا تُسَافِرْ الْمَرْأَةُ إِلَّا مَعَ ذِي مَحْرَمٍ وَلَا يَدْخُلُ عَلَيْهَا رَجُلٌ إِلَّا وَمَعَهَا مَحْرَمٌ فَقَالَ رَجُلٌ يَا رَسُولَ اللَّهِ إِنِّي أُرِيدُ أَنْ أَخْرُجَ فِي جَيْشِ كَذَا وَكَذَا وَامْرَأَتِي تُرِيدُ الْحَجَّ فَقَالَ اخْرُجْ مَعَهَا',
		definition: `Telah menceritakan kepada kami Abu An-Nu'man telah menceritakan kepada kami Hammad bin Zaid dari 'Amru dari Abu Ma'bad, sahayanya Ibnu 'Abbas, dari Ibnu 'Abbas radliyallahu 'anhuma berkata: Nabi shallallahu 'alaihi wa sallam bersabda: "Janganlah seorang wanita bepergian kecuali bersama mahramnya dan janganlah seorang laki-laki menemui seorang wanita kecuali wanita itu bersama mahramnya". Kemudian ada seorang laki-laki yang berkata: "Wahai Rasulullah, sebenarnya aku berkehendak untuk berangkat bersama pasukan perang ini dan ini namun isteriku hendak menunaikan haji". Maka Beliau bersabda: "Berangkatlah haji bersama isterimu".`,
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
		title: 'Hadis Kedua',
		slug: 'hadis-kedua',
		info: {
			shahih: 'Shahih Bukhari:1729',
			derajat: 'Shahih',
			kitab: 'Denda Hasil Buruan',
			bab: 'Hajinya kaum wanita'
		},
		content: ` حَدَّثَنَا أَبُو النُّعْمَانِ حَدَّثَنَا حَمَّادُ بْنُ زَيْدٍ عَنْ عَمْرٍو عَنْ أَبِي مَعْبَدٍ مَوْلَى ابْنِ عَبَّاسٍ عَنْ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لَا تُسَافِرْ الْمَرْأَةُ إِلَّا مَعَ ذِي مَحْرَمٍ وَلَا يَدْخُلُ عَلَيْهَا رَجُلٌ إِلَّا وَمَعَهَا مَحْرَمٌ فَقَالَ رَجُلٌ يَا رَسُولَ اللَّهِ إِنِّي أُرِيدُ أَنْ أَخْرُجَ فِي جَيْشِ كَذَا وَكَذَا وَامْرَأَتِي تُرِيدُ الْحَجَّ فَقَالَ اخْرُجْ مَعَهَا`,
		definition: `Telah menceritakan kepada kami Abu An-Nu'man telah menceritakan kepada kami Hammad bin Zaid dari 'Amru dari Abu Ma'bad, sahayanya Ibnu 'Abbas, dari Ibnu 'Abbas radliyallahu 'anhuma berkata: Nabi shallallahu 'alaihi wa sallam bersabda: "Janganlah seorang wanita bepergian kecuali bersama mahramnya dan janganlah seorang laki-laki menemui seorang wanita kecuali wanita itu bersama mahramnya". Kemudian ada seorang laki-laki yang berkata: "Wahai Rasulullah, sebenarnya aku berkehendak untuk berangkat bersama pasukan perang ini dan ini namun isteriku hendak menunaikan haji". Maka Beliau bersabda: "Berangkatlah haji bersama isterimu".`,
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
			shahih: 'Shahih Bukhari:2998',
			derajat: 'Shahih',
			kitab: 'Denda Hasil Buruan',
			bab: 'Hajinya kaum wanita'
		},
		content: ` حَدَّثَنَا أَبُو النُّعْمَانِ حَدَّثَنَا حَمَّادُ بْنُ زَيْدٍ عَنْ عَمْرٍو عَنْ أَبِي مَعْبَدٍ مَوْلَى ابْنِ عَبَّاسٍ عَنْ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لَا تُسَافِرْ الْمَرْأَةُ إِلَّا مَعَ ذِي مَحْرَمٍ وَلَا يَدْخُلُ عَلَيْهَا رَجُلٌ إِلَّا وَمَعَهَا مَحْرَمٌ فَقَالَ رَجُلٌ يَا رَسُولَ اللَّهِ إِنِّي أُرِيدُ أَنْ أَخْرُجَ فِي جَيْشِ كَذَا وَكَذَا وَامْرَأَتِي تُرِيدُ الْحَجَّ فَقَالَ اخْرُجْ مَعَهَا`,
		definition: `Telah menceritakan kepada kami Abu An-Nu'man telah menceritakan kepada kami Hammad bin Zaid dari 'Amru dari Abu Ma'bad, sahayanya Ibnu 'Abbas, dari Ibnu 'Abbas radliyallahu 'anhuma berkata: Nabi shallallahu 'alaihi wa sallam bersabda: "Janganlah seorang wanita bepergian kecuali bersama mahramnya dan janganlah seorang laki-laki menemui seorang wanita kecuali wanita itu bersama mahramnya". Kemudian ada seorang laki-laki yang berkata: "Wahai Rasulullah, sebenarnya aku berkehendak untuk berangkat bersama pasukan perang ini dan ini namun isteriku hendak menunaikan haji". Maka Beliau bersabda: "Berangkatlah haji bersama isterimu".`,
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
		title: 'Hadis Keempat',
		slug: 'hadis-keempat',
		info: {
			shahih: 'Shahih Bukhari:3084',
			derajat: 'Shahih',
			kitab: 'Hadis yang meriwayatkan tentang para Nabi',
			bab: 'Pencipta Adam dan Keturunannya'
		},
		content: `حَدَّثَنَا أَبُو كُرَيْبٍ وَمُوسَى بْنُ حِزَامٍ قَالَا حَدَّثَنَا حُسَيْنُ بْنُ عَلِيٍّ عَنْ زَائِدَةَ عَنْ مَيْسَرَةَ الْأَشْجَعِيِّ عَنْ أَبِي حَازِمٍ عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ اسْتَوْصُوا بِالنِّسَاءِ فَإِنَّ الْمَرْأَةَ خُلِقَتْ مِنْ ضِلَعٍ وَإِنَّ أَعْوَجَ شَيْءٍ فِي الضِّلَعِ أَعْلَاهُ فَإِنْ ذَهَبْتَ تُقِيمُهُ كَسَرْتَهُ وَإِنْ تَرَكْتَهُ لَمْ يَزَلْ أَعْوَجَ فَاسْتَوْصُوا بِالنِّسَاءِ`,
		definition: `Telah bercerita kepada kami Abu Kuraib dan Musa bin Hizam keduanya berkata: telah bercerita kepada kami Husain bin "Ali dari Za'idah dari Maisarah Al Asyka'iy dari Abu Hazim dari Abu Hurairah radliyallahu 'anhu berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda: "Nasehatilah para wanita karena wanita diciptakan dari tulang rusuk yang bengkok, dan yang paling bengkok dari tulang rusuk adalah pangkalnya, jika kamu mencoba untuk meluruskannya maka dia akan patah namun bila kamu biarkan maka dia akan tetap bengkok. Untuk itu nasehatilah para wanita".`,
		takhrij: ['Shahih Muslim:2670', 'Sunan Darimi:2124']
	},
	{
		title: 'Hadis Kelima',
		slug: 'hadis-kelima',
		info: {
			shahih: 'Shahih Bukhari:4073',
			derajat: 'Shahih',
			kitab: 'Peperangan',
			bab: 'Surat Nabi kepada Kisra dan Qaishar'
		},
		content: `حَدَّثَنَا عُثْمَانُ بْنُ الْهَيْثَمِ حَدَّثَنَا عَوْفٌ عَنْ الْحَسَنِ عَنْ أَبِي بَكْرَةَ قَالَ لَقَدْ نَفَعَنِي اللَّهُ بِكَلِمَةٍ سَمِعْتُهَا مِنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَيَّامَ الْجَمَلِ بَعْدَ مَا كِدْتُ أَنْ أَلْحَقَ بِأَصْحَابِ الْجَمَلِ فَأُقَاتِلَ مَعَهُمْ قَالَ لَمَّا بَلَغَ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَنَّ أَهْلَ فَارِسَ قَدْ مَلَّكُوا عَلَيْهِمْ بِنْتَ كِسْرَى قَالَ لَنْ يُفْلِحَ قَوْمٌ وَلَّوْا أَمْرَهُمْ امْرَأَةً`,
		definition: `Telah menceritakan kepada kami Utsman bin Haitsam Telah menceritakan kepada kami Auf dari Al Hasan dari Abu Bakrah dia berkata: Sungguh Allah telah memberikan manfaat kepadaku dengan suatu kalimat yang pernah aku dengar dari Rasulullah, -yaitu pada waktu perang Jamal tatkala aku hampir bergabung dengan para penunggang unta lalu aku ingin berperang bersama mereka.- Dia berkata: Tatkala sampai kepada Rasulullah shallallahu 'alaihi wa sallam, bahwa penduduk Persia telah di pimpin oleh seorang anak perempuan putri raja Kisra, beliau bersabda: "Suatu kaum tidak akan beruntung, jika dipimpin oleh seorang wanita."`,
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
			shahih: 'Shahih Muslim:2668',
			derajat: 'Shahih',
			kitab: 'Menyusui',
			bab: 'Sebaik-baik harta dunia adalah wanita yang shalihah'
		},
		content: `حَدَّثَنِي مُحَمَّدُ بْنُ عَبْدِ اللَّهِ بْنِ نُمَيْرٍ الْهَمْدَانِيُّ حَدَّثَنَا عَبْدُ اللَّهِ بْنُ يَزِيدَ حَدَّثَنَا حَيْوَةُ أَخْبَرَنِي شُرَحْبِيلُ بْنُ شَرِيكٍ أَنَّهُ سَمِعَ أَبَا عَبْدِ الرَّحْمَنِ الْحُبُلِيَّ يُحَدِّثُ عَنْ عَبْدِ اللَّهِ بْنِ عَمْرٍو أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ الدُّنْيَا مَتَاعٌ وَخَيْرُ مَتَاعِ الدُّنْيَا الْمَرْأَةُ الصَّالِحَةُ`,
		definition: `Telah menceritakan kepadaku Muhammad bin Abdullah bin Numair Al Hamdani telah menceritakan kepada kami Abdullah bin Yazid telah menceritakan kepada kami Haiwah telah mengabarkan kepadaku Syurahbil bin Syarik bahwa dia pernah mendengar Abu Abdurrahman Al Hubuli telah bercerita dari Abdullah bin 'Amru bahwasannya Rasulullah shallallahu 'alaihi wa sallam bersabda: "Dunia adalah perhiasan dan sebaik-baik perhiasan adalah wanita shalihah."`,
		takhrij: ['Sunan An-Nasai:3180, Musnad Ahmad:6279']
	},
	{
		title: 'Hadis Ketujuh',
		slug: 'hadis-ketujuh',
		info: {
			shahih: 'Shahih Muslim:2669',
			derajat: 'Shahih',
			kitab: 'Menyusui',
			bab: 'Wasiat untuk memperhatikan wanita'
		},
		content: `و حَدَّثَنِي حَرْمَلَةُ بْنُ يَحْيَى أَخْبَرَنَا ابْنُ وَهْبٍ أَخْبَرَنِي يُونُسُ عَنْ ابْنِ شِهَابٍ حَدَّثَنِي ابْنُ الْمُسَيَّبِ عَنْ أَبِي هُرَيْرَةَ قَالَ قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِنَّ الْمَرْأَةَ كَالضِّلَعِ إِذَا ذَهَبْتَ تُقِيمُهَا كَسَرْتَهَا وَإِنْ تَرَكْتَهَا اسْتَمْتَعْتَ بِهَا وَفِيهَا عِوَجٌ و حَدَّثَنِيهِ زُهَيْرُ بْنُ حَرْبٍ وَعَبْدُ بْنُ حُمَيْدٍ كِلَاهُمَا عَنْ يَعْقُوبَ بْنِ إِبْرَاهِيمَ بْنِ سَعْدٍ عَنْ ابْنِ أَخِي الزُّهْرِيِّ عَنْ عَمِّهِ بِهَذَا الْإِسْنَادِ مِثْلَهُ سَوَاء`,
		definition: `Dan telah menceritakan kepada kami Harmalah bin Yahya telah mengabarkan kepada kami Ibnu Wahb telah mengabarkan kepadaku Yunus dari Ibnu Syihab telah menceritakan kepadaku Ibnu Musayyab dari Abu Hurairah dia berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda: "Sesungguhnya seorang wanita bagaikan tulang rusuk, jika kamu meluruskannnya, niscaya akan patah, jika kamu membiarkannya, maka kamu dapat bersenang-senang dengannya namun tetap bengkok." Dan telah menceritakan kepadaku Zuhair bin Harb dan Abd bin Humaid keduanya dari Ya'qub bin Ibrahim bin Sa'ad dari anak saudaraku yaitu Az Zuhri dari pamannya dengan isnad seperti ini.`,
		takhrij: ['Shahih Bukhari:4786', 'Sunan Tirmidzi:1109']
	},
	{
		title: 'Hadis Kedelapan',
		slug: 'hadis-kedelapan',
		info: {
			shahih: 'Shahih Muslim:2669',
			derajat: 'Shahih',
			kitab: 'Salam',
			bab: 'Firasat Sial, bersikap optimis dan pesimis'
		},
		content: `حَو حَدَّثَنَا عَبْدُ اللَّهِ بْنُ مَسْلَمَةَ بْنِ قَعْنَبٍ حَدَّثَنَا مَالِكُ بْنُ أَنَسٍ ح و حَدَّثَنَا يَحْيَى بْنُ يَحْيَى قَالَ قَرَأْتُ عَلَى مَالِكٍ عَنْ ابْنِ شِهَابٍ عَنْ حَمْزَةَ وَسَالِمٍ ابْنَيْ عَبْدِ اللَّهِ بْنِ عُمَرَ عَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ الشُّؤْمُ فِي الدَّارِ وَالْمَرْأَةِ وَالْفَرَسِ`,
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
			shahih: 'Shahih Muslim:2659',
			derajat: 'Shahih',
			kitab: 'Menyusui',
			bab: 'Kadar waktu suami menginap di istri yang janda dan yang gadis setelah menikahinya'
		},
		content: `حَدَّثَنَا يَحْيَى بْنُ يَحْيَى أَخْبَرَنَا هُشَيْمٌ عَنْ خَالِدٍ عَنْ أَبِي قِلَابَةَ عَنْ أَنَسِ بْنِ مَالِكٍ قَالَ إِذَا تَزَوَّجَ الْبِكْرَ عَلَى الثَّيِّبِ أَقَامَ عِنْدَهَا سَبْعًا وَإِذَا تَزَوَّجَ الثَّيِّبَ عَلَى الْبِكْرِ أَقَامَ عِنْدَهَا ثَلَاثًا قَالَ خَالِدٌ وَلَوْ قُلْتُ إِنَّهُ رَفَعَهُ لَصَدَقْتُ وَلَكِنَّهُ قَالَ السُّنَّةُ كَذَلِكَ`,
		definition: `Telah menceritakan kepada kami Yahya bin Yahya telah mengabarkan kepada kami Husyaim dari Khalid dari Abu Qilabah dari Anas bin Malik dia berkata: Apabila seorang laki-laki menikahi seorang gadis, maka dia tinggal bersamanya selama tujuh hari, dan jika seorang laki-laki menikahi janda, maka dia tinggal bersamanya selama tiga hari. Khalid berkata: Seandainya saya katakan (kepada Anas) bahwa hadits tersebut saya marfu'kan, niscaya dia akan membenarkanku, akan tetapi dia berkata: Demikianlah yang sesuai dengan sunnah.`,
		takhrij: ['Shahih Bukhari:4812', 'Shahih Bukhari:4813', 'Sunan Abu Dawud:1814', 'Sunan Tirmidzi:1058', `Musnad Ahmad:6378`]
	},
	{
		title: 'Hadis Kesepuluh',
		slug: 'hadis-kesepuluh',
		info: {
			shahih: 'Shahih Muslim:507',
			derajat: 'Shahih',
			kitab: 'Haid',
			bab: 'Wanita haid wajib mengqadha puasa tanpa perlu mengqadha shalatnya'
		},
		content: `و حَدَّثَنَا مُحَمَّدُ بْنُ الْمُثَنَّى حَدَّثَنَا مُحَمَّدُ بْنُ جَعْفَرٍ حَدَّثَنَا شُعْبَةُ عَنْ يَزِيدَ قَالَ سَمِعْتُ مُعَاذَةَ أَنَّهَا سَأَلَتْ عَائِشَةَ أَتَقْضِي الْحَائِضُ الصَّلَاةَ فَقَالَتْ عَائِشَةُ أَحَرُورِيَّةٌ أَنْتِ قَدْ كُنَّ نِسَاءُ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَحِضْنَ أَفَأَمَرَهُنَّ أَنْ يَجْزِينَ قَالَ مُحَمَّدُ بْنُ جَعْفَرٍ تَعْنِي يَقْضِينَ`,
		definition: `Dan telah menceritakan kepada kami Muhammad bin al-Mutsanna telah menceritakan kepada kami Muhammad bin Ja'far telah menceritakan kepada kami Syu'bah dari Yazid dia berkata: saya mendengar Mu'adzah bahwa dia bertanya kepada Aisyah, "Apakah wanita haid harus mengqadha shalat?" Aisyah menjawab, "Apakah kamu dari golongan Haruriyyah? Sungguh kami dulu, para istri Nabi shallallahu 'alaihi wa sallam haid, apakah beliau memerintahkan mereka untuk mengqadha shalat?" Muhammad bin Ja'far berkata: maksudnya mengqadha'nya.`,
		takhrij: ['Musnad Ahmad:24345']
	}
]
