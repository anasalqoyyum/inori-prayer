import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Text, Heading, IconButton, Blockquote, Separator, Link as LinkExtend } from '@radix-ui/themes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowLeft } from 'lucide-react'
import { JurnalList } from '@/constants/Jurnal'

const JurnalDetail = () => {
	const { query } = useRouter()
	const currentJurnalList = JurnalList.find(jurnal => jurnal.tahun === query.tahun)
	const currentJurnal = currentJurnalList?.list.find(jurnal => jurnal.slug === query.slug)

	return (
		<Page>
			<Flex align="center" gap="4">
				<IconButton asChild variant="ghost">
					<Link href={`/jurnal/${currentJurnalList?.tahun}`}>
						<ArrowLeft width="24" height="24" />
					</Link>
				</IconButton>
				<Heading as="h2" size="8" align="center" className="text-pink-500">
					Jurnal
				</Heading>
			</Flex>

			<Section>
				<Card>
					<Flex gap="6" direction="column">
						<Heading as="h2" size="6" align="center" className="text-pink-500">
							{currentJurnal?.title}
						</Heading>
						<Separator size={'4'} />
						<Blockquote>
							<Text as="p" weight={'bold'}>
								{currentJurnal?.writer}
							</Text>
							<br />
							<Text as="p">{currentJurnal?.asal}</Text>
							<LinkExtend>{currentJurnal?.contact}</LinkExtend>
						</Blockquote>
						<Heading align={'center'} as="h5" size={'4'}>
							Abstract
						</Heading>
						<Text as="span" align="center" size={'2'}>
							{currentJurnal?.abstract}
						</Text>
					</Flex>
				</Card>
			</Section>
		</Page>
	)
}

export default JurnalDetail
