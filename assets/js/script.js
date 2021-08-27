let togg0 = document.getElementById("togg0");
let togg1 = document.getElementById("togg1");
let togg2 = document.getElementById("togg2");
let togg3 = document.getElementById("togg3");
let togg4 = document.getElementById("togg4");
let togg5 = document.getElementById("togg5");

// Cache toutes les cartes travaux
function hideAll(){
	let cards = document.getElementsByClassName("travaux");

	Array.from(cards).forEach(function(card) {
		card.style.visibility = "collapse";
	});
}

// Affiche les cartes concernées
function showClass(className) {
	hideAll();
	let cards = document.getElementsByClassName(className);

	Array.from(cards).forEach(function(card) {
		card.style.visibility = "visible";
	});
}

//bouton "Afficher tout"
togg0.addEventListener("click", () => {
	showClass("travaux");
});

//bouton "HTML"
togg1.addEventListener("click", () => {
	showClass("travaux html");
});

//bouton "CSS"
togg2.addEventListener("click", () => {
	showClass("travaux css");
});

//bouton "JS"
togg3.addEventListener("click", () => {
	showClass("travaux js");
});

//bonton "PHP"
togg4.addEventListener("click", () => {
	showClass("travaux php");
});

/* A VENIR
//bouton "WordPress"
togg5.addEventListener("click", () => {
	showClass("travaux wordpress");
});
*/

/*
togg0.addEventListener("click", () => {
	if (c1.style.display != "none"){
		c1.style.display = "block"; 
	} else {
		c1.style.display = "flex";
	}
})*/
/*
//Exemple pour selectionner les classes

let htmlSelect = document.getElementsByClassName("html")[0];
let cssSelect = document.getElementsByClassName("css")[0];
let jsSelect = document.getElementsByClassName("js")[0];
let phpSelect = document.getElementsByClassName("php")[0];
let allSelect = document.getElementsByClassName("all")[0];
*/

/*

//Test pour cacher tout ce qui n'est pas de la classe HTML

togg1.addEventListener('click', function() {
	c1.style.display = "block"
	c2.style.display = "block"
	c3.style.display = "none"
	c4.style.display = "block"
	c5.style.display = "block"
	c6.style.display = "none"
	c7.style.display = "none"
	c8.style.display = "block"
	c9.style.display = "block"
});
*/

/*
function show(object){
	if(document.getElementById)
	document.getElementById(object).style.display = "block";
}

function hide(object){
	if(document.getElementById)
	document.getElementById(object).style.display = "none";
}
*/

/*
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
*/

/*
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
}
*/
