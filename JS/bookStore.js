console.log("********BOOKSTORE START********")

// Array where discount combos are saved
const disCombo = [];

// Array where to compare best combos
const bestDisCombo = [0, 0];

let bookCount = 0;
function bookCombos(a,b,c,d,e){
    // function for no undefined 
    const noUndefines = () =>{
        if(a===undefined){
            bookArray[0]=0;
        }
        else bookArray[0]=a;

        if(b===undefined){
            bookArray[1]=0;
        }
        else bookArray[1]=b;

        if(c===undefined){
            bookArray[2]=0;
        }
        else bookArray[2]=c;
        if(d===undefined){
            bookArray[3]=0;
        }
        else bookArray[3]=d;
        if(e===undefined){
            bookArray[4]=0;
        }
        else bookArray[4]=e;
    }
    // function for bookCombo 4-1
    const bookCombo4To1 = (a,b,c,d,e) => {
        while(bookArray[1]>0){
            // 4combo
            bookArray[1]--;
            bookArray[2]--;
            bookArray[3]--;
            bookArray[4]--;
            bookArray.sort();
            console.log(bookArray);
            disCombo.push(3.2);
        }
        // 3Combo
        while(bookArray[2]>0){
            bookArray[2]--;
            bookArray[3]--;
            bookArray[4]--;
            bookArray.sort();
            console.log(bookArray);
            disCombo.push(2.7);
        }
        // 2Combo
        while(bookArray[3]>0){
            bookArray[3]--;
            bookArray[4]--;
            bookArray.sort();
            console.log(bookArray);
            disCombo.push(1.9);
        }
        // 1Combo
        while(bookArray[4]>0){
            bookArray[4]--;
            bookArray.sort();
            console.log(bookArray);
            disCombo.push(1);
        }
    }
    // Array for input (the different books)
    let bookArray=[0,0,0,0,0];
    // sums up all values to bookCount
    let arrayI = 0;
    
    console.log(bookCount + " BOOK COUNT");
    // Sets all values for looping-time B)
    noUndefines();
    bookArray.sort()
    for(items in bookArray){
        bookCount = bookCount + bookArray[arrayI];
        console.log(bookCount + " bookCount")
        arrayI+=1;
    }
    // Left for teacher
    console.log(bookArray + " not a repeat");
    // 5-1 combo check
    {
        while(bookArray[0]>0){
            // 5combo
            bookArray[0]--;
            bookArray[1]--;
            bookArray[2]--;
            bookArray[3]--;
            bookArray[4]--;
            bookArray.sort();
            console.log(bookArray);
            disCombo.push(3.75);
        }
        bookCombo4To1();
         
        // Sets all values for looping-time B) 2nd time 
        noUndefines();
        bookArray.sort()
        console.log(disCombo + " Combo:5-1");

        // Adds sums of discounts to new array
        while(disCombo[0]!== undefined){
            bestDisCombo[0] = bestDisCombo[0]+disCombo[disCombo.length-1];
            console.log(bestDisCombo);
            disCombo.pop()
        }
    }   
    // 4-1 combo check 
    {
        {
            bookCombo4To1();
        };
        // resets for next time
        bookArray = [0,0,0,0,0];
        // Left for teacher
        console.log(bookArray + " not a repeat");
        // Left for teacher
        console.log(disCombo + " Combo: 4-1");
    }

        // Adds sums of discounts to new array
    while(disCombo[0]!== undefined){
        bestDisCombo[1] = bestDisCombo[1]+disCombo[disCombo.length-1];
        console.log(bestDisCombo);
        disCombo.pop()    
    }

    const result =(Math.min.apply(Math, bestDisCombo) / bookCount)* (8*bookCount);

    //print cheapest cost with rounding
    if(result-Math.floor(result) >= .5){
        console.log("$" + Math.ceil(result))
    }
    else{
        console.log("$" + Math.floor(result))
    }
    
}
bookCombos(2,2,3,6,8);

console.log("********BOOKSTORE END********");


