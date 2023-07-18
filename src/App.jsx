import { useCatsfact } from '../hooks/useCatsfact'
import { useCatsImage } from '../hooks/useCatsImage'
import './App.css'

export function App () {
  const { fact, refreshFact } = useCatsfact()
  const { imageUrl } = useCatsImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de Gatitos </h1>
      <button onClick={handleClick}>Obtener cita</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='image extrated for the first three words' />}

    </main>
  )
}
