function Input({onChange}) {
    return(
        <input className="rounded-xl focus:outline-green-blue  w-7/12 m-auto block mt-10 h-10 p-4 bg-custom-dark-gray" type="search" id="site-search" name="q"
               aria-label="Search through site content" placeholder="Search through coins" onChange={onChange}/>
    )
  }
  
  export default Input;

  
  