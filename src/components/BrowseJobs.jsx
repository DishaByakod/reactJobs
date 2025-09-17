import JobCard from "./JobCard";
import { useState, useEffect } from "react";
import Spinner from "./spinner";

const BrowseJobs = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("./jobs.json");
        const data = await res.json();

        // Ensure it's always an array
        const jobsArray = Array.isArray(data) ? data : data.jobs || [];

        setJobs(isHome ? jobsArray.slice(0, 3) : jobsArray);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setJobs([]); // fallback
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isHome]);

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
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BrowseJobs;
