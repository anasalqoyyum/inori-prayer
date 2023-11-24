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
							Website ini disebut “hadithofwoman” adalah software yang membahas tentang hadis-hadis perempuan. Didalamnya terdapat 25 hadis
							mengenai perempuan dilengkapi dengan kualitas, nomer, serta takhrij hadis. Website ini juga terdapat hak dan kewajiban,
							toko-tokoh inspiratif, artikel dari tahun 2019 hingga 2023, dan quotes tentang perempuan. Filosofi logo software ini yaitu
							adanya gambar wanita hijab, tulisan “HOW”, dan bentuk lingkaran putih. Untuk arti wanita berhijab sebagaimana maksud penulis
							dalam membuat software ini yaitu software yang hanya mengenai wanita muslim. jika tulisan HOW diambil dari Hadith Of Woman
							yang memiliki arti hadis-hadis perempuan dimana dalam software ini berisi hadis-hadis perempuan. Terakhir warna putih
							lingkaran sebagai pelengkap dan arti putih sendiri yaitu suci dimana memiliki arti sebuah kepercayaan diri yang dikhususkan
							pada seorang perempuan yang harus tempil percaya diri kapanpun dan dimanapun.
						</Text>
					</Flex>
				</Card>
			</Section>
		</Page>
	)
}

export default Aplikasi
