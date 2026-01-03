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
        <Link href={href} key={key} className={'cursor-pointer'}>
          <Icon className={'w- h-6'} />
        </Link>
      ))}
    </div>
  )
}

export default SocialsComponent
