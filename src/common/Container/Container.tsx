import { FC } from 'react'
import { ContainerType } from '../../types/type'
import './Container.css'

const Container: FC<ContainerType> = ({ children }) => {
    return (
        <div className='container'>{children}</div>
    )
}

export default Container