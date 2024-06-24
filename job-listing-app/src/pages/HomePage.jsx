import Hero from "../components/Hero.jsx";
import JobListings from "../components/JobListings.jsx";
import ViewAllJobs from "../components/ViewAllJobjs.jsx";
import HomeCards from "../components/HomeCard.jsx";
const HomePage=()=>{
    return (
        <>
            <Hero />
            <HomeCards />
            <JobListings isHome={true}/>
            <ViewAllJobs />
        </>
    )
}

export default HomePage;