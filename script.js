let btn = document.querySelector(".download-btn");
let result = document.querySelector(".result")
let Num = document.querySelector(".Num");
let text = document.querySelector("h3")
N=5;
const fileLink = "https://drive.google.com/uc?export=download&id=12grUllOg9q8PxkbqOZG7kVLs9c3R0p4s";
// let fileLink = "https://drive.google.com/file/d/12grUllOg9q8PxkbqOZG7kVLs9c3R0p4s/view?usp=sharing";
function Timer(){
    if(btn.classList.contains("again")){
       return location.href = fileLink;
    }
    btn.style.display = "none";
    result.style.display = "block";
    Num.textContent = `${N}`;
    stoped = setInterval(function(){
    N--;
    Num.textContent = `${N}`;
    if(N === -1){
        clearInterval(stoped);
        result.textContent = 'Your file is downloading...'
        location.href = fileLink;
        setTimeout(function(){
            text.textContent = "Download Again";
            btn.style.display = "flex";
            btn.classList.add("again");
            result.style.display = "none"
        },3000)
    }
    },1000)

}
btn.addEventListener("click",Timer)