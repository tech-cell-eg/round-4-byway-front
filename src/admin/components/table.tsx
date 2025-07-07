import {
  Table as UITable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const orders = [
  {
    orderId: "#254841",
    customer: "Dianne Russell",
    type: "Student",
    date: "25 Jan 2022",
    status: "Received",
    commission: "95.00",
  },
  {
    orderId: "#254841",
    customer: "Bessie Cooper",
    type: "Teacher",
    date: "25 Jan 2022",
    status: "Pending",
    commission: "95.00",
  },
  {
    orderId: "#254841",
    customer: "Cameron Williamson",
    type: "Student",
    date: "25 Jan 2022",
    status: "Received",
    commission: "95.00",
  },
  {
    orderId: "#254841",
    customer: "Kathryn Murphy",
    type: "Teacher",
    date: "25 Jan 2022",
    status: "Received",
    commission: "95.00",
  },
  {
    orderId: "#254841",
    customer: "Theresa Webb",
    type: "Teacher",
    date: "25 Jan 2022",
    status: "Received",
    commission: "95.00",
  },
  {
    orderId: "#254841",
    customer: "Guy Hawkins",
    type: "Student",
    date: "25 Jan 2022",
    status: "Received",
    commission: "95.00",
  },
  {
    orderId: "#254841",
    customer: "Cody Fisher",
    type: "Student",
    date: "25 Jan 2022",
    status: "Received",
    commission: "95.00",
  },
  {
    orderId: "#254841",
    customer: "Savannah Nguyen",
    type: "Student",
    date: "25 Jan 2022",
    status: "Pending",
    commission: "95.00",
  },
  {
    orderId: "#254841",
    customer: "Leslie Alexander",
    type: "Student",
    date: "25 Jan 2022",
    status: "Received",
    commission: "95.00",
  },
  {
    orderId: "#254841",
    customer: "Floyd Miles",
    type: "Teacher",
    date: "25 Jan 2022",
    status: "Received",
    commission: "95.00",
  },
  {
    orderId: "#254841",
    customer: "Courtney Henry",
    type: "Student",
    date: "25 Jan 2022",
    status: "Received",
    commission: "95.00",
  },
];

export function Table() {
  return (
    <UITable className="overflow-scroll-x" >
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Commission</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order, index) => (
          <TableRow key={index}>
            <TableCell>{order.orderId}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>{order.type}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>
              <span
                className={`font-medium ${
                  order.status === "Received"
                    ? "text-green-600"
                    : "text-yellow-500"
                }`}
              >
                {order.status}
              </span>
            </TableCell>
            <TableCell className="text-right">{order.commission}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </UITable>
  );
}
