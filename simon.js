$(document).ready(function(){
  var strict = false;
  var place = 0;
  var round = 0;
  var userList = [];
  var compList = [];

  $('.button').click(function() {
    if (place === 19)  {
      document.getElementById('done').innerHTML = "You Won!";
      var audio5 = new Audio('https://dl.dropboxusercontent.com/u/8626262/Cheering.mp3');
    audio5.play();
      setTimeout(function() {
        document.getElementById('start').innerHTML = "Start Over";
        document.getElementById('done').innerHTML = " ";
        compList.length = 0;
        userList.length = 0;
        round = 0;
        computerTurn();
      }, 10000);


    } else {
      var id = $(this).attr('id');
    count(id);
    }

  });

  $('#start').click(function() {
    document.getElementById('start').innerHTML = "Start Over";
    document.getElementById('done').innerHTML = " ";
    compList.length = 0;
    userList.length = 0;
    round = 0;
    computerTurn();
  });

  $('.stricter').click(function() {
    if (strict === true) {
      strict = false;
      document.getElementById('strict1').innerHTML = "Strict: Off";
    } else if (strict === false) {
      strict = true;
      document.getElementById('strict1').innerHTML = "Strict: On";
    }
  });

  function count(color) {
    userList.push(color);
    console.log(userList);
    blink(color);
     if (userList[place] === compList[place]) {
      place++;
      setTimeout(function() {
        gate();
      }, 2000);

      return false;
    } else if (userList[place] !== compList[place]) {
      if (strict === false) {
        document.getElementById('done').innerHTML = "Try Again";
        compList.pop();
        round = compList.length;
        document.getElementById("circle").innerHTML = "Round " + round;
        userList.length = 0;
        place = 0;
        setTimeout(function() {
        newLoop();
      }, 2000);

      } else if (strict === true) {
      document.getElementById('done').innerHTML = "Game Over";
      compList.length = 0;
      userList.length = 0;
      round = 0;
      place = 0;
      return false;
      }
    }
  }

  function gate() {
    if (userList.length !== compList.length) {
      return false;
    } else if (userList.length === compList.length) {
      userList.length = 0;
      place = 0;
      computerTurn();
    }
  }

  function blink(color) {
    switch(color) {
    case 'green':
        colorGreen();
        break;
    case 'red':
        colorRed();
        break;
    case 'blue':
        colorBlue();
        break;
    case 'orange':
        colorOrange();
        break;
    default:
    return false;
      }
  }

function newLoop(index) {
  index = (index)?index:0;
console.log(index);
  blink(compList[index]);
  if ( ++index < compList.length ) {
    setTimeout(function() {
      newLoop(index);
    }, 1000);
  }
}

  function computerTurn(){
    round++;
    document.getElementById("circle").innerHTML = "Round " + round;
    place = 0;
    var gen = (Math.random()*(4-1) +1).toFixed();
    switch(gen) {
    case '1':
        compList.push("green");
        break;
    case '2':
        compList.push("red");
        break;
    case '3':
        compList.push("blue");
        break;
    case '4':
        compList.push("orange");
        break;
    default:
        compList.push("green");
      }
    newLoop();
  }

  function colorGreen() {
    var audio1 = new Audio('https://dl.dropboxusercontent.com/u/8626262/39187%20LOW.mp3');
    audio1.play();
    $('.green').css("background-color", '#23D11A')
    setTimeout(function(){
      $('.green').css("background-color", '#068000')
    }, 800);
  }

  function colorRed() {
    var audio1 = new Audio('https://dl.dropboxusercontent.com/u/8626262/39189%20LOW%20MID.mp3');
    audio1.play();
    $('.red').css("background-color", '#FA1A20')
    setTimeout(function(){
      $('.red').css("background-color", '#9c0004')
    }, 800);
  }

  function colorBlue() {
    var audio1 = new Audio('https://dl.dropboxusercontent.com/u/8626262/39191%20LOW%20HIGH.mp3');
    audio1.play();
    $('.blue').css("background-color", '#1AA39E')
    setTimeout(function(){
      $('.blue').css("background-color", '#005f5c')
    }, 800);
  }

  function colorOrange() {
    var audio1 = new Audio('https://dl.dropboxusercontent.com/u/8626262/39193%20HIGH.mp3');
    audio1.play();
    $('.orange').css("background-color", '#FC7E1A')
    setTimeout(function(){
      $('.orange').css("background-color", '#9e4600')
    }, 800);
  }

});














