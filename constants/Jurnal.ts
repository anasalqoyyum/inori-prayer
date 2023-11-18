interface Jurnalv2 {
	theme: string
	slug: string
	list: {
		title: string
		slug: string
		writer: string
		asal: string
		contact: string
		hadis: {
			shahih?: string
			content: string
			description: string
		}
		link: string
	}[]
}

interface Jurnal {
	title: string
	tahun: string
	list: {
		title: string
		slug: string
		writer: string
		asal: string
		contact: string
		abstract: string
	}[]
}

export const JurnalListv2: Jurnalv2[] = [
	{
		theme: 'Peran Perempuan Dalam Rumah Tangga',
		slug: 'peran-perempuan-dalam-rumah-tangga',
		list: [
			{
				title: 'Peran Perempuan Dalam Rumah Tangga Perspektif Islam',
				slug: 'peran-perempuan-dalam-rumah-tangga-perspektif-islam',
				writer: 'Eko Zulfikar',
				asal: 'Institut Agama Islam Negeri (IAIN) Tulungagung',
				contact: 'ekozulfikar2020@gmail.com',
				hadis: {
					shahih: 'Shahih Bukhari:3237',
					content: `حَدَّثَنَا مُسَدَّدٌ حَدَّثَنَا أَبُو عَوَانَةَ عَنْ الْأَعْمَشِ عَنْ أَبِي حَازِمٍ عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا دَعَا الرَّجُلُ امْرَأَتَهُ إِلَى فِرَاشِهِ فَأَبَتْ فَبَاتَ غَضْبَانَ عَلَيْهَا لَعَنَتْهَا الْمَلَائِكَةُ حَتَّى تُصْبِحَ تَابَعَهُ شُعْبَةُ وَأَبُو حَمْزَةَ وَابْنُ دَاوُدَ وَأَبُو مُعَاوِيَةَ عَنْ الْأَعْمَشِ`,
					description: `Telah bercerita kepada kami Musaddad, telah bercerita kepada kami Abu 'Awanah dari Al A'masy dari Abu Hazim dari Abu Hurairah radhiyallahu anhu berkata, rasulullah bersabda: :”Apabila suami mengajak istrinya ke tempat tidur (untuk memenuhi hasrat secara biologis) tetapi ia tidak memenuhinya, lantas ia tidur dalam keadaan suaminya marah kepadanya, maka malaikat melaknatnya sampai pagi”`
				},
				link: 'https://www.syekhnurjati.ac.id/jurnal/index.php/diya/article/view/4529'
			},
			{
				title: 'Pembacaan Hermeneutika Hadis Tentang Perintah Istri Bersujud Kepada Suami: Perspektif Hans-George Gadamer',
				slug: 'pembacaan-hermeneutika-hadis-tentang-perintah-istri-bersujud-kepada-suami',
				writer: 'Azzah Nurin Taufiqotuzzahro',
				asal: 'STAI Al Anwar, Sarang, Rembang',
				contact: 'azzahnurin08@gmail.com',
				hadis: {
					shahih: 'Sunan Tirmidzi:1159',
					content: ` حَدَّثَنَا مَحْمُودُ بْنُ غَيْلاَنَ، قَالَ: حَدَّثَنَا النَّضْرُ بْنُ شُمَيْلٍ، قَالَ: أَخْبَرَنَا مُحَمَّدُ بْنُ عَمْرٍو، عَنْ أَبِي سَلَمَةَ، عَنْ أَبِي هُرَيْرَةَ، عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: لَوْ كُنْتُ آمِرًا أَحَدًا أَنْ يَسْجُدَ لأَحَدٍ لأَمَرْتُ الْمَرْأَةَ أَنْ تَسْجُدَ لِزَوْجِهَا.`,
					description: `Dari Abu Hurairah, Nabi Muhammad Saw, bersabda:” Jikalau aku memerintahkan seseorang bersujud kepada orang lain, maka aku akan menyuruh istri untuk bersujud kepada suaminya”`
				},
				link: 'https://ejournal.uin-suka.ac.id/ushuluddin/Living/article/view/1616'
			},
			{
				title: 'Nalar Hermeneutis Ulama Hadis: Larangan Perempuan Bepergian tanpa Mahram dalam Ruang Sejarah Pemahaman',
				slug: 'nalar-hermeneutis-ulama-hadis',
				writer: 'Miski',
				asal: 'Universitas Islam Negeri Maulana Malik Ibrahim Malang',
				contact: 'miski@uin-malang.ac.id',
				hadis: {
					shahih: 'Muslim, Shaẖîẖ Muslim: 827',
					content: `حَدَّثَنَا عُثْمَانُ بْنُ أَبِي شَيْبَةَ حَدَّثَنَا جَرِيرٌ عَنْ مُغِيرَةَ عَنْ إِبْرَاهِيمَ عَنْ سَهْمِ بْنِ مِنْجَابٍ عَنْ قَزَعَةَ عَنْ أَبِي سَعِيدٍ الْخُدْرِيِّ قَالَ قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لَا تُسَافِرْ الْمَرْأَةُ ثَلَاثًا إِلَّا مَعَ ذِي مَحْرَمٍ`,
					description: `Telah menceritakan kepada kami Utsman bin Abu Syaibah, telah menceritakan kepada kami Jarir dari Mughirah dari Ibrahim dari Sahm bin Minjab dari Qaza'ah dari Abu Sa'id Al Khudri ia berkata, Rasulullah bersabda, "Seorang wanita tidak boleh bepergian selama tiga hari kecuali bersama mahramnya."`
				},
				link: 'https://ejournal.uinsaid.ac.id/index.php/dinika/article/view/2464'
			},
			{
				title: 'Hadits Perempuan Melakukan Perjalanan Tanpa Maẖram Perspektif Hermeneutika Paul Ricoeur',
				slug: 'hadits-perempuan-melakukan-perjalanan-tanpa-mahram',
				writer: 'Ummi Hasanah',
				asal: 'Universitas Islam Negeri Syarif Hidayatullah Jakarta',
				contact: 'ummihasanah1712@gmail.com',
				hadis: {
					shahih: 'Saẖîẖ al-Bukhâri: 1862',
					content: `حَدَّثَنَا أَبُو النُّعْمَانِ حَدَّثَنَا حَمَّادُ بْنُ زَيْدٍ عَنْ عَمْرٍو عَنْ أَبِي مَعْبَدٍ مَوْلَى ابْنِ عَبَّاسٍ عَنْ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لَا تُسَافِرْ الْمَرْأَةُ إِلَّا مَعَ ذِي مَحْرَمٍ وَلَا يَدْخُلُ عَلَيْهَا رَجُلٌ إِلَّا وَمَعَهَا مَحْرَمٌ فَقَالَ رَجُلٌ يَا رَسُولَ اللَّهِ إِنِّي أُرِيدُ أَنْ أَخْرُجَ فِي جَيْشِ كَذَا وَكَذَا وَامْرَأَتِي تُرِيدُ الْحَجَّ فَقَالَ اخْرُجْ مَعَهَا`,
					description: `“Abu Nu’man telah bercerita kepada kami, Hammad bin Zaid dari Abi Ma’bad budak Ibn ‘Abbas dari Ibn ‘Abbas bahwa Rasulullas saw bersabda; Janganlah seorang perempuan bepergian kecuali bersama maẖram, dan janganlah seorang laki-laki menemuinya kecuali ia (perempuan itu) bersama maẖram. Seseorang berkata; wahai Rasulullah saw saya ingin pergi keluar untuk berperang, tetapi istriku ingin pergi haji, maka Rasul menjawab; berangkatlah bersamanya (istrimu).”`
				},
				link: 'https://journal.iain-manado.ac.id/index.php/AJIP/article/download/633/527'
			},
			{
				title:
					'Reinterpretasi Hadis Larangan Perempuan Bepergian Tanpa Mahram Dan Larangan Melukis (Pendekatan Sosio-Historis Dan Antropologis)',
				slug: 'reinterpretasi-hadis-larangan-perempuan-bepergian-tanpa-mahram-dan-larangan-melukis',
				writer: 'Ghufron Hamzah',
				asal: 'FAI Universitas Wahid Hasyim Semarang',
				contact: 'ghufronhamzah@gmail.com',
				hadis: {
					shahih: 'Shahih Bukhari:1086',
					content: `حَدَّثَنَا إِسْحَاقُ بْنُ إِبْرَاهِيمَ الحَنْظَلِيُّ، قَالَ: قُلْتُ لِأَبِي أُسَامَةَ: حَدَّثَكُمْ عُبَيْدُ اللَّهِ، عَنْ نَافِعٍ، عَنِ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا: أَنَّ النَّبِيَّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: «لاَ تُسَافِرِ المَرْأَةُ ثَلاَثَةَ أَيَّامٍ إِلَّا مَعَ ذِي مَحْرَمٍ`,
					description: `Ishaq bin Ibrahim al-Hanzali telah menceritakan kepada kami (al-Bukhari) dia berkata:saya berkata kepada abu Usamah, telah menceritakan kepada kalian Ubaidillah dari Nafi’ dari Ibn Umar r.a. bahwa Nabi saw. Bersabda: “Janganlah perempuan bepergian sejauh perjalanan tiga hari, kecuali ada mahram bersamanya”`
				},
				link: 'https://ejournal.unisnu.ac.id/j-asna/article/view/944/1532'
			},
			{
				title: 'Peran Ganda Wanita dalam Rumah Tangga',
				slug: 'peran-ganda-wanita-dalam-rumah-tangga',
				writer: 'Samsidar',
				asal: 'IAIN Bone',
				contact: 'ghufronhamzah@gmail.com',
				hadis: {
					shahih: 'Shahih Bukhari:4789',
					content: `حَدَّثَنَا أَبُو النُّعْمَانِ حَدَّثَنَا حَمَّادُ بْنُ زَيْدٍ عَنْ أَيُّوبَ عَنْ نَافِعٍ عَنْ عَبْدِ اللَّهِ قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ فَالْإِمَامُ رَاعٍ وَهُوَ مَسْئُولٌ وَالرَّجُلُ رَاعٍ عَلَى أَهْلِهِ وَهُوَ مَسْئُولٌ وَالْمَرْأَةُ رَاعِيَةٌ عَلَى بَيْتِ زَوْجِهَا وَهِيَ مَسْئُولَةٌ وَالْعَبْدُ رَاعٍ عَلَى مَالِ سَيِّدِهِ وَهُوَ مَسْئُولٌ أَلَا فَكُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ`,
					description: `Telah menceritakan kepada kami Abu Nu'man Telah menceritakan kepada kami Hammad bin Zaid dari Ayyub dari Nafi' dari Abdullah ia berkata: Nabi shallallahu 'alaihi wa sallam bersabda:
					"Setiap kalian adalah pemimpin, dan setiap kalian akan dimintai pertanggungjawabannya. Seorang laki-laki adalah pemimpin atas keluarganya dan ia akan dimintai pertanggungjawabannya. Seorang wanita adalah pemimpin atas rumah suaminya, dan ia pun akan dimintai pertanggung jawabannya. Dan seorang budak juga pemimpin atas harta tuannya dan ia juga akan dimintai pertanggung jawabannya. Sungguh setiap kalian adalah pemimpin dan setiap kalian akan dimintai pertanggung jawabannya."`
				},
				link: 'https://mail.jurnal.iain-bone.ac.id/index.php/annisa/article/view/663'
			}
		]
	},
	{
		theme: 'Peran Perempuan Di Ruang Publik',
		slug: 'peran-perempuan-di-ruang-publik',
		list: [
			{
				title: 'Kepemimpinan Perempuan pada Masyarakat dalam Perspektif Saʿīd Ramaḍān Al-Būṭī: Telaah Hadis Misoginis',
				slug: 'kepemimpinan-perempuan-pada-masyrakat-dalam-perspektif-said-ramadan',
				writer: 'Nasirudin Al Ahsani',
				asal: 'Institut Agama Islam Negeri Jember',
				contact: 'nasirudin@iain-jember.ac.id',
				hadis: {
					shahih: 'Shahih Bukhari:4425',
					content: `حَدَّثَنَا عُثْمَانُ بْنُ الْهَيْثَمِ حَدَّثَنَا عَوْفٌ عَنْ الْحَسَنِ عَنْ أَبِي بَكْرَةَ قَالَ لَقَدْ نَفَعَنِي اللَّهُ بِكَلِمَةٍ سَمِعْتُهَا مِنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَيَّامَ الْجَمَلِ بَعْدَ مَا كِدْتُ أَنْ أَلْحَقَ بِأَصْحَابِ الْجَمَلِ فَأُقَاتِلَ مَعَهُمْ قَالَ لَمَّا بَلَغَ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَنَّ أَهْلَ فَارِسَ قَدْ مَلَّكُوا عَلَيْهِمْ بِنْتَ كِسْرَى قَالَ لَنْ يُفْلِحَ قَوْمٌ وَلَّوْا أَمْرَهُمْ امْرَأَةً`,
					description: `“Dari Utsman bin Haitsam dari Auf dari Hasan dari Abi Bakrah berkata: ‘Allah memberikan manfaat kepadaku dengan sebuah kalimat yang kudengar dari Rasulullah SAW pada hari menjelang Perang Jamal, setelah aku hampir membenarkan mereka (Ashabul Jamal) dan berperang bersama mereka. Ketika sampai kabar kepada Rasulullah SAW bahwa bangsa Persia mengangkat putri Kisra sebagai pemimpin, beliau bersabda ‘Tidak akan beruntung suatu kaum yang menyerahkan urusan mereka kepada wanita.’’`
				},
				link: 'https://moraref.kemenag.go.id/documents/article/99047180253363892'
			},
			{
				title: 'Kepemimpinan perempuan dalam hukum islam: telaah atas hadis kepemimpinan perempuan',
				slug: 'kepemimpinan-perempuan-dalam-hukum-islam-telaah-atas-hadis',
				writer: 'Achmad Saeful',
				asal: 'Sekolah Tinggi Agama Islam Binamadani',
				contact: 'achmadsaeful@stai-binamadani.ac.id',
				hadis: {
					shahih: 'an-Nasai:5405',
					content: `أَخْبَرَنَا مُحَمَّدُ بْنُ الْمُثَنَّى قَالَ حَدَّثَنَا خَالِدُ بْنُ الْحَارِثِ قَالَ حَدَّثَنَا حُمَيْدٌ عَنْ الْحَسَنِ عَنْ أَبِي بَكْرَةَ قَالَ عَصَمَنِي اللَّهُ بِشَيْءٍ سَمِعْتُهُ مِنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لَمَّا هَلَكَ كِسْرَى قَالَ مَنْ اسْتَخْلَفُوا قَالُوا بِنْتَهُ قَالَ لَنْ يُفْلِحَ قَوْمٌ وَلَّوْا أَمْرَهُمْ امْرَأَةً`,
					description: `Telah mengabarkan kepada kami Muhammad Ibnul Mutsanna ia berkata, telah menceritakan kepada kami Khalid Ibnul Harits ia berkata, telah menceritakan kepada kami Humaid dari Al Hasan dari Abu Bakrah ia berkata, "Allah telah memeliharaku dengan sesuatu yang aku dengar dari Rasulullah ﷺ saat Kisra hancur, beliau bertanya, "Siapa yang mereka angkat sebagai raja?" para sahabat menjawab, "Puterinya." Beliau lalu bersabda, "Tidak akan beruntung suatu kaum yang menyerahkan perkaranya kepada seorang wanita."`
				},
				link: 'https://stai-binamadani.e-journal.id/Syarie/article/view/271'
			},
			{
				title: 'Kepemimpinan Perempuan Dalam Tinjauan Hadis',
				slug: 'kepemimpinan-perempuan-dalam-tinjauan-hadis',
				writer: 'Faridah, Siar Ni’mah, Muhammad Yusuf, Kusnadi',
				asal: 'Institut Agama Islam Muhammadiyah Sinjai, Sekolah Tinggi Agama Islam Darud Dakwah wal Irsyad Makassar',
				contact: 'andifaridah81@gmail.com,siar.nimah@gmail.com,yusufburhan8588@gmail.com',
				hadis: {
					shahih: 'Sunan an-Nasai:5388',
					content: `أَخْبَرَنَا مُحَمَّدُ بْنُ الْمُثَنَّى قَالَ حَدَّثَنَا خَالِدُ بْنُ الْحَارِثِ قَالَ حَدَّثَنَا حُمَيْدٌ عَنْ الْحَسَنِ عَنْ أَبِي بَكْرَةَ قَالَ عَصَمَنِي اللَّهُ بِشَيْءٍ سَمِعْتُهُ مِنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لَمَّا هَلَكَ كِسْرَى قَالَ مَنْ اسْتَخْلَفُوا قَالُوا بِنْتَهُ قَالَ لَنْ يُفْلِحَ قَوْمٌ وَلَّوْا أَمْرَهُمْ امْرَأَةً`,
					description: `Telah mengabarkan kepada kami Muhammad Ibnul Mutsanna ia berkata, telah menceritakan kepada kami Khalid Ibnul Harits ia berkata, telah menceritakan kepada kami Humaid dari Al Hasan dari Abu Bakrah ia berkata, "Allah telah memeliharaku dengan sesuatu yang aku dengar dari Rasulullah ﷺ saat Kisra hancur, beliau bertanya, "Siapa yang mereka angkat sebagai raja?" para sahabat menjawab, "Puterinya." Beliau lalu bersabda, "Tidak akan beruntung suatu kaum yang menyerahkan perkaranya kepada seorang wanita."`
				},
				link: 'https://journal.uiad.ac.id/index.php/al-mubarak/article/view/1054'
			},
			{
				title: 'Kepemimpinan Perempuan Dalam Pandangan Islam',
				slug: 'kepemimpinan-perempuan-dalam-pandangan-islam',
				writer: 'Ahmad Zaini, Ahmad Hadiqul Umam, Al Muzafar Sodik, Muhammad Agorrul kirom',
				asal: 'Institut Ilmu Al-Qur’an An-Nur Yogyakarta',
				contact: 'agorrulkirom.21@gmail.com',
				hadis: {
					shahih: 'Tirmidzi:2188',
					content: `حَدَّثَنَا مُحَمَّدُ بْنُ الْمُثَنَّى حَدَّثَنَا خَالِدُ بْنُ الْحَارِثِ حَدَّثَنَا حُمَيْدٌ الطَّوِيلُ عَنْ الْحَسَنِ عَنْ أَبِي بَكْرَةَ قَالَ عَصَمَنِي اللَّهُ بِشَيْءٍ سَمِعْتُهُ مِنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لَمَّا هَلَكَ كِسْرَى قَالَ مَنْ اسْتَخْلَفُوا قَالُوا ابْنَتَهُ فَقَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لَنْ يُفْلِحَ قَوْمٌ وَلَّوْا أَمْرَهُمْ امْرَأَةً قَالَ فَلَمَّا قَدِمَتْ عَائِشَةُ يَعْنِي الْبَصْرَةَ ذَكَرْتُ قَوْلَ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَعَصَمَنِي اللَّهُ بِهِ قَالَ أَبُو عِيسَى هَذَا حَدِيثٌ حَسَنٌ صَحِيحٌ`,
					description: `Telah menceritakan kepada kami Muhammad bin Al Mutsanna, telah menceritakan kepada kami Khalid bin Al Harits, telah menceritakan kepada kami Humaid Ath Thawil dari Al Hasan dari Abu Bakrah berkata, Allah menjagaku dengan sesuatu yang aku dengar dari Rasulullah ﷺ saat Kisra mati, beliau bersabda, "Siapa yang menjadi penggantinya?" mereka menjawab: Putrinya, Nabi ﷺ bersabda, "Tidak akan beruntung suatu kaum yang menguasakan urusan mereka kepada seorang wanita." Berkata Abu Bakrah: Saat 'Aisyah tiba di Bashrah, aku sebutkan sabda Rasulullah ﷺ lalu Allah Subhaanahu wa Ta'ala menjagaku dengan sabda itu. Berkata Abu Isa: Hadits ini hasan shahih.`
				},
				link: 'https://ejournal.staindirundeng.ac.id/index.php/bashair/article/view/883'
			},
			{
				title: 'Teori Perubahan Sosial Dalam Memahami Hadis Kepemimpinan Perempuan',
				slug: 'teori-perubahan-sosial-dalam-memahami-hadis-kepemimpinan-perempuan',
				writer: 'Afrizal Fahmi Ali',
				asal: 'Pascasarjana UIN Sunan Gunung Djati Bandung',
				contact: 'afrizalfahmiali29@gmail.com',
				hadis: {
					shahih: 'Shahih Bukhari:4073',
					content: `حَدَّثَنَا عُثْمَانُ بْنُ الْهَيْثَمِ حَدَّثَنَا عَوْفٌ عَنْ الْحَسَنِ عَنْ أَبِي بَكْرَةَ قَالَ لَقَدْ نَفَعَنِي اللَّهُ بِكَلِمَةٍ سَمِعْتُهَا مِنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَيَّامَ الْجَمَلِ بَعْدَ مَا كِدْتُ أَنْ أَلْحَقَ بِأَصْحَابِ الْجَمَلِ فَأُقَاتِلَ مَعَهُمْ قَالَ لَمَّا بَلَغَ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَنَّ أَهْلَ فَارِسَ قَدْ مَلَّكُوا عَلَيْهِمْ بِنْتَ كِسْرَى قَالَ لَنْ يُفْلِحَ قَوْمٌ وَلَّوْا أَمْرَهُمْ امْرَأَةً`,
					description: `Telah menceritakan kepada kami Utsman bin Haitsam, telah menceritakan kepada kami Auf dari Al Hasan dari Abu Bakrah dia berkata, Sungguh Allah telah memberikan manfaat kepadaku dengan suatu kalimat yang pernah aku dengar dari Rasulullah, -yaitu pada waktu perang Jamal tatkala aku hampir bergabung dengan para penunggang unta lalu aku ingin berperang bersama mereka.- Dia berkata, 'Tatkala sampai kepada Rasulullah ﷺ, bahwa penduduk Persia telah dipimpin oleh seorang anak perempuan putri raja Kisra, beliau bersabda, "Suatu kaum tidak akan beruntung, jika dipimpin oleh seorang wanita."`
				},
				link: 'https://e-jurnal.stiqarrahman.ac.id/index.php/dirayah/article/view/101'
			},
			{
				title: 'Reinterpretasi Hadis Perempuan Di Ruang Publik Perspektif Feminisme Sosialis',
				slug: 'reinterpretasi-hadis-perempuan-di-ruang-publik-perspektif-feminisme-sosialis',
				writer: 'Nur Ikhlas',
				asal: 'Sekolah Tinggi Agama Islam Negeri Sultan Abdurrahman Kepulauan Riau',
				contact: 'nur_ikhlas@stainkepri.ac.id',
				hadis: {
					shahih: 'Shahih Muslim:2389',
					content: `حَدَّثَنَا أَبُو كَامِلٍ الْجَحْدَرِيُّ حَدَّثَنَا بِشْرٌ يَعْنِي ابْنَ مُفَضَّلٍ حَدَّثَنَا سُهَيْلُ بْنُ أَبِي صَالِحٍ عَنْ أَبِيهِ عَنْ أَبِي هُرَيْرَةَ قَالَ قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لَا يَحِلُّ لِامْرَأَةٍ أَنْ تُسَافِرَ ثَلَاثًا إِلَّا وَمَعَهَا ذُو مَحْرَمٍ مِنْهَا`,
					description: `Telah menceritakan kepada kami Abu Kamil Al Jahdari, telah menceritakan kepada kami Bisyr bin Mufadldlal, telah menceritakan kepada kami Suhail bin Abu Shalih dari bapaknya dari Abu Hurairah ia berkata, Rasulullah ﷺ bersabda, "Tidak halal bagi seorang wanita untuk mengadakan perjalanan selama tiga hari kecuali disertai mahramnya."`
				},
				link: 'http://ejournal.uinib.ac.id/jurnal/index.php/ulunnuha/article/view/4020'
			}
		]
	},
	{
		theme: 'Memuliakan Wanita',
		slug: 'memuliakan-wanita',
		list: [
			{
				title: 'Reinterpretasi Hadis Perempuan Tercipta dari Tulang Rusuk',
				slug: 'reinterpretasi-hadis-perempuan-tercipta-dari-tulang-rusuk',
				writer: 'Nilna Fadlillah',
				asal: 'Institut Agama Islam Qomaruddin Gresik',
				contact: 'Nilna.fa@gmail.com',
				hadis: {
					shahih: 'Shahih Bukhari:3084',
					content: `حَدَّثَنَا أَبُو كُرَيْبٍ وَمُوسَى بْنُ حِزَامٍ قَالَا حَدَّثَنَا حُسَيْنُ بْنُ عَلِيٍّ عَنْ زَائِدَةَ عَنْ مَيْسَرَةَ الْأَشْجَعِيِّ عَنْ أَبِي حَازِمٍ عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ اسْتَوْصُوا بِالنِّسَاءِ فَإِنَّ الْمَرْأَةَ خُلِقَتْ مِنْ ضِلَعٍ وَإِنَّ أَعْوَجَ شَيْءٍ فِي الضِّلَعِ أَعْلَاهُ فَإِنْ ذَهَبْتَ تُقِيمُهُ كَسَرْتَهُ وَإِنْ تَرَكْتَهُ لَمْ يَزَلْ أَعْوَجَ فَاسْتَوْصُوا بِالنِّسَاءِ`,
					description: `Telah bercerita kepada kami Abu Kuraib dan Musa bin Hizam, keduanya berkata, telah bercerita kepada kami Husain bin "Ali dari Za'idah dari Maisarah Al Asyja'iy dari Abu Hazim dari Abu Hurairah radhiallahu'anhu, ia berkata, Rasulullah ﷺ bersabda, "Saling berwasiatlah kalian (dalam menjaga hubungan baik) terhadap para wanita. Sesungguhnya wanita itu diciptakan dari tulang rusuk yang bengkok, sementara yang paling bengkok dari tulang rusuk adalah pangkalnya. Jika engkau hendak mencoba untuk meluruskannya, maka ia akan patah, namun bila engkau biarkan, maka ia akan tetap bengkok. Oleh karena itu, saling berwasiatlah kalian terhadap para wanita".`
				},
				link: 'https://ejournal.uin-suka.ac.id/ushuluddin/Living/article/view/2017'
			},
			{
				title: 'Revitalisasi Nilai-Nilai Khitbah di dalam Hadis Sebagai Upaya Menjaga Kemuliaan Perempuan (Analisis Hadis Tematik)',
				slug: 'revitalisasi-nilai-nilai-khitbah-di-dalam-hadis-sebagai-upaya-menjaga',
				writer: 'Husnul Khatimah',
				asal: 'Institut Agama Islam Negeri Madura, Indonesia',
				contact: 'husnul.MDR78@gmail.com',
				hadis: {
					shahih: 'Shahih Bukhari:4700',
					content: `حَدَّثَنَا مُسَدَّدٌ حَدَّثَنَا يَحْيَى عَنْ عُبَيْدِ اللَّهِ قَالَ حَدَّثَنِي سَعِيدُ بْنُ أَبِي سَعِيدٍ عَنْ أَبِيهِ عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ عَنْ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ تُنْكَحُ الْمَرْأَةُ لِأَرْبَعٍ لِمَالِهَا وَلِحَسَبِهَا وَجَمَالِهَا وَلِدِينِهَا فَاظْفَرْ بِذَاتِ الدِّينِ تَرِبَتْ يَدَاكَ`,
					description: `Telah menceritakan kepada kami Musaddad, telah menceritakan kepada kami Yahya dari Ubaidullah ia berkata, telah menceritakan kepadaku Sa'id bin Abu Sa'id dari bapaknya dari Abu Hurairah radhiallahu'anhu, dari Nabi ﷺ, beliau bersabda, "Wanita itu dinikahi karena empat hal, karena hartanya, karena keturunannya, karena kecantikannya dan karena agamanya. Maka pilihlah karena agamanya, niscaya kamu akan beruntung."`
				},
				link: 'http://ejournal.iainmadura.ac.id/index.php/elnubuwwah/article/view/8433'
			},
			{
				title: 'Mudahnya Mencari Surga Bagi Wanita yang Sudah Menikah',
				slug: 'mudahnya-mencari-surga-bagi-wanita-yang-sudah-menikah',
				writer: 'Eka Nurohmah',
				asal: 'Institut Agama Islam Negeri Metro',
				contact: 'Ekanurohmah28@gmail.com',
				hadis: {
					shahih: 'Shahih Bukhari:4700',
					content: `حَدَّثَنَا مُسَدَّدٌ حَدَّثَنَا يَحْيَى عَنْ عُبَيْدِ اللَّهِ قَالَ حَدَّثَنِي سَعِيدُ بْنُ أَبِي سَعِيدٍ عَنْ أَبِيهِ عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ عَنْ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ تُنْكَحُ الْمَرْأَةُ لِأَرْبَعٍ لِمَالِهَا وَلِحَسَبِهَا وَجَمَالِهَا وَلِدِينِهَا فَاظْفَرْ بِذَاتِ الدِّينِ تَرِبَتْ يَدَاكَ`,
					description: `Telah menceritakan kepada kami Musaddad, telah menceritakan kepada kami Yahya dari Ubaidullah ia berkata, telah menceritakan kepadaku Sa'id bin Abu Sa'id dari bapaknya dari Abu Hurairah radhiallahu'anhu, dari Nabi ﷺ, beliau bersabda, "Wanita itu dinikahi karena empat hal, karena hartanya, karena keturunannya, karena kecantikannya dan karena agamanya. Maka pilihlah karena agamanya, niscaya kamu akan beruntung."`
				},
				link: 'https://www.academia.edu/download/63597724/artikel_munakahat_fiks_banget20200611-94409-i6wmou.pdf'
			},
			{
				title: 'Gender Perspektif Hadis',
				slug: 'gender-perspektif-hadis',
				writer: 'Staf Pengajar Abdul Mutakabbir',
				asal: 'Ma’had Aly Uin Aalauddin',
				contact: 'abdulmutakabbir90@gmai.com',
				hadis: {
					shahih: 'Shahih Muslim:1468',
					content: `و حَدَّثَنَا أَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ حَدَّثَنَا حُسَيْنُ بْنُ عَلِيٍّ عَنْ زَائِدَةَ عَنْ مَيْسَرَةَ عَنْ أَبِي حَازِمٍ عَنْ أَبِي هُرَيْرَةَ عَنْ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَإِذَا شَهِدَ أَمْرًا فَلْيَتَكَلَّمْ بِخَيْرٍ أَوْ لِيَسْكُتْ وَاسْتَوْصُوا بِالنِّسَاءِ فَإِنَّ الْمَرْأَةَ خُلِقَتْ مِنْ ضِلَعٍ وَإِنَّ أَعْوَجَ شَيْءٍ فِي الضِّلَعِ أَعْلَاهُ إِنْ ذَهَبْتَ تُقِيمُهُ كَسَرْتَهُ وَإِنْ تَرَكْتَهُ لَمْ يَزَلْ أَعْوَجَ اسْتَوْصُوا بِالنِّسَاءِ خَيْرًا`,
					description: `Telah menceritakan kepada kami Abu Bakar bin Abu Syaibah telah menceritakan kepada kami Husain bin Ali dari Za'idah dari Maisarah dari Abu Hazim dari Abu Hurairah dari Nabi shallallahu 'alaihi wa sallam beliau bersabda: "Barangsiapa yang beriman kepada Allah dan Hari Akhir, kemudian dia menyaksikan suatu peristiwa, hendaklah dia berbicara dengan baik atau diam, dan berwasiatlah kepada wanita dengan kebaikan, karena sesungguhnya dia diciptakan dari tulang rusuk, dan bagian yang paling bengkok adalah tulang rusuk yang paling atas, jika kamu berusaha untuk meluruskannya, niscaya akan patah, jika kamu membiarkannya, dia akan senantiasa bengkok, maka berwasiatlah terhadap wanita dengan kebaikan."`
				},
				link: 'https://journal3.uin-alauddin.ac.id/index.php/tahdis/article/view/2779'
			}
		]
	},
	{
		theme: 'Perempuan Di Bidang Olahraga',
		slug: 'perempuan-di-bidang-olahraga',
		list: [
			{
				title: 'Partisipasi Perempuan Dalam Olahraga Perspektif Hermeneutika Hadis Fazlur Rahman',
				slug: 'partisipasi-perempuan-dalam-olahraga-perspektif-hermeneutika-hadis',
				writer: 'Rianto Hasan',
				asal: 'UIN Sunan Kalijaga Yogyakarta',
				contact: 'hasanrianto24@gmail.com',
				hadis: {
					shahih: 'Abu Dawud:2214',
					content: `حَدَّثَنَا أَبُو صَالِحٍ الْأَنْطَاكِيُّ مَحْبُوبُ بْنُ مُوسَى أَخْبَرَنَا أَبُو إِسْحَقَ يَعْنِي الْفَزَارِيَّ عَنْ هِشَامِ بْنِ عُرْوَةَ عَنْ أَبِيهِ وَعَنْ أَبِي سَلَمَةَ عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا أَنَّهَا كَانَتْ مَعَ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فِي سَفَرٍ قَالَتْ فَسَابَقْتُهُ فَسَبَقْتُهُ عَلَى رِجْلَيَّ فَلَمَّا حَمَلْتُ اللَّحْمَ سَابَقْتُهُ فَسَبَقَنِي فَقَالَ هَذِهِ بِتِلْكَ السَّبْقَةِ`,
					description: `Telah menceritakan kepada kami Abu Shalih Al Anthoki Mahbub bin Musa, telah mengabarkan kepada kami Al Fazari, dari Hisyam bin 'Urwah, dari ayahnya, dan dari Abu Salamah, dari Aisyah, radliyallahu 'anha, bahwa Ia pernah bersama Nabi shallallahu 'alaihi wa sallam dalam suatu perjalanan, ia berkata: Kemudian aku berlomba dengan beliau dengan berlari, lalu aku mendahului beliau. Kemudian setelah gemuk aku berlomba dengan beliau, maka beliau mendahuluiku. Beliau berkata: "Ini menggantikan kekalahan pada perlombaan terdahulu."`
				},
				link: 'https://ejournal.uin-suka.ac.id/ushuluddin/alquran/article/view/2001-03'
			}
		]
	},
	{
		theme: 'Perempuan Di Bidang Pendidikan',
		slug: 'perempuan-di-bidang-pendidikan',
		list: [
			{
				title: 'Pendidikan Perempuan Menurut Rahmah El Yunusiyah Dalam Perspektif Hadis',
				slug: 'pendidikan-perempuan-menurut-rahmah-el-yunusiah-dalam-perspektif-hadis',
				writer: 'Febria Monicha, Endiri Yenti',
				asal: 'IAIN Bukittinggi',
				contact: 'febrimonicha4@gmail.com,endri.yenti@yahoo.co.id',
				hadis: {
					shahih: 'Sunan Ibnu Majah:224',
					content: `حَدَّثَنَا هِشَامُ بْنُ عَمَّارٍ قَالَ: حَدَّثَنَا حَفْصُ بْنُ سُلَيْمَانَ قَالَ: حَدَّثَنَا كَثِيرُ بْنُ شِنْظِيرٍ، عَنْ مُحَمَّدِ بْنِ سِيرِينَ، عَنْ أَنَسِ بْنِ مَالِكٍ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: «طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ، وَوَاضِعُ الْعِلْمِ عِنْدَ غَيْرِ أَهْلِهِ كَمُقَلِّدِ الْخَنَازِيرِ الْجَوْهَرَ وَاللُّؤْلُؤَ وَالذَّهَبَ»`,
					description: `Ahmad bin Abdul Wahhab menceritakan kepada kami bahwa ia berkata Ali bin Iyasy al-Himsi menceritakan bahwa Hafas bin Sulaiman menceritakan Kasir bin syanzir dari Muhammad bin Sirin dari Anas bin Malik ia berkata, Rasulullah SAW bersabda,“Mencari ilmu dalah kewajiban setiap muslim`
				},
				link: 'http://journal.ikopin.ac.id/index.php/humantech/article/view/1136'
			},
			{
				title: 'Artikulasi Kesetaraan Gender Dalam Pendidikan (Perspektif Islam)',
				slug: 'artikulasi-kesetaraan-gender-dalam-pendidikan',
				writer: 'Wahyuddin Naro',
				asal: 'UIN Alauddin Makassar',
				contact: '-',
				hadis: {
					shahih: 'Shahih Bukhari:4789',
					content: `حَدَّثَنَا أَبُو النُّعْمَانِ حَدَّثَنَا حَمَّادُ بْنُ زَيْدٍ عَنْ أَيُّوبَ عَنْ نَافِعٍ عَنْ عَبْدِ اللَّهِ قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ فَالْإِمَامُ رَاعٍ وَهُوَ مَسْئُولٌ وَالرَّجُلُ رَاعٍ عَلَى أَهْلِهِ وَهُوَ مَسْئُولٌ وَالْمَرْأَةُ رَاعِيَةٌ عَلَى بَيْتِ زَوْجِهَا وَهِيَ مَسْئُولَةٌ وَالْعَبْدُ رَاعٍ عَلَى مَالِ سَيِّدِهِ وَهُوَ مَسْئُولٌ أَلَا فَكُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ`,
					description: `Telah menceritakan kepada kami Abu Nu'man Telah menceritakan kepada kami Hammad bin Zaid dari Ayyub dari Nafi' dari Abdullah ia berkata: Nabi shallallahu 'alaihi wa sallam bersabda: "Setiap kalian adalah pemimpin, dan setiap kalian akan dimintai pertanggungjawabannya. Seorang laki-laki adalah pemimpin atas keluarganya dan ia akan dimintai pertanggungjawabannya. Seorang wanita adalah pemimpin atas rumah suaminya, dan ia pun akan dimintai pertanggung jawabannya. Dan seorang budak juga pemimpin atas harta tuannya dan ia juga akan dimintai pertanggung jawabannya. Sungguh setiap kalian adalah pemimpin dan setiap kalian akan dimintai pertanggung jawabannya."`
				},
				link: 'https://journal3.uin-alauddin.ac.id/index.php/diskursus_islam/article/view/1319'
			}
		]
	},
	{
		theme: 'Perempuan Dalam Pernikahan',
		slug: 'perempuan-dalam-pernikahan',
		list: [
			{
				title: 'Hikmah Walimah al-’Ursy (Pesta Pernikahan) dengan Kehormatan Perempuan Perspektif Hadis',
				slug: 'hikmah-walimah-al-ursy-dengan-kehormatan',
				writer: 'Lia Laquna Jamali, Lukman Zain, Ahmad Faqih Hasyim',
				asal: '-',
				contact: 'lialaquna22@gmail.com,Elzamsya@yahoo.com,Bungfaq@gmail.com',
				hadis: {
					shahih: 'Shahih Bukhari:5167',
					content: `حَدَّثَنَا عَلِيٌّ حَدَّثَنَا سُفْيَانُ قَالَ حَدَّثَنِي حُمَيْدٌ أَنَّهُ سَمِعَ أَنَسًا رَضِيَ اللَّهُ عَنْهُ قَالَ سَأَلَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَبْدَ الرَّحْمَنِ بْنَ عَوْفٍ وَتَزَوَّجَ امْرَأَةً مِنْ الْأَنْصَارِ كَمْ أَصْدَقْتَهَا قَالَ وَزْنَ نَوَاةٍ مِنْ ذَهَبٍ وَعَنْ حُمَيْدٍ سَمِعْتُ أَنَسًا قَالَ لَمَّا قَدِمُوا الْمَدِينَةَ نَزَلَ الْمُهَاجِرُونَ عَلَى الْأَنْصَارِ فَنَزَلَ عَبْدُ الرَّحْمَنِ بْنُ عَوْفٍ عَلَى سَعْدِ بْنِ الرَّبِيعِ فَقَالَ أُقَاسِمُكَ مَالِي وَأَنْزِلُ لَكَ عَنْ إِحْدَى امْرَأَتَيَّ قَالَ بَارَكَ اللَّهُ لَكَ فِي أَهْلِكَ وَمَالِكَ فَخَرَجَ إِلَى السُّوقِ فَبَاعَ وَاشْتَرَى فَأَصَابَ شَيْئًا مِنْ أَقِطٍ وَسَمْنٍ فَتَزَوَّجَ فَقَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَوْلِمْ وَلَوْ بِشَاةٍ`,
					description: `Telah menceritakan kepada kami Ali, telah menceritakan kepada kami Sufyan ia berkata: Telah menceritakan kepadaku Humaid bahwa ia mendengar Anas radliyallahu 'anhu berkata: Nabi shallallahu 'alaihi wa sallam pernah bertanya kepada Abdurrahman bin Auf saat ia menikahi seorang wanita Anshar: "Berapa mahar yang kamu berikan padanya?" Ia pun menjawab: "Seukuran biji berupa emas." Dan dari Humaid: Aku mendengar Anas berkata: Ketika mereka sampai di kota Madinah, kaum Muhajirin pun singgah di tempat orang-orang Anshar. Lalu Abdurrahman bin Auf tinggal di tempat Sa'd bin Ar Rabi'. Lalu Sa'd berkata padanya: "Aku akan membagi hartaku kepadamu dan menikahkanmu dengan salah seorang isteriku." Abdurrahman berkata: "Semoga Allah memberi keberkahan pada keluarga dan juga hartamu." Lalu ia pun keluar menuju pasar dan berjual beli hingga ia mendapatkan keuntungan berupa keju dan samin, dan ia pun menikah. Maka Nabi shallallahu 'alaihi wa sallam bersabda: "Adakanlah walimah meskipun hanya dengan seekor kambing."`
				},
				link: 'https://www.jurnal.syekhnurjati.ac.id/index.php/diya/article/view/1161'
			},
			{
				title: 'Kriteria Memilih Pasangan Hidup (Kajian Hermeneutika Hadis)',
				slug: 'kriteria-memilih-pasangan-hidup',
				writer: 'Nurun Najwah',
				asal: 'UIN Sunan Kalijaga Yogyakarta',
				contact: '-',
				hadis: {
					content: `حَدَّثَنَا الْحَسَنُ بْنُ أَبِي الرَّبِيعِ أَنْبَأَنَا عَبْدُ الرَّزَّاقِ عَنْ مَعْمَرٍ عَنْ ثَابِتٍ الْبُنَانِيِّ عَنْ بَكْرِ بْنِ عَبْدِ اللَّهِ الْمُزَنِيِّ عَنْ الْمُغِيرَةِ بْنِ شُعْبَةَ قَالَ أَتَيْتُ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَذَكَرْتُ لَهُ امْرَأَةً أَخْطُبُهَا فَقَالَ اذْهَبْ فَانْظُرْ إِلَيْهَا فَإِنَّهُ أَجْدَرُ أَنْ يُؤْدَمَ بَيْنَكُمَا فَأَتَيْتُ امْرَأَةً مِنْ الْأَنْصَارِ فَخَطَبْتُهَا إِلَى أَبَوَيْهَا وَأَخْبَرْتُهُمَا بِقَوْلِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَكَأَنَّهُمَا كَرِهَا ذَلِكَ قَالَ فَسَمِعَتْ ذَلِكَ الْمَرْأَةُ وَهِيَ فِي خِدْرِهَا فَقَالَتْ إِنْ كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَمَرَكَ أَنْ تَنْظُرَ فَانْظُرْ وَإِلَّا فَأَنْشُدُكَ كَأَنَّهَا أَعْظَمَتْ ذَلِكَ قَالَ فَنَظَرْتُ إِلَيْهَا فَتَزَوَّجْتُهَا فَذَكَرَ مِنْ مُوَافَقَتِهَا`,
					description: `Telah menceritakan kepada kami Al Hasan bin Abu Ar Rabi' berkata: telah memberitakan kepada kami Abdurrazaq dari Ma'mar dari Tsabit Al Bunani dari Bakr bin Abdullah Al Muzani dari Al Mughirah bin Syu'bah ia berkata: "Aku menemui Nabi shallallahu 'alaihi wa sallam, lalu aku sebutkan perihal wanita yang akan aku pinang. Beliau bersabda: "Pergi dan lihatlah ia, sebab itu akan membuat rumah tanggamu kekal." Setelah itu aku mendatangi dan meminangnya melalui kedua orang tuanya, dan aku sampaikan kepada keduanya tentang sabda Nabi shallallahu 'alaihi wa sallam. Namun sepertinya mereka berdua kurang menyukainya." Al Mughirah berkata: "Percakapan itu didengar oleh anak wanitanya yang ada di balik satir, hingga ia berkata: "Jika memang Rasulullah shallallahu 'alaihi wa sallam memerintahkanmu untuk melihat, maka lihatlah. Namun jika tidak, maka aku akan menyumpahimu! " seakan wanita itu benar-benar menganggap besar perkara tersebut. Al Mughirah berkata: "Maka aku pun melihat dan menikahinya." Al Mughirah lalu menyebutkan persetujuannya."`
				},
				link: 'https://ejournal.uin-suka.ac.id/ushuluddin/alquran/article/view/1701-05'
			},
			{
				title: 'Pernikahan Dini Dalam Perspektif Hadis',
				slug: 'pernikahan-dini-dalam-perspektif-hadis',
				writer: 'Fulaifah Azzahra, Arif Friyad',
				asal: 'IAIN Kudus',
				contact: 'fulaihahazzahra@gmail.com,Ariffriyadi@iainkudus.ac.id',
				hadis: {
					shahih: 'Shahih Muslim:1422',
					content: `و حَدَّثَنَا يَحْيَى بْنُ يَحْيَى وَإِسْحَقُ بْنُ إِبْرَاهِيمَ وَأَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ وَأَبُو كُرَيْبٍ قَالَ يَحْيَى وَإِسْحَقُ أَخْبَرَنَا و قَالَ الْآخَرَانِ حَدَّثَنَا أَبُو مُعَاوِيَةَ عَنْ الْأَعْمَشِ عَنْ إِبْرَاهِيمَ عَنْ الْأَسْوَدِ عَنْ عَائِشَةَ قَالَتْ تَزَوَّجَهَا رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَهِيَ بِنْتُ سِتٍّ وَبَنَى بِهَا وَهِيَ بِنْتُ تِسْعٍ وَمَاتَ عَنْهَا وَهِيَ بِنْتُ ثَمَان عَشْرَةَ`,
					description: `Dan telah menceritakan kepada kami Yahya bin Yahya, Ishaq bin Ibrahim, Abu Bakar bin Abi Syaibah dan Abu Kuraib. Yahya dan Ishaq mengatakan: Telah mengabarkan kepada kami, sedangkan yang dua mengatakan: Telah menceritakan kepada kami Abu Mu'awiyah dari Al A'masy dari Ibrahim dari Al Aswad dari 'Aisyah dia berkata bahwa Rasulullah shallallahu 'alaihi wa sallam menikahinya ketika dia berusia enam tahun dan berumah tangga dengannya ketika berusia sembilan tahun dan tatkala beliau wafat dia berusia delapan belas tahun."`
				},
				link: 'http://103.35.140.53/index.php/MINARET/article/view/47'
			}
		]
	},
	{
		theme: 'Diskriminasi',
		slug: 'diskriminasi',
		list: [
			{
				title: 'Hadis tentang perempuan setengah akal dan agamanya : studi maanil hadis',
				slug: 'hadis-tentang-perempuan-setengah-akal-dan-agamanya',
				writer: 'Habibeb Bullah',
				asal: 'Institut Pesantren KH. Abdul Chalim (IKHAC), Mojokerto',
				contact: 'habibhabieb@gmail.com',
				hadis: {
					shahih: 'HR. Bukhari',
					content: `عَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ عَنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَنَّهُ قَالَ يَا مَعْشَرَ النِّسَاءِ تَصَدَّقْنَ وَأَكْثِرْنَ الِاسْتِغْفَارَ فَإِنِّي رَأَيْتُكُنَّ أَكْثَرَ أَهْلِ النَّارِ فَقَالَتْ امْرَأَةٌ مِنْهُنَّ جَزْلَةٌ وَمَا لَنَا يَا رَسُولَ اللَّهِ أَكْثَرَ أَهْلِ النَّارِ قَالَ تُكْثِرْنَ اللَّعْنَ وَتَكْفُرْنَ الْعَشِيرَ وَمَا رَأَيْتُ مِنْ نَاقِصَاتِ عَقْلٍ وَدِينٍ أَغْلَبَ لِذِي لُبٍّ مِنْكُنَّ قَالَتْ يَا رَسُولَ اللَّهِ وَمَا نُقْصَانُ الْعَقْلِ وَالدِّينِ قَالَ أَمَّا نُقْصَانُ الْعَقْلِ فَشَهَادَةُ امْرَأَتَيْنِ تَعْدِلُ شَهَادَةَ رَجُلٍ فَهَذَا نُقْصَانُ الْعَقْلِ وَتَمْكُثُ اللَّيَالِي مَا تُصَلِّي وَتُفْطِرُ فِي رَمَضَانَ فَهَذَا نُقْصَانُ الدِّينِ`,
					description: `“Diriwayatkan dari Abdullah bin Umar bahwa Rasulullah shallallahu ‘alaihi wasallam bersabda: "Wahai kaum wanita! Bersedekahlah kamu dan perbanyaklah istighfar. Karena, aku melihat banyak di antara kalian adalah penghuni neraka." Lantas seorang wanita yang pintar di antara mereka bertanya, "Wahai Rasulullah, kenapa kaum wanita banyak menjadi penghuni neraka?" Rasulullah shallallahu 'alaihi wasallam menjawab: "Kalian banyak mengutuk dan mengingkari (pemberian nikmat dari) suami. Aku tidak melihat kaum yang kurang akal dan agamanya itu lebih banyak dari yang lebih memiliki akal – kecuali dari golongan kalian."   Wanita itu bertanya lagi, "Wahai Rasulullah! Apakah maksud kekurangan akal dan agama itu?" Rasulullah shallallahu 'alaihi wasallam menjawab: "Maksud kekurangan akal ialah persaksian dua orang wanita sama dengan persaksian seorang lelaki. Inilah yang dikatakan kekurangan akal. Begitu juga kaum wanita tidak beribadah kala malam-malam juga akan berbuka pada bulan Ramadhan (karena sebab haid). Inilah yang dikatakan kekurangan agama." (HR al-Bukhari).`
				},
				link: 'https://journal3.uin-alauddin.ac.id/index.php/tahdis/article/view/17138'
			},
			{
				title: 'Ketidakadilan Gender dalam Perspektif Hadis',
				slug: 'ketidakadilan-gender-dalam-perspektif-hadis',
				writer: 'Nur Indah Permatasari',
				asal: 'UIN Sunan Gunung Djati Bandung',
				contact: 'nipermata30@gmail.com',
				hadis: {
					shahih: 'HR. Bukhari',
					content: `عَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ عَنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَنَّهُ قَالَ يَا مَعْشَرَ النِّسَاءِ تَصَدَّقْنَ وَأَكْثِرْنَ الِاسْتِغْفَارَ فَإِنِّي رَأَيْتُكُنَّ أَكْثَرَ أَهْلِ النَّارِ فَقَالَتْ امْرَأَةٌ مِنْهُنَّ جَزْلَةٌ وَمَا لَنَا يَا رَسُولَ اللَّهِ أَكْثَرَ أَهْلِ النَّارِ قَالَ تُكْثِرْنَ اللَّعْنَ وَتَكْفُرْنَ الْعَشِيرَ وَمَا رَأَيْتُ مِنْ نَاقِصَاتِ عَقْلٍ وَدِينٍ أَغْلَبَ لِذِي لُبٍّ مِنْكُنَّ قَالَتْ يَا رَسُولَ اللَّهِ وَمَا نُقْصَانُ الْعَقْلِ وَالدِّينِ قَالَ أَمَّا نُقْصَانُ الْعَقْلِ فَشَهَادَةُ امْرَأَتَيْنِ تَعْدِلُ شَهَادَةَ رَجُلٍ فَهَذَا نُقْصَانُ الْعَقْلِ وَتَمْكُثُ اللَّيَالِي مَا تُصَلِّي وَتُفْطِرُ فِي رَمَضَانَ فَهَذَا نُقْصَانُ الدِّينِ`,
					description: `“Diriwayatkan dari Abdullah bin Umar bahwa Rasulullah shallallahu ‘alaihi wasallam bersabda: "Wahai kaum wanita! Bersedekahlah kamu dan perbanyaklah istighfar. Karena, aku melihat banyak di antara kalian adalah penghuni neraka." Lantas seorang wanita yang pintar di antara mereka bertanya, "Wahai Rasulullah, kenapa kaum wanita banyak menjadi penghuni neraka?" Rasulullah shallallahu 'alaihi wasallam menjawab: "Kalian banyak mengutuk dan mengingkari (pemberian nikmat dari) suami. Aku tidak melihat kaum yang kurang akal dan agamanya itu lebih banyak dari yang lebih memiliki akal – kecuali dari golongan kalian."   Wanita itu bertanya lagi, "Wahai Rasulullah! Apakah maksud kekurangan akal dan agama itu?" Rasulullah shallallahu 'alaihi wasallam menjawab: "Maksud kekurangan akal ialah persaksian dua orang wanita sama dengan persaksian seorang lelaki. Inilah yang dikatakan kekurangan akal. Begitu juga kaum wanita tidak beribadah kala malam-malam juga akan berbuka pada bulan Ramadhan (karena sebab haid). Inilah yang dikatakan kekurangan agama." (HR al-Bukhari).`
				},
				link: 'https://conferences.uinsgd.ac.id/index.php/gdcs/article/view/1354'
			}
		]
	}
]

