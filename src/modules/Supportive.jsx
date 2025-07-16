import { Support1, Support2, Support3, Support4 } from '../assets/images';

function Supportive() {
  return (
    <section className='mt-[120px] mb-[39px]'>
      <div className="containers flex flex-col gap-[20px] items-center pt-[60px]">
        <h2 className="items-center text-[40px] text-[#242F65] !pt-[120px]">
          Supportive Pages
        </h2>
        <p className=" text-[20px] text-[#525665]">
          Feel the feature of creativity with these inner page layouts that
          perfectly match your site.
        </p>
        <div className="flex items-center gap-[30px] pt-[60px]">
          <img src={Support1} alt="Home Page Img 1"></img>
          <img src={Support2} alt="Home Page IMG 2"></img>
        </div>
        <div className="flex items-center gap-[600px] pt-[37px]">
          <span className="text-[25px] leading-[37.5px] tracking-[0.4px] text-center">
          About Me
          </span>
          <span className="text-[25px] leading-[37.5px] tracking-[0.4px] text-center">
          Blog
          </span>
        </div>
        <div className="flex items-center gap-[30px] !pt-[60px]">
          <img src={Support3} alt="Home Page Img 1"></img>
          <img src={Support4} alt="Home Page IMG 2"></img>
        </div>
        <div className="flex items-center gap-[600px] !pt-[37px] !pb-[70px]">
          <span className="text-[25px] leading-[37.5px] tracking-[0.4px] text-center">
          Blog Single
          </span>
          <span className="text-[25px] leading-[37.5px] tracking-[0.4px] text-center">
          Contact Us
          </span>
        </div>
      </div>
      <div></div>
       
    </section>
  );
}
export default Supportive;
