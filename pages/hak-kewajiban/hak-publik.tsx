import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Heading, IconButton, Separator, Text } from '@radix-ui/themes'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Routes } from '@/constants/Link'
import { HakPublik } from '@/constants/HakKewajiban'
import { Fragment } from 'react'

const KewajibanIstri = () => {
	return (
		<Page>
			<Flex align="center" gap="4">
				<IconButton asChild variant="ghost">
					<Link href={Routes.hakKewajiban.index}>
						<ArrowLeft width="24" height="24" />
					</Link>
				</IconButton>
				<Heading as="h2" size="4" align="center" className="text-pink-500">
					Hak Perempuan dalam ruang Publik
				</Heading>
			</Flex>

			<Section>
				<Flex gap={'4'} direction={'column'}>
					<Card>
						<Heading as="h2" size="6" align="center" className="text-pink-500">
							Hak Perempuan dalam ruang Publik
						</Heading>
					</Card>

					<Card>
						<ol className="list-decimal mx-6 my-6">
							<Flex direction={'column'} gap={'2'}>
								{HakPublik.map((item, idx) => (
									<Fragment key={`${idx}`}>
										<ul className="list-disc mx-6">
											<li className="font-semibold">{item.title}</li>
											<Text as="p" className="my-2">
												{item.content}
											</Text>
										</ul>
									</Fragment>
								))}
							</Flex>
						</ol>
					</Card>
				</Flex>
			</Section>
		</Page>
	)
}

export default KewajibanIstri
