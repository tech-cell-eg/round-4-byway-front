import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { ArrowUpDown } from "lucide-react";
import { useEffect, useState } from "react";
import ChaptersBtn from "./ChaptersBtn";

type DataRow = {
  id: number;
  chapter: number;
  title: string;
  type: string;
  date: string;
  status: string;
  price: string;
};

export default function TableComponent() {
  const [data, setData] = useState<DataRow[]>([]);
  const [sortedField, setSortedField] = useState<keyof DataRow | null>(null);
  const [asc, setAsc] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => {
        const mapped: DataRow[] = products.map((item: any) => ({
          id: item.id,
          chapter: item.rating?.count || 1,
          title: item.title,
          type: item.category?.toUpperCase() || "PDF",
          date: "15 May 2020 9:00 am",
          status: item.price < 50 ? "Publish" : "Draft",
          price: `$${item.price}`,
        }));
        setData(mapped);
      });
  }, []);

  const sortData = (field: keyof DataRow) => {
    if (sortedField === field) {
      setAsc(!asc);
    } else {
      setSortedField(field);
      setAsc(true);
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortedField) return 0;
    const valA = a[sortedField];
    const valB = b[sortedField];

    if (typeof valA === "number" && typeof valB === "number") {
      return asc ? valA - valB : valB - valA;
    }
    return asc
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA));
  });

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const currentData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderHeader = (label: string, field: keyof DataRow) => {
    const isActive = sortedField === field;

    return (
      <TableHead
        onClick={() => sortData(field)}
        className="cursor-pointer select-none"
      >
        <div className="flex items-center gap-1">
          {label}
          <ArrowUpDown
            className={`h-4 w-4 transition-all ${
              isActive ? "text-black" : "text-gray-400"
            }`}
          />
        </div>
      </TableHead>
    );
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="container mx-auto w-[85%]  flex flex-col gap-4 ">
        <ChaptersBtn/>

        <Table className="bg-white rounded-lg">
          <TableHeader>
            <TableRow className="text-[#0F172A] text-sm">
              {renderHeader("ID", "id")}
              {renderHeader("Chapter", "chapter")}
              {renderHeader("Title", "title")}
              {renderHeader("Type", "type")}
              {renderHeader("Date", "date")}
              {renderHeader("Status", "status")}
              {renderHeader("Price", "price")}
            </TableRow>
          </TableHeader>
          <TableBody className="text-[#0F172A] text-sm">
            {currentData.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="py-3">{row.id}</TableCell>
                <TableCell className="py-3">{row.chapter}</TableCell>
                <TableCell className="py-3">
                  {row.title.split(" ").slice(0, 5).join(" ")}
                  {row.title.split(" ").length > 5 ? "..." : ""}
                </TableCell>
                <TableCell className="py-3">{row.type}</TableCell>
                <TableCell className="py-3">{row.date}</TableCell>
                <TableCell className="py-3">{row.status}</TableCell>
                <TableCell className="py-3">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-center mt-6">
        <div className="inline-flex bg-white rounded-md shadow-md overflow-hidden">
          <button
            className="px-4 py-2 border-r text-gray-500 hover:bg-gray-100 disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 border-r last:border-r-0 text-sm font-medium ${
                currentPage === i + 1
                  ? "bg-gray-100 text-black"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="px-4 py-2 text-gray-500 hover:bg-gray-100 disabled:opacity-50"
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
