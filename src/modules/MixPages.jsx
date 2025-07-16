// import { MixPage1, MixPage2,MixPage3,MixPage4, MixPage5 } from "../assets/images";

// function MixPages() {
//     return (
//         <section className="bg-[#2A2C32]">
//             <div className="container mx-auto px-4 py-8">
//                 <div className="text-center mb-8">
//                     <h2 className="text-3xl font-bold text-white mb-4">Utility Pages</h2>
//                     <p className="text-gray-400">
//                         Default templates for your site & you can customize these pages to look the way you want.
//                     </p>
//                 </div>

//                 <div className="flex flex-wrap gap-6 justify-center">
//                     <img src={MixPage1} alt="Utility Page 1" className="rounded-lg" />
//                     <img src={MixPage2} alt="Utility Page 2" className="rounded-lg" />
//                 </div>

//                 <div className="flex justify-between mt-8">
//                     <span className="text-lg text-white">Changelog</span>
//                     <span className="text-lg text-white">Protected Page</span>
//                 </div>
//                 <div className="flex flex-wrap gap-6 justify-center">
//                     <img src={MixPage3} alt="Utility Page 1" className="rounded-lg" />
//                     <img src={MixPage4} alt="Utility Page 2" className="rounded-lg" />
//                 </div>

//                 <div className="flex justify-between mt-8">
//                     <span className="text-lg text-white">Changelog</span>
//                     <span className="text-lg text-white">Protected Page</span>
//                 </div>

//                 <img src={MixPage5} alt="Somebody has no internet poor you"></img>
//             </div>
//         </section>
//     );
// }

// export default MixPages;

import { MixPage1, MixPage2, MixPage3, MixPage4, MixPage5 } from "../assets/images";

function MixPages() {
  return (
    <section className="bg-[#2A2C32] mb-[100px]">
      <div className="containers  ">
        <div className="text-center justify-center !pt-[120px] !pb-[1px]">
          <h2 className="text-[40px] font-bold text-white ">Utility Pages</h2>
          <p className="text-[20px] text-white !pb-[60px]">
            Default templates for your site & you can customize these pages to look the way you want.
          </p>
        </div>

        <div className="flex justify-between">
          <img src={MixPage1} alt="Utility Page 1" className="rounded-lg w-[880px] h-auto" />
          <img src={MixPage2} alt="Utility Page 2" className="rounded-lg w-[880px] h-auto" />
        </div>

        <div className="flex px-[220px] pt-[39px] justify-between">
          <span className="text-normal text-white text-[25px] leading-[37px]  cursor-pointer hover:text-[#00C9A7] transition">Changelog</span>
          <span className="text-normal text-white text-[25px] leading-[37px]  cursor-pointer hover:text-[#00C9A7] transition">Protected Page</span>
        </div>

        <div className="flex justify-between pt-[60px]">
          <img src={MixPage3} alt="Utility Page 3" className="rounded-lg" />
          <img src={MixPage4} alt="Utility Page 4" className="rounded-lg" />
        </div>

        <div className="flex px-[220px] pt-[39px] justify-between">
          <span className="text-normal text-white text-[25px] leading-[37px]  cursor-pointer hover:text-[#00C9A7] transition">Changelog</span>
          <span className="text-normal text-white text-[25px] leading-[37px]  cursor-pointer hover:text-[#00C9A7] transition">Protected Page</span>
        </div>

        <div className="pt-8 flex justify-start ">
          <img src={MixPage5} alt="Offline illustration" className="rounded-lg" />
        </div>
        <span className="items-center text-normal text-white text-[25px] !pl-[200px] !mt-[39px] !mb-[110px] leading-[37px]  cursor-pointer hover:text-[#00C9A7] transition">404 Error Page</span>

      </div>
    </section>
  );
}

export default MixPages;

