import { useState } from 'react'
import ChoiceButton from './ChoiceButton'
import { verbs } from '../data/verbs'

export default function Game() {
  const [verb, setVerb] = useState('decide')

  const randomWord = () => {
    const type = Math.floor(Math.random() * 2)
    const index = Math.floor(Math.random() * verbs[type].length)

    setVerb(verbs[type][index])
  }

  return (
    <div className="container">
      <h2 className="header">Gerund or Infinitive</h2>
      <>
        <p className="wordBox">{verb}</p>
        <div className="buttonBox">
          {['Gerund', 'Infinitive', 'Both'].map((choice) => (
            <ChoiceButton
              key={choice}
              choice={choice}
              randomWord={randomWord}
            />
          ))}
        </div>
      </>
    </div>
  )
}
