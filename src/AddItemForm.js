  //PART 7 -- form submission call  on callback prop. Then call the callback prop when the form is submitted. 
  //We can use properties of the event to get the value from the input node.
  //note from course - Make sure you add a name='some-name' to the <input />.

  //SO ALL BELOW WAS ADDED - THE ORIGINAL IS BELOW
  class AddItemForm extends React.Component {
    onSubmitForm = (e) => {
      e.preventDefault()
      // e.target['inputName'] references `<input name='inputName' />`
      this.props.onAddItem(e.target.itemToAdd.value)
    }
    render() {
      return (
        <form onSubmit={this.onSubmitForm}>
          <input
            name='SOME-NAME'
            type='text'
            placeholder='carrots'
            aria-label='Shopping list item'
          />
          <button type='submit'>Add Item</button>
        </form>
      )
    }
  }


  //export default class AddItemForm extends React.Component {
    //     render() {
    //       /* TODO: need to wire up the form to add items in App state... */
    //       return (
    //         <form>
    //           <input
    //             type='text'
    //             placeholder='carrots'
    //             aria-label='Shopping list item'
    //           />
    //           <button type='submit'>Add Item</button>
    //         </form>
    //       )
    //     }
    //   }