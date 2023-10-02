console.log("********BOOKSTORE START********")

// Array where discount combos are saved
const disCombo = [];

// Array where to compare best combos
const bestDisCombo = []

function bookCombos(a,b,c,d,e){
    const bookCombo4To1 = (a,b,c,d,e) => {
        while(bookArray[1]>0){
            // 4combo
            bookArray[1]--;
            bookArray[2]--;
            bookArray[3]--;
            bookArray[4]--;
            bookArray.sort();
            console.log(bookArray);
            disCombo.push(.8);
        }
        // 3Combo
        while(bookArray[2]>0){
            bookArray[2]--;
            bookArray[3]--;
            bookArray[4]--;
            bookArray.sort();
            console.log(bookArray);
            disCombo.push(.9);
        }
        // 2Combo
        while(bookArray[3]>0){
            bookArray[2]--;
            bookArray[3]--;
            bookArray[4]--;
            bookArray.sort();
            console.log(bookArray);
            disCombo.push(.9);
        }
    }
    // Saves all the values
    let bookArray=[0,0,0,0,0];

    bookArray[0]=a;
    bookArray[1]=b;
    bookArray[2]=c;
    bookArray[3]=d;
    bookArray[4]=e;
    bookArray.sort()
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
            disCombo.push(.75);
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
        console.log(disCombo);
    }

}
bookCombos(3,3,4,4,1);