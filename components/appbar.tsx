import Link from 'next/link'
import { useRouter } from 'next/router'
import logo from '@/public/assets/logo.png'
import uin from '@/public/assets/uin.png'
import { Links, Routes } from '@/constants/Link'

const Appbar = () => {
	const router = useRouter()

	return (
		<div className="fixed top-0 left-0 z-20 w-full bg-zinc-100 pt-safe">
			<header className="border-b bg-zinc-100 px-safe dark:border-zinc-800 dark:bg-zinc-900">
				<div className="mx-auto flex h-20 max-w-screen-md items-center justify-between px-6">
					<Link href={Routes.index}>
						<h1 className="font-medium">Hadith of Woman</h1>
					</Link>
					<nav className="flex items-center space-x-6">
						<div className="hidden sm:block">
							<div className="flex items-center space-x-6">
								{Links.map(({ label, href }) => (
									<Link
										key={label}
										href={href}
										className={`text-sm ${
											router.pathname === href
												? 'text-pink-500 dark:text-pink-400'
												: 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
										}`}>
										{label}
									</Link>
								))}
							</div>
						</div>

						<div className="flex flex-row items-end gap-1">
							<div
								title="UIN Sunan Kalijaga Logo"
								className="h-10 w-10 bg-zinc-100 bg-contain dark:bg-zinc-800"
								style={{
									backgroundImage: `url(${uin.src})`
								}}
							/>
							<p className="font-semibold text-[9px]">
								Program Studi <br /> Ilmu Hadis
							</p>
						</div>
						<div
							title="App Logo"
							className="h-10 w-10 rounded-full bg-zinc-100 bg-cover shadow-inner dark:bg-zinc-800"
							style={{
								backgroundImage: `url(${logo.src})`
							}}
						/>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Appbar
