// Lógica del juego de objetos ocultos
const foundObjects = new Set()
let totalObjects = 6
let sceneName = "park"
let hasDecoyObjects = false
let hintUsed = false
let hintCooldown = false
let gameIsPaused = false



// Elementos del DOM
let hiddenObjects, realObjects, decoyObjects, foundCountElement, nextButton, congratulationsElement, objectIcons

// Reproducir sonidos
function playSound(type) {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)()
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        switch (type) {
            case "success":
                oscillator.frequency.setValueAtTime(600, audioContext.currentTime)
                oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.2)
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4)
                oscillator.start(audioContext.currentTime)
                oscillator.stop(audioContext.currentTime + 0.4)
                break
            case "error":
                oscillator.frequency.setValueAtTime(300, audioContext.currentTime)
                oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.3)
                gainNode.gain.setValueAtTime(0.2, audioContext.currentTime)
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)
                oscillator.start(audioContext.currentTime)
                oscillator.stop(audioContext.currentTime + 0.3)
                break
            case "hint":
                oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
                oscillator.frequency.exponentialRampToValueAtTime(1000, audioContext.currentTime + 0.1)
                oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.2)
                gainNode.gain.setValueAtTime(0.2, audioContext.currentTime)
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)
                oscillator.start(audioContext.currentTime)
                oscillator.stop(audioContext.currentTime + 0.2)
                break
        }
    } catch (error) {
        // Audio no disponible en este entorno
    }
}

// Control del juego
function pauseGame() {
    gameIsPaused = true
    hiddenObjects.forEach((obj) => {
        obj.style.pointerEvents = "none"
    })
}

function resumeGame() {
    gameIsPaused = false
    hiddenObjects.forEach((obj) => {
        obj.style.pointerEvents = "auto"
    })
}

// Inicializar escena del juego
function initGameScene(config) {
    // Inicializar escena

    totalObjects = config.totalObjects
    sceneName = config.sceneName
    hasDecoyObjects = config.hasDecoyObjects

    hiddenObjects = document.querySelectorAll(".hidden-object")
    realObjects = hasDecoyObjects ? document.querySelectorAll('.hidden-object[data-real="true"]') : hiddenObjects
    decoyObjects = hasDecoyObjects ? document.querySelectorAll('.hidden-object[data-real="false"]') : []
    foundCountElement = document.getElementById("found-count")
    nextButton = document.getElementById("next-button")
    congratulationsElement = document.getElementById("congratulations")
    objectIcons = document.querySelectorAll(".object-icon")

    if (!hiddenObjects.length) {
        return
    }

    setupObjectListeners()

    // Restaurar progreso de sessionStorage
    const saved = sessionStorage.getItem(`found_${sceneName}`)
    if (saved) {
        try {
            const savedObjects = JSON.parse(saved)
            savedObjects.forEach(objId => {
                const el = document.querySelector(`.hidden-object[data-object="${objId}"]`)
                if (el) {
                    foundObjects.add(objId)
                    el.classList.add("found")
                    el.style.pointerEvents = "none"
                    const icon = document.querySelector(`.object-icon[data-icon="${objId}"]`)
                    if (icon) icon.classList.add("found")
                }
            })
            if (foundObjects.size === totalObjects && nextButton) {
                nextButton.classList.add("active")
            }
        } catch (e) { console.error("Error restaurando sessionStorage", e) }
    }

    updateFoundCount()

    setupSubtleHints()


}

// Listeners de objetos
function setupObjectListeners() {
    hiddenObjects.forEach((object, index) => {
        object.addEventListener("click", handleObjectClick)

        // Efectos de hover
        if (object.dataset.real === "true" || !hasDecoyObjects) {
            setupRealObjectHover(object)
        } else {
            setupDecoyObjectHover(object)
        }
    })
}

// Efectos hover para objetos reales
function setupRealObjectHover(object) {
    object.addEventListener("mouseenter", () => {
        if (!foundObjects.has(object.dataset.object) && !gameIsPaused) {
            object.style.opacity = "0.8"
            object.style.filter = "brightness(1.2) saturate(1.1) drop-shadow(0 0 8px currentColor)"
            object.style.transform = "scale(1.05)"
        }
    })

    object.addEventListener("mouseleave", () => {
        if (!foundObjects.has(object.dataset.object) && !gameIsPaused) {
            object.style.opacity = "0.4"
            object.style.filter = "brightness(0.6) saturate(0.5) drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2))"
            object.style.transform = "scale(1)"
        }
    })
}

