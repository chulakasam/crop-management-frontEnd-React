import {Link} from "react-router";
import './navigation.css'

export function Navigation(){
    return (
        <>
            <header className='bg-teal-900'>
                <nav className='px-4 py-5'>
                    <ul className='flex text-white space-x-4'>

                        <Link to="/">DashBoard</Link>
                        <Link to="/staff">Staff</Link>
                        <Link to="/field">Field</Link>
                        <Link to="/equipment">Equipment</Link>
                        <Link to="/vehicle">Vehicle</Link>
                        <Link to="/log">Monitoring Log</Link>
                        <Link to="/crop">Crop</Link>


                    </ul>
                </nav>
            </header>

        </>
    )
}