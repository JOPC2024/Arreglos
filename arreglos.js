function arreglos(numEjer)
{
//Ejercicio 2 : Arreglos.
//Deberas realizar los ejercicios anexados abajo:
    if(Number.isInteger(numEjer))
    {
//1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.
        if(numEjer==1)
        {
            uno();
        }
//2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.
        else if(numEjer==2)
        {
            dos();
        }
//3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.
        else if(numEjer==3)
        {
            tres();
        }
    }
    else
    {
        alert('El ejercicio que escojiste no existe');
    }

    function uno()
    {
        let numeros = [];
        let aleatorio = 0;
        for(i=0; i<10; i++)
        {
            aleatorio = Math.round(Math.random() * 100);
            numeros.push(aleatorio);
        }
        alert('estos son los numeros que se generaron de forma aleatoria:\n'+numeros);
        console.log(numeros);
    }
    function dos()
    {
        let cadena = prompt("Favor de ingresar una serie de palabras separadas por , (coma)");
        let resultado = cadena.split(',');
        alert(resultado);
        console.log(resultado);
    }
    function tres()
    {
        let arreglo = [10,40,30,20,15,5];
        let corregido = arreglo.sort(function(a,b){return a - b});
        alert(corregido);
        
    }
}