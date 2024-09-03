import { Icon } from "@iconify/react";
import Title from "./Title";

interface Props {
  title: string;
  handleNext: () => void;
  handlePrev: () => void;
  leftDisabled: boolean;
  rightDisabled: boolean;
}

const SectionTitle = ({
  title,
  handleNext,
  handlePrev,
  leftDisabled=false,
  rightDisabled=false
}: Props) => {
  return (
    <div className="container mx-auto flex flex-row justify-between items-center py-2 px-2">
      <Title title={title} />
      <div className="flex flex-row gap-2">
        
        <button
          onClick={handlePrev}
          className={`rounded-lg p-1.5  ${
            leftDisabled && "cursor-not-allowed"
            }`}
            style={{
              backgroundColor:"rgba(62, 50, 50, 0.05)"
            }}
          disabled={leftDisabled}
        >
             <Icon
          icon="octicon:chevron-left-16"
          style={{ fontSize: "18px", color: leftDisabled ? "#b1abab" : "#000" }}
        />
        
        </button>
        <button
          className={`rounded-lg p-1.5 ${
            rightDisabled && "cursor-not-allowed"
            }`}
            style={{
              backgroundColor:"rgba(62, 50, 50, 0.05)"
            }}
          disabled={rightDisabled}
          onClick={handleNext}
        >
           <Icon
          icon="octicon:chevron-right-16"
          style={{ fontSize: "18px", color: rightDisabled ? "#b1abab" : "#000" }}
        />
        </button>
      </div>
    </div>
  );
};

export default SectionTitle;
