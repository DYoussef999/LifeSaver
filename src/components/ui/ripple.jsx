import React from 'react'
import { cn } from '../../lib/utils'

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 160,
  mainCircleOpacity = 0.3,
  numCircles = 7,
  color = '#ffffff',
  className,
  ...props
}) {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0 select-none overflow-hidden rounded-[inherit]', className)}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 60
        const opacity = mainCircleOpacity - i * 0.035
        const animationDelay = `${i * 0.06}s`
        return (
          <div
            key={i}
            className="animate-ripple absolute rounded-full border"
            style={{
              '--i': i,
              '--duration': '3s',
              width: `${size}px`,
              height: `${size}px`,
              opacity: Math.max(0, opacity),
              animationDelay,
              borderColor: color,
              borderWidth: '1px',
              backgroundColor: `${color}08`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) scale(1)',
            }}
          />
        )
      })}
    </div>
  )
})
