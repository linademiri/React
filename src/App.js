import React, { useEffect } from 'react'


function App() {
  useEffect(() => {
    fetch("/api/products.json")
      .then(res => res.json())
      .then(res => console.log(res))
  }, [])

  useEffect(() => {
    fetch("/api/products/1.json")
      .then(res => res.json())
      .then(res => console.log(res))
  })
  return <div></div>
}

export default App;
