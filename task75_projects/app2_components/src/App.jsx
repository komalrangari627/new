import "./index.css"

import { Comp1 } from "./components/Comp1"
import Comp2 from "./components/Comp2"
import { Comp3 } from "./components/Comp3"
import Comp4 from "./components/Comp4"

const App = () => {
  let data = "components in react"
  function add(n1, n2) {
    return n1 + n2
  }

  add(10, 20)

  let newStyle = {
    color: "lime",
    backgroundColor: "purple"
  }

  return (
    <>
      <h1 style={{ color: "red", backgroundColor: "yellow" }}>one</h1>
      <h1 style={newStyle}>two</h1>
      <h1>three</h1>
      <h1>four {10 + 20}</h1>
      <h1>{data}</h1>
      <Comp1 />
      <Comp2 />
      <Comp3 />
      <Comp4 />

      <input type="text" name="" value="" placeholder="" />
    </>
  )
}

export default App

// html
// we can return a single html element per component

// props object 
// comp1 props{name:"amey khondekar",age:"24",koiBhi:"kuch bhi value but in string"}

// inline-css, external css, bootstrap,tailwind