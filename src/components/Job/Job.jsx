
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-gray-300 shadow-xl p-8">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{job_title}!</h2>
                <p className="font-bold mb-4">{company_name}</p>
                <div className="flex">
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90Fe] mr-4 text-[#7E90Fe]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90Fe] mr-4 text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="my-4 flex">
                    <h1 className="flex mr-6"><MdOutlineLocationOn className="text-xl mr-2"></MdOutlineLocationOn> {location}</h1>
                    <h1 className="flex"><AiOutlineDollarCircle className="text-xl mr-2"></AiOutlineDollarCircle> {salary}</h1>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                        </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;