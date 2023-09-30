console.log("********POETRY START********")
// define front door resopnse function
const frontDoorResponse = (poem) => poem.slice(0,1)
// print front door responce function
console.log(frontDoorResponse('Stands so high'));

// Capital letter define

const frontDoorPassword = (poem) => poem[0].toUpperCase() + poem.slice(1).toLowerCase();

// print Capital letter
console.log(frontDoorPassword('SHIRE'));
console.log(frontDoorPassword('shire'));

// Slice last letter define
const backDoorResponse = poem => poem.slice(poem.trim().length-1);

// Slice last letter print
console.log(backDoorResponse('Stands so high'));
console.log(backDoorResponse('Stands so high      '));

// Polite define

const backDoorPassword = poem => poem + ", please";

// Print polite
console.log(backDoorPassword('Horse'));

console.log("********POETRY END********")