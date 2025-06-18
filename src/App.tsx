import './App.css'
import { TodosProvider } from './context/TodosContext';
import { TodoInput, TodoList } from './components/todo-list';
import { ThemeProvider } from './context/ThemeProvider';
import ThemeToggle from './components/ui/theme-toggle';

function MasterContainer({ children }: { children?: React.ReactNode }) {
  return (
    <div className='bg-amber-200 p-5 w-[500px] h-[600px] rounded-md shadow-[5px_5px_2.5px_rgba(0,0,0,0.3)] shadow-black text-gray-700'>
      {children}
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <div>
        <div id='title' className="p-5 text-gray-200 font-bold text-[25px] underline decoration-[3px]">
          TodoList
          <ThemeToggle />
        </div>
        <MasterContainer>
          <TodosProvider>
            <ul className='h-[90%] overflow-y-auto'>
              <TodoList />
            </ul>
            <TodoInput />
          </TodosProvider>
        </MasterContainer>
      </div>
    </ThemeProvider>
  )
}

export default App;
