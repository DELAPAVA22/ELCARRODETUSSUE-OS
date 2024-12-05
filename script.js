// Objeto de datos de los autos, con múltiples opciones de imágenes y nombres
const carData = {
  A: [
    { name: "Mazda 2", image: "imagenes/a1.png" },
    { name: "Nissan March", image: "imagenes/a2.png" },
    { name: "Volkswagen Gol", image: "imagenes/a3.png" },
  ],
  B: [
    { name: "Honda Accord", image: "imagenes/b1.png" },
    { name: "Mazda 6", image: "imagenes/b2.png" },
    { name: "Toyota Camry", image: "imagenes/b3.png" },
  ],
  C: [
    { name: "Toyota Highlander", image: "imagenes/c1.png" },
    { name: "Dodge Journey", image: "imagenes/c2.png" },
    { name: "Mazda CX-9", image: "imagenes/c3.png" },
  ],
  D: [
    { name: "Jeep Wrangler", image: "imagenes/d1.png" },
    { name: "Jeep Cherooke", image: "imagenes/d2.png" },
    { name: "Toyota 4Runner", image: "imagenes/d3.png" },
  ],
  E: [
    { name: "Mazda MX-5", image: "imagenes/e1.png" },
    { name: "Ford Mustang", image: "imagenes/e2.png" },
    { name: "Mazda MX-5", image: "imagenes/e3.png" },
  ],
};

function calculateResult() {
  const answers = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  const form = document.getElementById("quizForm");
  const formData = new FormData(form);

  // Contabilizar respuestas
  for (let [_, value] of formData.entries()) {
    if (answers[value] !== undefined) {
      answers[value]++;
    }
  }

  // Determinar la respuesta con mayor frecuencia
  let maxAnswer = "A";
  for (let key in answers) {
    if (answers[key] > answers[maxAnswer]) {
      maxAnswer = key;
    }
  }

  // Mostrar el resultado del auto
  const result = document.getElementById("result");
  const carImage = document.getElementById("carImage");

  if (answers[maxAnswer] === 0) {
    result.innerText = "Por favor, responde todas las preguntas.";
    carImage.style.display = "none";
  } else {
    // Seleccionar aleatoriamente una opción de auto dentro de la categoría
    const carOptions = carData[maxAnswer];
    const selectedCar =
      carOptions[Math.floor(Math.random() * carOptions.length)];

    // Mostrar el nombre y la imagen del auto
    result.innerText = `Tu auto ideal es: ${selectedCar.name}`;
    carImage.src = selectedCar.image;
    carImage.style.display = "block";
  }
}
