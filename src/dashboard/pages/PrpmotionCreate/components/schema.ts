import z from "zod";

export const formSchema = z.object({
  status: z.string().nonempty(),
  name: z.string().nonempty(),
  description: z.string().nonempty(),
  customer: z.string().nonempty(),
  category: z.string().nonempty(),
  code: z.string().nonempty(),
  autoCheck: z.boolean().optional(),
  quantity: z.string().nonempty(),
  perUse: z.string().nonempty(),
  priority: z.string().nonempty(),
  actions: z.string().nonempty(),
  discount: z.string().nonempty(),
  amount: z.string().nonempty(),
  startTime:z.string().nonempty(),
  endTime:z.string().nonempty(),
  startDate:z.string().nonempty(),
  endDate:z.string().nonempty(),
});
