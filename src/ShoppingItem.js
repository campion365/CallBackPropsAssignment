export default function ShoppingItem(props) {
  return (
    <li>
      <h2 style={{
        textDecoration: props.item.checked ? 'line-through' : null,
      }}>
        {props.item.name}
      </h2>
      <button
        onClick={() => props.onCheckItem(props.item)}
        type='button'>
        check
    </button>
      <button
        onClick={() => props.onDeleteItem(props.item)}
        type='button'>
        delete
    </button>
    </li>
  )
}


ShoppingItem.defaultProps = {
  item: {}
}

 //PART 3 - Item mods  - we can use the callback props when the buttons get clicked inside ShoppingItem.
  //we need to invoke the appropriate callback prop when an onClick is clicked on each button.
  //Let's add an onClick to each button and use the callback prop
  //go all the way back up the component tree to the App component where we had methods for handleCheckItem
  // and handleDeleteItem
  // PART 3
//FYI -course shows reorging buttons as below 
//       <button
//         onClick={props.onDeleteItem}
//         type='button'>
//         delete
//       </button>
//ORIGINAL BUTTON APPEARANCE
/* <button
        onClick ={props.onDeleteItem}
       type='button'>delete</button> */
      //  PART 3 - added onClicks on 11 and 14, but then changed them in PART 4 to arrow functions