import './App.css'
import NavBar from './components/NavBar'
import InputSearch from './components/InputSearch'
function App() {

  return (
    <main className='bg-slate-900 flex h-screen flex-col'>
      <NavBar />
      <InputSearch />
    </main>
  )
}

export default App
