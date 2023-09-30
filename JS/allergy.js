console.log("********ALLERGY START********")

let allergyScore = 0;
let allergyResult = "";
function allergyCheck(allergyScore)
{
  while(allergyScore>=0){
    if(allergyScore>=128){
      allergyScore -= 128;
      allergyResult+="cats. ";
    }
    else if(allergyScore>=64){
      allergyScore -= 64;
      allergyResult+="pollen. ";
    }
    else if(allergyScore>=32){
      allergyScore-=32;
      allergyResult+="chocolate. ";
    }
    else if(allergyScore>=16){
      allergyScore-=16;
      allergyResult+="tomatoes. ";
    }
    else if(allergyScore>=8){
      allergyScore-=8;
      allergyResult+="strawberries. ";
    }
    else if(allergyScore>=4){
      allergyScore-=4;
      allergyResult+="shellfish. ";
    }
    else if(allergyScore>=2){
      allergyScore-=2;
      allergyResult+="peanuts. ";
    }
    else if(allergyScore>=1){
      allergyScore-=1;
      allergyResult+="eggs. ";
      return "Tom is allergic to "+allergyResult.trim();
    }
    else{return "Tom is allergic to: "+allergyResult.trim();}
  }
}
console.log(allergyCheck(33));
console.log("********ALLERGY END********")
