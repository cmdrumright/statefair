// get customer dom element
const contentTarget = document.querySelector(".customers")
// get event hub
const eventHub = document.querySelector("#state-fair")
// create state holder
let customerCount = 0

// create function to increment ticket count and update dom
const addCustomer = () => {
    customerCount++
    contentTarget.innerHTML = `Total tickets purchased: ${customerCount}`
}

// add listener to eventHub to increment ticket count when ticket is purchased
eventHub.addEventListener("foodTicketPurchased", addCustomer)
eventHub.addEventListener("rideTicketPurchased", addCustomer)
eventHub.addEventListener("showTicketPurchased", addCustomer)
eventHub.addEventListener("gameTicketPurchased", addCustomer)
eventHub.addEventListener("fullTicketPurchased", addCustomer)

export const Customers = () => {
    contentTarget.innerHTML = `Total tickets purchased: ${customerCount}`
}
