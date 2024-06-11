import { FC } from 'react'
import { IoCodeSlash } from "react-icons/io5";
import { RxStarFilled } from "react-icons/rx";
import { BiGitRepoForked } from "react-icons/bi";
import './RepoCards.css'
import { Link } from 'react-router-dom';
import { RepoType } from '../../../types/type';

interface IRepo {
    el: RepoType
}

const RepoCards: FC<IRepo> = ({ el }) => {

    const { name, visibility, language, description, forks_count, stargazers_count
    } = el

    return (
        <div className='repo-cards'>
            <div className="cards-top">
                <div className='link flex flex-between flex-align-center'>
                    <Link to={''}>
                        {name}
                    </Link>
                    <span className="status">
                        {visibility}
                    </span>
                </div>
                <div className='desc-area'>
                    <p className='desc-repo'>
                        {description}
                    </p>
                </div>
            </div>
            <ul className='flex gap-15'>
                <li className='flex'>
                    <IoCodeSlash />
                    {language}
                </li>
                <li>
                    <RxStarFilled />
                    {stargazers_count}
                </li>
                <li>
                    <BiGitRepoForked />
                    {forks_count}
                </li>
            </ul>
        </div>
    )
}

export default RepoCards