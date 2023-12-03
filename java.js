/*function for the contact page*/
/*visual affect for the inputs in contact page*/
const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode; /*node refers to a point in the document tree*/
    parent.classList.add("focus"); 
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value==""){
    parent.classList.remove("focus");
}
}

inputs.forEach((input)=>{
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});
