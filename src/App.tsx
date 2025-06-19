import './App.css'
import { TodosProvider } from './context/TodosContext';
import { TodoInput, TodoList } from './components/todo-list';
import { ThemeProvider } from './context/ThemeProvider';
import ThemeToggle from './components/ui/theme-toggle';
import SimpleCard from "./components/ui/simple-card";

function MasterContainer({ children }: { children?: React.ReactNode }) {
  return (
    <SimpleCard variant="outlined" className='w-[400px] h-[600px]'>
      {children}
    </SimpleCard>
  )
}

function App() {
  return (
    <ThemeProvider>
      <div className=''>
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
