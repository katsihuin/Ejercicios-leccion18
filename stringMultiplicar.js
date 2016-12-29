function stringMultiplicar(n) {
    var r = 0;
    var salida = "";
    
    for (var i = 1; i<=10; i++){
       if(i<=10){
        r = n*i;
        salida += n + "x" + i + "=" + r;
        if (1+i<=10){
           salida += "/";
       
        }
       
    }

}
 return salida;
}