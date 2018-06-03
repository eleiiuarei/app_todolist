//Mostrar new task box
let addTask = document.getElementById("addTask");
let theTask = document.getElementById("theTask");

let createTask = document.getElementById("btn4Create");
let cancelTask = document.getElementById("btn4Cancel");

let capa1Create = document.getElementById("capa1Create");
let createYes = document.getElementById("createBtnYes");
let createNo = document.getElementById("createBtnNo");

let capa1Cancel = document.getElementById("capa1Cancel");
let cancelYes = document.getElementById("cancelBtnYes");
let cancelNo = document.getElementById("cancelBtnNo");

addTask.addEventListener('click', function () {theTask.className = "show_add_task"});
createTask.addEventListener('click', function () {capa1Create.className ="show_alert"});
createYes.addEventListener('click', function () {capa1Create.className ="hidden_alert"; theTask.className = "hidden_add_task"});
createNo.addEventListener('click', function () {capa1Create.className ="hidden_alert"});
cancelTask.addEventListener('click', function () {capa1Cancel.className ="show_alert"});
cancelYes.addEventListener('click', function () {capa1Cancel.className ="hidden_alert"; theTask.className = "hidden_add_task"});
cancelNo.addEventListener('click', function () {capa1Cancel.className = "hidden_alert"});




//Mostrar tabs
