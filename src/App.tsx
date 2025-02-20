import './App.css';

import { Timeline } from './components/Timeline/Timeline';
import { Calendar } from './components/Calendar';

const App = () => {
  return (
    <div className="content">
      <Calendar />
      <Timeline />
    </div>
  );
};

export default App;
