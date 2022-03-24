import './dashboard.css';
import DashboardFeatured from '../../components/dashboardFeatured/DashboardFeatured';
import Chart from '../../components/charts/Chart';
import { salesAnalyticsData } from '../../data';
import SmallCard from '../../components/cards/SmallCard';
import LargeCard from '../../components/cards/LargeCard';

function Dashboard() {
    return (
        <div className='dashboardPage'>
            <DashboardFeatured />
            <Chart data={salesAnalyticsData} title='Sales Analytics' />
            <div className='dashboardCards'>
                <LargeCard />
                <SmallCard />
            </div>
        </div>
    );
}

export default Dashboard;
