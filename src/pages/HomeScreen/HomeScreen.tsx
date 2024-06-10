import { FC } from 'react'
import Profile from '../../components/Profile/Profile'
import Container from '../../common/Container/Container'
import UserTabs from '../../components/UserTabs/UserTabs'

const HomeScreen: FC = () => {
    return (
        <Container>
            <div className="flex flex-between gap-10 ">
                <Profile />
                <UserTabs />
            </div>
        </Container>
    )
}

export default HomeScreen