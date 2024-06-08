const newsItems = [
  {
    id: 1,
    image: "../Guideline4.jpg",
    // image: "https://img.freepik.com/free-photo/afro-american-businessman-making-notes-while-sitting-his-desk_171337-8323.jpg",
    date: "May 12, 2024 10:00 am",
    title: "How to Ace Your Next Job Interview.",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/african-american-man-writing_23-2148764098.jpg",
    date: "May 31, 2024 5:30 pm",
    title: "Top Skills Employers Look For.",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/group-afro-americans-working-together_1303-8970.jpg",
    date: "May 15, 2024 2:15 pm",
    title: "Building a Strong Professional Network.",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/free-photo/medium-shot-smiley-man-holding-device_23-2149366512.jpg",
    date: "April 18, 2024 8:00 am",
    title: "Balancing Work and Personal Life Effectively.",
  },
];

const BlogNews = () => {
  return (
    <div className="blog-section">
      <div className="b-container mx-auto mw p-4">
        <div role="heading" className="flex items-center justify-center">
          <h2 className="text-3xl font-semibold mb-4 font-Lexend">
            Trending News For Some Career Tips
          </h2>
        </div>

        <div className="blog-cards flex flex-col md:flex-row justify-center items-center font-Poppins">
          <div className="flex-1">
            <div className="main-img rounded-lg overflow-hidden md:mb-0 relative">
              <div className="group relative">
              <img
                src={newsItems[0].image}
                alt={newsItems[0].title}
                className="w-full"
              />
              <div className="img-overlay"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-4 text-white w-full">
                <p className="text-sm">{newsItems[0].date}</p>
                <h3 className="text-lg font-semibold">{newsItems[0].title}</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 space-y-4 md:ml-4">
            {newsItems.slice(1).map((item) => (
              <div key={item.id} className="flex space-x-4 relative group">
                <div className="relative w-1/3 h-auto rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={`News ${item.id}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="img-overlay"></div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
