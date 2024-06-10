import { FC } from 'react'
import Container from '../Container/Container'
import { Link } from 'react-router-dom'
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import './header.css'

const Header: FC = () => {
    return (
        <header id='header'>
            <Container>
                <div className="row flex flex-between">
                    <Link to={'/'} className='flex flex-align-center'>
                        Git <span>Finder</span>
                    </Link>

                    <div className='flex flex-align-center'>
                        <div className="form-area flex flex-align-center">
                            <IoIosSearch className='search' />
                            <form>
                                <input type="text" placeholder='Search username' />
                                <button> Search </button>
                            </form>
                        </div>
                        <div className="mode flex flex-center">
                            <IoSunnyOutline />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header