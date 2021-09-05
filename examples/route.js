import Install from './docs/install.md'
import QuikeStart from './docs/quikeStart.md'

import Tool from './docs/tool.md'
import Info from './docs/info.md'
import Base from './docs/components/base.md'
import Color from './docs/components/color.md'
import Btn from './docs/components/btn.md'
import Link from './docs/components/link.md'
import Nav from './docs/components/nav.md'
const routes = [
  {
    path: '/',
    component: Install,
    name: 'default'
  },
  {
    path: '/guide/install',
    component: Install
  },
  {
    path: '/guide/quikeStart',
    component: QuikeStart
  },
  {
    path: '/tool',
    component: Tool
  },
  {
    path: '/info',
    component: Info
  },
  {
    path: '/components/base',
    component: Base
  },
  {
    path: '/components/color',
    component: Color
  },
  {
    path: '/components/btn',
    component: Btn
  },
  {
    path: '/components/link',
    component: Link
  },
  {
    path: '/components/nav',
    component: Nav
  }
]

export default routes
