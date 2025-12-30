import { NextPage } from 'next'

import { createClient } from 'contentful'

import { HomeModule } from '@/app/module/home'

import { IProduct } from '../../../../@types/generated/contentful'

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? '',
})

export async function getProducts(): Promise<IProduct[]> {
  const response = await client.getEntries({
    content_type: 'product',
  })

  // Convert EntryCollection<IProduct> to typed array
  return response.items as IProduct[]
}
// page
const Page: NextPage = async () => {
  const data = await getProducts()

  console.log(data[0]?.fields)
  // return
  return <HomeModule />
}

export default Page
