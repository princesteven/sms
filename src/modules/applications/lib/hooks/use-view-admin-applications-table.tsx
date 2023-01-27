/**
 * @function
 * @name useAdminApplicationsTable
 * @description Columns for admin applications table
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 */
const useAdminApplicationsTable = () => {
    return [
        {
            title: 'Application Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Interview Date Date',
            dataIndex: 'interviewDate',
            key: 'interviewDate',
        },
        {
            title: 'Capacity',
            dataIndex: 'capacity',
            key: 'capacity',
        },
        {
            title: 'Confirmed',
            dataIndex: 'confirmedApplications',
            key: 'confirmedApplications',
        },
        {
            title: 'Unconfirmed',
            dataIndex: 'unconfirmedApplications',
            key: 'unconfirmedApplications',
        },
        {
            title: 'Slots Remaining',
            dataIndex: 'slotsRemaining',
            key: 'slotsRemaining',
        },
    ]
};

export default useAdminApplicationsTable;