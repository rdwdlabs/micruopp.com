import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>Hello, world!</h1>
            <h2>
                <Link href="/">Home</Link>
            </h2>
        </Layout>
    );
}