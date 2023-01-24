import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../modules/auth/pages/login";
import SignUp from "../modules/auth/pages/signUp";
import Dashboard from "../modules/dashboard/pages";
import {Layout} from "../modules/common/components";
import ForgotPassword from "../modules/auth/pages/forgot-password";
import AdminApplications from "../modules/applications/pages/admin-applications";
import CreateApplication from "../modules/applications/pages/create-application";
import ParentApplications from "../modules/applications/pages/parent-applications";
import ChildSelection from "../modules/applications/pages/child-selection";
import ViewParentApplication from "../modules/applications/pages/view-parent-application";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Login/>}/>
            <Route path={'sign-up'} element={<SignUp/>}/>
            <Route path={'forgot-password'} element={<ForgotPassword/>}/>
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
                <Route path={'admin-applications'} element={<AdminApplications/>}/>
            </Route>
        </Routes>
    );
}

export default App;
