import React from "react"



const GoblinDeets = (props) => {

  return (
    <div className="goblinDeets">
      <ul>
        <li>name: {props.goblin.name}</li>
        <li>fav food: {props.goblin.favorite_food}</li>
        <li>pastime: {props.goblin.pastime}</li>
      </ul>
    </div>
  )
}


export default GoblinDeets
