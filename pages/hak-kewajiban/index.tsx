import { Routes } from '@/constants/Link'
import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Avatar, Box, Text, Heading } from '@radix-ui/themes'
import { AppWindow, Building, Building2, Clipboard, Library, PencilRuler, Scale } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

interface Item {
	title: string
	subtitle: string
	icon: NonNullable<ReactNode>
	href: string
}

const Items: Item[] = [
	{
		title: 'Hak',
		subtitle: 'Hak seorang perempuan',
		icon: <Scale />,
		href: Routes.hakKewajiban.hak,
	},
	{
		title: 'Kewajiban',
		subtitle: 'Kewajiban seorang perempuan',
		icon: <Clipboard />,
		href: Routes.hakKewajiban.kewajiban,
	},
	{
		title: 'Hak di Lingkup Publik',
		subtitle: 'Hak seorang perempuan di Lingkup Publik',
		icon: <Building />,
		href: Routes.hakKewajiban.hakPublik,
	},
	{
		title: 'Kewajiban di Lingkup Publik',
		subtitle: 'Kewajiban seorang perempuan di Lingkup Publik',
		icon: <Building2 />,
		href: Routes.hakKewajiban.kewajibanPublik,
	},
]

const HakKewajiban = () => (
	<Page>
		<Heading as="h2" size="8" align="center" className="text-pink-500">
			Hak & Kewajiban
		</Heading>
		<Section>
			<Flex gap="3" direction="column">
				<Card>
					<Text className="font-semibold">Sumber: </Text>
					<ul className="list-disc mx-6">
						<li>
							Hak dan kewajiban seorang perempuan di ruang lingkup keluarga bersumber dari Kitab Dau’ul Misbah fi ahkami Nikah karya KH.
							Hasyim Asy’ari
						</li>
						<li>
							Hak dan Kewajiban seorang perempuan diruang lingkup publik bersumber pada kitab Fatawa al-Mar’ah al-Muslimah karya Yusuf
							Qardhawi
						</li>
						<li>
							Hak dan Kewajiban perempuan di ruang publik bersumber dari kitab Fatawa al-Mar’ah al-Muslimah karya Yusuf Qardhawi, Dalam
							kitab ini ada salah satu bab yang membahas mengenai perempuan karir. Karena segala bentuk perbuatan baik dan berijtihad adalah
							suatu hal yang diperuntukan kepada laki-laki maupun perempuan.
						</li>
					</ul>
				</Card>
				{Items.map(item => {
					return (
						<Card asChild size="3" variant="classic" key={item.href}>
							<Link href={item.href}>
								<Flex gap="3" align="center">
									<Avatar size="3" radius="full" fallback={item.icon} />
									<Box>
										<Text as="div" size="5" weight="bold">
											{item.title}
										</Text>
										<Text as="div" size="2" color="gray">
											{item.subtitle}
										</Text>
									</Box>
								</Flex>
							</Link>
						</Card>
					)
				})}
			</Flex>
		</Section>
	</Page>
)

export default HakKewajiban
