import { GitHubUser, Member } from "@/types/types";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiUrl = `https://api.github.com/orgs/TechThrives/members`;
    const membersResponse = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });
    if (!membersResponse.ok) {
      throw new Error(`Failed to fetch members`);
    }
    const membersData: GitHubUser[] = await membersResponse.json();

    const membersPromises = membersData.map(async (member) => {
      const userResponse = await fetch(member.url, {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      });
      if (!userResponse.ok) {
        throw new Error(`Failed to fetch ${member.login} user`);
      }
      const resData = await userResponse.json();
      const userData: Member = {
        id: resData.id,
        name: resData.name,
        username: resData.login,
        avatarUrl: resData.avatar_url,
        github: resData.html_url,
        type: resData.type,
        company: resData.company,
        blog: resData.blog,
        location: resData.location,
        email: resData.email,
        hireable: resData.hireable,
        bio: resData.bio,
        twitter: resData.twitter_username,
        repos: resData.public_repos,
        followers: resData.followers,
        following: resData.following,
        createdAt: resData.created_at,
        updatedAt: resData.updated_at,
      };
      return userData;
    });

    const users = await Promise.all(membersPromises);

    return NextResponse.json(users);
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
