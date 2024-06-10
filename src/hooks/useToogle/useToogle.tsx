import { useState } from 'react'

export const useToogle = (initialState = false) => {

    const [toggleValue, setToggleValue] = useState(initialState);

    const toggle = () => { setToggleValue(!toggleValue) };

    return (
        [toggleValue, toggle]
    )
}
