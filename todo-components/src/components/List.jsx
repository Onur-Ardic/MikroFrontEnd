import React from 'react'

const List = (props) => {
  const { items } = props
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default List
