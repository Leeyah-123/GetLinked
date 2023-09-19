import { motion } from 'framer-motion';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  className?: string;
}

export const Button = ({ children, className }: ButtonType) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileFocus={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`btn ${className}`}
    >
      {children}
    </motion.button>
  );
};
