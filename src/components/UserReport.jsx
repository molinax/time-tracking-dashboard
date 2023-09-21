import { CardType } from "./Cards/CardType"

export const UserReport = ({ userImg, userName, onCardTypeClick, cardTypeValue }) => {
  const handleCardTypeClick = (typeCard) => onCardTypeClick(typeCard)

  return (
    <header className="w-full flex flex-col bg-dark-blue rounded-xl overflow-hidden md:max-w-[16rem] md:flex-initial md:w-2/5 lg:w-3/12">
      <div className="bg-blue p-8 rounded-xl flex items-center gap-4 z-10 md:py-12 px-6 md:flex-col md:flex-initial md:h-3/5 md:items-stretch md:justify-around lg:h-3/4 lg:gap-20">
        <picture>
          <img src={userImg} alt={userName} className="w-14 rounded-full border-2 border-white md:w-24 lg:w-32" />
        </picture>

        <p className="text-sm text-pale-blue lg:text-base">
          Report for <br></br><span className="text-3xl font-[300] text-white lg:text-4xl">{userName}</span>
        </p>
      </div>

      <nav className="py-[.10rem] md:flex-initial md:h-2/5 flex items-center">
        <ul className="flex w-full justify-around py-4 text-desaturated-blue md:flex-col md:pl-4 md:gap-10 lg:gap-4 lg:h-3/4">
          <li>
            <CardType typeCard="daily" onClick={() => handleCardTypeClick("daily")} cardTypeValue={cardTypeValue} />
          </li>
          <li>
            <CardType typeCard="weekly" onClick={() => handleCardTypeClick("weekly")} cardTypeValue={cardTypeValue} />
          </li>
          <li>
            <CardType typeCard="monthly" onClick={() => handleCardTypeClick("monthly")} cardTypeValue={cardTypeValue} />
          </li>
        </ul>
      </nav>
    </header>
  )
}
