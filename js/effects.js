// ============================================================
// effects.js — Efectos visuales globales del proyecto
// ============================================================

// --- Partículas brillantes ---
function createSparkles() {
    const sparklesContainer = document.getElementById("sparkles")
    if (!sparklesContainer) return

    const createSparkle = () => {
        const sparkle = document.createElement("div")
        sparkle.className = "sparkle"
        sparkle.style.left = Math.random() * 100 + "%"
        sparkle.style.top = Math.random() * 100 + "%"
        sparkle.style.animationDelay = Math.random() * 3 + "s"
        sparklesContainer.appendChild(sparkle)

        setTimeout(() => {
            if (sparkle.parentNode) sparkle.parentNode.removeChild(sparkle)
        }, 3000)
    }

    // Crear brillos iniciales escalonados
    for (let i = 0; i < 15; i++) {
        setTimeout(createSparkle, i * 200)
    }

    // Continuar creando brillos periódicamente
    setInterval(createSparkle, 400)
}

// --- Corazones flotantes ---
function createFloatingHearts() {
    const heartsContainer = document.getElementById("hearts") || document.getElementById("floating-hearts")
    if (!heartsContainer) return

    const heartEmojis = ["💖", "💕", "💗", "💓", "💝", "💘"]

    const createHeart = () => {
        const heart = document.createElement("div")
        heart.className = "heart"
        heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)]
        heart.style.left = Math.random() * 100 + "%"
        heart.style.animationDelay = Math.random() * 8 + "s"
        heart.style.fontSize = 15 + Math.random() * 10 + "px"
        heartsContainer.appendChild(heart)

        setTimeout(() => {
            if (heart.parentNode) heart.parentNode.removeChild(heart)
        }, 8000)
    }

    // Crear corazones iniciales
    for (let i = 0; i < 3; i++) {
        setTimeout(createHeart, i * 1500)
    }

    // Continuar creando corazones periódicamente
    setInterval(createHeart, 3000)
}

// --- Pétalos cayendo ---
function createFallingPetals() {
    const petalsContainer = document.getElementById("falling-petals")
    if (!petalsContainer) return

    const petalEmojis = ["🌸", "🌺", "🌹", "🌷", "🌻"]

    const createPetal = () => {
        const petal = document.createElement("div")
        petal.className = "petal"
        petal.innerHTML = petalEmojis[Math.floor(Math.random() * petalEmojis.length)]
        petal.style.left = Math.random() * 100 + "%"
        petal.style.animationDuration = Math.random() * 4 + 8 + "s"
        petal.style.animationDelay = Math.random() * 3 + "s"
        petalsContainer.appendChild(petal)

        setTimeout(() => {
            if (petal.parentNode) petal.parentNode.removeChild(petal)
        }, 12000)
    }

    setInterval(createPetal, 1500)
}

// --- Brillos alrededor del ramo (pantalla final) ---
function createBouquetSparkles() {
    const sparklesContainer = document.getElementById("bouquet-sparkles")
    if (!sparklesContainer) return

    for (let i = 0; i < 12; i++) {
        const sparkle = document.createElement("div")
        sparkle.className = "sparkle"

        const angle = (Math.PI * 2 * i) / 12
        const radius = 80
        const x = Math.cos(angle) * radius + 100
        const y = Math.sin(angle) * radius + 100

        sparkle.style.left = x + "px"
        sparkle.style.top = y + "px"
        sparkle.style.animationDelay = i * 0.2 + "s"
        sparkle.style.animationDuration = Math.random() * 2 + 2 + "s"

        sparklesContainer.appendChild(sparkle)
    }
}

// --- Efecto de partículas al hacer click ---
function createClickEffect(x, y) {
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement("div")
        particle.style.cssText = `
            position: fixed; left: ${x}px; top: ${y}px;
            width: 8px; height: 8px;
            background: radial-gradient(circle, #FFB6C1, #FF69B4);
            border-radius: 50%; pointer-events: none; z-index: 1000;
        `

        const angle = (Math.PI * 2 * i) / 6
        const velocity = 150
        const vx = Math.cos(angle) * velocity
        const vy = Math.sin(angle) * velocity

        document.body.appendChild(particle)

        let posX = x, posY = y, opacity = 1, scale = 1

        const animate = () => {
            posX += vx * 0.02
            posY += vy * 0.02
            opacity -= 0.03
            scale -= 0.02

            particle.style.left = posX + "px"
            particle.style.top = posY + "px"
            particle.style.opacity = opacity
            particle.style.transform = `scale(${scale})`

            if (opacity > 0 && scale > 0) {
                requestAnimationFrame(animate)
            } else {
                particle.remove()
            }
        }

        animate()
    }
}

// --- Brillos en tarjetas (hover en index) ---
function createCardSparkles(card) {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const sparkle = document.createElement("div")
            sparkle.style.cssText = `
                position: absolute; width: 3px; height: 3px;
                background: radial-gradient(circle, #ffb6c1, #ffc0cb, transparent);
                border-radius: 50%;
                left: ${Math.random() * 100}%; top: ${Math.random() * 100}%;
                animation: sparkle 1s ease-out forwards;
                pointer-events: none; z-index: 10;
            `
            card.appendChild(sparkle)
            setTimeout(() => {
                if (sparkle.parentNode) sparkle.parentNode.removeChild(sparkle)
            }, 1000)
        }, i * 100)
    }
}

// ============================================================
// Inicialización global de efectos de botones
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
    // Efecto ripple en botones
    document.querySelectorAll(".btn").forEach((button) => {
        button.addEventListener("click", function (e) {
            const ripple = document.createElement("span")
            const rect = this.getBoundingClientRect()
            const size = Math.max(rect.width, rect.height)
            const x = e.clientX - rect.left - size / 2
            const y = e.clientY - rect.top - size / 2

            ripple.style.cssText = `
                width: ${size}px; height: ${size}px;
                left: ${x}px; top: ${y}px;
                position: absolute; border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                transform: scale(0); animation: ripple 0.6s linear;
                pointer-events: none;
            `
            this.appendChild(ripple)
            setTimeout(() => ripple.remove(), 600)
        })

        button.addEventListener("mouseenter", () => {
            button.style.filter = "brightness(1.1) saturate(1.2)"
        })
        button.addEventListener("mouseleave", () => {
            button.style.filter = "brightness(1) saturate(1)"
        })
    })

    // Inyectar keyframe ripple dinámicamente
    const style = document.createElement("style")
    style.textContent = `@keyframes ripple { to { transform: scale(2); opacity: 0; } }`
    document.head.appendChild(style)

    // Click en el fondo dispara efecto de partículas
    document.addEventListener("click", (e) => {
        if (!e.target.classList.contains("btn") && !e.target.closest(".btn")) {
            createClickEffect(e.clientX, e.clientY)
        }
    })

    // Efecto sparkle en tarjetas de inicio (si existen)
    document.querySelectorAll(".option-card").forEach((card) => {
        card.addEventListener("mouseenter", () => createCardSparkles(card))
    })
})
