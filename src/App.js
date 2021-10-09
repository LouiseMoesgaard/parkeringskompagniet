

import List from './components/list.component';

function App() {
  return(
    <div className="bg-custom-gradient h-screen w-screen flex xs:flex-col-reverse">
      <div className="grid grid-cols-2 xs:w-screen md:w-11/12 h-5/6 xs:m-0 md:m-auto rounded-3xl bg-white">
        <div className="xs:col-span-2 md:col-span-1">
          
          <List></List>

        </div>
        <div className="xs:hidden md:block md:col-span-1 shadow-lg rounded-3xl"></div>
      </div>
    </div>
  )
}

export default App;
