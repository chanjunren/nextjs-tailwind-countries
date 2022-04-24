function InfoField({ field, value }) {
  return (
    <div className="container flex w-full">
      <h2 className="font-semibold">{field}: </h2>
      <p className="ml-1">{value}</p>
    </div>
  );
}

export default function CountryCard({
  imgSrc,
  countryName,
  population,
  region,
  capital,
}) {
  return (
    <div className="grid grid-col-1 shadow-lg rounded-md min-w-fit">
      <img
        className="rounded-md min-w-full lg:h-40 xl:h-52"
        src={imgSrc}
        alt={countryName + '_flag'}
      />
      <div className="p-5">
        <h1 className="font-bold mt-5 mb-5">{countryName}</h1>
        <InfoField field="Population" value={population} />
        <InfoField field="Region" value={region} />
        <InfoField field="Capital" value={capital} />
      </div>
    </div>
  );
}
