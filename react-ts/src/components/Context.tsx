import React, { useContext } from 'react'
import { AppContext } from '../App'

type Props = {}

const Context = (props: Props) => {
    const contextData = useContext(AppContext);

  return (
    <>
        {contextData &&
            <div>
                <span>Linguagem: {contextData.language}</span>
                <br />
                <span>Framework: {contextData.framework}</span>
                <br />
                <span>Projetos: {contextData.projects}</span>
            </div>
        }
    </>
  )
}

export default Context