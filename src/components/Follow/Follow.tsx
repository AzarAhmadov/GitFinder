import { FC, useContext } from 'react'
import { GithubFollowers } from '../../services/Api';
import { useQuery } from 'react-query';
import { User } from '../../types/type';
import FollowCards from '../Cards/FollowCards/FollowCards';
import { SearchContext } from '../../services/context/context';
import Loading from '../Loading/Loading';

const Follow: FC = () => {

    const { search } = useContext<any>(SearchContext);

    const { isLoading: followLoading, data: Followers } = useQuery(
        ['githubFollowers', search],
        () => GithubFollowers(search),
        {
            refetchOnWindowFocus: true,
            staleTime: 0,
            cacheTime: 0,
            refetchInterval: 0,
        }
    );

    return (
        <>
            {followLoading ? (
                <Loading />
            ) : (
                <ul className='tabs-item-list'>
                    {Followers?.map((el: User, idx: number) => (
                        <li key={idx}>
                            <FollowCards el={el} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default Follow