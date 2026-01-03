import Link from 'next/link'

import { FC } from 'react'

import { SocialsComponent } from '@/app/module/layout/elements/header/elements'
import { CustomButtonComponent } from '@/app/shared/component/ui/button'
import { CustomInputComponent } from '@/app/shared/component/ui/input'

//interface
interface IFooterProps {}

//component
const FooterComponent: FC<Readonly<IFooterProps>> = () => {
  const containerClass =
    'px-4 py-10 laptop:px-10 laptop:gap-6 flex flex-col gap-4 max-laptop:border-b laptop:border-l'
  const headingClass = 'text-content1-300 text-sm'
  const valueClass =
    'font-medium text-sm laptop:text-medium hover:text-content1-300 transition-colors'
  const itemContainerClass = 'flex flex-col gap-2'
  const titleClass = 'text-content1-300 laptop:text-xl text-lg font-medium'

  //return
  return (
    <div className={'laptop:grid-cols-4 max-laptop:border-b-0 laptop:border-l-0 grid border'}>
      <div className={containerClass}>
        <p className={'text-medium'}>
          Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day,
          Christmas... Reminds you 7 days before. No spam or sharing your address
        </p>

        <div className={'flex flex-col gap-4'}>
          <CustomInputComponent variant={'bordered'} placeholder={'Your email'} />

          <CustomButtonComponent variant={'solid'}>remind</CustomButtonComponent>
        </div>
      </div>

      <div className={containerClass}>
        <p className={titleClass}>Contact Us</p>

        <div className={itemContainerClass}>
          <p className={headingClass}>Address</p>
          <Link href={'/'} className={valueClass}>
            15/4 Khreshchatyk Street, Kyiv{' '}
          </Link>
        </div>

        <div className={itemContainerClass}>
          <p className={headingClass}>Phone</p>
          <Link href={'tel:+380980099777'} className={valueClass}>
            +380980099777
          </Link>
        </div>

        <div className={itemContainerClass}>
          <p className={headingClass}>General Enquiry</p>
          <Link href={'mailto:Kiev.Florist.Studio@gmail.com'} className={valueClass}>
            Kiev.Florist.Studio@gmail.com
          </Link>
        </div>

        <div className={'laptop:gap-6 flex flex-col gap-4'}>
          <p className={titleClass}>Follow Us</p>
          <SocialsComponent className={'flex items-center gap-8'} />
        </div>
      </div>

      <div className={containerClass}>
        <div className={'laptop:gap-6 flex flex-col gap-4'}>
          <p className={titleClass}>Shop</p>

          <ul className={itemContainerClass}>
            {[
              'All Products',
              'Fresh Flowers',
              'Dried Flowers',
              'Live Plants',
              'Designer Vases',
              'Aroma Candles',
              'Freshener Diffuser',
            ]?.map((el) => (
              <Link href={'/'} key={el} className={valueClass}>
                {el}
              </Link>
            ))}
          </ul>
        </div>

        <div className={'laptop:gap-6 flex flex-col gap-4'}>
          <p className={titleClass}>Service</p>

          <ul className={itemContainerClass}>
            {['Flower Subscription', 'Wedding & Event Decor']?.map((el) => (
              <Link href={'/'} key={el} className={valueClass}>
                {el}
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <div className={containerClass}>
        <p className={titleClass}>About Us</p>

        <ul className={itemContainerClass}>
          {['Our story', 'Blog', 'Shipping & returns', 'Terms & conditions', 'Privacy policy']?.map(
            (el) => (
              <Link href={'/'} key={el} className={valueClass}>
                {el}
              </Link>
            ),
          )}
        </ul>
      </div>
    </div>
  )
}

export default FooterComponent
