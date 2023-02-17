import About from './components/About'
import Header from './components/Header'
import Main from './components/Main'
import './style/global.sass'

const App = () => {

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className="container">
        <main>
          <Main />
        </main>
      </div>
      <div className="footer">
        <footer>
          <About />
        </footer>
      </div>
    </div>
  )
}

export default App
