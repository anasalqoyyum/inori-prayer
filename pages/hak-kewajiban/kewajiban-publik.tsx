import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Heading, IconButton, Separator, Text } from '@radix-ui/themes'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Routes } from '@/constants/Link'
import { HakPublik } from '@/constants/HakKewajiban'
import { Fragment } from 'react'

const KewajibanIstri = () => {
	return (
		<Page>
			<Flex align="center" gap="4">
				<IconButton asChild variant="ghost">
					<Link href={Routes.hakKewajiban.index}>
						<ArrowLeft width="24" height="24" />
					</Link>
				</IconButton>
				<Heading as="h2" size="4" align="center" className="text-pink-500">
					Kewajiban Perempuan dalam ruang Publik
				</Heading>
			</Flex>

			<Section>
				<Flex gap={'4'} direction={'column'}>
					<Card>
						<Heading as="h2" size="6" align="center" className="text-pink-500">
							Kewajiban Perempuan dalam ruang Publik
						</Heading>
					</Card>

					<Card>
						<Text as={'p'} className="mx-2">
							Yusuf Qardhawi dalam kewajiban perempuan berkarir berpendapat bahwa memperbolehkan perempuan untuk berkiprah di ruang publik.
							Dalam pembolehan ini Yusuf Qardhawi tidak bersifat liberal absolut, tanpa batas dari esensi agama. Pembolehannya terdapat
							beberapa syarat yaitu :
						</Text>
						<ol className="list-decimal mx-6 my-6">
							<li>
								Profesinya diperbolehkan oleh Agama, maksudnya profesinya tidak dilarang oleh agama atau mendorong ke perbuatan haram{' '}
							</li>
							<li>Menjaga Etika Agama baik dalam hal pakaian, berjalan, berbicara, menjaga pandangan, dan aktivitas lain</li>
							<li>Tidak meninggalkan kewajiban lain seperti kewajiban terhadap suami dan anak-anak yang terdapat pada rumah tangga.</li>
						</ol>
					</Card>
				</Flex>
			</Section>
		</Page>
	)
}

export default KewajibanIstri
