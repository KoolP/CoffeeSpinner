
//
//Version 1.0
//Alerts winner randomly from array List
/*
function coffeySpinner() {
    //document.getElementById("button").innerHTML =
    winner =  ['Aronija', 'August', 'Christian', 'Emma', 'Hanna', 'Jan', 'Mani', 'Patrik', 'Ria', 'William'];
    var luckyWinner = Math.floor(Math.random() * winner.length);
    alert(winner[luckyWinner]);
}*/

//VERSION 1.2,
//Changelog: Opens div of randomized luckywinner with picture, name etc.
/*
function coffeySpinner() {
    var teamList = ['bill', 'steve', 'linus', 'mark'];
    var random = Math.floor(Math.random() * teamList.length)
    var showWinner = document.getElementById(teamList[random]);
    showWinner.className = "show";
}*/

//Contact function
function contact() {
  alert("Hello! App produced by koolsport.se and friends");
}

//TEST Toggle. Works but the randomizer take a new person the old stays
//21.9 Not working try adding eventlistner instead of onclick

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
    //har testat ifelse,hide/show x2, location reload

    /*
    if(showWinner.className === "show") {
      showWinner.className = "hide";
    } else {
      showWinner.className = "hide";
    }*/
}

/*
Version 1.4
Changelog: Array outside of function, otherwise it runs it again and again each time you push if not reloaded. ads teamList.splice to take away chosen var random from list, Includes If Else to to inform console to stop after array empty.

var teamList = ['bill', 'steve', 'linus', 'mark'];

function coffeySpinner() {
  if(teamList.length > 0){
    var random = Math.floor(Math.random() * teamList.length)
    //TEST: alert(teamList[luckyWinner]); //Gives name of teamlist, actually it is a number
    var showWinner = document.getElementById(teamList[random]);
    //Takes away chosen one from list:
    teamList.splice(random, 1)

    console.log(teamList)
    showWinner.className = "show";

  } else {
    console.log('slut på personer!')
  }
}
*/

//NOTES AND LEARNED DURING PROJECT (ITHS 2017 teacher:jon mates:andreas,oliver)
//Read code with falcon eyes, see the mistakes.
//Use inspect element console
//console.log(showWinner);
//console.log(luckyWinner);
//jon comments: class to hide instead of id, id changed to person name, you can //.addClass(), .removeClass(), ex bill. id = "#show";
//var teamList Array takes ids of element ['bill','steve'..]
//Randomizer returns array numbers[0], [3] because of this when getting element you need to use teamList[random] to target it ex: var showWinner = document.getElementById(teamList[random]);
//Use Queryselector to match elements
//Use for loop to run through the query selected elements and change their class
