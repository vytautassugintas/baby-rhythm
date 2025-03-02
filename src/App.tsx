import './App.css'
import { Calendar } from './components/Calendar'

import { Provider } from 'react-redux'
import store from './store/store'

const App = () => {
    return (
        <Provider store={store}>
            <Calendar />
        </Provider>
    )
}

export default App
