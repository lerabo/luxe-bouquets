import Image from 'next/image'

import clsx from 'clsx'
import { MoveLeftIcon, MoveRightIcon } from 'lucide-react'

import { FC } from 'react'

import { CustomButtonComponent } from '@/app/shared/component/ui/button'
import { ImageDefault } from '@/app/shared/images'

//interface
interface IBannerProps {}

const categories = [
  'Fresh Flowers',
  'Dried Flowers',
  'Dried Flowers',
  'Aroma Candels',
  'Fresheners',
]
//component
const BannerComponent: FC<Readonly<IBannerProps>> = () => {
  //return
  return (
    <section className={'laptop:grid-cols-[1fr_1px_1fr] grid'}>
      <div
        className={
          'laptop:px-20 laptop:py-20 laptop:top-14 laptop:gap-6 laptop:sticky max-laptop:border-b flex h-fit flex-col gap-4 px-4 py-10'
        }
      >
        <div className={'laptop:pb-14 flex flex-col gap-4 border-b pb-6'}>
          <h1 className={'laptop:text-7xl laptop:h-40 text-[40px] font-semibold'}>
            Kyiv LuxeBouquets <sup>®</sup>
          </h1>
          <h2 className={'laptop:text-lg text-sm leading-[1.33]'}>
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our
            Online Flower Delivery Service
          </h2>
        </div>

        <div className={'laptop:gap-6 grid grid-cols-[1fr_1px_1fr] items-end gap-4'}>
          <Image
            src={ImageDefault}
            alt={'image'}
            className={'laptop:h-64 laptop:w-64 h-[180px] w-[156px] object-cover'}
          />

          <span className={'bg-foreground h-full w-[1px]'}></span>

          <p className={'laptop:text-sm text-xs'}>
            Experience the joy of giving with our modern floral studio. Order online and send fresh
            flowers, plants and gifts today.
          </p>
        </div>
      </div>

      <span className={'bg-foreground h-full w-[1px]'}></span>

      <div>
        {categories?.map((el, i) => (
          <div
            key={el}
            className={clsx(
              'grid grid-cols-[1fr_1px_1fr]',
              { 'border-b': i !== categories?.length - 1 },
              { '[direction:ltr]': i % 2 === 0 },
              { '[direction:rtl]': i % 2 !== 0 },
            )}
          >
            <div className={'laptop:p-6 relative flex items-center justify-center p-3'}>
              <p className={'laptop:text-[38px] text-center text-[26px] font-medium'}>{el}</p>
              <CustomButtonComponent
                variant={'text'}
                className={'laptop:bottom-6 absolute bottom-3 left-1/2 -translate-x-1/2'}
              >
                Shop now {i % 2 === 0 ? <MoveRightIcon className={'h-6 w-6'} /> : <MoveLeftIcon />}
              </CustomButtonComponent>
            </div>

            <span className={'bg-foreground h-full w-[1px]'}></span>

            <Image
              src={ImageDefault}
              alt={'category image'}
              className={'laptop:h-[360px] h-[200px] w-full object-cover'}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default BannerComponent
