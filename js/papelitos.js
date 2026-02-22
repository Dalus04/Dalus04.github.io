// === LÓGICA DE PAPELITOS DE AMOR ===
// ============ STATE ============
        var papelitos = [
            { "numero": 1, "color": "#800080", "colorName": "Morado", "frase": "Quise estar para ti, incluso cuando ten\u00eda otros planes." },
            { "numero": 2, "color": "#800080", "colorName": "Morado", "frase": "Ayudarte se sinti\u00f3 natural desde el inicio." },
            { "numero": 3, "color": "#800080", "colorName": "Morado", "frase": "Me gust\u00f3 poder darte tranquilidad cuando la necesitabas." },
            { "numero": 4, "color": "#800080", "colorName": "Morado", "frase": "Ese examen nos acerc\u00f3 m\u00e1s de lo que imagin\u00e9." },
            { "numero": 5, "color": "#800080", "colorName": "Morado", "frase": "Me sent\u00ed bien cuando confiaste en m\u00ed." },
            { "numero": 6, "color": "#800080", "colorName": "Morado", "frase": "A veces un solo mensaje tuyo me calmaba el d\u00eda." },
            { "numero": 7, "color": "#800080", "colorName": "Morado", "frase": "Aunque hubo silencio, siempre pensaba en ti." },
            { "numero": 8, "color": "#800080", "colorName": "Morado", "frase": "Extra\u00f1\u00e9 esos peque\u00f1os mensajes que me hac\u00edan sentir cerca." },
            { "numero": 9, "color": "#800080", "colorName": "Morado", "frase": "Volver a coincidir contigo se sinti\u00f3 especial." },
            { "numero": 10, "color": "#800080", "colorName": "Morado", "frase": "Despu\u00e9s de la distancia, encontrarte otra vez me hizo sonre\u00edr." },
            { "numero": 11, "color": "#800080", "colorName": "Morado", "frase": "Volver a hablar contigo se sinti\u00f3 como volver a casa." },
            { "numero": 12, "color": "#800080", "colorName": "Morado", "frase": "Me gust\u00f3 quedarme dormido sabiendo que estabas ah\u00ed." },
            { "numero": 13, "color": "#800080", "colorName": "Morado", "frase": "Me encant\u00f3 c\u00f3mo me llevaste a tu sue\u00f1o con tus palabras." },
            { "numero": 14, "color": "#800080", "colorName": "Morado", "frase": "Descubrimos una forma nueva de hablarnos sin palabras." },
            { "numero": 15, "color": "#800080", "colorName": "Morado", "frase": "Tus dibujos ten\u00edan algo que me alegraba el d\u00eda." },
            { "numero": 16, "color": "#800080", "colorName": "Morado", "frase": "Ese monito tuyo se qued\u00f3 conmigo m\u00e1s de lo que crees." },
            { "numero": 17, "color": "#800080", "colorName": "Morado", "frase": "Tu creatividad me hizo querer esforzarme m\u00e1s." },
            { "numero": 18, "color": "#800080", "colorName": "Morado", "frase": "Quise hacer lo mejor para ti, incluso en un dibujo." },
            { "numero": 19, "color": "#800080", "colorName": "Morado", "frase": "Me fui acostumbrando a ti sin darme cuenta." },
            { "numero": 20, "color": "#800080", "colorName": "Morado", "frase": "Mis d\u00edas empezaron a sentirse m\u00e1s lindos contigo." },
            { "numero": 21, "color": "#800080", "colorName": "Morado", "frase": "Aunque hab\u00eda distancia, lo que sent\u00edamos segu\u00eda creciendo." },
            { "numero": 22, "color": "#800080", "colorName": "Morado", "frase": "Algo en ti empez\u00f3 a ser importante para m\u00ed." },
            { "numero": 23, "color": "#800080", "colorName": "Morado", "frase": "La distancia no pudo con lo que empezaba a nacer." },
            { "numero": 24, "color": "#800080", "colorName": "Morado", "frase": "Pasar la noche contigo se volvi\u00f3 algo especial." },
            { "numero": 25, "color": "#800080", "colorName": "Morado", "frase": "Jugando contigo, el tiempo se me iba sin notarlo." },
            { "numero": 26, "color": "#800080", "colorName": "Morado", "frase": "Incluso dormida, te sent\u00eda cerca." },
            { "numero": 27, "color": "#800080", "colorName": "Morado", "frase": "Aunque no pod\u00eda verte, te imaginaba con una sonrisa." },
            { "numero": 28, "color": "#800080", "colorName": "Morado", "frase": "Me gust\u00f3 compartir cosas simples contigo." },
            { "numero": 29, "color": "#800080", "colorName": "Morado", "frase": "Marzo fue el inicio de algo bonito." },
            { "numero": 30, "color": "#800080", "colorName": "Morado", "frase": "Mis d\u00edas empezaron a girar en torno a ti." },
            { "numero": 1, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Empec\u00e9 a desearte d\u00edas lindos, tan lindos como t\u00fa." },
            { "numero": 2, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Querer saber de tus d\u00edas se volvi\u00f3 parte de los m\u00edos." },
            { "numero": 3, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Compartirte un momento m\u00edo, cuidando a cachorrao, se sinti\u00f3 especial." },
            { "numero": 4, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Acompa\u00f1arte cuando estabas triste fue lo \u00fanico que quise hacer." },
            { "numero": 5, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Estar para ti tambi\u00e9n fue una forma de amarte." },
            { "numero": 6, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Empezamos a llamarnos amor, y todo se sinti\u00f3 m\u00e1s cercano." },
            { "numero": 7, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Amor y amor de mi vida, eres todo para m\u00ed." },
            { "numero": 8, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Ver tus fotos de ni\u00f1a me derriti\u00f3 el coraz\u00f3n." },
            { "numero": 9, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Esa t\u00fa, mi bb, termin\u00f3 siendo mi fondo de pantalla." },
            { "numero": 10, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Contarte mis d\u00edas como el Sr. Soto solo para verte re\u00edr vali\u00f3 la pena." },
            { "numero": 11, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Hacerte re\u00edr se volvi\u00f3 una de mis partes favoritas del d\u00eda." },
            { "numero": 12, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Amo que llenes mi galer\u00eda con tus fotos y videos." },
            { "numero": 13, "color": "#98FF98", "colorName": "Verde Menta", "frase": "No hay nada m\u00e1s hermoso que verte en mi pantalla." },
            { "numero": 14, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Declararme tu coach en Roblox, pero verte superarme fue lo mejor." },
            { "numero": 15, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Verte crecer y mejorar me llen\u00f3 de orgullo." },
            { "numero": 16, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Decir te amo nunca dio miedo contigo." },
            { "numero": 17, "color": "#98FF98", "colorName": "Verde Menta", "frase": "El te amo sali\u00f3 sincero y se qued\u00f3 para siempre." },
            { "numero": 18, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Decirte chi por primera vez ya no era tan fr\u00edo." },
            { "numero": 19, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Hasta las palabras m\u00e1s peque\u00f1as se llenan de cari\u00f1o a tu lado." },
            { "numero": 20, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Celebrar mi cumplea\u00f1os contigo, aunque lejos, mantuvo nuestros corazones juntos." },
            { "numero": 21, "color": "#98FF98", "colorName": "Verde Menta", "frase": "La distancia nunca cambi\u00f3 que siempre est\u00e1s conmigo." },
            { "numero": 22, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Tu regalo fue el mejor que pude recibir." },
            { "numero": 23, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Tu notita sigue teniendo un lugar especial en m\u00ed." },
            { "numero": 24, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Recibir fotos tuyas en clase me alegraba todo el d\u00eda." },
            { "numero": 25, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Las videollamadas largas son momentos m\u00e1gicos." },
            { "numero": 26, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Trece horas contigo se sintieron cortas." },
            { "numero": 27, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Empec\u00e9 a subir estados por ti, contigo y para ti." },
            { "numero": 28, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Ese coraz\u00f3n con nuestras manos dijo m\u00e1s que mil palabras." },
            { "numero": 29, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Firmar nuestra acta de matrimonio robloxiana fue perfecto." },
            { "numero": 30, "color": "#98FF98", "colorName": "Verde Menta", "frase": "Moonlight y How Deep Is Your Love empezaron a sonar como nosotros en nuestros estados." },
            { "numero": 1, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Hacer nuestras iniciales en los chetes hizo real lo que ya sent\u00edamos." },
            { "numero": 2, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Ver nuestras iniciales en nuestra piel me hizo sentir que eres m\u00eda y yo tuyo." },
            { "numero": 3, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Poner una foto juntos fue mostrarle al mundo lo que ya \u00e9ramos." },
            { "numero": 4, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Contigo dej\u00e9 de pensar en yo y empec\u00e9 a sentir nosotros." },
            { "numero": 5, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Cada canci\u00f3n que me dedicabas tocaba algo profundo en m\u00ed." },
            { "numero": 6, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Las canciones dejaron de sonar igual desde que llevan tu nombre." },
            { "numero": 7, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Entend\u00ed que todo en mi camino me estaba acercando a ti." },
            { "numero": 8, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Aprender tus jergas fue aprender tu mundo." },
            { "numero": 9, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Cuando me ense\u00f1aste latear, fue una sonrisa tuya ense\u00f1\u00e1ndomela." },
            { "numero": 10, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Nuestra manera de hablar se volvi\u00f3 parte de mis d\u00edas." },
            { "numero": 11, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Llegar a Lima sabiendo que estabas t\u00fa lo cambi\u00f3 todo." },
            { "numero": 12, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Que me ayudaras con mi estad\u00eda me hizo sentir cuidado por ti." },
            { "numero": 13, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Dianelita fue un regalo lleno del amor que siento por ti." },
            { "numero": 14, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Verte feliz con ese peluche hizo que todo valiera la pena." },
            { "numero": 15, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Nuestra velada en Lima fue perfecta y se qued\u00f3 en mi coraz\u00f3n." },
            { "numero": 16, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "El primer d\u00eda a tu lado confirm\u00f3 lo que mi coraz\u00f3n ya sab\u00eda." },
            { "numero": 17, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Caminar contigo por las calles hizo que todo brillara distinto." },
            { "numero": 18, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Jironear contigo fue descubrir la ciudad desde el amor." },
            { "numero": 19, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Las fotos que nos tomamos guardan un recuerdo que quiero repetir infinitas veces." },
            { "numero": 20, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Verte en pijama afuera de tu casa fue uno de los momentos m\u00e1s tiernos." },
            { "numero": 21, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Contigo, cualquier instante cotidiano se vuelve inolvidable." },
            { "numero": 22, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Una p\u00e1gina para nuestra historia fue mi forma de decir que veo un futuro contigo." },
            { "numero": 23, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Nuestra historia merece ser escrita y recordada." },
            { "numero": 24, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Hacer quizzes contigo me mostr\u00f3 cu\u00e1nto nos conocemos." },
            { "numero": 25, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Descubrirte nunca deja de enamorarme y sorprenderme." },
            { "numero": 26, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Cada canci\u00f3n que te dedico lleva parte de mi alma." },
            { "numero": 27, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Para ti va mi coraz\u00f3n completo." },
            { "numero": 28, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Compartir nuestras fotos de ni\u00f1os fue abrirnos el alma." },
            { "numero": 29, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Saber que estuve en Lima de peque\u00f1o me hizo pensar que el destino ya sab\u00eda de nosotros." },
            { "numero": 30, "color": "#DC143C", "colorName": "Rojo Carmes\u00ed", "frase": "Amarte hace que todo tenga m\u00e1s sentido." }
        ];
        var currentNote = null;
        var openedNotes = new Set();
        var favoriteNotes = new Set();
        var selectedColor = null;
        var activeGalleryColor = null;

        // ============ TIMELINE DATA ============
        var timelineEvents = [
            { date: 'Febrero 2025', label: 'Donde comenzó nuestro destino' },
            { date: 'Abril 2025', label: 'El mes en que empezamos a ser uno' },
            { date: 'Mayo 2025', label: 'Nuestra primera aventura' },
            { date: 'Junio 2025', label: 'Nos regalamos amor en forma de detalles' },
            { date: 'Agosto 2025', label: 'A tu lado, todo se volvió mágico' },
            { date: 'Septiembre 2025', label: 'En este mes nació quien hace latir mi corazón.' },
            { date: 'Noviembre 2025', label: 'Ese picnic mágico sellado con nuestro “para siempre”' },
            { date: 'Febrero 2026', label: 'El primer San Valentín, inolvidable.' },
            { date: 'Abril 2026', label: 'Cumpliremos un año… y cada día te amo más.' },
            { date: 'Siempre', label: 'Por muchos mas...' }
        ];

        // ============ INIT ============
        document.addEventListener('DOMContentLoaded', function () {
            loadFromLocalStorage();
            loadTheme();
            updateAnniversaryCounter();
            renderColorSelector();
            renderGallery();
            renderGalleryColorFilters();
            renderDailyNote();
            updateProgress();
            createParticles();
            renderTimeline();
            attachEventListeners();
            initParallax();
        });

        // ============ EVENTS ============
        function attachEventListeners() {
            document.getElementById('searchBtn').addEventListener('click', searchPapelito);
            document.getElementById('surpriseBtn').addEventListener('click', surprisePapelito);
            document.getElementById('numberInput').addEventListener('keypress', function (e) {
                if (e.key === 'Enter') searchPapelito();
            });

            document.querySelectorAll('.tab-btn').forEach(function (btn) {
                btn.addEventListener('click', function () {
                    switchTab(btn.dataset.tab);
                });
            });

            document.getElementById('gallerySearch').addEventListener('input', function (e) {
                filterGallery(e.target.value);
            });

            document.getElementById('themeToggle').addEventListener('click', toggleTheme);

            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') closePapelitoModal();
            });
        }

        // ============ DARK MODE ============
        function toggleTheme() {
            var isDark = document.body.classList.toggle('dark-mode');
            var icon = document.getElementById('themeIcon');
            icon.innerHTML = isDark ? '&#9788;' : '&#9790;';
            localStorage.setItem('papelitos-theme', isDark ? 'dark' : 'light');
        }

        function loadTheme() {
            var saved = localStorage.getItem('papelitos-theme');
            if (saved === 'dark') {
                document.body.classList.add('dark-mode');
                document.getElementById('themeIcon').innerHTML = '&#9788;';
            }
        }

        // ============ FLOATING PARTICLES ============
        function createParticles() {
            var container = document.getElementById('particlesBg');
            var shapes = ['\u2661', '\u2665', '\u2726', '\u2727', '\u00B7'];
            var count = 20;

            for (var i = 0; i < count; i++) {
                var p = document.createElement('div');
                p.className = 'particle';
                p.textContent = shapes[Math.floor(Math.random() * shapes.length)];
                p.style.left = Math.random() * 100 + '%';
                p.style.setProperty('--p-dur', (10 + Math.random() * 15) + 's');
                p.style.setProperty('--p-delay', (Math.random() * 12) + 's');
                p.style.setProperty('--p-size', (0.8 + Math.random() * 1.2) + 'rem');
                p.style.setProperty('--p-opacity', (0.08 + Math.random() * 0.14).toFixed(2));
                p.style.setProperty('--p-drift-start', (Math.random() * 40 - 20) + 'px');
                p.style.setProperty('--p-drift-end', (Math.random() * 60 - 30) + 'px');
                p.style.setProperty('--p-rotate', (Math.random() * 360) + 'deg');
                container.appendChild(p);
            }
        }

        // ============ PARALLAX ============
        function initParallax() {
            var header = document.getElementById('headerEl');
            if (!header) return;
            var title = header.querySelector('.header-title');
            var subtitle = header.querySelector('.subtitle');
            var counter = header.querySelector('.anniversary-counter');

            window.addEventListener('scroll', function () {
                var scrollY = window.scrollY;
                if (scrollY > 500) return;
                var slow = scrollY * 0.15;
                var fast = scrollY * 0.3;
                if (title) title.style.transform = 'translateY(' + slow + 'px)';
                if (subtitle) subtitle.style.transform = 'translateY(' + (slow * 0.7) + 'px)';
                if (counter) counter.style.transform = 'translateY(' + (-fast * 0.2) + 'px)';
            }, { passive: true });
        }

        // ============ TIMELINE ============
        function renderTimeline() {
            var track = document.getElementById('timelineTrack');
            if (!track) return;
            track.innerHTML = '';

            timelineEvents.forEach(function (evt, idx) {
                var item = document.createElement('div');
                item.className = 'timeline-item';
                var delay = idx * 0.1;
                item.style.setProperty('--timeline-delay', delay + 's');

                item.innerHTML =
                    '<div class="timeline-dot"></div>' +
                    '<div class="timeline-date">' + evt.date + '</div>' +
                    '<div class="timeline-label">' + evt.label + '</div>';
                track.appendChild(item);
            });
        }

        // ============ ANNIVERSARY (Year, Months, Days order) ============
        function updateAnniversaryCounter() {
            var meetDate = new Date('2025-04-23');
            var today = new Date();
            var diffMs = today - meetDate;
            var diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

            var years = Math.floor(diffDays / 365);
            var months = Math.floor((diffDays % 365) / 30);
            var days = diffDays % 30;

            document.getElementById('years').textContent = years;
            document.getElementById('months').textContent = months;
            document.getElementById('days').textContent = days;
        }

        // ============ COLORS ============
        function renderColorSelector() {
            var colorGrid = document.getElementById('colorGrid');
            var seen = {};
            var colors = [];

            papelitos.forEach(function (p) {
                if (!seen[p.color]) {
                    seen[p.color] = true;
                    colors.push({ color: p.color, name: p.colorName });
                }
            });

            colors.forEach(function (c) {
                var el = document.createElement('div');
                el.className = 'color-option';
                el.style.backgroundColor = c.color;
                el.title = c.name;
                el.setAttribute('role', 'button');
                el.setAttribute('aria-label', 'Color ' + c.name);
                el.addEventListener('click', function () {
                    document.querySelectorAll('.color-option').forEach(function (o) {
                        o.classList.remove('selected');
                    });
                    el.classList.add('selected');
                    selectedColor = c.color;
                });
                colorGrid.appendChild(el);
            });
        }

        // ============ SEARCH ============
        function searchPapelito() {
            var num = parseInt(document.getElementById('numberInput').value);

            if (!num || num < 1 || num > 30) {
                alert('Por favor ingresa un numero entre 1 y 30');
                return;
            }
            if (selectedColor === null) {
                alert('Por favor selecciona un color');
                return;
            }

            var papelito = papelitos.find(function (p) {
                return p.numero === num && p.color === selectedColor;
            });

            if (papelito) {
                displayNote(papelito);
                addToHistory(papelito);
            } else {
                alert('Papelito no encontrado. Intenta con otro numero o color.');
            }
        }

        // ============ SURPRISE ============
        function surprisePapelito() {
            var rand = papelitos[Math.floor(Math.random() * papelitos.length)];
            displayNote(rand);
            addToHistory(rand);
        }

        // ============ DISPLAY NOTE (Papelito Modal) ============
        function displayNote(papelito) {
            currentNote = papelito;
            var overlay = document.getElementById('papelitoOverlay');
            var fold = document.getElementById('papelitoFold');
            var foldFace = document.getElementById('papelitoFoldFace');
            var revealed = document.getElementById('papelitoRevealed');
            var numberDisplay = document.getElementById('foldNumberDisplay');
            var key = papelito.numero + '-' + papelito.color;
            var isFav = favoriteNotes.has(key);

            // Reset state
            fold.classList.remove('unfolding');
            void fold.offsetWidth;

            // Set color and number on folded face
            foldFace.style.background = papelito.color;
            numberDisplay.textContent = '#' + papelito.numero;

            // Prepare revealed content
            revealed.innerHTML =
                '<span class="pr-badge">Papelito #' + papelito.numero + '</span>' +
                '<div class="pr-color-dot"></div>' +
                '<span class="pr-color-name">' + papelito.colorName + '</span>' +
                '<div class="pr-message">' + papelito.frase + '</div>' +
                '<div class="pr-actions">' +
                '<button class="pr-btn pr-btn-fav ' + (isFav ? 'is-fav' : '') + '" id="modalFavBtn">' +
                (isFav ? '\u2764\uFE0F Favorito' : '\u{1F90D} Guardar') +
                '</button>' +
                '<button class="pr-btn pr-btn-share" id="modalShareBtn">Compartir</button>' +
                '<button class="pr-btn pr-btn-close" id="modalCloseBtn">Cerrar</button>' +
                '</div>';

            // Show overlay
            overlay.classList.add('visible');
            document.body.style.overflow = 'hidden';

            // Attach fold click to unfold
            fold.onclick = function () {
                if (!fold.classList.contains('unfolding')) {
                    fold.classList.add('unfolding');
                    foldFace.style.background = papelito.color;
                    launchConfetti();
                }
            };

            // Attach button events after a small delay so they exist in DOM
            setTimeout(function () {
                var favBtn = document.getElementById('modalFavBtn');
                var shareBtn = document.getElementById('modalShareBtn');
                var closeBtn = document.getElementById('modalCloseBtn');

                if (favBtn) favBtn.onclick = function (e) { e.stopPropagation(); toggleFavoriteModal(); };
                if (shareBtn) shareBtn.onclick = function (e) { e.stopPropagation(); shareNote(); };
                if (closeBtn) closeBtn.onclick = function (e) { e.stopPropagation(); closePapelitoModal(); };
            }, 50);

            // Close on overlay click (outside paper)
            overlay.onclick = function (e) {
                if (e.target === overlay) closePapelitoModal();
            };
        }

        function closePapelitoModal() {
            var overlay = document.getElementById('papelitoOverlay');
            var fold = document.getElementById('papelitoFold');
            overlay.classList.remove('visible');
            document.body.style.overflow = '';
            setTimeout(function () {
                fold.classList.remove('unfolding');
            }, 400);
        }

        function toggleFavoriteModal() {
            if (!currentNote) return;
            var key = currentNote.numero + '-' + currentNote.color;
            var btn = document.getElementById('modalFavBtn');

            if (favoriteNotes.has(key)) {
                favoriteNotes.delete(key);
                if (btn) { btn.classList.remove('is-fav'); btn.innerHTML = '\u{1F90D} Guardar'; }
            } else {
                favoriteNotes.add(key);
                if (btn) { btn.classList.add('is-fav'); btn.innerHTML = '\u2764\uFE0F Favorito'; }
            }
            saveToLocalStorage();
            renderFavorites();
        }

        // ============ HISTORY ============
        function addToHistory(papelito) {
            var key = papelito.numero + '-' + papelito.color;
            openedNotes.add(key);
            saveToLocalStorage();
            updateGalleryDisplay();
            updateProgress();
        }

        // ============ FAVORITE (legacy, now handled via modal) ============
        function toggleFavorite() {
            toggleFavoriteModal();
        }

        // ============ CLOSE NOTE (legacy, now handled via modal) ============
        function closeNote() {
            closePapelitoModal();
        }

        // ============ SHARE ============
        function shareNote() {
            if (!currentNote) return;
            var text = '\u201C' + currentNote.frase + '\u201D - Papelito #' + currentNote.numero + ' (' + currentNote.colorName + ')';
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(function () {
                    showToast('Frase copiada al portapapeles');
                }).catch(function () {
                    fallbackCopy(text);
                });
            } else {
                fallbackCopy(text);
            }
        }

        function fallbackCopy(text) {
            var ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.left = '-9999px';
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand('copy'); showToast('Frase copiada al portapapeles'); }
            catch (e) { showToast('No se pudo copiar'); }
            document.body.removeChild(ta);
        }

        function showToast(msg) {
            var existing = document.querySelector('.share-toast');
            if (existing) existing.remove();
            var toast = document.createElement('div');
            toast.className = 'share-toast';
            toast.textContent = msg;
            document.body.appendChild(toast);
            requestAnimationFrame(function () {
                toast.classList.add('visible');
            });
            setTimeout(function () {
                toast.classList.remove('visible');
                setTimeout(function () { toast.remove(); }, 400);
            }, 2500);
        }

        // ============ CONFETTI / HEARTS ============
        function launchConfetti() {
            var container = document.getElementById('confettiContainer');
            container.innerHTML = '';
            var hearts = ['\u2764', '\u{1F497}', '\u{1F496}', '\u{1F49D}', '\u{1F49E}', '\u{1F49F}'];
            var confettiColors = ['#FF1493', '#FF69B4', '#FFB6C1', '#FF7F50', '#FFD700', '#87CEEB', '#98D8C8', '#DDA0DD'];

            for (var i = 0; i < 15; i++) {
                var h = document.createElement('div');
                h.className = 'heart-particle';
                h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                h.style.left = Math.random() * 100 + '%';
                h.style.setProperty('--fall-duration', (2 + Math.random() * 2) + 's');
                h.style.setProperty('--fall-delay', (Math.random() * 0.8) + 's');
                h.style.setProperty('--fall-rotate', (Math.random() * 360 - 180) + 'deg');
                h.style.fontSize = (1 + Math.random() * 1.2) + 'rem';
                container.appendChild(h);
            }

            for (var j = 0; j < 25; j++) {
                var c = document.createElement('div');
                c.className = 'confetti-piece';
                c.style.left = Math.random() * 100 + '%';
                c.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
                c.style.setProperty('--fall-duration', (2 + Math.random() * 2.5) + 's');
                c.style.setProperty('--fall-delay', (Math.random() * 0.6) + 's');
                c.style.setProperty('--fall-rotate', (Math.random() * 720) + 'deg');
                c.style.width = (6 + Math.random() * 8) + 'px';
                c.style.height = (6 + Math.random() * 8) + 'px';
                c.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
                container.appendChild(c);
            }

            setTimeout(function () { container.innerHTML = ''; }, 5000);
        }

        // ============ GALLERY ============
        function renderGallery() {
            var grid = document.getElementById('galleryGrid');
            grid.innerHTML = '';

            papelitos.forEach(function (p, idx) {
                var item = document.createElement('div');
                item.className = 'gallery-item';
                item.style.backgroundColor = p.color;
                item.setAttribute('role', 'button');
                item.setAttribute('aria-label', 'Papelito numero ' + p.numero);
                var delay = Math.min(idx, 80) * 0.012;
                item.style.setProperty('--stagger-delay', delay + 's');

                var key = p.numero + '-' + p.color;
                if (openedNotes.has(key)) item.classList.add('opened');

                var html = p.numero.toString();
                if (favoriteNotes.has(key)) html += '<div class="favorite-icon">\u2764\uFE0F</div>';
                if (openedNotes.has(key)) html += '<div class="checkmark">\u2713</div>';
                item.innerHTML = html;

                item.addEventListener('click', function () {
                    displayNote(p);
                    addToHistory(p);
                });

                grid.appendChild(item);
            });
        }

        function filterGallery(term) {
            var items = document.querySelectorAll('.gallery-item');
            var t = (term || '').toLowerCase();
            items.forEach(function (item, i) {
                var p = papelitos[i];
                var textMatch = !t || p.numero.toString().includes(t) || p.colorName.toLowerCase().includes(t);
                var colorMatch = !activeGalleryColor || p.color === activeGalleryColor;
                item.style.display = (textMatch && colorMatch) ? 'flex' : 'none';
            });
        }

        function renderGalleryColorFilters() {
            var container = document.getElementById('galleryColorFilters');
            container.innerHTML = '';
            var seen = {};
            var colors = [];
            papelitos.forEach(function (p) {
                if (!seen[p.color]) {
                    seen[p.color] = true;
                    colors.push({ color: p.color, name: p.colorName });
                }
            });

            var allBtn = document.createElement('button');
            allBtn.className = 'gallery-filter-btn gallery-filter-all active-filter';
            allBtn.textContent = 'Todos';
            allBtn.title = 'Mostrar todos';
            allBtn.addEventListener('click', function () {
                activeGalleryColor = null;
                document.querySelectorAll('.gallery-filter-btn').forEach(function (b) { b.classList.remove('active-filter'); });
                allBtn.classList.add('active-filter');
                filterGallery(document.getElementById('gallerySearch').value);
            });
            container.appendChild(allBtn);

            colors.forEach(function (c) {
                var btn = document.createElement('button');
                btn.className = 'gallery-filter-btn';
                btn.style.backgroundColor = c.color;
                btn.title = c.name;
                btn.setAttribute('aria-label', 'Filtrar por ' + c.name);
                btn.addEventListener('click', function () {
                    activeGalleryColor = c.color;
                    document.querySelectorAll('.gallery-filter-btn').forEach(function (b) { b.classList.remove('active-filter'); });
                    btn.classList.add('active-filter');
                    filterGallery(document.getElementById('gallerySearch').value);
                });
                container.appendChild(btn);
            });
        }

        // ============ DAILY NOTE ============
        function renderDailyNote() {
            var today = new Date();
            var dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
            var index = dayOfYear % papelitos.length;
            var p = papelitos[index];

            var body = document.getElementById('dailyNoteBody');
            body.innerHTML =
                '<div class="daily-note-color" style="background-color: ' + p.color + '"></div>' +
                '<div class="daily-note-text">' +
                '<div class="daily-note-message">\u201C' + p.frase + '\u201D</div>' +
                '<div class="daily-note-meta">#' + p.numero + ' &middot; ' + p.colorName + '</div>' +
                '</div>';

            document.getElementById('dailyNote').addEventListener('click', function () {
                displayNote(p);
                addToHistory(p);
            });
        }

        // ============ PROGRESS ============
        function updateProgress() {
            var total = papelitos.length;
            var opened = openedNotes.size;
            var pct = total > 0 ? (opened / total * 100) : 0;
            document.getElementById('progressCount').textContent = opened + '/' + total;
            document.getElementById('progressBarFill').style.width = pct + '%';
        }

        function updateGalleryDisplay() {
            document.querySelectorAll('.gallery-item').forEach(function (item, i) {
                var p = papelitos[i];
                var key = p.numero + '-' + p.color;
                if (openedNotes.has(key)) {
                    item.classList.add('opened');
                    if (!item.querySelector('.checkmark')) {
                        var ck = document.createElement('div');
                        ck.className = 'checkmark';
                        ck.innerHTML = '\u2713';
                        item.appendChild(ck);
                    }
                }
            });
        }

        // ============ RENDER HISTORY ============
        function renderHistory() {
            var container = document.getElementById('historyContainer');
            if (openedNotes.size === 0) {
                container.innerHTML = '<p class="empty-message">No hay papelitos abiertos aun</p>';
                return;
            }
            container.innerHTML = '';

            var sorted = Array.from(openedNotes).map(function (key) {
                var parts = key.split('-');
                var num = parseInt(parts[0]);
                var color = parts.slice(1).join('-');
                return papelitos.find(function (p) { return p.numero === num && p.color === color; });
            }).filter(Boolean).sort(function (a, b) { return a.numero - b.numero; });

            sorted.forEach(function (p, idx) {
                var el = document.createElement('div');
                el.className = 'history-item';
                el.style.borderLeftColor = p.color;
                var delay = idx * 0.08;
                el.style.setProperty('--item-delay', delay + 's');

                el.innerHTML =
                    '<div class="history-item-header">' +
                    '<div class="history-item-color" style="background-color: ' + p.color + '"></div>' +
                    '<div class="history-item-info">' +
                    '<div class="history-item-number">#' + p.numero + '</div>' +
                    '<div class="history-item-color-name">' + p.colorName + '</div>' +
                    '</div>' +
                    '</div>' +
                    '<p class="history-item-message">\u201C' + p.frase + '\u201D</p>';
                el.addEventListener('click', function () {
                    displayNote(p);
                });
                container.appendChild(el);
            });
        }

        // ============ RENDER FAVORITES ============
        function renderFavorites() {
            var container = document.getElementById('favoritesContainer');
            if (favoriteNotes.size === 0) {
                container.innerHTML = '<p class="empty-message">No hay papelitos favoritos aun</p>';
                return;
            }
            container.innerHTML = '';

            var sorted = Array.from(favoriteNotes).map(function (key) {
                var parts = key.split('-');
                var num = parseInt(parts[0]);
                var color = parts.slice(1).join('-');
                return papelitos.find(function (p) { return p.numero === num && p.color === color; });
            }).filter(Boolean).sort(function (a, b) { return a.numero - b.numero; });

            sorted.forEach(function (p, idx) {
                var el = document.createElement('div');
                el.className = 'favorite-item';
                el.style.borderLeftColor = p.color;
                var delay = idx * 0.08;
                el.style.setProperty('--item-delay', delay + 's');

                el.innerHTML =
                    '<div class="history-item-header">' +
                    '<div class="history-item-color" style="background-color: ' + p.color + '"></div>' +
                    '<div class="history-item-info">' +
                    '<div class="history-item-number">\u2764\uFE0F #' + p.numero + '</div>' +
                    '<div class="history-item-color-name">' + p.colorName + '</div>' +
                    '</div>' +
                    '</div>' +
                    '<p class="history-item-message">\u201C' + p.frase + '\u201D</p>';
                el.addEventListener('click', function () {
                    displayNote(p);
                });
                container.appendChild(el);
            });
        }

        // ============ TABS ============
        function switchTab(tabName) {
            document.querySelectorAll('.tab-content').forEach(function (t) { t.classList.remove('active'); });
            document.querySelectorAll('.tab-btn').forEach(function (b) {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });

            document.getElementById(tabName).classList.add('active');
            var activeBtn = document.querySelector('[data-tab="' + tabName + '"]');
            activeBtn.classList.add('active');
            activeBtn.setAttribute('aria-selected', 'true');

            if (tabName === 'history') renderHistory();
            if (tabName === 'favorites') renderFavorites();
        }

        // ============ LOCAL STORAGE ============
        function saveToLocalStorage() {
            localStorage.setItem('openedNotes', JSON.stringify(Array.from(openedNotes)));
            localStorage.setItem('favoriteNotes', JSON.stringify(Array.from(favoriteNotes)));
        }

        function loadFromLocalStorage() {
            var opened = localStorage.getItem('openedNotes');
            var favs = localStorage.getItem('favoriteNotes');
            if (opened) openedNotes = new Set(JSON.parse(opened));
            if (favs) favoriteNotes = new Set(JSON.parse(favs));
        }