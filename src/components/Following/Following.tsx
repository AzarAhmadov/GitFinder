import { FC } from 'react'
import { useQuery } from 'react-query';
import { GithubFollowing } from '../../services/Api';
import FollowCards from '../Cards/FollowCards/FollowCards';
import ErrorMsg from '../Error/ErrorMsg';

const Following: FC = () => {

    const { isLoading: followingLoading, data: Following } = useQuery('githubFollowing', () => GithubFollowing('azarahmadov'));

    if (!Following || Following.length === 0) {
        return <ErrorMsg err='following' />;
    }

    return (
        <ul className='tabs-item-list'>
            {
                followingLoading ? <p>Loading...</p> :
                    Following?.map((el: any, idx: number) => (
                        <li key={idx}>
                            <FollowCards el={el} />
                        </li>
                    ))
            }
        </ul>
    )
}

export default Following