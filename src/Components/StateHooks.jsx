import React, { useState } from 'react';

function State() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const increment = () => {
    setCount(count + 1);
  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <h1>Name: {firstName} {lastName}</h1>
      
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter an item"
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default State;