import React from 'react'
import { useKeycloak } from "@react-keycloak/web";

const HelloWorld = () => {
  const { keycloak, initialized } = useKeycloak();
  return (
    <>
    <div className="helloContainer">HelloWorld from protected route</div>
    </>
  )
}

export default HelloWorld