import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import '@/styles/globals.css'
import '@/styles/theme-config.css'
import { Inter, Noto_Sans_Arabic } from 'next/font/google'

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter'
})

export const arabic = Noto_Sans_Arabic({
	subsets: ['arabic'],
	display: 'swap',
	variable: '--font-arabic'
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
			<Theme accentColor="crimson" grayColor="auto" radius="small">
				<Component className={`${inter.variable} ${arabic.variable}`} {...pageProps} />
			</Theme>
		</ThemeProvider>
	)
}
