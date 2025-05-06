import { CuratedProject, Project } from "@/types/types";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const curatedUrl = "https://raw.githubusercontent.com/TechThrives/ProjectsData/main/Data/Projects.json";

    const curatedResponse = await fetch(curatedUrl);
    if (!curatedResponse.ok) {
      throw new Error("Failed to fetch curated JSON file");
    }
    const curatedProjects: CuratedProject[] = await curatedResponse.json();

    const repoPromises = curatedProjects.map(async (curated, index) => {
      const apiUrl = `https://api.github.com/repos/TechThrives/${curated.name}`;
      const repoResponse = await fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      });
      if (!repoResponse.ok) {
        throw new Error(`Failed to fetch ${curated.name} repo`);
      }
      const repoData = await repoResponse.json();
      const projectData: Project = {
        id: repoData.id,
        name: repoData.name,
        order: index,
        description: repoData.description,
        createdAt: repoData.created_at,
        updatedAt: repoData.updated_at,
        github: repoData.html_url,
        url: repoData.homepage,
        image: curated.image,
        topics: repoData.topics,
      };
      return projectData;
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
