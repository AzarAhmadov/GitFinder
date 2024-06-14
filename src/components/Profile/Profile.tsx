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
import Page404 from '../Page404/Page404';
import Header from '../../common/Header/Header';

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

    if (githubUser === undefined)
        return (
            <>
                <Header />
                <Page404 />
            </>
        )

    return (
        <section id='profile'>
            <img
                className='user-img'
                alt={githubUser?.name}
                src={githubUser ? githubUser?.avatar_url : 'https://www.icegif.com/wp-content/uploads/2023/07/icegif-1259.gif'}
            />

            {
                userLoading ? <Loading /> :
                    <div className="info">

                        {githubUser?.name && <span className="name">  {githubUser?.name} </span>}

                        {githubUser?.login && <span className="nick-name"> {githubUser?.login} </span>}

                        {githubUser?.bio && <p className='desc'> {githubUser?.bio} </p>}

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

                                <li className='flex'>
                                    <span>{githubUser?.public_repos}</span>
                                    Repos
                                </li>
                            }
                            {

                                <li className='flex'>
                                    <span>{kFormatter(githubUser?.followers)}</span>
                                    Following
                                </li>
                            }

                            <li className='flex'>
                                <span>{githubUser?.following}</span>
                                Following
                            </li>
                        </ul>
                    </div>
            }
        </section>
    )
}

export default Profile