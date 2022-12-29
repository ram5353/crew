import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/Reports";
import Team from "./pages/Team";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useIsAuthenticated,
} from "@azure/msal-react";
import { SignInButton } from "./components/SignInButton";

const MainContent = (props) => {
  return (
    <Router>
      <Sidebar isAuthenticated={props.isAuthenticated}/>
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/reports/reports1" element={<ReportsOne />} />
        <Route path="/reports/reports2" element={<ReportsTwo />} />
        <Route path="/reports/reports3" element={<ReportsThree />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
};

export default function App() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <div className="App">
      {isAuthenticated ? (
        <AuthenticatedTemplate>
          <MainContent isAuthenticated={isAuthenticated}/>
        </AuthenticatedTemplate>
      ) : (
        <UnauthenticatedTemplate>
          <SignInButton />
        </UnauthenticatedTemplate>
      )}
    </div>
  );
}
