import { Link } from 'react-router-dom'
import classes from './ProjectButton.module.scss'

const ProjectButton = (props) => {
  return (
    <div className={classes['button-wrapper']}>
      <Link to={`/projects/${props.nextProjectId}`} className={`${classes.button} text-medium`}>Next project →</Link >
    </div>
  )
}

export default ProjectButton
