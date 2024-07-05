import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css'
import { HomePage } from './components/Home.page'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'
import { RQSuperHeroPage } from './components/RQSuperHero';
import { NorthwindEmployeesPage } from './components/NorthwindEmployees.page';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
              <li>
                <Link to='/employees'>Employees</Link>
              </li>
            </ul>
          </nav>
          
        </div>
        <Routes>
            <Route path='/employees' element={<NorthwindEmployeesPage />} />
            <Route path='/rq-super-heroes/:heroId' element={<RQSuperHeroPage />} />
            <Route path='/super-heroes' element={<SuperHeroesPage />} />
            <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />} />
            <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={true} position='bottom-right' />
    </QueryClientProvider>
  )
}

export default App