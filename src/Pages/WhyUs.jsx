const WhyUs = () => {
  return (
    <div id="why">
      <div className="flex flex-col lg:flex-row justify-between space-y-4 items-center mx-auto">
        <div className="lg:w-1/2 text-4xl">
          <h1>Why CienceLeads?</h1>
        </div>
        <div className="text-3xl lg:w-1/4">
          10X your meetings from cold email outreach without having to lift a
          finger
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {/* card 1*/}
        <div className="card bg-[#eef4f8] text-black shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://assets-global.website-files.com/625d86883e0c4b3928f4389d/6274639bb2e64b3f1755a7c0_Vector-2.svg"
                alt="Image Not Found"
                className="rounded-xl w-20 h-20"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">1+ Million Emails Sent</h2>
              <p>We have sent over 1 million B2B emails, with world-beating stats: Average open rate: 62%, Average click-through rate: 10%, Average reply rate: 10%</p>
            </div>
          </div>
          {/* card 1*/}
          <div className="card bg-[#eef4f8] text-black shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://assets-global.website-files.com/625d86883e0c4b3928f4389d/6274639b17e4ee3c4cef5878_Vector.svg"
                alt="Image Not Found"
                className="rounded-xl w-20 h-20"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">$10M+</h2>
              <p>We have generated over $10M+ in sales pipeline for 500+ happy clients across 35+ industries</p>
            </div>
          </div>
          {/* card 1*/}
          <div className="card bg-[#eef4f8] text-black shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://assets-global.website-files.com/5d83a2b6a704603e53f407d8/5d88f3df9eebac51e4ae0bd6_Myicons%20v1.01-367_angle.png"
                alt="Image Not Found"
                className="rounded-xl w-20 h-20"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Hyper personalized</h2>
              <p>Our hyper-personalized approach tailors every interaction to resonate deeply with your audience, driving engagement and propelling your business forward</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default WhyUs;
