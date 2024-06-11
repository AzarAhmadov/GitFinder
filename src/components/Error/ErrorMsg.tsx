import { FC } from 'react'
import { ErrorType } from '../../types/type'
import './Error.css'

const ErrorMsg: FC<ErrorType> = ({ err }) => {
    return (
        <div className='errorMsg'>
            <h3>Oops! :(</h3>
            <p>
                Doesn't have the any {err} yet
            </p>
        </div>
    )
}

export default ErrorMsg