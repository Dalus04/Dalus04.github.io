// Crear efectos de brillos
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
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle)
            }
        }, 3000)
    }

    // Crear brillos iniciales
    for (let i = 0; i < 15; i++) {
        setTimeout(createSparkle, i * 200)
    }

    // Continuar creando brillos
    setInterval(createSparkle, 400)
}

// Crear corazones flotantes
function createFloatingHearts() {
    const heartsContainer = document.getElementById("hearts")
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
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart)
            }
        }, 8000)
    }

    // Crear corazones iniciales
    for (let i = 0; i < 3; i++) {
        setTimeout(createHeart, i * 1500)
    }

    // Continuar creando corazones
    setInterval(createHeart, 3000)
}

// Crear pétalos flotantes
function createFloatingPetals() {
    const petalsContainer = document.getElementById("petals")
    if (!petalsContainer) return

    const petalEmojis = ["🌸", "🌺", "🌹", "🌷", "🌻"]

    const createPetal = () => {
        const petal = document.createElement("div")
        petal.className = "petal"
        petal.innerHTML = petalEmojis[Math.floor(Math.random() * petalEmojis.length)]
        petal.style.left = Math.random() * 100 + "%"
        petal.style.animationDelay = Math.random() * 10 + "s"
        petal.style.fontSize = 12 + Math.random() * 8 + "px"
        petalsContainer.appendChild(petal)

        setTimeout(() => {
            if (petal.parentNode) {
                petal.parentNode.removeChild(petal)
            }
        }, 10000)
    }

    // Crear pétalos iniciales
    for (let i = 0; i < 2; i++) {
        setTimeout(createPetal, i * 2000)
    }

    // Continuar creando pétalos
    setInterval(createPetal, 4000)
}

// Efectos adicionales para las tarjetas
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".option-card")

    cards.forEach((card) => {
        // Efecto de partículas al hacer hover
        card.addEventListener("mouseenter", () => {
            createCardSparkles(card)
        })
    })
})

// Crear brillos específicos para las tarjetas
function createCardSparkles(card) {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const sparkle = document.createElement("div")
            sparkle.style.position = "absolute"
            sparkle.style.width = "3px"
            sparkle.style.height = "3px"
            sparkle.style.background = "radial-gradient(circle, #ffb6c1, #ffc0cb, transparent)"
            sparkle.style.borderRadius = "50%"
            sparkle.style.left = Math.random() * 100 + "%"
            sparkle.style.top = Math.random() * 100 + "%"
            sparkle.style.animation = "sparkle 1s ease-out forwards"
            sparkle.style.pointerEvents = "none"
            sparkle.style.zIndex = "10"

            card.appendChild(sparkle)

            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle)
                }
            }, 1000)
        }, i * 100)
    }
}
