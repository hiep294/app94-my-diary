import React from 'react';
import Form from './components/Form'
import Topics from './components/Topics'
import { TopicProvider } from './contexts/TopicContext'

function App() {

  return (
    <div className="App" style={{ minHeight: '900px' }}>
      <div className="container">
        <div className="filter" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h2 className="todos-title">My Diary</h2><a className="nav-link" href="https://github.com/hiep294/app94-my-diary">Github</a>
        </div>
        <hr />
        <div className="row">
          <TopicProvider>
            <div className="col">
              <Topics />
            </div>
            <div className="col">
              <Form />
            </div>
          </TopicProvider>
        </div>
      </div>
    </div>

  );
}

export default App;
