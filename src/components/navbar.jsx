const NavItem = ({ item }) => {
    return (
      <a href={item.href || '/'} className="flex items-center gap-2 hover:text-blue-500 transition">
        <span>{item.title}</span>
        {item.icon && <span>{item.icon}</span>}
      </a>
    );
};
export default NavItem;