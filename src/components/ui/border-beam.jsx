'use client'

import { motion } from 'motion/react'
import { cn } from '../../lib/utils'

export const BorderBeam = ({
  className,
  size = 50,
  delay = 0,
  duration = 4,
  colorFrom = '#ffaa40',
  colorTo = '#9c40ff',
  reverse = false,
  initialOffset = 0,
  borderWidth = 1.5,
  style,
}) => {
  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent"
      style={{
        maskImage: 'linear-gradient(transparent, transparent), linear-gradient(#000, #000)',
        maskComposite: 'intersect',
        WebkitMaskComposite: 'destination-in',
        borderWidth: `${borderWidth}px`,
      }}
    >
      <motion.div
        className={cn('absolute aspect-square', className)}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
          ...style,
        }}
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration,
          delay: -delay,
        }}
      />
    </div>
  )
}
