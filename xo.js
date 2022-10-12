let turn="x";
let reset=document.querySelector(".reset");
reset.addEventListener("click",function(){
    location.reload();
})
function winning() { 
    let choices=[];
    for(let i=0;i<10;i++){
        choices[i]=document.getElementById('item'+i)
    }
    if (choices[1].innerText==choices[2].innerText&&choices[2].innerText==choices[3].innerText&&choices[1].innerText!="") {
        winner(choices[1].innerText.toString());
    }else if (choices[4].innerText==choices[5].innerText&&choices[5].innerText==choices[6].innerText&&choices[6].innerText!="") {
        winner(choices[4].innerText.toString()) 
    }else if (choices[7].innerText==choices[8].innerText&&choices[8].innerText==choices[9].innerText&&choices[8].innerText!="") {
        winner(choices[7].innerText)
    }else if (choices[1].innerText==choices[4].innerText&&choices[4].innerText==choices[7].innerText&&choices[7].innerText!="") {
        winner(choices[1].innerText)
    }else if (choices[2].innerText==choices[5].innerText&&choices[5].innerText==choices[8].innerText&&choices[8].innerText!="") {
        winner(choices[2].innerText)
    }else if (choices[3].innerText==choices[6].innerText&&choices[6].innerText==choices[9].innerText&&choices[9].innerText!="") {
        winner(choices[3].innerText)
    }else if (choices[1].innerText==choices[5].innerText&&choices[5].innerText==choices[9].innerText&&choices[9].innerText!="") {
        winner(choices[1].innerText)
    }else if (choices[3].innerText==choices[5].innerText&&choices[5].innerText==choices[7].innerText&&choices[7].innerText!="") {
        winner(choices[3].innerText)
    }
}
    function Gamepad(id) {
    let element=document.getElementById(id);
    if (turn=="x" && element.innerHTML=="") {
        let tag=document.createElement("span")
        element.appendChild(tag);
        let insert=document.createTextNode("x");
        turn="o";
        tag.appendChild(insert);
    }else if(turn=="o" && element.innerText==""){
        tag=document.createElement("span");
        element.appendChild(tag);
        insert=document.createTextNode("o");
        turn="x";
        tag.appendChild(insert);
    }
    winning()
}
function winner(win){
    let stuff=document.querySelector(".display");
    let teg=document.createElement("span");
    let text=document.createTextNode(win+" is the winner ")
    teg.appendChild(text)
    stuff.appendChild(teg);
}