import Page from '@/components/page'
import Section from '@/components/section'
import { Heading } from '@radix-ui/themes'
import image1 from '@/public/assets/quotes/1.png'
import image2 from '@/public/assets/quotes/2.png'
import image3 from '@/public/assets/quotes/3.png'
import image4 from '@/public/assets/quotes/4.png'
import image5 from '@/public/assets/quotes/5.png'
import image6 from '@/public/assets/quotes/6.png'
import Image from 'next/image'

const Quotes = () => {
	const quotes = [image1, image2, image3, image4, image5, image6]
	const currQuote = quotes[Math.floor(Math.random() * quotes.length)]

	return (
		<Page>
			<Heading as="h2" size="8" align="center" className="text-pink-500">
				Quote of the Day
			</Heading>
			<Section>
				<Image src={currQuote.src} width={500} height={500} priority alt="Quote of the Day" />
			</Section>
		</Page>
	)
}

export default Quotes
