import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'

const useProjectsNext = () => {
  const [isNextButtonVisible, setIsNextButtonVisible] = useState(false)
  const location = useLocation()
  const projects = useSelector(state => state.app.projects);
  const currentProjectId = location.pathname.split('projects/')[1]
  const currentProjectIndex = projects.findIndex(project => project.id === currentProjectId)

  const findEl = (arr) => {
    if (currentProjectIndex === (projects.length - 1)) {
      return projects[0].id
    } else if (projects[currentProjectIndex + 1].id === 'previous-projects') {
      return projects[currentProjectIndex + 2].id
    } else {
      return projects[currentProjectIndex + 1].id
    }
  }
  const nextProjectId = findEl(projects)

  useEffect(() => {
    const restrictedRoutes = [
      '/',
      '/projects',
      '/about'
    ]

    if (!restrictedRoutes.find(route => route === location.pathname)) {
      setIsNextButtonVisible(true)
    }

    return () => {
      setIsNextButtonVisible(false)
    }
  }, [location])

  return [nextProjectId, isNextButtonVisible]
}

export default useProjectsNext