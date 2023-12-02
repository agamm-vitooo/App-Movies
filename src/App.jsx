import './App.css'
import Hero from './components/Hero'
import NavigationBar from './components/NavigationBar'
import NewRelease from './components/NewRelease'
import Popular from './components/Popular'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-slate-800 scroll-smooth'>
      <div>
        <NavigationBar />
        <Hero></Hero>
        <Popular></Popular>
        <NewRelease></NewRelease>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
