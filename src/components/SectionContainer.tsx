import { ReactNode } from 'react'
import { motion } from 'framer-motion'
// import { sectionVariants } from '../utils/framer-motion'

interface SectionInterface {
  children: ReactNode | ReactNode[]
  className?: string
  position?: 'right' | 'left'
  id?: string
}

const SectionContainer = ({ children, className, position, id }: SectionInterface) => {
  const display = () => {
    return position === 'left' ? 'flex-col lg:flex-row-reverse' : 'flex-col lg:flex-row'
  }

  return (
    <motion.section
      className={`flex items-center justify-around pb-10 space-y-10 md:space-y-0 min-h-[700px] relative ${className} ${
        position ? display() : ''
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id={id}
    >
      {children}
    </motion.section>
  )
}

export default SectionContainer
