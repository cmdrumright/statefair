import { rideEvent } from "./rides/RideTicketHolders.js"
import { foodEvent } from "./food/FoodTicketHolders.js"
import { gameEvent } from "./games/GameTicketHolders.js"
import { showEvent } from "./sideshows/SideshowTicketHolders.js"

const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")
const fullEvent = new CustomEvent("ticketPurchased", {
    detail: {
        selectedTicket: "full"
    }
})

eventHub.addEventListener("click", clickEvent => {
    const clickTarget = clickEvent.target
    if (clickTarget.id === "rideTicket" ) {
        eventHub.dispatchEvent(rideEvent)
    }
    if (clickTarget.id === "foodTicket" ) {
        eventHub.dispatchEvent(foodEvent)
    }
    if (clickTarget.id === "gameTicket" ) {
        eventHub.dispatchEvent(gameEvent)
    }
    if (clickTarget.id === "showTicket" ) {
        eventHub.dispatchEvent(showEvent)
    }
    if (clickTarget.id === "fullTicket" ) {
        eventHub.dispatchEvent(fullEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="showTicket">Show Ticket</button>
            <button id="fullTicket">Full Package Ticket</button>
        </div>
    `
}

