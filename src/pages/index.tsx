import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { api } from '../services/api'

import { Card } from '../components/Card'
import styles from './home.module.scss'
import { Character } from '../types/character'
import { Pagination } from '../components/Pagination'
import { LoaderComponent } from '../components/LoaderComponent'
import { Header } from '../components/Header'

interface HomeProps {
  info: {
    currentPage: number
    count: number
    pages: number
  }
  result: Character[]
}

export default function Home({ info, result }: HomeProps) {
  const [characters, setCharacters] = useState(result)
  const [currentPage, setCurrentPage] = useState(info.currentPage)
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    async function changePage() {
      setIsLoading(true)
      try {
        const { data } = await api.get(`?page=${currentPage}`)
        setCharacters(data.result)
        setIsLoading(false)
      } catch (err) {
        console.log(err)
        setIsLoading(false)
      }
    }

    changePage()
  }, [currentPage])

  return (
    <>
      <Head>
        <title>Elsys | My Hero Academia</title>
      </Head>

      <Header />
      <main className={styles.contentContainer}>
        {!isLoading ?
          characters.map((character) => (
            <Card key={character.id} character={character} />
          )) : <LoaderComponent />}
      </main>
      <Pagination
        currentPage={currentPage}
        count={info.count}
        pages={info.pages}
        onChangePage={setCurrentPage}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await api.get('?page=1')

    return {
      props: { info: data.info, result: data.result }, //informations about the page, and the characters
    }
  } catch (err) {
    console.log(err)

    return { props: {} }
  }
}
