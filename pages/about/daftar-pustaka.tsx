import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Heading, IconButton, Text, Avatar } from '@radix-ui/themes'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Routes } from '@/constants/Link'

const DaftarPustaka = () => {
	return (
		<Page>
			<Flex align="center" gap="4">
				<IconButton asChild variant="ghost">
					<Link href={Routes.about.index}>
						<ArrowLeft width="24" height="24" />
					</Link>
				</IconButton>
				<Heading as="h2" size="8" align="center" className="text-pink-500">
					Daftar Pustaka
				</Heading>
			</Flex>

			<Section>
				<Card>
					<Flex gap="4" direction={'column'} align={'center'}>
						<Heading align={'center'}>HADIS</Heading>
						<ol className="list-decimal mx-6">
							<li>
								Abu Abdillah Muhammad bin Ismail bin Ibrahim al-Mughirah bin Bardizbah al-Ju’fi al-Bukhari, Shahih Bukhari, (Beirut-Lebanon:
								Dar al-Ma’rifah, 1422 H.
							</li>
							<li>Muslim bin al-Hujjaj al-Qasyiri al- Nasaburi, Shahih Muslim, (Beirut: Dar al-Kutub al-’Ilmiyah, 1998)</li>
							<li>
								Abu Dawud Sulaiman bin Asy’at bin Ishaq bin Basyir bin Syadad bin Amr as-Sijistanii, Sunan Abi Dawud, (Beirut-Sudan:
								al-Maktabah al-Asyriyah)
							</li>
							<li>
								Abu Isa Muhammad bin Isa bin Saurah bin Musa bin Ad-Dahhak As-Sulami at-Tirmidzi, Jami’ al-Kabir Sunan Tirmidzi, (Beirut:
								Daarul al-Gharibi al-Islamiy, 1998 H.)
							</li>
							<li>Ibnu Majah Abu Abdillah, Sunan Ibnu Majah. (Beirut: Dar al-Ihya’ al-Arabiyah, 1311 H)</li>
						</ol>
						<Heading>JURNAL</Heading>
						<ol className="list-none mx-6">
							<li className="my-2">
								Al Ahsani, Nasirudin, ‘Kepemimpinan Perempuan Pada Masyarakat Dalam Perspektif Saʿīd Ramaḍān Al-Būṭī (Telaah Hadis
								Misoginis)’, Jurnal Al-Hikmah, 18.1 (2020), 57–74
							</li>
							<li className="my-2">Andy, Nofri, ‘Analisis Terhadap Hadist-Hadist Pemberdayaan Perempuan’, Humanisma, 2.2 (2018), 159–66</li>
							<li className="my-2">
								Fadlillah, Nilna, ‘Reinterpretasi Hadis Perempuan Tercipta Dari Tulang Rusuk’, Jurnal Living Hadis, 4.2 (2019), 309
							</li>
							<li className="my-2">
								Farida, Umma, H Hardivizon, and Abdurrohman Kasdi, ‘Menyingkap Maqasid Profetik Dalam Hadis Tentang Relasi Laki-Laki Dan
								Perempuan’, AL QUDS: Jurnal Studi Alquran Dan Hadis, 5.2 (2021), 819–42
							</li>
							<li className="my-2">
								Faridah, Faridah, Siar Ni’mah, Muhammad Yusuf, and Kusnadi Kusnadi, ‘Kepemimpinan Perempuan Dalam Tinjauan Hadis’, Jurnal
								Al-Mubarak: Jurnal Kajian Al-Qur’an Dan Tafsir, 7.1 (2022), 10–22
							</li>
							<li className="my-2">
								Hamzah, Ghufron, ‘Reinterpretasi Hadis Larangan Perempuan Bepergian Tanpa Mahram Dan Larangan Melukis (Pendekatan
								Sosio-Historis Dan Antropologis))’, JASNA : Journal For Aswaja Studies, 1.1 (2021), 25–36
							</li>
							<li className="my-2">
								Handayani, Yulmitra, and Mukhammad Nur Hadi, ‘Interpretasi Progresif Hadis-Hadis Tema Perempuan: Studi Aplikasi Teori
								Qira’ah Mubadalah’, HUMANISMA: Journal of Gender Studies, 4.2 (2020), 157–76
							</li>
							<li className="my-2">
								Hasan, Rianto, ‘Partisipasi Perempuan Dalam Olahraga Perspektif Hermeneutika Hadis Fazlur Rahman’, Jurnal Studi Ilmu-Ilmu
								Al-Qur’an Dan Hadis, 20.1 (2019), 43
							</li>
							<li className="my-2">
								Ikhlas, Nur, and Ahmad Hifni, ‘Reinterpretasi Hadis Perempuan Di Ruang Publik Perspektif Feminisme Sosialis’, Jurnal
								Ulunnuha, 11.1 (2022), 49–65
							</li>
							<li className="my-2">‘January - June 2020’, International Journal of Advanced Studies in Sexology, 2.1 (2020)</li>
							<li className="my-2">
								Khatimah, Husnul, Institut Agama, and Islam Negeri, ‘Revitalisasi Nilai-Nilai Khitbah Di Dalam Hadis Sebagai Upaya Menjaga
								Kemuliaan Perempuan ( Analisis Hadis Tematik ) Abstract : Keywords : Abstrak : Pendahuluan Pernikahan Merupakan Ibadah
								Terlama Dan Mulia Dalam Merupakan Bagian Dari Menjalankan Perintah Allah SWT , Dan Bukti’, 1.1 (2023), 29–43
							</li>
							<li className="my-2">
								Masduki, Masduki, ‘Kontekstualisasi Hadis Peminangan Perempuan Terhadap Laki-Laki’, Jurnal Studi Ilmu-Ilmu Al-Qur’an Dan
								Hadis, 20.1 (2019), 62
							</li>
							<li className="my-2">
								Maulidyna, Yunita, ‘Gunung Djati Conference Series, Volume 23 (2023) Religious Studies ISSN: 2774-6585 Website:
								Https://Conferences.Uinsgd.Ac.Id/Gdcs’, Gunung Djati Convference Series, 23 (2023), 854–74
							</li>
							<li className="my-2">
								Najwah, Nurun, ‘Dehumanization of Women by Da’iyah (Media Contest in Religious Lectures)’, Jurnal Living Hadis, 7.1 (2022),
								75–95
							</li>
							<li className="my-2">
								Saeful, Achmad, ‘Kepemimpinan Perempuan Dalam Hukum Islam: Telaah Atas Hadist Kepemimpinan Perempuan’, Jurnal Syar’ie, 4.2
								(2021), 108–24
							</li>
							<li className="my-2">
								Taufiqotuzzahro’, ’Azzah Nurin, ‘Pembacaan Hermeneutika Hadis Tentang Perintah Istri Bersujud Kepada Suami: Perspektif
								Hans-George Gadamer’, Jurnal Living Hadis, 4.1 (2019), 45
							</li>
							<li className="my-2">
								Zaini, Ahmad, Ahmad Hadiqul Umam, Al Muzafar Sodik, and Muhammad Agorrul Kirom, ‘Kepemimpinan Perempuan Dalam Pandangan
								Islam’, Basha’Ir: Jurnal Studi Al-Qur’an Dan Tafsir, 3.1 (2023), 1–7
							</li>
							<li className="my-2">
								Zulfikar, Eko, ‘PERAN PEREMPUAN DALAM RUMAH TANGGA PERSPEKTIF ISLAM: Kajian Tematik Dalam Alquran Dan Hadis’, Diya Al-Afkar:
								Jurnal Studi Al-Quran Dan Al-Hadis, 7.01 (2019),
							</li>
						</ol>
						<Heading>HAK dan KEWAJIBAN</Heading>
						<ol className="list-disc mx-6">
							<li>Kitab Dau’ul Misbah Karya KH. Hasyim Asy’ari</li>
						</ol>
						<Heading>Perempuan Pengkaji Hadis</Heading>
						<ol className="list-disc mx-6">
							<li>Google</li>
						</ol>
						<Heading>QUOTES</Heading>
						<ol className="list-disc mx-6">
							<li>Pinterest</li>
						</ol>
					</Flex>
				</Card>
			</Section>
		</Page>
	)
}

export default DaftarPustaka
