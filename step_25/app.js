"use strict";
/* 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

• Write an if statement to test whether the alien’s color is green. If it is, print
a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that
fails. (The version that fails will have no output.) */
// 1st version
let alien_color = 'green';
if (alien_color == 'green') {
    console.log("Congratulations! you just earned 5 points.");
}
// 2nd version
alien_color = 'yellow';
if (alien_color == 'yellow') {
    console.log("congratulations you have earned 5 points");
}
// 3rd version
alien_color = 'blue';
if (alien_color == 'green') {
    console.log("Congratulations! you just earned 5 points.");
}
;
