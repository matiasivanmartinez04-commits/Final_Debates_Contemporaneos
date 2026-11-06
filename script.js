/* ============================================================
   Debates Contemporáneos — script.js
   Quiz múltiple + Flashcards + Memorizar parejas
   + menú móvil + buscador de leyes. Sin dependencias.
   ============================================================ */

/* ---------------- DATOS: QUIZ ---------------- */
const QUIZ = [
  {u:"U1", q:'Según Vincent Marqués, los nombres, apellidos y horarios cotidianos son…', o:['Hechos naturales, dictados por la biología','Convenciones sociales que podrían ser de otra manera','Azar puro sin ningún sentido','Leyes del Estado'], a:1, e:'Marqués: casi todo podría ser de otra manera — "veamos si es bueno o no, porque natural no es".'},
  {u:"U1", q:'La frase "veamos si es bueno o no, porque natural no es" pertenece a…', o:['Edmund Leach','Thomas Kuhn','Vincent Marqués','Rita Segato'], a:2, e:'Es la idea-force del cap. 1 de "No es natural" (1982).'},
  {u:"U1", q:'Para Leach, la violencia entre humanos…', o:['Es un instinto heredado de los animales','Es consecuencia de clasificar al "otro" con las palabras','Se explica por la genética de cada raza','Es un fenómeno solo moderno'], a:1, e:'Leach: usamos las palabras para convertir al que es distinto en "otra especie" y entonces lo tememos.'},
  {u:"U1", q:'Leach critica la familia nuclear aislada porque…', o:['Es demasiado numerosa','Genera soledad, miedo y violencia','No existe en Inglaterra','Es una invención del comunismo'], a:1, e:'Padres e hijos aislados "se piden demasiado": el aislamiento es fuente del miedo y la violencia.'},
  {u:"U1", q:'¿Cuál es el orden correcto de los estadios científicos según Kuhn?', o:['Crisis → Pre-ciencia → Revolución → Ciencia normal','Pre-ciencia → Ciencia normal → Crisis → Revolución → Nueva ciencia normal','Ciencia normal → Pre-ciencia → Revolución → Crisis','Revolución → Crisis → Ciencia normal → Pre-ciencia'], a:1, e:'Así lo lista el apunte de cátedra (Soncini) basado en Kuhn.'},
  {u:"U1", q:'En el estadio de CRISIS (Kuhn) ocurre que…', o:['Todos los científicos acuerdan un único paradigma','Aparecen anomalías que el paradigma vigente no resuelve','Se abandona toda investigación','El Estado financia más ciencia'], a:1, e:'Las anomalías hacen dudar a una minoría que innova: hay tensiones por financiamiento, poder y visibilidad.'},
  {u:"U1", q:'Un ejemplo histórico de REVOLUCIÓN científica en el apunte es…', o:['La aceptación de la ciencia moderna-positivista (s. XVIII)','La antigua Grecia','La prehistoria','La investigación cualitativa actual'], a:0, e:'Se abandona el paradigma anterior y se adhiere a uno nuevo (Copérnico, Galileo, Kepler en la crisis previa).'},
  {u:"U1", q:'Según Velásquez, el paradigma moderno-positivista se caracteriza por…', o:['Verdades situadas y multiperspectivismo','Verdad única, objetividad y método universal','Rechazar el método científico','Negar la realidad material'], a:1, e:'La postmodernidad, en cambio, cuestiona los "grandes relatos" y sostiene verdades situadas.'},
  {u:"U1", q:'La alteridad significa…', o:['Rechazo a lo diferente','Relación con el "otro" que permite construir la propia identidad','Igualdad absoluta entre personas','Una teoría económica'], a:1, e:'La conciencia del otro permite la mismidad: "se descubre la identidad al observar la diversidad del otro".'},
  {u:"U1", q:'La diferencia entre etnocidio y genocidio es…', o:['Son sinónimos','Etnocidio destruye la cultura; genocidio, a las personas físicamente','Genocidio es solo cultural','Etnocidio solo ocurre en guerras'], a:1, e:'Campo (2008): Hitler con los judíos = genocidio; prohibir lenguas/costumbres = etnocidio.'},
  {u:"U1", q:'En antropología cultural, el término "raza"…', o:['Es el más usado hoy','Se usa solo para animales','Ya no se utiliza (se prefiere etnia)','Significa etnicidad'], a:2, e:'Quedó asociado a las teorías racistas; es apropiado para especies animales.'},
  {u:"U1", q:'Un estereotipo es…', o:['Una ley nacional','Una imagen simplista y prejuiciosa de un grupo','Un tipo de escuela','Una estrategia de lenguaje inclusivo'], a:1, e:'Ej. de la cátedra: "todo rockero es borracho, drogadicto y satánico".'},
  {u:"U2", q:'El género se define como…', o:['Sinónimo de sexo biológico','Construcción social y cultural vinculada al sexo biológico','Una categoría solo jurídica','La orientación sexual'], a:1, e:'Lo esperado de "ser mujer" o "ser varón" cambia entre culturas y épocas: es social, no natural.'},
  {u:"U2", q:'La identidad de género es…', o:['La vivencia interna del cuerpo tal como se lo siente','Cómo vista soy percibida','A quién amo','Mis cromosomas'], a:0, e:'Lo define la Ley 26.743: identidad autopercibida, independiente del sexo asignado al nacer.'},
  {u:"U2", q:'La expresión de género es…', o:['Cómo lo muestro al mundo (ropa, gestos, voz, roles)','Siempre igual a la identidad','Lo mismo que orientación','Un diagnóstico médico'], a:0, e:'Puede o no coincidir con las expectativas de los demás.'},
  {u:"U2", q:'La orientación sexual refiere a…', o:['La identidad interna','La atracción física, emocional, erótica y afectiva','El sexo asignado al nacer','Los roles domésticos'], a:1, e:'Es una de las 5 dimensiones de la rueda de la cátedra junto a sexo, género, identidad y expresión.'},
  {u:"U2", q:'Una persona cisgénero es aquella cuya…', o:['Identidad de género coincide con su fenotipo sexual','Orientación es heterosexual','Expresión es andrógina','Identidad difiere del fenotipo'], a:0, e:'Lo opuesto es transgénero. Término del campo interdisciplinario de estudios de género.'},
  {u:"U2", q:'La Ley 26.150 (ESI, 2006) establece que…', o:['La educación sexual es opcional solo en escuelas privadas','Todos los educandos tienen derecho a recibir educación sexual integral','Solo se enseña biología','Es solo para nivel secundario'], a:1, e:'En establecimientos públicos y privados, articulando aspectos biológicos, psicológicos, sociales, afectivos y éticos.'},
  {u:"U2", q:'La Ley Micaela (27.499, 2018) dispone…', o:['Penar el femicidio con cárcel perpetua','Capacitación obligatoria en género para los tres poderes del Estado','Crear el Ministerio de Mujeres','Prohibir la publicidad sexista'], a:1, e:'En todos los niveles y jerarquías; autoridad de aplicación: el INAM. Homenaje a Micaela García.'},
  {u:"U2", q:'¿Cuál es la autoridad de aplicación de la Ley Micaela?', o:['El INADI','El Instituto Nacional de las Mujeres','La Corte Suprema','Cada municipio'], a:1, e:'Art. 3° de la ley.'},
  {u:"U2", q:'Para Teresa Meana, el masculino genérico ("los alumnos")…', o:['Es neutro y no tiene efectos','Invisibiliza a las mujeres','Debería prohibirse por ley siempre','Es un problema de ortografía'], a:1, e:'La lengua es androcéntrica: nombra lo masculino como si fuera lo humano. "¿Quién es el que manda?" (Alicia).'},
  {u:"U2", q:'La Resolución 200-19 de la UNLPam trata sobre…', o:['El calendario académico','El uso del lenguaje no sexista','Las cuotas de ingreso','Los aranceles'], a:1, e:'Institucionaliza en la universidad lo que Meana propone: lengua sin sexismo.'},
  {u:"U2", q:'La Ley 26.743 de Identidad de Género es del año…', o:['2010','2012','2018','2021'], a:1, e:'2012: permite el registro según la identidad de género autopercibida; modelo mundial.'},
  {u:"U2", q:'La Ley 25.673 (2002) creó…', o:['La ESI','El Programa Nacional de Salud Sexual y Procreación Responsable','El INAM','La Ley Micaela'], a:1, e:'La salud sexual como derecho: información, anticoncepción y atención sin discriminación.'},
  {u:"U2", q:'Según Josefina Fernández, la "crisis" del feminismo de los 80 la impulsó…', o:['La introducción del concepto de diferencia','El fin del socialismo','La ley de divorcio','La caída del muro'], a:0, e:'Las feministas negras y lesbianas denuncian que el sujeto universal era blanco, burgués y heterosexual; el postcolonialismo agrega la crítica al eurocentrismo.'},
  {u:"U3", q:'Chejter propone hablar de "las violencias" en plural porque…', o:['Suena mejor','Existen tipos y modalidades que comparten la desigualdad de poder','La RAE lo exige','Solo hay dos tipos'], a:1, e:'Doméstica, institucional, laboral, mediática, simbólica… nombrarlas evita naturalizarlas.'},
  {u:"U3", q:'Los tres tipos de micromachismos que describe Bonino son…', o:['Leves, medios y graves','Coercitivos, encubiertos y de crisis','Públicos, privados y digitales','Directos, indirectos y virtuales'], a:1, e:'Comportamientos "invisibles" de dominación en la pareja que erosionan la autonomía de las mujeres.'},
  {u:"U3", q:'El grooming es…', o:['Acoso entre estudiantes','Un adulto que se hace pasar por otro para ganarse la confianza de un menor en internet','Un virus informático','Una ley de protección'], a:1, e:'Delito tipificado por la Ley 26.904 (2013). Señales: secretismo, contactos mayores nuevos, regalos, pedidos de fotos.'},
  {u:"U3", q:'La llamada "pornovenganza" consiste en…', o:['Ver pornografia en exceso','Difundir contenido íntimo sin consentimiento para dañar','Un género cinematográfico','Una práctica legal entre adultos'], a:1, e:'Divulgación de imágenes/conversaciones de carácter sexual sin consentimiento: delito (reforma al art. 83 CP, ley 26.388).'},
  {u:"U3", q:'La Ley 26.485 (2009) es…', o:['La ley de ESI','La de Protección Integral para prevenir, sancionar y erradicar la violencia contra las mujeres','La ley de Salud Mental','La de trata de personas'], a:1, e:'Tipifica tipos y modalidades de violencia, incluida la simbólica (art. 6).'},
  {u:"U3", q:'La ley vigente de trata de personas es la…', o:['25.482','26.842 (2012)','27.372','26.904'], a:1, e:'26.842: reformó la 26.364, tipifica la trata (arts. 145 bis/ter CP) y prevé asistencia a víctimas. (Ojo: el TP escribió "25.482", pero ese número es otra ley.)'},
  {u:"U3", q:'La Ley 26.657 de Salud Mental (2010) sostiene que…', o:['El encierro es la mejor terapia','La salud mental es un derecho humano con abordaje integral','Las adicciones son delitos','La familia debe pagar el tratamiento'], a:1, e:'Prohíbe la cosificación y el encierro por defecto; es el marco para abordar adicciones. (Se sancionó en 2010, no 2013.)'},
  {u:"U3", q:'La OMS clasifica las drogas según sus efectos en…', o:['Lícitas e ilícitas solamente','Depresoras, estimulantes y alucinógenas','Blandas y duras','Legales e ilegales'], a:1, e:'Alcohol y tabaco — lícitos — encabezan daños reales, incluida la violencia vial.'},
  {u:"U4", q:'La Ley 26.061 (2005) establece que las niñas, niños y adolescentes son…', o:['Objetos de tutela del Estado','Sujetos plenos de derechos','Responsables penales a los 14','Propiedad de sus padres'], a:1, e:'Implementa la Convención de los Derechos del Niño: a ser oídos, identidad, salud, educación, familia, protección.'},
  {u:"U4", q:'La Ley Lucio (2023) busca…', o:['Bajar la edad de imputabilidad','Prevenir la violencia y el abuso en la infancia con capacitación obligatoria','Regular los videojuegos','Crear juzgados de familia'], a:1, e:'Nació tras el femicidio de Lucio Dupuy; incluye agravantes para delitos contra menores.'},
  {u:"U4", q:'La Ley 27.372 (2017) garantiza…', o:['El salario docente','Los derechos de las víctimas de delitos y violaciones de DDHH','La gratuidad universitaria','El voto a los 16'], a:1, e:'Víctimas directas e indirectas: no estar solas, acceder a la información de la causa y participar de los procedimientos.'},
  {u:"U4", q:'El modelo social de la discapacidad sostiene que…', o:['La discapacidad es una enfermedad a curar','El problema está en una sociedad que no se diseñó para todas las personas','Es falta de voluntad','Es un tema solo médico'], a:1, e:'Marco: la Convención sobre los Derechos de las Personas con Discapacidad (rango constitucional). INADI 2014.'},
  {u:"U4", q:'El Decálogo de e-derechos de UNICEF incluye…', o:['Internet gratis para todos','El derecho a la intimidad de las comunicaciones y a no exponer datos personales','Prohibir las redes sociales','La educación a distancia obligatoria'], a:1, e:'También: ocio sin violencia gratuita, contenidos adecuados y tecnología para el bien común.'},
  {u:"U4", q:'En la UNLPam, la violencia de género y el acoso se aborda según…', o:['La Res. 038/2021 (Protocolo de intervención)','La Res. 200-19','El estatuto del claustro','La Ley Micaela directamente'], a:0, e:'Protocolo de intervención institucional ante violencia de género, acoso sexual y discriminación de género.'},
  {u:"U5", q:'Melina Furman propone…', o:['Enseñar para repetir contenido','Enseñar para comprender: partir de problemas reales y dejar pensar al estudiante','Eliminar la escuela','Solo exámenes escritos'], a:1, e:'La clase como laboratorio de pensamiento: preguntar antes que copiar, error como oportunidad.'},
  {u:"U5", q:'La educación "bancaria" de Freire es aquella en la que…', o:['El Estado financia la escuela','El docente "deposita" contenido en alumnos pasivos','Se enseñan finanzas','Los alumnos eligen todo'], a:1, e:'Frente a ella, la pedagogía dialógica: se aprende dialogando desde la realidad de los estudiantes.'},
  {u:"U5", q:'La Noche de los Bastones Largos (1966) fue…', o:['Una fiesta universitaria','El desalojo violento de facultades de la UBA por la dictadura','Una reforma curricular','Una huelga docente pacífica'], a:1, e:'Icono: Facultad de Ciencias Exactas. Exilio masivo de científicos y un antes y después de la universidad pública.'},
  {u:"U5", q:'Incluir la educación como "servicio esencial" en el DNU (2023) plantea la tensión entre…', o:['Primaria vs. secundaria','El derecho a la escuela y el derecho de huelga docente','Público vs. privado','Nación vs. provincias'], a:1, e:'Analizalo con U1: ¿quién define qué es "esencial" y con qué intereses?'},
  {u:"DIF", q:'La IVE (Ley 27.610) permite interrumpir el embarazo…', o:['Sin límite de tiempo','Hasta la semana 12 de gestación','Solo con autorización judicial','Solo en hospitales privados'], a:1, e:'Hasta semana 12; la ILE (riesgo de vida/salud o violación) no tiene plazo y ya era legal desde el fallo F.A.L. (2012).'},
  {u:"DIF", q:'¿Cuál es la diferencia clave entre bullying, ciberbullying y grooming?', o:['Son sinónimos','Bullying entre pares presencial; ciberbullying el mismo acoso en digital; grooming un adulto que engaña a un menor online','Grooming es entre chicos','Ciberbullying solo pasa en escuelas'], a:1, e:'El grooming además es delito específico (Ley 26.904).'}
];

