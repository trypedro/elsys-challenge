import { Character } from '../../types/character'
import styles from './styles.module.scss'

interface CardProps {
  character: Character
}

export function Card({ character }: CardProps) {
  return (
    <main className={styles.cardContainer}>
      <div className={styles.cardImage}>
        <img src={character.images[0]} alt={`character ${character.name}`} />
      </div>

      <div className={styles.cardContent}>
        <div>
          <h2>{character.name ?? 'Unknown'}</h2>
          <p className={styles.textSubtitle}>{character.alias ?? 'Unknown' }</p>
        </div>

        <div className={styles.characterDatas}>
          <h3>Affiliation</h3>
          <p>{character.affiliation ?? 'Unknown'}</p>
        </div>

        <div className={styles.characterDatas}>
          <h3>Occupation</h3>
          <p>{character.occupation ?? 'Unknown'}</p>
        </div>

        <div className={styles.characterDatas}>
          <h3>Quirk</h3>
          <span>{character.quirk ?? 'Unknown'}</span>
        </div>
      </div>
    </main>
  )
}
