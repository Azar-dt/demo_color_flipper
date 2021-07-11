let colors = ["red", "green", "blue",
"white","yellow","gray"]; 

let btn = document.getElementById('btn');

btn.addEventListener("click",function () { 
    let randomColor = Math.floor(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor ="#" + randomColor; 
    //document.getElementById('color').value= "#" + radomColor;
    document.getElementById('color').innerHTML = "#" + randomColor;
    color.style.color = "#" + randomColor; 
    document.getElementById('color').style.fontSize = "20px";
})