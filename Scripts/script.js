var panier = [];
$( document ).ready(function() {
	var activecat;
	LoadCatalogues();
});
//charger script d'un catalogue avec son numéro
function LoadCatalogues(index = 1) {
	var script = document.createElement("script");
	script.src = "Data/Catalogue"+index+".js";
	document.body.appendChild(script); //importation du script du catalogue dans la page HTML

	script.onload = (msg) => {
		//catalogue 'index' chargé avec succès on passe au suivant
		LoadCatalogues(index+1);	
	}
	script.onerror = (error) => {
		//fin de l'importation affichage du catalogue par défaut
		ShowCatalogue(1);
	}
}
//afficher un catalogue suivant son numéro
function ShowCatalogue(catid) {
	//affichage du catalogue dans la page HTML
	setTimeout(function () {
		var catHTML = document.getElementById("catalogue");	
		var dataHTML = '<div class="line">';
		var index = 0;
		eval("catalog"+catid).forEach(function(produit) {
			dataHTML += '<div class="produit">'
			+'<div class="image"><img src="Data/Images/'+catid+'_'+produit.id+'.jpg" width=50></div>'
			+'<div class="title">'+produit.name+'</div>'
			+'<div class="content">'+produit.description+'</div>'
			+'<div class="price">'+produit.price+'€</div>'
			+'<form class="addToPanierForm" onsubmit="AjouterAuPanier(this); return false;"><input class="name" type="text" value="'+produit.name+'" style="display:none"><input type="number" class="quantity" min="1" max="9" value="0" onchange="$(this).parent().find(\'.addbutton\').attr(\'disabled\', this.value == 0)" required><button class="addbutton" type="submit" disabled><img src="Images/shop.png"></button></form>'
			+'	</div>';
			index++;
			if(index>=3) {
				dataHTML += '</div><div class="line">';
				index = 0;	
			}
		});
		dataHTML += '</div>';
		catHTML.innerHTML = dataHTML;
	}, 200);
	activecat = catid;

}
//suppression d'un produit du panier
function SupprimerDuPanier(button) {
	document.getElementById("searchbar").value = "";
	var name = $(button).parent().find(".title").html();
	for (var i = 0; i < panier.length; i++) {
		if(panier[i].name == name) {
			panier.splice(i, 1);
			RefreshPanier();
			return;
		}
	}
}
//ajout (ou ajout de quantité) d'un produit dans le panier
function AjouterAuPanier(form) {
	document.getElementById("searchbar").value = "";
	$(form).find(".addbutton").fadeTo( "fast" , 1, function() {
		$(form).find(".addbutton").fadeTo( "slow" , 0.25, function() {});
	});
	var product = new Object();
	var productName = $(form).find(".name").val();
	eval("catalog"+activecat).forEach(function(produit) {
		if(produit.name == productName) {//récupération du produit depuis le catalogue
			product.id = produit.id;
			product.name = produit.name;
			product.description = produit.description;
			product.price = produit.price;
			product.catid = activecat;
		}
	});
	var toRemove = -1;
	for (var i = 0; i < panier.length; i++) {
		if(panier[i].name == product.name) {
			product.quantity = Number($(form).find(".quantity").val())+panier[i].quantity;
			toRemove = i;
			break;
		}
	}

	if(!product.quantity)
		product.quantity = Number($(form).find(".quantity").val());

	if(toRemove != -1)
		panier.splice(toRemove, 1);

if(product.quantity > 9) { //trop d'articles	
	product.quantity = 9;
alert("Vous ne pouvez pas mettre plus de 9 articles identiques dans le panier");
}
$(form).find(".quantity").val(0);
$(form).find(".addbutton").attr("disabled", true);
panier.push(product);
RefreshPanier();
}

//mise a jour dynamique du panier lors de modification de produits ou de filtre du nom
function RefreshPanier(search=null) {
	var total = 0;
	var finalHTML = '';
	for (var i = 0; i < panier.length; i++) {
		var produit = panier[i];
		if(search == null || produit.name.toLowerCase().includes(search.toLowerCase()))  {
			finalHTML +='<div class="produit"><div class="image"><img src="Data/Images/'+produit.catid+'_'+produit.id+'.jpg" width=50></div><div class="title">'+produit.name+'</div><div class="quantity">Quantité : '+produit.quantity+'</div><img src="Images/trash.png" class="removebutton" onclick="SupprimerDuPanier(this)"></div><br>';
			total+=(produit.quantity*produit.price);
		}
	}
	document.getElementById("total").innerHTML =  'Total : '+total.toFixed(2)+'€';
	document.getElementById("content").innerHTML = finalHTML;	
}
