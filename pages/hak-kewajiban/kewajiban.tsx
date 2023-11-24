import Page from '@/components/page'
import Section from '@/components/section'
import { Flex, Card, Heading, IconButton, Text, Separator } from '@radix-ui/themes'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Routes } from '@/constants/Link'
import { KewajibanList } from '@/constants/HakKewajiban'
import { Fragment } from 'react'
import clsx from 'clsx'
import { arabic } from '../_app'

const Kewajiban = () => {
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
							Kewajiban
						</Heading>
					</Card>

					<Card>
						<Text as="p">
							Dalam kitab Dau’ul al-Misbah fi Bayani ahkam al-Nikah karya KH. Hasyim Asy’ari. Beliau memaparkan kewajiban perempuan sebagai
							berikut:
						</Text>
						<ol className="list-decimal mx-6 my-6">
							<Flex direction={'column'} gap={'2'}>
								{KewajibanList.map((item, idx) => (
									<Fragment key={`${idx}`}>
										<li>{item.title}</li>
										<Text as="p">{item.content}</Text>
										{item.hadis.length === 1 ? (
											<>
												<Text as="p" size="5" align="center" className={clsx(arabic.className, 'leading-9 font-semibold')}>
													{item.hadis[0].content}
												</Text>
												<Separator size={'4'} />
												<Text as="p" align="center">
													{item.hadis[0].definition}
												</Text>
											</>
										) : (
											<ol className="list-disc mx-6 my-3">
												{item.hadis.map((had, idx) => (
													<div className="my-2" key={idx}>
														<li>{had.title}</li>
														<Text as="p" size="5" align="center" className={clsx(arabic.className, 'my-2 leading-9 font-semibold')}>
															{item.hadis[0].content}
														</Text>
														<Separator size={'4'} />
														<Text as="p" align="center" className="my-2">
															{item.hadis[0].definition}
														</Text>
													</div>
												))}
											</ol>
										)}
										{item.subContent ? (
											<ul className="list-disc mx-6">
												{item.subContent.map((con, num) => (
													<li key={num}>{con}</li>
												))}
											</ul>
										) : null}
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

export default Kewajiban
