import React from "react";
import aboutImage from "../assets/images/about-image.png"

function About() {
  return (
    <div className="bg-white">
      <div className="p-24 grid grid-cols-2">
        <div className="">
          <h2 className="text-2xl font-medium">About Us</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi enim
            odio, varius ac erat at, volutpat cursus orci. Fusce rutrum magna in
            lorem maximus tincidunt. Cras eget porta tortor. Integer placerat
            sapien vitae aliquet condimentum. Aliquam ullamcorper sit amet orci
            eget condimentum. Donec rhoncus lacus in gravida semper. Fusce
            malesuada eu turpis vitae interdum. Phasellus a ipsum vel ante
            interdum cursus. Sed fermentum tempor pulvinar. Ut vel finibus
            dolor. Cras nunc nunc, lacinia ac risus non, lobortis maximus massa.
            Aenean ullamcorper tortor in ex egestas, vel ultrices orci aliquam.
            Nullam suscipit mi ut ornare ultrices. Suspendisse ac pulvinar
            massa. Aenean sagittis odio in ex gravida pulvinar.
          </p>
        </div>
        <div className="flex items-center justify-center">
            <img src={aboutImage} alt="about" className="w-[400px] h-[400px] objext-cover" />
        </div>
      </div>
    </div>
  );
}

export default About;
