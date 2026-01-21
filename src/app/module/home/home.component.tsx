import { FC, Fragment } from 'react'

import { AboutUsComponent, BannerComponent } from '@/app/module/home/elements'

//interface
interface IHomeProps {}

//component
const HomeComponent: FC<Readonly<IHomeProps>> = () => {
  //return
  return (
    <Fragment>
      <BannerComponent />

      <AboutUsComponent />
    </Fragment>
  )
}

export default HomeComponent
