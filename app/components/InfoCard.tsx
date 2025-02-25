import React from "react";

type InfoCardProps = {
  title: string;
  content: string | string[];
  isList: boolean;
};

const InfoCard: React.FC<InfoCardProps> = ({ title, content, isList }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-card-bg-light dark:bg-card-bg-dark p-4 pt-8 ">
      <h2 className="font-bold text-2xl text-card-h2-light dark:text-card-h2-dark">{title}</h2>
      {isList ? (
        <ul className="list-none  text-card-paragraph-light dark:text-card-paragraph-dark">
          {Array.isArray(content) && content.map((item, index) => (
            <li className="before:content-['-'] before:mr-2 before:text-list-bullet-light dark:before:text-list-bullet-dark before:text-3xl " key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className=" text-card-paragraph-light dark:text-card-paragraph-dark">{content}</p>
      )}
    </div>
  );
};
export default InfoCard;


