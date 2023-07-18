import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_RANDOM_IMAGE = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`

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
            setImageUrl(`https://cataas.com${url}`)
          })
      })
  }, [])

  return (
    <main>
      <h1>App de Gatitos </h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='image extrated for the first three words' />}
    </main>
  )
}
