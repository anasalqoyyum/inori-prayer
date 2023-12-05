import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Heading, IconButton, Text, Avatar } from '@radix-ui/themes'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Routes } from '@/constants/Link'
import logo from '@/public/assets/logo.png'
import uin from '@/public/assets/uin2.png'

const Aplikasi = () => {
	return (
		<Page>
			<Flex align="center" gap="4">
				<IconButton asChild variant="ghost">
					<Link href={Routes.about.index}>
						<ArrowLeft width="24" height="24" />
					</Link>
				</IconButton>
				<Heading as="h2" size="8" align="center" className="text-pink-500">
					Tentang Aplikasi
				</Heading>
			</Flex>

			<Section>
				<Card>
					<Flex gap="8" direction={'column'} align={'center'} className="my-8">
						<Flex direction={'row'} align={'center'} gap={'4'}>
							<Avatar size={'8'} radius="full" src={logo.src} fallback="SF" />
							<Avatar size={'8'} src={uin.src} fallback="SF" />
						</Flex>

						<Text align={'center'}>
							Website ini disebut “hadithofwoman” merupakan software yang berisi tentang perempuan. Meliputi terdapat 25 hadis tentang
							perempuan dilengkapi dengan nomer, kualitas, takhrij, bab, dan sumber setiap hadis. Kemudian adanya wanita inspiratif, hak dan
							kewajiban perempuan, quotes tentang perempuan, kajian mengenai perempuan dilengkapi dengan hadis setiap bacaannya. Filosofi
							logo software ini adalah adanya gambar wanita muslim berhijab dan terdapat tulisan HOW singkatan dari Hadith Of Woman memiliki
							arti hadis-hadis perempuan. untuk warna yang digunakan menggunakan warna “pink dan putih” identik dengan seorang perempuan
							Adanya logo Universitas Islam Negeri Yogyakarta dan tulisan Ilmu Hadis guna untuk memperlihatkan bahwa software ini dibuat
							oleh mahasiswa sebagai penelitian tugas.
						</Text>
					</Flex>
				</Card>
			</Section>
		</Page>
	)
}

export default Aplikasi
