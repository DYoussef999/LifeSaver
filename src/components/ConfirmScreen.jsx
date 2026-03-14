import { useState, useEffect } from 'react'
import { emergencyConfig } from '../emergencyQuizLogic'

export default function ConfirmScreen({ type, onHome }) {
  const config = emergencyConfig[type]
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1000),
      setTimeout(() => setPhase(4), 1400),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  const tips = [
    'Stay calm and stay where you are',
    'Keep your phone accessible',
    'Move away from immediate danger if safe',
    'Help is on the way to your location',
  ]

  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[#0a0a0a] px-5 pb-10 pt-16">
      {/* Top glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-80 opacity-20"
        style={{
          background: `radial-gradient(ellipse at 50% -10%, ${config.color} 0%, transparent 65%)`,
        }}
      />

      {/* Pulse rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse-ring"
            style={{
              width: `${100 + i * 70}px`,
              height: `${100 + i * 70}px`,
              border: `1px solid ${config.color}`,
              opacity: phase >= 2 ? 0.15 / i : 0,
              transition: 'opacity 0.5s ease',
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex w-full flex-col items-center">
        {/* Animated checkmark circle */}
        <div
          className="mb-8 flex h-32 w-32 items-center justify-center rounded-full transition-all duration-700"
          style={{
            background: phase >= 1 ? `${config.color}20` : 'transparent',
            border: `2px solid ${phase >= 1 ? config.color : 'transparent'}`,
            boxShadow: phase >= 2 ? `0 0 60px ${config.color}40, 0 0 120px ${config.color}15` : 'none',
            transform: phase >= 1 ? 'scale(1)' : 'scale(0.5)',
            opacity: phase >= 1 ? 1 : 0,
          }}
        >
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 28L22 38L44 18"
              stroke={config.color}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="100"
              className="animate-checkmark-draw"
              style={{
                strokeDashoffset: phase >= 2 ? 0 : 100,
                transition: 'stroke-dashoffset 0.6s ease-in-out 0.3s',
              }}
            />
          </svg>
        </div>

        {/* Main message */}
        <div
          className="mb-2 text-center transition-all duration-500"
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          <h1 className="font-syne text-3xl font-extrabold text-white">
            Help is coming
          </h1>
        </div>

        <div
          className="mb-10 text-center transition-all duration-500 delay-100"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? 'translateY(0)' : 'translateY(12px)',
          }}
        >
          <p className="font-outfit text-base text-white/60">
            {config.label} services have been notified
          </p>
          <p className="font-outfit mt-1 text-sm text-white/35">
            Stay on the line with the dispatcher
          </p>
        </div>

        {/* Service badge */}
        <div
          className="mb-8 flex items-center gap-2 rounded-full px-5 py-2.5 transition-all duration-500 delay-200"
          style={{
            background: `${config.color}15`,
            border: `1px solid ${config.color}30`,
            opacity: phase >= 3 ? 1 : 0,
          }}
        >
          <span className="text-xl">{config.emoji}</span>
          <span className="font-syne text-sm font-bold text-white">
            {config.label} Dispatch Notified
          </span>
          <div className="ml-1 h-2 w-2 animate-pulse rounded-full" style={{ background: config.color }} />
        </div>

        {/* Safety tips */}
        <div
          className="mb-8 w-full rounded-2xl border border-white/8 bg-white/3 p-5 transition-all duration-500 delay-300"
          style={{ opacity: phase >= 4 ? 1 : 0, transform: phase >= 4 ? 'translateY(0)' : 'translateY(12px)' }}
        >
          <p className="font-outfit mb-3 text-xs font-semibold uppercase tracking-widest text-white/35">
            While you wait
          </p>
          <div className="flex flex-col gap-2.5">
            {tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ background: config.color }}
                />
                <p className="font-outfit text-sm text-white/65">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency info */}
        <div
          className="mb-8 flex w-full items-center justify-between rounded-xl border border-white/8 bg-white/3 px-4 py-3 transition-all duration-500 delay-300"
          style={{ opacity: phase >= 4 ? 1 : 0 }}
        >
          <div>
            <p className="font-outfit text-xs text-white/35">Emergency line</p>
            <p className="font-syne text-xl font-bold text-white">{config.callNumber}</p>
          </div>
          <button
            className="flex items-center gap-2 rounded-xl px-4 py-2.5 font-outfit text-sm font-medium text-white transition-all active:scale-95"
            style={{ background: `${config.color}25`, border: `1px solid ${config.color}40` }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            Call Again
          </button>
        </div>

        {/* Home button */}
        <button
          onClick={onHome}
          className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 font-outfit text-sm font-medium text-white/60 transition-all duration-300 hover:bg-white/10 active:scale-98"
          style={{ opacity: phase >= 4 ? 1 : 0, transition: 'opacity 0.5s 0.4s, background 0.2s' }}
        >
          Return to Home
        </button>
      </div>
    </div>
  )
}
