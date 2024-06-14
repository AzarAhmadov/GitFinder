import { FC, useContext } from 'react'
import { useQuery } from 'react-query';
import { GithubFollowing } from '../../services/Api';
import FollowCards from '../Cards/FollowCards/FollowCards';
import { SearchContext } from '../../services/context/context';
import Loading from '../Loading/Loading';
import { User } from '../../types/type';

const Following: FC = () => {

    const { search } = useContext<any>(SearchContext);

    const { isLoading: followingLoading, data: Following } = useQuery(
        ['githubFollowing', search],
        () => GithubFollowing(search),
        {
            refetchOnWindowFocus: true,
            staleTime: 0,
            cacheTime: 0,
            refetchInterval: 0,
        }
    );

    return (
        <>
            {followingLoading ? (
                <Loading />
            ) : (
                <ul className='tabs-item-list'>
                    {Following?.map((el: User, idx: number) => (
                        <li key={idx}>
                            <FollowCards el={el} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default Following