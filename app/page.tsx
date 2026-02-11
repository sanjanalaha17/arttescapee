import Banner from "./components/banner/Banner";
import FourthComponent from "./components/FourthComponent/FourthComponent";
import SecondLayout from "./components/SecondLayout/SecondLayout";
import ThirdLayout from "./components/ThirdLayout/ThirdLayout";

export default function Home() {
  return (
    <div className=" w-full min-h-screen bg-white">
      <Banner />
      <SecondLayout />
      <ThirdLayout />
      <FourthComponent />
    </div>
  );
}
