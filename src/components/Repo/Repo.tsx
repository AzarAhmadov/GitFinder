import { FC } from 'react'
import { useQuery } from 'react-query';
import { GithubRepos } from '../../services/Api';
import RepoCards from '../Cards/RepoCards/RepoCards';
import { RepoType } from '../../types/type';

const Repo: FC = () => {

    const { isLoading: reposLoading, data: Repos } = useQuery('githubRepos', () => GithubRepos('azarahmadov'));

    return (
        <ul className='tabs-item-list'>
            {
                reposLoading ? <p>Loading...</p> :
                    Repos?.map((el: RepoType, idx: number) => (
                        <li key={idx}>
                            <RepoCards el={el} />
                        </li>
                    ))
            }
        </ul>
    )
}

export default Repo