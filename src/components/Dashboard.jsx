import { useState } from "react"
import { UserReport } from "./UserReport"
import { CardsContainer } from "./Cards/CardsContainer"

import jeremyImg from "../assets/images/image-jeremy.png"

export const Dashboard = () => {
  const [cardTypeValue, setCardTypeValue] = useState("daily")
  const handleCardTypeClick = (typeCard) => setCardTypeValue(typeCard)
  
  return (
    <section className="w-[90%] max-w-6xl mx-auto flex flex-col gap-6 justify-center md:flex-row">
        <UserReport
          userImg={jeremyImg} userName={"Jeremy Robson"}
          onCardTypeClick={handleCardTypeClick}
          cardTypeValue={cardTypeValue}
        />
        
        <CardsContainer cardTypeValue={cardTypeValue} />
    </section>
  )
}