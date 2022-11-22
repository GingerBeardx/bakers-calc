import { useState } from "react"

const Percentages = ({ measurement, onSet }) => {
  const [waterPercentage, setWaterPercentage] = useState(0)
  const [starterPercentage, setStarterPercentage] = useState(0)
  const [saltPercentage, setSaltPercentage] = useState(0)

  const setPercents = (e) => {
    e.preventDefault()
    if (waterPercentage > 0 && starterPercentage > 0 && saltPercentage > 0) {
      const percents = {
        water: waterPercentage,
        starter: starterPercentage,
        salt: saltPercentage,
      }
      onSet(percents)
    } else {
      alert("Please enter values greater than 0")
      return
    }
  }

  return (
    <form onSubmit={setPercents}>
      <label>{measurement} of Flour:</label>
      <input
        className="read-only"
        type="text"
        name="flour"
        defaultValue={100}
        readOnly
      />
      <label>{measurement} of Water:</label>
      <input
        type="text"
        name="water"
        onChange={(e) => setWaterPercentage(e.target.value)}
      />
      <label>{measurement} of Starter:</label>
      <input
        type="text"
        name="starter"
        onChange={(e) => setStarterPercentage(e.target.value)}
      />
      <label>{measurement} of Salt:</label>
      <input
        type="text"
        name="salt"
        onChange={(e) => setSaltPercentage(e.target.value)}
      />
      <input type="submit" value="Set Percentages" className="btn btn-calc" />
    </form>
  )
}

export default Percentages
