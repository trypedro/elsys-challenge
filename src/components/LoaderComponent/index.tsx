import Loader from 'react-loader-spinner'
import styles from './styles.module.scss'

export function LoaderComponent() {
  return (
    <div className={styles.loaderContainer}>
      <Loader type="TailSpin" color="#022648" height={80} width={80} />
      <h2 className={styles.loaderText}>Loading...</h2>
    </div>
  )
}