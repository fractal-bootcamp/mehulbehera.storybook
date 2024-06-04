import "../../index.css";
import { useState } from "react";

const jack = [
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2b65ca6a-2e94-4b14-b8b3-fc4fc3ffa328/daoc64d-4fb367a7-325e-41c4-9099-dce58802d0e3.png/v1/fill/w_396,h_398/my_bitstrips_avatar_bitmoji_style__by_isaiahcontrerasage08_daoc64d-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzk4IiwicGF0aCI6IlwvZlwvMmI2NWNhNmEtMmU5NC00YjE0LWI4YjMtZmM0ZmMzZmZhMzI4XC9kYW9jNjRkLTRmYjM2N2E3LTMyNWUtNDFjNC05MDk5LWRjZTU4ODAyZDBlMy5wbmciLCJ3aWR0aCI6Ijw9Mzk2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WlUKFbAFCUg97h8VSvOogaflSu_m1P5lH0hkYqPWtug",
  "Jack",
  "Jack likes basketball",
];

const jessie = [
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/15319066-1020-42a5-ba85-2f3ad246338b/dcrb3gz-45c950e0-0f26-4c30-8711-900553ac9e41.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE1MzE5MDY2LTEwMjAtNDJhNS1iYTg1LTJmM2FkMjQ2MzM4YlwvZGNyYjNnei00NWM5NTBlMC0wZjI2LTRjMzAtODcxMS05MDA1NTNhYzllNDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Sqq_oQnAZpIkayOmsnLy6m5yvtd58c9snmj4oYoKJD8",
  "Jessie",
  "Jessie doesn't likes basketball",
];

const eric = [
  "https://i.pinimg.com/474x/0f/e9/bb/0fe9bba766201d818d6c5dea51a28957.jpg",
  "eric",
  "eric  likes football",
];
type TabDetails = {
  imageURL: string;
  name: string;
  description: string;
};

type TabOptions = "jake" | "nicki" | "akame";

const tabDetails: Record<TabOptions, TabDetails> = {
  jake: {
    description: "jake's description",
    imageURL:
      "https://i.pinimg.com/474x/0f/e9/bb/0fe9bba766201d818d6c5dea51a28957.jpg",
    name: "jake",
  },
  nicki: {
    description: "nicki's description",
    imageURL:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/15319066-1020-42a5-ba85-2f3ad246338b/dcrb3gz-45c950e0-0f26-4c30-8711-900553ac9e41.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE1MzE5MDY2LTEwMjAtNDJhNS1iYTg1LTJmM2FkMjQ2MzM4YlwvZGNyYjNnei00NWM5NTBlMC0wZjI2LTRjMzAtODcxMS05MDA1NTNhYzllNDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Sqq_oQnAZpIkayOmsnLy6m5yvtd58c9snmj4oYoKJD8",
    name: "nicki",
  },
  akame: {
    description: "akame's description",
    imageURL:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2b65ca6a-2e94-4b14-b8b3-fc4fc3ffa328/daoc64d-4fb367a7-325e-41c4-9099-dce58802d0e3.png/v1/fill/w_396,h_398/my_bitstrips_avatar_bitmoji_style__by_isaiahcontrerasage08_daoc64d-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzk4IiwicGF0aCI6IlwvZlwvMmI2NWNhNmEtMmU5NC00YjE0LWI4YjMtZmM0ZmMzZmZhMzI4XC9kYW9jNjRkLTRmYjM2N2E3LTMyNWUtNDFjNC05MDk5LWRjZTU4ODAyZDBlMy5wbmciLCJ3aWR0aCI6Ijw9Mzk2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WlUKFbAFCUg97h8VSvOogaflSu_m1P5lH0hkYqPWtug",
    name: "Akame",
  },
};

type TabButtonProps = {
  name: string;
  setCurrentTab: () => void;
  isCurrent: boolean;
};
const TabButton = ({ name, setCurrentTab, isCurrent }: TabButtonProps) => {
  const bgColor = isCurrent
    ? "bg-teal-400 hover:bg-teal-500"
    : "bg-white hover:bg-gray-200";
  return (
    <button
      id={`${name + "button"}`}
      onClick={setCurrentTab}
      className={`${bgColor} flex-1 flex-row max-w-sm p-2 bg-white border border-gray-100 rounded-lg shadow dark:bg-white-100 dark:border-white-800 `}
    >
      {name}
    </button>
  );
};
export const Tabdescriptor = () => {
  const [currentTab, setTab] = useState<TabOptions>("jake");
  const names: TabOptions[] = ["jake", "nicki", "akame"];
  return (
    <div className="flex flex-col">
      <div className=" flex max-w-sm p-2 bg-gray-100 border border-gray-100 rounded-lg shadow">
        {names.map((person) => {
          return (
            <TabButton
              name={person}
              setCurrentTab={() => setTab(person)}
              isCurrent={currentTab === person}
            />
          );
        })}
      </div>
      <div className="flex flex-col max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow dark:bg-white-100 dark:border-white-800 dark:hover:bg-white-800">
        <img src={tabDetails[currentTab].imageURL} />
        <div>{tabDetails[currentTab].description}</div>
      </div>
    </div>
  );
};
