import { NavigationItem, NavigationDropdownItem } from "../types/navigation.types"

export const navigationItems : (NavigationItem | NavigationDropdownItem)[] = [
  {
    type: 'link',
    title: 'home',
    href: '/'
  },
  {
    type: 'link',
    title: 'shop',
    href: 'shop'
  },
  {
    type: 'dropdown',
    title: 'categories',
    items: [
      {
        type: 'link',
        title: 'Jewelry Top',
        href: 'cat1'
      },
      {
        type: 'link',
        title: 'Super puper jewelry',
        href: 'cat2'
      },
      {
        type: 'link',
        title: 'Super puper jewelry',
        href: 'cat2'
      },
      {
        type: 'link',
        title: 'Super puper jewelry',
        href: 'cat2'
      },
      {
        type: 'link',
        title: 'Super puper jewelry',
        href: 'cat2'
      },
      {
        type: 'link',
        title: 'Super puper jewelry',
        href: 'cat2'
      },
      {
        type: 'link',
        title: 'Super puper jewelry',
        href: 'cat2'
      },
      {
        type: 'link',
        title: 'Super puper jewelry',
        href: 'cat2'
      },
      {
        type: 'link',
        title: 'Super puper jewelry',
        href: 'cat2'
      },
    ]
  },
  {
    type: 'link',
    title: 'about us',
    href: 'about'
  },
  {
    type: 'link',
    title: 'contact',
    href: 'contact'
  }
]