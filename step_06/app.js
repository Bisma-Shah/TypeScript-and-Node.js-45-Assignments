"use strict";
/* 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
 Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around
 the name is displayed. Then print the name after stripping the white spaces. */
let whiteSpaceName = "\n\t Bisma Shah \n\t";
console.log(whiteSpaceName);
let withoutwhiteSpace = whiteSpaceName.trim();
console.log(withoutwhiteSpace);
