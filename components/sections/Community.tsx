"use client";
import React, { useEffect, useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-effects";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { IconBrandDiscord, IconBrandGithub } from "@tabler/icons-react";
import { AnimatedMembers } from "@/components/ui/animated-tooltip";
import { Member } from "@/types/types";
import Link from "next/link";

export default function Community() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMembers() {
      try {
        const res = await fetch("/api/members");
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data: Member[] = await res.json();
        setMembers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMembers();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mx-6 w-full" id="community">
      <h1 className="my-6 mx-auto text-center text-3xl font-bold text-slate-700 md:text-4xl lg:text-6xl dark:text-slate-300">
        Join Our Community
      </h1>
      <TextGenerateEffect
        className="text-center text-md max-w-2xl"
        words="Ready to be part of something innovative? Join our community today and start collaborating on projects that matter. "
      />
      <div className="flex flex-col my-12 items-center justify-center mx-6 w-full">
        {loading && (
          <div className="flex justify-center items-center h-12">
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 text-neutral-200 fill-neutral-600 animate-spin dark:text-neutral-400 dark:fill-neutral-800"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {error && (
          <div className="flex justify-center items-center h-12">
            <p className="text-slate-700 text-sm md:text-lg dark:text-slate-300">Unable to fetch members</p>
          </div>
        )}

        {!loading && !error && (
          <div className="flex">
            <AnimatedMembers members={members} />
          </div>
        )}

        <div className="flex gap-6">
          <HoverBorderGradient className="flex gap-2">
            <Link className="flex gap-2" href="https://discord.com/invite/xE9jBsjES6" target="_blank">
              <IconBrandDiscord /> Join Discord
            </Link>
          </HoverBorderGradient>
          <HoverBorderGradient>
            <Link className="flex gap-2" href="https://github.com/techthrives" target="_blank">
              <IconBrandGithub /> Join Github
            </Link>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
}
