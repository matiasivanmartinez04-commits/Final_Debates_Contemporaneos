// NAVEGACIÓN
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.seccion').forEach(s => s.classList.remove('activa'));
        
        btn.classList.add('active');
        document.getElementById(btn.dataset.target).classList.add('activa');
    });
});

// BASE DE DATOS DEL JUEGO (Las 3 Historias)
const baseHistorias = {
    fatima: {
        nombre: "Fátima (16 años) - La Pampa",
        escenarios: [
            {
                texto: "Durante una lectura en voz alta, los compañeros imitan burlescamente el acento guaraní de Fátima y le dicen que 'se vuelva a su país'.",
                cartas: [
                    {
                        opcion: "Bajar la cabeza, no leer más en público e intentar forzar el acento pampeano.",
                        consec: "Fátima pierde su identidad cultural y se encierra en sí misma. La escuela permite que gane la intolerancia.",
                        teoria: "Edmund Leach: El curso la trata como al 'Otro inferior'. Hay violencia simbólica y xenofobia. El INADI señala a la escuela como el principal foco de discriminación (41%)."
                    },
                    {
                        opcion: "Estallar de rabia, insultarlos y empujar a uno de los acosadores.",
                        consec: "La institución suspende a Fátima por violencia física, ignorando el acoso verbal previo que ella sufrió.",
                        teoria: "Se criminaliza a la víctima. No se aplica la Guía Provincial de Intervención. Falla el abordaje de convivencia escolar y el sistema le da la espalda."
                    },
                    {
                        opcion: "Acudir a la profesora de literatura y exigir que se hable del tema.",
                        consec: "La profesora detiene la clase y utiliza el espacio para reflexionar sobre diversidad cultural, frenando la discriminación.",
                        teoria: "Aplicación exitosa de la ESI (Ley 26.150). Se trabaja el respeto a la diversidad y se desarman los estereotipos discriminatorios."
                    }
                ]
            },
            {
                texto: "La madre de Fátima pierde el empleo. Fátima debe limpiar casas de madrugada. Falta mucho a clases por agotamiento.",
                cartas: [
                    {
                        opcion: "Dejar la escuela silenciosamente. Nadie pregunta por qué.",
                        consec: "Deserción escolar. Fátima queda atrapada en el trabajo precarizado.",
                        teoria: "Rita Segato: Ocurre una 'Pedagogía de la crueldad' por parte del Estado y la escuela, siendo insensibles al sufrimiento y la pobreza del otro."
                    },
                    {
                        opcion: "La escuela nota las faltas, llama a Fátima e interviene con el Ministerio de Desarrollo Social.",
                        consec: "Fátima recibe una beca de retención y asistencia familiar, logrando seguir estudiando.",
                        teoria: "Paradigma de Derechos Humanos (Kuhn). El Estado actúa como garante de derechos, entendiendo el problema como una cuestión social y no como un fracaso individual."
                    }
                ]
            }
        ]
    },
    martina: {
        nombre: "Martina (17 años) - Colegio Privado",
        escenarios: [
            {
                texto: "El novio mayor de Martina le exige sus contraseñas de Instagram 'porque no hay secretos entre ellos' y se enoja si sale con sus amigas.",
                cartas: [
                    {
                        opcion: "Martina le da las contraseñas para evitar peleas, creyendo que es una prueba de amor.",
                        consec: "Él comienza a aislarla de su entorno. Martina pierde su privacidad y sus amistades.",
                        teoria: "Micromachismo Coercitivo (Luis Bonino): Uso de la fuerza psicológica para retener poder, invadir la intimidad y monopolizar el espacio y tiempo de la mujer."
                    },
                    {
                        opcion: "Martina le dice que no y termina la relación. Él se ofende, se hace la víctima y le dice que ella está 'loca'.",
                        consec: "Aunque es doloroso, Martina logra salir de la relación tóxica antes de que escale.",
                        teoria: "Micromachismo de Crisis (Luis Bonino): Frente a la resistencia de la mujer, el varón finge ser la víctima o la tilda de inestable para recuperar el control (Gaslighting)."
                    }
                ]
            },
            {
                texto: "Un supuesto 'fotógrafo' contacta a Martina por redes, le promete volverla modelo, pero empieza a exigirle fotos íntimas amenazándola con arruinar su reputación.",
                cartas: [
                    {
                        opcion: "Martina borra sus redes y se encierra por culpa, sintiendo que ella provocó la situación.",
                        consec: "Cae en una depresión severa por miedo al estigma. El acosador queda impune.",
                        teoria: "Violencia Simbólica (Silvia Chejter): El sistema culpa a la víctima (cultura de la violación). Es un caso claro de Grooming donde el silencio favorece al abusador."
                    },
                    {
                        opcion: "Confiesa la situación a sus padres y al colegio para radicar una denuncia penal.",
                        consec: "Se activa el protocolo digital. Martina recibe apoyo psicológico y se denuncia la red de sextorsión.",
                        teoria: "Se rompe el mandato de silencio. La escuela aplica prevención de Ciberdelitos y Grooming, protegiendo la Salud Mental de Martina."
                    }
                ]
            }
        ]
    },
    lautaro: {
        nombre: "Lautaro (15 años) - Conurbano",
        escenarios: [
            {
                texto: "En el barrio le exigen que pelee a golpes para demostrar 'que es bien hombre'. A Lautaro no le gusta pelear, pero si no lo hace, le dicen insultos homofóbicos.",
                cartas: [
                    {
                        opcion: "Se niega a pelear y baja la mirada, aguantando las burlas en silencio.",
                        consec: "El grupo lo excluye y lo humilla constantemente. Lautaro se reprime emocionalmente.",
                        teoria: "Poder Hegemónico y Androcentrismo: Se le exige cumplir con la masculinidad hegemónica (fuerza, violencia, nula emoción). Al no cumplirla, es castigado socialmente."
                    },
                    {
                        opcion: "Para demostrar que es 'hombre', pelea ferozmente y lastima a otro chico.",
                        consec: "La escuela lo expulsa. Lautaro aprende que la violencia es el único idioma válido.",
                        teoria: "La escuela actúa de manera punitiva sin ver el problema de fondo: la pedagogía de la crueldad y la presión del patriarcado sobre los varones jóvenes."
                    }
                ]
            },
            {
                texto: "Lautaro está muy mal: no rinde en la escuela, regala sus pertenencias más preciadas (como su camiseta de fútbol), dejó de hablar y duerme todo el día.",
                cartas: [
                    {
                        opcion: "Los profesores creen que es un 'vago' y lo amonestan. En la casa le gritan para que sea fuerte.",
                        consec: "Lautaro siente que su vida no vale nada y que no tiene salida. A los pocos días, la escuela recibe la trágica noticia: Lautaro se suicidó.",
                        teoria: "FIN DEL JUEGO. Masculinización del riesgo (Suicidio Adolescente): El mandato machista de 'no llorar' aísla a los varones. Se ignoraron las señales claras (regalar cosas, aislamiento). Mito derribado: el que se va a matar NO siempre avisa con claridad, avisa con estas conductas."
                    },
                    {
                        opcion: "Un profesor aplica ESI y la Ley de Salud Mental: interviene, lo escucha sin juzgar y contacta equipos de apoyo.",
                        consec: "Lautaro, aunque reacciona con enojo al principio, termina llorando y pidiendo ayuda.",
                        teoria: "FIN DEL JUEGO. La Ley 26.657 y Ley 27.130 demuestran que HABLAR sobre el sufrimiento previene el suicidio. El dolor mental NO es un estado inmodificable."
                    }
                ]
            }
        ]
    }
};

