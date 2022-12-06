import React from 'react'
import {Link as RouterLink} from "react-router-dom"

type Props = {
    to:string
    children:React.ReactNode
}

export default function Link({...props}:Props) {
  return (
    <RouterLink to={props.to} className="font-medium text-lg hover:underline">
          {props.children}
    </RouterLink>
  )
}