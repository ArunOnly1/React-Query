import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import DependentQueryPage from './components/DependentQueryPage'
import DynamicParallerQueries from './components/DynamicParallerQueries'
import { HomePage } from './components/Home.page'
import ParallelQueries from './components/ParallelQueries'
import RQSuperhero from './components/RQSuperhero'
import RQSuperHeroesPage from './components/RQSuperHeroes.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>

            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/rq-super-heroes/:heroId'>
            <RQSuperhero />
          </Route>
          <Route path='/rq-dependent'>
            <DependentQueryPage email='erarun1nly1@gmail.com' />
          </Route>
          <Route path='/rq-dynamic-parallel'>
            <DynamicParallerQueries heroIds={[1, 3]} />
          </Route>
          <Route path='/rq-parallel'>
            <ParallelQueries />
          </Route>
          <Route path='/super-heroes'>
            <SuperHeroesPage />
          </Route>
          <Route path='/rq-super-heroes'>
            <RQSuperHeroesPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
