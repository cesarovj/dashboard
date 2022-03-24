import './smallCard.css';
import Avatar from '@mui/material/Avatar';

function SmallCard() {
    return (
        <div className='smallCard'>
            <h2 className='smallTitle'>New Customers</h2>
            <ul className='smallList'>
                <li className='smallListItem'>
                    <Avatar
                        style={{
                            backgroundColor: 'orange',
                        }}
                    >
                        J
                    </Avatar>
                    <div className='smallUser'>
                        <span className='userName'>John Doe</span>
                        <span className='userTitle'>Software Developer</span>
                    </div>
                </li>
                <li className='smallListItem'>
                    <Avatar
                        style={{
                            backgroundColor: 'pink',
                        }}
                    >
                        C
                    </Avatar>
                    <div className='smallUser'>
                        <span className='userName'>Carol Daskin</span>
                        <span className='userTitle'>Quality Analyst</span>
                    </div>
                </li>
                <li className='smallListItem'>
                    <Avatar
                        style={{
                            backgroundColor: 'rgb(88, 151, 223)',
                        }}
                    >
                        M
                    </Avatar>
                    <div className='smallUser'>
                        <span className='userName'>Michael Kim</span>
                        <span className='userTitle'>Designer</span>
                    </div>
                </li>
                <li className='smallListItem'>
                    <Avatar
                        style={{
                            backgroundColor: 'teal',
                        }}
                    >
                        L
                    </Avatar>
                    <div className='smallUser'>
                        <span className='userName'>Luis Cruz</span>
                        <span className='userTitle'>Marketing</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default SmallCard;
