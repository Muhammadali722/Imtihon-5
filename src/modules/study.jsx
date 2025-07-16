import { Study1, Study2 } from '../assets/images'

function Study() {
  return (
    <section className="mt-[39px] pt-[50px] bg-[#EDF0F9]">
      <div className="containers flex flex-col gap-[20px] items-center">
        <h2 className="items-center text-[40px] text-[#242F65] !pt-[120px]">
        Stunning Case Studies
        </h2>
        <p className=" text-[20px] text-[#525665]">
        Create an optimal visual experience for your users with these inspiring layouts.
        </p>
        <div className="flex items-center gap-[30px] pt-[60px]">
          <img src={Study1} alt="Home Page Img 1"></img>
          <img src={Study2} alt="Home Page IMG 2"></img>
        </div>
        <div className="flex items-center gap-[500px] pt-[37px] !pb-[105px]">
          <span className="text-[25px] leading-[37.5px] tracking-[0.4px] text-center">
          Case Study Single - Web
          </span>
          <span className="text-[25px] leading-[37.5px] tracking-[0.4px] text-center">
          Case Study Single - Mobile
          </span>
        </div>
      </div>
      <div></div>
    </section>
  );
}
export default Study;
