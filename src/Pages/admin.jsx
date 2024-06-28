import {NavLink} from 'react-router-dom'
import './admin.css'

const AdminPage = () => {
    return (<div >
                <h1 className='head'>Welcome to ADMIN PAGE</h1>
                <ul className='Container'>
                    <p>Are you willing to add DATA</p>
                    <li> <NavLink to='/InsertData'>Insert DATA</NavLink></li>
                    <li> <NavLink to='/DeleteData'>Delete Data</NavLink></li>
                </ul>
            </div>
    )
}

export default AdminPage;