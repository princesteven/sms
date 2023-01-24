import React from 'react';
import {Drawer} from 'antd';
import {Outlet, useNavigate} from "react-router-dom";
import SearchSchool from "../components/ParentApplication/CreateParentApplication/SearchSchool";

/**
 * @function
 * @name CreateApplication
 * @description Detailed page of the parent application process
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const CreateApplication = () => {
    const navigate = useNavigate()

    const onClose = () => {
        navigate('..')
    };

    return (
        <Drawer title="New Application" width={'50%'} onClose={onClose} open={true}>
            <SearchSchool/>
            <Outlet />
        </Drawer>
    )
};

export default CreateApplication;