// BUSINESS LOGIC FOR MOVIES
function Movie(title, runStatus, time) {
    this.title = title,
    this.runStatus = runStatus,
    this.time  = time
}

var ninjaTurtles = new Movie("Teenage Mutant Ninja Turtles", "Old");

var fastFurious90 = new Movie("Fast and the Furious: Still not Done", "New");

// BUSINESS LOGIC FOR TICKETS

// CONSTRUCTOR TO BUILD EMPTY BANK TO STORE TICKETS AFTER 'BUTTON' FUNCTION RUNS/CLEARS EACH TIME
function TicketBank() {
  this.savedTickets = [];
}

TicketBank.prototype.addTicket = function(ticket) {
  this.savedTickets.push(ticket)
}

// CONSTRUCTOR TO BUILD NEW TICKETS FROM USER INPUTS
function Ticket(title, time, age) {
  this.title = title,
  this.time = time,
  this.age = age
}

// PROTOTYPE METHOD ADD TO CALCULATE TICKET COST BASED ON ADDED TICKET OBJECT

Ticket.prototype.whichFilm = function(ticket) {
  if (this.title === "ninjaTurtles") {
    this.runStatus = 'old';
  } else if (this.title === "fastFurious90") {
    this.runStatus = 'new';
  } else {
    false;
  }
}


Ticket.prototype.getCost = function(ticket) {
 var discount = 0;
 var ticketBase = 12;

 switch (this.time) {
   case "matinee":
   discount += 2
   break;
   default:
 }

 switch (this.age) {
   case "senior":
     discount += 1
     break;
   default:
  }

 switch (this.runStatus) {
   case "old":
     discount += 2
     break;
   default:
  }

    this.price = ticketBase - discount;
};




// USER INTERFACE LOGIC

var ticketsSoldSoFar = new TicketBank();

$(document).ready(function() {
  $("#showtime").submit(function(event) {
    event.preventDefault();

    var title = $("#movieName").val();
    var age = $("#age").val();
    var time = $("#time").val();

    var myTicket = new Ticket(title, time, age);
    myTicket.getCost();
    myTicket.whichFilm();
    var cost = myTicket.price;
    ticketsSoldSoFar.addTicket();
    $("p#showCost").text(title + " " + time + " $" + cost + ".00");

  });
});
