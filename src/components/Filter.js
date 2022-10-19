import React from 'react'

const Filter = ({ cats, setCats}) => {
  function handleCategoryChange(e) {
    console.log(e.target.value)
  }
  return (
    <div className="filter-container">
      <div>Filter by Category:</div>
      <div>
      <select
            placeholder="Select a job category"
            onChange={(e) => setCats(e.target.value)}
          >
            <option value="none">All</option>
            {cats.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.job_type}
              </option>
            ))}
          </select>
      </div>
    </div>
  )
}

export default Filter