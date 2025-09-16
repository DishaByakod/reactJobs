import Hero from "../components/Hero";
import Homecard from "../components/Homecard";
import BrowseJobs from "../components/BrowseJobs";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Homecard />
      <BrowseJobs isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
