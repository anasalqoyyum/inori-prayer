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
		title: 'Hadis Ketiga',
		slug: 'hadis-ketiga',
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
		title: 'Hadis Keempat',
		slug: 'hadis-keempat',
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
		title: 'Hadis Kelima',
		slug: 'hadis-kelima',
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
		title: 'Hadis Keenam',
		slug: 'hadis-keenam',
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
	}
]
