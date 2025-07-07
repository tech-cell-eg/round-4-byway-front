import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpDown, ChevronUp, ChevronDown } from "lucide-react";
import React, { useState } from "react";

type Customer = {
  id: number;
  name: string;
  type: "Student" | "Teacher";
  country: string;
  joined: string;
  amount: string;
  order: string;
};

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Customer" },
  { key: "type", label: "Type" },
  { key: "country", label: "Country" },
  { key: "joined", label: "Joined" },
  { key: "amount", label: "Total Amount" },
  { key: "order", label: "Last Order" },
];

const customers: Customer[] = [
  {
    id: 1,
    name: "Ronald Richards",
    type: "Student",
    country: "India",
    joined: "15 May 2020 8:00 am",
    amount: "$500.00",
    order: "12542",
  },
  {
    id: 2,
    name: "Darlene Robertson",
    type: "Student",
    country: "India",
    joined: "15 May 2020 8:30 am",
    amount: "$500.00",
    order: "46540",
  },
  {
    id: 3,
    name: "Jerome Bell",
    type: "Teacher",
    country: "Sri Lanka",
    joined: "15 May 2020 9:30 am",
    amount: "$500.00",
    order: "68745",
  },
  {
    id: 4,
    name: "Kristin Watson",
    type: "Student",
    country: "India",
    joined: "15 May 2020 8:00 am",
    amount: "$500.00",
    order: "34475",
  },
  {
    id: 5,
    name: "Bessie Cooper",
    type: "Teacher",
    country: "Sri Lanka",
    joined: "15 May 2020 9:00 am",
    amount: "$500.00",
    order: "72145",
  },
  {
    id: 6,
    name: "Cameron Williamson",
    type: "Student",
    country: "India",
    joined: "15 May 2020 8:30 am",
    amount: "$500.00",
    order: "97451",
  },
];

const CourseCustomer: React.FC = () => {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Customer;
    direction: "asc" | "desc";
  } | null>(null);

  const sortedCustomers = [...customers].sort((a, b) => {
    if (!sortConfig) return 0;

    const key = sortConfig.key;
    if (a[key] < b[key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[key] > b[key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key: keyof Customer) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        NCERT Solutions for Class 12 Chemistry
      </h2>
      <div className="w-full overflow-x-auto">
        <Table className="min-w-[800px]">
          <TableHeader>
            <TableRow>
              {columns.map((col) => (
                <TableHead
                  key={col.key}
                  className="text-gray-900 whitespace-nowrap"
                >
                  <div
                    className="flex items-center gap-1 cursor-pointer hover:text-gray-700"
                    onClick={() => requestSort(col.key as keyof Customer)}
                  >
                    {col.label}
                    {sortConfig?.key === col.key ? (
                      sortConfig.direction === "asc" ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )
                    ) : (
                      <ArrowUpDown className="h-4 w-4 opacity-50" />
                    )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.type}</TableCell>
                <TableCell>{customer.country}</TableCell>
                <TableCell>{customer.joined}</TableCell>
                <TableCell>{customer.amount}</TableCell>
                <TableCell>{customer.order}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Pagination Will Go Here*/}
    </div>
  );
};

export default CourseCustomer;
