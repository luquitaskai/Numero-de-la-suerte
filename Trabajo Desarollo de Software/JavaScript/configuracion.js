function verificarnumero(){
    var valordeinput = document.getElementById('nombre');
    var valorporseparado = valordeinput.value.split('');
    var enmayus  = valorporseparado.map(elemento => elemento.toUpperCase());   
    for(let i = 0; i < enmayus.length; i++){
        console.log(enmayus)
        if(enmayus[i] === "A" || enmayus[i] === "J" || enmayus[i] === "R"){
            enmayus[i] = 1
            console.log(enmayus)
        }else if(enmayus[i] === "B" || enmayus[i] === "K" || enmayus[i] === "S"){
            enmayus[i] = 2
            console.log(enmayus)
        }else if(enmayus[i] === "C" || enmayus[i] === "L" || enmayus[i] === "T"){
            enmayus[i] = 3
            console.log(enmayus)
        }else if(enmayus[i] === "D" || enmayus[i] === "M" || enmayus[i] === "U"){
            enmayus[i] = 4
            console.log(enmayus)
        }else if(enmayus[i] === "E" || enmayus[i] === "N" || enmayus[i] === "V"){
            enmayus[i] = 5
            console.log(enmayus)
        }else if(enmayus[i] === "F" || enmayus[i] === "Ñ" || enmayus[i] === "W"){
            enmayus[i] = 6
            console.log(enmayus)
        }else if(enmayus[i] === "G" || enmayus[i] === "O" || enmayus[i] === "X"){
            enmayus[i] = 7
            console.log(enmayus)
        }else if(enmayus[i] === "H" || enmayus[i] === "P" || enmayus[i] === "Y"){
            enmayus[i] = 8
            console.log(enmayus)
        }else if(enmayus[i] === "I" || enmayus[i] === "Q" || enmayus[i] === "Z"){
            enmayus[i] = 9
            console.log(enmayus)
        }
    }
    var espacio = enmayus.indexOf(' ')
    for(let i = 0; i < enmayus.length; i++){
      var nombre = enmayus.slice(0, espacio);
    }
    
    for(let i = 0; i < enmayus.length; i++){
        var apellido = enmayus.slice(espacio + 1);
    }
    console.log(nombre)
    console.log(apellido)
    var sumanombre = [0]
    for(let i = 0; i < nombre.length; i++){
        sumanombre[0] += nombre[i];
    }
    if(sumanombre >= 10 && sumanombre <= 100){
        var comotextonombre = sumanombre.toString();
        var suma_n_separado = comotextonombre.split('');
        var suma_n = 0 ;
        for (let i = 0; i < suma_n_separado.length; i++) {
            suma_n += parseInt(suma_n_separado[i]);
        }
        console.log(suma_n)
    }

    var suma_apellido = [0]
    for(let i = 0; i < apellido.length; i++){
        suma_apellido[0] += apellido[i];
    }
    if(suma_apellido >= 10 && suma_apellido <= 100){
        var comotextoapellido = suma_apellido.toString();
        var suma_b_separado = comotextoapellido.split('');
        var suma_b = 0 ;
        for (let i = 0; i < suma_b_separado.length; i++) {
            suma_b += parseInt(suma_b_separado[i]);
        }
        console.log(suma_b)
    }
    
    var resultado = [0] ;

    resultado = suma_n + suma_b;

    if(resultado === 11 || resultado === 22 || resultado === 33 && resultado > 0 || resultado < 10){
        console.log(resultado)
        var elresultado = document.getElementById('descubridor');
        elresultado.innerHTML = resultado
    }else if(resultado >= 10 && resultado <= 100){
        var comotextoresultado = resultado.toString();
        var suma_r_separado = comotextoresultado.split('');
        var suma_r = 0;
        for (let i = 0; i < suma_r_separado.length; i++) {
            suma_r += parseInt(suma_r_separado[i]);
        }
        console.log(suma_r)
        elresultado = document.getElementById('descubridor');
        elresultado.innerHTML = suma_r
    }

    switch (suma_r) {
        case 2:
          var piedra_elegida = "Howlita";
          var cualidad_elegida = "Diplomático y persuasivo con ingenio encantador";
          var piedra = document.getElementById('descubridor_piedra');
          var cualidad = document.getElementById('descubridor_cualidad');
          piedra.innerHTML = piedra_elegida;
          cualidad.innerHTML = cualidad_elegida;
        case 3:
           var piedra_elegida = "Amazonita";
           var cualidad_elegida = "Extrovertido y locuaz con naturaleza optimista";
           var piedra = document.getElementById('descubridor_piedra');
           var cualidad = document.getElementById('descubridor_cualidad');
           piedra.innerHTML = piedra_elegida;
          cualidad.innerHTML = cualidad_elegida;
           break;
        case 4:
           var piedra_elegida = "Piedra de luna";
           var cualidad_elegida = "Trabajador y diligente con altos estándares morales";
           var piedra = document.getElementById('descubridor_piedra');
           var cualidad = document.getElementById('descubridor_cualidad');
           piedra.innerHTML = piedra_elegida;
           cualidad.innerHTML = cualidad_elegida;
           break;
        case 5:
           var piedra_elegida = "Aguamarina";
           var cualidad_elegida = "Poco convencional y aventurero con personalidad curiosa";
           var piedra = document.getElementById('descubridor_piedra');
           var cualidad = document.getElementById('descubridor_cualidad');
           piedra.innerHTML = piedra_elegida;
           cualidad.innerHTML = cualidad_elegida;
           break;
        case 6:
           var piedra_elegida = "Cornalina";
           var cualidad_elegida = "Compasivo y amoroso con la capacidad de dar buenos consejos"
           var piedra = document.getElementById('descubridor_piedra');
           var cualidad = document.getElementById('descubridor_cualidad');
           piedra.innerHTML = piedra_elegida;
           cualidad.innerHTML = cualidad_elegida;
           break;
        case 7:
           var piedra_elegida = "Peridoto";
           var cualidad_elegida = "Filosófico y reflexivo con una mente curiosa"
           var piedra = document.getElementById('descubridor_piedra');
           var cualidad = document.getElementById('descubridor_cualidad');
           piedra.innerHTML = piedra_elegida;
           cualidad.innerHTML = cualidad_elegida;
          break;
        case 8:
           var piedra_elegida = "Citrino";
           var cualidad_elegida = "Filosófico y reflexivo con una mente curiosa"
           var piedra = document.getElementById('descubridor_piedra');
           var cualidad = document.getElementById('descubridor_cualidad');
           piedra.innerHTML = piedra_elegida;
           cualidad.innerHTML = cualidad_elegida;
           break;
        case 9:
          var piedra_elegida = "Cuarzo Roza";
          var cualidad_elegida = "Generoso y servicial con una necesidad de combatir la injusticia"
          var piedra = document.getElementById('descubridor_piedra');
          var cualidad = document.getElementById('descubridor_cualidad');
          piedra.innerHTML = piedra_elegida;
          cualidad.innerHTML = cualidad_elegida;
          break;
        default:
          break;
    }      

    switch (resultado) {
        case 8:
           var piedra_elegida = "Citrino";
           var cualidad_elegida = "Filosófico y reflexivo con una mente curiosa"
           var piedra = document.getElementById('descubridor_piedra');
           var cualidad = document.getElementById('descubridor_cualidad');
           piedra.innerHTML = piedra_elegida;
           cualidad.innerHTML = cualidad_elegida;
           break;
        case 9:
          var piedra_elegida = "Cuarzo Roza";
          var cualidad_elegida = "Generoso y servicial con una necesidad de combatir la injusticia"
          var piedra = document.getElementById('descubridor_piedra');
          var cualidad = document.getElementById('descubridor_cualidad');
          piedra.innerHTML = piedra_elegida;
          cualidad.innerHTML = cualidad_elegida;
          break;
        case 10:
            var piedra_elegida = "Granate";
            var piedra = document.getElementById('descubridor_piedra');
            piedra.innerHTML = piedra_elegida;
            break;
        case 11:
            var cualidad_elegida = "Espiritual y carismático con una personalidad inspiradora";
            var piedra_elegida = "Granate";
            var piedra = document.getElementById('descubridor_piedra');
            var cualidad = document.getElementById('descubridor_cualidad');
            piedra.innerHTML = piedra_elegida;
            cualidad.innerHTML = cualidad_elegida;
            break;
        case 22:
           var cualidad_elegida = "Psíquico e intuitivo con grandes sueños y visiones";
           var piedra_elegida = "Turmalina";
           var piedra = document.getElementById('descubridor_piedra');
           var cualidad = document.getElementById('descubridor_cualidad');
           piedra.innerHTML = piedra_elegida;
            cualidad.innerHTML = cualidad_elegida;
           break;
        case 33:
           var cualidad_elegida = "Maestro con naturaleza humanitaria y de autosacrificio";
           var piedra_elegida = "Diamante";
           var piedra = document.getElementById('descubridor_piedra');
           var cualidad = document.getElementById('descubridor_cualidad');
           piedra.innerHTML = piedra_elegida;
            cualidad.innerHTML = cualidad_elegida;
           break;   
        default:
        break;
    }

  
   
    
}


    