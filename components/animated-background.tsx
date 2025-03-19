import { useEffect, useRef } from "react"

interface Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    opacity: number
  }
  
export function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
  
    useEffect(() => {
      const canvas = canvasRef.current
      if (!canvas) return
  
      const ctx = canvas.getContext("2d")
      if (!ctx) return
  
      let animationFrameId: number
      let particles: Particle[] = []
  
      const resizeCanvas = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        initParticles()
      }
  
      const initParticles = () => {
        particles = []
        const particleCount = Math.min(Math.floor(window.innerWidth * 0.05), 100)
  
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.1,
          })
        }
      }
  
      const drawParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
  
        // Set colors based on theme
        const particleColor = "255, 0, 255" 
        const lineColor = "255, 0, 255"
  
        // Update and draw particles
        particles.forEach((particle, index) => {
          particle.x += particle.speedX
          particle.y += particle.speedY
  
          // Bounce off edges
          if (particle.x > canvas.width || particle.x < 0) {
            particle.speedX = -particle.speedX
          }
  
          if (particle.y > canvas.height || particle.y < 0) {
            particle.speedY = -particle.speedY
          }
  
          // Draw particle
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${particleColor}, ${particle.opacity})`
          ctx.fill()
  
          // Connect particles with lines if they're close enough
          for (let j = index + 1; j < particles.length; j++) {
            const dx = particles[j].x - particle.x
            const dy = particles[j].y - particle.y
            const distance = Math.sqrt(dx * dx + dy * dy)
  
            if (distance < 100) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.strokeStyle = `rgba(${lineColor}, ${0.1 * (1 - distance / 100)})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        })
  
        animationFrameId = requestAnimationFrame(drawParticles)
      }
  
      window.addEventListener("resize", resizeCanvas)
      resizeCanvas()
      drawParticles()
  
      return () => {
        window.removeEventListener("resize", resizeCanvas)
        cancelAnimationFrame(animationFrameId)
      }
    }, [])
  
    return (
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"/>
    )
  }