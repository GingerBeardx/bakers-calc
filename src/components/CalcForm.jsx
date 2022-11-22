import { useState } from "react"

const CalcForm = ({ weights, onCalc, measurement, readyToCalc }) => {
  const [flour, setFlour] = useState(0)

  const onSubmit = (e) => {
    e.preventDefault()
    if (isNaN(flour) || flour <= 0) {
      alert("Please enter a numeric value > 0")
      return
    }

    onCalc(flour)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>{measurement} of Flour (grams):</label>
      <input
        type="text"
        name="flour"
        defaultValue={weights.flour}
        onChange={(e) => setFlour(e.target.value)}
      />
      <label>{measurement} of Water (grams):</label>
      <input
        className="read-only"
        type="text"
        name="water"
        value={weights.water}
        readOnly
      />
      <label>{measurement} of Starter (grams):</label>
      <input
        className="read-only"
        type="text"
        name="starter"
        value={weights.starter}
        readOnly
      />
      <label>{measurement} of Salt (grams):</label>
      <input
        className="read-only"
        type="text"
        name="salt"
        value={weights.salt}
        readOnly
      />
      {readyToCalc && flour > 0 && (
        <input type="submit" className="btn btn-calc" value="Calculate" />
      )}
    </form>
  )
}

export default CalcForm
