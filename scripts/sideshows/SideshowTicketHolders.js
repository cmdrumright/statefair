const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

// export const RideTicketHolders = () => {
//     eventHub.addEventListener("rideTicketPurchased", customEvent => {
//         contentTarget.innerHTML += `<div class="person rider"></div>`
//     })
// }

eventHub.addEventListener("showTicketPurchased", customEvent => {
    contentTarget.innerHTML += `<div class="person gawker"></div>`
})

eventHub.addEventListener("fullTicketPurchased", customEvent => {
    contentTarget.innerHTML += `<div class="person bigSpender"></div>`
})
