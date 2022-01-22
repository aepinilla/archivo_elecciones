import React from 'react'

const PrimeraFase = React.lazy(() => import('./views/dosmil-dieciocho/congreso/PrimeraFase.js'))
const SegundaFase = React.lazy(() => import('./views/dosmil-dieciocho/congreso/SegundaFase.js'))
const TerceraFase = React.lazy(() => import('./views/dosmil-dieciocho/congreso/TerceraFase.js'))



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dosmil-dieciocho/congreso/PrimeraFase', name: 'Formularios E-14: Resultados Congreso 2018', component: PrimeraFase },
  { path: '/dosmil-dieciocho/congreso/SegundaFase', name: 'Formularios E-24: Resultados Congreso 2018', component: SegundaFase },
  { path: '/dosmil-dieciocho/congreso/TerceraFase', name: 'Formularios E-26: Resultados Congreso 2018', component: TerceraFase },


]

export default routes
