import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_RANDOM_IMAGE = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
const CAT_ENDPOINT_PREFIX = 'https://cataas.com'

export function App () {
  const [fact, setFacts] = useState()
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((response) => response.json())
      .then(data => {
        const { fact } = data
        setFacts(fact)
        const threeFirstWords = fact.split(' ', 3).join(' ')
        console.log(threeFirstWords)
        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
          .then((res) => res.json())
          .then(response => {
            const { url } = response
            setImageUrl(url)
          })
      })
  }, [])

  return (
    <main>
      <h1>App de Gatitos </h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${CAT_ENDPOINT_PREFIX}${imageUrl}`} alt='image extrated for the first three words' />}
      </section>
    </main>
  )
}
