import React from "react";
import steveImg from "../../assets/images/steve.jpeg";
import juanImg from "../../assets/images/juan.jpg";
import annaImg from "../../assets/images/anna.jpg";
import carmenImg from "../../assets/images/carmen.jpg";

const reviews = [
  {
    profileImg: steveImg,
    customerName: "Steve Walker",
    customerReview:
      "With LynxNet, we can simply use the network the way it was meant to be used - anonymous, free, secure and limitless. LynxNet convinces us with its great performance and ultra-fast speed. You are simply safe on the road, no matter where you are.",
    stars: 5,
  },
  {
    profileImg: juanImg,
    customerName: "Juan Roger",
    customerReview:
      "When it comes to VPN services, LynxNet is unbeatable. It has a large and diverse server network, an excellent selection of advanced features, strong privacy and security standards, and user-friendly apps for all major platforms.",
    stars: 5,
  },
  {
    profileImg: annaImg,
    customerName: "Anna Cummings",
    customerReview:
      "Ich muss sagen... @LynxNet hilft mir immer bei technischen Problemen, wenn ich im Ausland bin und versuche, sicher im Internet zu surfen! Ein großes Lob an das professionelle Team!",
    stars: 5,
  },
  {
    profileImg: carmenImg,
    customerName: "Carmen Lopez",
    customerReview:
      "One of the advantages of LynxNet is the super-fast connection speed thanks to the 5500 servers in a total of 60 countries. Moreover, no usage data is recorded.",
    stars: 5,
  },
];

const CustomerReview = ({
  profileImg,
  customerName,
  customerReview,
  stars,
}) => (
  <div className="bg-white text-black p-10 rounded-2xl w-1/4 grid gap-6 ">
    <div className="flex justify-center">
      <img src={profileImg} alt="" className="h-40 rounded-full" />
    </div>
    <h4 className="text-center text-2xl ">{customerName}</h4>
    <p>{customerReview}</p>
    <div className="grid place-items-center">
      <div className="flex justify-center ">
        {Array.from({ length: stars }).map((index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-500 fill-current"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 1l2.928 6.527 6.678.965-4.827 4.662 1.14 6.664L10 16.142l-6.919 3.636 1.14-6.664L.392 8.492 7.07 7.527 10 1z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>
    </div>
  </div>
);

const TestimonialSection = () => (
  <div className="max-w-screen-2xl m-auto">
    <h3 className="text-center text-5xl py-8">Trust Our Customers</h3>
    <div className="my-4 flex gap-4">
      {reviews.map((review, index) => (
        <CustomerReview key={index} {...review} />
      ))}
    </div>
  </div>
);

export default TestimonialSection;
