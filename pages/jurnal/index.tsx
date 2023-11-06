import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Avatar, Box, Text, Heading, Separator } from '@radix-ui/themes'
import Link from 'next/link'
import { Scroll } from 'lucide-react'
import { JurnalList } from '@/constants/Jurnal'
import { Fragment } from 'react'

const Jurnal = () => {
	const jurnalLen = JurnalList.length

	return (
		<Page>
			<Heading as="h2" size="6" align="center" className="text-pink-500">
				Jurnal Hadis-Hadis Perempuan
			</Heading>
			<Section>
				<Flex gap="6" direction="column">
					{JurnalList.map((item, index) => {
						return (
							<Fragment key={item.tahun}>
								<Card asChild size="3" variant="ghost">
									<Link href={`/jurnal/${item.tahun}`}>
										<Flex gap="3" align="center">
											<Avatar size="3" radius="full" fallback={<Scroll />} />
											<Box>
												<Text as="div" size="5" weight="bold">
													{item.title}
												</Text>
												<Text as="div" size="2" color="gray">
													Jurnal hadis yang ditulis pada tahun {item.tahun}
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