// Efectos hover para objetos falsos
function setupDecoyObjectHover(object) {
    object.addEventListener("mouseenter", () => {
        if (!gameIsPaused) {
            object.style.opacity = "0.6"
            object.style.filter = "brightness(1.1) saturate(1.1) drop-shadow(0 0 5px currentColor)"
            object.style.transform = "scale(1.05)"
        }
    })

    object.addEventListener("mouseleave", () => {
        if (!gameIsPaused) {
            object.style.opacity = "0.3"
            object.style.filter = "brightness(0.5) saturate(0.4) drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2))"
            object.style.transform = "scale(1)"
        }
    })
}

// Configurar pistas sutiles
function setupSubtleHints() {
    if (!hintUsed) {
        setInterval(() => {
            if (foundObjects.size < totalObjects && !hintCooldown && !gameIsPaused) {
                const unfoundRealObjects = Array.from(realObjects).filter((obj) => !foundObjects.has(obj.dataset.object))

                if (unfoundRealObjects.length > 0 && Math.random() < 0.3) {
                    const randomObject = unfoundRealObjects[Math.floor(Math.random() * unfoundRealObjects.length)]

                    randomObject.style.animation = "subtleHint 1.5s ease-in-out"
                    setTimeout(() => {
                        randomObject.style.animation = ""
                    }, 1500)
                }
            }
        }, 12000)
    }
}

// Manejar click en objeto
function handleObjectClick(event) {
    if (gameIsPaused) return

    const object = event.target
    const objectType = object.dataset.object
    const isReal = object.dataset.real !== "false"

    // Si es un objeto falso
    if (hasDecoyObjects && !isReal) {
        handleDecoyClick(object)
        return
    }

    // Si es un objeto real y no ha sido encontrado
    if (!foundObjects.has(objectType)) {
        foundObjects.add(objectType)
        object.classList.add("found")
        object.style.pointerEvents = "none"

        // Guardar progreso en sessionStorage
        sessionStorage.setItem(`found_${sceneName}`, JSON.stringify([...foundObjects]))

        pauseGame()

        // Efectos visuales
        createEnhancedParticleEffect(object)

        // Actualizar UI
        updateUI(objectType)

        // Reproducir sonido de éxito
        playSound("success")

        // Mostrar mensaje 
        showRomanticMessage(objectType, () => {
            resumeGame()

            // Verificar si se completó el juego
            if (foundObjects.size === totalObjects) {
                setTimeout(() => {
                    completeScene()
                }, 500)
            }
        })
    } else {
        showMessage("¡Ya encontraste este recuerdo!", "info")
    }
}

