import React from 'react';
import Otp from "../modules/auth/pages/otp";
import {Route, Routes} from "react-router-dom";
import Login from "../modules/auth/pages/login";
import SignUp from "../modules/auth/pages/signUp";
import Dashboard from "../modules/dashboard/pages";
import {Layout} from "../modules/common/components";
import ForgotPassword from "../modules/auth/pages/forgot-password";
import ChildSelection from "../modules/applications/pages/child-selection";
import AdminApplications from "../modules/applications/pages/admin-applications";
import CreateApplication from "../modules/applications/pages/create-application";
import ParentApplications from "../modules/applications/pages/parent-applications";
import ViewParentApplication from "../modules/applications/pages/view-parent-application";
import ViewAdminApplications from "../modules/applications/pages/view-admin-applications";
import CreateApplicationAdmin from "../modules/applications/pages/create-application-admin";
import Students from "../modules/students/pages";
import AddUpdateStudent from "../modules/students/pages/add_update";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Login/>}/>
            <Route path={'sign-up'} element={<SignUp/>}/>
            <Route path={'forgot-password'} element={<ForgotPassword/>}/>
            <Route path={'otp'} element={<Otp/>}/>
            <Route
                path={'/'}
                element={<Layout/>}
            >
                <Route path={'dashboard'} element={<Dashboard/>}/>

                <Route path={'parent-applications'} element={<ParentApplications/>}>
                    <Route path={'view/:id'} element={<ViewParentApplication/>}/>
                    <Route path={'create'} element={<CreateApplication/>}>
                        <Route path={'select-child'} element={<ChildSelection/>}/>
                    </Route>
                </Route>

                <Route path={'admin-applications'} element={<AdminApplications/>}>
                    <Route path={'create'} element={<CreateApplicationAdmin />} />
                    <Route path={'view/:id'} element={<ViewAdminApplications />} />
                </Route>

                <Route path={'students'} element={<Students />}>
                    <Route path={'create'} element={<AddUpdateStudent />} />
                    <Route path={'view/:id'} element={<AddUpdateStudent />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
