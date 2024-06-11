import { FC } from 'react'
import { Link } from 'react-router-dom'
import './Page404.css'

const Page404: FC = () => {
    return (
        <div className='error flex flex-column-center'>
            <h3>404</h3>
            <p>
                WE ARE SORRY, BUT THERE IS NO ACCOUNT WITH THIS USERNAME YET!
            </p>
            <Link to={'/'}> Go Home </Link>
        </div>
    )
}

export default Page404