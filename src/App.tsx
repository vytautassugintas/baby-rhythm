import './App.css'
import AppBar from './components/AppBar'
import { Calendar } from './components/Calendar'

import { Provider } from 'react-redux'
import store from './store/store'

const App = () => {
    return (
        <Provider store={store}>
            <AppBar />
            <Calendar />
        </Provider>
    )
}

export default App
