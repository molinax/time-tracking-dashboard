import { useState, useEffect } from "react"
import { Card } from "./Card"
import { data } from "../../functions/data.js"


export const CardsContainer = ({ cardTypeValue }) => {
  const [cardData, setCardData] = useState([])

  useEffect(() => setCardData(data), [])

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:flex-initial md:w-3/5 lg:w-3/4">
      {
        cardData.map(({ title, timeframes }) => {
          const { current, previous } = timeframes[cardTypeValue];

          return (
            <Card
              key={title}
              title={title}
              hours={current}
              previousHours={previous}
            />
          )
        })
      }
    </section>
  )
}
