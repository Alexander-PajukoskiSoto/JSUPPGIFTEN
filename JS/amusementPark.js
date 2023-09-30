console.log("********AMUSEMENT PARK START********")

// Visitor list
const visitors = [];

// Adds visitors to visitor list
const createVisitor = (name, age, ticketId) => 
visitors.push({name:this.name=name,
                age:this.age=age, 
                ticketId:this.ticketId=ticketId});
           
// Creates a visitor
createVisitor("Verena Nardi", 45, "H32AZ123");

// Logs it
console.log(visitors[0]);

// Revoke ticket function
const revokeTicket = listPlace => visitors[listPlace].ticketId=null;

// Revokes first ticket
revokeTicket(0)

// Logs it
console.log(visitors[0])

const tickets = {
    '0H2AZ123': null,
    '23LA9T41': null,
    'H32AZ123': "Verena Nardi",
  };

  function ticketStatus(status)
  {
        if(tickets[status] === null)
        {
            return "Ticket not sold";
        }
        else if(tickets[status] === undefined) {
            return "Unkown ticket id";
        }
        else (tickets[status] !== null)
        {
            return tickets[status] + " owns this ticket";
        }
  }
  console.log(ticketStatus('23LA9T41'))
  console.log(ticketStatus('HZ123'))
  console.log(ticketStatus('H32AZ123'))