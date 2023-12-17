import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Heading, IconButton, Text, Avatar, Box } from '@radix-ui/themes'
import Link from 'next/link'
import { ArrowLeft, Contact, Contact2 } from 'lucide-react'
import { Routes } from '@/constants/Link'
import { ReactNode } from 'react'

interface Item {
	title: string
	subtitle: string
	icon: NonNullable<ReactNode>
	href: string
}

const Items: Item[] = [
	{
		title: 'Kewajiban Suami Terhadap Istri',
		subtitle: 'Kewajiban suami terhadap istri di lingkup keluarga',
		icon: <Contact />,
		href: Routes.hakKewajiban.kewajibanSuami,
	},
	{
		title: 'Kewajiban Istri Terhadap Suami',
		subtitle: 'Kewajiban istri terhadap suami di lingkup keluarga',
		icon: <Contact2 />,
		href: Routes.hakKewajiban.kewajibanIstri,
	},
]

const Kewajiban = () => {
	return (
		<Page>
			<Flex align="center" gap="4">
				<IconButton asChild variant="ghost">
					<Link href={Routes.hakKewajiban.index}>
						<ArrowLeft width="24" height="24" />
					</Link>
				</IconButton>
				<Heading as="h2" size="8" align="center" className="text-pink-500">
					Kewajiban
				</Heading>
			</Flex>

			<Section>
				<Flex gap={'4'} direction={'column'}>
					<Card>
						<Heading as="h2" size="6" align="center" className="text-pink-500">
							Kewajiban
						</Heading>
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
}

export default Kewajiban
