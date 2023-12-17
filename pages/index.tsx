import { Routes } from '@/constants/Link'
import { GradientBG } from '@/components/gradient'
import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Avatar, Box, Text, Heading } from '@radix-ui/themes'
import { Book, Quote, Scale, ScrollText, User } from 'lucide-react'
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
		title: 'Hadis Perempuan',
		subtitle: 'Daftar Hadis Perempuan',
		icon: <Book />,
		href: Routes.hadis.index
	},
	{
		title: 'Perempuan Pengkaji Hadis',
		subtitle: 'Sosok Perempuan Para Pengkaji Hadis',
		icon: <User />,
		href: Routes.wanitaInspiratif.index
	},
	{
		title: 'Kajian',
		subtitle: 'Kumpulan Kajian Mengenai Perempuan',
		icon: <ScrollText />,
		href: Routes.jurnal.index
	},
	{
		title: 'Hak dan Kewajiban',
		subtitle: 'Hak dan Kewajiban seorang perempuan',
		icon: <Scale />,
		href: Routes.hakKewajiban.index
	},
	{
		title: 'Quotes',
		subtitle: 'Kata-kata inspiratif',
		icon: <Quote />,
		href: Routes.quotes
	}
]

const Index = () => (
	<Page>
		<GradientBG />
		<Heading as="h2" size="8" align="center" className="text-pink-500">
			Home
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

export default Index
