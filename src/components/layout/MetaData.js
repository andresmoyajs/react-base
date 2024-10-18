import React from 'react'
import { Helmet } from 'react-helmet'

export const MetaData = ({titulo}) => {
  return (
    <Helmet>
        <title>{`${titulo} - Ecommerce Amazon`}</title>
    </Helmet>
  )
}
