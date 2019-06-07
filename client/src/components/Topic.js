import React, { useEffect } from 'react'
import DeleteLaunchModal from './DeleteLaunchModal'
import EditIcon from '../icons/edit.png'
import GhimIcon from '../icons/ghim.png'
import { TopicConsumer } from '../contexts/TopicContext'
import '../alter.css'

const Main = ({ value, topic }) => {
  const { _id, title, content } = topic
  const { onEdit, editedTopic, onDelete } = value
  useEffect(() => {
    document.getElementById(`topic${_id}`).style.opacity = 1
  })

  function onEditTopic() {
    onEdit(topic)
  }

  function onDeleteItem() {
    onDelete(_id)
  }

  const ghimStyle = {
    transition: 'opacity 0.5s ease 0s',
    opacity: editedTopic._id === _id ? 1 : 0
  }

  return (
    <div id={`topic${_id}`} className="todo-card card card-body website">
      <h5 className="card-title flex-style">
        <div><h2>{title}</h2></div>
        <div style={ghimStyle}><img src={GhimIcon} alt="" className="ghim-icon" style={{ width: '40px' }} /></div>
      </h5>
      <p className="card-text">{content}</p>
      <div className="flex-style">
        <div />
        <div className="icons">
          <DeleteLaunchModal onDelete={onDeleteItem} />
          <img src={EditIcon} alt="" onClick={onEditTopic} />
        </div>
      </div>
    </div>
  )
}

export default function Topic({ topic }) {
  return (
    <TopicConsumer>
      {(value) => <Main value={value} topic={topic} />}
    </TopicConsumer>

  )
}
