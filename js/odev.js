

var myNodelist = document.getElementsByTagName("LI");
var i;
loadPage();
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
    
  };
}

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  var t = document.createTextNode(inputValue);
 
  li.appendChild(t);
  if (inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0) {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("task").value = "";
 
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  setStorage(inputValue);
  document.getElementById("task").value = "";
 
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
      
      
    };
  }
  
}

function setStorage(e){
    var str=JSON.parse(localStorage.getItem("dolap"));
    let todos;
    if(str==null){
        todos=[];
    }
    else{
        todos=getStorage();
    }
    todos.push(e);
    localStorage.setItem("dolap",JSON.stringify(todos));
    
}
function getStorage(){
    let todo=JSON.parse(localStorage.getItem("dolap"));
    return todo;
}
function loadPage(){
 let todo =getStorage();
 if(todo!=null){
     let html;
     for(let i=0;i<todo.length;i++){
         html=`
         <li>
         <span>
         ${todo[i]} </span> </li>`;
         document.getElementById("list").innerHTML +=html;
     }
 }
}
function dltStorage(e){
   let todo=getStorage();
   todo.forEach((element,i) => {
       if(element===e){
           todo.splice(i,1);
       }
   });
   localStorage.setItem("dolap",JSON.stringify(todo));

}

function showTime(){
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var sezon = date.getDay();

  if(sezon == 1){
    sezon = "Pazartesi";
}
else if( sezon == 2){
    sezon = "Salı";
}
else if( sezon == 3){
    sezon = "Çarşamba";
}
else if( sezon == 4){
    sezon = "Perşembe";
}
else if( sezon == 5){
    sezon = "Cuma";
}
else if( sezon == 6){
    sezon = "Cumartesi";
}
else{
    sezon = "Pazar";
}   

h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;

var time = h + ":" + m + ":" + s + "" + sezon ;
document.getElementById("myClock").innerHTML = time;
setTimeout(showTime, 1000);

}
showTime();
