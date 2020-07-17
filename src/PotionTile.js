import React from 'react'

/* 
Write an abstracted component that can be used in place of InventoryTile AND ShopTile

Consider what the tiles have in common and what they do not: 
- For things that are the same, copy and pasting works just fine! 
- For things that are different, consider how you might make use of props and JSX to have the same component behave differently when rendered by different parents 
*/

class PotionTile extends React.Component {
  getClassNames=()=>{
    if(this.props.addToInventory){
      return "card"
    }
      return"inventory-card"
  }
  
  handleClick=()=>{
    console.log("onCLick : ",this.props)
    // () => this.props.sell(this.props.potion.id)
    if(this.props.addToInventory){
      console.log("has Inventory")
     this.props.addToInventory(this.props.potion.id)
    }else if(this.props.sell){
      console.log("has Shop")
      this.props.sell(this.props.potion.id)
    }
  }
  render(){
    console.log('-----',this.props) 
    return (
      <div key={this.props.potion.id} className={this.getClassNames()}>
        <div onClick={this.handleClick} className="image-wrapper">
          <img className="image" alt={this.props.potion.name} src={this.props.potion.image_url} />
        </div>
        {this.props.children}
      </div>

    )
  }
}

export default PotionTile