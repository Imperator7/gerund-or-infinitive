export default function ChoiceButton(props) {
  const handleOnAnswer = () => {
    console.log('hello')
  }

  return (
    <button
      className="choiceButton"
      onMouseOver={(e) => (e.target.style.background = '#c462c4')}
      onMouseOut={(e) => (e.target.style.background = '#f5aeda')}
      onClick={(handleOnAnswer, props.randomWord)}
    >
      {props.choice}
    </button>
  )
}
