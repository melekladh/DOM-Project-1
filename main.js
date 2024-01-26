function increment(event){
    num=(event.target.parentNode.querySelector("span"))

    num.innerHTML=Number(num.innerHTML)+1
total()
}

function decrement(event){
    num=(event.target.parentNode.querySelector("span"))

    num.innerHTML=Number(num.innerHTML)-1
    total()

}

function changecolor(event){
    coeur=(event.target.parentNode.querySelector(".material-symbols-outlined"))
        if (coeur.style.color == "") {
            coeur.style.color = "red"; 
        } else {
            coeur.style.color = "";
        }   

}

function total(){
    var somme=0

    var prix=document.getElementsByClassName("price")
    var quantite=document.getElementsByClassName("qt")
    for (let i=0;i<prix.length;i++){
        somme+=Number(prix[i].innerHTML)*Number(quantite[i].innerHTML)
        t=document.getElementById("total")
t.innerHTML="totall "+ somme
    }

    console.log(prix,quantite)
    console.log(somme)

}
total()

function deleteMe(event){
    event.target.parentNode.parentNode.parentNode.remove()
    total()

    }

