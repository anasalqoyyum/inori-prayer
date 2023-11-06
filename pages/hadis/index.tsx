import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Avatar, Box, Text, Heading, Separator, TextField } from '@radix-ui/themes'
import Link from 'next/link'
import { HadisList } from '@/constants/Hadis'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

const Hadis = () => {
	const hadisLen = HadisList.length

	return (
		<Page>
			<Heading as="h2" size="8" align="center" className="text-pink-500">
				Hadis Perempuan
			</Heading>
			<Section>
				<TextField.Root>
					<TextField.Slot>
						<MagnifyingGlassIcon height="16" width="16" />
					</TextField.Slot>
					<TextField.Input placeholder="Cari hadis…" />
				</TextField.Root>
			</Section>
			<Section>
				<Flex gap="6" direction="column">
					{HadisList.map((item, index) => {
						return (
							<>
								<Card asChild size="3" variant="ghost" key={item.slug}>
									<Link href={`/hadis/${item.slug}`}>
										<Flex gap="3" align="center">
											<Avatar size="3" radius="full" fallback={index + 1} />
											<Box>
												<Text as="div" size="5" weight="bold">
													{item.title}
												</Text>
												<Text as="div" size="2" color="gray">
													{item.info.shahih}
												</Text>
											</Box>
										</Flex>
									</Link>
								</Card>
								{hadisLen === index + 1 ? null : <Separator orientation="horizontal" size="4" />}
							</>
						)
					})}
				</Flex>
			</Section>
		</Page>
	)
}

export default Hadis
