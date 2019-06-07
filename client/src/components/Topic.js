import React, { useEffect } from 'react'
import moment from 'moment'
import DeleteLaunchModal from './DeleteLaunchModal'
import EditIcon from '../icons/edit.png'
import GhimIcon from '../icons/ghim.png'
import { TopicConsumer } from '../contexts/TopicContext'
import '../alter.css'

const Main = ({ value, topic }) => {
  const { _id, title, content, date } = topic
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

  console.log(topic)

  const dateStyle = {
    fontSize: '13px',
    fontStyle: 'italic',
    color: 'grey'
  }

  return (
    <div id={`topic${_id}`} className="todo-card card card-body website">
      <h5 className="card-title flex-style">
        <div><h2>{title}</h2></div>
        <div style={ghimStyle}><img src={GhimIcon} alt="" className="ghim-icon" style={{ width: '40px' }} /></div>
      </h5>
      <p className="card-text">{content}</p>
      <div className="flex-style">
        <div style={dateStyle}>{moment(date).format('MMMM Do YYYY, h:mm:ss a')}</div>
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
