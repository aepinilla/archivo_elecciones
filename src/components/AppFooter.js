import React from 'react'
import { CFooter } from '@coreui/react-pro'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://testigos2022.org" target="_blank" rel="noopener noreferrer">
          Testigos 2022
        </a>
        <span className="ms-1">&copy;</span>
      </div>
      <div className="ms-auto">
        <small className="me-1">Los documentos publicados en este sitio web han sido tomados de la página web de la <a href='https://www.registraduria.gov.co/-Historico-de-Resultados-3635-'>Registraduría Nacional del Estado Civil. </a>
        Estos documentos constituyen información pública. Por lo tanto, pueden ser consultados y reproducidos por cualquier ciudadano, de acuerdo a la sentencia T-527/05 de la Corte Constitucional y al artículo 75 de la Consitución Política de Colombia.</small>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
