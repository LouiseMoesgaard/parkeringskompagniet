import './App.css';

import List from './components/list.component';

function App() {
  return(
    <div className="App h-screen w-screen flex sm:flex-col-reverse">
      <div className="grid grid-cols-2 sm:w-screen md:w-11/12 h-5/6 sm:m-0 md:m-auto rounded-3xl bg-white">
        <div className="sm:col-span-2 md:col-span-1">
          
          <List></List>

        </div>
        <div className="sm:hidden md:block md:col-span-1 shadow-lg rounded-3xl"></div>
      </div>
    </div>
  )
}

export default App;
