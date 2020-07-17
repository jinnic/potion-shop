import React from 'react'
import Purse from "./Purse"
import InventoryTile from "./InventoryTile"
import PotionTile from "./PotionTile"

const Inventory = (props) => {

  const renderInventory = () => {

    return props.inventory.map(item => {
      const potion = props.potions.find(potion => potion.id === item.id)

       return (
        <PotionTile potion={potion} sell={props.sell}>
          <h4>{potion.name} x {item.amount}</h4>
        </PotionTile>
      )
    })  
  } 

  return (
    <div className="inventory">
      <h2>Inventory</h2>
      <Purse stopShake={props.stopShake} shake={props.shake} gold={props.gold}/>
      <div className="inventory-cards">
       {renderInventory()}
      </div>
    </div>
  )
}

export default Inventory