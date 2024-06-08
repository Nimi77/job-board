import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: "Kathy Pacheco",
    role: "Pro Property Maintenance",
    image: "../Guideline1.jpg",
    text: "Thanks to this job finder website, I was able to find my dream job in marketing. The platform was easy to use.",
    rating: 5,
  },
  {
    id: 2,
    name: "Joshua Jones",
    role: "Mostow Co.",
    image: "../Guideline3.jpg",
    text: "Was struggling to find a job in software development, but this platform made the process so much easier.",
    rating: 4,
  },
  {
    id: 3,
    name: "John Dukes",
    role: "Britches of Georgetown",
    image: "../Guideline2.jpg",
    text: "I find a job in software development, but this platform made the process so much easier. Within weeks, I had secured a job.",
    rating: 3,
  },
  {
    id: 4,
    name: "John Dukes",
    role: "Britches of Georgetown",
    image: "../Guideline2.jpg",
    text: "Was struggling to find a job in software development, but this platform made the process so much easier within weeks.",
    rating: 3,
  },
  {
    id: 5,
    name: "John Dukes",
    role: "Britches of Georgetown",
    image: "../Guideline4.jpg",
    text: "Was struggling to find a job in software development, but this platform made the process so much easier. ",
    rating: 5,
  },
];

function Testimonial() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  return (
    <div className="testimonial-section py-36">
      <div className="testimonials-container mw mx-auto">
        <div role="heading" className="font-Lexend mb-6 flex justify-between">
          <h2 className="text-3xl font-semibold">
            What Our Worker Think About
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center bg-faint shadow-lg rounded-full hover:bg-gray-300 disabled:opacity-50"
              disabled={currentPage === 0}
            >
              <FaArrowLeft size={20}/>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center bg-greenbg  text-white shadow-lg rounded-full hover:bg-gray-500 disabled:opacity-50"
              disabled={currentPage === totalPages - 1}
            >
              <FaArrowRight size={20}/>
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-4 overflow-x-auto font-Poppins"> 
          {/* //flex flex-wrap justify-center md:justify-start overflow-x-auto */}
        {currentTestimonials.map(testimonial => (
          <div 
            key={testimonial.id} 
            className="feedback sm:w-1/2 lg:w-1/3 border border-faint bg-white rounded-lg  p-6 relative mx-2 md:mx-4">
            <div className="mb-4 flex gap-2 justify-start">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full mb-2"
              />
              <div className="text-left">
                <h3 className="text-md font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">{testimonial.text}</p>
            <div className="text-left mt-4 text-xl text-yellow-500">
              {/* Rating stars */}
              {'★'.repeat(testimonial.rating).padEnd(5, '☆')}
            </div>
          </div>
        ))}
     
        </div>
      </div>
    </div>
  );
}
export default Testimonial;
