'use client'

import { useEffect, useState, useCallback, useMemo } from "react";
import { BlurFade } from "./ui/blur-fade";
import Link from "next/link";
import Image from "next/image";

interface RepositoryOwner {
  login: string;
  avatar_url: string;
  type: 'User' | 'Organization';
}

interface Repository {
  full_name: string;
  owner: RepositoryOwner;
}

interface PullRequest {
  id: number;
  title: string;
  html_url: string;
  repository_url: string;
  repository: Repository;
  created_at: string;
  state: string;
  merged_at: string | null;
}

interface GitHubSearchResponse {
  items: GitHubPullRequest[];
}

interface GitHubPullRequest {
  id: number;
  title: string;
  html_url: string;
  repository_url: string;
  created_at: string;
  state: string;
  merged_at: string | null;
}

interface GitHubRepository {
  url: string;
  full_name: string;
  owner: {
    type: 'User' | 'Organization';
    login: string;
    avatar_url: string;
  };
}
const FormattedDate = ({ date }: { date: string }) => {
  const formattedDate = useMemo(() => {
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  }, [date]);

  return (
    <span className="text-xs text-muted-foreground">
      {formattedDate}
    </span>
  );
};

export default function GitHubContributions() {
  const [contributions, setContributions] = useState<PullRequest[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchContributions = useCallback(async (): Promise<void> => {
    try {
      const response = await fetch('https://api.github.com/search/issues?q=author:eeshm+type:pr+is:merged&sort=updated&order=desc&per_page=30', {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      });

      if (response.ok) {
        const data = (await response.json()) as GitHubSearchResponse;
        const prs: GitHubPullRequest[] = data.items || [];
        
        const repoUrls: string[] = [...new Set(prs.map((pr) => pr.repository_url))];
        
        const repoDetailsPromises = repoUrls.map(async (repoUrl: string): Promise<GitHubRepository | null> => {
          const repoResponse = await fetch(repoUrl, {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
            },
          });
          if (repoResponse.ok) {
            return (await repoResponse.json()) as GitHubRepository;
          }
          return null;
        });

        const repoDetails = (await Promise.all(repoDetailsPromises)).filter(
          (repo): repo is GitHubRepository => repo !== null
        );
        
        const repoOwnerMap = new Map<string, RepositoryOwner & { full_name: string }>();
        repoDetails.forEach((repo) => {
          repoOwnerMap.set(repo.url, {
            type: repo.owner.type,
            login: repo.owner.login,
            avatar_url: repo.owner.avatar_url,
            full_name: repo.full_name,
          });
        });
        
        const orgPRs = prs
          .map((pr): PullRequest | null => {
            const repoInfo = repoOwnerMap.get(pr.repository_url);
            if (!repoInfo) return null;
            
            return {
              id: pr.id,
              title: pr.title,
              html_url: pr.html_url,
              repository_url: pr.repository_url,
              repository: {
                full_name: repoInfo.full_name,
                owner: {
                  login: repoInfo.login,
                  avatar_url: repoInfo.avatar_url,
                  type: repoInfo.type,
                },
              },
              created_at: pr.created_at,
              state: pr.state,
              merged_at: pr.merged_at,
            };
          })
          .filter((pr): pr is PullRequest => 
            pr !== null && 
            pr.merged_at !== null &&
            pr.repository.owner.type === 'Organization' && 
            pr.repository.owner.login !== 'eeshm'
          )
          .slice(0, 10);
        
        setContributions(orgPRs);
      }
    } catch (error) {
      console.error('Error fetching GitHub contributions:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContributions();
  }, [fetchContributions]);

  if (loading) {
    return (
      <>
        <section className="sm:px-12 px-4 py-2">
          <div className="flex flex-col gap-y-3">
            <BlurFade delay={0.1}>
              <h2 className="text-base mb-3 opacity-70 mt-4 sm:mt-6">
                Open Source Contributions
              </h2>
              <p className="text-sm text-muted-foreground">Loading contributions...</p>
            </BlurFade>
          </div>
        </section>
      </>
    );
  }

  if (contributions.length === 0) {
    return null;
  }

  return (
    <>
      <section className="sm:px-12 px-4 py-2">
        <div className="flex flex-col gap-y-3">
          <BlurFade delay={0.1}>
            <h2 className="text-base mb-3 opacity-70 mt-4 sm:mt-6">
              Open Source Contributions
            </h2>
            <p className="text-sm dark:text-white/70 text-black/70 leading-relaxed mb-4">
              pull requests to open source organizations
            </p>
            <div className="flex flex-col gap-3">
              {contributions.map((pr, index) => (
                <BlurFade key={pr.id} delay={0.1 + index * 0.1}>
                  <Link
                    href={pr.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-4 rounded-sm border dark:border-white/[0.06] border-black/[0.06] hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-3">
                      {/* Organization Logo */}
                      {pr.repository?.owner?.avatar_url && (
                        <div className="flex-shrink-0">
                          <Image
                            src={pr.repository.owner.avatar_url}
                            alt={pr.repository.owner.login}
                            width={32}
                            height={32}
                            className="rounded-sm"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-xs text-muted-foreground">
                            {pr.repository?.full_name}
                          </span>
                          <span className="text-xs text-muted-foreground">•</span>
                          <FormattedDate date={pr.created_at} />
                        </div>
                        <h3 className="text-sm font-semibold dark:text-white text-black group-hover:underline line-clamp-2">
                          {pr.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </BlurFade>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>
      <BlurFade delay={0.3}>
        <div className="border-b border-dashed dark:border-white/[0.06] border-black/[0.06] mt-6"></div>
      </BlurFade>
    </>
  );
}

