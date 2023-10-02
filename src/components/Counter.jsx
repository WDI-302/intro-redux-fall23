import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(10)
    
  return (
    <div>Counter

        
    <button onClick={() => setCount((count) => count + 1)}>
         count is {count}
    </button>
    </div>
  )
}

export default Counter