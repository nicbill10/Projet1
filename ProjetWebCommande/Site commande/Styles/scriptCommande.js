function surligne(champ, erreur) 
{ 
if(erreur) 
champ.style.backgroundColor = "#fba"; 
else 
champ.style.backgroundColor = ""; 
}

function verifPrenom(champ) 
{ 
if(champ.value.length < 2 || champ.value.length > 25) 
{ 
surligne(champ, true); 
return false; 
} 
else 
{ 
surligne(champ, false); 
return true; 
} 
}

function verifMail(champ) 
{ 
var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/; 
if(!regex.test(champ.value)) 
{ 
surligne(champ, true); 
return false; 
} 
else 
{ 
surligne(champ, false); 
return true; 
} 
}

function veriftelephone(champ) 
{
var regex =/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
if(!regex.test(champ.value)) 
{ 
surligne(champ, true); 
return false; 
} 
else 
{ 
surligne(champ, false); 
return true; 
} 
}

function verifcredit(champ) 
{
var regex =/^(\()?\d{4}(\))?( |\s)?\d{4}( |\s)?\d{4}( |\s)\d{4}$/;

if(!regex.test(champ.value)) 
{ 
surligne(champ, true); 
return false; 
} 
else 
{ 
surligne(champ, false); 
return true; 
} 
}

function valider()
{

alert	("La commande a été faite au nom de : " + document.getElementsByName("nom")[0].value +
		(". Elle sera envoyer à l'adresse suivante : ") 
		+ document.getElementsByName("adresse")[0].value+ (", à ") + document.getElementsByName("ville")[0].value+ ". Vous recevrez une confirmation d'achat avec les détails par courriel à cette adresse : " 
		+ document.getElementsByName("courriel")[0].value);

}