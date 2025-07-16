// import { Thanks } from "../assets/images";
// import { Pc, Handp } from "../assets/icons";

// function Touch() {
//   return (
//     <section className="touch">
//       <div className="containers text-center ">
//         <img className="items-center m-auto" src={Thanks} alt="Thanks for reading "></img>
//         <div className="gap-[60px] flex  items-center justify-center">
//           <span className="flex gap-[10px] text-[30px] leading-[45px] text-[#242F65]"> <Pc/>  Available for Work</span>
//           <span className="flex gap-[10px] text-[30px] leading-[45px] text-[#242F65]"> <Handp/> Get in Touch</span>
//           <span className="flex gap-[10px] text-[30px] leading-[45px] text-[#242F65]"> <Pc/> Available Work</span>
//           <span className="flex gap-[10px] text-[30px] leading-[45px] text-[#242F65]"> <Handp/> Get in Touch</span>
//         </div>
//       </div>
//     </section>
//   );
// }
// export default Touch;

import { Thanks } from "../assets/images";
import { Pc, Handp, Note } from "../assets/icons";
import ListGroup from "../components/footer";

function Touch() {
  const list1 = ["UX Designer", "UI Designer", "Protected"];
  const list2 = ["Style Guide", "Licenses", "Changelog"];
  return (
    <section className="touch bg-white py-[60px]">
      <div className="containers text-center">
        <img
          className="!mx-auto !pt-[116px] !mb-[50px]"
          src={Thanks}
          alt="Thanks for reading"
        />
        <div className="marquee !mt-[10px] rounded-b-[1px] border-[#D092BA]">
          <div className="marquee-track gap-[60px] flex items-center !mb-[89px]">
            <span className="flex gap-[10px] text-[30px] leading-[45px] text-[#242F65]">
              <Pc /> Available for Work
            </span>
            <span className="flex gap-[10px] text-[30px] leading-[45px] text-[#242F65]">
              <Handp /> Get in Touch
            </span>
            <span className="flex gap-[10px] text-[30px] leading-[45px] text-[#242F65]">
              <Pc /> Available for Work
            </span>
            <span className="flex gap-[10px] text-[30px] leading-[45px] text-[#242F65]">
              <Handp /> Get in Touch
            </span>
          </div>
        </div>
        <div className="mt-[60px] flex gap-[76px]">
          {/* <ul className="flex flex-col items-start gap-[10px]">
            <li className="text[25px] text-[#242F65] leading-[37px]">
              UX Designer
            </li>
            <li className="text[25px] text-[#242F65] leading-[37px]">
              UI Designer
            </li>
            <li className="text[25px] text-[#242F65] leading-[37px]">
              Protected
            </li>
          </ul>
          <ul className="flex flex-col items-start gap-[10px]">
            <li className="text[25px] text-[#242F65] leading-[37px]">
              Style Guide
            </li>
            <li className="text[25px] text-[#242F65] leading-[37px]">
              Licenses
            </li>
            <li className="text[25px] text-[#242F65] leading-[37px]">
              Changelog
            </li>
          </ul> */}
          <ListGroup items={list1} />
          <ListGroup items={list2} />
          <div className="bg-white w-[819px] shadow-lg rounded-xl px-6 py-5 flex flex-col md:flex-row items-start md:items-center gap-4 md:w-auto">
            <input type="text" placeholder='Interested in working together? Drop me a line' className='outline-none w-[400px]'/>
            <button className="bg-[#1e1e50] hover:bg-[#15153d] transition text-white px-5 py-2 rounded-md flex items-center gap-2 text-sm">
              {/* <img src={Note} alt="Somebody has no internet poor you" /> */}
              <img src={Note} alt=""></img>
              Write Now
            </button>
          </div>

          
        </div>
        <div className="text-[18px] leading-[27px] text-[#242F65] flex items-center justify-center gap-[10px] !mt-[20px]">
          <span className="text-[18px] leading-[27px] text-[#242F65]">
            Copyright © UIUXer | Designed by VictorFlow Templates - Powered by
            Webflow
          </span>
        </div>
      </div>
    </section>
  );
}
// export default Touch;
// FooterLists
export default Touch;
