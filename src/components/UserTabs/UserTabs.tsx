import { FC, useState } from 'react'
import './UserTabs.css'
import FollowCards from '../Cards/FollowCards/FollowCards'
import RepoCards from '../Cards/RepoCards/RepoCards';

const UserTabs: FC = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <section id='tabs'>
            <ul className='tabs-header flex flex-between'>
                <li onClick={() => handleTabClick(0)} className={activeTab === 0 ? 'active' : ''}>
                    <button>
                        Repositories
                    </button>
                </li>
                <li onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>
                    <button>
                        Forked
                    </button>
                </li>
                <li onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>
                    <button>
                        Followers
                    </button>
                </li>
                <li onClick={() => handleTabClick(3)} className={activeTab === 3 ? 'active' : ''}>
                    <button>
                        Following
                    </button>
                </li>
            </ul>

            {
                activeTab === 0 && <ul className='tabs-item-list'>
                    <li>
                        <RepoCards />
                    </li>
                </ul>
            }


            {
                activeTab === 1 && <ul className='tabs-item-list'>
                    <li>
                        <FollowCards />
                    </li>
                </ul>
            }
        </section>
    )
}

export default UserTabs