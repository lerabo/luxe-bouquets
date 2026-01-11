'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'

import { FC } from 'react'

//interface
interface IHoveredTextProps {
  children: string
  className?: string
}

const firstTextVariant = {
  initial: {
    y: 0,
  },
  hover: {
    y: '-2rem',
    transition: {
      duration: 0.75,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.19, 1, 0.22, 1],
    },
  },
}

const secondTextVariant = {
  initial: {
    y: '2rem',
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    y: '2rem',
    transition: {
      duration: 0.75,
      ease: [0.19, 1, 0.22, 1],
    },
  },
}

//component
const HoveredTextComponent: FC<Readonly<IHoveredTextProps>> = ({ children, className }) => {
  //return
  return (
    <motion.div initial='initial' whileHover='hover' animate='animate' className={'cursor-pointer'}>
      <div className='relative overflow-hidden'>
        <motion.p variants={firstTextVariant} className={className}>
          {children}
        </motion.p>
        <motion.p
          variants={secondTextVariant}
          aria-hidden
          className={clsx('absolute top-0 left-0', className)}
        >
          {children}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default HoveredTextComponent
