import { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode
  className?: string
}

export const Button = ({ children, className }: ButtonType) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-gradient-to-r from-magenta to-dark-purple rounded ${className}`}
    >
      {children}
    </motion.button>
  )
}
