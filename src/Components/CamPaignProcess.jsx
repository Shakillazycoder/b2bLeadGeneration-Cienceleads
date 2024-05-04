const CamPaignProcess = () => {
  return (
    <div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            How we use cold email drip campaigns to drive revenue for clients
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            We specialize in generating qualified leads through sales
            appointments and engage your most qualified decision makers, which
            brings you bigger deals and increased sales.
          </p>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* card 1*/}
          <div className="card bg-[#eef4f8] text-black shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://assets-global.website-files.com/5d83a2b6a704603e53f407d8/5d88f21c6ef0a174577afec9_Myicons%20v1.01-60.png"
                alt="Image Not Found"
                className="rounded-xl w-20 h-20"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">1. Build Lists</h2>
              <p>We build targeted and qualified email lists of your ideal prospects</p>
            </div>
          </div>
          {/* card 2*/}
          <div className="card  bg-[#eef4f8] text-black  shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://assets-global.website-files.com/5d83a2b6a704603e53f407d8/5d88f25aa39a4802de70ad9b_Myicons%20v1.01-388.png"
                alt="Image Not Found"
                className="rounded-xl w-20 h-20"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">2. Write Emails</h2>
              <p>Write clear and hyper personalized cold emails that actually get responses</p>
            </div>
          </div>
          {/* card 3*/}
          <div className="card bg-[#eef4f8] text-black  shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://assets-global.website-files.com/5d83a2b6a704603e53f407d8/5d88f2a1a711b1da9eb6478d_Myicons%20v1.01-23.png"
                alt="Image Not Found"
                className="rounded-xl w-20 h-20"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">3. Execute Outreach</h2>
              <p>Send custom emails to thousands of your ideal clients every week/month</p>
            </div>
          </div>
          {/* card 4*/}
          <div className="card bg-[#eef4f8] text-black  shadow-xl">
            <figure className="px-10 pt-10">
              <img 
                src="https://assets-global.website-files.com/5d83a2b6a704603e53f407d8/5d88f2c5c5599eef5eb21e59_Myicons%20v1.01-442.png"
                alt="Image Not Found"
                className="rounded-xl w-20 h-20"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">4. Close Deals</h2>
              <p>You&apos;re notified whenever you get a meeting-ready-lead, for you to close</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamPaignProcess;
