import { FC, Fragment } from 'react'

import { BannerComponent } from '@/app/module/home/elements'

//interface
interface IHomeProps {}

//component
const HomeComponent: FC<Readonly<IHomeProps>> = () => {
  //return
  return (
    <Fragment>
      <BannerComponent />
    </Fragment>
  )
}

export default HomeComponent
