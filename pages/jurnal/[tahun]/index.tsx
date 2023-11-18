import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Text, Heading, IconButton, Separator, Avatar } from '@radix-ui/themes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowLeft, Scroll } from 'lucide-react'
import { Routes } from '@/constants/Link'
import { JurnalListv2 } from '@/constants/Jurnal'
import { Fragment } from 'react'

const JurnalDetail = () => {
	const { query } = useRouter()
	const currentJurnalListv2 = JurnalListv2.find(jurnal => jurnal.slug === query.tahun)
	const len = currentJurnalListv2?.list.length

	return (
		<Page>
			<Flex align="center" gap="4">
				<IconButton asChild variant="ghost">
					<Link href={Routes.jurnal.index}>
						<ArrowLeft width="24" height="24" />
					</Link>
				</IconButton>
				<Heading as="h2" size="5" align="center" className="text-pink-500">
					{currentJurnalListv2?.theme}
				</Heading>
			</Flex>

			<Section>
				<Flex gap="6" direction="column">
					{currentJurnalListv2 &&
						currentJurnalListv2.list.map((item, index) => {
							return (
								<Fragment key={item.slug}>
									<Card asChild size="3" variant="ghost">
										<Link href={`/jurnal/${currentJurnalListv2.slug}/${item.slug}`}>
											<Flex gap="3" align="center">
												<Avatar size="3" radius="full" fallback={<Scroll />} />
												<Flex gap="2" direction={'column'}>
													<Text as="div" size="3" weight="bold">
														{item.title}
													</Text>
													<Text as="div" size="2" color="gray">
														Ditulis oleh: {item.writer}
													</Text>
												</Flex>
											</Flex>
										</Link>
									</Card>
									{len === index + 1 ? null : <Separator orientation="horizontal" size="4" />}
								</Fragment>
							)
						})}
				</Flex>
			</Section>
		</Page>
	)
}

export default JurnalDetail
