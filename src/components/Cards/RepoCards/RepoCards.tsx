import { FC } from 'react'
import { IoCodeSlash } from "react-icons/io5";
import { RxStarFilled } from "react-icons/rx";
import { BiGitRepoForked } from "react-icons/bi";
import './RepoCards.css'
import { Link } from 'react-router-dom';

const RepoCards: FC = () => {
    return (
        <div className='repo-cards'>
            <div className="cards-top">
                <div className='link flex flex-between flex-align-center'>
                    <Link to={''}>
                        Repo name
                    </Link>
                    <span className="status">
                        Public
                    </span>
                </div>
                <p className='desc-repo'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nihil aspernatur molestiae necessitatibus ducimus saepe ex explicabo, a odio iste!
                </p>
            </div>
            <ul className='flex gap-15'>
                <li className='flex'>
                    <IoCodeSlash />
                    Javascript
                </li>
                <li>
                    <RxStarFilled />
                    10
                </li>
                <li>
                    <BiGitRepoForked />
                    10
                </li>
            </ul>
        </div>
    )
}

export default RepoCards