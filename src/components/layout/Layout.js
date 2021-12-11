import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import classes from './Layout.module.scss'

const Layout = (props) => {
  const [isHomePage, setIsHomePage] = useState(false)
  const location = useLocation()

  useEffect(() => {
    (location.pathname === '/') ? setIsHomePage(true) : setIsHomePage(false)
  }, [location])

  return (

    <div className="wrapper">
      <div className={`${classes.layout} "container"`}>
        {props.children}
      </div>
    </div>
  )
}

export default Layout
