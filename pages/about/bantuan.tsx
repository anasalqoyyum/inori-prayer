import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Heading, IconButton, Text, Button } from '@radix-ui/themes'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Routes } from '@/constants/Link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'
import { useGlobalState } from '@/store/zustand'

const Bantuan = () => {
	const [isChecked, setChecked] = useState(false)
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
							{isFromHome && (
								<Text as="label" size="2">
									<Flex gap="2">
										<input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
										Lewati halaman ini, dikunjungan berikutnya
									</Flex>
								</Text>
							)}
							{isFromHome && <Button onClick={redirectToHome}>Mulai</Button>}
						</Flex>
					</Flex>
				</Card>
			</Section>
		</Page>
	)
}

export default Bantuan
