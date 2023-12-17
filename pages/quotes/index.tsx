import Page from '@/components/page'
import Section from '@/components/section'
import { Avatar, Box, Card, Flex, Heading, Separator, Text } from '@radix-ui/themes'
import { Quotes } from '@/constants/Quotes'
import { Fragment } from 'react'
import Link from 'next/link'
import { generateSlug } from '@/utils/url'
import { Quote } from 'lucide-react'

const QuotesPage = () => {
	const quoteLen = Quotes.length

	return (
		<Page>
			<Heading as="h2" size="8" align="center" className="text-pink-500">
				Daftar Quote
			</Heading>
			<Section>
				<Flex gap="6" direction="column">
					{Quotes.map((item, index) => {
						const slug = generateSlug(item.theme)

						return (
							<Fragment key={item.theme}>
								<Card asChild size="3" variant="ghost">
									<Link href={`/quotes/${slug}`}>
										<Flex gap="3" align="center">
											<Avatar size="3" radius="full" fallback={<Quote />} />
											<Box>
												<Text as="div" size="4" weight="bold">
													{item.theme}
												</Text>
											</Box>
										</Flex>
									</Link>
								</Card>
								{quoteLen === index + 1 ? null : <Separator orientation="horizontal" size="4" />}
							</Fragment>
						)
					})}
				</Flex>
			</Section>
		</Page>
	)
}

export default QuotesPage
