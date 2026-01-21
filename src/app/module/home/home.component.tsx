import { FC, Fragment } from 'react'

import { AboutUsComponent, BannerComponent, WhyChooseComponent } from '@/app/module/home/elements'

//interface
interface IHomeProps {}

//component
const HomeComponent: FC<Readonly<IHomeProps>> = () => {
  //return
  return (
    <Fragment>
      <BannerComponent />

      <AboutUsComponent />

      <WhyChooseComponent />
    </Fragment>
  )
}

export default HomeComponent
