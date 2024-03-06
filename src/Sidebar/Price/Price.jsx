import './Price.css';
const Price = () => {
  return (
    <div className='text-black border-b-[1px]'>
    <h2 className='bold text-center my-3 text-xl font-semibold flex justify-center align-middle '>Price</h2>
    <ul className='ml-5 text-sm'>
     {['All','$0 - $25','$25 - $50', '$50 - $100' ].map((category, index) => {
      return (
      <div key={index} className="flex items-center mb-2 ">
        <input id={`country-option-${index}`} type="radio" name="shoes" value={category} className="w-4 h-4 border-white focus:ring-3 " checked />
        <label htmlFor={`country-option-${index}`} className="block ms-3  text-[16px] font-medium text-black dark:text-gray-600">
          {category}
        </label>
      </div>
       )   
    })
}
    </ul>
  </div>

  )
}

export default Price