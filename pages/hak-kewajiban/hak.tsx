import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Heading, IconButton, Separator } from '@radix-ui/themes'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Routes } from '@/constants/Link'
import { HakKhusus, HakUmum } from '@/constants/HakKewajiban'

const Hak = () => {
	return (
		<Page>
			<Flex align="center" gap="4">
				<IconButton asChild variant="ghost">
					<Link href={Routes.hakKewajiban.index}>
						<ArrowLeft width="24" height="24" />
					</Link>
				</IconButton>
				<Heading as="h2" size="8" align="center" className="text-pink-500">
					Hak & Kewajiban
				</Heading>
			</Flex>

			<Section>
				<Flex gap={'4'} direction={'column'}>
					<Card>
						<Heading as="h2" size="6" align="center" className="text-pink-500">
							Hak
						</Heading>
					</Card>

					<Card>
						<Heading as="h3" size="5" align="center" className="text-pink-500">
							Hak Umum
						</Heading>
						<ol className="list-decimal mx-6 my-6">
							{HakUmum.map((item, idx) => (
								<li key={`${idx}-umum`}>{item}</li>
							))}
						</ol>

						<Separator size={'4'} className="m-4" />
						<Heading as="h3" size="5" align="center" className="text-pink-500">
							Hak Khusus
						</Heading>
						<ol className="list-decimal mx-6 my-6">
							{HakKhusus.map((item, idx) => (
								<li key={`${idx}-khusus`}>{item}</li>
							))}
						</ol>
					</Card>
				</Flex>
			</Section>
		</Page>
	)
}

export default Hak
