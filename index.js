function calcular_promedio(notaDeMat, notaDeFis, notaDeLit){
  return (notaDeMat + notaDeFis + notaDeLit) / 3;
}

function mensajeFinal(nombre, apellido, promedioFinal){
  if(promedioFinal > 6){
      if(promedioFinal >= 9){
        return nombre + " " + apellido + " es un alumno Destacado";
      }
    return nombre + " " + apellido + " está Aprobado";
  }else if(promedioFinal < 4){
    return nombre + " " + apellido + " insuficiente, debe recursar";
  }else if(promedioFinal > 4 && promedioFinal < 5.99999){
    return nombre + " " + apellido + " debe ir a recuperatorio"
  }
}

const botonCalcular = document.querySelector("#calcular_promedio_alumno");

botonCalcular.onclick = function(){
  const nombre = document.querySelector("#nombre_alumno").value;
  const apellido = document.querySelector("#apellido_alumno").value;
  const notaDeMat = Number(document.querySelector("#nota_matematicas").value);
  const notaDeFis = Number(document.querySelector("#nota_fisica").value);
  const notaDeLit = Number(document.querySelector("#nota_literatura").value);
  const promedioFinal = calcular_promedio(notaDeMat, notaDeFis, notaDeLit);

  document.querySelector("#Mostrar_mensaje").value = mensajeFinal(nombre, apellido, promedioFinal);
  document.querySelector("#mostrar_promedio").value = promedioFinal;
  console.log(notaDeFis);
  console.log(notaDeLit);
  console.log(notaDeMat);
  console.log(promedioFinal);
  console.log(mensajeFinal(nombre, apellido, promedioFinal));
}
