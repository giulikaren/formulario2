document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault(); 
  
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  
    const datos = {
      nombre,
      apellido,
      fechaNacimiento,
    };
  
    const URL = " https://jsonplaceholder.typicode.com/users"; 
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Respuesta del servidor:", result);
        alert("Datos enviados con éxito."); 
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("Hubo un error al enviar los datos."); 
      });
  });
