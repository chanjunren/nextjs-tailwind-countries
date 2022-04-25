interface InfoFieldProps {
  field: string;
  value: string;
}

export default function InfoField({ field, value }: InfoFieldProps) {
  return (
    <div className="container flex w-full">
      <h2 className="font-semibold pr-2 text-sm">{field}: </h2>
      <p className="text-sm">{value}</p>
    </div>
  );
}
