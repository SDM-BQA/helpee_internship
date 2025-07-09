const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
};
const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return res.json();
};
const getPredictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
};

export default async function Prediction({
  params,
}: {
  params: { name: string };
}) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);

  return (
    <div className="w-[50rem] shadow shadow-md px-8 py-5 rounded-xl border border-gray-100">
      <div className="text-[3rem] font-bold text-center mb-[2rem]">
        Predicted Personal Info
      </div>
      <div className="grid grid-cols-2 items-center gap-6">
        <div className="text-[2rem] font-bold">Name: {params.name}</div>
        <div className="text-[2rem] font-bold">Age: {age?.age ?? "N/A"}</div>
        <div className="text-[2rem] font-bold">
          Gender: {gender?.gender ?? "N/A"}
        </div>
        <div className="text-[2rem] font-bold">
          Country: {country?.country?.[0]?.country_id ?? "N/A"}
        </div>
      </div>
    </div>
  );
}
