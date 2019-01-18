import React from "react"
import GoblinCard from "../Components/GoblinCard.js"
class GoblinContainer extends React.Component {

goblinList = () => {
  return this.props.goblins.map(goblin => {
    return (
      <GoblinCard
        goblin = {goblin}
      />
  )
  })
}


render () {
  console.log(this.props.goblins)
  return (
    <div className = "goblinContainer">
      {this.goblinList()}
      {this.goblinList()[1]}
      {this.goblinList()[0]}
      {this.goblinList()[2]}
      {this.goblinList()[1]}
      {this.goblinList()[0]}
      {this.goblinList()[2]}
      {this.goblinList()[1]}
      {this.goblinList()}
      {this.goblinList()[0]}
      {this.goblinList()[2]}
      {this.goblinList()[1]}
      {this.goblinList()}
    </div>
  )
}

}

export default GoblinContainer
