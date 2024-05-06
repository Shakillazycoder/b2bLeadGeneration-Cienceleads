import Banner from "../Components/Banner";
import BookingMeeting from "../Components/BookingMeeting";
import CamPaignProcess from "../Components/CamPaignProcess";
import SaaSPrice from "../Components/SaaSPrice";
import Testimonial from "./Testimonial";
import WhyUs from "./WhyUs";

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <BookingMeeting></BookingMeeting>
            <SaaSPrice></SaaSPrice>
            <CamPaignProcess></CamPaignProcess>
            <WhyUs id="why-us"></WhyUs>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;