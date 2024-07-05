/*Funcion para que cuando se seleccione una cancion del <select><option> la cambie y reproduzca*/
function cambiarTrack(track) {
   var path =  track.getAttribute("path") //Trae el elemento del path por el cual se va a cambiar
   viejo_audio = document.getElementById("reproductor")
   /*Se va a manejar como una clase padre y sus hijos*/
   audio_padre = viejo_audio.parentNode
   audio_padre.removeChild(viejo_audio) /*El padre remueve la seleccion anterior*/
   nuevo_audio = document.createElement("audio") /*Se crea un elemento audio para poder reproducir la musica como lo conocemos*/
   nuevo_audio.setAttribute("id","reproductor")
   nuevo_audio.setAttribute("controls", "controls")
   source = document.createElement("source") /*Para poder introcudir las refrencias a las canciones*/
   source.setAttribute("src", path)
   source.setAttribute("type", "audio/mpeg")
   source.setAttribute("id", "reproductorSource")
   nuevo_audio.appendChild(source) 
   audio_padre.appendChild(nuevo_audio)}
   //Funcion para cargar los elementos de reproductor que premitira que se escuchen las canciones
function cargarReproductor() { /*Elementos que puede ver el usuario*/
         var select = document.getElementById("selectTrack")
         var path = select.options[0].getAttribute("path") /*Saber que opcion ha seleccionado*/
   nuevo_audio = document.createElement("audio")/*Creacion del elemento audio*/
   nuevo_audio.setAttribute("id","reproductor")
   nuevo_audio.setAttribute("controls", "controls")       
   source = document.createElement("source")
   source.setAttribute("src", path)
   source.setAttribute("type", "audio/mpeg")
   source.setAttribute("id", "reproductorSource")
   nuevo_audio.appendChild(source)
   padre = document.getElementById("reproductorBox")
   padre.appendChild(nuevo_audio)
}