import profile  from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center w-11/12 mx-auto py-5 pb-4 border-b-2'>
            <h1 className='font-bold text-4xl'>Knowledge Cafe</h1>
            <img src={profile} alt=""></img>
        </header>
    );
};

export default Header;