import { Icon } from "@iconify/react";

interface Props {
    title: string;
    handleNext: () => void;
  handlePrev: () => void
  currentIndex: number;
  postsCount:number
}

const SectionTitle = ({ title,handleNext,handlePrev, currentIndex,postsCount }: Props) => {
  return (
   
    <div className="flex flex-row justify-between items-center my-5">
      {/* <span className="font-medium text-xl border-l-4 border-brand">
        {title}
      </span> */}
      <div className="flex items-center mb-4">
      <div className="h-3 w-1 bg-brand rounded-full mr-2"></div>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
      <div className="flex flex-row gap-2">
          <button  onClick={handlePrev}
            className={`rounded-lg p-1 bg-gray  ${currentIndex === 0 && 'opacity-50 cursor-not-allowed'}`}
            disabled={currentIndex === 0}
          >
          <Icon
            icon="octicon:chevron-left-16"
            style={{ fontSize: "16px", color: "#b1abab" }}
          />
        </button>
          <button
             className={`rounded-lg p-1 bg-gray ${currentIndex >= postsCount - 4 && 'opacity-50 cursor-not-allowed'}`}
             disabled={currentIndex >= postsCount - 4}
            onClick={handleNext}>
          <Icon
            icon="octicon:chevron-right-16"
            style={{ fontSize: "16px", color: "#b1abab" }}
          />
        </button>
      </div>
    </div>
   
  );
};

export default SectionTitle;
