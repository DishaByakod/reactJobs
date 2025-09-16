import JobCard from "./JobCard";
import { useState, useEffect } from "react";
import Spinner from "./spinner";

const BrowseJobs = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //async - Keyword used to define a function that always returns a promise
    const fetchJobs = async () => {
      try {
        // use local json instead of API
        const apiURL = isHome ? "/jobs.json" : "/jobs.json";

        const res = await fetch(apiURL);
        const data = await res.json();

        // If you want only 3 jobs on home
        setJobs(isHome ? data.slice(0, 3) : data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              //because it's a list you have to have a key otherwise it gives errors
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BrowseJobs;
