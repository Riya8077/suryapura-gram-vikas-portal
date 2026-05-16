type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold text-green-900 md:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 max-w-2xl text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}