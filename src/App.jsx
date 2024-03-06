
import './App.css'
import  Navbar from './Navigation/Nav';
import Sidebar from './Sidebar/Sidebar';
// import Products from './Products/Products';

function App() {

  return (<>
    <Navbar />
    <Sidebar />
    {/* pages contains cards */}
      <div className="flex-col justify-start items-center h- ml-56 pt-28">
        <h1 className="text-4xl">Recommended</h1>
        {/* categories of company names */}
        <div className="m-3">
           {
            ["All","Nike", "Adidas", "Puma", "Reebok", "Under Armour"].map((company, index) => {
              return <button key={index} className="bg-gray-50 text-gray-800 py-1 text-xl px-4 mx-1 rounded-[5px] ">{company}</button>
            } )
           }
      </div>
      </div>

  </>
  )
}

export default App
