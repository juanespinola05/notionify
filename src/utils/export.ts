import { DownloadOptions } from '../types'

const BASE_API_URL = 'https://avatar-notion.deno.dev'

interface AvatarUrlBuilder extends DownloadOptions {
  illustrationIdList: string[]
}

export const buildAvatarUrl = ({
  illustrationIdList,
  size = '1000',
  format = 'png'
}: AvatarUrlBuilder): string => {
  const url = new URL(BASE_API_URL)
  url.searchParams.append('layers', illustrationIdList.join(';'))
  url.searchParams.append('format', format)
  url.searchParams.append('size', size)
  return url.toString()
}
