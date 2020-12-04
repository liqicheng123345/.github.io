//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/scape.jpg') {
      myImage.setAttribute('src','images/firefox2.png');
    } else {
      myImage.setAttribute('src','images/scape.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//localStorage.setItem('name', null);

/*
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
*/


//禁止"不输入"与"取消--产生null"
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'scape is beautiful, ' + myName;
  }
}


//首次加载，调用历史存储信息，构建应用程序
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'scape is beautiful, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

