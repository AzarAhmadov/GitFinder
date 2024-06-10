import { FC } from 'react'
import './UserTabs.css'

const UserTabs: FC = () => {
    return (
        <section id='tabs'>
            <ul className='tabs-header flex flex-between'>
                <li className='active'>
                    <button>
                        Repositories
                    </button>
                </li>
                <li>
                    <button>
                        Forked
                    </button>
                </li>
                <li>
                    <button>
                        Followers
                    </button>
                </li>
                <li>
                    <button>
                        Following
                    </button>
                </li>
            </ul>
        </section>
    )
}

export default UserTabs