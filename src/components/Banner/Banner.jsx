

const Banner = () => {
    return (
        <div className="grid grid-cols-2 gap-4 bg-slate-100 rounded-2xl">
            <div className=" flex-row pt-24 p-6">
                <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /><span className="text-blue-600">Dream Job</span></h1>
                <p className="mt-5">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn btn-primary mt-5">Get Started</button>
            </div>
            <div>
                <div className="hero h-[500px]" style={{backgroundImage:'url(https://i.ibb.co/x633Pvc/P3-OLGJ1-copy-1.png)'}}></div>
            </div>
        </div>
    );
};

export default Banner;