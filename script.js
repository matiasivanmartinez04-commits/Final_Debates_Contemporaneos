// Navegación entre secciones
function mostrarSeccion(idSeccion) {
    document.querySelectorAll('.seccion').forEach(sec => {
        sec.classList.remove('activa');
    });
    document.getElementById(idSeccion).classList.add('activa');
}

// Base de datos de preguntas para el Juego de Estudio
const preguntas = [
    {
        pregunta: '¿Qué autor diferencia entre lo "natural" y las construcciones socioculturales "normales"?[cite: 1]',
        opciones: ['Edmund Leach', 'Luis Bonino', 'Josep Vicent Marqués', 'Thomas Kuhn'],
        correcta: 2,
        explicacion: 'Vicent Marqués postula que gran parte de lo que consideramos "natural" son construcciones sociales.'
    },
    {
        pregunta: 'Según Luis Bonino, las actitudes manipuladoras y la creación de falta de intimidad pertenecen a los micromachismos...',
        opciones: ['Utilitarios', 'Encubiertos', 'Coercitivos', 'De crisis'],
        correcta: 1,
        explicacion: 'Los micromachismos encubiertos son insidiosos, incluyen manipulación y paternalismo que hacen dudar a la mujer.'
    },
    {
        pregunta: '¿Qué concepto acuña Rita Segato respecto a la insensibilidad ante el sufrimiento ajeno programada por el sistema?[cite: 1]',
        opciones: ['Violencia simbólica', 'Micromachismo coercitivo', 'Alteridad', 'Contrapedagogías de la crueldad'],
        correcta: 3,
        explicacion: 'Segato habla de las contrapedagogías de la crueldad, exigiendo empatía como mecanismo de resistencia.'
    },
    {
        pregunta: 'Según la Ley Nacional de Salud Mental (N° 26.657), el padecimiento mental debe considerarse...[cite: 3]',
        opciones: ['Un estado inmodificable de por vida.', 'Un diagnóstico que justifica la exclusión educativa.', 'Una situación transitoria que requiere abordaje comunitario.', 'Un problema exclusivamente psiquiátrico.'],
        correcta: 2,
        explicacion: 'La Ley 26.657 establece que los padecimientos mentales no son inmodificables y prohíbe la discriminación.'
    },
    {
        pregunta: 'Frente al riesgo suicida adolescente, la evidencia epidemiológica y legal (Ley 27.130) demuestra que:[cite: 2]',
        opciones: ['Hablar del tema "da ideas" y debe evitarse.', 'Hablar de suicidio de manera empática facilita el pedido de ayuda.', 'Solo afecta a adolescentes de contextos marginales.', 'Los que avisan nunca lo concretan.'],
        correcta: 1,
        explicacion: 'Es un mito que hablar incita al suicidio. Hablar responsablemente es la principal herramienta de prevención.'
    }
];

let preguntaActual = 0;
let puntaje = 0;

const txtPregunta = document.getElementById('pregunta-texto');
const contOpciones = document.getElementById('opciones-contenedor');
const txtFeedback = document.getElementById('resultado-feedback');
const btnSiguiente = document.getElementById('btn-siguiente');
const contQuiz = document.getElementById('contenedor-quiz');
const contResultado = document.getElementById('resultado-final');
const txtPuntaje = document.getElementById('puntaje-texto');

function cargarPregunta() {
    const q = preguntas[preguntaActual];
    txtPregunta.innerText = q.pregunta;
    contOpciones.innerHTML = '';
    txtFeedback.innerText = '';
    btnSiguiente.style.display = 'none';

    q.opciones.forEach((opcion, index) => {
        const btn = document.createElement('button');
        btn.innerText = opcion;
        btn.classList.add('opcion-btn');
        btn.onclick = () => verificarRespuesta(index, btn);
        contOpciones.appendChild(btn);
    });
}

function verificarRespuesta(indexSeleccionado, botonElement) {
    const q = preguntas[preguntaActual];
    const botones = contOpciones.querySelectorAll('.opcion-btn');
    
    // Deshabilitar todos los botones después de elegir
    botones.forEach(btn => btn.disabled = true);

    if (indexSeleccionado === q.correcta) {
        botonElement.classList.add('correcta');
        txtFeedback.innerText = '¡Correcto! ' + q.explicacion;
        txtFeedback.style.color = '#2ed573';
        puntaje++;
    } else {
        botonElement.classList.add('incorrecta');
        botones[q.correcta].classList.add('correcta');
        txtFeedback.innerText = 'Incorrecto. ' + q.explicacion;
        txtFeedback.style.color = '#ff4757';
    }

    btnSiguiente.style.display = 'block';
}

function siguientePregunta() {
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
        cargarPregunta();
    } else {
        mostrarResultadoFinal();
    }
}

function mostrarResultadoFinal() {
    contQuiz.classList.add('oculta');
    contResultado.classList.remove('oculta');
    txtPuntaje.innerText = `Obtuviste ${puntaje} de ${preguntas.length} respuestas correctas.`;
}

function reiniciarJuego() {
    preguntaActual = 0;
    puntaje = 0;
    contResultado.classList.add('oculta');
    contQuiz.classList.remove('oculta');
    cargarPregunta();
}

// Inicializar el juego al cargar
cargarPregunta();
