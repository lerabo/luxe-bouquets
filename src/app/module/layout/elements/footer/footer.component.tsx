'use client'

import Link from 'next/link'

import { FC, Fragment } from 'react'

import { SocialsComponent } from '@/app/module/layout/elements/header/elements'
import { CustomButtonComponent } from '@/app/shared/component/ui/button'
import { CustomInputComponent } from '@/app/shared/component/ui/input'
import { useLayoutContext } from '@/app/shared/context'
import { getSettings, getTextInSite } from '@/app/shared/services/getSettings'

import { IFooterFields, IPageFields } from '../../../../../../@types/generated/contentful'

//interface
interface IFooterProps {}

//component
const FooterComponent: FC<Readonly<IFooterProps>> = () => {
  const { data } = useLayoutContext()
  const containerClass =
    'px-4 py-10 laptop:px-10 laptop:gap-6 flex flex-col gap-4 max-laptop:border-b laptop:border-l'
  const headingClass = 'text-content1-300 text-sm'
  const valueClass =
    'font-medium text-sm laptop:text-medium hover:text-content1-300 transition-colors cursor-pointer'
  const itemContainerClass = 'flex flex-col gap-2'
  const titleClass = 'text-content1-300 laptop:text-xl text-lg font-medium'

  //return
  return (
    <div className={'laptop:grid-cols-4 max-laptop:border-b-0 laptop:border-l-0 grid border'}>
      <div className={containerClass}>
        <p className={'text-medium'}>{getTextInSite(data, 'footer-text')}</p>

        <div className={'flex flex-col gap-4'}>
          <CustomInputComponent variant={'bordered'} placeholder={'Your email'} />

          <CustomButtonComponent variant={'solid'}>
            {getTextInSite(data, 'remind')}
          </CustomButtonComponent>
        </div>
      </div>

      <div className={containerClass}>
        <p className={titleClass}>{getTextInSite(data, 'contact_us')}</p>

        {getSettings(data, 'address_value') && (
          <div className={itemContainerClass}>
            <p className={headingClass}>{getTextInSite(data, 'address')}</p>
            <Link
              href={getSettings(data, 'address_value')}
              target={'_blank'}
              className={valueClass}
            >
              {getTextInSite(data, 'address_value')}
            </Link>
          </div>
        )}

        {getSettings(data, 'phone') && (
          <div className={itemContainerClass}>
            <p className={headingClass}>{getTextInSite(data, 'phone')}</p>
            <Link href={`tel:${getSettings(data, 'phone')}`} className={valueClass}>
              {getSettings(data, 'phone')}
            </Link>
          </div>
        )}

        {getSettings(data, 'email') && (
          <div className={itemContainerClass}>
            <p className={headingClass}>{getTextInSite(data, 'email')}</p>
            <Link href={`mailto:${getSettings(data, 'email')}`} className={valueClass}>
              {getSettings(data, 'email')}
            </Link>
          </div>
        )}

        <div className={'laptop:gap-6 flex flex-col gap-4'}>
          <p className={titleClass}>{getTextInSite(data, 'follow_us')}</p>
          <SocialsComponent className={'flex items-center gap-8'} />
        </div>
      </div>

      <div className={containerClass}>
        <div className={'laptop:gap-6 flex flex-col gap-4'}>
          <p className={titleClass}>{getTextInSite(data, 'shop')}</p>

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
          <p className={titleClass}>{getTextInSite(data, 'services')}</p>

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
        {data?.footer?.map((footer) => (
          <Fragment key={(footer?.fields as IFooterFields)?.label}>
            <p className={titleClass}>{(footer?.fields as IFooterFields)?.label}</p>

            <ul className={itemContainerClass}>
              {(footer?.fields as IFooterFields)?.pages?.map((el) => (
                <Link href={'/'} key={(el?.fields as IPageFields)?.slug} className={valueClass}>
                  {(el?.fields as IPageFields)?.title}
                </Link>
              ))}
            </ul>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default FooterComponent
