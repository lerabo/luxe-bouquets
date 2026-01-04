'use client'

import { motion } from 'framer-motion'

import { FC } from 'react'

import {
  IconFacebook,
  IconInstagram,
  IconPinterest,
  IconTelegram,
  IconTwitter,
} from '@/app/shared/icons'
import { Link } from '@/core/lib/locale/i18n'

//interface
interface ISocialsProps {
  className?: string
}

const icons = [
  { key: 'instagram', href: 'https://instagram.com', icon: IconInstagram },
  { key: 'pinterest', href: 'https://pinterest.com', icon: IconPinterest },
  { key: 'facebook', href: 'https://facebook.com', icon: IconFacebook },
  { key: 'twitter', href: 'https://twitter.com', icon: IconTwitter },
  { key: 'telegram', href: 'https://telegram.com', icon: IconTelegram },
]

//component
const SocialsComponent: FC<Readonly<ISocialsProps>> = ({ className }) => {
  //return
  return (
    <div className={className}>
      {icons?.map(({ key, href, icon: Icon }) => (
        <motion.div
          key={key}
          whileHover={{
            rotateZ: [0, -10, 10, 0],
            transition: { duration: 0.5 },
          }}
        >
          <Link href={href} className={'cursor-pointer'}>
            <Icon className={'w- h-6'} />
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

export default SocialsComponent
