let TopicDB = () => {
  return {
    topics: TopicDB.topics,
    editedTopic: TopicDB.editedTopic,
  }
}

const initialTopics = []
const initialEditedTopics = {}

TopicDB.topics = initialTopics
TopicDB.editedTopic = initialEditedTopics

// TopicDB.setTopics = (topics) => {
//   TopicDB.topics = topics
// }

export default TopicDB

