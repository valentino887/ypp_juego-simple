var currentQuestion = 0;
var correctAnswers = [true, false, true, false, true]; // Alternar respuestas correctas

function escribirEnPantalla(texto) {
    let arr = texto.split("");
    let i = 0;
    let intervalo = setInterval(function() {
        if (i >= arr.length) {
            clearInterval(intervalo);
        } else {
            document.getElementById("titulo").innerHTML += arr[i];
            i++;
        }
    }, 60);
}

escribirEnPantalla("Bienvenido a un juego simple");

function checkAnswer(isTR1) {
    if (correctAnswers[currentQuestion] === isTR1) {
        alert("Bien hecho, respuesta correcta. Puede pasar a la siguiente pregunta.");
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            alert("¡Felicidades! Has completado todas las preguntas.");
        }
    } else {
        alert("Respuesta incorrecta.");
    }
}

function R1() {
    checkAnswer(true);
}

function R2() {
    checkAnswer(false);
}

var questions = [
    "Primera pregunta: ¿Cual es la capital de Francia?",
    "Segunda pregunta: ¿Cual es el planeta mas cercano al sol?",
    "Tercera pregunta: ¿Cuanto es 5 x 5?",
    "Cuarta pregunta: ¿El agua hierve a 50 grados Celsius?",
    "Quinta pregunta: ¿Cual es el animal terrestre más rápido?"
];

var answers = [
    ["París", "Madrid"],
    ["Mercurio", "Venus"],
    ["25", "30"],
    ["Sí", "No"],
    ["Guepardo", "León"]
];

function showQuestion() {
    let titulo = document.getElementById("titulo");
    titulo.innerHTML = "";
    escribirEnPantalla(questions[currentQuestion]);
    document.getElementById("Respuesta1").value = answers[currentQuestion][0];
    document.getElementById("Respuesta2").value = answers[currentQuestion][1];
}

function comenzar() {
    currentQuestion = 0;
    showQuestion();
}

document.getElementById("comenzar").addEventListener("click", comenzar);
document.getElementById("Respuesta1").addEventListener("click", R1);
document.getElementById("Respuesta2").addEventListener("click", R2);
