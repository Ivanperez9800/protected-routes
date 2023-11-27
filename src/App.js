// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Landing, Home, Dashboard, Analytics, Admin } from "./Pages"
import { useState } from 'react';



import { ProtectedRoute } from './Componentes/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({
      id: 1,
      name: "John",
      permissions: ["analize"],
      roles: ["admin"]

    })
  }

  const logout = () => {
    setUser(null);
  }

  return (




    <BrowserRouter>

      <Navigation />

      {
        /*SI EL USUARIO EXISTE MOSTRAR LOGOUT */
        user ? (
          <button onClick={logout}>Logout</button>
        )

          /*SI NO EXISTE MOSTRAR LOGIN  */
          : (
            <button onClick={login}>Login</button>
          )
      }

      <Routes>
        <Route index element={<Landing />} />
        <Route path='/landing' element={<Landing />} />

        {/* RUTAS PROTEGIDAS */}

        <Route element={<ProtectedRoute isAllowed={!!user} />}>

          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Route>

        <Route path="/analytics" element={

          <ProtectedRoute
            isAllowed={!!user && user.permissions.includes("analize")}
            redirectTo='/home'
          >
            <Analytics />
          </ProtectedRoute>
        } />


        <Route path='/admin' element={

          <ProtectedRoute
            isAllowed={!!user && user.roles.includes("admin")}
            redirectTo='/home'
          >

            <Admin />
          </ProtectedRoute>

        }
        />

      </Routes>
    </BrowserRouter>
  );
}



function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/landing" >Landing</Link>
        </li>

        <li>
          <Link to="/home" >Home</Link>
        </li>

        <li>
          <Link to="/dashboard" >Dashboard</Link>
        </li>

        <li>
          <Link to="/analytics" >Analytics</Link>
        </li>

        <li>
          <Link to="/admin" >Admin</Link>
        </li>


      </ul>
    </nav>
  )
}

export default App;
