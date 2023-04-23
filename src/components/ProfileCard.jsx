import React from "react";
import profileData from "../data/profile.json";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <section className="p-5">
      {/*  To show cards grid  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">
        {profileData.map((profile, index) => (
          //  Profile Card section
          <div
            key={index}
            className="flex  flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Image
              className="ml-3 rounded-md w-32 mt-5 md:mt-0 "
              src={`https://github.com/${profile.GitHubUserName}.png`} // show image from github avatar
              width={500}
              height={500}
              alt={profile.GitHubUserName}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {profile.GitHubUserName}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {profile.bio}
              </p>
              <span className="flex gap-5 dark:text-white">
                <a
                  href={`https://github.com/${profile.GitHubUserName}`}
                  target="_blank"
                >
                  {" "}
                  <FaGithub size={30} />
                </a>
                <a
                  href={`https://twitter.com/${profile.TwitterUserName}`}
                  target="_blank"
                >
                  {" "}
                  <FaTwitter size={30} />
                </a>
                <a
                  href={`https://linkedin.com/in/${profile.LinkedInUserName}`}
                  target="_blank"
                >
                  {" "}
                  <FaLinkedin size={30} />
                </a>
              </span>
              <p className="pt-2 dark:text-white">{profile.occupation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
