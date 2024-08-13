import about from "../assets/about.jpg";

export const About = () => {
  return (
    <div className="!min-h-[650px] w-full ">
      <h1
        id="about"
        className=" text-4xl text-center mt-20 font-bold text-white"
      >
        About
      </h1>
      <div className="min-h-[300px] ml-12 mt-8 flex justify-evenly gap-12">
        <div className="max-w-[45%]">
          <img src={about} alt="" />
        </div>
        <div className="mt-4">
          <h2 className="text-3xl text-white font-bold">Who are We?</h2>
          <p className="text-xl text-white mt-2">
            Welcome to XYZ Corps. Our team is passionate about Programming, and
            we strive to deliver excellence in everything we do.
          </p>
          <h2 className="text-3xl text-white font-bold mt-2">Our Mission</h2>
          <p className="text-xl text-white mt-2">
            Our mission is to provide the best services to our customers and to
            make sure they are satisfied
            <br /> with our work.
          </p>
          <h2 className="text-3xl text-white font-bold mt-2">Our Vision</h2>
          <p className="text-xl text-white mt-2">
            Our vision is to become the best company in the world and to provide
            the best services to our customers.
          </p>
        </div>
      </div>
    </div>
  );
};
