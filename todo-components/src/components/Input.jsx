import React from 'react'

const Input = (props) => {
  const { value, onChange, onSubmit } = props
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(e)
      }}
    >
      <div className="flex-row">
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default Input
