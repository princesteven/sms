import './app.css'
import {Spin} from "antd";
import {Suspense} from "react";
import {Route, Routes} from 'react-router-dom';
import AuthRoutes from "../modules/auth/routes";
import StudentsRoutes from "../modules/students/routes";
import Layout from "../modules/common/components/Layout";
import DashboardRoutes from "../modules/dashboard/routes";


function App() {
    return (
        <Suspense
            fallback={
                <div className="grid place-content-center w-screen h-screen bg-black opacity-70">
                    <Spin spinning={true}/>
                    <div className={"text-white mt-2"}>Loading Page...</div>
                </div>
            }
        >
            <Routes>
                {AuthRoutes}
                <Route path={'/'} element={<Layout/>}>
                    {DashboardRoutes}
                    {StudentsRoutes}
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;
