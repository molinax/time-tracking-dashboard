export const CardType = ({ typeCard, onClick, cardTypeValue  }) => {
  return (
    <a
      href="#" 
      onClick={onClick}
      className={`transition duration-150 ease-out hover:opacity-75 capitalize text-inherit ${cardTypeValue === typeCard && "text-pale-blue"}`}
    >
      {typeCard}
    </a>
  )
}
