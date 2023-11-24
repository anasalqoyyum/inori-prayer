import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Heading, IconButton, Separator, Text } from '@radix-ui/themes'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Routes } from '@/constants/Link'
import { HakA, HakB, HakC, HakKhusus, HakList, HakUmum, KewajibanList } from '@/constants/HakKewajiban'
import { Fragment } from 'react'
import clsx from 'clsx'
import { arabic } from '../_app'

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
						<ol className="list-decimal mx-6 my-6">
							<Flex direction={'column'} gap={'2'}>
								<li>
									<Text as="p">
										Dalam kitab Dau’ul al-Misbah fi Bayani ahkam al-Nikah karya KH. Hasyim Asy’ari. Beliau memaparkan hak-hak perempuan
										sebagai berikut:
									</Text>
								</li>
								<Flex direction={'column'} gap={'2'}>
									{HakList.map((item, idx) => (
										<Fragment key={`${idx}`}>
											<ul className="list-disc mx-6">
												<li>{item.title}</li>
												<Text as="p" className="my-2">
													{item.hadis.title}
												</Text>
												<Text as="p" size="5" align="center" className={clsx(arabic.className, 'my-4 leading-9 font-semibold')}>
													{item.hadis.content}
												</Text>
												<Separator size={'4'} />
												<Text as="p" align="center" className="my-4">
													{item.hadis.defintion}
												</Text>
											</ul>
										</Fragment>
									))}
								</Flex>
							</Flex>
						</ol>
					</Card>
				</Flex>
			</Section>
		</Page>
	)
}

export default Hak
