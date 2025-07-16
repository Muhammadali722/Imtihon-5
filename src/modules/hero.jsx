import { ScrolDown } from '../assets/images'
import Button from '../components/button'

function Hero() {
  return (
    <section className="Hero-section  !mb-[50px] !mt-[20px] h-[1063px] ">
      <div className=" containers pt-[150px] flex flex-col items-center ">
        <div className="w-[1200px] h-[290]">
          <h1 className="text-[100px] leading-[130px] tracking-[0.4px] text-center text-[#242F65]">
            Tell your creativity to the world with
            <spam className=" text-[100px] leading-[130px] tracking-[0.4px] text-center text-[#FF774C]">UIUXer</spam>
          </h1>
        </div>
        <div className="items-center flex flex-col w-[1200px] h-[300px]  gap-[20px] mx-auto">
            <p className="text-center text-[25px] text-[#242F65] pb-[10px] w-[500px] h-[113px]">UIUXer is a creative, minimal, and cleanly designed personal and portfolio Webflow template.</p>
            <div className="  gap-[10px] flex">
                {/* <button className="w-[259px] h-[69px] rounded-[10px] border1 bg-blue-600 text-[18px] text-white">Buy Template</button>
                <button className="w-[259px] h-[69px] rounded-[10px] border1 bg-blue-600 text-[18px] text-white">Explore Page</button> */}
                <Button className="active:scale-95" label="Buy Template" onClick={() => console.log('Buy clicked!')} />
                <Button className="active:scale-95" label="Explore Page" onClick={() => console.log('Explore clicked!')} />
            </div>
        </div>
        <img className="items-center m-auto" src={ScrolDown} alt="Scroll Down Img"></img>
      </div>
    </section>
  );
}

export default Hero
