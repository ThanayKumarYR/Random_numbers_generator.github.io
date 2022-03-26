// var rgb = [255, 0, 0];
// function setForegroundColor() {

//   var sum = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
//   return (sum > 128) ? 'black' : 'white';
// }
var from;
var to;
function game_page(){
    const myTimeout = setTimeout(function toTop(){
          from = document.getElementById('from').value ; 
          to = document.getElementById('to').value ; 
          from = Number(from);
          to = Number(to);
          if(from < 0 || to < 0||from >= to){
              alert("Invalid Inputs !\nPlease Enter numbers correcty !");
              return;
          }
          var dom_intro = document.getElementById('front').style;
          dom_intro.zIndex = "0";
          dom_intro.visibility = "collapse";
          document.getElementById('container').style.zIndex = "10";
          //   document.getElementById(blank).style.visibility = "hidden";
        },500);
  }

function changeColor() { 
  document.getElementById("box").innerText = "";
  var newColor = makeColor();
  setTimeout(function () {
    document.getElementById("box").style.backgroundColor = newColor;
  }, 1000);

}
function makeColor() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    var num = Math.floor(Math.random() * 255);
    arr.push(num);
    var rgb = "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
  }
  // var sum = Math.round(((parseInt(arr[0]) * 299) + (parseInt(arr[1]) * 587) + (parseInt(arr[2]) * 114)) / 1000);
  var number = Math.floor(Math.random() * to) + from;
  while(number > to){
    number = Math.floor(Math.random() * to) + from; 
  }
  setTimeout(function () {
    document.getElementById("box").innerText = String(number);
  }, 2000);
  for (var i = 0; i < 3; i++) {
    if (arr[i] >= 125) {
      document.getElementById("box").style.color = "black";
    } else {
      document.getElementById("box").style.color = "white";
    }
  }
  document.getElementById("box").style.animation = " rotate 2s cubic-bezier(1,1,1,1) 0s 1";
  setTimeout(function(){
    document.getElementById("box").style.animation = "none";
  },2001);
  return rgb;
}


