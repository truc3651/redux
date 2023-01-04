import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  activeId: PropTypes.number,
  handleActiveHobby: PropTypes.func,
}

HobbyList.defaultProps = {
  hobbyList: [],
  activeId: null,
  handleActiveHobby: () => {},
}

function HobbyList(props) {
  const { hobbyList, activeId, handleActiveHobby } = props
  return (
    <ul>
      {hobbyList.map((hobby) => (
        <li
          key={hobby.id}
          className={activeId === hobby.id ? 'active' : ''}
          onClick={() => handleActiveHobby(hobby.id)}
        >
          {hobby.title}
        </li>
      ))}
    </ul>
  )
}

export default HobbyList
