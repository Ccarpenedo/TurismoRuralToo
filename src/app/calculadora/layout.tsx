export default function CalculadoraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-8">
      {children}
    </div>
  );
}
