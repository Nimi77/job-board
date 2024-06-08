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
    <div className="testimonial-section py-20 sm:py-24 md:py-36">
      <div className="testimonials-container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div role="heading" className="font-Lexend mb-6 flex  justify-between items-center">
          <h2 className="text-3xl  font-semibold mb-4 sm:mb-0 text-center sm:text-left">
            What Our Workers Think About
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center bg-gray-300 shadow-lg rounded-full hover:bg-gray-400 disabled:opacity-50"
              disabled={currentPage === 0}
            >
              <FaArrowLeft/>
            </button>
            <button
              onClick={handleNext}
              className="flex items-center justify-center bg-green-600 text-white shadow-lg rounded-full hover:bg-green-700 disabled:opacity-50"
              disabled={currentPage === totalPages - 1}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="testiomial-card">
          {currentTestimonials.map(testimonial => (
            <div 
              key={testimonial.id} 
              className="feedback w-full  border border-gray-200 bg-white rounded-lg p-4 md:p-6 relative font-Poppins"
            >
              <div className="mb-4 flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full"
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
