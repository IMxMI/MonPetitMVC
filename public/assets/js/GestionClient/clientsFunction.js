function chercheUn() {
    if(document.getElementById("titre").value == "-- Choisir --") { //ce test permet d'eviter l'envoie d'une erreur si nous choisison l'element de base.
        document.getElementById("retour").style.visibility = "hidden";
    } else {
        var xhr = new XMLHttpRequest()
        var reponse;
        xhr.onreadystatechange() = function(){
            if(this.readyState == 4 && this.status == 200) {
                document.getElementById('retour').innerHTML = xhr.responseText;
                document.getElementById("retour").style.visibility="visible";
            }
        }
        xhr.open("post", "/?c=gestionClient&a=chercheUnAjax", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        parametres = "id=" + document.getElementById("titre").value;
        xhr.send(parametres);
    }

var chIdClient = document.getElementById("titre");
chIdClient.addEventListener('change', chercheUn, false);
