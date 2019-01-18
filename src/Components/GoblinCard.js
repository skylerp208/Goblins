import React from "react"
import GoblinDeets from "./GoblinDeets"

const GoblinCard = (props) => {

  return (
    <div className = "goblinCard">
    <img src={require(`.${props.goblin.img}`)} alt ='' />
    <ul>
      <li>name: {props.goblin.name}</li>
      <li>fav food: {props.goblin.favorite_food}</li>
      <li>pastime: {props.goblin.pastime}</li>
    </ul>
    </div>
  )


}

export default GoblinCard;
