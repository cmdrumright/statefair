const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")
export const gameEvent = new CustomEvent("ticketPurchased", {
    detail: {
        selectedTicket: "game"
    }
})

eventHub.addEventListener("ticketPurchased", customEvent => {
    if (customEvent.detail.selectedTicket === "game") {
        contentTarget.innerHTML += `<div class="person player"></div>`
    } else if (customEvent.detail.selectedTicket === "full") {
        contentTarget.innerHTML += `<div class="person bigSpender"></div>`
    }
})

