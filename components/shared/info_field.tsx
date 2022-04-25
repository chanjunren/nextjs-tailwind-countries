interface InfoFieldProps {
  field: string;
  value: string;
}

export default function InfoField({ field, value }: InfoFieldProps) {
  return (
    <div className="container flex w-full">
      <h2 className="font-semibold">{field}: </h2>
      <p className="ml-1">{value}</p>
    </div>
  );
}
