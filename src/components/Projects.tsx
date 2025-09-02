import React, { useEffect, useState } from 'react';
import { FolderGit2 } from 'lucide-react';

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count?: number;
};

const GITHUB_USER = 'anacodz';

const fallback = [
  {
    id: 1,
    name: 'FLUX',
    description: "A platform independent fast and efficient file sharing and compression tool utilizing Meta's Zstd compression.",
    html_url: 'https://github.com/anacodz/flux',
    language: 'Python',
    stargazers_count: 0,
  },
];

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=12`;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API error');
        return res.json();
      })
      .then((data) => {
        const mapped: Repo[] = data.map((r: any) => ({
          id: r.id,
          name: r.name,
          description: r.description,
          html_url: r.html_url,
          language: r.language,
          stargazers_count: r.stargazers_count,
        }));
        // exclude local repo named 'bentolio'
        const filtered = mapped.filter(m => (m.name || '').toLowerCase() !== 'bentolio');
        setRepos(filtered);
      })
      .catch(() => setRepos(fallback))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div id="projects" className="p-4 md:p-6">
      <div className="flex items-center gap-2 mb-4">
        <FolderGit2 size={18} className="text-[#111827]" />
        <h2 className="text-lg font-semibold">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading && (
          <div className="col-span-full text-sm text-[#111827]/70">Loading repositories...</div>
        )}

        {!loading && repos.length === 0 && (
          <div className="col-span-full text-sm text-[#111827]/70">No repositories found.</div>
        )}

        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-[#FFF9F6] rounded-lg shadow-sm p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <h3 className="font-semibold text-base mb-2">{repo.name}</h3>
            <p className="text-[#111827]/70 mb-3 text-sm">{repo.description || 'No description'}</p>
            <div className="flex items-center gap-2 mb-3">
              {repo.language && (
                <span className="px-2 py-0.5 bg-[#FADCD9] text-xs rounded-full">{repo.language}</span>
              )}
              <span className="text-xs text-[#111827]/60">⭐ {repo.stargazers_count ?? 0}</span>
            </div>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-medium hover:text-[#FADCD9] transition-colors duration-300"
            >
              View Project →
            </a>
          </div>
        ))}

        <div className="flex items-center justify-center h-full relative">
          <a
            target="_blank"
            href={`https://github.com/${GITHUB_USER}?tab=repositories`}
            className="inline-block px-4 py-2 border border-[#111827] rounded-lg font-medium transition-all duration-300 hover:bg-[#111827] hover:text-[#FFF9F6] text-sm w-full text-center relative z-10"
          >
            See All Projects →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;