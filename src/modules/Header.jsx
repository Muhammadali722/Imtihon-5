import { Logo } from "../assets/icons";
import NavItem from "../components/navbar";

function Header() {
  const navItems = [
    { id: 1, title: "Home", href: "/about", icon: null },
    { id: 2, title: "About me", href: "/services", icon: null },
    { id: 3, title: "Pages", href: "/projects", icon: null },
    { id: 4, title: "Contact us", href: "/Contact", icon: null },
  ];

  return (
    <div className="containers flex justify-between !py-[55px] mx-auto !mb-[35px]">
      <a href="#"><Logo /></a>

      <nav className="text-[20px] text-[#222222] flex items-center pt-[55px] gap-[82px] transition duration-300 hover:text-[#00C9A7] hover:underline active:scale-95">
        {navItems.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </nav>
    </div>
  );
}

export default Header;

// import { Logo } from "../assets/icons";
// import NavItem from "../components/navbar";

// function Header() {
//   const navItems = [
//     { id: 1, title: "Home", href: "/about", icon: null },
//     { id: 2, title: "About me", href: "/services", icon: null },
//     { id: 3, title: "Pages", href: "/projects", icon: null },
//     { id: 4, title: "Contact us", href: "/Contact", icon: null },
//   ];

//   return (
//     <header className="w-full bg-white">
//       <div className="containers mx-auto flex justify-between items-center !px-5 !py-[55px] md:px-10 ">
//         {/* Logo */}
//         <a href="#"><Logo /></a>

//         {/* Navigation */}
//         <nav className="hidden md:flex text-[18px] text-[#222222] items-center gap-[50px]">
//           {navItems.map((item) => (
//             <NavItem key={item.id} item={item} />
//           ))}
//         </nav>

//         {/* Mobile menu button */}
//         <div className="md:hidden">
//           <button className="text-[30px] text-[#242F65]">☰</button>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


