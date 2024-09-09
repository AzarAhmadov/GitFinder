import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from "react-query";
import { GithubUser } from "../services/Api";
import { User } from "../types/type";
import { SearchContext } from "../services/context/context";
import Page404 from "../components/Page404/Page404";

const Layout = () => {
  const { search } = useContext<any>(SearchContext);

  const { isError, data: githubUser } = useQuery<User>(
    ["githubUser", search],
    () => GithubUser(search),
    {
      refetchOnWindowFocus: true,
      staleTime: 0,
      cacheTime: 0,
      refetchInterval: 0,
    }
  );

  if (isError || !githubUser) return <Page404 />;

  return (
    <>
      <main id="main">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
