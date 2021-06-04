import { PaginationItem } from './PaginationItem'

import styles from './styles.module.scss'

interface PaginationProps {
  currentPage: number
  count: number
  pages: number
  onChangePage: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter((page) => page > 0)
}

export function Pagination({
  currentPage,
  pages,
  onChangePage,
}: PaginationProps) {
  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []
  const nextPages =
    currentPage < pages
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, pages)
        )
      : []
  return (
    <div className={styles.paginationContainer}>
      <div className={styles.paginationContent}>
        <button
          className={styles.buttonArrow}
          onClick={() => onChangePage(currentPage - 1)}
        >
          <img src='/images/ic_previous.svg' alt='Previous page' />
        </button>

        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem page={1} onChangePage={onChangePage} />
            {currentPage > 2 + siblingsCount && <p>...</p>}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => (
            <PaginationItem
              key={page}
              page={page}
              onChangePage={onChangePage}
            />
          ))}

        <PaginationItem
          page={currentPage}
          isCurrent
          onChangePage={onChangePage}
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => (
            <PaginationItem
              key={page}
              page={page}
              onChangePage={onChangePage}
            />
          ))}

        {currentPage + siblingsCount < pages && (
          <>
            {currentPage + 1 + siblingsCount < pages && <p>...</p>}
            <PaginationItem page={pages} onChangePage={onChangePage} />
          </>
        )}

        <button
          className={styles.buttonArrow}
          onClick={() => onChangePage(currentPage + 1)}
        >
          <img src='/images/ic_next.svg' alt='Next page' />
        </button>
      </div>
    </div>
  )
}
