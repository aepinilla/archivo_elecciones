import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react-pro'
import { DocsExample } from 'src/components'

import TablaTerceraFase from './TablaTerceraFase'

const TerceraFase = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Formularios E-26:</strong> Resultados de elecciones legislativas del 2018
          </CCardHeader>
          <CCardBody>
            <TablaTerceraFase />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default TerceraFase
