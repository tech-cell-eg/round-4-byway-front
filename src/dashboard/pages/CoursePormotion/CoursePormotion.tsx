import HeadOfComponent from "@/dashboard/shared/reusableComponents/HeadOfComponent";
import ListTabs from "@/dashboard/shared/reusableComponents/ListTabs";
import { useState } from "react";
import Promotion from "../Promotion/Promotion";

function CoursePoromotion() {
  let items = [
    {
      title: "Commission",
      typeTab: "commission",
    },
    {
      title: "Reviews",
      typeTab: "reviews",
    },
    {
      title: "Customer",
      typeTab: "customer",
    },
    {
      title: "Chapters",
      typeTab: "chapters",
    },
    {
      title: "Promotion",
      typeTab: "promotion",
    },
    {
      title: "Detail",
      typeTab: "detail",
    },
    {
      title: "Settings",
      typeTab: "settings",
    },
  ];
  let [currentType, setCurrentType] = useState("");

  return (
    <div className="container px-4 2xl:px-20 mx-auto">
      <HeadOfComponent title="NCERT Solutions for Class 12 Chemistry" />
      <ListTabs
        tabs={items}
        setType={(type) => setCurrentType(type)}
        deefaultTabActiv="commission"
      />
      {currentType === "promotion" ? <Promotion /> : null}
    </div>
  );
}

export default CoursePoromotion;
