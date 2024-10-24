const menuIcon = document.querySelector("#menuIcon")
const closeIcon = document.querySelector("#closeIcon")
const sidebar = document.querySelector("#sidebar")


menuIcon.addEventListener("click", showSidebar)
closeIcon.addEventListener("click", hideSidebar)


function showSidebar(){
    sidebar.style.right= "0"

}

function hideSidebar(){
    sidebar.style.display = "-100%"
}