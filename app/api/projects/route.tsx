import { NextResponse } from "next/server";

interface CuratedProject {
  name: string;
  image: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  created_at: string;
  updated_at: string;
  html_url: string;
  homepage: string;
  fork: boolean;
  image: string;
  topics: string[];
}

export async function GET() {
  try {
    const curatedUrl =
      "https://raw.githubusercontent.com/TechThrives/ProjectsData/main/Data/Projects.json";

    const curatedResponse = await fetch(curatedUrl);
    if (!curatedResponse.ok) {
      throw new Error("Failed to fetch curated JSON file");
    }
    const curatedProjects: CuratedProject[] = await curatedResponse.json();

    const repoPromises = curatedProjects.map(async (curated) => {
      const apiUrl = `https://api.github.com/repos/TechThrives/${curated.name}`;
      const repoResponse = await fetch(apiUrl);
      if (!repoResponse.ok) {
        throw new Error(`Failed to fetch repo: ${curated.name}`);
      }
      const repoData: GitHubRepo = await repoResponse.json();
      repoData.image = curated.image;
      return repoData;
    });

    const repos = await Promise.all(repoPromises);

    return NextResponse.json(repos);
  } catch (error: any) {
    console.error("Error in projects API route:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 }
    );
  }
}
