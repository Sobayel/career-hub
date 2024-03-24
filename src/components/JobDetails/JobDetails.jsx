import { Link, useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job);
    return (
        <div className="bg-slate-100 rounded-2xl mb-6">
            <h2 className="font-extrabold text-4xl text-center p-4">Job Details</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3 bg-slate-300 rounded-xl p-4">
                    <p className="mb-3"><span className="font-bold">Job Description:</span> {job.job_description}</p>
                    <p className="mb-3"><span className="font-bold">Job Responsibility: </span>{job.job_responsibility}</p>
                    <p className="mb-3"><span className="font-bold">Job Educational Requirements: </span>{job.educational_requirements}</p>
                    <p className="mb-3"> <span className="font-bold">Job Experiences: </span>{job.experiences}</p>
                </div>
                <div className="border bg-slate-300 p-4 rounded-xl">
                    <h2 className="font-bold text-xl pb-4">Job Details</h2>
                    <hr />
                    <div>
                        <p><span className="font-bold">Salary: </span>{job.salary} (per Month)</p>
                        <p><span className="font-bold">Job Title: </span>{job.job_title}</p>
                        <h2 className="font-bold py-4">Contact Information</h2>
                        <hr />
                        <p><span className="font-bold">Phone:</span> {job.contact_information.phone}</p>
                        <p><span className="font-bold">Email:</span> {job.contact_information.email}</p>
                        <p><span className="font-bold">Address:</span> {job.contact_information.address}</p>
                    </div>
                    <div className="mt-4">
                        <Link><button className="btn btn-primary font-bold w-full">Apply Now</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;