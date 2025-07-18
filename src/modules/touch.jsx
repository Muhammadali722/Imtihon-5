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
            <input
              type="text"
              placeholder="Interested in working together? Drop me a line"
              className="outline-none w-[400px]"
            />
            <button className="bg-[#1e1e50] hover:bg-[#15153d] transition text-white px-5 py-2 rounded-md flex items-center gap-2 text-sm">
              {/* <img src={Note} alt="Somebody has no internet poor you" /> */}
              {/* <img src={Note} alt=""></img> */}
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_221)">
                  <path
                    d="M24.9497 0.307634C24.8641 0.213557 24.7603 0.137815 24.6445 0.0849871C24.5288 0.0321588 24.4036 0.00334052 24.2764 0.000273567C24.1493 -0.00279339 24.0228 0.0199546 23.9047 0.0671433C23.7865 0.114332 23.6792 0.184981 23.5891 0.274822L22.8643 0.996111C22.7765 1.08401 22.7271 1.20319 22.7271 1.32746C22.7271 1.45173 22.7765 1.57091 22.8643 1.65881L23.5288 2.32209C23.5723 2.36585 23.6241 2.40057 23.6811 2.42426C23.7381 2.44796 23.7993 2.46015 23.861 2.46015C23.9227 2.46015 23.9839 2.44796 24.0409 2.42426C24.0979 2.40057 24.1497 2.36585 24.1932 2.32209L24.8999 1.61896C25.2573 1.26213 25.2907 0.680876 24.9497 0.307634ZM21.3989 2.46095L10.8216 13.0195C10.7574 13.0834 10.7108 13.1627 10.6862 13.2498L10.1969 14.707C10.1852 14.7466 10.1844 14.7886 10.1945 14.8285C10.2047 14.8685 10.2254 14.905 10.2546 14.9342C10.2838 14.9633 10.3203 14.9841 10.3602 14.9942C10.4002 15.0044 10.4422 15.0035 10.4817 14.9918L11.9378 14.5026C12.0249 14.4779 12.1042 14.4313 12.168 14.3672L22.7266 3.78869C22.8243 3.68996 22.8791 3.55668 22.8791 3.41779C22.8791 3.2789 22.8243 3.14562 22.7266 3.04689L22.1436 2.46095C22.0448 2.36238 21.9109 2.30702 21.7713 2.30702C21.6317 2.30702 21.4978 2.36238 21.3989 2.46095Z"
                    fill="#FF774C"
                  />
                  <path
                    d="M21.1462 8.29125L13.5281 15.9244C13.2337 16.2195 12.8718 16.4385 12.4738 16.5625L10.855 17.1044C10.4708 17.2129 10.0647 17.217 9.67841 17.1162C9.29213 17.0155 8.9397 16.8136 8.65742 16.5313C8.37515 16.2491 8.17325 15.8966 8.07252 15.5103C7.9718 15.1241 7.97589 14.7179 8.08438 14.3337L8.62625 12.715C8.74984 12.3171 8.96842 11.9552 9.26313 11.6606L16.8962 4.04125C16.9662 3.97136 17.0139 3.88229 17.0332 3.78531C17.0526 3.68832 17.0427 3.58778 17.0049 3.49639C16.9671 3.40501 16.9031 3.32688 16.8209 3.2719C16.7387 3.21692 16.642 3.18755 16.5431 3.1875H3.5C2.57174 3.1875 1.6815 3.55625 1.02513 4.21263C0.368749 4.869 0 5.75924 0 6.6875V21.6875C0 22.6158 0.368749 23.506 1.02513 24.1624C1.6815 24.8188 2.57174 25.1875 3.5 25.1875H18.5C19.4283 25.1875 20.3185 24.8188 20.9749 24.1624C21.6313 23.506 22 22.6158 22 21.6875V8.64437C22 8.54548 21.9706 8.44882 21.9156 8.36662C21.8606 8.28442 21.7825 8.22037 21.6911 8.18257C21.5997 8.14477 21.4992 8.13492 21.4022 8.15427C21.3052 8.17361 21.2161 8.22128 21.1462 8.29125Z"
                    fill="#FF774C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_221">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Write Now
            </button>
          </div>
        </div>
        <div className="text-[18px] leading-[27px] text-[#242F65] flex items-center justify-center gap-[10px] !mt-[30px]">
          <span className="text-[18px] leading-[27px] text-[#242F65]  cursor-pointer hover:text-[#00C9A7] transition">
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
