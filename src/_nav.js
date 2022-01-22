import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilCalendar,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilEnvelopeOpen,
  cilGrid,
  cilLayers,
  cilMap,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilSpreadsheet,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react-pro'

const _nav = [
  {
    component: CNavTitle,
    name: '2018',
  },
  {
    component: CNavGroup,
    name: 'Congreso',
    to: '/base',
    items: [
      {
        component: CNavItem,
        name: 'Formularios E-14',
        to: '/views/dosmil-dieciocho/congreso/PrimeraFase',
      },
      // {
      //   component: CNavItem,
      //   name: 'Fase 2: E-24',
      //   to: '/views/dosmil-dieciocho/congreso/SegundaFase',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Fase 3: E-26',
      //   to: '/views/dosmil-dieciocho/congreso/TerceraFase',
      // },
    ],
  },
]

export default _nav
