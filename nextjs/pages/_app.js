import Layout from '../src/components/Layout';
import styles from '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
    return (

        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp