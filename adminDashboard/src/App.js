import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './Components/MainLayout';
import Login from './Pages/Login';
import ResetPassword from './Pages/ResetPassword';
import ForgotPassword from './Pages/ForgotPassword';
import DashBoard from './Pages/DashBoard';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login></Login>}></Route>
                    <Route
                        path="/reset-password"
                        element={<ResetPassword></ResetPassword>}
                    ></Route>
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword></ForgotPassword>}
                    ></Route>
                    <Route
                        path="/admin"
                        element={<MainLayout></MainLayout>}
                    ></Route>
                    <Route index element={<DashBoard></DashBoard>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
