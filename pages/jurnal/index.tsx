import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Avatar, Box, Text, Heading, Separator } from '@radix-ui/themes'
import Link from 'next/link'
import { Scroll } from 'lucide-react'
import { JurnalListv2 } from '@/constants/Jurnal'
import { Fragment } from 'react'

const Jurnal = () => {
	const jurnalLen = JurnalListv2.length

	return (
		<Page>
			<Heading as="h2" size="6" align="center" className="text-pink-500">
				Jurnal Hadis-Hadis Perempuan
			</Heading>
			<Section>
				<Flex gap="6" direction="column">
					{JurnalListv2.map((item, index) => {
						return (
							<Fragment key={item.slug}>
								<Card asChild size="3" variant="ghost">
									<Link href={`/jurnal/${item.slug}`}>
										<Flex gap="3" align="center">
											<Avatar size="3" radius="full" fallback={<Scroll />} />
											<Box>
												<Text as="div" size="4" weight="bold">
													{item.theme}
												</Text>
											</Box>
										</Flex>
									</Link>
								</Card>
								{jurnalLen === index + 1 ? null : <Separator orientation="horizontal" size="4" />}
							</Fragment>
						)
					})}
				</Flex>
			</Section>
		</Page>
	)
}

export default Jurnal
