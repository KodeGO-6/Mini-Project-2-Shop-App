import React from 'react'
import { Link, useResolvedPath, useMatch } from 'react-router-dom'

const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <Link to={to} {...props} className={isActive ? 'active' : ''}>{children}</Link>
  )
}

export default CustomLink