let personajeActual = '';
let pasoActual = 0;

function iniciarJuego(personaje) {
    personajeActual = personaje;
    pasoActual = 0;
    
    document.getElementById('seleccion-personaje').classList.add('oculto');
    document.getElementById('escenario-juego').classList.remove('oculto');
    document.getElementById('personaje-nombre').innerText = baseHistorias[personaje].nombre;
    
    renderizarEscenario();
}

function renderizarEscenario() {
    const escenario = baseHistorias[personajeActual].escenarios[pasoActual];
    document.getElementById('historia-texto').innerText = escenario.texto;
    document.getElementById('consecuencia-container').classList.add('oculto');
    
    const contenedorCartas = document.getElementById('cartas-container');
    contenedorCartas.innerHTML = '';
    
    escenario.cartas.forEach((carta, index) => {
        const btn = document.createElement('div');
        btn.className = 'carta-opcion';
        btn.innerText = carta.opcion;
        btn.onclick = () => mostrarConsecuencia(carta);
        contenedorCartas.appendChild(btn);
    });
}

function mostrarConsecuencia(carta) {
    document.getElementById('cartas-container').innerHTML = ''; // Limpiar cartas
    
    document.getElementById('consecuencia-texto').innerText = carta.consec;
    document.getElementById('teoria-texto').innerText = carta.teoria;
    document.getElementById('consecuencia-container').classList.remove('oculto');

    const btnContinuar = document.getElementById('btn-continuar');
    
    // CASO ESPECIAL: MENSAJE DE PREVENCIÓN DEL SUICIDIO
    if (carta.teoria.includes("FIN DEL JUEGO")) {
        btnContinuar.innerText = "Ver Mensaje de Cierre";
        btnContinuar.onclick = mostrarMensajeFinal;
    } else {
        btnContinuar.innerText = "Siguiente Problema";
        btnContinuar.onclick = avanzarEscenario;
    }
}

