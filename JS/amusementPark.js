console.log("********AMUSEMENT PARK START********")

// Visitor array
const visitors = [];

// Adds visitors to visitor array
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

// Tickets object
const tickets = {
    '0H2AZ123': null,
    '23LA9T41': null,
    'H32AZ123': "Verena Nardi",
  };

//   Checks tickets if sold or not
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
  
//   Prints above function
  console.log(ticketStatus('23LA9T41'))
  console.log(ticketStatus('HZ123'))
  console.log(ticketStatus('H32AZ123'))

//   Simpler version
  const simpleTicketStatus = status =>{
    if(tickets[status]===null || tickets[status]===undefined){
        return "invalid ticket !!!";
    }
    else{
        return tickets[status];
    }
  }
//   Prints above to console
  console.log(simpleTicketStatus('23LA9T41'))
  console.log(simpleTicketStatus('HZ123'))
  console.log(simpleTicketStatus('H32AZ123'))

//   New visitor object with GTC
  const visitorNew = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
    gtc: {
      signed: true,
      version: '2.1',
    },
  };

//   Example of old visitor
  const visitorOld = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
  };

//   Function to check visitor GTC
  const gtcVersion = visitor => visitor.gtc.version;

//   Prints above function to console
  console.log(gtcVersion(visitorNew));
  console.log(gtcVersion(visitorOld));

console.log("********AMUSEMENT PARK END********")