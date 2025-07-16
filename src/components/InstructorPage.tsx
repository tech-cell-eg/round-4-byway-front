import LearnerReviews from "../components/LearnerReviews";
import CourseCard from "./ui/CourseCard";

function InstructorPage() {
  return (
    <>
      <div className="max-w-full p-10 mx-auto flex flex-col-reverse md:flex-row gap-10 justify-between">
        <div className="lg:justify-start justify-center mx-auto leading-[160%]">
          <p className="text-weight-400 text-[14px] text-[#334155]">Instructor</p>
          <h2 className="text-[32px] font-bold text-gray-900">Ronald Richards</h2>
          <p className="text-sm text-gray-600 mt-2">
            Web developer, UX/UI Designer, and Teacher
          </p>

          <div className="flex gap-10 mt-3 text-center">
            <div>
              <p className="text-sm text-gray-500">Total Students</p>
              <p className="text-[24px] font-bold text-gray-900">1000</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Reviews</p>
              <p className="text-[24px] font-bold text-gray-900">154</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-[20px] font-bold text-gray-800 mb-2">
              About Ronald Richard
            </h3>
            <p className="text-[16px] text-gray-700 leading-[160%] font-semibold">
              Ronald Richard is a highly skilled UX/UI Designer with over a decade
              of experience in crafting user-centric digital solutions...
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-[20px] font-bold text-gray-800 mb-1">
              Areas of Expertise
            </h3>
            <ul className="list-disc list-inside text-[16px] text-gray-700 space-y-1 font-semibold">
              <li>User Experience (UX) Design</li>
              <li>User Interface (UI) Design</li>
              <li>Information Architecture</li>
              <li>Interaction Design</li>
              <li>Visual Design</li>
              <li>Usability Testing</li>
              <li>Wireframing and Prototyping</li>
              <li>Design Thinking</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-[20px] font-bold text-gray-800 mb-1">
              Professional Experience
            </h3>
            <p className="text-[16px] text-gray-700 leading-relaxed font-semibold">
              Ronald Richard has an extensive professional background in UX/UI
              design, having worked with renowned companies...
            </p>
          </div>
        </div>

        <div className="w-full max-w-[220px] flex flex-col gap-4 lg:items-center items-center mx-auto">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src="src/components/ui/images/dc039d2923f90aee4593cc5a3d261eb745f96ac8.png"
              alt="Instructor"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="w-full bg-white border border-[#020617] text-gray-800 py-2 rounded-[8px] shadow-sm hover:bg-gray-100 transition">
            Website
          </button>
          <button className="w-full bg-white border border-[#020617] text-gray-800 py-2 rounded-[8px] shadow-sm hover:bg-gray-100 transition">
            Twitter
          </button>
          <button className="w-full bg-white border border-[#020617] text-gray-800 py-2 rounded-[8px] shadow-sm hover:bg-gray-100 transition">
            Youtube
          </button>
        </div>
      </div>

      <section className="bg-[#F8FAFC] w-full p-6 m-[20px] mx-auto">
        <div className="flex justify-between px-5 mb-[20px]">
          <h2 className="text-[24px] font-bold text-black w-[308px]">
            More Courses by <span className="text-[#2563EB]">Ronald Richards</span>
          </h2>
        </div>

        <CourseCard /> 
      </section>

      <LearnerReviews />
    </>
  );
}

export default InstructorPage;
