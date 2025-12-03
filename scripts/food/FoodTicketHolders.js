const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

// export const RideTicketHolders = () => {
//     eventHub.addEventListener("rideTicketPurchased", customEvent => {
//         contentTarget.innerHTML += `<div class="person rider"></div>`
//     })
// }

eventHub.addEventListener("foodTicketPurchased", customEvent => {
    contentTarget.innerHTML += `<div class="person eater"></div>`
})

eventHub.addEventListener("fullTicketPurchased", customEvent => {
    contentTarget.innerHTML += `<div class="person bigSpender"></div>`
})
