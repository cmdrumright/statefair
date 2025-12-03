const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

// export const RideTicketHolders = () => {
//     eventHub.addEventListener("rideTicketPurchased", customEvent => {
//         contentTarget.innerHTML += `<div class="person rider"></div>`
//     })
// }

eventHub.addEventListener("gameTicketPurchased", customEvent => {
    contentTarget.innerHTML += `<div class="person player"></div>`
})

eventHub.addEventListener("fullTicketPurchased", customEvent => {
    contentTarget.innerHTML += `<div class="person bigSpender"></div>`
})
