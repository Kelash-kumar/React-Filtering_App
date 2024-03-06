import './Colors.css';

const Colors = () => {
  return (
    <div className='text-black border-b-[1px]'>
    <h2 className='bold text-center my-3  text-2xl font-semibold  flex justify-center align-middle '>Colors</h2>
    <ul className='ml-5 text-sm'>
     {['All','Red','White','Black','Blue'].map((category, index) => {
      return (
      <div key={index} className="flex items-center mb-2">
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

export default Colors