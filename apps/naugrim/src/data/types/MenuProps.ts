export type MenuProps = {
  id: number
  title: string
  path?: string
  newTab: boolean
  submenu?: MenuProps[]
}
