import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Heading, IconButton, Text, Button } from '@radix-ui/themes'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Routes } from '@/constants/Link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'
import { useGlobalState } from '@/store/zustand'

const Bantuan = () => {
	const [isChecked, setChecked] = useState(false)
	const [isNoHelp, setIsNoHelp] = useState(false)
	const router = useRouter()
	const searchParams = useSearchParams()
	const globalState = useGlobalState()

	const handleCheckboxChange = () => {
		setChecked(!isChecked)
	}
	const redirectToHome = () => {
		if (!window) return
		if (isChecked) {
			window.localStorage.setItem('noHelp', 'true')
		}

		globalState.setSkipHelp(true)
		router.replace('/')
	}

	useEffect(() => {
		const noHelp = window.localStorage.getItem('noHelp')
		setIsNoHelp(noHelp === 'true')
	})
	const reEnableBantuan = () => {
		window.localStorage.removeItem('noHelp')
		window.location.reload()
	}
	const enableBantuan = () => {
		window.localStorage.setItem('noHelp', 'true')
		window.location.reload()
	}

	const isFromHome = searchParams.get('from')

	return (
		<Page>
			<Flex align="center" gap="4">
				{!isFromHome && (
					<IconButton asChild variant="ghost">
						<Link href={Routes.about.index}>
							<ArrowLeft width="24" height="24" />
						</Link>
					</IconButton>
				)}
				<Heading as="h2" size="8" align="center" className="text-pink-500">
					Cara Penggunaan Website &quot;hadithofwoman&quot;
				</Heading>
			</Flex>

			<Section>
				<Card>
					<Flex gap="8" direction={'column'} align={'center'} className="my-8">
						<Flex gap="4" direction={'column'} align={'center'}>
							<Text align={'center'} className="font-bold">
								Cara Penggunaan Aplikasi
							</Text>
							<ol className="list-decimal mx-6">
								<li className="font-semibold">
									Pengguna mengakses link ini <a className="text-blue-600 italic">https://hadits.anasalqoyyum.dev/</a>
								</li>

								<li className="font-semibold">Kemudian akan menampilkan logo software ini tunggu hingga selesai</li>
								<li className="font-semibold">Kemudian akan menampilkan cara penggunaan</li>
								<li className="font-semibold">
									Setelah membaca cara penggunaan atau telah melihat tampilan pengguna akan memilih dua tombol mulai dan lewati bagian ini
								</li>
								<li className="font-semibold">
									Kemudian akan menampilkan dengan 8 menu yang telah disediakan yaitu Hadis-Hadis perempuan, Para perempuan pengkaji hadis,
									Kajian, Hak dan Kewajiban perempuan,Quotes,Search,Home, dan About
								</li>
								<li className="font-semibold">Pengguna akan memilih 8 menu itu</li>
								<li className="font-semibold">Software &quot;hadithofwoman&quot; siap di gunakan.</li>
							</ol>
							<Text align={'center'} className="font-bold">
								Website ini berisi menu sebagai berikut:
							</Text>
							<ol className="list-decimal mx-6">
								<li className="font-semibold">
									Hadis-Hadis perempuan
									<ul className="list-disc pl-6 font-normal">
										<li>
											Hadis-hadis yang terdapat di website ini didapatkan dari kitab kutubussitah dan kitab Miatu Hadits li Nisai karya Ibnu
											Abi Abdillah Al-jawi
										</li>
										<li>
											Pada menu ini pengguna dapat mencari hadis dengan kata kunci tertentu dengan cara menuliskan tema, bab, nomer hadis,
											serta mukharrij hadis
										</li>
										<li>
											Pada setiap hadis akan dilengkapi dengan mukharrij, nomer hadis, kualitas hadis, tema, sub tema, sumber jika di cari
											dengan software maktabah shamela, dan hadis yang serupa dengan hadis yang tersedia{' '}
										</li>
									</ul>
								</li>

								<li className="font-semibold">
									Para perempuan pengkaji hadis
									<ul className="list-disc pl-6 font-normal">
										<li>
											Bagian ini website akan menampilkan perempuan-perempuan para pengkaji hadis lebih khususnya para dosen di fakultas
											Ushuluddin dan pemikiran Islam Sunan Kalijaga Yogyakarta{' '}
										</li>
									</ul>
								</li>
								<li className="font-semibold">
									Kajian
									<ul className="list-disc pl-6 font-normal">
										<li>Kajian disini akan menambilkan jurnal - jurnal hadis perempuan yang telah dikumpulkan sesuai tema</li>
										<li>Disini akan menampilkan hadis setiap bacaan pada tulisannya</li>
										<li>Pengguna juga bisa mendownload jurnal-jurnal yang disediakan melalui tulisan &quot;download pdf jurnal&quot;</li>
										<li>Pengguna akan dialihkan pada halaman web jurnal aslinya kemudian siap untuk mendownload tulisan tersebut</li>
									</ul>
								</li>
								<li className="font-semibold">
									Hak dan Kewajiban perempuan
									<ul className="list-disc pl-6 font-normal">
										<li>
											Hak dan kewajiban akan meliputi 4 bagian yaitu hak perempuan di ranah keluarga, hak perempuan di ranah publik,
											kewajiban perempuan di ranah keluarga, dan kewajiban perempuan di ranah publik
										</li>
										<li>Hak dan kewajiban ini meliputi hak dan kewajiban perempuan di ranah keluarga maupun publik</li>
										<li>
											Hak dan kewajiban di ranah keluarga bersumber pada kitab dauul misbah fi ahkam an nikah karya KH. Hasyim Asy&apos;ari
										</li>
										<li>Hak dan kewajiban di ranah publik bersumber pada kitab Fatawa al-Mar’ah al-Muslimah karya Yusuf Qardhawia</li>
										<li>
											Hak dan kewajiban di ranah keluarga akan di bagi menjadi 2 bagian yaitu hak istri terhadap suami , hak suami terhadap
											istri, kewajiban istri terhadap suami, dan kewajiban suami terhadap istri
										</li>
									</ul>
								</li>
								<li className="font-semibold">
									Quotes
									<ul className="list-disc pl-6 font-normal">
										<li>Bagian ini website akan menampilkan kata-kata bijak untuk perempuan</li>
										<li>Kata - kata bijak nantinya akan dikumpulkan sesuai tema dan dilengkapi dengan gambarnya</li>
									</ul>
								</li>
								<li className="font-semibold">
									Search
									<ul className="list-disc pl-6 font-normal">
										<li>Search disini berguna untuk mencari hadis-hadis tentang perempuan saja</li>
										<li>Kata kunci dapat digunakan dalam mencari hadis yaitu tema, bab, nomer hadis, serta mukharrij pada setiap hadis</li>
									</ul>
								</li>
								<li className="font-semibold">
									Home
									<ul className="list-disc pl-6 font-normal">
										<li>Menu home akan tetap berada pada menu daftar isi software &quot;hadithofwoman&quot;</li>
										<li>Jika pengguna pada halaman lain dan meng-klik home maka yang terjadi pada akan berpindah pada menu daftar isi</li>
									</ul>
								</li>
								<li className="font-semibold">
									About
									<ul className="list-disc pl-6 font-normal">
										<li>
											Menu ini akan menyediakan informasi mengenai software &quot;hadithofwoman&quot;, tentang penulis, daftar pustaka, dan
											cara penggunaan
										</li>
									</ul>
								</li>
							</ol>
							{isFromHome && (
								<Text as="label" size="2">
									<Flex gap="2">
										<input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
										Lewati halaman ini, dikunjungan berikutnya
									</Flex>
								</Text>
							)}
							{isFromHome && <Button onClick={redirectToHome}>Mulai</Button>}
							{!isFromHome && (
								<Flex gap="2" direction={'column'}>
									<Text>Halaman Bantuan {isNoHelp ? 'Tidak Akan Muncul' : 'Akan Muncul'} di Kunjungan Berikutnya</Text>
									<Button onClick={isNoHelp ? reEnableBantuan : enableBantuan}>{isNoHelp ? 'Aktifkan' : 'Matikan'}</Button>
								</Flex>
							)}
						</Flex>
					</Flex>
				</Card>
			</Section>
		</Page>
	)
}

export default Bantuan
