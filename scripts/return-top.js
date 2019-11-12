const button = document.getElementById("button-return");
const trigger = document.getElementById("divider")

var intScrollValue;

let isHidden = true;


function buttonLogic() {
    if (intScrollValue > 850) {
        button.style.display = "block";
        isHidden = false;
    } else if (intScrollValue < 850) {
        button.style.display = "none";
        isHidden = true;
    }
};

function backToTop() {
   document.body.scrollTop = 0;
};

function scrollNum() {
    intScrollValue = document.body.scrollTop;
    //console.log("scroll value", intScrollValue);
    buttonLogic();
}

window.document.addEventListener("scroll", scrollNum);
button.addEventListener("click", backToTop);