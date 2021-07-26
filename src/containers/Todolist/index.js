import React from 'react'
import { useState } from 'react'
import TodoItem from './components/TodoItem'
import FormInput from './components/FormIput'
import { Link } from 'react-router-dom'

// const todos = ["Go driving", "Eat lunch", "Do homework", "Read a book"]

export const TodoList = () => {

  const [items, setItems] = useState(["Go driving", "Eat lunch", "Do homework", "Read a book", "Go dancing"])
  const [newItem, setNewItem] = useState("")

  const addItem = () => {
    const newItems = items.slice()
    newItems.push(newItem)
    setItems(newItems)
  }

  return (
    <div>
      {/* {items.length} items left */}
      { items.length == 1 ? <p>1 item left</p> : <p>{items.length} items left</p> }
      { items.map((item, idx) => <TodoItem idx={idx} key={idx} text={item} items={items} setItems={setItems}/>) }
      <FormInput
        type="text"
        placeholder="Type item here"
        value={newItem}
        setValue={setNewItem}
      />
      <button onClick={addItem}>Add</button>
      <button>
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  )
}
