'use client'

import { useTranslations } from 'next-intl'
import { Navbar, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@heroui/react'

import { ShoppingBagIcon } from 'lucide-react'

import { FC, useState } from 'react'

import { SocialsComponent } from '@/app/module/layout/elements/header/elements'
import { CustomButtonComponent } from '@/app/shared/component/ui/button'
import { HoveredTextComponent } from '@/app/shared/component/ui/hover-text'
import { Link } from '@/core/lib/locale/i18n'

const menuItems = ['Sign In', 'Shop', 'Service', 'Contact', 'About us']
const linksItems = ['Shipping & returns', 'Terms & conditions', 'Privacy policy']

// component
const HeaderComponent: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const t = useTranslations('Main')

  // return
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: 'border-y laptop:border sticky top-0',
        wrapper: 'p-0 max-w-none gap-0',
        toggleIcon: 'after:h-0.5 before:h-0.5 group-data-[open=true]:before:translate-y-0.5',
        menu: 'p-0 border-t gap-0',
      }}
      height={'3.5rem'}
    >
      <NavbarContent className={'laptop:hidden'}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='h-14 w-14 cursor-pointer rounded-none border-x'
        />
      </NavbarContent>

      <NavbarContent
        justify='start'
        className={'laptop:grid-cols-[1fr_1fr_2fr] laptop:grid hidden'}
      >
        <CustomButtonComponent
          as={Link}
          href={'/'}
          variant={'default'}
          className={'max-laptop:hidden laptop:w-full h-14 w-14 border-r'}
        >
          <HoveredTextComponent className={'text-medium font-medium'}>
            {t('shop')}
          </HoveredTextComponent>
        </CustomButtonComponent>

        <CustomButtonComponent
          as={Link}
          href={'/'}
          variant={'default'}
          className={'laptop:w-full h-14 w-14 border-r'}
        >
          <ShoppingBagIcon className={'laptop:hidden h-6 w-6'} />
          <HoveredTextComponent className={'max-laptop:hidden text-medium font-medium'}>
            {t('contact')}
          </HoveredTextComponent>
        </CustomButtonComponent>

        <span />
      </NavbarContent>

      <NavbarContent justify='end' className={'laptop:grid-cols-[2fr_1fr_1fr] grid gap-0'}>
        <span className={'max-laptop:hidden laptop:flex'} />

        <CustomButtonComponent
          as={Link}
          href={'/'}
          variant={'default'}
          className={'max-laptop:hidden laptop:w-full h-14 w-14 border-l'}
        >
          <HoveredTextComponent className={'text-medium font-medium'}>
            {t('login')}
          </HoveredTextComponent>
        </CustomButtonComponent>

        <CustomButtonComponent
          variant={'default'}
          className={'laptop:w-full laptop:border-l max-laptop:border-x h-14 w-14'}
        >
          <ShoppingBagIcon className={'laptop:hidden h-6 w-6'} />
          <HoveredTextComponent className={'max-laptop:hidden text-medium font-medium'}>
            {t('cart')}
          </HoveredTextComponent>
        </CustomButtonComponent>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className={'flex w-full'}>
            <Link className='w-full border-x border-b p-6 text-lg font-medium' href='#'>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}

        <ul className={'flex flex-col gap-4 border-x border-b p-6'}>
          {linksItems?.map((el) => (
            <Link href={'#'} key={el} className={'text-sm font-medium'}>
              {el}
            </Link>
          ))}
        </ul>

        <SocialsComponent className={'flex justify-between border-x border-b p-6'} />
      </NavbarMenu>
    </Navbar>
  )
}

export default HeaderComponent