export const JurnalList: Jurnal[] = [
	{
		title: 'Jurnal Hadis Perempuan th. 2019',
		tahun: '2019',
		list: [
			{
				title: 'Analisis terhadap Hadis-Hadis pemberdaya perempuan',
				slug: 'analisis-terhadap-hadis-pemberdaya',
				writer: 'Nofri Andy N.',
				asal: 'Dosen IAIN Bukittinggi',
				contact: 'nafri_andi@yahoo.co.id',
				abstract:
					'In 2000 with the issuance of Presidential Instruction No. 9 concerning Gender Mainstreaming in National Development with the aim of accelerating national development in various fields of life in accordance with the mandate of opening the 1945 Constitution. This Instruction instructs all Ministries / Institutions and Governments both central and regional to mainstream gender in the entire development process from planning to evaluation. The campaign for gender mainstreaming in development is a strategy to reduce the gap between Indonesian male and female residents in accessing and obtaining development benefits and increasing their participation in decision making and control over development resources.'
			},
			{
				title: 'Peran Perempuan Dalam Rumah Tangga Perspektif Islam',
				slug: 'peran-perempuan-dalam-rumah-tangga-perspektif-islam',
				writer: 'Eko Zulfikar',
				asal: 'Institut Agama Islam Negeri (IAIN) Tulungagung',
				contact: 'ekozulfikar2020@gmail.com',
				abstract:
					'Parents are a family component consisting of father (husband) and mother (wife). They are the result of a sacred bond commonly called marriage. Each of them has an important role, especially in the mother (wife) because it is generally the most authoritative mother in forming a good household (saki>nah). This paper will introduce how the role of women in the household perspective of the Islam. By using a thematic approach, this paper focused on the role of women as a wife and as a mother in the eyes of Alquran and hadith. Thus, it was found that the role of women as wives is at least three points; become husband’s partner biologically and psychologically, and become manager in managing the household. While the role of women as a mother at least there are three points as well; containing children, childbirth and breastfeeding, and nurturing and educating children.'
			},
			{
				title: 'Reinterpretasi Hadis Perempuan Tercipta dari Tulang Rusuk',
				slug: 'reinterpretasi-hadis-perempuan-tercipta-dari-tulang-rusuk',
				writer: 'Nilna Fadlillah',
				asal: 'Institut Agama Islam Qomaruddin Gresik',
				contact: 'Nilna.fa@gmail.com',
				abstract:
					'Textual understanding of the hadith about “creation of woman from the ribs” leads to the understanding that woman are under male domination. This position causes woman’s movements and rights to be narrow and limited. This is certainly contrary to the values of justice as basic principle of Islam. Therefore, a review of this hadith needs to be understood metaphorically. Hadith about “creation of woman from the ribs” actually aims to increase the degree and dignity of woman, positioned as a life partner. So that realtions between man and woman can be created in harmony by protecting and respecting each other.'
			},
			{
				title: 'Kontekstualisasi hadis peminangan perempuan terhadap laki-laki',
				slug: 'kontekstualisasi-hadis-peminangan-perempuan-terhadap-laki-laki',
				writer: 'Rianto Hasan',
				asal: 'UIN Sunan Kalijaga Yogyakarta',
				contact: 'hasanrianto24@gmail.com',
				abstract: `Muslim society perception of gender issues are influenced and constructed based on their religious understanding. Oftentimes, controversy arises because of difference in perspective regarding the discussion. One of factual problem that is often questioned is the discourse about women's participation in the sport. Therefore this paper was made by making the above polemic as an academic problem that was answered based on the epistemological fundamental of the hadith, specifically using the Fazlur Rahman’s hermeneutic method of Hadith. From the research that has been done it was found that Islam affirms sporting activity for women both the activity is carried out as an ordinary physical routine, and it is occupied as a field of work as a female athlete whose pioneering sport activity for self-career development. This validity is obtained by women with several prerequisites : 1). Comply with religious norms, decency, and other consideration such as medical procedure in their activity so as to avoid the emergence of adverse effect or loss-material and immaterial-to personal and other people. 2). Balancing the division of time between sport activity and other routines that also have crucial value.`
			},
			{
				title: 'Pembacaan Hermeneutika Hadis Tentang Perintah Istri Bersujud Kepada Suami: Perspektif Hans-George Gadamer',
				slug: 'pembacaan-hermeneutika-hadis-tentang-perintah-istri-bersujud-kepada-suami',
				writer: 'Azzah Nurin Taufiqotuzzahro',
				asal: 'STAI Al Anwar, Sarang, Rembang',
				contact: 'azzahnurin08@gmail.com',
				abstract:
					'This article aims at analysing the misogynistic hadith of the prophet which contains the command of the wife prostrate to the husband. The understanding of the Hadith textually is claimed by some fraction as a misogynistic hadith, in which these hadiths allegedly contain content that degrading women. Through the concept of hermeneutics Hans[1]George Gadamer which has been meaningfulness as an appropriate solution, the command of the wife prostrate to the husband is not a misogynistic hadith that is to degrade women and put men in the front position. The concept of Hermeneutics Gadamer, which includes the theory of understanding, interpretation, and application, replied that the hadith implies the removal of the degree of women by providing an understanding to fulfil the rights and obligations between husband and wife, and be kind to each other. This is what distinguishes understanding in the book of hadith that is explained only by the text with the history.'
			}
		]
	},
	{
		title: 'Jurnal Hadis Perempuan th. 2020',
		tahun: '2020',
		list: [
			{
				title: 'Interpretasi Progresif Hadis Tema Perempuan',
				slug: 'interpretasi-progresif-hadis-tema-perempuan',
				writer: 'Yulmitra Handayani',
				asal: 'Universitas Islam Negeri (UIN) Sunan Kalijaga Yogyakarta',
				contact: 'yulmitrahandayani14@gmail.com',
				abstract:
					'This study departs from a compilation of women-themed hadiths that were interpreted progresively by Abdul Kodir in his book “60 Hadis Hak-Hak Perempuan Dalam Islam:Teks dan Interpretasi”. Another starting used to study this topic is because women-themed hadiths tend to affrim men’ssuperiority over women. Of the sixty hadith that have been interpreted, the researcher only chose a few hadiths, which are categorized in four major themes; the principle of male and female relations, women’s dignity, women’s choices and rights, and the relations of husband and wife. This study tries to learn and analyze how Abdul Kodir applies the theory of qira’ahmubadalah to these selected hadiths. The approach of this study are conceptual approach and content analysis approach. This study finds that qira’ah mubadalah is a progressive interpretation theory that relies on two things, the universal value of Islam and the substantial understanding of a text. Dialecting both things will be able to produce interpretations that carry the value of equality holistically. In the application level, Abdul Kodir has integrated Islamic universalism in understanding the substance of the text.'
			},
			{
				title: 'Kepemimpinan Perempuan pada Masyarakat dalam Perspektif Saʿīd Ramaḍān Al-Būṭī: Telaah Hadis Misoginis',
				slug: 'kepemimpinan-perempuan-pada-masyarakat-dalam-perspektif-said-ramadan',
				writer: 'Nasirudin Al Ahsani',
				asal: 'Institut Agama Islam Negeri Jember',
				contact: 'nasirudin@iain-jember.ac.id',
				abstract: `One discourse that is always taken into account in the Islamic world is the leadership of women in society. Patriarchal societies that always look down on women will always reject this discourse. In Islam, there are at least 3 groups in interpreting this discourse. First, the fundamentalists who always refuse, because they believe that a woman should only reign an internal household. Second, the liberal groups that are completely following western ideas, such as gender equality, feminism, secularism and so on. Third, the progressive groups who tend to be more careful in accepting concepts from the Western ideas before making corrections and criticisms.This article will explore the point of view of the well-known Syrian figure, Sa'id Ramadhan al[1]Buthi in understanding the concept of women's leadership in misogynistic hadiths. According to al-Būṭī, it is permissible for women to become a leader as long as they fulfil the 2 criteria, namely: a) Women who are nominated for this job must have the required expertise, so that they can carry out the job properly. This condition is between the men and women; b) The workload should not neglect the syaria (Islamic law) and they must still obey the ethics. Keywords: Women Leaders, Gender, Islam`
			},
			{
				title: 'Nalar Hermeneutis Ulama Hadis: Larangan Perempuan Bepergian tanpa Mahram dalam Ruang Sejarah Pemahaman',
				slug: 'nalar-hemeneutis-ulama-hadis',
				writer: 'Miski',
				asal: 'Universitas Islam Negeri Maulana Malik Ibrahim Malang',
				contact: 'miski@uin-malang.ac.id',
				abstract:
					'This article explains how the construction of the hermeneutical reason of hadith scholars related to the hadith of the prophet that mentions the prohibition of women travels without a mahram. Using the sociological and historical approach, and hermeneutic analysis, the f ndings point to the conclusion that the hadith exists with a diverse narrative, especially related to the boundary radius of distance and travel time. To understand this hadith, scholars need to analyze further and interpret the hadith based on the context, not merely on its literal text. To conclude their interpretation, the prohibition of women travelling without their mahramsis related to comfort and safety. A mahram can either be replaced or removed when the situation is already safe. In other words, the role of a mahramis considered more on its functional instead of its existential aspect. Despite the use of hermeneutics approach by contemporary scholars to sustain the existing studies, this study still becomes a critique since the offer is not entirely new. Previous scholars have used this hermeneutic approach, and since their understanding is contextually based on their own era, diverse interpretation is inevitable.'
			}
		]
	},
	{
		title: 'Jurnal Hadis Perempuan th. 2021',
		tahun: '2021',
		list: [
			{
				title:
					'REINTERPRETASI HADIS LARANGAN PEREMPUAN BEPERGIAN TANPA MAHRAM DAN LARANGAN MELUKIS (PENDEKATAN SOSIO-HISTORIS DAN ANTROPOLOGIS)',
				slug: 'reinterpretasi-hadis-larangan-perempuan-bepergian-tanpa-mahram',
				writer: 'Ghufron Hamzah',
				asal: 'FAI Universitas Wahid Hasyim Semarang',
				contact: 'ghufronhamzah@gmail.com ',
				abstract: `This article focuses on the interpretation of the prohibition of women traveling without mahram hadith and the prohibition on writing which is often understood textually as the editors of the hadith. The literature review method with descriptive qualitative analysis through contingent analysis of the perspective of the socio-historical and anthropological approaches used in this article. The findings of this study are: (1) The legislation of the ban on women traveling alone if they look at the historical context of the above hadith is security and propriety, the current contextualization is if the security of women traveling alone is guaranteed and women are deemed appropriate more taboo when traveling alone, it does not matter if women travel alone without mahram, (2) Rationes legis from prohibiting the painting of animate creatures, namely the fear of the emergence of shirk by worshiping paintings or sculptures as in the time of ignorance. This prohibition in the concept of usul fiqh can be categorized as sadd al-dzari'ah which is to cut the path of damage (mafsadah) as a way to avoid such damage, in other words it is an anticipatory step.`
			},
			{
				title: 'Menyingkap Maqasid Profetik Dalam Hadis Tentang Relasi Laki-Laki Dan Perempuan',
				slug: 'menyingkap-maqasid-profetik-dalam-hadis-tentang-relasi-laki-laki-dan-perempuan',
				writer: 'Umma Farida, Hardivizon, Abdurrohman Kasdi',
				asal: 'Institut Agama Islam Negeri (IAIN) Kudus, Institut Agama Islam Negeri (IAIN) Curup ',
				contact: 'ummafarida@iainkudus.ac.id , hardivizon@iaincurup.ac.id , abdurrohmankasdi@iainkudus.ac.id',
				abstract: `The textual reading of the Prophet's hadith about the relationship between men and women often results in discriminatory and subordinating attitudes towards certain genders. This article aims to reread the hadith about the relationship between men and women. It emphasizes the disclosure of prophetic Maqasid or the orientation and purpose of prophethood in the hadith. This study uses a descriptive-analytical method by criticizing the traditions about the relationship between men and women contained in the books of Sunan Abi Dawud, al-Tirmidzi, and al-Darimi. The result shows that revealing the prophetic Maqasid in these traditions is urgent considering that the purpose of Muhammad's sending was to spread love to the universe based on monotheism (Tawhid). Tawhid is not only a verbal statement. It becomes the main foundation in building a socio-political-cultural order that promotes equality and balance between men and women. A balanced and harmonious relationship between the two becomes the Maqasid of the Prophet in every utterance and policy he established. The balance of relations between men and women by relying on a correct and comprehensive understanding of the hadith of the Prophet opens opportunities for women to perform and play the roles that need them for the good of humanity universally.`
			},
			{
				title: 'Kepemimpinan perempuan dalam hukum islam : telaah atas hadis kepemimpinan perempuan',
				slug: 'kepempinan-perempuan-dalam-hukum-islam',
				writer: 'Achmad Saeful',
				asal: 'Sekolah Tinggi Agama Islam Binamadani',
				contact: 'achmadsaeful@stai-binamadani.ac.id',
				abstract: `Tulisan ini membahas tentang kepemimpinan perempuan dalam hukum Islam berdasarkan Hadits tentang kepemimpinan perempuan. Dalam tulisan ini dijelaskan bahwa Hadits yang melarang tentang Kepemimpinan Perempuan memiliki korelasi dengan hancurnya Kerajaan Persia yang ketika itu dipimpin oleh seorang perempuan. Dari konteks ini kemudian masalah mengenai Kepemimpinan Perempuan melahirkan dua pandangan, yaitu yang menyetujui dan menolaknya. Bagi yang setuju dengan Kepemimpinan perempuan, mereka berpandangan bahwa Hadits tersebut bersifat kontekstual dan berlaku untuk saat itu. Karenanya, Hadits tersebut sifatnya tidak universal atau larangannya berlaku untuk semua perempuan. Bagi yang menolaknya, mereka berpandangan bahwa Hadits yang melarang tentang Kepemimpinan Perempuan berlaku tidak hanya untuk konteks masa lalu, tetapi berlaku pula untuk segala zaman. Dari kedua pendapat ini terlihat bahwa masalah Kepemimpinan Perempuan sampai saat ini masih melahirkan perdebatan, satu sisi banyak yang setuju dengan Kepemimpinan Perempuan, di sisi lain tidak sedikit yang menolaknya.`
			}
		]
	},
	{
		title: 'Jurnal Hadis Perempuan th. 2022',
		tahun: '2022',
		list: [
			{
				title: 'Kepemimpinan Perempuan Dalam Tinjauan Hadis',
				slug: 'kepemimpinan-perempuan-dalam-tinjauan-hadis',
				writer: 'Faridah, Siar Ni’mah, Muhammad Yusuf, Kusnadi',
				asal: 'Institut Agama Islam Muhammadiyah Sinjai, Sekolah Tinggi Agama Islam Darud Dakwah wal Irsyad Makassar',
				contact: 'andifaridah81@gmail.com , siar.nimah@gmail.com , yusufburhan8588@gmail.com',
				abstract: `Perempuan sama-sama makhluk yang juga sama spesialnya dengan lelaki di mata Allah. Takwalah kemudian yang membedakan antara keduanya. Penelitian ini mengkaji tentang pemimpin perempuan dalam tinjauan hadis Nabi Saw. Pembahasan ini penting untuk mengetahui jangkauan kepemimpinan perempuan, apakah hanya sebatas domestik ataukah perempuan boleh memimpin secara publik. Jenis kepustakaan dipilih sebagai jenis penelitian dengan menggunakan pendekatan tematik hadis. Hadis-hadis tentang pemimpin perempuan ditemukan melalui aplikasi al-maktabah asy-syamilah. Setelah hadis-hadis terkait ditemukan, kemudian dilakukan analisa isi untuk menemukan hasil dan kesimpulan yang komprehensif. Sebagai penutup, penelitian ini menemukan bahwa perempuan berposisi sama di mata Allah, juga dalam hal kompetensi dan kredibilitas. Hadis-hadis yang ditemukan juga mengarahkan kepada kesimpulan bahwa perempuan dapat menjadi pemimpin di wilayah publik.`
			},
			{
				title: 'Reinterpretasi Hadis Perempuan Di Ruang Publik Perspektif Feminisme Sosialis',
				slug: 'reinterpretasi-hadis-perempuan-di-ruang-publik',
				writer: 'Nur Ikhlas, Ahmad Hifni',
				asal: 'Sekolah Tinggi Agama Islam Negeri Sultan Abdurrahman Kepulauan Riau, Universitas Islam Negeri Syarif Hidayatullah Jakarta',
				contact: 'nur_ikhlas@stainkepri.ac.id, ahmad.hifni@uinjkt.ac.id',
				abstract: `Hadith for women is prohibited without a mahram, including one of the topics of hadith that is quite well known, not only for hadith experts, but also warm among jurists. certain, believe that women are prohibited from going without a mahram, other parts of the hadith are temporal so that they are not relevant to use in the current situation and situation. Because the hadith describes the conditions at the time of the Prophet and his companions, not the current conditions. This paper compares the hadith that is forbidden without a mahram with the hadith that can be used by women without a mahram. Then it will try to give a new meaning (reinterpretation) based on the compromise results of the hadiths that seem "opposite" and are studied with a feminist approach with the aim of giving birth to a new understanding so that religious texts, especially regarding nature without a mahram, do not seem to shackle women. The type of method used in this research is qualitative with the approach of Socialist Feminism, where gender occurs because of the ancient capitalist system and the domination over women. This paper concludes that the hadith about for a woman without a mahram is tentative and is the impact of the class structure in the Arab world first. This had an impact on gender and sexually subordinated women at that time.`
			},
			{
				title: 'Teori Perubahan Sosial Dalam Memahami Hadis Kepemimpinan Perempuan',
				slug: 'teori-perubahan-sosial-dalam-memahami-hadis-kepemimpinan-perempuan',
				writer: 'Afrizal Fahmi Ali',
				asal: 'Pascasarjana UIN Sunan Gunung Djati Bandung',
				contact: 'afrizalfahmiali29@gmail.com',
				abstract: `This article aims to find out how to understand women's leadership by using a sociological approach in this case the theory of social change. Because the hadith cannot be separated from the background of the emergence of hadith (ashbāb al-wurūd) and the social life of each place and time can be different and can change. In this case, the study used is qualitative and literature, and the method used is descriptive analysis, first describing the text about women's leadership, then describing the analysis using a social change theory approach. The result of the explanation obtained is that the social changes that occur make women the same opportunities as men in various fields such as politics and leadership. And female leaders have a leadership style that is lacking in men (and vice versa) which makes them complementary. Keywords: Leadership, Women, Social Change`
			},
			{
				title: 'Dehumanization Of Women By Da’iyah (Media Contest In Religious Lectures)',
				slug: 'dehumanization-of-women-by-daiyah',
				writer: 'Nurun Najwah',
				asal: 'Universitas Islam Negeri Sunan Kalijaga Yogyakarta',
				contact: 'nurun.najwah@uin-suka.ac.id',
				abstract: `The dehumanization of women in the religious framework in the media is in the form of defining women as "free" human beings. The narrative is strongly framed because it is socialized by the da'i (male) and the da'iyah. There have not been many studies that have paid attention to the substance of religion, how the da'iyah (women preachers) are actively and massively involved in delivering their da'wah material which translates women, not as creatures that need to be humanized based on religious doctrine through the lectures of three da'iyah Mamah Dedeh (Dedeh Rosdiana); dr. Aisyah Dahlan and Dr. Oki Setiana Dewi through the youtube channel in six contents. Three questions were posed: (1) How are (religious) values regarding the dehumanization of women presented in religious lectures in the media; (2) How is the role of da'iyah in influencing the dehumanization of women; (3) How is the media contestation in religious lectures that do not humanize women. Misinterpretations in the form of dehumanization of women by the da'iyah are generally caused by a literal, partial, and superficial reading of religious doctrines. Therefore, although it is realized that the ideology of the media is never in line with religious values that are humanist and full of moral messages, religious lectures in the media need to be studied carefully, so that religious messages that are "more humane for women" through the media are not denied.`
			}
		]
	},
	{
		title: 'Jurnal Hadis Perempuan th. 2023',
		tahun: '2023',
		list: [
			{
				title: 'Kepemimpinan Perempuan Dalam Pandangan Islam',
				slug: 'kepemimpinan-perempuan-dalam-pandangan-islam',
				writer: 'Ahmad Zaini, Ahmad Hadiqul Umam, Al Muzafar Sodik, Muhammad Agorrul kirom',
				asal: 'Institut Ilmu Al-Qur’an An-Nur Yogyakarta',
				contact: 'agorrulkirom.21@gmail.com',
				abstract: `Women taking on leading roles is a common occurrence in many parts of the world today. So, we need to know the rules of a group or organization led by a woman, as well as the rules of a very big country. This paper mostly talks about three things. The first is about the verses in the Qur'an and the sayings of the Prophet that, when looked at lafadz, show that women can't be in charge. This will be described in more detail. In the second discussion, a verse is given that scholars use to say that a woman can lead a group, organization, or state. This is followed by the scholars' interpretations of these verses, which can be used as evidence that a woman can be a leader. Then, in the last discussion, stories were told about women in charge, because this isn't a new thing. It's been happening since ancient times, which makes us sure and think that a woman can be in charge of an organization.`
			},
			{
				title: 'Revitalisasi Nilai-Nilai Khitbah di dalam Hadis Sebagai Upaya Menjaga Kemuliaan Perempuan (Analisis Hadis Tematik)',
				slug: 'revitalisasi-nilai-nilai-khitbah-di-dalam-hadis-sebagai-upaya-menjaga-kemuliaan-perempuan',
				writer: 'Husnul Khatimah',
				asal: 'Institut Agama Islam Negeri Madura, Indonesia',
				contact: 'husnul.MDR78@gmail.com',
				abstract: `The values of khitbah contained in authentic hadith are indeed important to study. Remembering the khitbah here is the process before the consent qabul occurs in marriage. Whereas marriage is a very strong bond and the longest worship in life, therefore as Muslims we must follow the guidance of the Prophet, remembering that Rasulullah SAW is our example. Making the values in this hadith very important, steps must be taken to revitalize these values. One of them is by analyzing several hadiths which explain the terms and conditions of khitbah in Islam. For this study the authors used qualitative methods with thematic study analysis. The author’s object is to discuss the values in the hadith and how to maintain the glory of women. Where the results of this literature research explain that the purpose of the prophet’s hadiths is to glorify women and not even be rigid in providing protection for the rights and obligations of husbands and wives. Keywords: Hadith, Khitbah, Women Abstrak`
			},
			{
				title: 'Ketidakadilan Gender dalam Perspektif Hadis',
				slug: 'nur-indah-permatasari',
				writer: 'Nur Indah Permatasari',
				asal: 'UIN Sunan Gunung Djati Bandung',
				contact: 'nipermata30@gmail.com',
				abstract: `This study aims to discuss hadith about gender inequality. This study uses a qualitative approach by applying a descriptive[1]analytical method. The formal object of this research is the science of hadith, while the material object is the hadith about gender injustice in the history of Ahmad No. 19612. The results and discussion of this study indicate that the status of quality hadith hasan li ghairihi fulfills the maqbul qualifications for Islamic practice. This study concludes that the hadith narrated by Ahmad No. 19612 is relevant as evidence for Islamic experience.`
			}
		]
	}
]
