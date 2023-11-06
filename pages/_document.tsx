import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="utf-8" />
				<link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover" />
				<meta name="theme-color" content="#e93d82" />
				<link rel="apple-touch-icon" href="/images/icon-maskable-512.png" />
				<link rel="manifest" href="/manifest.json" />
			</Head>
			<body className="bg-slate-50 dark:bg-slate-950">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
