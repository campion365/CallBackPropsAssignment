import React from "react";
import AddItemForm from './shopping-list/AddItemForm';
import ShoppingList from './shopping-list/ShoppingList';

class App extends React.Component {
  state = {
    shoppingItems: [
      /* put stub items in here for testing */
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  };
//PART 5 CODE BELOW FOR HANDLE FXNS
//Notice the = (item) => { usage of an arrow function so that we don't encounter the this problem.

  handleDeleteItem = (item) => {
    const newItems = this.state.shoppingItems.filter(itm => itm !== item)
    this.setState({
      shoppingItems: newItems
    })
  }
  handleCheckItem = (item) => {
    const newItems = this.state.shoppingItems.map(itm => {
      if (itm === item) {
        itm.checked = !itm.checked
      }
      return itm
    })
    this.setState({
      shoppingItems: newItems
    })
  }

  //PART 6A - pass the callback prop from app component. gets modded again in part 8
  //handleAddItem = (itemName) => {
  //  console.log('handle add item', { itemName })
  //}

  //PART 8  - adding a new item to the state
  handleAddItem = (itemName) => {
    const newItems = [
      ...this.state.shoppingItems,
      { name: itemName, checked: false }
    ]
    this.setState({
      shoppingItems: newItems
    })
  }

  //PART 1 APP mods- ADDING CALLBACK FXNS TO EXECUTE NEEDED FXNALITY OF DELETE N TOGGLE ITEMS
  // Callback props are functions, so we can give one callback prop for each of the actions 
  // we need to perform: deleteItem and toggleItem. In order for these functions to reach the 
  // appropriate buttons, they will need to first be passed through the ShoppingList component. 
  // Let's call these props onDeleteItem and onCheckItem.

  // PART 2 - Shopping list mods -- the ShoppingList component will need to pass these 2 function props into each ShoppingItem 
  // so we can attach them to the buttons. The ShoppingList component doesn't have access to the button 
  // nodes so we need to give the callback props to each ShoppingItem. Let's use the props.onDeleteItem 
  // and props.onCheckItem on each item (we'll also keep the prop name so it's easier to read and understand).

  //PART 3 - Item mods  - we can use the callback props when the buttons get clicked inside ShoppingItem.
  //we need to invoke the appropriate callback prop when an onClick is clicked on each button.
  //Let's add an onClick to each button and use the callback prop
  //go all the way back up the component tree to the App component where we had methods for handleCheckItem
  // and handleDeleteItem from Part 1

  //PART 4 - shopping item -- We need to pass the item from the ShoppingItem component. Let's change the onClick to use 
  //an arrow function and call the callback props with the props.item.

  //PART 5 --implement handler fxns in app componoent that will handle state changes.--
  // And we can finally implement the handler functions to use setState in the App component. For 
  //completeness, here are the 2 handler functions implemented, but this isn't the topic of this content so we
  // won't explain in detail. This is normal JavaScript, using array methods filter for delete and map for toggle.
  //note they use arrow functions to avoid using 'this' keyword
  //Notice the = (item) => { usage of an arrow function so that we don't encounter the this problem.

  //PART 6 --Implementing the add item button --We can use callback props again for adding an item to the list.
  //First pass in the callback prop from the App component:
  //Then call the callback prop when the form is submitted. We can use properties of the event to get the value
  // from the input node.

  //PART 7 -- form submission call  on callback prop. Then call the callback prop when the form is submitted. 
  //We can use properties of the event to get the value from the input node.
  //note from course - Make sure you add a name='some-name' to the <input />.

  //PART 8  - adding a new item to the state -- shown on line 40

  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm
            //PART 6A subpart 2 - passing the call back prop, which was set up above
            onAddItem={this.handleAddItem} 
            />
          </section>
          <section>
            <ShoppingList items={this.state.shoppingItems} 
                    {/* PART 1 add the two callback props below */}
                  onDeleteItem={this.handleDeleteItem}
                  onCheckItem={this.handleCheckItem}
        />
  
          </section>
        </main>
      </>
    )
  }
}