/* ---------------- DATOS: FLASHCARDS ---------------- */
const CARDS = [
  {u:'U1', f:'Lo NATURAL vs lo SOCIAL', b:'Natural: dado por la biología. Social: producido por la sociedad y la historia. Marqués: casi todo lo cotidiano (nombres, horarios, roles) es social, aunque se presente como natural.'},
  {u:'U1', f:'Lo NORMAL', b:'La norma que cada época y lugar presenta como "lo esperable" — y que excluye a quien no la cumple. Trampa: naturalizarlo ("siempre fue así").'},
  {u:'U1', f:'ALTERIDAD / OTREDAD', b:'Relación con el "otro": la conciencia del otro me permite construir mi identidad. Genera fascinación y rechazo a la vez (Campo, 2008).'},
  {u:'U1', f:'ESTEREOTIPO', b:'Ideas prejuiciosas (generalmente negativas) sobre un grupo; imagen simplista de personas o culturas. Ej.: "todo rockero es borracho y satánico".'},
  {u:'U1', f:'ETNIA vs RAZA', b:'Etnia: grupo con vínculos territoriales, culturales, fenotípicos e históricos compartidos; dinámica. "Raza": término desacreditado que la antropología cultural ya no usa.'},
  {u:'U1', f:'ETNOCIDIO vs GENOCIDIO', b:'Etnocidio: destrucción de la CULTURA de un grupo. Genocidio: eliminación FÍSICA deliberada (Hitler; Ruanda 1994).'},
  {u:'U1', f:'Diferencia / Diversidad / Desigualdad', b:'Diferencia: somos distintos. Diversidad: la variedad convive y se reconoce. Desigualdad: las diferencias se jerarquizan y dan menos derechos a algunos.'},
  {u:'U1', f:'LEACH: violencia humana', b:'No es instinto: nace de clasificar con las palabras a quien es distinto como "otra especie" → miedo → ataque. Crítica a la familia nuclear aislada (soledad/miedo).'},
  {u:'U1', f:'KUHN: los 5 estadios', b:'Pre-ciencia → Ciencia normal (un único paradigma) → Crisis (anomalías no resueltas) → Revolución científica (nuevo paradigma) → Nueva ciencia normal.'},
  {u:'U1', f:'KUHN: crisis', b:'Cuando el paradigma vigente no resuelve las anomalías. Una minoría innova y crece; tensiones por financiamiento, poder y visibilidad.'},
  {u:'U1', f:'VELÁSQUEZ: moderno vs postmoderno', b:'Moderno-positivista: verdad única, objetividad, método universal. Postmoderno-crítico: verdades situadas, multiperspectivismo, sospecha de los grandes relatos. La ciencia vive una transición.'},
  {u:'U1', f:'SEGATO: contrapedagogías', b:'La crueldad no nace: se enseña en la socialización (mandatos de masculinidad). Si es pedagógica, puede contra-enseñarse. La escuela reproduce o interrumpe.'},
  {u:'U1', f:'FREIRE: bancaria vs dialógica', b:'Bancaria: el docente deposita, el alumno pasivo. Dialógica: se aprende dialogando desde la realidad. Educar es un acto político.'},
  {u:'U2', f:'SEXO vs GÉNERO', b:'Sexo: biología (cromosomas, hormonas, gónadas, genitales). Género: construcción social y cultural vinculada a ese sexo — cambia entre culturas y épocas.'},
  {u:'U2', f:'IDENTIDAD de género', b:'La vivencia interna del cuerpo tal como se lo siente (y de corresponderse con lo que se siente). Ley 26.743 (2012): identidad autopercibida.'},
  {u:'U2', f:'EXPRESIÓN de género', b:'Cómo lo muestro al mundo: ropa, gestos, voz, roles, nombres. Puede o no coincidir con expectativas ajenas.'},
  {u:'U2', f:'ORIENTACIÓN sexual', b:'Atracción física, emocional, erótica y afectiva hacia otras personas (hetero-, bi-, homo-, pan-…).'},
  {u:'U2', f:'CISGÉNERO', b:'Persona cuya identidad de género coincide con su fenotipo sexual. Lo opuesto: transgénero. Neologismo de los estudios de género.'},
  {u:'U2', f:'LGBTTTIQA', b:'Lesbiana, Gay, Bisexual, Transgénero, Transexual, Travesti, Intersexual, Queer (+ más identidades). La bandera arcoíris: representación alegre de la diversidad.'},
  {u:'U2', f:'LEY 26.150 — ESI (2006)', b:'Todos los educandos tienen derecho a educación sexual integral (biológica, psicológica, social, afectiva y ética) en escuelas públicas y privadas, de inicial a superior. Responsabilidad del colectivo docente.'},
  {u:'U2', f:'LEY MICAELA — 27.499 (2018)', b:'Capacitación obligatoria en género y violencia contra las mujeres para los tres poderes del Estado. Autoridad de aplicación: INAM. Homenaje a Micaela García (2017).'},
  {u:'U2', f:'LEY 25.673 (2002)', b:'Programa Nacional de Salud Sexual y Procreación Responsable: la salud sexual como derecho; información, anticonceptivos y atención sin discriminación.'},
  {u:'U2', f:'MEANA: lengua y sexismo', b:'La lengua es androcéntrica: el masculino genérico invisibiliza. Estrategias: desdoblar ("las y los"), feminizar profesiones, colectivos ("el estudiantado"). En UNLPam: Res. 200-19.'},
  {u:'U2', f:'FERNÁNDEZ: igualdad vs diferencia', b:'El igualitarismo pedía "lo mismo que el varón"; la diferencia lo impugna: ¿igualdad a qué sujeto (blanco, burgués, heterosexual)? El postcolonialismo suma la crítica al eurocentrismo.'},
  {u:'U3', f:'CHEJTER: las violencias', b:'Plural: tipos y modalidades (doméstica, institucional, laboral, mediática, simbólica…) con una raíz común: la desigualdad de poder.'},
  {u:'U3', f:'MICROMACHISMOS (Bonino, 1998)', b:'Violencia "invisible" cotidiana en la pareja. Tipos: coercitivos (control directo), encubiertos (omisiones, "se me olvidó") y de crisis (cuando ella avanza). Efecto: erosionan autonomía y psiquismo.'},
  {u:'U3', f:'GROOMING', b:'Adulto que se hace pasar por otro para ganarse la confianza de un menor online y abusar. Delito: Ley 26.904 (2013). Señales: secretismo, regalos, pedidos de fotos.'},
  {u:'U3', f:'SEXTING y PORNOVENGANZA', b:'El problema no es el sexting sino la difusión no consentida. Divulgar contenido íntimo sin consentimiento: delito (art. 83 CP, ley 26.388).'},
  {u:'U3', f:'LEY 26.485 (2009)', b:'Protección integral para prevenir, sancionar y erradicar la violencia contra las mujeres en los ámbitos donde desarrollan sus relaciones. Tipifica violencias (incluida la simbólica).'},
  {u:'U3', f:'LEY 26.842 — TRATA (2012)', b:'Tipos penales (arts. 145 bis/ter CP) y asistencia a víctimas; reformó la 26.364. (El TP escribió "25.482" — el número vigente es 26.842.)'},
  {u:'U3', f:'LEY 26.657 — SALUD MENTAL (2010)', b:'La salud mental como derecho humano: abordaje integral, sin cosificación ni encierro por defecto; marco para adicciones. (No 2013.)'},
  {u:'U3', f:'DROGAS y LEY 26.657', b:'OMS: depresoras, estimulantes, alucinógenas. Lícitas (alcohol/tabaco) también dañan — violencia vial. Adicciones se abordan desde la salud mental como derecho.'},
  {u:'U3', f:'IVE / ILE', b:'IVE: hasta semana 12 (Ley 27.610, 2021). ILE: por riesgo de vida/salud o violación — sin plazo, legal desde F.A.L. (2012).'},
  {u:'U4', f:'LEY 26.061 (2005)', b:'NNyA como sujetos plenos de derechos (fin del "menor en situación irregular"): ser oídos, identidad, salud, educación, familia, protección contra la violencia.'},
  {u:'U4', f:'LEY LUCIO (2023)', b:'Prevención de la violencia y el abuso en la infancia, agravantes penales y capacitación obligatoria. Homenaje a Lucio Dupuy.'},
  {u:'U4', f:'LEY 27.372 (2017)', b:'Derechos de víctimas directas e indirectas: apoyo integral del Estado, información de la causa y participación — sin afectar el debido proceso del acusado.'},
  {u:'U4', f:'GUÍA PARA VÍCTIMAS (La Pampa, 2026)', b:'Con Madres del Dolor: acompaña a víctimas y familiares hacia la justicia y los ministerios; directorio de servicios (Salud Mental, Mujeres, Violencias, Adicciones, universidades).'},
  {u:'U4', f:'MODELO SOCIAL de la discapacidad', b:'El problema no está en el cuerpo sino en una sociedad mal diseñada: accesibilidad, educación inclusiva, ajustes razonables. Marco: Convención (rango constitucional) + INADI.'},
  {u:'U4', f:'E-DERECHOS (UNICEF)', b:'Acceso sin discriminación; ocio seguro; intimidad de las comunicaciones y datos personales; educación adecuada; tecnología para un mundo más justo.'},
  {u:'U4', f:'PROTOCOLO UNLPam — Res. 038/2021', b:'Intervención institucional ante violencia de género, acoso sexual y discriminación de género en la universidad: circuitos de denuncia, acompañamiento y medidas.'},
  {u:'U4', f:'EDUCACIÓN EN PANDEMIA', b:'CEPAL/CONICET: desigualdad digital (conectividad, dispositivos) y pistas para aulas virtuales. La escuela no es ajena a la estructura social.'},
  {u:'U5', f:'FURMAN: enseñar para comprender', b:'Partir de problemas reales, preguntar antes que copiar, dejar pensar y equivocarse. La clase como laboratorio de pensamiento.'},
  {u:'U5', f:'BARRERA (TEDx): educación aburrida', b:'Crítica a la escuela que desmotiva; apuesta por una escuela con sentido, conectada con la vida y los intereses reales del estudiantado.'},
  {u:'U5', f:'BASTONES LARGOS (1966)', b:'La dictadura desaloja violentamente las facultades de la UBA (icono: Exactas). Exilio masivo de científicos; memoria de la universidad pública.'},
  {u:'U5', f:'DNU y "servicio esencial"', b:'Si la educación es servicio esencial, las huelgas docentes se restringen. Tensión: derecho a la escuela vs. derecho gremial. ¿Quién define lo "esencial"?'}
];

