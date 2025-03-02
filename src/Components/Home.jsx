import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Body></Body>
      <div className="flex flex-col min-h-[50vh]"> 
        <main className="flex-grow"></main>
        <Footer  />
      </div>
    </>
  );
};
export default Home;
