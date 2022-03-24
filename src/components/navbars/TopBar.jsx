import './topbar.css';
import { NotificationsNone, Settings, Search } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';

function TopBar() {
    return (
        <div className='topbarNav'>
            <div className='topbarWrapper'>
                <div className='topbarLeft'>
                    <span className='logo'>Busy Board</span>
                    <input
                        placeholder='Search...'
                        type='text'
                        className='topbarSearch'
                    />
                    <Search className='searchIcon' />
                </div>
                <div className='topbarRight'>
                    <div className='topbarIcon'>
                        <Avatar
                            style={{
                                backgroundColor: 'teal',
                                top: '-0.15rem',
                            }}
                            sx={{ width: 24, height: 24 }}
                        >
                            C
                        </Avatar>
                    </div>
                    <div className='topbarIcon'>
                        <NotificationsNone
                            style={{ marginRight: '1rem', marginLeft: '1rem' }}
                        />
                        <span className='notificationNumber'>5</span>
                    </div>
                    <div className='topbarIcon'>
                        <Settings />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
