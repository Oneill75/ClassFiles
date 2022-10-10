"use strict";

// Variable for querySelectAll
let querySelect = document.querySelectorAll("*");

// variable for getElementsByTagName
let getAllElements = document.getElementsByTagName("*");

// variable for previous sibling of <p>
let getSibling = document.getElementsByTagName("p")[0].previousSibling.nodeName;

// bunch of random variables
let random1 = '1' + 1;
let random2 = 3 * '1';
let random3 = 42 * 6 / 7;
let random4 = '42' / true;
let random5 = '42' / false;
let random6 = '42' / '1.5';
let random7 = '42' / 'a';
let random8 = 42 * 'a';
let random9 = 'b' + 'a' + + 'a' + 'a';
let random10 = 1 != '1';
let random11 = 1 !== '1';
let random12 = null;
let random13 = [1, 2];
let random14 = {'name': 'Doe', 'age': 22};
let c;

// Function with a for-loop to pick and print each item from the respective nodelist/HTMLCollection
function listItems(vname, variable) {
  console.log("==== Ausgabe von " + vname + " ====")
  console.groupCollapsed("click here");
  for (let i = 0; i < variable.length; i++) {
    let item = variable[i];
    console.log(item);
    };
  console.groupEnd();
}

// Function to print a variable with a chosen vname as String
function consolePrint(vname, variable) {
  console.log("==== Ausgabe von " + vname + " ====")
  console.groupCollapsed("click here");
  console.log(variable + "\n");
  console.groupEnd();
}

// Calling the functions
listItems("querySelectAll", querySelect);
listItems("getAllElements", getAllElements);
consolePrint("getSibling", getSibling);
consolePrint("random1", random1);
consolePrint("random2", random2);
consolePrint("random3", random3);
consolePrint("random4", random4);
consolePrint("random5", random5);
consolePrint("random6", random6);
consolePrint("random7", random7);
consolePrint("random8", random8);
consolePrint("random9", random9);
consolePrint("random10", random10);
consolePrint("random11", random11);
consolePrint("random12", random12);
consolePrint("random13", random13);
consolePrint("random14", random14);