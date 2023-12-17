import Page from '@/components/page'
import Section from '@/components/section'
import { Card, Grid, Heading, Inset, Text } from '@radix-ui/themes'
import Image from 'next/image'
import img1 from '@/public/assets/wanita/wanita1.png'
import img2 from '@/public/assets/wanita/wanita2.png'
import img3 from '@/public/assets/wanita/wanita3.png'
import img4 from '@/public/assets/wanita/wanita4.png'
import img5 from '@/public/assets/wanita/wanita5.png'
import img6 from '@/public/assets/wanita/wanita6.png'
import img7 from '@/public/assets/wanita/wanita7.png'
import img8 from '@/public/assets/wanita/wanita8.png'
import img9 from '@/public/assets/wanita/wanita9.png'
import img10 from '@/public/assets/wanita/wanita10.png'
import img11 from '@/public/assets/wanita/wanita11.png'
import img12 from '@/public/assets/wanita/wanita12.png'
import img13 from '@/public/assets/wanita/wanita13.png'
import img14 from '@/public/assets/wanita/wanita14.png'

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
		name: 'Chandra Kartika Dewi, M.Kes',
		pict: img3.src
	},
	{
		name: 'Dr. Adib Sofia, S.S., M.Hum',
		pict: img4.src
	},
	{
		name: 'Dr. Dian Nur Anna, S.Ag., M.A',
		pict: img5.src
	},
	{
		name: 'Dr. Siti Khodijah Nurul Aula, M.Ag',
		pict: img6.src
	},
	{
		name: 'Fitriana Firdausi, S.Th.I., M.Hum',
		pict: img7.src
	},
	{
		name: `Imas Lu'ul Jannah, M.A`,
		pict: img8.src
	},
	{
		name: `Lien Iffah Naf'atu Fina, M.Hum`,
		pict: img9.src
	},
	{
		name: `Nafisatul Mu'Awwanah, M.A`,
		pict: img10.src
	},
	{
		name: 'Nur Afni Khafsoh, M.Sos',
		pict: img11.src
	},
	{
		name: 'Rosi Islamiyati, S.Ag., M.Ag',
		pict: img12.src
	},
	{
		name: 'Subkhani Kusuma Dewi M.A',
		pict: img13.src
	},
	{
		name: 'Zunly Nadia, M.A',
		pict: img14.src
	}
]

const PerempuanPengkaji = () => {
	return (
		<Page>
			<Heading as="h2" size="8" align="center" className="text-pink-500">
				Perempuan Para Pengkaji Hadis
			</Heading>
			<Section>
				<Grid columns={'2'} gap={'3'} width={'auto'} justify={'center'} align={'center'} className="place-items-center">
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

export default PerempuanPengkaji
