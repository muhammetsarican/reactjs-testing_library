import React, { useState } from 'react'
const defaultItems = [
    {
        name: "Item A"
    },
    {
        name: "Item B"
    },
    {
        name: "Item C"
    },
]
function ToDoApp() {
    const [text, setText] = useState("");
    const [items, setItems] = useState(defaultItems);
    const addItem = () => {
        setItems((prev) => [...prev, { name: text }]);
        setText("");
    };
    return (
        <div>
            <button onClick={addItem}>Send</button>
            <label>
                Text
                <input value={text} onChange={(e) => setText(e.target.value)}></input>

            </label>
            <div div>
                {items.map((item, key) => (
                    <p key={key}>{item.name}</p>
                ))}
            </div>
        </div>
    )
}

export default ToDoApp