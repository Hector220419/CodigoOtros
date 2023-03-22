const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const username = 'stolinski';  // Creamos el usuario para cambiarlo de manera mas optimizada
//const username = 'Hector220419';
const $n = document.getElementById('name');
const $b = document.getElementById('blog');
const $l = document.getElementById('location'); // Agregamos location en el html

// Primero que nada definimos la funcion como asincrona, ya que utilizamos el await
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const valuesJson = await response.json(); // esperamos que se conecte y cuando se conecte, que nos genere el json de los datos
  return valuesJson; // retornamos los valores en formato json
}

displayUser(username).then(data =>{
  // Esta promesa se resuelve con la informacion ya guardada previamente y coloca los valores en los id llamados desde el DOM
    $n.textContent = data.name;
    $b.textContent = data.blog;
    $l.textContent = data.location;
    console.log(data);
}).catch(handleError)  // Mnadamos a llamar a la funcion creada para el error;

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}
