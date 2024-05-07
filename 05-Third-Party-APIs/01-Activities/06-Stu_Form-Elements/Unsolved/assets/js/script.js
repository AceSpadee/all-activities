const shoppingFormEl = $('#shopping-form');
const shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>`
// value and prints it to the `shoppingListEl` as a `<li>`
const handlesubmit = function(event) {
    event.preventDefault()

    const shoppinginput = $('#shopping-input');
    const liEL = $("<li>")
    liEL.text(shoppinginput.val())
    shoppingListEl.append(liEL)

    shoppinginput.val("");
    
}


// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', handlesubmit);
