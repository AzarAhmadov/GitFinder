// Fetch User

export const GetGithubUser = async (user: string) => {
    try {
        const res = await fetch(`https://api.github.com/users/${user}`)
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await res.json()
        return data

    } catch (err) {
        console.log(err)
    }
}
