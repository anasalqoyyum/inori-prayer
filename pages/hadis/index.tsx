import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Avatar, Box, Text, Heading, Separator, TextField } from '@radix-ui/themes'
import Link from 'next/link'
import { HadisList } from '@/constants/Hadis'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Fragment, useState } from 'react'

const Hadis = () => {
	const hadisLen = HadisList.length
	const [searchTerm, setSearchTerm] = useState('')
	const [searchResults, setSearchResults] = useState(HadisList)

	const handleSearch = (searchTerm: string) => {
		if (searchTerm === '') setSearchResults(HadisList)
		const filteredResults = HadisList.filter(
			item =>
				item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.info.shahih.toLowerCase().includes(searchTerm.toLowerCase())
		)
		setSearchResults(filteredResults)
	}

	return (
		<Page>
			<Heading as="h2" size="8" align="center" className="text-pink-500">
				Hadis Perempuan
			</Heading>
			<Section>
				<TextField.Root radius="full">
					<TextField.Slot>
						<MagnifyingGlassIcon height="16" width="16" />
					</TextField.Slot>
					<TextField.Input
						placeholder="Cari hadis…"
						value={searchTerm}
						onChange={e => {
							setSearchTerm(e.target.value)
							handleSearch(e.target.value)
						}}
					/>
				</TextField.Root>
			</Section>
			<Section>
				<Flex gap="6" direction="column">
					{searchResults.map((item, index) => {
						return (
							<Fragment key={item.slug}>
								<Card asChild size="3" variant="ghost">
									<Link href={`/hadis/${item.slug.toLowerCase()}`}>
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
							</Fragment>
						)
					})}
				</Flex>
			</Section>
		</Page>
	)
}

export default Hadis
