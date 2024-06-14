import { FC } from 'react'
import Profile from '../../components/Profile/Profile'
import Container from '../../common/Container/Container'
import UserTabs from '../../components/UserTabs/UserTabs'
import './HomeScreen.css'

const HomeScreen: FC = () => {
    return (
        <Container>
            <div className="layout-row flex flex-between gap-10 ">
                <Profile />
                <UserTabs />
            </div>
        </Container>
    )
}

export default HomeScreen