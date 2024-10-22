import profile  from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center'>
            <h1 className='font-bold text-4xl'>Knowledge Cafe</h1>
            <img src={profile} alt=""></img>
        </div>
    );
};

export default Header;