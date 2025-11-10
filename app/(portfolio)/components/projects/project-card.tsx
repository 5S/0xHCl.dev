export type ProjectCardProps = {
  title: string;
  description: string;
  url: string;
  languages: { name: string; color: string }[];
};

export default function ProjectCard({
  title,
  description,
  url,
  languages,
}: ProjectCardProps) {
  return (
    <article className="rounded-md border border-[#30363d] p-4">
      <h3 className="mb-2 font-bold text-blue-400">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <p className="mb-2 text-gray-400 text-sm">{description}</p>
      <footer className="flex items-center text-gray-400 text-xs">
        {languages.map((lang) => (
          <span key={lang.name} className="mr-3 flex items-center">
            <span
              className="mr-1 h-3 w-3 rounded-full border border-[#ffffff26]"
              style={{ backgroundColor: lang.color }}
            />
            {lang.name}
          </span>
        ))}
      </footer>
    </article>
  );
}
