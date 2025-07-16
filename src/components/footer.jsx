function ListGroup({ items }) {
    return (
      <ul className="flex flex-col items-start gap-[10px]">
        {items.map((item, index) => (
          <li key={index} className="text-[25px] text-[#242F65] leading-[37px]  cursor-pointer hover:text-[#00C9A7] transition">
            {item}
          </li>
        ))}
      </ul>
    );
  }
  
  export default ListGroup;