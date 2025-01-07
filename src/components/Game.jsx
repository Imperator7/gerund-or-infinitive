import { useState } from 'react'
import ChoiceButton from './ChoiceButton'
import { verbs } from '../data/verbs'

export default function Game() {
  const [score, setScore] = useState(0)
  const [verb, setVerb] = useState('decide')
  const [typeOfVerb, setTypeOfVerb] = useState('Infinitive') // 0 for gerund and 1 for infinitive type

  const randomWord = () => {
    const type = Math.floor(Math.random() * 2)
    const index = Math.floor(Math.random() * verbs[type].length)

    setVerb(verbs[type][index])
    setTypeOfVerb(type === 0 ? 'Gerund' : 'Infinitive')
  }

  return (
    <div className="container">
      <h2 className="header">Gerund or Infinitive</h2>
      <p className="wordBox">{verb}</p>
      <p className="scoreBoard">Score: {score}</p>
      <div className="buttonBox">
        {['Gerund', 'Infinitive', 'Both'].map((choice) => (
          <ChoiceButton
            key={choice}
            choice={choice}
            randomWord={randomWord}
            setScore={setScore}
            typeOfVerb={typeOfVerb}
          />
        ))}
      </div>
    </div>
  )
}
