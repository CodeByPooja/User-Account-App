import { ErrorBoundary } from "react-error-boundary";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import ErrorFallback from "./components/error-fallback";
import { UserProvider } from "./context/user-context";
import Dashboard from "./pages/dashboard";
import Gallery from "./pages/gallery";
import Posts from "./pages/posts";
import Profile from "./pages/profile";
import SelectUser from "./pages/select-user";
import Todos from "./pages/todos";


function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SelectUser />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<Navigate to="profile" />} />
              <Route path="profile" element={<Profile />} />
              <Route path="posts" element={<Posts />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="todo" element={<Todos />} />
              <Route
                path="*"
                element={<Navigate to="/dashboard/profile" replace />}
              />
            </Route>
            <Route path="*" element={<Navigate to="." />} />
          </Routes>
          <Outlet />
        </BrowserRouter>
      </UserProvider>
    </ErrorBoundary>
  );
}

export default App;
