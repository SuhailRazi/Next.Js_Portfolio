/* eslint-disable @next/next/no-img-element */
import { companies } from "@/data";

const FamiliarTech = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Familiar
        <span className="text-purple"> technologies</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 mt-6">
        {companies.map((company) => (
          <div key={company.id} className="flex md:max-w-60 max-w-32 gap-2">
            <img src={company.img} alt={company.name} className="md:w-10 w-5" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamiliarTech;
