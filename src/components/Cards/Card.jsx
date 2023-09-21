import ellipsis from "../../assets/images/icon-ellipsis.svg"
import { getDataFeature } from "../../functions/dataFeatures"


export const Card = ({ title, hours, previousHours }) => {
  const { image, color } = getDataFeature(title)
  const bgColorData = {
    backgroundColor: color
  }

  return (
    <article className="bg-dark-blue rounded-xl overflow-hidden">
      <header style={bgColorData} className="overflow-hidden h-12">
        <img src={image} alt={title} className="w-[5.2rem] ml-auto mt-[-4px] pr-4"/>
      </header>

      <section className="card-style relative z-10 flex flex-col gap-4 md:p-6 md:gap-6 lg:h-full lg:gap-10">
        <div className="text-white flex items-center justify-between">
          <p className="font-[500]">{title}</p>
          
          <img src={ellipsis} alt="Icon ellipsis" className="w-[1.4rem] cursor-pointer" />
        </div>

        <div className="text-pale-blue flex items-center justify-between gap-2 md:flex-col lg:gap-4">
          <h2 className="text-2xl text-white font-[300] md:self-start md:text-4xl lg:text-6xl">{hours}hrs</h2>

          <p className="text-sm md:self-start md:pl-1 lg:text-base">Last Week - {previousHours}hrs</p>
        </div>
      </section>

    </article>
  )
}