/* ---------------- DATOS: MATCH (parejas) ---------------- */
const PAIRS = [
  ['Vincent Marqués','"No es natural": lo cotidiano es convención social'],
  ['Edmund Leach','Clasificar al "otro" con palabras enseña la violencia'],
  ['Thomas Kuhn','Pre-ciencia, normal, crisis, revolución'],
  ['Adriana Velásquez','Transición modernidad → postmodernidad'],
  ['Rita Segato','Contrapedagogías de la crueldad'],
  ['Paulo Freire','Pedagogía del diálogo (vs. bancaria)'],
  ['Luis Bonino','Micromachismos: coercitivos, encubiertos, de crisis'],
  ['Silvia Chejter','"Las violencias": tipos, modalidades y contenidos'],
  ['Teresa Meana','Por un uso no sexista de la lengua'],
  ['Josefina Fernández','Feminismo: igualdad, diferencia y postcolonialismo'],
  ['Ley 26.150','Educación Sexual Integral (ESI, 2006)'],
  ['Ley 27.499','Ley Micaela: capacitación obligatoria en género'],
  ['Ley 26.485','Protección integral: violencias contra las mujeres'],
  ['Ley 26.842','Trata de personas y asistencia a víctimas (2012)'],
  ['Ley 26.904','Grooming como delito (2013)'],
  ['Ley 26.657','Salud Mental: derecho humano, abordaje integral'],
  ['Ley 26.061','Protección integral de NNyA (2005)'],
  ['Ley 27.372','Derechos de las víctimas (2017)'],
  ['Ley 27.610','IVE hasta semana 12 (2021)'],
  ['Res. 038/2021','Protocolo de violencia de género UNLPam']
];

