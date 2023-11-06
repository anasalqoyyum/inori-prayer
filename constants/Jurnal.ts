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
	}
]
