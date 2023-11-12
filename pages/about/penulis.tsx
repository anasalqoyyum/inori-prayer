import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Heading, IconButton, Text, Avatar } from '@radix-ui/themes'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Routes } from '@/constants/Link'
import foto from '@/public/assets/foto.jpg'

const Penulis = () => {
	return (
		<Page>
			<Flex align="center" gap="4">
				<IconButton asChild variant="ghost">
					<Link href={Routes.about.index}>
						<ArrowLeft width="24" height="24" />
					</Link>
				</IconButton>
				<Heading as="h2" size="8" align="center" className="text-pink-500">
					Tentang Penulis
				</Heading>
			</Flex>

			<Section>
				<Card>
					<Flex gap="4" direction={'column'} align={'center'}>
						<Avatar size={'8'} radius="full" src={foto.src} fallback="SF" />
						<Text align={'center'}>
							HAI ! aku, Sayyida Safir Fadhila seorang mahasiswi ilmu hadis tingkat akhir website ini merupakan karya saya. Yang mana karya
							ini merupakan tugas akhir saya sebagai mahasiswi Sarjana Prodi Ilmu Hadis Fakultas Ushuluddin dan Pemikiran Islam Universitas
							Islam Negeri Sunan Kalijaga Yogyakarta. Lahir di Jepara, 10 Oktober 2022 sekarang berumur 21 tahun. Selama di Jogja saya hidup
							sebagai santri di pondok pesantren mahasiswa Yayasan Ali Maksum Yogyakarta komplek Gedung Putih.
						</Text>
					</Flex>
				</Card>
			</Section>
		</Page>
	)
}

export default Penulis
