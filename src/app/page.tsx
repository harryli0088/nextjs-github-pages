import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

import logo from 'public/next.svg'
import vercelLogo from 'public/vercel.svg'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src={vercelLogo}
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src={logo}
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link
          href="/test-route"
          className={styles.card}
        >
          <h2>
            Test Route <span>-&gt;</span>
          </h2>
          <p>Try the test route.</p>
        </Link>

        <Link
          href="/test-route"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Test Route in new tab <span>-&gt;</span>
          </h2>
          <p>Try the test route in a new tab.</p>
        </Link>

        <a
          href="https://github.com/harryli0088/nextjs-test"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            GitHub Repo <span>-&gt;</span>
          </h2>
          <p>
            Checkout the GitHub repo.
          </p>
        </a>
      </div>
    </main>
  )
}
