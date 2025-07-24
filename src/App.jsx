import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import MyWorksPage from './pages/MyWorks';
import CateringJobDetails from './pages/WorkDetails';
import Login from './pages/Login';
import LandingHome from './LandingPage/Pages/Home';

function App() {
  const RequireAuth = ({ children }) => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

                <Route path="/landing" element={<LandingHome />} />


        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/my-works"
          element={
            <RequireAuth>
              <MyWorksPage />
            </RequireAuth>
          }
        />
        <Route
          path="/work-details/:id"
          element={
            <RequireAuth>
              <CateringJobDetails />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
