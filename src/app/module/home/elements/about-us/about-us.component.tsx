import { FC } from 'react'

import ButtonComponent from '@/app/shared/component/ui/button/button.component'

//interface
interface IAboutUsProps {}

//component
const AboutUsComponent: FC<Readonly<IAboutUsProps>> = () => {
  //return
  return (
    <section className={'laptop:grid-cols-[1fr_1px_1fr] grid border-t'}>
      <h2
        className={
          'laptop:text-[50px] laptop:py-20 laptop:px-20 px-4 py-10 text-[34px] font-semibold'
        }
      >
        About us
      </h2>

      <span className={'bg-foreground laptop:h-full laptop:w-[1px] h-[1px] w-full'}></span>

      <div className={'laptop:py-20 laptop:px-20 flex flex-col gap-16 px-4 py-10'}>
        <div className={'flex flex-col gap-6'}>
          <h3 className={'laptop:text-sm text-xs font-medium uppercase'}>our story</h3>

          <div className={'flex flex-col gap-4'}>
            <h2 className={'laptop:text-[38px] text-[26px] font-medium'}>Kyiv LuxeBouquets</h2>

            <p className={'text-medium'}>
              We are a modern local floral studio, which specializes in the design and delivery of
              unique bouquets. We have the best florists who carefully select each look, our studio
              cooperates directly with farms for growing different flowers, so we always have fresh
              flowers, which are collected by our florists in exquisite bouquets. We have a
              collection of fresh bouquets, collections of dried bouquets, house plants, as well as
              fragrant candles from luxury brands to create the perfect atmosphere. Make
              someone&#39;s day amazing by sending flowers, plants and gifts the same or next day.
              Ordering flowers online has never been easier.
            </p>
          </div>
        </div>

        <ButtonComponent variant={'bordered'}>Learn more</ButtonComponent>
      </div>
    </section>
  )
}

export default AboutUsComponent
