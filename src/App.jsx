import './App.css'
import NavBar from './components/NavBar'
import InputSearch from './components/InputSearch'

function App() {

  return (
    <main className='flex h-screen flex-col bg-slate-200 '>
      <NavBar />
      <InputSearch />
    </main>
  )
}

export default App