/* ================= UTILIDADES ================= */
function shuffle(arr){const a=arr.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
const $=id=>document.getElementById(id);

/* ================= TABS DE JUEGOS ================= */
document.querySelectorAll('.gtab').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.gtab').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.game-panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    $('panel-'+btn.dataset.g).classList.add('active');
  });
});

/* ================= QUIZ ================= */
const NQUIZ = 12;
let qDeck=[], qi=0, qScore=0, qAnswered=false;
function quizStart(){
  qDeck = shuffle(QUIZ).slice(0,NQUIZ); qi=0; qScore=0; qAnswered=false;
  $('quizScore').textContent='Aciertos: 0';
  quizRender();
}
function quizRender(){
  const item=qDeck[qi];
  $('quizBar').style.width=(qi/NQUIZ*100)+'%';
  $('qText').textContent=`[${item.u}] ${item.q}`;
  $('qExp').style.display='none';
  $('qNext').style.display='none';
  const box=$('qOpts'); box.innerHTML='';
  shuffle(item.o.map((txt,i)=>({txt,ok:i===item.a}))).forEach(opt=>{
    const b=document.createElement('button');
    b.className='q-opt'; b.textContent=opt.txt;
    b.onclick=()=>{ if(qAnswered) return; qAnswered=true;
      document.querySelectorAll('.q-opt').forEach(x=>{x.disabled=true; if(x.textContent===item.o[item.a]) x.classList.add('correct');});
      if(opt.ok){ qScore++; $('quizScore').textContent='Aciertos: '+qScore; }
      else b.classList.add('wrong');
      $('qExp').innerHTML='💡 '+item.e; $('qExp').style.display='block';
      $('qNext').style.display='inline-block';
      $('quizBar').style.width=((qi+1)/NQUIZ*100)+'%';
    };
    box.appendChild(b);
  });
}
$('qNext').onclick=()=>{ qi++; if(qi>=NQUIZ){
  $('qText').textContent=`🏁 Fin del round: ${qScore} / ${NQUIZ} correctas. `+(qScore>=NQUIZ*0.8?'¡Nivel final asegurado! 🎉':'Repasá las que fallaste con las flashcards 🃏');
  $('qOpts').innerHTML=''; $('qExp').style.display='none'; $('qNext').style.display='none';
} else { qAnswered=false; quizRender(); } };
$('quizRestart').onclick=quizStart;

