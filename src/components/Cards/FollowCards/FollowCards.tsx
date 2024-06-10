import { FC } from 'react'
import './FollowCards.css'
import { Link } from 'react-router-dom'
import { IoLinkSharp } from "react-icons/io5";

const FollowCards: FC = () => {
    return (
        <div className='follow-card flex flex-align-center flex-between'>
            <div className='flex flex-align-center'>
                <img src="https://avatars.githubusercontent.com/u/39780?v=4" alt="" />
                <span>
                    user name
                </span>
            </div>
            <Link className='flex flex-center' to={''}>
                <IoLinkSharp />
            </Link>
        </div>
    )
}

export default FollowCards