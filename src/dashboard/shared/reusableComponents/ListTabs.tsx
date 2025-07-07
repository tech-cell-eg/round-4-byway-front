import { useState } from "react";
import type { Tabs } from "../types/types";
import "@/dashboard/shared/style/sharedStyle.scss";

interface ListProps {
  deefaultTabActiv: string;
  tabs: Tabs[];
  setType: (type: string) => void;
}

export default function ListTabs({
  tabs,
  setType,
  deefaultTabActiv,
}: ListProps) {
  const [show, setShow] = useState<string>(deefaultTabActiv);

  return (
    <div>
      <ul className="listTabs">
        {tabs.map((tab) => (
          <li
            key={tab.typeTab}
            onClick={() => {
              setShow(tab.typeTab);
              setType(tab.typeTab);
            }}
            className={`${show === tab.typeTab ? "active" : ""}`}
          >
            {tab.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
