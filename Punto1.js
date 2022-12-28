function punto_1(t,a) {

    //variables inciales
    oficinas_ocupadas = []
    band = true
    numero_oficionas = 0
  
    //recorrer todo el arreglo
    for (i = 0; i < (a.length); i++) {
  
      //oficinas libres
      if (!oficinas_ocupadas[i]) {
        oficinas_ocupadas[i] = false
      }
  
      //verificar en la cola, si hay espacio en una oficiona
      for (j = 0; j < (i + 1); j++) {
          //permite crear una oficina
           band = true
  
          //verifica el caso de los 0 a la Derecha
          if (a[i + 1] === 0) {   
             band = false
             oficinas_ocupadas[i+1] = true  
            break
           }
        
        if (!a[i + 1]) { break }//evita haga cosas raras
  
        //caso del 0 a la Izquierdad
        if (a[j] > t && !oficinas_ocupadas[j]) {
           band = false
           oficinas_ocupadas[j] = true 
           break
        }
  
        //logica principal
        if ((a[j] + a[i + 1]) <= t && !oficinas_ocupadas[j]) {
          a[j] = a[j] + a[i + 1]
  
          //pone true, si el espacio de la oficina ha sido ocupado en su totalidad
          if (a[j] === t) {
           oficinas_ocupadas[j] = true
          }
          oficinas_ocupadas[i+1] = true
          
          band = false
         
          break
        }
  
      }
  
      //incrementa el número de oficinas
      if (band) {
        numero_oficionas++
        band = false
      }
  
    }
  
    //retorna el número mínimo de oficinas para atender a los clientes
    return numero_oficionas
    
  }