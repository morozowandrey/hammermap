import classes from './Menu.module.scss'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import ProgressiveImage from 'react-progressive-image'

import ProjectButton from '../layout/ProjectButton'
import useProjectsNext from '../../hooks/useProjectsNext'
import { useAnalytics } from '../../hooks/useAnalytics'
import AnnaImageTiny from '../../images/Ann_tiny.jpg'
import AnnaImage from '../../images/Ann.png'

const Menu = () => {
  const location = useLocation()
  useAnalytics(location.pathname)
  const [isAboutPage, setIsAboutPage] = useState(false)
  const projects = useSelector(state => state.app.projects);
  const currentProjectId = location.pathname.split('projects/')[1]
  const currentProject = projects.find(project => project.id === currentProjectId)

  const [nextProjectId, isNextButtonVisible] = useProjectsNext()

  useEffect(() => {
    (location.pathname === '/about') ? setIsAboutPage(true) : setIsAboutPage(false)

    return () => {
      setIsAboutPage(false)
    }
  }, [location])

  return (
    <aside className={classes.aside}>
      <div className={`${classes['menu-wrapper']}`}>
        <nav className={`${classes.menu}`}>
          <ul className={classes['menu-list']}>
            <li className={classes['menu-list-item']}>
              <NavLink
                className={`${classes['menu__link']} ${classes['menu__link_main']} text-medium-20`}
                to="/"
              >
                Anna Yushchenko
              </NavLink>
            </li>
            <span className={classes.divider}></span>
            <li className={classes['menu-list-item']}>
              <NavLink className={`${classes['menu__link']} text-medium`} to="/projects">
                Projects
              </NavLink>
            </li>
            <li className={classes['menu-list-item']}>
              <NavLink className={`${classes['menu__link']} text-medium`} to="/about">
                About & Contacts
              </NavLink>
            </li>
          </ul>
        </nav>

        {location.pathname.includes('projects/')
          &&
          <div className={`${classes['menu']} ${classes['menu_project']} ${classes['menu-details']}`}>
            <h3 className={`${classes['menu-details__title']} text-medium`}>Intruduction</h3>
            <span className={classes.divider}></span>
            <p className={`${classes['menu-details__text']} text-medium_height`}>{currentProject.inrtoduction}</p>
            <p className={`${classes['menu-details__year']} text-medium_height`}>Year: {currentProject.year}</p>
          </div>
        }

        {location.pathname.includes('about')
          &&
          <div className={`${classes['menu']} ${classes['menu-socials']}`}>
            <div className={classes['menu-socials-linksgroup']}>
              <a href="https://www.are.na/anna-yushchenko" target='_blank' rel="noreferrer" className={`${classes['menu__link']} text-medium_height`}>Are.na</a>
              <a href="https://www.instagram.com/annayushch/" target='_blank' rel="noreferrer" className={`${classes['menu__link']} text-medium_height`}>Instagram</a>
            </div>
            <div className={classes['menu-socials-linksgroup']}>
              <a href="https://www.linkedin.com/in/anna-yushchenko-045647121" target='_blank' rel="noreferrer" className={`${classes['menu__link']} text-medium_height`}>Linkedin</a>
              <a href="mailto:annayushch@gmail.com" target='_blank' rel="noreferrer" className={`${classes['menu__link']} text-medium_height`}>Email</a>
            </div>
          </div>
        }
      </div>


      {location.pathname.includes('about') &&
        <ProgressiveImage src={AnnaImage} placeholder={AnnaImageTiny}>
          {(src, loading) => <img style={{ filter: loading ? 'grayscale(0.5) blur(10px)' : '' }} loading="lazy" className={classes['menu__img']} src={src} alt="Anna selfie" />}
        </ProgressiveImage>
      }

      {isNextButtonVisible &&
        <div className={classes['next-btn-visibility-handler']}>
          <ProjectButton nextProjectId={nextProjectId} />
        </div>
      }

    </aside >
  )
}

export default Menu
