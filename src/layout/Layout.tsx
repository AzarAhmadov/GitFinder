import { FC } from 'react'
import Header from '../common/Header/Header'
import { Outlet } from 'react-router-dom'

const Layout: FC = () => {
    return (
        <>
            <Header />
            <main id='main'>
                <Outlet />
            </main>
        </>
    )
}

export default Layout