import * as React from "react";
import {
  //   ColumnDef,
  //   ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  //   SortingState,
  useReactTable,
  //   VisibilityState,
} from "@tanstack/react-table";
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";
import { ChevronDown, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    name: "New Offer",
    code: "BOGO22",
    amount: 21,
    status: "Expired",
    date: "7-4-2025",
    expiry: "no",
    limit: "yes",
    quantity: 2,
    products: "phone",
    redemptions: 3,
  },
  {
    id: "3u1reuv4",
    name: "Buy 1 get 1",
    code: "BOGO22",
    amount: 21,
    status: "Draft",
    date: "7-4-2025",
    expiry: "no",
    limit: "yes",
    quantity: 2,
    products: "phone",
    redemptions: 3,
  },
  {
    id: "derv1ws0",
    name: "Summer Sale",
    code: "BOGO22",
    amount: 21,
    status: "Active",
    date: "7-4-2025",
    expiry: "no",
    limit: "yes",
    quantity: 2,
    products: "phone",
    redemptions: 3,
  },
  {
    id: "5kma53ae",
    name: "Offer",
    code: "BOGO22",
    amount: 21,
    status: "Active",
    date: "7-4-2025",
    expiry: "no",
    limit: "yes",
    quantity: 2,
    products: "phone",
    redemptions: 3,
  },
  {
    id: "m5gr84i9",
    name: "New Offer",
    code: "BOGO22",
    amount: 21,
    status: "Scheduled",
    date: "7-4-2025",
    expiry: "no",
    limit: "yes",
    quantity: 2,
    products: "phone",
    redemptions: 3,
  },
];

export type Payment = {
  id?: string;
  name: string;
  code: string;
  amount: number;
  status: "Expired" | "Draft" | "Active" | "Scheduled";
  date: string;
  expiry: string;
  limit: string;
  quantity: number;
  products: string;
  redemptions: number;
};
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "code",
    header: "Code",
    cell: ({ row }) => <div className="capitalize">{row.getValue("code")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div
        className={`capitalize ${
          row.getValue("status") === "Expired"
            ? "text-[#DC2626]"
            : row.getValue("status") === "Draft"
            ? "text-[#64748B]"
            : row.getValue("status") === "Active"
            ? "text-[#27AE60]"
            : "text-[#3B82F6]"
        }`}
      >
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: "Start Date",
    cell: ({ row }) => <div className="capitalize">{row.getValue("date")}</div>,
  },
  {
    accessorKey: "expiry",
    header: "Expiry",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("expiry")}</div>
    ),
  },
  {
    accessorKey: "limit",
    header: "Limit",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("limit")}</div>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Qty",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("quantity")}</div>
    ),
  },
  {
    accessorKey: "products",
    header: "Products",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("products")}</div>
    ),
  },
  {
    accessorKey: "redemptions",
    header: "Redemptions",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("redemptions")}</div>
    ),
  },
];

export function ReuseTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full bg-[#E2E8F061] p-5">
      <div className="flex items-center p-4">
        <div className="bg-white flex items-center p-1.5 border border-[#E2E8F0] rounded-md text-[#334155]">
          <Input
            placeholder="Search User"
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm border-none shadow-none"
          />
          <Search />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="link" className="ml-auto text-black">
              Filter <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="bg-white px-4 text-[#334155]">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-[#334155] p-4">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="p-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredRowModel().rows.length} results
        </div>
        <div className="space-x-2  text-black">
          <Button
          className="text-black cursor-pointer"
            variant="link"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            className="text-black cursor-pointer"
            variant="link"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
