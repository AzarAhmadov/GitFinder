import { FC, useContext } from "react";
import { useQuery } from "react-query";
import { GithubRepos } from "../../services/Api";
import RepoCards from "../Cards/RepoCards/RepoCards";
import { RepoType } from "../../types/type";
import { SearchContext } from "../../services/context/context";
import Loading from "../Loading/Loading";
import ErrorMsg from "../Error/ErrorMsg";

const Repo: FC = () => {
  const { search } = useContext<any>(SearchContext);

  const { isLoading: reposLoading, data: Repos } = useQuery(
    ["githubRepos", search],
    () => GithubRepos(search),
    {
      refetchOnWindowFocus: true,
      staleTime: 0,
      cacheTime: 0,
      refetchInterval: 0,
    }
  );

  if (Repos && Repos.length === 0) return <ErrorMsg err=" repositories" />;

  return (
    <>
      {reposLoading ? (
        <Loading />
      ) : (
        <ul className="tabs-item-list">
          {Repos?.map((el: RepoType, idx: number) => (
            <li key={idx}>
              <RepoCards el={el} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Repo;
