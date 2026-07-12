"use client"

import { useEffect, useRef, useState } from "react"

const interactiveSelector = [
  "a",
  "button",
  "summary",
  "label",
  "[role='button']",
  "[tabindex]:not([tabindex='-1'])",
  "input[type='button']",
  "input[type='submit']",
  "input[type='file']",
].join(",")

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const rippleRef = useRef<HTMLDivElement>(null)
  const position = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const frame = useRef<number | null>(null)
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)")
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

    const updateEnabled = () => setEnabled(finePointer.matches && !reducedMotion.matches)
    updateEnabled()

    finePointer.addEventListener("change", updateEnabled)
    reducedMotion.addEventListener("change", updateEnabled)

    return () => {
      finePointer.removeEventListener("change", updateEnabled)
      reducedMotion.removeEventListener("change", updateEnabled)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return

    const move = (event: PointerEvent) => {
      target.current = { x: event.clientX, y: event.clientY }
      position.current = cursorRef.current?.dataset.visible ? position.current : target.current
    }

    const animate = () => {
      position.current.x += (target.current.x - position.current.x) * 0.22
      position.current.y += (target.current.y - position.current.y) * 0.22

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0) translate(-50%, -50%)`
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0) translate(-50%, -50%)`
      }

      frame.current = requestAnimationFrame(animate)
    }

    const over = (event: PointerEvent) => {
      const element = event.target instanceof Element ? event.target : null
      const isInteractive = Boolean(element?.closest(interactiveSelector))
      setActive(isInteractive)
      if (isInteractive) {
        cursorRef.current?.setAttribute("data-visible", "true")
        dotRef.current?.setAttribute("data-visible", "true")
      } else {
        cursorRef.current?.removeAttribute("data-visible")
        dotRef.current?.removeAttribute("data-visible")
      }
    }

    const down = (event: PointerEvent) => {
      setPressed(true)
      if (rippleRef.current) {
        rippleRef.current.style.left = `${event.clientX}px`
        rippleRef.current.style.top = `${event.clientY}px`
        rippleRef.current.animate(
          [
            { opacity: 0.32, transform: "translate(-50%, -50%) scale(0.35)" },
            { opacity: 0, transform: "translate(-50%, -50%) scale(1.45)" }
          ],
          { duration: 420, easing: "ease-out" }
        )
      }
    }

    const up = () => setPressed(false)
    const leave = () => {
      cursorRef.current?.removeAttribute("data-visible")
      dotRef.current?.removeAttribute("data-visible")
      setActive(false)
    }

    window.addEventListener("pointermove", move, { passive: true })
    window.addEventListener("pointerover", over, { passive: true })
    window.addEventListener("pointerdown", down, { passive: true })
    window.addEventListener("pointerup", up, { passive: true })
    document.documentElement.addEventListener("mouseleave", leave)
    frame.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("pointermove", move)
      window.removeEventListener("pointerover", over)
      window.removeEventListener("pointerdown", down)
      window.removeEventListener("pointerup", up)
      document.documentElement.removeEventListener("mouseleave", leave)
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={cursorRef} className="premium-cursor" data-active={active} data-pressed={pressed} aria-hidden="true" />
      <div ref={dotRef} className="premium-cursor-dot" data-active={active} aria-hidden="true" />
      <div ref={rippleRef} className="premium-cursor-ripple" aria-hidden="true" />
    </>
  )
}
