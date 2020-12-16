// Tu código aquí
let button = document.querySelector ('.btn')

button.addEventListener('click',cambiarColor)

function cambiarColor(){

    //conseguir hexadecimal aleatorio
    let hex_array = ['1', '2', '3', '4','5','6','7','8','9','A','B','C','D','E','F']
    let hex_code =''

    for (let i=0; i<6;i++){
        var randomHex = Math.floor(Math.random()* hex_array.length)
        hex_code += hex_array[randomHex]
    }

//id hex-value muestre el hexadecimal
    let value = document.querySelector ('#hex-value')
    value.textContent = "#" + hex_code

//conseguir que ese hexadecimal aleatorio sea my background color.
    let body = document.querySelector ('body')
    body.style.backgroundColor = value.textContent
}



//OTRAS PRUEBAS --- solo crea un color aleatorio.

//conseguir hexadecimal aleatorio
//let hexadecimal = Math.floor(Math.random()*16777215).toString(16)

//conseguir que ese hexadecimal aleatorio sea my background color.
//id hex-value muestre el hexadecimal

// function cambiarColor(){
//     let body = document.querySelector ('body')
//     body.style.backgroundColor = "#" + hexadecimal
//     let value = document.querySelector ('#hex-value')
//     value.textContent = "#" + hexadecimal
// }



