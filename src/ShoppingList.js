import React from 'react'
import ShoppingItem from './ShoppingItem'

export default function ShoppingList(props) {
  return (
    <ul>
      {props.items.map((item, i) =>
        <ShoppingItem
          key={i}
          item={item}
          //PART 2 - added onDelete and onCheck props these below
          onDeleteItem={props.onDeleteItem}
          onCheckItem={props.onCheckItem}
        />
      )}
    </ul>
  )
}

ShoppingList.defaultProps = {
  items: []
}


// PART 2 the ShoppingList component will need to pass these 2 function props into each ShoppingItem 
  // so we can attach them to the buttons. The ShoppingList component doesn't have access to the button 
  // nodes so we need to give the callback props to each ShoppingItem. Let's use the props.onDeleteItem 
  // and props.onCheckItem on each item (we'll also keep the prop name so it's easier to read and understand).