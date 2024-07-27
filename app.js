let texto;


function limpiarCaja(){
    document.querySelector('#userText').value = '';
    return;
}

function validarTexto(texto) {
    //Definimos una expresión regular que verifica que solo haya letras minúsculas sin acentos y sin caracteres especiales
    const expresionRegular = /^[a-z\s!?¡¿,ñ.:]+$/;
    return expresionRegular.test(texto);
}

function mostrarBoton(){
    document.getElementById('copiar').style.display = 'block';
}

function ocultarBoton(){
    document.getElementById('copiar').style.display = 'none';
}

function ocultarAdvertencia(){
    document.getElementById('figura').style.display = 'none';
    document.getElementById('paragraphOne').style.display = 'none';
    document.getElementById('paragraphTwo').style.display = 'none';
}
function mostrarAdvertencia(){
    document.getElementById('figura').style.display = 'block';
    document.getElementById('paragraphOne').style.display = 'block';
    document.getElementById('paragraphTwo').style.display = 'block';
}

function encriptarTexto() {
    let textoUsuario = document.getElementById('userText').value;
    if(textoUsuario === null || textoUsuario === undefined || textoUsuario.trim() === ''){
        asignarTextoElemento('h1','');
        mostrarAdvertencia();
        ocultarBoton();
    }
    else{
        if(validarTexto(textoUsuario)){
            let textoEncriptado = textoUsuario.replace(/e/g, 'enter')
                        .replace(/i/g, 'imes')
                        .replace(/a/g, 'ai')
                        .replace(/o/g, 'ober')
                        .replace(/u/g, 'ufat');
            texto = textoEncriptado;
            asignarTextoElemento('h1', textoEncriptado);
            ocultarAdvertencia();
            mostrarBoton();
        }
        else{
            asignarTextoElemento('h1','Texto no válido');
            mostrarAdvertencia();
            ocultarBoton();
            return;
        }
    }
}

function desencriptarTexto() {
    let textoEncriptado = document.getElementById('userText').value;
    if(textoEncriptado === null || textoEncriptado === undefined || textoEncriptado.trim() === ''){
        asignarTextoElemento('h1','');
        mostrarAdvertencia();
        ocultarBoton();
    }
    else{
        if(validarTexto(textoEncriptado)){
            let textoDesencriptado = textoEncriptado.replace(/enter/g, 'e')
                        .replace(/imes/g, 'i')
                        .replace(/ai/g, 'a')
                        .replace(/ober/g, 'o')
                        .replace(/ufat/g, 'u');
                texto = textoDesencriptado;
                asignarTextoElemento('h1', textoDesencriptado);
                ocultarAdvertencia();
                mostrarBoton();
            }
            else{
                asignarTextoElemento('h1','Texto no válido');
                mostrarAdvertencia();
                ocultarBoton();
                return;
            }
    }
}

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function copiarTexto(){
    texto = document.getElementById('outputText').innerText;
    console.log(texto);
    // Usa la API de Portapapeles moderna
    navigator.clipboard.writeText(texto).then(function() {
        alert('Texto copiado al portapapeles');
    }).catch(function(error) {
        console.error('Error al copiar el texto: ', error);
    });
    return;
}

document.addEventListener('input', function (event) {
    if (event.target.tagName.toLowerCase() !== 'textarea') return;
    autoExpand(event.target);
}, false);


function autoExpand(field) {
    // Restablecer la altura del textarea
    field.style.height = 'inherit';

    // Obtener el estilo computado
    const computed = window.getComputedStyle(field);

    // Calcular la altura
    const height = parseInt(computed.getPropertyValue('border-top-width'), 10)
                 + parseInt(computed.getPropertyValue('padding-top'), 10)
                 + field.scrollHeight
                 + parseInt(computed.getPropertyValue('padding-bottom'), 10)
                 + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

    field.style.height = height + 'px';
}
limpiarCaja();
ocultarBoton();