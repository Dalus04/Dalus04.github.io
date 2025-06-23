// Partículas brillantes
function createSparkles() {
    const sparklesContainer = document.getElementById("sparkles")
    if (!sparklesContainer) return

    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement("div")
        sparkle.className = "sparkle"
        sparkle.style.left = Math.random() * 100 + "%"
        sparkle.style.top = Math.random() * 100 + "%"
        sparkle.style.animationDelay = Math.random() * 3 + "s"
        sparklesContainer.appendChild(sparkle)
    }
}

// Corazones flotantes
function createFloatingHearts() {
    const heartsContainer = document.getElementById("hearts") || document.getElementById("floating-hearts")
    if (!heartsContainer) return

    setInterval(() => {
        const heart = document.createElement("div")
        heart.className = "heart"
        heart.innerHTML = ["💕", "💖", "💗", "💝", "💘"][Math.floor(Math.random() * 5)]
        heart.style.left = Math.random() * 100 + "%"
        heart.style.animationDuration = Math.random() * 3 + 5 + "s"
        heartsContainer.appendChild(heart)

        // Remover corazón después de la animación
        setTimeout(() => {
            if (heart.parentNode) {
                heart.remove()
            }
        }, 8000)
    }, 2000)
}

// Pétalos cayendo
function createFallingPetals() {
    const petalsContainer = document.getElementById("falling-petals")
    if (!petalsContainer) return

    setInterval(() => {
        const petal = document.createElement("div")
        petal.className = "petal"
        petal.innerHTML = ["🌸", "🌺", "🌻", "🌷", "🌹"][Math.floor(Math.random() * 5)]
        petal.style.left = Math.random() * 100 + "%"
        petal.style.animationDuration = Math.random() * 4 + 8 + "s"
        petal.style.animationDelay = Math.random() * 3 + "s"
        petalsContainer.appendChild(petal)

        // Remover pétalo después de la animación
        setTimeout(() => {
            if (petal.parentNode) {
                petal.remove()
            }
        }, 12000)
    }, 1500)
}

// Brillos alrededor del ramo
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

// Efecto de partículas al hacer click
function createClickEffect(x, y) {
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement("div")
        particle.style.position = "absolute"
        particle.style.left = x + "px"
        particle.style.top = y + "px"
        particle.style.width = "8px"
        particle.style.height = "8px"
        particle.style.background = "radial-gradient(circle, #FFB6C1, #FF69B4)"
        particle.style.borderRadius = "50%"
        particle.style.pointerEvents = "none"
        particle.style.zIndex = "1000"

        const angle = (Math.PI * 2 * i) / 6
        const velocity = 150
        const vx = Math.cos(angle) * velocity
        const vy = Math.sin(angle) * velocity

        document.body.appendChild(particle)

        let posX = x
        let posY = y
        let opacity = 1
        let scale = 1

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

// Reproducir sonido
function playSuccessSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)()
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1)

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)

        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.3)
    } catch (error) {
        console.log("Audio no disponible")
    }
}

// Inicializar efectos de botones
document.addEventListener("DOMContentLoaded", () => {
    // Efecto de click en botones
    document.querySelectorAll(".btn").forEach((button) => {
        button.addEventListener("click", function (e) {
            // Crear efecto de ondas
            const ripple = document.createElement("span")
            const rect = this.getBoundingClientRect()
            const size = Math.max(rect.width, rect.height)
            const x = e.clientX - rect.left - size / 2
            const y = e.clientY - rect.top - size / 2

            ripple.style.width = ripple.style.height = size + "px"
            ripple.style.left = x + "px"
            ripple.style.top = y + "px"
            ripple.style.position = "absolute"
            ripple.style.borderRadius = "50%"
            ripple.style.background = "rgba(255, 255, 255, 0.5)"
            ripple.style.transform = "scale(0)"
            ripple.style.animation = "ripple 0.6s linear"
            ripple.style.pointerEvents = "none"

            this.appendChild(ripple)

            setTimeout(() => {
                ripple.remove()
            }, 600)
        })

        // Efectos de hover
        button.addEventListener("mouseenter", () => {
            button.style.filter = "brightness(1.1) saturate(1.2)"
        })

        button.addEventListener("mouseleave", () => {
            button.style.filter = "brightness(1) saturate(1)"
        })
    })

    // Animación de ripple
    const style = document.createElement("style")
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `
    document.head.appendChild(style)

    // Efecto de partículas al hacer click 
    document.addEventListener("click", (e) => {
        if (!e.target.classList.contains("btn") && !e.target.closest(".btn")) {
            createClickEffect(e.clientX, e.clientY)
        }
    })
})
