let togg0 = document.getElementById("togg0")
let togg1 = document.getElementById("togg1")
let togg2 = document.getElementById("togg2")
let togg3 = document.getElementById("togg3")
let togg4 = document.getElementById("togg4")

let d0 = document.getElementById("d0")
let d1 = document.getElementById("d1")
let d2 = document.getElementById("d2")
let d3 = document.getElementById("d3")
let d4 = document.getElementById("d4")

let c1 = document.getElementById("c1")
let c2 = document.getElementById("c2")
let c3 = document.getElementById("c3")
let c4 = document.getElementById("c4")
let c5 = document.getElementById("c5")
let c6 = document.getElementById("c6")
let c7 = document.getElementById("c7")
let c8 = document.getElementById("c8")
let c9 = document.getElementById("c9")

function show(object){
	if(document.getElementById)
	document.getElementById(object).style.display = "block";
}
function hide(object){
	if(document.getElementById)
	document.getElementById(object).style.dipslay = "none";
}

togg0.addEventListener("click", () => {
	if(getComputedStyle(d0).display != "none"){
		d0.style.display = "none"; 
	} else {
		d0.style.display = "block";
	}
})

togg1.addEventListener("click", () => {
	if(getComputedStyle(d1).display != "none"){
		d1.style.display = "none"; 
	} else {
		d1.style.display = "block";
	}
})

togg2.addEventListener("click", () => {
	if(getComputedStyle(d2).display != "none"){
		d2.style.display = "none"; 
	} else {
		d2.style.display = "block";
	}
})

togg3.addEventListener("click", () => {
	if(getComputedStyle(d3).display != "none"){
		d3.style.display = "none"; 
	} else {
		d3.style.display = "block";
	}
})

togg4.addEventListener("click", () => {
	if(getComputedStyle(d4).display != "none"){
		d4.style.display = "none"; 
	} else {
		d4.style.display = "block";
	}
})

function toggle_div(bouton, id) {
        //on récupère ta div à "toggler"
    var div = document.getElementById(id),
        //on récupère son état à l'instant initial
        //la création d'un nouveau String est nécessaire car son état va être modifié dans la boucle
        previousState = new String(div.style.display),
        //on récupère la liste de tous les éléments soumis à affichage conditionnel
        showElements = document.getElementsByClassName("taclasse");
  
    //pour chacun des élements, on le cache (plutot que de vérifier si l'element était deja affiché)
    for(var i = 0; i < showElements.length; i++) {
        showElements[i].style.display = "none";
    }
  
    //Si le block n'était précement pas affiché, alors on l'affiche
    //Si avant le clic il etait affiché, alors il reste caché (comportement toggle conservé)
    if(previousState=="none") {
        div.style.display = "block";
    }