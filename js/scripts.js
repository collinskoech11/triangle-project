//Business logic
var track = function(first, second, third){
  var firstlength = document.getElementById("firstl").value;
  var secondlength = document.getElementById("secondl").value;
  var thirdlength = document.getElementById("thirdl").value;

  // Converting input to intergers
  var first = parseInt(firstlength);
  var second = parseInt(secondlength);
  var third = parseInt(thirdlength);

  if((first + second > third) && (first + third > second) && (third + second > first)){
     //Checking for an equilateral triangle
    if(first === second && first === third){
      var triangle = "Equilateral";
      var eqArray = [];
      eqArray.push(first);
      eqArray.push(second);
      eqArray.push(third);

      document.getElementById("result").innerHTML = "The dimensions " + eqArray + " form an " + triangle + " triangle!";

    }
