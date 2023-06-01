import Otp from "../pages/otp";
import Login from "../pages/login";
import SignUp from "../pages/signUp";
import {Route} from "react-router-dom";
import {fe} from "../../common/configs";
import ForgotPassword from "../pages/forgot-password";

export default (
    <Route>
        <Route path={fe.login} element={<Login/>}/>
        <Route path={fe.signup} element={<SignUp/>}/>
        <Route path={fe.forgot_password} element={<ForgotPassword/>}/>
        <Route path={fe.otp} element={<Otp/>}/>
    </Route>
)
