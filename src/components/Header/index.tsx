import NextLink from 'next/link'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.iconDiv}>
        <img src='/images/ms-icon-70x70.png' alt='My Hero Academia Icon' />
      </div>

      <div className={styles.logoDiv}>
        <img src='/images/my-hero-logo.png' alt='My Hero Academia Logo' />
      </div>

      <div className={styles.outDiv}>
        <NextLink href='/bye'>
          <a>
            Sair <img src='/images/ic_exit.svg' alt='Exit' />
          </a>
        </NextLink>
      </div>
    </header>
  )
}
