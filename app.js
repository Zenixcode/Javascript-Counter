const numDisplay = document.querySelector(".number");
const btns = document.querySelectorAll(".btn");

//initial count
let count = 0;

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const classes = e.currentTarget.classList;
        if(classes.contains('decrease')){
            count--;
        }
        else if(classes.contains('increase')){
            count++;
        }else{
            count = 0;
        }
        numDisplay.textContent = count;//change the text based on the current count number
        if(count < 0){
            numDisplay.style.color = "red";
        }else if(count > 0){
            numDisplay.style.color = "green";
        }
        else if(count == 0){
            numDisplay.style.color = "black";
        }
    });
}
);