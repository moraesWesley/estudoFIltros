    function mostrarPokemonAgua(tipoPokemon, nomePokemon){
        var tipoPokemonAgua = [];
        for(i = 0; i < tipoPokemon.length; i++){
            if(tipoPokemon[i].innerHTML == "Água"){
                tipoPokemonAgua.push(nomePokemon[i].innerHTML);            
            };
        };
        //console.log(tipoPokemonAgua);
        for(i = 0; i < tipoPokemonAgua.length; i++){
            window.alert(tipoPokemonAgua[i]);
            //console.log(tipoPokemonAgua[i]);
        }
    };

    function mostrarPokemonFogo(tipoPokemon, nomePokemon){
        var tipoPokemonFogo = [];
        for(i = 0; i < tipoPokemon.length; i++){  
            if(tipoPokemon[i].innerHTML == "Fogo"){
                tipoPokemonFogo.push(nomePokemon[i].innerHTML);
            }
        };
        console.log(tipoPokemonFogo);
        for(i = 0; i < tipoPokemonFogo.length; i++){
            window.alert(tipoPokemonFogo[i]);
            //console.log(tipoPokemonFogo[i]);
        }
    };

    document.getElementById("btnFiltroAgua").addEventListener("click", function(){
        var tipoPokemon = document.getElementsByClassName("tipoPokemon");
        var nomePokemon = document.getElementsByClassName("nomePokemon");
        
        mostrarPokemonAgua(tipoPokemon, nomePokemon);

    });

    document.getElementById("btnFiltroFogo").addEventListener("click", function(){
        var tipoPokemon = document.getElementsByClassName("tipoPokemon");
        var nomePokemon = document.getElementsByClassName("nomePokemon");
    
        mostrarPokemonFogo(tipoPokemon, nomePokemon);
    
    });


