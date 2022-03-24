import './dashboardFeatured.css';
import {
    AttachMoney,
    ArrowUpward,
    ReceiptLongOutlined,
    AccountBalance,
    ArrowDownward,
    DirectionsWalk,
} from '@mui/icons-material';

function DashboardFeatured() {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <AccountBalance
                    className='featuredIcons'
                    style={{ fontSize: '2rem' }}
                />
                <div>
                    <span className='featuredTitle'>Revenue</span>
                    <div className='featuredValues'>
                        <span className='featuredNumber'>$3,053</span>
                        <span className='featuredRate'>
                            +6 <ArrowUpward className='arrowsUp' />
                        </span>
                    </div>
                </div>
            </div>

            <div className='featuredItem'>
                <ReceiptLongOutlined
                    className='featuredIcons'
                    style={{ fontSize: '2rem' }}
                />
                <div>
                    <span className='featuredTitle'>Orders</span>
                    <div className='featuredValues'>
                        <span className='featuredNumber'>4841</span>
                        <span className='featuredRate'>
                            +4.4 <ArrowUpward className='arrowsUp' />
                        </span>
                    </div>
                </div>
            </div>

            <div className='featuredItem'>
                <AttachMoney
                    className='featuredIcons'
                    style={{ fontSize: '2rem' }}
                />
                <div>
                    <span className='featuredTitle'>Cost</span>
                    <div className='featuredValues'>
                        <span className='featuredNumber'>$610.53</span>
                        <span className='featuredRate'>
                            -5.7 <ArrowDownward className='arrowsDown' />
                        </span>
                    </div>
                </div>
            </div>

            <div className='featuredItem'>
                <DirectionsWalk
                    className='featuredIcons'
                    style={{ fontSize: '2rem' }}
                />
                <div>
                    <span className='featuredTitle'>Visits</span>
                    <div className='featuredValues'>
                        <span className='featuredNumber'>1,304</span>
                        <span className='featuredRate'>
                            +1.7 <ArrowUpward className='arrowsUp' />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardFeatured;
