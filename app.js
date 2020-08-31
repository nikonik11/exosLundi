fetch('./json/joueur.json')
	.then(response => {
		return response.json();
	})
	.then(data => {
        for(let i = 0; i < data.length; i++){
            let x = document.createElement('div');
            x.id = 'content';
            x.innerHTML = 
            '<br> nom : '+ data[i].nom +
            '<br> xp : '+ data[i].xp +
            '<br> pseudo : '+ data[i].pseudo + 
            '<br> <img src=" ' + data[i].imgUrl + ' "/> ';            
            document.body.appendChild(x);            
        }
    })
    .catch(erreur => console.log(`Erreur: ${erreur.message}`));
    

