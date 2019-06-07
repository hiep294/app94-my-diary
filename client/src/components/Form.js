import React, { Component } from 'react'
import { TopicConsumer } from '../contexts/TopicContext'
import ErrorLaunchModel from './ErrorLaunchModel'
import CreateIcon from '../icons/create.png'
import UpdateIcon from '../icons/update.png'
import CloseIcon from '../icons/close.png'

class Main extends Component {

  state = {
    title: '',
    content: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = () => {
    const { title, content } = this.state
    const topic = { title, content }
    this.props.value.createTopic(topic, this.setState.bind(this))
  }

  onCloseEditing = () => {
    this.props.value.onCloseEditing()
  }

  onUpdate = () => {
    if (this.state._id) {
      const { _id, title, content } = this.state
      this.props.value.onUpdate({ _id, title, content }, this.setState.bind(this))
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value.editedTopic !== this.props.value.editedTopic) {
      const { _id, title, content } = this.props.value.editedTopic
      this.setState({
        _id,
        title,
        content
      })
    }
  }

  onCloseErrorLaunchModel = () => {
    this.setState({
      errors: ''
    })
  }

  render() {
    const { _id, title, content } = this.state
    // has _id means has a editedTopic
    const editIconsStyle = {
      transition: 'opacity 0.5s ease 0s',
      opacity: _id ? 1 : 0,
      cursor: _id ? 'pointer' : 'unset'
    }
    const flexStyle = { display: 'flex', justifyContent: 'space-between' }
    return (
      <div className="todo-form" style={{ position: 'sticky', top: '0px' }}>
        <div className="form-group">
          <input name="title" id="todoTitle" placeholder="Title" type="text" className="form-control"
            onChange={this.onChange}
            value={title || ''}
          />
        </div>
        <div className="form-group">
          <textarea className="form-control" aria-label="With textarea" placeholder="Content" name="content"
            onChange={this.onChange}
            value={content || ''}
          />
        </div>
        <div className="buttons" style={flexStyle}>
          <div>
            <img src={CreateIcon} alt="" width="22px" className="form-icon"
              style={{ cursor: 'pointer' }}
              onClick={this.onSubmit}
            />
            <span style={editIconsStyle}>
              <img src={UpdateIcon} alt="" width="22px" className="form-icon" onClick={this.onUpdate} />
              <img src={CloseIcon} alt="" width="22px" className="form-icon" onClick={this.onCloseEditing} />
            </span>
          </div>
        </div>
        {this.state.errors ? (
          <ErrorLaunchModel onClose={this.onCloseErrorLaunchModel} errors={this.state.errors} />
        ) : null}
      </div>
    )
  }
}


export default class Form extends Component {
  render() {
    return (
      <TopicConsumer>
        {(value) => <Main value={value} />}
      </TopicConsumer>
    )
  }
}
