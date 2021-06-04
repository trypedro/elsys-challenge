import styles from './paginationItem.module.scss'

interface PaginationItemProps {
  isCurrent?: boolean
  page: number
  onChangePage: (page: number) => void
}

export function PaginationItem({
  isCurrent,
  page,
  onChangePage,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <button
        className={`${styles.buttonPage} ${styles.buttonCurrent}`}
        onClick={() => onChangePage(page)}
      >
        {page}
      </button>
    )
  }

  return (
    <button className={styles.buttonPage} onClick={() => onChangePage(page)}>
      {page}
    </button>
  )
}
