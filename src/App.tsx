import './App.css'
import { Calendar } from './components/Calendar'
import { Fab } from './components/Fab'

import { Provider } from 'react-redux'
import store from './store'

const App = () => {
    return (
        <Provider store={store}>
            <div className="content">
                <Calendar />
                {/* <Timeline /> */}
                <Fab />
            </div>
        </Provider>
    )
}

export default App
