export type ContainerType = {
    children: React.ReactNode
}

export type User = {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    html_url: string;
    location?: string;
    company?: string;
    blog?: string;
    public_repos: number;
    followers: number;
    following: number;
};