// Mostrar mensaje con barra de progreso
function showRomanticMessage(objectType, callback) {
    const message = romanticMessages[objectType] || "💕 ¡Encontraste un recuerdo especial! 💕"

    // Crear overlay
    const overlay = document.createElement("div")
    overlay.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.3); z-index: 2999;
    backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);
  `

    // Crear contenedor del mensaje
    const messageDiv = document.createElement("div")
    messageDiv.innerHTML = message
    messageDiv.style.cssText = `
    position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.98); padding: 30px 40px 20px 40px;
    border-radius: 25px; font-size: 1.5rem; font-family: 'Dancing Script', cursive;
    font-weight: 600; color: #ff69b4; text-align: center; max-width: 450px;
    line-height: 1.5; z-index: 3000; border: 3px solid rgba(255, 105, 180, 0.4);
    box-shadow: 0 20px 50px rgba(255, 105, 180, 0.4), 0 10px 30px rgba(255, 105, 180, 0.3);
    backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
    animation: romanticMessageAppear 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  `

    // Agregar decoración
    const decoration = document.createElement("div")
    decoration.innerHTML = "✨💖✨"
    decoration.style.cssText = `
    font-size: 2rem; margin-bottom: 15px;
    animation: sparkleRotate 2s ease-in-out infinite;
  `

    // Crear barra de progreso
    const progressContainer = document.createElement("div")
    progressContainer.style.cssText = `
    margin-top: 20px; width: 100%; height: 8px;
    background: rgba(255, 105, 180, 0.2); border-radius: 4px; overflow: hidden;
  `

    const progressBar = document.createElement("div")
    progressBar.style.cssText = `
    width: 100%; height: 100%; border-radius: 4px; transition: width 1s linear;
    background: linear-gradient(90deg, #ff69b4, #ffb6c1, #ff1493);
    box-shadow: 0 0 10px rgba(255, 105, 180, 0.5);
  `

    // Ensamblar
    messageDiv.insertBefore(decoration, messageDiv.firstChild)
    progressContainer.appendChild(progressBar)
    messageDiv.appendChild(progressContainer)
    document.body.appendChild(overlay)
    document.body.appendChild(messageDiv)

    // Animar barra de progreso
    const updateInterval = 50
    const decrement = updateInterval / 1000
    let timeLeft = 4.0

    const progressInterval = setInterval(() => {
        timeLeft -= decrement

        if (timeLeft <= 0) {
            timeLeft = 0
            clearInterval(progressInterval)

            messageDiv.style.animation = "romanticMessageDisappear 0.3s ease-in"
            overlay.style.animation = "fadeOut 0.3s ease-in"

            setTimeout(() => {
                messageDiv.remove()
                overlay.remove()
                if (callback) callback()
            }, 300)
        }

        const percentage = (timeLeft / 2.0) * 100
        progressBar.style.width = percentage + "%"
    }, updateInterval)

    setTimeout(() => {
        progressBar.style.width = "0%"
    }, 50)
}

// Manejar clic en objeto falso
function handleDecoyClick(object) {
    if (gameIsPaused) return

    object.style.animation = "errorShake 0.5s ease-in-out"
    setTimeout(() => {
        object.style.animation = ""
    }, 500)

    showDecoyMessage()
    playSound("error")
}

// Mostrar mensaje de objeto falso
function showDecoyMessage() {
    const decoyMessage = document.getElementById("decoy-message")
    if (decoyMessage) {
        decoyMessage.classList.add("show")
        setTimeout(() => {
            decoyMessage.classList.remove("show")
        }, 2000)
    }
}

// Sistema de pistas
function useHint() {
    if (hintCooldown) {
        showMessage("¡Espera un momento antes de usar otra pista!", "warning")
        return
    }

    if (foundObjects.size === totalObjects) {
        showMessage("¡Ya encontraste todos los objetos!", "success")
        return
    }

    const unfoundObjects = Array.from(realObjects).filter((obj) => !foundObjects.has(obj.dataset.object))

    if (unfoundObjects.length === 0) {
        showMessage("¡Ya encontraste todos los objetos!", "success")
        return
    }

    // Resaltar objetos inmediatamente
    unfoundObjects.forEach((object) => {
        // Guardar estilos originales
        const originalOpacity = object.style.opacity || (sceneName === "beach" ? "0.1" : "0.4")
        const originalFilter =
            object.style.filter ||
            (sceneName === "beach"
                ? "brightness(0.3) saturate(0.2) blur(1px)"
                : "brightness(0.6) saturate(0.5) drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2))")
        const originalTransform = object.style.transform || "scale(1)"
        const originalZIndex = object.style.zIndex || "6"
        const originalMixBlend = object.style.mixBlendMode || (sceneName === "beach" ? "multiply" : "normal")

        // Aplicar efectos de pista
        object.style.opacity = "1"
        object.style.filter = "brightness(3) saturate(2) drop-shadow(0 0 30px #ffd700) blur(0px)"
        object.style.transform = "scale(1.5)"
        object.style.zIndex = "999"
        object.style.mixBlendMode = "normal"
        object.style.transition = "none"
        object.style.pointerEvents = "auto"

        object.classList.add("hint-highlight")

        setTimeout(() => {
            object.classList.remove("hint-highlight")
            object.style.transition = "all 1s ease"

            // Restaurar estilos originales según la escena
            object.style.opacity = originalOpacity
            object.style.filter = originalFilter
            object.style.transform = originalTransform
            object.style.zIndex = originalZIndex
            object.style.mixBlendMode = originalMixBlend
            object.style.pointerEvents = "auto"

            setTimeout(() => {
                object.style.transition = "all 0.3s ease"
            }, 1000)
        }, 3000)
    })

    playSound("hint")
    showHintMessage()
    activateHintCooldown()
    hintUsed = true
}

// Mostrar mensaje de pista
function showHintMessage() {
    let message = document.getElementById("hint-message")
    if (!message) {
        message = document.createElement("div")
        message.id = "hint-message"
        message.className = "hint-message"
        document.body.appendChild(message)
    }

    message.textContent = `✨ ¡Pista activada! Mira los objetos que brillan ✨`
    message.classList.add("show")

    setTimeout(() => {
        message.classList.remove("show")
    }, 3000)
}

// Activar cooldown de pista
function activateHintCooldown() {
    const hintButton = document.getElementById("hint-button")
    const cooldownElement = document.getElementById("hint-cooldown")

    if (hintButton && cooldownElement) {
        hintButton.classList.add("disabled")
        cooldownElement.classList.add("active")
        hintCooldown = true

        setTimeout(() => {
            hintButton.classList.remove("disabled")
            cooldownElement.classList.remove("active")
            hintCooldown = false
        }, 30000)
    }
}

// Crear efecto de partículas mejorado
function createEnhancedParticleEffect(object) {
    const rect = object.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Partículas coloridas
    for (let i = 0; i < 18; i++) {
        const particle = document.createElement("div")
        particle.style.cssText = `
      position: fixed; left: ${centerX}px; top: ${centerY}px;
      width: 12px; height: 12px; border-radius: 50%;
      pointer-events: none; z-index: 1000;
    `

        const colors = ["#FFD700", "#FFA500", "#FF69B4", "#FFB6C1", "#87CEEB", "#98FB98"]
        const color = colors[Math.floor(Math.random() * colors.length)]
        particle.style.background = `radial-gradient(circle, ${color}, transparent)`
        particle.style.boxShadow = `0 0 20px ${color}`

        const angle = (Math.PI * 2 * i) / 18
        const velocity = 140 + Math.random() * 100
        const vx = Math.cos(angle) * velocity
        const vy = Math.sin(angle) * velocity

        document.body.appendChild(particle)

        let posX = centerX
        let posY = centerY
        let opacity = 1
        let scale = 1

        const animate = () => {
            posX += vx * 0.02
            posY += vy * 0.02
            opacity -= 0.018
            scale -= 0.012

            particle.style.left = posX + "px"
            particle.style.top = posY + "px"
            particle.style.opacity = opacity
            particle.style.transform = `scale(${scale}) rotate(${posX * 2}deg)`

            if (opacity > 0 && scale > 0) {
                requestAnimationFrame(animate)
            } else {
                particle.remove()
            }
        }

        animate()
    }

    // Onda expansiva
    const wave = document.createElement("div")
    wave.style.cssText = `
    position: fixed; left: ${centerX}px; top: ${centerY}px;
    width: 0px; height: 0px; border: 4px solid #FFD700;
    border-radius: 50%; pointer-events: none; z-index: 999;
    transform: translate(-50%, -50%); animation: waveExpand 1.2s ease-out;
  `

    document.body.appendChild(wave)
    setTimeout(() => wave.remove(), 1200)
}

function updateFoundCount() {
    if (foundCountElement) {
        foundCountElement.textContent = foundObjects.size
    }
}

function updateUI(objectType) {
    updateFoundCount()

    const icon = document.querySelector(`[data-icon="${objectType}"]`)
    if (icon) {
        icon.classList.add("found")
        icon.style.transform = "scale(1.4)"
        icon.style.filter = "brightness(1.2) drop-shadow(0 0 15px #FFD700)"
        setTimeout(() => {
            icon.style.transform = "scale(1)"
        }, 600)
    }

    showProgressMessage(foundObjects.size, totalObjects)
}

// Mostrar mensaje de progreso
function showProgressMessage(found, total) {
    const messages = {
        park: ["¡Primer recuerdo del parque encontrado! 🌳", "¡Sigues el sendero correcto! 🌸", "¡Parque completado! 🎉"],
        room: [
            "¡Primer recuerdo de la habitación! 🏠",
            "¡Vas descubriendo nuestros secretos! 💖",
            "¡Excelente progreso! 🌟",
            "¡Más de la mitad encontrados! ✨",
            "¡Casi todos los recuerdos! 💕",
            "¡Todos los recuerdos encontrados! 🎉",
        ],
        beach: [
            "¡Primer tesoro de la playa encontrado! 🏖️",
            "¡Las olas traen más recuerdos! 🌊",
            "¡El atardecer revela nuestros secretos! 🌅",
            "¡Más de un tercio completado! ✨",
            "¡El océano guarda nuestro amor! 💕",
            "¡Más de la mitad encontrados! 🌟",
            "¡El sol se pone, pero nuestros recuerdos brillan! 🌅",
            "¡Solo uno más en esta playa mágica! 💫",
            "¡Todos los recuerdos del atardecer encontrados! 🎉",
        ],
    }

    const sceneMessages = messages[sceneName] || messages.park

    if (found <= sceneMessages.length) {
        showMessage(sceneMessages[found - 1], "success")
    }
}

// Mostrar mensaje general
function showMessage(text, type = "info") {
    const messageDiv = document.createElement("div")
    messageDiv.textContent = text
    messageDiv.style.cssText = `
    position: fixed; top: 20px; right: 20px; padding: 15px 25px;
    border-radius: 25px; font-size: 1.2rem; font-family: 'Dancing Script', cursive;
    font-weight: 600; z-index: 1001; max-width: 300px; text-align: center;
    animation: slideInRight 0.5s ease-out;
  `

    // Estilos según el tipo
    switch (type) {
        case "success":
            messageDiv.style.background = "rgba(144, 238, 144, 0.95)"
            messageDiv.style.color = "#006400"
            messageDiv.style.boxShadow = "0 8px 25px rgba(144, 238, 144, 0.3)"
            break
        case "warning":
            messageDiv.style.background = "rgba(255, 215, 0, 0.95)"
            messageDiv.style.color = "#8B4513"
            messageDiv.style.boxShadow = "0 8px 25px rgba(255, 215, 0, 0.3)"
            break
        case "error":
            messageDiv.style.background = "rgba(255, 107, 107, 0.95)"
            messageDiv.style.color = "white"
            messageDiv.style.boxShadow = "0 8px 25px rgba(255, 107, 107, 0.3)"
            break
        default:
            messageDiv.style.background = "rgba(255, 255, 255, 0.95)"
            messageDiv.style.color = "#FF69B4"
            messageDiv.style.boxShadow = "0 8px 25px rgba(255, 105, 180, 0.3)"
    }

    document.body.appendChild(messageDiv)

    setTimeout(() => {
        messageDiv.style.animation = "slideOutRight 0.5s ease-in"
        setTimeout(() => {
            messageDiv.remove()
        }, 500)
    }, 3000)
}

// Completar escena
function completeScene() {
    setTimeout(() => {
        if (congratulationsElement) {
            congratulationsElement.classList.add("show")
        }

        if (nextButton) {
            nextButton.classList.add("active")
            nextButton.style.pointerEvents = "all"
            nextButton.style.opacity = "1"
        }

        createCelebration()

        setTimeout(() => {
            if (congratulationsElement) {
                congratulationsElement.classList.remove("show")
            }
        }, 5000)
    }, 1000)
}

// Crear celebración
function createCelebration() {
    const colors = ["#FF69B4", "#FFB6C1", "#87CEEB", "#98FB98", "#DDA0DD", "#FFD700"]

    // Confeti
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const confetti = document.createElement("div")
            confetti.style.cssText = `
        position: fixed; left: ${Math.random() * window.innerWidth}px; top: -10px;
        width: 12px; height: 12px; z-index: 1002; pointer-events: none;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: ${Math.random() > 0.5 ? "50%" : "0"};
      `

            document.body.appendChild(confetti)

            const fallSpeed = Math.random() * 4 + 3
            const sway = Math.random() * 4 - 2
            let posY = -10
            let posX = Number.parseFloat(confetti.style.left)

            const fall = () => {
                posY += fallSpeed
                posX += sway
                confetti.style.top = posY + "px"
                confetti.style.left = posX + "px"
                confetti.style.transform = `rotate(${posY * 3}deg)`

                if (posY < window.innerHeight + 20) {
                    requestAnimationFrame(fall)
                } else {
                    confetti.remove()
                }
            }

            fall()
        }, i * 80)
    }

    // Fuegos artificiales de corazones
    setTimeout(() => {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const heart = document.createElement("div")
                heart.style.cssText = `
          position: fixed; left: 50%; top: 50%; font-size: 24px;
          pointer-events: none; z-index: 1003;
          color: ${colors[Math.floor(Math.random() * colors.length)]};
        `
                heart.innerHTML = ["💖", "💕", "💗", "💝", "💘"][Math.floor(Math.random() * 5)]

                const angle = (Math.PI * 2 * i) / 20
                const velocity = 200 + Math.random() * 100
                const vx = Math.cos(angle) * velocity
                const vy = Math.sin(angle) * velocity

                document.body.appendChild(heart)

                let x = window.innerWidth / 2
                let y = window.innerHeight / 2
                let opacity = 1

                const animate = () => {
                    x += vx * 0.02
                    y += vy * 0.02
                    opacity -= 0.015

                    heart.style.left = x + "px"
                    heart.style.top = y + "px"
                    heart.style.opacity = opacity
                    heart.style.transform = `scale(${opacity}) rotate(${x * 2}deg)`

                    if (opacity > 0) {
                        requestAnimationFrame(animate)
                    } else {
                        heart.remove()
                    }
                }

                animate()
            }, i * 150)
        }
    }, 1000)
}

// Cargar estilos del juego


document.addEventListener("DOMContentLoaded", () => {
    // DOM listo, esperando configuración de escena desde el HTML
})
