import React from 'react'
import Topic from './Topic'
import { TopicConsumer } from '../contexts/TopicContext'

const Main = ({ topics }) => {
  return (
    <div className="todos-container">
      {topics.map(topic => <Topic key={topic._id} topic={topic} />)}
    </div>
  )
}

export default function Topics() {
  return (
    <TopicConsumer>
      {({ topics }) => <Main topics={topics} />}
    </TopicConsumer>
  )
}

