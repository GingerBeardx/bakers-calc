import { useState } from "react"
import { Header, CalcForm, Percentages } from "./components"

function App() {
  //State
  const [weights, setWeights] = useState({
    flour: 0,
    water: 0,
    starter: 0,
    salt: 0,
  })
  const [percentages, setPercentages] = useState({
    water: 0,
    starter: 0,
    salt: 0,
  })
  const [readyToCalc, setReadyToCalc] = useState(false)

  //Functions
  const calcWeights = (flourWeight) => {
    const waterWeight = flourWeight * (percentages.water / 100)
    const starterWeight = flourWeight * (percentages.starter / 100)
    const saltWeight = flourWeight * (percentages.salt / 100)

    const newWeights = {
      flour: flourWeight,
      water: waterWeight,
      starter: starterWeight,
      salt: saltWeight,
    }

    setWeights(newWeights)
  }

  const setPercents = (percentages) => {
    setPercentages(percentages)
    setReadyToCalc(true)
  }

  return (
    <div className="container">
      <Header title="Bakers Percentage Calculator" />
      <div className="calc-percent">
        <CalcForm
          measurement="Weight"
          readyToCalc={readyToCalc}
          weights={weights}
          onCalc={calcWeights}
        />
        <Percentages
          measurement="Percentage"
          percentages={percentages}
          weights={weights}
          onSet={setPercents}
        />
      </div>
    </div>
  )
}

export default App
