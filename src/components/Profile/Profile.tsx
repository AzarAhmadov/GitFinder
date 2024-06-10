import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FiGithub } from "react-icons/fi";
import { BiGitRepoForked } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import './Profile.css'

const Profile: FC = () => {
    return (
        <section id='profile'>
            <img className='user-img' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <div className="info">

                <span className="name">
                    Azar Ahmadov
                </span>
                <span className="nick-name">
                    azarahmadov
                </span>
                <p className='desc'>
                    3nd Year Computer Science Student Junior Front-end Developer
                </p>
                <Link className='github-link flex flex-center' to={'/'}>
                    <FiGithub />
                    See on Github
                </Link>

                <ul className='user-links'>
                    <li className='flex flex-align-center'>
                        <SlLocationPin />  Azerbaijan,Baku
                    </li>
                    <li className='flex flex-align-center'>
                        <BiGitRepoForked />
                        <Link to={''}>
                            link
                        </Link>
                    </li>
                </ul>

                <ul className='user-action flex gap-10'>
                    <li className='flex'>
                        <span>72</span>
                        Repos
                    </li>
                    <li className='flex'>
                        <span>12</span>
                        Followers
                    </li>
                    <li className='flex'>
                        <span>39</span>
                        Following
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Profile