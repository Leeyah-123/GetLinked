import { ReactNode, useCallback, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
// import { sectionVariants } from '../utils/framer-motion'

interface SectionInterface {
  children: ReactNode | ReactNode[]
  className?: string
  position?: 'right' | 'left'
  id?: string
}

const SectionContainer = ({ children, className, position, id }: SectionInterface) => {
  const controls = useAnimation()

  const onScreen = useCallback(async () => {
    await controls.start('animate')
  }, [controls])

  useEffect(() => {
    onScreen()
  }, [onScreen])

  const display = () => {
    return position === 'left' ? 'flex-col lg:flex-row-reverse' : 'flex-col lg:flex-row'
  }

  return (
    <motion.section
      className={`flex items-center justify-around pb-10 space-y-10 md:space-y-0 min-h-[700px] ${className} ${
        position ? display() : ''
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id={id}
    >
      {children}
    </motion.section>
  )
}

export default SectionContainer
