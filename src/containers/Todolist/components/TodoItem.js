
import React from 'react'

const TodoItem = ({ text, idx, items, setItems }) => {
  
  const finishItem = () => {
    console.log(`Finished item ${idx}!`)
    const newItems = items.slice()
    newItems.splice(idx, 1)
    setItems(newItems)
  }

  return (
    <>
      <li>{text}</li>
      <button onClick={finishItem}>Done!</button>
    </>
  )
}

export default TodoItem
