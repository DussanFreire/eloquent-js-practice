// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// It may be useful to know that you can find the length of a string by writing

function drawATriangule() {
  for (let line = "#"; line.length < 8; line += "#") console.log(line);
}