// $(document).ready(function(){
//   var place = 0;
//   var round = 0;
//   var userList = [];
//   var compList = [];
// // 'green', 'red', 'orange'
//
//   $('.button').click(function() {
//     var id = $(this).attr('id');
//     count(id);
//   });
//
//   $('#start').click(function() {
//     //  call reset function here
//     document.getElementById('start').innerHTML = "Start Over";
//     document.getElementById('done').innerHTML = " ";
//     compList.length = 0;
//     userList.length = 0;
//     round = 0;
//     computerTurn();
//   });
//
//   //  build reset function
//
//   function count(color) {
//     userList.push(color);
//     blink(color);
//     if (userList[place] === compList[place]) {
//       place++;
//       setTimeout(function() {
//         gate();
//       }, 2500);
//
//       return false;
//     } else if (userList[place] !== compList[place]) {
//       document.getElementById('done').innerHTML = "Game Over";
//       console.log("Game Over");
//     }
//   }
//
//   function gate() {
//     if (userList.length !== compList.length) {
//       return false;
//     } else if (userList.length === compList.length) {
//       userList.length = 0;
//       computerTurn();
//     }
//   }
//
//   function blink(color) {
//     switch(color) {
//     case 'green':
//         colorGreen();
//         break;
//     case 'red':
//         colorRed();
//         break;
//     case 'blue':
//         colorBlue();
//         break;
//     case 'orange':
//         colorOrange();
//         break;
//     default:
//     return false;
//       }
//   }
//
// function newLoop(index) {
//   index = (index)?index:0;
// console.log(index);
//   blink(compList[index]);
//   if ( ++index < compList.length ) {
//     setTimeout(function() {
//       newLoop(index);
//     }, 1000);
//   }
// }
//
//   function computerTurn(){
//     round++;
//     document.getElementById("circle").innerHTML = "Round " + round;
//     place = 0;
//     var gen = (Math.random()*(4-1) +1).toFixed();
//     switch(gen) {
//     case '1':
//         compList.push("green");
//         break;
//     case '2':
//         compList.push("red");
//         break;
//     case '3':
//         compList.push("blue");
//         break;
//     case '4':
//         compList.push("orange");
//         break;
//     default:
//         compList.push("green");
// }
// newLoop();
//     console.log(compList); //---------------------------------
//
//   }
//
//   function colorGreen() {
//     var audio1 = new Audio('https://dl.dropboxusercontent.com/u/8626262/39187%20LOW.mp3');
//     audio1.play();
//     $('.green').css("background-color", '#23D11A')
//     setTimeout(function(){
//       $('.green').css("background-color", '#09B700')
//     }, 800);
//   }
//
//   function colorRed() {
//     var audio1 = new Audio('https://dl.dropboxusercontent.com/u/8626262/39189%20LOW%20MID.mp3');
//     audio1.play();
//     $('.red').css("background-color", '#FA1A20')
//     setTimeout(function(){
//       $('.red').css("background-color", '#E00006')
//     }, 800);
//   }
//
//   function colorBlue() {
//     var audio1 = new Audio('https://dl.dropboxusercontent.com/u/8626262/39191%20LOW%20HIGH.mp3');
//     audio1.play();
//     $('.blue').css("background-color", '#1AA39E')
//     setTimeout(function(){
//       $('.blue').css("background-color", '#008984')
//     }, 800);
//   }
//
//   function colorOrange() {
//     var audio1 = new Audio('https://dl.dropboxusercontent.com/u/8626262/39193%20HIGH.mp3');
//     audio1.play();
//     $('.orange').css("background-color", '#FC7E1A')
//     setTimeout(function(){
//       $('.orange').css("background-color", '#E26400')
//     }, 800);
//   }
//
// });
