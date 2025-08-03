window.onload = () => {
    target1.style.display = 'none'
    target2.style.display = 'none'
    target3.style.display = 'none'
}
const target1= document.getElementById("Fanart")
function toggle1(){
    if (target1.style.display === 'block') {
        target1.style.display = 'none'
    }
    else{
       target1.style.display = 'block'
     
    }
}
const target2= document.getElementById("OCs")
function toggle2(){
    if (target2.style.display === 'block') {
        target2.style.display = 'none'
    }
    else{
       target2.style.display = 'block'
     
    }
}
const target3= document.getElementById("OtherStuff")
function toggle3(){
    if (target3.style.display === 'block') {
        target3.style.display = 'none'
    }
    else{
       target3.style.display = 'block'
     
    }
}