/* ================= FLASHCARDS ================= */
let fDeck=CARDS.map((c,i)=>i), fi=0, fWrong=new Set();
function fcShow(){
  const c=CARDS[fDeck[fi]];
  $('fcCard').classList.remove('flipped');
  $('fcUnit').textContent=c.u;
  $('fcFront').textContent=c.f;
  $('fcBack').textContent=c.b;
  $('fcCount').textContent=(fi+1)+' / '+fDeck.length;
}
$('fcCard').onclick=()=>$('fcCard').classList.toggle('flipped');
$('fcNext').onclick=()=>{ fi=(fi+1)%fDeck.length; fcShow(); };
$('fcPrev').onclick=()=>{ fi=(fi-1+fDeck.length)%fDeck.length; fcShow(); };
$('fcWrong').onclick=()=>{ fWrong.add(fDeck[fi]); $('fcWrong').textContent='❌ Marcada ('+fWrong.size+')'; fi=(fi+1)%fDeck.length; fcShow(); };
$('fcOnlyWrong').onchange=e=>{
  if(e.target.checked){
    if(fWrong.size===0){ $('fcBack').textContent='Marcá al menos una tarjeta con "La fallé" primero 🙂'; $('fcCard').classList.add('flipped'); return; }
    fDeck=[...fWrong].filter(i=>CARDS[i]); 
  } else fDeck=CARDS.map((c,i)=>i);
  fi=0; fcShow();
};

