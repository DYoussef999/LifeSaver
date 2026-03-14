import React from 'react'
import { cn } from '../../lib/utils'

export const PulsatingButton = React.forwardRef(
  ({ className, children, pulseColor = '#808080', duration = '2s', style, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'relative flex cursor-pointer items-center justify-center text-center transition-transform active:scale-[0.98]',
          className
        )}
        style={{
          '--pulse-color': pulseColor,
          '--duration': duration,
          ...style,
        }}
        {...props}
      >
        <div className="relative z-10 flex w-full items-center">{children}</div>
        <div
          className="absolute inset-0 rounded-[inherit] animate-pulse opacity-50"
          style={{ background: `${pulseColor}20` }}
        />
        <div
          className="absolute -inset-[2px] rounded-[inherit] opacity-0 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${pulseColor}30 0%, transparent 70%)`,
            animationDelay: '0.5s',
          }}
        />
      </button>
    )
  }
)
PulsatingButton.displayName = 'PulsatingButton'
