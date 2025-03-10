const Search = ({searchTerm,SetsearchTerm}) => {
    return (
      <div className="mt-6 flex items-center justify-center brightness-50 shadow-[0_12px_32px_0_rgba(150,200,256,0.02)]" >
        <div className="pl-6 pr-4 flex items-center space-x-2 rounded-lg shadow-md" style={{ backgroundColor: "#030056" }}>
          {/* Search Icon */}
          <img src="/Vector.svg" className="w-6 h-6" alt="Search Icon" />
          
          {/* Input Field Without Borders */}
          <input
            type="text"
            className="text-[#e3e4e6] w-[500px] h-[60px] bg-transparent focus:outline-none"
            placeholder="Search through 300+ movies online"
            value={searchTerm}
            onChange={(event)=>SetsearchTerm(event.target.value)}
          />
        </div>
      </div>
    );
  };

  
  export default Search;
  