/* ================= MATCH ================= */
const NPAIRS=8;
let mSelL=null, mSelR=null, mDone=0, mTotal=NPAIRS;
function matchStart(){
  mSelL=null; mSelR=null; mDone=0; $('matchScore').textContent=`Parejas: 0 / ${mTotal}`; $('matchMsg').textContent='';
  const picks=shuffle(PAIRS).slice(0,NPAIRS);
  const L=shuffle(picks.map((p,i)=>({txt:p[0],k:i})));
  const R=shuffle(picks.map((p,i)=>({txt:p[1],k:i})));
  const board=$('matchBoard'); board.innerHTML='';
  const colL=document.createElement('div'); colL.style.display='grid'; colL.style.gap='10px';
  const colR=colL.cloneNode(false);
  L.forEach(it=>{ const d=document.createElement('button'); d.className='mcell'; d.textContent=it.txt; d.dataset.k=it.k; d.dataset.side='L'; d.onclick=()=>pickCell(d); colL.appendChild(d); });
  R.forEach(it=>{ const d=document.createElement('button'); d.className='mcell'; d.textContent=it.txt; d.dataset.k=it.k; d.dataset.side='R'; d.onclick=()=>pickCell(d); colR.appendChild(d); });
  board.appendChild(colL); board.appendChild(colR);
}
function pickCell(cell){
  if(cell.classList.contains('done')) return;
  const side=cell.dataset.side;
  if(side==='L'){ document.querySelectorAll('.mcell[data-side=L]').forEach(x=>x.classList.remove('sel')); mSelL=cell; }
  else { document.querySelectorAll('.mcell[data-side=R]').forEach(x=>x.classList.remove('sel')); mSelR=cell; }
  cell.classList.add('sel');
  if(mSelL&&mSelR){
    if(mSelL.dataset.k===mSelR.dataset.k){
      mSelL.classList.add('done'); mSelR.classList.add('done');
      mSelL.classList.remove('sel'); mSelR.classList.remove('sel');
      mDone++; $('matchScore').textContent=`Parejas: ${mDone} / ${mTotal}`;
      $('matchMsg').textContent = mDone===mTotal ? '🎉 ¡Tabla completa! Sos un crack de los conceptos.' : '✅ ¡Correcto!';
      mSelL=null; mSelR=null;
    } else {
      $('matchMsg').textContent='❌ No coinciden — probá de nuevo';
      [mSelL,mSelR].forEach(c=>{c.classList.add('err'); setTimeout(()=>c.classList.remove('err','sel'),380);});
      mSelL=null; mSelR=null;
    }
  }
}
$('matchRestart').onclick=matchStart;

/* ================= BUSCADOR DE LEYES ================= */
function leyFilter(){
  const q=($('leySearch').value||'').toLowerCase();
  const f=document.querySelector('.chip-btn.active').dataset.f;
  document.querySelectorAll('#leyTable tbody tr').forEach(tr=>{
    const txt=tr.textContent.toLowerCase();
    const unit=tr.querySelector('td:last-child').textContent.trim();
    tr.style.display = (txt.includes(q) && (f==='todas'||f==='UNLPam'&&unit==='UNLPam'||new RegExp('\\b'+f+'\\b').test(unit))) ? '' : 'none';
  });
}
$('leySearch').addEventListener('input',leyFilter);
document.querySelectorAll('.chip-btn').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.chip-btn').forEach(x=>x.classList.remove('active'));
  b.classList.add('active'); leyFilter();
}));

/* ================= MENÚ MÓVIL ================= */
$('burger').onclick=()=>$('mainNav').classList.toggle('open');
document.querySelectorAll('#mainNav a').forEach(a=>a.onclick=()=>$('mainNav').classList.remove('open'));

/* ================= INICIO ================= */
quizStart();
matchStart();
fcShow();
