// Fetch User

export const GithubUser = async (user: string) => {
    try {
        const res = await fetch(`https://api.github.com/users/${user}`)
        if (!res.ok) {
            throw new Error('Failed to fetch GitHub user data');
        }
        const data = await res.json()
        return data

    } catch (err) {
        console.log(err)
    }
}

export const GithubFollowers = async (user: string) => {
    try {

        const res = await fetch(`https://api.github.com/users/${user}/followers`)
        if (!res.ok) {
            throw new Error('Failed to fetch GitHub followers data');
        }
        const data = await res.json()
        return data

    } catch (err) {
        console.log(err)
    }
}

export const GithubRepos = async (user: string) => {

    try {
        const res = await fetch(`https://api.github.com/users/${user}/repos`)
        if (!res.ok) {
            throw new Error('Failed to fetch GitHub repos data');
        }
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }

}