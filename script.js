


//Contact alert function
function contact() {
  alert("Hello! App produced by koolsport.se and friends");
}

//The randomizer with an list of participants
function coffeySpinner() {
    var allCards = document.querySelectorAll(".show");
    for (var i = 0; i < allCards.length; i++) {
    allCards[i].className = "hide";
    }
    console.log(allCards);

    var teamList = ['bill', 'steve', 'linus', 'mark', 'instant', 'grace', 'richard', 'james'];
    var random = Math.floor(Math.random() * teamList.length)
    var showWinner = document.getElementById(teamList[random]);
    //showWinner.className = "show";
    if(showWinner.className === "hide") {
      showWinner.className = "show";
      console.log(random)
    } else {
      showWinner.className = "hide";
    }

}



//TEST Toggle. Works but the randomizer take a new person the old stays
//21.9 Not working try adding eventlistner instead of onclick

/*tested ifelse,hide/show x2, location reload
if(showWinner.className === "show") {
  showWinner.className = "hide";
} else {
  showWinner.className = "hide";
}*/

//NOTES AND LEARNED DURING PROJECT (ITHS 2017 jon, andreas,oliver)
//Read code with falcon eyes, see the mistakes.
//Use inspect element console
//console.log(showWinner);
//console.log(luckyWinner);
//jon comments: class to hide instead of id, id changed to person name, you can //.addClass(), .removeClass(), ex bill. id = "#show";
//var teamList Array takes ids of element ['bill','steve'..]
//Randomizer returns array numbers[0], [3] because of this when getting element you need to use teamList[random] to target it ex: var showWinner = document.getElementById(teamList[random]);
//Use Queryselector to match elements
//Use for loop to run through the query selected elements and change their class
