'use client'

import { motion } from 'framer-motion'

import { FC, useMemo } from 'react'

import { useLayoutContext } from '@/app/shared/context'
import {
  IconFacebook,
  IconInstagram,
  IconPinterest,
  IconTelegram,
  IconTwitter,
} from '@/app/shared/icons'
import { Link } from '@/core/lib/locale/i18n'

import { ISettingsFields } from '../../../../../../../../@types/generated/contentful'

//interface
interface ISocialsProps {
  className?: string
}

const icons = [
  { key: 'instagram', icon: IconInstagram },
  { key: 'pinterest', icon: IconPinterest },
  { key: 'facebook', icon: IconFacebook },
  { key: 'twitter', icon: IconTwitter },
  { key: 'telegram', icon: IconTelegram },
]

//component
const SocialsComponent: FC<Readonly<ISocialsProps>> = ({ className }) => {
  const { data } = useLayoutContext()

  const filtered = useMemo(
    () =>
      icons
        ?.filter((el) =>
          data?.settings?.find((item) => (item?.fields as ISettingsFields)?.key === el?.key),
        )
        ?.map((el) => {
          return {
            ...el,
            href:
              (
                data?.settings?.find(
                  (setting) => el?.key === (setting?.fields as ISettingsFields)?.key,
                )?.fields as ISettingsFields
              )?.value ?? '',
          }
        }),
    [data],
  )

  //return
  return (
    <div className={className}>
      {filtered?.map(({ key, href, icon: Icon }) => (
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
