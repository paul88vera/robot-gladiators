// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    *Fight all enemy-robots
//    *Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
  // alerts player the fight will begin
  window.alert("Welcome to Robot Gladiators!");

  // asks player if they will fight or flee
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

// does player want to fight or skip
if (promptFight === 'FIGHT' || promptFight === 'fight') {
  // player attacks enemy
  enemyHealth -= playerAttack;
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  //Check enemy's health
  if (enemyHealth <= 0) {
    
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

    //Enemy attacks player
    playerHealth -= enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // Check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    // if player chooses to skip
  } else if (promptFight === 'skip' || promptFight === 'SKIP') {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      
    // if true, leave the fight
    if (confirmSkip){
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money for skipping
      playerMoney -= 2;
    }
    // if no (false), ask question again by running fight() again
    else {
    fight();
    }
  } else {
    // if player did not choose 1 or 2 in prompt
    window.alert("You need to choose a valid option. Try again!");
  }
}
// runs function to start game
for(var i = 0; i < enemyNames.length; i++){
  fight(enemyNames[i]);
}