import { FC, Fragment } from 'react'

//interface
interface IWhyChooseProps {}

const list = [
  {
    title: 'Stylish bouquets by florists',
    desc: 'At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.',
  },
  {
    title: 'On-time delivery',
    desc: 'At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.',
  },
  {
    title: 'Safe payment',
    desc: 'At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.',
  },
  {
    title: 'Subscription by your needs',
    desc: 'At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.',
  },
]

//component
const WhyChooseComponent: FC<Readonly<IWhyChooseProps>> = () => {
  //return
  return (
    <section className={'laptop:grid-cols-[1fr_1px_1fr] grid border-t'}>
      <h2
        className={
          'laptop:text-[50px] laptop:py-20 laptop:px-20 px-4 py-10 text-[34px] font-semibold'
        }
      >
        Why choose us ?
      </h2>

      <span className={'bg-foreground laptop:h-full laptop:w-[1px] h-[1px] w-full'}></span>

      <ul>
        {list?.map((el, i) => (
          <Fragment key={el?.title}>
            <div className={'laptop:py-20 laptop:px-20 flex flex-col gap-4 px-4 py-10'}>
              <p className={'laptop:text-[38px] text-[26px] font-medium'}>{el?.title}</p>

              <p className={'text-medium'}>{el?.desc}</p>
            </div>

            {i < list?.length - 1 && <span className={'bg-foreground flex h-[1px] w-full'}></span>}
          </Fragment>
        ))}
      </ul>
    </section>
  )
}

export default WhyChooseComponent
