import { FaShoppingCart } from 'react-icons/fa';

export default function Header(){
    return <header className="flex justify-between p-2">
        <span> ECOM </span>
        <input placeholder="search product" className="searchbar bg-white-900 w-1/3 outline-none px-1 mx-2 rounded transition-all focus:w-full transition-all"/>
        <span className='text-xl'> <FaShoppingCart /></span>
    </header>
}