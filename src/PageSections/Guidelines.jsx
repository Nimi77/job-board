import "../App.css";
function UserGuidelines() {
  return (
    <div className="py-32">
      <div className="guideline-container font-Poppins mx-auto mw flex flex-col justify-center">
        <div role="heading" className="flex items-center justify-item-between justify-between font-Lexend">
          <h2 className=" text-2xl font-semibold">
            Discover Endless Career Oppourtunities
          </h2>
          <p className=" w-86 text-ash">
            This platform is created for you to find the perfect job
            oppourtunities tailored to your skills and aspirations discover your
            next career move in JobBoard.
          </p>
        </div>
        <div className="guildines-content mt-9 mb-12">
          <div className="gc-container flex items-center justify-center bg-slate-400">
            {/* slide one content */}
            <div className="ContentOne flex">
              <img src="../Guideline1.jpg" className="slideOne-img rounded-md" ></img>
              <div className="slideOne-content px-4 py">
                <span className="font-medium pb-3">01</span>
                <div>
                  <h3 className="font-semibold text-lg ">Create a Profile</h3>
                  <p className="py-3">
                    Sign up for an account and create a profile that highlights
                    your skills and experience.
                  </p>
                  <div className="border w-full border-gray-300"></div>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                      <span className=""></span>
                      <span>Use a clear and professional photo:</span> 
                      Ensure your profile picture is clear, well-lit and represents you professionally. 
                      Avoid using group photos or casual images.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className=""></span>
                      <span className="font-semibold">Write a concise and informative bio:</span> 
                      Include key information about yourself, such as your background, skills and interests,
                      in a brief and engaging manner. Highlight what makes you unique and relevant to the context of the website.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className=""></span>
                      <span className="font-semibold">Keep information up-to-date:</span> 
                      Regurlarly update your profile with new achievements, skills or experiences to keep it
                      current and relevant. This shows that you are active and engaged.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* slide two content */}
            <div></div>
            {/* slide three content */}
            <div></div>
          </div>
        </div>
        <div className="guildlines-slides">
          <div className="slides-container flex items-center justify-center gap-2">
            {/* slide one */}
            <div className="slideOne active">
              <div className="border border-slate-950 mb-4"></div>
              <div className="flex flex-col gap-2">
                <span className="font-medium">01</span>
                <h4 className="font-semibold">Create a Profile</h4>
                <p className="text-sm text-ash">
                  Sign up for an account and create a profile that highlights
                  your skills and experience.
                </p>
              </div>
            </div>
            {/* slide two */}
            <div className="slideTwo">
              <div className="border border-gray-400 mb-4"></div>
              <div className="flex flex-col gap-2 text-ash">
                <span className="font-medium">02</span>
                <h4 className="font-semibold">Search for jobs</h4>
                <p className="text-sm">
                  Use our search functions to find job listings that match your
                  criteria.
                </p>
              </div>
            </div>
            <div className="slideThree">
              <div className="border border-gray-400"></div>
              <div className="flex flex-col gap-3 text-faint">
                <span className="font-medium">03</span>
                <h4 className="font-semibold">Apply to jobs</h4>
                <p className="text-sm">
                  Use your search functions to find job listings that match your
                  criteria.
                </p>
              </div>
            </div>
            <div className="slideFour">
              <div className="border border-gray-400"></div>
              <div className="flex flex-col gap-3 text-faint">
                <span className="font-medium">04</span>
                <h4 className="font-semibold">Get Hired</h4>
                <p className="text-sm">
                  Our team of job experts will guide you through the interview process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserGuidelines;

<script></script>;
