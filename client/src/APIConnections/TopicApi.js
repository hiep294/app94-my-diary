import ApiConnection from 'hiep294-apiconnection'

const TopicApi = ApiConnection({
  url: '/api/topics',
  actions: ['index', 'create', 'update', 'delete']
})

export default TopicApi