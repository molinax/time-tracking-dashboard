import work from "../assets/images/icon-work.svg"
import play from "../assets/images/icon-play.svg"
import study from "../assets/images/icon-study.svg"
import exercise from "../assets/images/icon-exercise.svg"
import social from "../assets/images/icon-social.svg"
import selfCare from "../assets/images/icon-self-care.svg"

const dataFeatures = {
  "Work": {
    image: work,
    color: "hsl(15, 100%, 70%)",
  },
  "Play": {
    image: play,
    color: "hsl(195, 74%, 62%)",
  },
  "Study": {
    image: study,
    color: "hsl(348, 100%, 68%)",
  },
  "Exercise": {
    image: exercise,
    color: "hsl(145, 58%, 55%)",
  },
  "Social": {
    image: social,
    color: "hsl(264, 64%, 52%)",
  },
  "Self Care": {
    image: selfCare,
    color: "hsl(43, 84%, 65%)"
  },
}

export const getDataFeature = (title) => dataFeatures[title]
