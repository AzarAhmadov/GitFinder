export type ContainerType = {
    children: React.ReactNode
}

export type User = {
    avatar_url: string;
    name?: string;
    login?: string;
    bio?: string;
    html_url?: string;
    location?: string;
    company?: string;
    blog?: string;
    public_repos?: number;
    followers?: number;
    following?: number;
};

export type RepoType = {
    name: string,
    visibility: boolean,
    language: string,
    description: string,
    forks_count: number,
    stargazers_count: number
}

export type ErrorType = {
    err: string
}