import Students from "../pages";
import {Route} from "react-router-dom";
import {fe} from "../../common/configs";
import AddUpdateStudent from "../pages/add_update";

export default (
    <Route path={fe.students} element={<Students />}>
        <Route path={fe.create} element={<AddUpdateStudent />} />
        <Route path={`${fe.view}/:id`} element={<AddUpdateStudent />} />
        <Route path={`${fe.update}/:id`} element={<AddUpdateStudent />} />
    </Route>
)
