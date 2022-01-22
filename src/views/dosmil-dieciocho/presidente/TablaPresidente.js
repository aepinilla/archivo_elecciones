import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react-pro'
import { DocsExample } from 'src/components'

import FormulariosPresidente from './FormulariosPresidente'


const TablaPresidente = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Formularios E-14:</strong> Resultados de elecciones presidenciales 2018
          </CCardHeader>
          <CCardBody>
            <FormulariosPresidente />
          </CCardBody>
        </CCard>

        {/*<CCard className="mb-4">
          <CCardHeader>
            <strong>Formularios E-24:</strong> Resultados de elecciones presidenciales 2018
          </CCardHeader>
          <CCardBody>
            <FormulariosPresidente />
          </CCardBody>
        </CCard>

         <CCard className="mb-4">
          <CCardHeader>
            <strong>Formularios E-26:</strong> Resultados de elecciones presidenciales 2018
          </CCardHeader>
          <CCardBody>
            <FormulariosPresidente />
          </CCardBody>
        </CCard> */}
      </CCol>
    </CRow>
  )
}

export default TablaPresidente
