import styles from "../styles/Home.module.scss";
import Head from "next/head";

function Detail() {
    return (
        <div className={styles.container}>
          <Head>
            <title>Detail</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
              <div className="main-wrap">
                  <div className="text-center">
                      <h4>Detail</h4>
                      <p>get started with our service</p>
                  </div>
              </div>
          </main>
        </div>
    )
}

export default Detail
