import React from "react";
import ProfileCard from "../components/ProfileCard";
import { FaDiscord, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <section>
      <article className="flex flex-col items-center justify-center p-10">
        <p className="font-mono text-2xl">
          Join Open Source Developers community 🚩{" "}
        </p>
        <p className="text-xl ">
          Join our Community to learn and grow together
        </p>
        <div className="icons flex gap-5 text-2xl pt-5 ">
          <a href="https://discord.com/invite/z993fVJ2sb" target="_blank">
            <FaDiscord />
          </a>
          <a
            href="https://github.com/The-Lively-Developers-Community"
            target="_blank"
          >
            <FaGithub />
          </a>
        </div>
      </article>
      <ProfileCard />
    </section>
  );
}
