const Button = ({ label, onClick, className = '' }) => {
    return (
      <button
        onClick={onClick}
        className={`hover:bg-amber-600 hover:text-[black] duration-100 cursor-pointer w-[259px] h-[69px] rounded-[10px] border1 bg-blue-600 text-[18px] text-white ${className}`}
      >
        {label}
      </button>
    );
  };
  
  export default Button;
  