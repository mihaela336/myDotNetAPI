import React from 'react'
import Table from '../../Table/Table'
import RatioList from '../../RatioList/RatioList'

interface Props {}

const DesignPage = (props: Props) => {
  return (
    <>
    <h1>Design page</h1>
    <h2>house various aspects of the design of the app</h2>
    <RatioList />
    <Table/>
        

    </>

  )
}

export default DesignPage