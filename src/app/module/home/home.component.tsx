import { useTranslations } from 'next-intl'

import { FC } from 'react'

//interface
interface IHomeProps {}

//component
const HomeComponent: FC<Readonly<IHomeProps>> = () => {
  const t = useTranslations('Main')
  //return
  return <div>{t('home_title')}</div>
}

export default HomeComponent
