import * as odotnet from "@/app/api/odotnet/fetch-api";
import * as enums from "@/app/api/odotnet/enums";
import CareerTile from "@/components/CareerTitleTile";

async function Careers() {
  // Fetch careers data for those interested in ux/ui designer
  const fetchResult = await odotnet.odotnetKeyword(
    enums.JobKeyword.UXUIDesigner
  );
  const careersData = fetchResult.career;
  // console.log(careersData, "careersData");

  return (
    <main className="mt-24 sm:mt-36 pb-10 max-w-screen-2xl m-auto">
      <div>
        <h1 className="m-5 text-center font-bold text-2xl">
          Make Your Next Step With Us!
        </h1>
      </div>
      <div className="grid gap-8 lg:gap-10 justify-center grid-cols-1 xs:grid-cols-2 md:grid-cols-3 w-3/5 xs:w-3/4 m-auto my-10 auto-rows-fr">
        {careersData.map((career: any) => (
          <CareerTile key={career.code} career={career} />
        ))}
      </div>
    </main>
  );
}

export default Careers;
