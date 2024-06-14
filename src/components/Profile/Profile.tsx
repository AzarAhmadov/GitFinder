import { FC, useContext } from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'
import { FiGithub } from "react-icons/fi";
import { RiBuilding2Line } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useQuery } from 'react-query';
import { GithubUser } from '../../services/Api';
import { kFormatter } from '../../helper/numberFormat';
import { User } from '../../types/type';
import { SearchContext } from '../../services/context/context';
import Loading from '../Loading/Loading';

const Profile: FC = () => {

    const { search } = useContext<any>(SearchContext);

    const { isLoading: userLoading, data: githubUser } = useQuery<User>(
        ['githubUser', search],
        () => GithubUser(search),
        {
            refetchOnWindowFocus: true,
            staleTime: 0,
            cacheTime: 0,
            refetchInterval: 0,
        }
    );

    return (
        <section id='profile'>
            <img
                className='user-img'
                src={githubUser ? githubUser?.avatar_url : 'https://avatars.githubusercontent.com/u/9919?s=280&v=4'}
                alt={githubUser?.name}
            />

            {
                userLoading ? <Loading /> :
                    <div className="info">
                        <span className="name">
                            {githubUser?.name}
                        </span>
                        <span className="nick-name">
                            {githubUser?.login}
                        </span>
                        <p className='desc'>
                            {githubUser?.bio}
                        </p>

                        {githubUser?.html_url && <Link target='_blank' className='github-link flex flex-center' to={`${githubUser?.html_url}`}>
                            <FiGithub />
                            See on Github
                        </Link>}

                        <ul className='user-links'>
                            {
                                githubUser?.location &&
                                <li className='flex flex-align-center'>
                                    <SlLocationPin />  {githubUser.location}
                                </li>
                            }
                            {
                                githubUser?.company &&
                                <li className='flex flex-align-center'>
                                    <RiBuilding2Line />  {githubUser.company}
                                </li>
                            }
                            {
                                githubUser?.blog &&
                                <li className='flex flex-align-center'>
                                    <FaExternalLinkAlt /> <Link target='_blank' to={`${githubUser.blog}`}> {githubUser.blog}</Link>
                                </li>
                            }
                        </ul>

                        <ul className='user-action flex gap-10'>
                            {
                                githubUser?.public_repos
                                &&
                                <li className='flex'>
                                    <span>{githubUser?.public_repos}</span>
                                    Repos
                                </li>
                            }
                            {
                                githubUser?.followers &&
                                <li className='flex'>
                                    <span>{kFormatter(githubUser?.followers)}</span>
                                    Following
                                </li>
                            }

                            {
                                githubUser?.following &&
                                <li className='flex'>
                                    <span>{githubUser?.following}</span>
                                    Following
                                </li>
                            }
                        </ul>
                    </div>
            }
        </section>
    )
}

export default Profile