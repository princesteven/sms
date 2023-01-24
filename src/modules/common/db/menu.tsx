import {DesktopOutlined, PieChartOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

export default [
    {
        label: 'Dashboard',
        key: '1',
        icon: <DesktopOutlined/>,
    },
    {
        label: 'Option 2',
        key: '2',
        icon: <PieChartOutlined/>,
    },
    {
        label: 'Applications',
        key: 'applications',
        icon: <UserOutlined/>,
        children: [
            {
                label: <Link to={'parent-applications'}>Parent Application Page</Link>
            },
            {
                label: <Link to={'admin-applications'}>Admin Application Page</Link>
            }
        ]
    },
]