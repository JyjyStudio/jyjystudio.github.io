import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Cursor from '@/components/Cursor/Cursor'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
			<Cursor />
			<div className="noise-bg"></div>
		</>
	)
}

