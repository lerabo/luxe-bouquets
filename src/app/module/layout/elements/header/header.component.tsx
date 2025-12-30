import { FC } from 'react'

import { LangComponent } from '@/app/shared/component/lang'

// component
const HeaderComponent: FC = () => {
  // return
  return (
    <header>
      <div>
        <LangComponent />
      </div>
    </header>
  )
}

export default HeaderComponent
