import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react-pro'
import { DocsExample } from 'src/components'

import TablaPrimeraFase from './TablaPrimeraFase'

const PrimeraFase = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Formularios E-14:</strong> Resultados de elecciones legislativas del 2018
          </CCardHeader>
          <CCardBody>
            <TablaPrimeraFase />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default PrimeraFase
