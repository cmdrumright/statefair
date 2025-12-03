import {  } from "./rides/RideTicketHolders.js"
import {  } from "./food/FoodTicketHolders.js"
import {  } from "./games/GameTicketHolders.js"

const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")
const rideEvent = new CustomEvent("rideTicketPurchased")
const foodEvent = new CustomEvent("foodTicketPurchased")
const gameEvent = new CustomEvent("gameTicketPurchased")

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
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
        </div>
    `
}

