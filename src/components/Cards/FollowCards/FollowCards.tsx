import { FC } from 'react'
import './FollowCards.css'
import { Link } from 'react-router-dom'
import { IoLinkSharp } from "react-icons/io5";
import { User } from '../../../types/type';

interface IUser {
    el: User
}

const FollowCards: FC<IUser> = ({ el }) => {

    const { login, avatar_url, html_url } = el

    return (
        <div className='follow-card flex flex-align-center flex-between'>
            <div className='flex flex-align-center'>
                <img
                    alt={login}
                    src={avatar_url} />
                <span>
                    {login}
                </span>
            </div>
            <Link className='flex flex-center' target='_blank' to={`${html_url}`}>
                <IoLinkSharp />
            </Link>
        </div>
    )
}

export default FollowCards