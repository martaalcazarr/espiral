
//declaro la variable n, que será el numero de filas y columnas por lado

//para poder ir probando que se viera mi espiral, comprobando las posiciones donde aparecían los números
//y el resultado de la suma de las diagonales, mantuve esta variable como let n= 5;, para facilitarme los cálculos
//para poder comprobar de forma más sencilla y visual que la espiral se veía, en qué posiciones aparecian los números
//y en qué orden, y el resultado de la suma de las diagonales, mantuve esta variable como let = 5; y los cálculos, 
//según la espiral que logré crear, funcionaron.

let n = 1003;
//declaro la variable comienzo, para establecer el centro de la espiral
//en la mitad de ambos lados(y para que no entregue un valor decimal ocupo Math.floor)
let comienzo = Math.floor(n/2);
//para comprobar que la posición central está bien
console.log(`Si el tamaño de la espiral es de ${n}x${n}, el centro se encuentra en la posición ${comienzo}`);

//para que fila y columna empiecen en la posicion central
//let fila = comienzo;
//let columna = comienzo;


//declaro la variable inicio, pues la espiral iniciará en la posición 0
let inicio = 0;
//declaro que el valor límite debe ser "n" -1 para que no se expanda de los límites de la espiral
let limite = n-1;


//declaro la variable c(contador) que comenzará con el número 1
let c = 1;

//para las filas y columnas
//creo un array de dos dimensiones para mi espiral que tendrá el tamaño de "n"
//primero creo una matriz que tenga un número de elementos igual a "n"
let matriz = new Array(n);
//con for creo un nuevo array dentro del array matriz, que tendrá un tamaño igual a "n"
for(x=0; x<=n;x++){
    matriz[x] = new Array(n);
}
//para iniciar la matriz en la posición 0
//el primer ciclo for itera cada fila de la matriz
for(x=0; x<n; x++){
    //el segundo for itera cada columna
    for(y=0; y<n; y++){
        //ambas posiciones de la matriz inician en la posicion 0
        matriz[x][y] = 0;
    }
}

//le asigno que la posición inicial del contador c debe ser en el comienzo
//para las filas y las columnas, para que inicie en el centro
matriz[comienzo][comienzo] = c;
//el contador debe incrementar en 1 cada vez
c++



//---Aquí es donde intenté armar la espiral empezando desde el centro,
//con un ciclo for por cada dirección que debía tomar la espiral
//pero después de varios intentos, no logré encontrar el modo correcto

//while(c <= (Math.pow(n,2))){
    
//hacia la derecha, comienza en la posicion 0, si es menor que la posicion inicial, y mayor o igual
//a fila y columna, incrementa en 1, se incrementa el valor de columna en 1 
//for (let x = 0; x < inicio && fila >= 0 && columna >= 0; x++) {
    //la posicion de la columna va hacia la derecha, entonces aumenta el valor
    //de la posición columna y el valor del contador
    //columna++;
    //matriz[fila][columna] = c;
    //c++;
//}
//hacia abajo, se incrementa el valor de fila y el valor de contador

    //for(x=0; x <= inicio && fila >= 0 && columna >= 0; x++){
        //fila++
        //matriz[fila][columna] = c;
        //c++;
    //}

//hacia la izquierda, el valor de la posicion columna debe disminiur 1 por cada incremento del valor c

    //for(x=0; x <= inicio && fila >= 0 && columna >= 0; x++){
        //columna--
        //matriz[fila][columna]=c;
        //c++
    //}
//hacia arriba, el valor de la fila debe disminuir 1 por cada incremento 
    
    //for(x=0; x <= inicio && fila >= 0 && columna >= 0; x++){
        //fila--
        //matriz[fila][columna]=c;
        //c++

    //}
    
//}
//--no funcionó


//--Este es el código que si me funcionó para crear la espiral pero no avanza desde el centro,
//solo comienza desde ahí. Pero para poder verificar si podía calcular la suma de las diagonales,
//necesitaba tener alguna espiral a la que al menos pudiera asignarle el tamaño adecuado.

//como la espiral es cuadrada, el valor de c deberá ser menor o igual a n elevado al cuadrado
//mientras eso se cumpla, se ejecuta el ciclo while
while(c <= (Math.pow(n,2))){

//para la fila superior, inicia en 0 y termina en la posicion limite n-1
//para que no se salga de los limites del tamaño. Avanza de izquierda a derecha con x
// Al iterar el valor de c se asigna a la posicion de matriz e incrementa el contador en 1
    for(x=inicio; x <= limite; x++){
        matriz[inicio][x] = c;
        c++;
    }
    //para la columna de la derecha, va desde la posicion inicial +1 hasta el limite para ir de arriba a abajo
    //se le asigna el valor del contador c a la posición actual y se incrementa c en 1
    for(x=inicio+1; x<=limite; x++){
        matriz[x][limite]=c;
        c++
    }
    //para la fila inferior, va desde el limite -1 (la ultima columna)hasta inicio(la primera) y se reduce el valor en 1
    //para que avance de derecha a izquierda. Se asigna el valor de c a la posición actual y se incrementa en 1
    for(x=limite-1; x >= inicio; x-- ){
        matriz[limite][x]=c;
        c++

    }
    //para la columna de la izquierda va desde el limite-1 al inicio+1, para avanzar desde abajo hacia arriba se reduce x en 1,
    //se asigna el valor de c a la posición actual y se incrementa en 1
    for(x=limite-1; x>=inicio+1; x--){
        matriz[x][inicio]=c;
        c++;
    }
    //al completar los 4 ciclos for, se incrementa inicio en 1 y limite disminuye 1
    //para que el contador avance hacia fuera
    inicio = inicio +1;
    limite = limite -1;
}



//esto lo ocupé para visualizar el resultado en el html mientras iba armando la espiral con un n más pequeño
//y para poder comprobar que el calculo de las diagonales estaba correcto según los valores que mostraba la espiral
//document.write("<table>");
//for(x=0;x<n;x++){
//    document.write("<tr>");
//    for(y=0;y<n;y++){
//        document.write("<td>"+matriz[x][y]+"</td>");
//        
//    }
//    document.write("</tr>");
//}
//document.write("</table>");

//--fin del codigo para probar la espiral que sí funcionó




//PARA SUMAR LAS DIAGONALES

//(aunque no pude crear la espiral de manera correcta, tenia que crear una
//que al menos tuviera el tamaño correcto para poder probar esta parte del código)

//creo una variable en 0 para que se llene con la suma de cada diagonal
let sumaDiagonalIzquierdaDerecha = 0;
let sumaDiagonalDerechaIzquierda = 0;
//con un ciclo for, comienza en la posicion 0 y se ejecuta por "n" veces,
//incrementando en 1 cada vez
for (let i = 0; i < n; i++) {
//por cada ciclo, la variable para la diagonal de izq a der recorre las filas i 
//de la matriz y el mismo valor en la misma posición en la columna i
    sumaDiagonalIzquierdaDerecha += matriz[i][i];
//la variable para la diagonal de der a izq recorre la fila i, y el valor de la columna
//se calcula restando el valor actual de i al tamaño "n" y a eso se le resta 1
    sumaDiagonalDerechaIzquierda += matriz[i][n-i-1];
}
//para ver el resultado. Se suman los valores de ambas variables
console.log(`La suma de las diagonales es ${sumaDiagonalIzquierdaDerecha + sumaDiagonalDerechaIzquierda}`);