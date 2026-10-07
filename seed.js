/*
 * Curso semilla de Aula: "Desarrollo profesional con Kotlin e IA".
 * La Semana 1 viene completa. Las demás traen el temario y se cargan
 * cuando lleguemos a ellas (Claude genera la lección y se importa en Más → Importar).
 *
 * Si cambias este archivo, sube "version" para que la app lo actualice
 * (solo si no has editado el curso desde la app).
 */
(function () {
  var PH = {
    0: 'Fase 0 · Fundamentos del oficio',
    1: 'Fase 1 · Kotlin y diseño',
    2: 'Fase 2 · Backend con Ktor',
    3: 'Fase 3 · App Android',
    4: 'Fase 4 · Producción',
    5: 'Fase 5 · Escalar y cierre'
  };

  // [semana, fase, título, tema, seguridad, modo de la IA]
  var W = [
    [2, 0, 'Git a fondo y trabajo con IA', 'Ramas, PR, merge y conflictos. Los modos de la IA, el contrato, el prompt profesional y el archivo CLAUDE.md.', 'Escaneo de secretos en el repo y protección de la rama main.', 'Tutor'],
    [3, 1, 'Kotlin básico', 'val/var, tipos, null safety, funciones, when, colecciones y lambdas, todo con PRIMM.', 'Null safety como herramienta contra errores.', 'Tutor'],
    [4, 1, 'Kotlin intermedio y pruebas', 'data class, sealed class, enum, extensiones, inmutabilidad, Result y primeras pruebas unitarias.', 'Validar los datos en el dominio: no confiar en la entrada.', 'Tutor'],
    [5, 1, 'Diseño de producto y API', 'Historias de usuario, modelo de datos, API REST y descripción de pantallas de la plataforma de cursos. Se cierra el stack de la v1.', 'Modelo de amenazas STRIDE v1.', 'Tutor'],
    [6, 1, 'Coroutines y Gradle', 'suspend, launch, Flow y proyectos Gradle de varios módulos.', 'Casos borde: zona horaria America/Bogota, fechas y valores inválidos.', 'Tutor'],
    [7, 2, 'HTTP y Ktor', 'Rutas, plugins, JSON y manejo centralizado de errores. Docker básico.', 'Errores sin detalles internos (OWASP A10:2025).', 'Compañero'],
    [8, 2, 'SQL, PostgreSQL y migraciones', 'Tablas, llaves, índices, transacciones, Exposed y Flyway.', 'Consultas parametrizadas y usuario de BD con mínimos privilegios.', 'Compañero'],
    [9, 2, 'Autenticación', 'Hash de contraseñas, JWT de acceso + refresh rotativo, cierre de sesión.', 'Bloqueo por intentos fallidos (OWASP A07).', 'Compañero'],
    [10, 2, 'Autorización y multi-tenancy', 'Roles admin / instructor / estudiante y verificación de propiedad de cada recurso.', 'Control de acceso roto (OWASP A01) con pruebas automáticas.', 'Compañero'],
    [11, 2, 'Concurrencia y consistencia', 'Condiciones de carrera, transacciones, restricciones únicas e idempotencia.', 'Prueba: muchas peticiones simultáneas no duplican datos.', 'Compañero'],
    [12, 2, 'CI/CD y Docker', 'GitHub Actions, Dependabot e imagen Docker multi-etapa.', 'Cadena de suministro (OWASP A03) y mala configuración (A02).', 'Compañero'],
    [13, 3, 'Android y Compose', 'Composables, estado, Material 3 y la arquitectura oficial de Android.', 'Permisos mínimos en el Manifest.', 'Compañero'],
    [14, 3, 'ViewModel, navegación y Hilt', 'StateFlow, navegación e inyección de dependencias.', 'Nada sensible en el estado de la UI ni en los logs.', 'Compañero'],
    [15, 3, 'Red y almacenamiento seguro', 'Ktor Client, login en la app y tokens en Keystore + DataStore.', 'MASVS-NETWORK y MASVS-STORAGE.', 'Compañero'],
    [16, 3, 'Offline-first', 'Room como fuente de verdad y sincronización con WorkManager.', 'Datos locales mínimos y borrado al cerrar sesión.', 'Compañero'],
    [17, 3, 'Flujos completos y panel del instructor', 'El estudiante toma un curso; el instructor gestiona contenido y alumnos.', 'La validación también va en el servidor.', 'Compañero'],
    [18, 3, 'Pruebas Android y MASVS', 'Pruebas de ViewModel y de UI, accesibilidad.', 'Revisión completa con el checklist MASVS v2.', 'Compañero'],
    [19, 4, 'Despliegue', 'Entornos, variables de entorno, base de datos administrada, dominio y HTTPS.', 'Secretos en la plataforma y respaldos automáticos.', 'Agente'],
    [20, 4, 'Notificaciones y tareas en segundo plano', 'Push con FCM y recordatorios de repaso.', 'Nada sensible en el contenido de la notificación.', 'Agente'],
    [21, 4, 'Pagos con webhooks', 'Venta de cursos con una pasarela en modo sandbox.', 'Firma del webhook e idempotencia (OWASP A08).', 'Agente'],
    [22, 4, 'Observabilidad y publicación', 'Logs estructurados, métricas, alertas y Play Console (pruebas internas).', 'Registro de eventos de seguridad (OWASP A09).', 'Agente'],
    [23, 5, 'Escalabilidad', 'Paginación, índices, caché, rate limiting y pruebas de carga.', 'Rate limiting contra fuerza bruta y abuso.', 'Agente'],
    [24, 5, 'Cierre y auditoría', 'Auditoría OWASP + MASVS, refactor, ADRs y demo day.', 'Informe de seguridad final.', 'Agente']
  ];

  function idFor(w) { return 's' + (w < 10 ? '0' + w : String(w)); }

  function skeleton(row) {
    var w = row[0];
    return {
      id: idFor(w),
      week: w,
      phase: PH[row[1]],
      title: row[2],
      summary: row[3],
      minutes: 360,
      draft: true,
      sections: [{
        title: 'Lo que veremos',
        blocks: [
          { type: 'md', text: '**Tema:** ' + row[3] + '\n\n**Seguridad:** ' + row[4] + '\n\n**Modo de la IA:** ' + row[5] },
          { type: 'callout', tone: 'info', text: 'El contenido completo se carga cuando llegues aquí. Pídele a Claude **"la lección de la Semana ' + w + ' para Aula"** y pégala en **Más → Importar**.' }
        ]
      }],
      cards: []
    };
  }

  var week1 = {
    id: 's01',
    week: 1,
    phase: PH[0],
    title: 'Tu taller: cómo corre un programa, Git y GitHub',
    summary: 'Antes de construir se afilan las herramientas: entender qué pasa cuando corre un programa, verificar tu entorno y dar los primeros pasos con Git.',
    minutes: 360,
    sections: [
      {
        title: 'Sesión A · Concepto (≈ 2 h)',
        blocks: [
          { type: 'callout', tone: 'info', text: 'Esta semana no se construye la plataforma. Se arma el taller y se aprenden las reglas. Un carpintero no arranca el mueble sin afilar el serrucho.' },
          { type: 'md', text: [
            '## ¿Qué pasa cuando "corre" un programa?',
            '',
            'Tú escribes **código fuente**: texto que una persona puede leer. El computador no entiende ese texto directamente; hay que traducirlo.',
            '',
            '- **Compilar** = traducir el código *antes* de usarlo. El compilador de Kotlin lo convierte en **bytecode**.',
            '- **Ejecutar** = poner a correr esa traducción. En un PC o servidor, el bytecode corre en la **JVM** (Máquina Virtual de Java). En Android corre en **ART**, después de convertirse a formato DEX.',
            '',
            'Piénsalo como en Pa Comer: el chef escribe la receta (código fuente), el jefe de cocina la pasa a pasos que el equipo entiende (compilador → bytecode) y la cocina es la que de verdad prepara el plato (JVM / ART).',
            '',
            '> En tus PWA con React no compilabas nada antes: Babel traducía el JSX **en el navegador** cada vez que alguien abría la página. Con Kotlin la traducción pasa **antes**, y si hay un error de tipos, el compilador te frena antes de que lo vea un cliente.'
          ].join('\n') },
          { type: 'code', lang: 'kotlin', caption: 'Tu primer programa en Kotlin', code: [
            'fun main() {',
            '    val negocio = "Ferretools"',
            '    var herramientasAlquiladas = 3',
            '    herramientasAlquiladas = herramientasAlquiladas + 2',
            '    println("$negocio tiene $herramientasAlquiladas herramientas alquiladas")',
            '}'
          ].join('\n') },
          { type: 'md', text: [
            '**Línea por línea:**',
            '',
            '1. `fun main()`: la puerta de entrada. Un programa de consola en Kotlin arranca aquí.',
            '2. `val negocio = "Ferretools"`: `val` guarda un valor que **no cambia**.',
            '3. `var herramientasAlquiladas = 3`: `var` guarda un valor que **sí puede cambiar**.',
            '4. Le sumamos 2. Esto solo se puede porque es `var`.',
            '5. `println(...)` imprime en la consola. El `$` mete el valor de una variable dentro del texto.'
          ].join('\n') },
          { type: 'primm', id: 'a-primm-1', lang: 'kotlin', code: [
            'fun main() {',
            '    val precioDia = 15000',
            '    val dias = 3',
            '    val total = precioDia * dias',
            '    println("Total: $total")',
            '    println("Total con domicilio: ${total + 5000}")',
            '}'
          ].join('\n'),
            question: '**Predice:** ¿qué imprime este programa exactamente? Escribe las dos líneas.',
            answer: 'Imprime:\n\n- `Total: 45000`\n- `Total con domicilio: 50000`\n\nOjo con `${...}`: cuando quieres meter una **operación** (no solo una variable) dentro del texto, va entre llaves. Sin llaves, `$total + 5000` imprimiría `45000 + 5000` como texto.' },
          { type: 'primm', id: 'a-primm-2', lang: 'kotlin', code: [
            'fun main() {',
            '    val precioDia = 15000',
            '    precioDia = 18000',
            '    println(precioDia)',
            '}'
          ].join('\n'),
            question: '**Predice:** ¿este programa corre? Si no, ¿por qué?',
            answer: 'No compila. `precioDia` es `val`, y un `val` no se puede reasignar. El compilador te frena con un error tipo *"Val cannot be reassigned"*.\n\nEso es bueno: el error aparece **antes** de que la app llegue a un cliente. Para arreglarlo cambias `val` por `var`... o mejor, te preguntas si de verdad ese valor debería cambiar.' },
          { type: 'md', text: [
            '## Git: el historial de tu código',
            '',
            'Git guarda **fotos** de tu proyecto a lo largo del tiempo. Cada foto es un **commit**.',
            '',
            '- **Repositorio (repo):** la carpeta del proyecto más todo su historial.',
            '- **Commit:** una foto con un mensaje que explica qué cambió.',
            '- **Rama (branch):** una línea paralela para trabajar sin dañar lo que ya funciona.',
            '- **Remoto (GitHub):** la copia del repo en la nube, para respaldar y colaborar.',
            '- **Push / pull:** subir tus commits a GitHub / bajar los que hay allá.',
            '',
            'Es como guardar partida en un juego: si la embarras, vuelves a la última partida guardada.'
          ].join('\n') },
          { type: 'quiz', id: 'a-quiz-1', question: '¿Qué hace `git commit`?',
            options: ['Sube los cambios a GitHub', 'Guarda una foto de los cambios preparados en el historial local', 'Descarga los cambios de otras personas', 'Borra los cambios que no sirven'],
            correct: 1,
            explain: '`commit` guarda en tu historial **local**. Para subirlo a GitHub hace falta `git push`. Es la confusión más común al empezar.' },
          { type: 'quiz', id: 'a-quiz-2', question: 'En tu app de domicilios, ¿por qué `keystore.properties` y el archivo `.jks` están en `.gitignore`?',
            options: ['Porque pesan mucho', 'Porque Git no sabe leer esos formatos', 'Porque son secretos: con ellos alguien podría firmar una app falsa como si fuera tuya', 'Porque Android Studio los genera solo'],
            correct: 2,
            explain: 'Son la **llave de firma** de tu app. Si alguien la consigue, puede publicar una versión maliciosa que el celular acepta como actualización tuya. Y si la pierdes, no puedes actualizar las apps ya instaladas. Por eso van fuera de Git **y** con un respaldo seguro aparte.' },
          { type: 'quiz', id: 'a-quiz-3', question: '¿Cuál es la diferencia entre `val` y `var`?',
            options: ['`val` es para números y `var` para texto', '`val` no se puede reasignar; `var` sí', '`var` es más rápido', 'No hay diferencia'],
            correct: 1,
            explain: 'Regla profesional: usa `val` por defecto y `var` solo cuando de verdad necesitas cambiar el valor. Menos cosas que cambian = menos errores.' }
        ]
      },
      {
        title: 'Sesión B · Construcción (≈ 2.5 h)',
        blocks: [
          { type: 'callout', tone: 'warn', text: 'Tu PC tiene 8 GB de RAM. Mientras instalas y practicas, cierra los navegadores que no estés usando. Un solo IDE abierto a la vez.' },
          { type: 'task', title: 'Arma tu taller', text: [
            '1. **Android Studio:** ábrelo y mira la versión en *Help → About*. Actualízalo si te lo pide.',
            '2. **Git para Windows:** abre PowerShell y escribe `git --version`. Si no lo reconoce, instálalo desde git-scm.com.',
            '3. **Configura tu identidad en Git** con los comandos de abajo.',
            '4. **GitHub:** activa la verificación en dos pasos (2FA) en *Settings → Password and authentication*.',
            '5. **Crea el repo de práctica** `kotlin-lab` en GitHub: privado, con README y `.gitignore` de Kotlin.',
            '6. **Clónalo**, crea un archivo `notas.md`, haz tu primer commit y súbelo.',
            '',
            '> IntelliJ IDEA se instala en la Fase 2. Por ahora, los ejercicios de Kotlin los corres en **play.kotlinlang.org**, en el navegador, sin gastar RAM de tu PC.'
          ].join('\n') },
          { type: 'code', lang: 'bash', caption: 'Comandos de la semana (PowerShell)', code: [
            '# 1) Tu identidad (una sola vez)',
            'git config --global user.name "Jorge Hernández"',
            'git config --global user.email "TU-CORREO-NOREPLY@users.noreply.github.com"',
            '',
            '# 2) Clonar el repo de práctica',
            'git clone https://github.com/lordfullstack/kotlin-lab.git',
            'cd kotlin-lab',
            '',
            '# 3) Ver qué cambió',
            'git status',
            '',
            '# 4) Preparar y guardar la foto',
            'git add notas.md',
            'git commit -m "docs: agrega notas de la semana 1"',
            '',
            '# 5) Subir a GitHub',
            'git push'
          ].join('\n') },
          { type: 'callout', tone: 'info', text: '**Privacidad:** el correo de `git config` queda grabado en cada commit y se ve si el repo es público. GitHub te da un correo privado del tipo `12345+usuario@users.noreply.github.com` en *Settings → Emails*. Usa ese.' },
          { type: 'primm', id: 'b-primm-1', lang: 'plaintext', code: [
            'On branch main',
            'Untracked files:',
            '  (use "git add <file>..." to include in what will be committed)',
            '        notas.md',
            '',
            'nothing added to commit but untracked files present'
          ].join('\n'),
            question: '**Investiga:** esto salió al escribir `git status`. ¿Qué significa y qué comando va después?',
            answer: 'Git ve el archivo `notas.md` pero **no lo está siguiendo** (*untracked*): todavía no está en ninguna foto. El siguiente paso es `git add notas.md` para prepararlo y luego `git commit -m "..."` para guardarlo.' },
          { type: 'checklist', id: 'b-check-1', title: 'Checklist del taller', items: [
            'Android Studio abre y sé qué versión tengo',
            '`git --version` responde en la terminal',
            'Configuré `user.name` y el correo noreply de GitHub',
            '2FA activado en GitHub',
            'Repo `kotlin-lab` creado (privado)',
            'Primer commit hecho y subido con `git push`',
            'Corrí el programa de Ferretools en play.kotlinlang.org y le cambié algo'
          ] }
        ]
      },
      {
        title: 'Sesión C · Consolidación (≈ 1.5 h)',
        blocks: [
          { type: 'recall', id: 'c-recall-1', question: '**Feynman:** explica, como si se lo contaras a alguien que no programa, qué pasa desde que escribes `println("Hola")` hasta que aparece en la pantalla.',
            answer: 'Una buena respuesta menciona: (1) escribo código fuente, (2) el compilador de Kotlin lo traduce a bytecode, (3) la JVM ejecuta ese bytecode, (4) `println` le pide al sistema que muestre el texto. Si te faltó alguno, vuelve a la Sesión A.' },
          { type: 'recall', id: 'c-recall-2', question: '¿Qué diferencia hay entre `git commit` y `git push`? Responde sin mirar.',
            answer: '`commit` guarda la foto **en tu PC** (historial local). `push` sube esas fotos **a GitHub**. Puedes hacer muchos commits y un solo push.' },
          { type: 'recall', id: 'c-recall-3', question: 'Nombra dos cosas que **nunca** deben subirse a un repositorio y explica por qué.',
            answer: 'Por ejemplo: contraseñas y llaves de API (`.env`, `local.properties`), llaves de firma (`.jks`, `keystore.properties`) y datos reales de clientes. Cualquiera con acceso al repo, o a una filtración, podría usarlos.' },
          { type: 'checklist', id: 'c-check-1', title: 'Cierre de la semana', items: [
            'Escribí mi entrada del Diario de la semana 1',
            'Marqué la lección como completa (las tarjetas pasan a Repaso)',
            'Copié el "Resumen para Claude" en Inicio y lo pegué en el chat del proyecto'
          ] }
        ]
      }
    ],
    cards: [
      { q: '¿Qué es compilar?', a: 'Traducir el código fuente a otro formato (en Kotlin, bytecode) **antes** de ejecutarlo.' },
      { q: '¿Dónde corre el bytecode de Kotlin en un PC o servidor? ¿Y en Android?', a: 'En la **JVM**. En Android, en **ART** (después de convertirse a DEX).' },
      { q: '`val` vs `var`', a: '`val` no se puede reasignar; `var` sí. Usa `val` por defecto.' },
      { q: '¿Cómo metes una operación dentro de un texto en Kotlin?', a: 'Con `${...}`, por ejemplo `"Total: ${a + b}"`.' },
      { q: '¿Qué es un commit?', a: 'Una foto del proyecto guardada en el historial local, con un mensaje que explica el cambio.' },
      { q: '`git commit` vs `git push`', a: '`commit` guarda en tu PC; `push` sube a GitHub.' },
      { q: '¿Qué significa *untracked* en `git status`?', a: 'Git ve el archivo pero todavía no lo sigue. Falta `git add`.' },
      { q: '¿Por qué la llave de firma (`.jks`) va fuera de Git?', a: 'Con ella alguien podría firmar una app falsa como tuya. Y si la pierdes, no puedes actualizar tu app.' },
      { q: '¿Qué correo usar en `git config` para proteger tu privacidad?', a: 'El correo **noreply** que da GitHub en *Settings → Emails*.' }
    ]
  };

  window.SEED_COURSE = {
    id: 'kotlin-ia',
    title: 'Desarrollo profesional con Kotlin e IA',
    description: '24 semanas para pasar de construir con IA a entender, probar y asegurar lo que construyes.',
    author: 'Jorge Hernández',
    version: 1,
    lessons: [week1].concat(W.map(skeleton))
  };
})();
