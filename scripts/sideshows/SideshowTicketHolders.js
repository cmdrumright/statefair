const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")
export const showEvent = new CustomEvent("ticketPurchased", {
    detail: {
        selectedTicket: "show"
    }
})

eventHub.addEventListener("ticketPurchased", customEvent => {
    if (customEvent.detail.selectedTicket === "show") {
        contentTarget.innerHTML += `<div class="person gawker"></div>`
    } else if (customEvent.detail.selectedTicket === "full") {
        contentTarget.innerHTML += `<div class="person bigSpender"></div>`
    }
})

