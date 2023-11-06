import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Heading, IconButton, Text } from '@radix-ui/themes'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Routes } from '@/constants/Link'
import { KewajibanList } from '@/constants/HakKewajiban'
import { Fragment } from 'react'

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
					Hak & Kewajiban
				</Heading>
			</Flex>

			<Section>
				<Flex gap={'4'} direction={'column'}>
					<Card>
						<Heading as="h2" size="6" align="center" className="text-pink-500">
							Kewajiban
						</Heading>
					</Card>

					<Card>
						<ol className="list-decimal mx-6 my-6">
							<Flex direction={'column'} gap={'2'}>
								{KewajibanList.map((item, idx) => (
									<Fragment key={`${idx}`}>
										<li>{item.title}</li>
										<Text as="p">{item.content}</Text>
										{item.subContent ? (
											<ul className="list-disc mx-6">
												{item.subContent.map((con, num) => (
													<li key={num}>{con}</li>
												))}
											</ul>
										) : null}
									</Fragment>
								))}
							</Flex>
						</ol>
					</Card>
				</Flex>
			</Section>
		</Page>
	)
}

export default Kewajiban
