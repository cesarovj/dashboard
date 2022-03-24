import './sidebar.css';
import {
    GridView,
    PersonOutline,
    Storefront,
    ShoppingCartOutlined,
    Equalizer,
    ReportOutlined,
    FeedbackOutlined,
} from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

function SideBar() {
    const navigate = useNavigate();

    const customersClick = (e) => {
        navigate('/customers');
        e.target.classList.add('active');
        document
            .querySelector('.sidebarList :nth-child(1)')
            .classList.remove('active');
    };

    const dashboardClick = (e) => {
        navigate('/');
        e.target.classList.add('active');
        document
            .querySelector('.sidebarList :nth-child(2)')
            .classList.remove('active');
    };

    return (
        <div className='sidebarNav'>
            <div className='sidebarMenu'>
                <ul className='sidebarList'>
                    <li className='listItem active' onClick={dashboardClick}>
                        <GridView className='sidebarIcon' /> Dashboard
                    </li>
                    <li className='listItem' onClick={customersClick}>
                        <PersonOutline className='sidebarIcon' /> Customers
                    </li>
                    <li className='listItem'>
                        <Storefront className='sidebarIcon' /> Inventory
                    </li>
                    <li className='listItem'>
                        <ShoppingCartOutlined className='sidebarIcon' /> Orders
                    </li>
                    <li className='listItem'>
                        <Equalizer className='sidebarIcon' /> Analytics
                    </li>
                    <li className='listItem'>
                        <ReportOutlined className='sidebarIcon' /> Reports
                    </li>
                    <li className='listItem'>
                        <FeedbackOutlined className='sidebarIcon' /> Feedback
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
