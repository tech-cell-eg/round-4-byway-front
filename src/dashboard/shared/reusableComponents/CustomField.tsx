import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import type { Control, FieldValues, Path } from "react-hook-form";

type Option = {
  label: string;
  value: string;
};

type FieldType = "input" | "textarea" | "select" | "checkbox" | "date";

interface CustomFormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  as?: FieldType;
  options?: Option[];
}

export const CustomFormField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder = "write here",
  as = "input",
  options = [],
}: CustomFormFieldProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={` rounded-md p-4 mb-3 ${
            as === "checkbox" ? "flex gap-4 flex-row" : "bg-white"
          }`}
          // dir={as === "checkbox" ? "rtl" : "ltr"}
        >
          <FormLabel className="text-[#334155e5] text-sm ">{label}</FormLabel>
          <FormControl>
            {as === "input" ? (
              <Input
                {...field}
                placeholder={placeholder}
                className="h-10 border-none"
              />
            ) : as === "textarea" ? (
              <Textarea
                {...field}
                placeholder={placeholder}
                className="resize-none border-none"
              />
            ) : as === "select" ? (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full border-none h-10">
                  <SelectValue placeholder="Choose" />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : as === "checkbox" ? (
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className="-order-1 w-6 h-6 cursor-pointer"
              />
            ) : as === "date" ? (
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={`w-full h-10 rounded-2xl  border border-transparent pl-3 text-center font-normal ${
                        !field.value && "text-muted-foreground"
                      }`}
                    >
                      {field.value ? (
                        format(new Date(field.value), "PPP")
                      ) : (
                        <span>1/1/2025</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 " />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value ? new Date(field.value) : undefined}
                    onSelect={(date) => {
                      if (date) {
                        const formatted = `${date.getFullYear()}-${
                          date.getMonth() + 1
                        }-${date.getDate()}`;
                        field.onChange(formatted);
                      }
                    }}
                  />
                </PopoverContent>
              </Popover>
            ) : null}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
