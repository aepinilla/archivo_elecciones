import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react-pro'
import { DocsExample } from 'src/components'

import TablaSegundaFase from './TablaSegundaFase'

const SegundaFase = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Formularios E-24:</strong> Resultados de elecciones legislativas del 2018
          </CCardHeader>
          <CCardBody>
            <TablaSegundaFase />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default SegundaFase
