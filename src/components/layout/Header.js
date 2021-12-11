import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import classes from './Header.module.scss'

const Header = () => {
  const [isAboutPage, setIsAboutPage] = useState(false)
  const location = useLocation()

  useEffect(() => {
    (location.pathname === '/about') ? setIsAboutPage(true) : setIsAboutPage(false)
  }, [location])

  return (
    <header className={`${classes.header} ${isAboutPage && classes['header_about']}`}>
      <p className={`text-sang ${classes['header-text']}`}>
        I am a Kyiv-based designer with almost 5 years of experience. I design digital products, interfaces, and mobile apps for clients in IoT, medicine, and tech. Now open to full-time work and projects.
      </p>
    </header>
  )
}

export default Header
