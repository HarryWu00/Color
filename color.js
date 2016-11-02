//Declare the Color Object with our new keyword below here.
const Color = new object

/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rbg[1] >= 0) && (rbg[1] <=255);
  let blueworks = (rbg[2] >= 0) && (rbg[2] <=255);

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){
  let red =


};

//greenIntensity
Color.greenIntensity = function(rgb){
  let green = 


};
//blueIntensity
Color.blueIntensity = function(rgb){


};
//brightness


//complement
