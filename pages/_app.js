import '../styles/globals.css';
import '../styles/markdown.css';
import { MDXProvider } from '@mdx-js/react';
import Link from 'next/link';
import Script from 'next/script';

const CustomLink = (props) => {
	const href = props.href;
	const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

	if (isInternalLink) {
		return (
			<Link href={href}>
				<a {...props}>{props.children}</a>
			</Link>
		);
	}

	return <a target='_blank' rel='noopener noreferrer' {...props} />;
};

const components = {
	a: CustomLink,
};

export default function App(app) {
	const { Component, pageProps } = app;
	return (
		<MDXProvider components={components}>
			<Component {...pageProps} />
			<Script src='https://wow.zamimg.com/widgets/power.js'></Script>
		</MDXProvider>
	);
}
