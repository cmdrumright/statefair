const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")
export const rideEvent = new CustomEvent("ticketPurchased", {
    detail: {
        selectedTicket: "ride"
    }
})

eventHub.addEventListener("ticketPurchased", customEvent => {
    if (customEvent.detail.selectedTicket === "ride") {
        contentTarget.innerHTML += `<div class="person rider"></div>`
    } else if (customEvent.detail.selectedTicket === "full") {
        contentTarget.innerHTML += `<div class="person bigSpender"></div>`
    }
})

