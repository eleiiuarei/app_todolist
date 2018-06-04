/*let tabContent = document.getElementsByClassName("tab_content");
let tabLinks = document.getElementsByClassName("tab_link");

tabLinks[0].addEventListener('click', function OpenToDo (){tabContent[0].style.display ="block"; tabContent[1].style.display ="none"});
tabLinks[1].addEventListener('click', function OpenDone() {tabContent[1].style.display = "block"; tabContent[0].style.display ="none"});
*/
let tabContent1 = document.getElementById('tabContent1');
let tabContent2 = document.getElementById('tabContent2');
let tabToDo = document.getElementById('tabToDo');
let tabDone = document.getElementById('tabDone');

tabToDo.addEventListener('click', function () {
    tabContent1.className ="show_tab_content";
    tabContent2.className = "tab_content"});
tabDone.addEventListener('click', function () {
    tabContent2.className ="show_tab_content";
    tabContent1.className = "tab_content"});