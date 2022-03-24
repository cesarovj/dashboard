import './largeCard.css';

function LargeCard() {
    const Button = ({ type }) => {
        return <button className={'largeBtn ' + type}>{type}</button>;
    };

    return (
        <div className='largeCard'>
            <h2 className='largeTitle'>Latest Orders</h2>
            <table className='largeTable'>
                <tr className='largeTr'>
                    <th className='largeTh'>Customer</th>
                    <th className='largeTh'>Order ID</th>
                    <th className='largeTh'>Date</th>
                    <th className='largeTh'>Status</th>
                </tr>
                <tr className='largeTrUser'>
                    <td className='largeTd'>Ron Paul</td>
                    <td className='largeTd'>#1234</td>
                    <td className='largeTd'>03/23/22</td>
                    <td className='largeTd'>
                        <Button type='Pending' />
                    </td>
                </tr>

                <tr className='largeTrUser'>
                    <td className='largeTd'>Jones Berry</td>
                    <td className='largeTd'>#6722</td>
                    <td className='largeTd'>01/14/22</td>
                    <td className='largeTd'>
                        <Button type='Shipping' />
                    </td>
                </tr>

                <tr className='largeTrUser'>
                    <td className='largeTd'>Harry Larry</td>
                    <td className='largeTd'>#3842</td>
                    <td className='largeTd'>11/27/21</td>
                    <td className='largeTd'>
                        <Button type='Refund' />
                    </td>
                </tr>

                <tr className='largeTrUser'>
                    <td className='largeTd'>Gerald Joe</td>
                    <td className='largeTd'>#9352</td>
                    <td className='largeTd'>08/2/21</td>
                    <td className='largeTd'>
                        <Button type='Paid' />
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default LargeCard;
