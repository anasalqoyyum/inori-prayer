import { Routes } from '@/constants/Link'
import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Avatar, Box, Text, Heading } from '@radix-ui/themes'
import { AppWindow, HelpCircle, Library, PencilRuler } from 'lucide-react'
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
		title: 'Tentang Aplikasi',
		subtitle: 'Informasi aplikasi',
		icon: <AppWindow />,
		href: Routes.about.aplikasi,
	},
	{
		title: 'Profil Penulis',
		subtitle: 'Informasi tentang penulis',
		icon: <PencilRuler />,
		href: Routes.about.penulis,
	},
	{
		title: 'Daftar Pustaka',
		subtitle: 'Daftar Referensi',
		icon: <Library />,
		href: Routes.about.daftarPustaka,
	},
	{
		title: 'Bantuan',
		subtitle: 'Cara Penggunaan Aplikasi',
		icon: <HelpCircle />,
		href: Routes.about.bantuan,
	},
]

const About = () => (
	<Page>
		<Heading as="h2" size="8" align="center" className="text-pink-500">
			Tentang
		</Heading>
		<Section>
			<Flex gap="3" direction="column">
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

export default About
