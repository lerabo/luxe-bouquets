import { ILayoutData } from '@/app/shared/context'

import { ISettingsFields, ITextInSiteFields } from '../../../../@types/generated/contentful'

export const getSettings = (settings?: ILayoutData, key?: string) => {
  return (
    (
      settings?.settings?.find((el) => (el?.fields as ISettingsFields)?.key === key)
        ?.fields as ISettingsFields
    )?.value ?? ''
  )
}

export const getTextInSite = (settings?: ILayoutData, key?: string) => {
  return (
    (
      settings?.textInSite?.find((el) => (el?.fields as ITextInSiteFields)?.key === key)
        ?.fields as ITextInSiteFields
    )?.text ?? ''
  )
}