function avanzarEscenario() {
    pasoActual++;
    if (pasoActual < baseHistorias[personajeActual].escenarios.length) {
        renderizarEscenario();
    } else {
        terminarHistoria();
    }
}

function terminarHistoria() {
    alert("Has terminado la trayectoria de este estudiante. La escuela y las decisiones del entorno marcan la diferencia.");
    volverMenuJuego();
}

function mostrarMensajeFinal() {
    const contenedorCartas = document.getElementById('cartas-container');
    contenedorCartas.innerHTML = `
        <div style="grid-column: 1 / -1; background-color: #1F2937; color: white; padding: 2rem; border-radius: 10px; text-align: center;">
            <h2 style="color: #F87171; margin-bottom: 1rem;"><i class="fas fa-exclamation-triangle"></i> El suicidio se puede prevenir</h2>
            <p style="margin-bottom: 1rem;">La historia de Lautaro refleja la <strong>masculinización del riesgo</strong> y la falla de las redes de contención. Hablar salva vidas. No juzgar salva vidas.</p>
            <p>Si vos o alguien que conocés está atravesando una crisis, el Estado debe garantizar tu derecho a la Salud Mental (Ley 26.657).</p>
            <h3 style="margin-top: 1.5rem; color: #34D399;">Líneas gratuitas y confidenciales (24 hs):</h3>
            <ul style="list-style: none; margin-top: 1rem; font-size: 1.2rem; font-weight: bold;">
                <li>📞 Línea 135 (Centro de Asistencia al Suicida)</li>
                <li>📞 0800-345-1435 (Todo el país)</li>
                <li>📞 Línea 136 / 132 (Provincia de La Pampa)</li>
                <li>🚨 Ante emergencias inminentes: 911</li>
            </ul>
            <button class="btn-primary" onclick="volverMenuJuego()" style="margin-top: 2rem;">Volver al Menú</button>
        </div>
    `;
    document.getElementById('consecuencia-container').classList.add('oculto');
    document.getElementById('historia-texto').innerText = "Fin de la historia.";
}

function volverMenuJuego() {
    document.getElementById('escenario-juego').classList.add('oculto');
    document.getElementById('seleccion-personaje').classList.remove('oculto');
}
