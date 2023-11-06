import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Text, Heading, IconButton, Blockquote, Separator, Grid } from '@radix-ui/themes'
import Link from 'next/link'
import { HadisList } from '@/constants/Hadis'
import { useRouter } from 'next/router'
import { ArrowLeft } from 'lucide-react'
import { arabic } from '../_app'
import { Routes } from '@/constants/Link'
import clsx from 'clsx'

const HadisDetail = () => {
	const { query } = useRouter()
	const currentHadis = HadisList.find(hadis => hadis.slug === query.slug)

	return (
		<Page>
			<Flex align="center" gap="4">
				<IconButton variant="ghost">
					<Link href={Routes.hadis.index}>
						<ArrowLeft width="24" height="24" />
					</Link>
				</IconButton>
				<Heading as="h2" size="8" align="center" color="pink">
					{currentHadis?.info.shahih.split(':')[0]}
				</Heading>
			</Flex>

			<Section>
				<Flex gap="6" direction="column">
					<Card>
						<Flex gap="3" direction="column">
							<Heading as="h3" align={'center'}>
								{currentHadis?.title}
							</Heading>
							<Heading as="h4" size={'3'} align={'center'}>
								{currentHadis?.info.shahih}
							</Heading>
							<Blockquote>
								<Text as="p">Derajat: {currentHadis?.info.derajat}</Text>
								<Text as="p">Kitab: {currentHadis?.info.kitab}</Text>
								<Text as="p">Bab: {currentHadis?.info.bab}</Text>
							</Blockquote>
						</Flex>
					</Card>
					<Text as="p" size="5" align="center" className={clsx(arabic.className, 'leading-9')}>
						{currentHadis?.content}
					</Text>
					<Separator size={'4'} />
					<Text as="span" align="center">
						{currentHadis?.definition}
					</Text>
					<Card>
						<Flex gap="3" direction="column">
							<Heading as="h3" align={'center'}>
								Takhrij Hadis
							</Heading>
							<Separator size={'4'} />
							<Grid align="center" columns="2" gap="3" p="3">
								{currentHadis?.takhrij.map((item, index) => (
									<Text size="2" weight="medium" key={index}>
										{item}
									</Text>
								))}
							</Grid>
						</Flex>
					</Card>
				</Flex>
			</Section>
		</Page>
	)
}

export default HadisDetail
