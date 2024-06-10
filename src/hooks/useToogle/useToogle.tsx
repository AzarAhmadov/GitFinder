import { useState } from 'react'

export const useToogle = (initialState = false) => {

    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => { setToggleValue(!toggleValue) };

    return (
        [toggleValue, toggler]
    )
}
