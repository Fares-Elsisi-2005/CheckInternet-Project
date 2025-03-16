let title = document.querySelector(".title");
let ul = document.querySelector("ul");
let btn = document.querySelector(".reload");



window.onload = function () {
    if (window.navigator.onLine) {
        onLine();
    } else {
        offLine();
    }
}

window.addEventListener("online", function () {
    onLine();
})

window.addEventListener("offline", function () {
    offLine();
})



btn.addEventListener("click", function () {
    window.location.reload()
})


function onLine() {
    title.innerHTML = "Online Now";
    title.style.color = "green";
    ul.classList.add("hide");
    btn.classList.add("hide")
}

function offLine() {
    title.innerHTML = "Offline Now";
    title.style.color = "#666";
    ul.classList.remove("hide");
    btn.classList.remove("hide")

}

