/* Debera poder ingresar un dia de la semana
Debera poder compararlo con todos los dias de la semana
Debera evaluar si es un dia de semana y fin de semana mediante un mensaje similar a 'El dia es habil' sino 'El dia es fin de semana';
En caso de cnontrar el dia utilizar la sentencia break y terminar el for
*/

var diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes']
var diasFinDeSemana = ['Sabado', 'sabado', 'Domingo', 'domingo']

for (var i = 0; i < 4; i++) {
	
	var consulta = prompt('Por favor, ingrese un dia de la semana');
	var encontrado = false;

	for (var j = 0; j < diasSemana.length; j++) {
	
		if(consulta == diasSemana[j]){ //puede ser que tenga que cambiar i por otra cosa?//
		 encontrado = true;
		 alert('El día elegido es dia de semana');
		 break;
		}
	}

	if (!encontrado) {
		for (var j = 0; j < diasFinDeSemana.length; j++) {
			if(consulta == diasFinDeSemana[j]){ //puede ser que tenga que cambiar i por otra cosa?//
			encontrado = true;
			alert('El día elegido es dia de FIN semana');
			break;
			}
		}
	}

	if (!encontrado){
		alert('Usted ingresó cualquier cosa.');
	}
};







