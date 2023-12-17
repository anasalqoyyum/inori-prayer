import Page from '@/components/page'
import Section from '@/components/section'
import { Routes } from '@/constants/Link'
import { Quotes } from '@/constants/Quotes'
import { generateSlug } from '@/utils/url'
import { Flex, Heading, IconButton } from '@radix-ui/themes'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const QuoteSlug = () => {
	const { query } = useRouter()
	const currentQuote = Quotes.find(quote => {
		const slug = generateSlug(quote.theme)
		return slug === query.slug
	})

	return (
		<Page>
			<Flex align="center" gap="4" className="items-center justify-center">
				<IconButton asChild variant="ghost">
					<Link href={Routes.quotes}>
						<ArrowLeft width="24" height="24" />
					</Link>
				</IconButton>
				<Heading as="h2" size="8" align="center" className="text-pink-500">
					{currentQuote?.theme}
				</Heading>
			</Flex>

			<Section>
				<Flex align={'center'} justify={'center'}>
					<Image src={currentQuote?.src || ''} width={500} height={500} priority alt="Quote" />
				</Flex>
			</Section>
		</Page>
	)
}

export default QuoteSlug
