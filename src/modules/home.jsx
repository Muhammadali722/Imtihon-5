import { Home1, Home2 } from "../assets/images";

function HomePage() {
  return (
    <section className="mt-[150px] ">
      <div className="containers flex flex-col gap-[20px] items-center">
        <h2 className="items-center text-[40px] text-[#242F65]">
          Professional Home Pages
        </h2>
        <p className=" text-[20px] text-[#525665]">
          Attractive and stylish home layouts bring your portfolio website to
          the next level.
        </p>
        <div className="flex items-start gap-[15px] 1pt-[60px]">
          <img src={Home1} alt="Home Page Img 1"></img>
          <img src={Home2} alt="Home Page IMG 2"></img>
        </div>
        <div className="flex items-center gap-[600px] pt-[37px] !pb-[50px]">
            <span className="text-[25px] leading-[37.5px] tracking-[0.4px] text-center">Home UX Designer</span>
            <span className="text-[25px] leading-[37.5px] tracking-[0.4px] text-center">Home UI Designer</span>
        </div>
      </div>
      <div></div>
    </section>
  );
}
export default HomePage;
