export interface NavigationItem {
  type: 'link',
  title: string,
  href: string,
  description?: string,
  onClose?: () => void
}

export interface NavigationDropdownItem {
  type: 'dropdown',
  title: string, 
  items: NavigationItem[]
  onClose?: () => void
}