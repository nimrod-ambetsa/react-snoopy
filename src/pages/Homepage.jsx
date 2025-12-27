import HeaderComponent from "../components/HeaderComponent";
import SidePanel from "../components/SidePanel";
import homeImage from "../images/home image.jpg";

const HomePage = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="flex w-full m-auto h-9/12">
        <div className="w-1/6 mx-auto px-2">
          <SidePanel />
        </div>
        <div className="w-5/6">
          <img className="w-full m-auto" src={homeImage} alt="home image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
