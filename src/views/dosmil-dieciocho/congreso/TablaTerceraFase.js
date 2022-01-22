import React, { useState } from 'react'
import { CBadge, CButton, CCardBody, CCollapse, CSmartTable } from '@coreui/react-pro'

import data_tercera from './_data_e26.js'

const TablaTerceraFase = () => {
  const [details, setDetails] = useState([])
  const columns = [
    { key: 'departamento', _style: { width: '20%' } },
    { key: 'municipio', _style: { width: '20%' } },
    { key: 'zona', _style: { width: '20%' } },
    { key: 'puesto', _style: { width: '20%' } },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      filter: false,
      sorter: false,
    },
  ]
  const getBadge = (status) => {
    switch (status) {
      case 'Active':
        return 'success'
      case 'Inactive':
        return 'secondary'
      case 'Pending':
        return 'warning'
      case 'Banned':
        return 'danger'
      default:
        return 'primary'
    }
  }
  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }

  return (
    <div className='table-responsive'>
      <CSmartTable
        sorterValue={{ column: 'Departamento', state: 'asc' }}
        tableFilterLabel={'Filtrar'}
        tableFilterPlaceholder={'Escribe palabras clave...'}
        clickableRows
        tableProps={{
          striped: true,
          hover: true,
        }}
        activePage={1}
        footer
        items={data_tercera}
        columns={columns}
        columnFilter
        tableFilter
        cleaner
        itemsPerPageSelect
        itemsPerPage={20}
        columnSorter
        pagination
        scopedColumns={{
          status: (item) => (
            <td>
              <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
            </td>
          ),
          show_details: (item) => {
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  href={item.url}
                  target='blank'
                  variant="outline"
                  shape="square"
                  size="sm"
                  // onClick={() => {
                  //   toggleDetails(item.id)
                  // }}
                >
                  {details.includes(item.id) ? 'Ocultar' : 'Mostrar'}
                </CButton>
              </td>
            )
          },
          details: (item) => {
            return (
              <CCollapse visible={details.includes(item.id)}>
                <CCardBody>
                  <h4>{item.username}</h4>
                  <p className="text-muted">User since: {item.registered}</p>
                  <CButton size="sm" color="info">
                    User Settings
                  </CButton>
                  <CButton size="sm" color="danger" className="ml-1">
                    Delete
                  </CButton>
                </CCardBody>
              </CCollapse>
            )
          },
        }}
      />
    </div>
  )
}

export default TablaTerceraFase
