import './App.css'
import PageTitle from './components/PageTitle'
import ToDoContainer from './components/ToDoContainer'

const App = () => {
  return (
    <div style={{ padding: '20px', minHeight: '100vh' }}>
      <PageTitle title="ToDo App" />
      <ToDoContainer />
    </div>
  )
}

export default App