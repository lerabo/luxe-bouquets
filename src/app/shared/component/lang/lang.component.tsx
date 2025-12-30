'use client'

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react'

import { Languages } from 'lucide-react'

import { FC } from 'react'

import { usePathname, useRouter } from '@/core/lib/locale/i18n'
import { routing } from '@/core/lib/locale/routing'

const localesLabel = [
  { key: 'en', label: 'en' },
  { key: 'uk', label: 'ua' },
]

// component
const LangComponent: FC = () => {
  const { push } = useRouter()
  const pathname = usePathname()

  // return
  return (
    <Dropdown
      classNames={{ content: 'min-w-[50px] p-[0] text-center' }}
      showArrow
      placement={'bottom'}
      radius={'md'}
    >
      <DropdownTrigger>
        <Button variant={'flat'} isIconOnly aria-label={'lang'}>
          <Languages size={18} />
        </Button>
      </DropdownTrigger>

      <DropdownMenu aria-label={'Language'} classNames={{ base: 'p-[3px]' }}>
        {routing.locales?.map((item) => (
          <DropdownItem
            key={item}
            style={{ borderRadius: 6 }}
            onClick={() => push(pathname, { locale: item })}
          >
            {localesLabel?.find((el) => el?.key === item)?.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default LangComponent
