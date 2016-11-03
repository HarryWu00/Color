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
  let red = rgb[0]/255*100;
   Math.Round()
   return red;

};

//greenIntensity
Color.greenIntensity = function(rgb){
  let green = rgb[1]/255*100;
   Math.Round();
   return green;

};
//blueIntensity
Color.blueIntensity = function(rgb){
  let blue = rgb[2]/255*100;
   Math.Round();
   return blue;

};
//brightness
brightness = function{
  rgb brightness = rgb[0+1+2]/3
  return brightness

}
//complement
function = complement(list){
  var comp = [];
  for(var )
}
