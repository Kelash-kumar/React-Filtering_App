import './Sidebar.css';
import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors'; 
const Sidebar = () => {
  return (
    <div className=' w-48 h-full m-0 border-[1px] p-3 absolute '>
      <img src="https://png.pngtree.com/template/20191203/ourmid/pngtree-shoes-design-logo-vector-image_337938.jpg" alt="logo" />
    <Category/>
    <Price/>
    <Colors/>
    </div>
  )
}

export default Sidebar