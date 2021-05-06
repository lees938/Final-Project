/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");
// create an array (list) of all red foods
// make sure to seperate each URL with a comma ","
var redFoods = [
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2F%EB%B9%84%EB%B9%94%EB%83%89%EB%A9%B4_%ED%9B%84%EB%A9%B4_5.png?v=1620158320656",
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2Fthumbnails%2Ftokboki.png?1620158323837",
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2F002001000001.jpeg?v=1620318219211"
];
var whiteFoods = [
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2F23886C.png?v=1620158319543",
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2F20180724661107.png?v=1620158321803",
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2Funnamed%20(3).png?v=1620338493741"
];
var yellowFoods = [
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2Funnamed-1.png?v=1620158318045",
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2Fyukjeon.png?v=1620158320792",
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2F%E1%84%80%E1%85%B1%E1%86%BE%E1%84%81%E1%85%B2%E1%86%AA_%E1%84%85%E1%85%AD%E1%84%81%E1%85%A9%E1%86%AA_%E1%84%83%E1%85%B2%E1%86%AB%E1%84%81%E1%85%A8%E1%86%BC_%E2%95%87%E1%84%81%E1%85%A8%E1%86%BE_%CE%B1%E1%84%82%E1%85%A6%E1%86%AA_%E1%84%84%E1%85%AE%E1%86%AC%E1%84%81%E1%85%B2%E1%86%BE__20160314-_MG_0698-%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1.png?v=1620318215244"
];
var rainbowFoods = [
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2Fkuldeok.png?v=1620158313420",
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2Funnamed%20(2).png?v=1620337420215",
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2F99B363445B892CE323.png?v=1620338776639"
];
var greenFoods = [
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2F%EA%B7%97%EB%80%AB_%EB%A3%8C%EA%BC%AF_%EB%93%84%EA%BC%A5_%E2%95%87%EA%BC%A7_%CE%B1%EB%84%A7_%EB%9A%A1%EB%80%BF__20160314-_MG_0516-%EB%B3%B5%EC%82%AC-400x400.png?v=1620158318189",
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2Funnamed-4.png?v=1620158321232",
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2Fnamul.png?v=1620318219056"
];
var orangeFoods = [
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2F20170424170440.png?v=1620158319274",
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2Fsoteok.png?v=1620158316259",
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2FLotus-Root-Hard-Boiled.png?v=1620318218079"
];
var purpleFoods = [
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2Funnamed-9.png?v=1620158321279",
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2Funnamed.png?v=1620158562458",
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2F647dc0c3767f34a9af4b9a1069e37d94.png?v=1620158316108"
];
var blackFoods = [
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2Fheuk2.png?v=1620318218971",
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2Fbeans.png?v=1620318219735",
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2FS15SeasonedBracken_1500x.png?v=1620337562927"
];
var brownFoods = [
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2FOption_Beef%2Bbulgogi.png?v=1620318222931",
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2Faa0e68efea93b.png?v=1620158331898",
  "https://cdn.glitch.com/f677a12d-f679-463a-ae13-f54f9c85a99b%2F06.png?v=1620337418911"
];
let inputElement = document.querySelector("#input");
let result = document.querySelector("#result");
inputElement.addEventListener("keydown", function(event) {
  if (event.key == "Enter") {
    //show text on page//
    console.log(inputElement.value);
    result.innerText = "You Typed: " + inputElement.value;
    // if result contains the word "red"
    if (result.innerHTML.indexOf("red") !== -1) {
      // specify and loop through the "redFoods" array, add all images in array as images to result container
      redFoods.forEach(item =>
        result.insertAdjacentHTML(
          "beforeend",
          `<img class= "resi" src="${item}">`
        )
      );
    }
    if (result.innerHTML.indexOf("white") !== -1) {
      // specify and loop through the "redFoods" array, add all images in array as images to result container
      whiteFoods.forEach(item =>
        result.insertAdjacentHTML(
          "beforeend",
          `<img class= "resi" src="${item}">`
        )
      );
    }
    if (result.innerHTML.indexOf("yellow") !== -1) {
      // specify and loop through the "redFoods" array, add all images in array as images to result container
      yellowFoods.forEach(item =>
        result.insertAdjacentHTML(
          "beforeend",
          `<img class= "resi" src="${item}">`
        )
      );
    }
    if (result.innerHTML.indexOf("rainbow") !== -1) {
      // specify and loop through the "redFoods" array, add all images in array as images to result container
      rainbowFoods.forEach(item =>
        result.insertAdjacentHTML(
          "beforeend",
          `<img class= "resi" src="${item}">`
        )
      );
    }
    if (result.innerHTML.indexOf("green") !== -1) {
      // specify and loop through the "redFoods" array, add all images in array as images to result container
      greenFoods.forEach(item =>
        result.insertAdjacentHTML(
          "beforeend",
          `<img class= "resi" src="${item}">`
        )
      );
    }
    if (result.innerHTML.indexOf("orange") !== -1) {
      // specify and loop through the "redFoods" array, add all images in array as images to result container
      orangeFoods.forEach(item =>
        result.insertAdjacentHTML(
          "beforeend",
          `<img class= "resi" src="${item}">`
        )
      );
    }
    if (result.innerHTML.indexOf("purple") !== -1) {
      // specify and loop through the "redFoods" array, add all images in array as images to result container
      purpleFoods.forEach(item =>
        result.insertAdjacentHTML(
          "beforeend",
          `<img class= "resi" src="${item}">`
        )
      );
    }
    if (result.innerHTML.indexOf("black") !== -1) {
      // specify and loop through the "redFoods" array, add all images in array as images to result container
      blackFoods.forEach(item =>
        result.insertAdjacentHTML(
          "beforeend",
          `<img class= "resi" src="${item}">`
        )
      );
    }
    if (result.innerHTML.indexOf("brown") !== -1) {
      // specify and loop through the "redFoods" array, add all images in array as images to result container
      brownFoods.forEach(item =>
        result.insertAdjacentHTML(
          "beforeend",
          `<img class= "resi" src="${item}">`
        )
      );
    }
  }
});

//NavBar
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}