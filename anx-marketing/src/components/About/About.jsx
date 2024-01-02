function About() {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl">
        <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
          <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-left sm:ml-auto">
              <h2 className="text-4xl font-bold sm:text-5xl">About us</h2>
              <h5>
                A brisk overview of our systems, processes & capabilities.
              </h5>
            </div>
          </div>

          <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
            <img
              className="w-96"
              src="https://www.pexels.com/photo/brown-framed-eyeglasses-905163/"
              alt="image1"
            />
          </div>
        </aside>
      </div>
      {/* <h1 className="text-center text-3xl font-bold"></h1> */}
      <div className="flex w-auto h-auto">
        <div className="m-6">
          <div className="shadow-md p-9 bg-gray-100">
            <h1 className="font-bold pb-2">Who Are We</h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            nemo distinctio, tenetur, qui repellendus voluptates eligendi fugiat
            omnis mollitia sequi minus aut ratione quibusdam ipsa iusto unde
            iure assumenda. Neque?
          </div>
        </div>
        <div className="m-6">
          <div className="shadow-md p-9 bg-gray-100">
            <h1 className="font-bold pb-2">Our Mission</h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            nemo distinctio, tenetur, qui repellendus voluptates eligendi fugiat
            omnis mollitia sequi minus aut ratione quibusdam ipsa iusto unde
            iure assumenda. Neque?
          </div>
        </div>
        <div className="m-6">
          <div className="shadow-md p-9 bg-gray-100">
            <h1 className="font-bold pb-2">what we do</h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            nemo distinctio, tenetur, qui repellendus voluptates eligendi fugiat
            omnis mollitia sequi minus aut ratione quibusdam ipsa iusto unde
            iure assumenda. Neque?
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
