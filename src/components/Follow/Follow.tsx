import { FC } from 'react'
import { GithubFollowers } from '../../services/Api';
import { useQuery } from 'react-query';
import { User } from '../../types/type';
import FollowCards from '../Cards/FollowCards/FollowCards';

const Follow: FC = () => {

    const { isLoading: followLoading, data: Followers } = useQuery('githubFollowers', () => GithubFollowers('azarahmadov'));

    return (
        <ul className='tabs-item-list'>
            {
                followLoading ? <p>Loading...</p> :
                    Followers?.map((el: User, idx: number) => (
                        <li key={idx}>
                            <FollowCards el={el} />
                        </li>
                    ))
            }
        </ul>
    )
}

export default Follow