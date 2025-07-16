import Button from "../components/button"
import { Start } from "../assets/images"

function Start1() {
    return (
        <section className="start h-[503px] !mb-[100px] !mt-[100px] "> 
        <div className="containers flex justify-between items-center gap-5 mt-[50px]">
            <div className="">
                <h2 className="text-[40px] leading-[56px] pb-[12px]">Ready to get start with UIUXer?</h2>
                <p className="text-[20px] leading-[30px] pb-[18px]" >Well-planned layouts with a clear structure that can be utilized to demonstrate your inventiveness in the digital business field.</p>
                <Button label="Get Started" className="start-btn mb-[81px]"/>
            </div>
            <img src={Start} alt="Start" className="object-cover rounded-[10px] mt-5" />
        </div>
        </section>
    )
}
export default Start1;