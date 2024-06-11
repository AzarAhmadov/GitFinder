import { FC, useState } from 'react'
import './UserTabs.css'
import Follow from '../Follow/Follow';
import Repo from '../Repo/Repo';

const UserTabs: FC = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    const RenderTab = () => {
        if (activeTab === 0) return <Repo />
        if (activeTab === 2) return <Follow />
    }

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

            {RenderTab()}
        </section>
    )
}

export default UserTabs