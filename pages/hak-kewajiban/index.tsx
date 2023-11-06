import { Routes } from '@/constants/Link'
import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Avatar, Box, Text, Heading } from '@radix-ui/themes'
import { AppWindow, Clipboard, Library, PencilRuler, Scale } from 'lucide-react'
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
		href: Routes.hakKewajiban.hak
	},
	{
		title: 'Kewajiban',
		subtitle: 'Kewajiban seorang perempuan',
		icon: <Clipboard />,
		href: Routes.hakKewajiban.kewajiban
	}
]

const HakKewajiban = () => (
	<Page>
		<Heading as="h2" size="8" align="center" className="text-pink-500">
			Hak & Kewajiban
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

export default HakKewajiban
