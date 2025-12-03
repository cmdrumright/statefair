const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")
export const foodEvent = new CustomEvent("ticketPurchased", {
    detail: {
        selectedTicket: "food"
    }
})

eventHub.addEventListener("ticketPurchased", customEvent => {
    if (customEvent.detail.selectedTicket === "food") {
        contentTarget.innerHTML += `<div class="person eater"></div>`
    } else if (customEvent.detail.selectedTicket === "full") {
        contentTarget.innerHTML += `<div class="person bigSpender"></div>`
    }
})

