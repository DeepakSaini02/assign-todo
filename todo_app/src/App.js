import logo from './logo.svg';
import './App.css';
import { AddTodo } from './Component/AddTodo';
import { AppContextProvider } from './Context';

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <AddTodo />
      </div>
    </AppContextProvider>
  );
}

export default App;
