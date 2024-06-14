import { FC } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import './Loading.css'

const Loading: FC = () => {
    return (
        <div className="loading flex flex-center">
            <ThreeDots
                visible={true}
                height="55"
                width="55"
                color="#fff"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperClass=""
            />
        </div>
    )
}

export default Loading