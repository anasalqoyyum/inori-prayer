import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Heading, IconButton, Separator, Text } from '@radix-ui/themes'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Routes } from '@/constants/Link'
import { KewajibanIstriTerhadapSuami } from '@/constants/HakKewajiban'
import { Fragment } from 'react'
import clsx from 'clsx'
import { arabic } from '@/pages/_app'

const KewajibanIstri = () => {
	return (
		<Page>
			<Flex align="center" gap="4">
				<IconButton asChild variant="ghost">
					<Link href={Routes.hakKewajiban.kewajiban}>
						<ArrowLeft width="24" height="24" />
					</Link>
				</IconButton>
				<Heading as="h2" size="4" align="center" className="text-pink-500">
					Kewajiban Istri Terhadap Suami
				</Heading>
			</Flex>

			<Section>
				<Flex gap={'4'} direction={'column'}>
					<Card>
						<Heading as="h2" size="6" align="center" className="text-pink-500">
							Kewajiban Istri Terhadap Suami
						</Heading>
					</Card>

					<Card>
						<Text as="p" className="mx-6 my-3 font-semibold">
							Berikut merupakan kewajiban istri terhadap suami pada lingkup keluarga yang telah dijelaskan oleh KH. Hasyim Asy’ari pada
							kitab Dau’ul Misbah fi ahkami Nikah:
						</Text>
						<ol className="list-decimal mx-6 my-6">
							<Flex direction={'column'} gap={'2'}>
								{KewajibanIstriTerhadapSuami.map((item, idx) => (
									<Fragment key={`${idx}`}>
										<ul className="list-disc mx-6">
											<li className="font-semibold">{item.title}</li>
											<Text as="p" className="my-2">
												{item.hadis[0].title}
											</Text>
											<Text as="p" size="5" align="center" className={clsx(arabic.className, 'my-4 leading-9 font-semibold')}>
												{item.hadis[0].content}
											</Text>
											<Separator size={'4'} />
											<Text as="p" align="center" className="my-4">
												{item.hadis[0].definition}
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
