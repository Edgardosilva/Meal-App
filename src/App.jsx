import './App.css'
import NavBar from './components/NavBar'
import InputSearch from './components/InputSearch'

function App() {

  return (
    <main className='flex h-screen flex-col bg-gradient-to-r from-mainColor-300 to-mainColor-500 '>
      <NavBar />
      <InputSearch />
    </main>
  )
}

export default App
