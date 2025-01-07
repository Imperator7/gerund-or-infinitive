export default function ChoiceButton(props) {
  const handleOnAnswer = () => {
    if (props.typeOfVerb === props.choice) {
      props.setScore((prev) => prev + 1)
    }
  }

  return (
    <button
      className="choiceButton"
      onMouseOver={(e) => (e.target.style.background = '#c462c4')}
      onMouseOut={(e) => (e.target.style.background = '#f5aeda')}
      onClick={() => {
        handleOnAnswer(), props.randomWord()
      }}
    >
      {props.choice}
    </button>
  )
}
