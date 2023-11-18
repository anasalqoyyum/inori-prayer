import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Text, Heading, IconButton, Blockquote, Separator, Link as LinkExtend } from '@radix-ui/themes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowLeft } from 'lucide-react'
import { JurnalListv2 } from '@/constants/Jurnal'
import clsx from 'clsx'
import { arabic } from '@/pages/_app'

const JurnalDetail = () => {
	const { query } = useRouter()
	const currentJurnalListv2 = JurnalListv2.find(jurnal => jurnal.slug === query.tahun)
	const currentJurnal = currentJurnalListv2?.list.find(jurnal => jurnal.slug === query.slug)
	const multiContact = currentJurnal?.contact.split(',')

	return (
		<Page>
			<Flex align="center" gap="4">
				<IconButton asChild variant="ghost">
					<Link href={`/jurnal/${currentJurnalListv2?.slug}`}>
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
							<Flex direction={'column'} gap={'2'}>
								{multiContact && multiContact.length === 1 ? (
									<LinkExtend href={`mailto:${multiContact[0]}`}>{multiContact[0]}</LinkExtend>
								) : (
									<div>
										{multiContact?.map((item, idx) => (
											<LinkExtend href={`mailto:${item}`} key={idx}>
												{idx !== multiContact.length - 1 ? `${item}, ` : item}
											</LinkExtend>
										))}
									</div>
								)}
								<LinkExtend href={currentJurnal?.link}>Download PDF Jurnal</LinkExtend>
							</Flex>
						</Blockquote>
						<Heading as="h4" size={'3'} align={'center'}>
							{currentJurnal?.hadis.shahih}
						</Heading>
						<Text as="p" size="5" align="center" className={clsx(arabic.className, 'leading-9 font-semibold')}>
							{currentJurnal?.hadis.content}
						</Text>
						<Separator size={'4'} />
						<Text as="span" align="center">
							{currentJurnal?.hadis.description}
						</Text>
					</Flex>
				</Card>
			</Section>
		</Page>
	)
}

export default JurnalDetail
