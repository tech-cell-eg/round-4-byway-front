import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { formSchema } from "./schema";
import { CustomFormField } from "@/dashboard/shared/reusableComponents/CustomField";

export function FormPormotion() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      status: "",
      name: "",
      description: "",
      customer: "",
      category: "",
      code: "",
      autoCheck: false,
      quantity: "",
      perUse: "",
      priority: "",
      actions: "",
      discount: "",
      amount: "",
      startTime: "",
      endTime: "",
      startDate: "",
      endDate: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-4 bg-[#E2E8F061]"
      >
        <div>
          <p className="text-[#334155] font-medium mb-3">Coupon Information</p>
          <CustomFormField
            name="status"
            label="Coupon Status"
            as="select"
            control={form.control}
            options={[
              { label: "Active", value: "active" },
              { label: "draft", value: "Draft" },
              { label: "Scheduled", value: "scheduled" },
              { label: "Expired", value: "expired" },
            ]}
          />
          <CustomFormField
            name="name"
            label="Coupon Name"
            control={form.control}
          />
          <CustomFormField
            name="description"
            label="Description"
            as="textarea"
            control={form.control}
          />
          <CustomFormField
            name="customer"
            label="Customer Group"
            as="select"
            control={form.control}
            options={[
              { label: "General", value: "general" },
              { label: "Private", value: "private" },
            ]}
          />
        </div>
        <div className="mt-6">
          <p className="text-[#334155] font-medium mb-3">Coupon Code</p>
          <CustomFormField
            name="category"
            label="Coupon Category"
            as="select"
            control={form.control}
            options={[
              { label: "Specific Coupon", value: "specific" },
              { label: "Double Coupon", value: "double" },
            ]}
          />
          <CustomFormField
            name="code"
            label="Coupon Code"
            control={form.control}
          />
          <CustomFormField
            name="autoCheck"
            label="Use auto generation"
            as="checkbox"
            control={form.control}
          />
          <CustomFormField
            name="quantity"
            label="Coupon Quantity"
            control={form.control}
          />
          <CustomFormField
            name="perUse"
            label="Uses per customer"
            control={form.control}
          />
          <CustomFormField
            name="priority"
            label="Priority"
            control={form.control}
          />
          <CustomFormField
            name="actions"
            label="Actions"
            as="select"
            control={form.control}
            options={[
              {
                label: "Fixed Amount of discount for whole cart",
                value: "fixed",
              },
            ]}
          />
          <CustomFormField
            name="discount"
            label="Select Discount Type"
            as="select"
            control={form.control}
            options={[{ label: "Amount", value: "amount" }]}
          />
          <CustomFormField
            name="amount"
            label="Enter Discount Amount"
            as="select"
            control={form.control}
            options={[
              { label: "$10", value: "10" },
              { label: "$20", value: "20" },
            ]}
          />
        </div>
        <div className="mt-6">
          <p className="text-[#334155] font-medium mb-3">Date & Time</p>
         <div className="flex gap-5">
         <div className="flex-1">
            <CustomFormField
              name="startDate"
              label="Starting Date"
              as="date"
              control={form.control}
            />
            <CustomFormField
              name="endDate"
              label="Starting Date"
              as="date"
              control={form.control}
            />
          </div>
          <div className="flex-1">
            <CustomFormField
              name="startTime"
              label="Starting Time"
              as="select"
              control={form.control}
              options={[
                { label: "10:30 AM", value: "10.30" },
                { label: "12:30 BM", value: "12.30" },
              ]}
            />
            <CustomFormField
              name="endTime"
              label="Ending Time"
              as="select"
              control={form.control}
              options={[
                { label: "10:30 AM", value: "10.30" },
                { label: "12:30 BM", value: "12.30" },
              ]}
            />
          </div>
         </div>
        </div>
        <div className="flex gap-4 absolute top-[4px] right-[16px]">
          <Button className="min-w-[80px] cursor-pointer rounded-md h-12 bg-white text-[#0F172A] border border-[#E2E8F0]">
            Draft
          </Button>
          <Button
            type="submit"
            className="min-w-[80px] cursor-pointer rounded-md h-12 bg-[#16A34A] text-white"
          >
            Save
          </Button>
          <Button className="min-w-[80px] cursor-pointer rounded-md h-12 bg-[#3B82F6] text-white">
            Publish
          </Button>
        </div>
      </form>
    </Form>
  );
}
