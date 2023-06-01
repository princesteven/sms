import React from 'react';
import {menus} from "../../../configs/menu";

/**
 * @function
 * @name useCreateMenuItems
 * @description custom hook for filtering menu items according to the user who logged in
 */
const useCreateMenuItems = () => {
    // TODO: depending on the user who logs in, create the appropriate menu i.e, hide the menus that are unnecessary
    return {menus};
};

export default useCreateMenuItems;
