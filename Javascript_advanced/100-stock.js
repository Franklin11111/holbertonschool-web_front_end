const stock = {
    mackbook: 2,
    iphone: 4,
}

function processPayment(itemName) {
    this[itemName] -= 1;
    console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
    if (this[itemName] === 0) {
        console.log(`No more ${itemName} in stock`);
        console.log("Payment is not being processed");
        return false;
    }
    return true;
}

function processOrder(itemName, callbackPayment, callbackError) {
    console.log(`Verifying the stock of ${itemName}`);
    if (callbackError(itemName)) {
        callbackPayment(itemName);
    } else { callbackError.bind(this, itemName) }
}

const userInput = prompt('Please enter the item you would like to purchase (Macbook, iPhone)')

const boundProcessOrder =
    processOrder.bind(stock, userInput.toLowerCase(),
        processPayment.bind(stock),
        processError.bind(stock));
boundProcessOrder();
boundProcessOrder();
boundProcessOrder();
console.log(stock);