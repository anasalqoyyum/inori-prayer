import Page from '@/components/page'
import Section from '@/components/section'
import { Card, Grid, Heading, Inset, Strong, Text } from '@radix-ui/themes'
import Image from 'next/image'
import img1 from '@/public/assets/wanita/wanita1.png'
import img2 from '@/public/assets/wanita/wanita2.png'
import img3 from '@/public/assets/wanita/wanita3.png'
import img4 from '@/public/assets/wanita/wanita4.png'

const Data = [
	{
		name: 'Prof. Dr. Inayah Rohmaniyah, S.Ag., M.Hum., M.A.',
		pict: img1.src
	},
	{
		name: 'Prof. Dr. Nurun Najwah, M.Ag',
		pict: img2.src
	},
	{
		name: 'Najwa Shihab, S.H., LL.M.',
		pict: img3.src
	},
	{
		name: 'Maudy Ayunda',
		pict: img4.src
	}
]

const WanitaInspiratif = () => {
	return (
		<Page>
			<Heading as="h2" size="8" align="center" className="text-pink-500">
				Wanita Inspiratif
			</Heading>
			<Section>
				<Grid columns={'2'} gap={'3'} width={'auto'}>
					{Data.map((item, idx) => (
						<Card size="2" style={{ maxWidth: 240 }} key={idx}>
							<Inset side="top" pb="current">
								<Image src={item.pict} width={500} height={500} alt={item.name} />
							</Inset>
							<Text as="p" size="3" weight={'bold'} align={'center'}>
								{item.name}
							</Text>
						</Card>
					))}
				</Grid>
			</Section>
		</Page>
	)
}

export default WanitaInspiratif
