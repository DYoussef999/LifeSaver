import React from 'react'
import { cn } from '../../lib/utils'

export const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm', className)}
    {...props}
  />
))
Card.displayName = 'Card'

export const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-4', className)} {...props} />
))
CardContent.displayName = 'CardContent'
