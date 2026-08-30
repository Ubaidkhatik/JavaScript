document.querySelector(".box").innerHTML
document.querySelector(".box").outerHTML
document.querySelector(".box").tagName
document.querySelector(".box").getElementsByTagName="div"
document.querySelector(".box").ariaColIndex
document.querySelector(".box").textContent
document.querySelector(".box").toString="uk"
document.querySelector(".box").style.color="blue"
document.querySelector(".box").style.backgroundClip="auto"
document.querySelector(".box").style.backgroundColor="gray"

let div=document.createElement("div");
div.innerHTML="I have been inserted"
div.setAttribute("class","created")
    document.querySelector(".box").before(div)
    
    //After
document.querySelector(".box").after(div)

//append
document.querySelector(".box").append(div)

//Prepend 
document.querySelector(".box").prepend(div)

//replacewith
document.querySelector(".box").replaceWith(div)
