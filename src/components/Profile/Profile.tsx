import { FC } from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'
import { FiGithub } from "react-icons/fi";
import { RiBuilding2Line } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useQuery } from 'react-query';
import { GetGithubUser } from '../../services/Api';
import { kFormatter } from '../../helper/numberFormat';
import { User } from '../../types/type';

const Profile: FC = () => {

    const { isLoading, data } = useQuery<User>('githubUser', () => GetGithubUser('azarahmadov'));

    return (
        <section id='profile'>
            <img
                className='user-img'
                src={data?.avatar_url}
                alt={data?.name}
            />

            {
                isLoading ? <p>loading...</p> :
                    <div className="info">
                        <span className="name">
                            {data?.name}
                        </span>
                        <span className="nick-name">
                            {data?.login}
                        </span>
                        <p className='desc'>
                            {data?.bio}
                        </p>
                        <Link target='_blank' className='github-link flex flex-center' to={`${data?.html_url}`}>
                            <FiGithub />
                            See on Github
                        </Link>

                        <ul className='user-links'>
                            {
                                data?.location &&
                                <li className='flex flex-align-center'>
                                    <SlLocationPin />  {data.location}
                                </li>
                            }
                            {
                                data?.company &&
                                <li className='flex flex-align-center'>
                                    <RiBuilding2Line />  {data.company}
                                </li>
                            }
                            {
                                data?.blog &&
                                <li className='flex flex-align-center'>
                                    <FaExternalLinkAlt /> <Link target='_blank' to={`${data.blog}`}> {data.blog}</Link>
                                </li>
                            }
                        </ul>

                        <ul className='user-action flex gap-10'>
                            {
                                data?.public_repos
                                &&
                                <li className='flex'>
                                    <span>{data?.public_repos}</span>
                                    Repos
                                </li>
                            }
                            {
                                data?.followers &&
                                <li className='flex'>
                                    <span>{kFormatter(data?.followers)}</span>
                                    Following
                                </li>
                            }

                            {
                                data?.following &&
                                <li className='flex'>
                                    <span>{data?.following}</span>
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