const Contact = () => {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden  text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative  z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl  sm:mt-1 mt-80 space-y-8 text-center  sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">Contact Us</h2>
            <h5>We’re always, just one click away.</h5>
          </div>
        </div>
        <div className="absolute inset-0 sm:my-20 sm:pt-1 pt-12 max-w-xl ml-10">
          <div className=" font-semibold mt-20 pt-2 ml-9">Reach us</div>
          <div className="">
            <div className="inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="12"
                viewBox="0 0 384 512"
                className="w-4 h-4 mr-5"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <span>near kalikadevi temple old ausa road, latur</span>
            </div>
          </div>
          <div className=" inline-flex ">
            <svg
              className="svg-inline--fa fa-envelope w-4 h-4 mr-5"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="envelope"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              ></path>
            </svg>
            <span>anx@gmail.com</span>
          </div>
          <div className="">
            <div className="inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
                className="w-4 h-4 mr-5"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
            </div>
            <span>9309337583</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Contact;
