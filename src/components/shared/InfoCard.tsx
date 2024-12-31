import React from "react";

type Props = {
  title: string;
  content: string;
  image?: string | null;
  className?: string;
};

const InfoCard: React.FC<Props> = ({
  title,
  content,
  image = null,
  className = "",
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      {image && (
        <div className="mr-4 w-1/3">
          <img
            src={image}
            alt={title}
            className="h-auto w-full cursor-pointer rounded-lg object-cover"
            aria-label={`Ver imagen de ${title}`}
          />
        </div>
      )}
      <div className={`${image ? "w-2/3" : "w-full"}`}>
        <h3 className="mb-3 text-lg font-semibold text-gray-800 text-skin-accent dark:text-gray-100">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{content}</p>
      </div>
    </div>
  );
};

export default InfoCard;
