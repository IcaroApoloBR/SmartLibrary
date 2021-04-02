import React from 'react'
import Home from './Home'
import Login from './Login'
import Sobre from './Sobre'
import Dijkastra from './Dijkstra'

export const ConfigContext = React.createContext()

const configValue = {
  showSpeakerSpeakingDays: true
}

const pages = {
  Home: <Home />,
  Sobre: <Sobre />,
  Login: <Login />,
  Dijkastra: <Dijkastra/>,
  default: <div>Page Not Found</div>
}

const App = ({ pageName, userInfo, query }) => {
  configValue.loggedInUserEmail = userInfo ? userInfo.email : ''
  configValue.query = query
  return (
    <ConfigContext.Provider value={configValue}>
      {pages[pageName] || pages['default']}
    </ConfigContext.Provider>
  )
}

export default App
