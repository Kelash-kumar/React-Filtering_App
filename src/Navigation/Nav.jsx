import './Nav.css';

const Nav = () => {
  return (
    <nav className='w-full h-10 bg-blue-100 flex justify-around text-center'>
      <img src="" alt="logo" />
      {/* search bar */}
      <input type="text" placeholder="Search..." />
      <div className="nav_icons">
        <i>icon1</i>
        <i>icon2</i>
        <i>icon3</i>
      </div>
      </nav>
  )
}

export default Nav