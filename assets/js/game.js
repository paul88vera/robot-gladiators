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
var enemyHealth = 20;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1)) + min;

  return value;
}

var fight = function(enemyName) {
  while(enemyHealth > 0 && playerHealth > 0) {
  // asks player if they will fight or flee
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === 'skip' || promptFight === 'SKIP') {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
          
        // if true, leave the fight
        if (confirmSkip){
          window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money for skipping
          playerMoney = Math.max(0, playerMoney - 10);
          console.log("playerMoney", playerMoney);
          break;
        }
      }

      // player attacks enemy
      // generate random damage value based on player's attack power
      var damage = randomNumber(playerAttack - 3, playerAttack);

      enemyHealth = Math.max(0,enemyHealth - damage);
      console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );

      //Check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

        // award player money for winning
        playerMoney = Math.max(0, playerMoney - 10);
        // since enemy is dead
        break;
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }

        //Enemy attacks player
        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        
        playerHealth = Math.max(0, playerHealth - damage);

        console.log(
          enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // Check player's health
        if (playerHealth <= 0) {
          window.alert(playerName + " has died!");
          break;
        } else {
          window.alert(playerName + " still has " + playerHealth + " health left.");
        }
      } 
};

 
// runs function to start game
var startGame = function() {
  
  //reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for(var i = 0; i < enemyNames.length; i++){
    
    fight(pickedEnemyName);
  // if player is still alive and we're not at the last enemy in the array
  if (playerHealth > 0 && i < enemyNames.length - 1){
    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
  
    // if yes take them to the store
    if (storeConfirm){
      shop();
    }
  }
    if(playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      
      var pickedEnemyName = enemyNames[i];
      // generate random damage value based on player's attack power
      var damage = randomNumber(playerAttack -3, playerAttack);

      enemyHealth = Math.max(0, enemyHealth - damage);
      
      fight(enemyNames[i]);
      
        
      
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }

  // end game
    endGame();
};

// function to end the entire game
var endGame = function() {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } 
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
}


var shop = function() {
  //ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL you health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  switch (shopOptionPrompt) {
    case "REFILL": // new case
    case "refill":
      if (playerMoney >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");

      // increase health and decrease money
      playerHealth += 20;
      playerMoney -= 7;
      } else {
        window.alert("You don't have enough money!");
      }

      break;
    case "UPGRADE": // new case
    case "upgrade":
      if (playerMoney >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");

      // increase attack and decrease money
      playerAttack += 6;
      playerMoney -= 7;
      } else {
        window.alert("You don't have enough money!");
      }

      break;
    case "LEAVE": // new case
    case "leave":
      window.alert("Leaving the store.");

      // do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");

      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
};


startGame();