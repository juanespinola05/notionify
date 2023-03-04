import { promises } from 'node:fs'
import { resolve } from 'node:path'
import { transform } from 'npm:@svgr/core'
// import { transform } from '@svgr/core'

const SVG_PATH = resolve('public', 'svgs')
const SVG_COMPONENTS = resolve('.', 'src', 'components', 'SVG.tsx')
const SvgComponentsBaseFile = (entries: string): string => `// DO NOT EDIT. This file is generated by script.
// This file SHOULD be checked into source version control.
// This file is automatically updated
import { FC } from 'react'

export const svgComponents: Record<string, FC<any>> = {
  ${entries}
}
`

const svgFiles = await promises.readdir(SVG_PATH)

const svgEntries: string[] = []

for (const svgFile of svgFiles) {
  const [name, extension] = svgFile.split('.')
  if (extension !== 'svg') continue
  const inObject = svgEntries.some(entry => entry.startsWith(name))
  if (inObject) continue

  const svgFileContent = (await promises.readFile(resolve(SVG_PATH, svgFile)))
    .toString()
    .replaceAll(/\n/mg, '')
  const svgrComponent: string = await transform(svgFileContent, {
    jsxRuntime: 'automatic'
  }, {
    componentName: name
  })
  const exportStartIndex = svgrComponent.indexOf('export default')
  const component = svgrComponent.slice(0, exportStartIndex)
  const fcStartIndex = component.indexOf('props')
  const fc = component.slice(fcStartIndex, component.length)
    .replaceAll('\n', ' ')
    .replaceAll(';', '')

  const newEntry = `'${name}': ${fc}`
  svgEntries.push(newEntry)
}

const newFileContent = SvgComponentsBaseFile(svgEntries.join(',\n'))
await promises.writeFile(SVG_COMPONENTS, newFileContent)
