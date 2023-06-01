import {NOTIFICATIONS} from "../../db";
import isEmpty from "lodash/isEmpty";
import {Link} from "react-router-dom";
import {NotificationI} from "./notification-types";

/**
 * @function
 * @name NotificationPopover
 * @description A Popover component for displaying notifications
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 * @returns Notification Popover
 */
const NotificationPopover = () => {
    return (
        <div className={'w-80'}>
            {NOTIFICATIONS.map((notification: NotificationI, index) => <div
                className="space-y-1 py-2 border-b hover:cursor-pointer hover:bg-gray-100"
                key={`notification-${index}`}
            >
                <div className={'text-semibold'}>{notification.title}</div>
                <div className="font-light">{notification.description}</div>
            </div>)}

            {!isEmpty(NOTIFICATIONS) && <div className="text-center pt-3"><Link to={'/'}>Show All</Link></div>}

            {isEmpty(NOTIFICATIONS) && <div className="text-center font-thin">All Good</div>}
        </div>
    );
};

export default NotificationPopover;
