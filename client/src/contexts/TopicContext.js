import React, { Component } from 'react'
import TopicApi from '../APIConnections/TopicApi'
const TopicContext = React.createContext()
const Provider = TopicContext.Provider;

export class TopicProvider extends Component {
  state = {
    topics: [],
    editedTopic: {},
    createTopic: (topic, setStateForm) => {
      TopicApi.create(topic, (resTopic) => {
        this.setState({
          topics: [resTopic, ...this.state.topics]
        })
        setTimeout(() => {
          setStateForm({
            title: '',
            content: ''
          })
        }, 1)
      }, (errors) => {
        setStateForm({
          errors
        })
      }, () => {
        setStateForm({
          errors: ['Network is disconnected, please check it!']
        })
      })
    },
    onEdit: (topic) => {
      this.setState({
        editedTopic: topic
      })
    },
    onCloseEditing: () => {
      this.setState({ editedTopic: {} })
    },
    onUpdate: (topic, setStateForm) => {
      TopicApi.update(topic, () => {
        //handle success
        this.setState({
          topics: this.state.topics.map(item => {
            if (item._id === topic._id) {
              for (var key in topic) {
                item[key] = topic[key]
              }
            }
            return item
          })
        })
        // close editing
        this.state.onCloseEditing()
      }, (errors) => {
        //handle errors  
        setStateForm({
          errors
        })
      }, () => {
        //handle network disconnect
        setStateForm({
          errors: ['Network is disconnected, please check it!']
        })
      })

    },
    onDelete: (_id) => {
      TopicApi.delete(_id, () => {
        this.setState({
          topics: this.state.topics.filter(item => item._id !== _id)
        })
      })
      // for animation 
      document.getElementById(`topic${_id}`).style.opacity = 0.3
    }
  }

  componentDidMount() {
    TopicApi.index((topics) => {
      this.setState({ topics })
    })
  }

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    )
  }
}

export const TopicConsumer = TopicContext.Consumer