import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Image } from 'lucide-react';


type FormData = {
  firstName: string;
  lastName: string;
  headline: string;
  description: string;
  language: string;
  website: string;
  twitter: string;
  linkedin: string;
  youtube: string;
  facebook: string;
};

const ProfileContent = ({ onSetProfileImage }: { onSetProfileImage: (url: string) => void }) => {
    const {
    register,
    handleSubmit,
    setValue,
  } = useForm<FormData>();
  const [imagePreview, setImagePreview] = useState<string>("");
// const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const file = e.target.files?.[0];
//   if (file) {
//     setImagePreview(URL.createObjectURL(file));
//   }
// };
const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setImagePreview(base64String);
    };
    reader.readAsDataURL(file);
  }
};

const onSubmit = (data: FormData) => {
  console.log("Saved Data:", { ...data, image: imagePreview });
};

  return (
    <>
<form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex-1  flex-col gap-4 flex"
    >
      {/* Personal Info */}
      <div className="flex flex-col gap-4 w-full max-w-[950px] border border-[#E2E8F0] rounded-2xl p-6 ">
        <div className="flex justify-between xl:flex-row flex-col w-full">
        <div className="flex flex-col gap-1.5">
          <Label>First Name</Label>
          <Input {...register("firstName")} placeholder="Label" className="border border-[#E2E8F0] p-4 gap-2 rounded-lg w-full lg:w-[420px] h-[58px]"/>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Last Name</Label>
          <Input {...register("lastName")} placeholder="Label" className="border border-[#E2E8F0] p-4 gap-2 rounded-lg w-full lg:w-[420px] h-[58px]" />
        </div>
        </div>
        <div className="col-span-2">
            <div className="flex flex-col gap-1.5">
          <Label>Headline</Label>
          <Input {...register("headline")} placeholder="Label" className="border mt-1.5 border-[#E2E8F0] p-4 gap-2 rounded-lg w-full lg:w-[420px] h-[58px]" />
        </div>
        </div>
        <div className="col-span-2 ">
            <div className="flex flex-col gap-1.5">

          <Label>Description</Label>
          <Textarea {...register("description")} placeholder="Label" className="border mt-1.5 border-[#E2E8F0] p-4 gap-2 rounded-lg w-full h-[120px]" />
        </div>
            </div>
        <div className="col-span-2 flex flex-col gap-1.5">
          <Label>Language</Label>
          <Select  onValueChange={(value) => setValue("language", value)} >
            <SelectTrigger   className=" border border-[#E2E8F0] p-4 gap-2 rounded-lg w-full lg:w-[420px] min-h-[58px]">
              <SelectValue placeholder="Label"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="arabic">Arabic</SelectItem>
              <SelectItem value="french">French</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Image Upload */}
      <div className="w-full max-w-[950px] flex flex-col gap-4 border border-[#E2E8F0] rounded-2xl p-6">
        <Label className="text-lg">Image Preview</Label>
        <div className="max-w-[425px] w-full p-4 h-[255px] border-[.62px] border-[#E2E8F0] flex justify-center items-center rounded-2xl ">
        <div className="max-w-[390.48px] w-full h-[223px] bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden ">
          {imagePreview ? (
            <img src={imagePreview} className="w-full h-full object-cover" />
          ) : (
                <Image className="w-[44.6px] h-[44.6px] text-[#FFFFFF]" />
          )}
        </div>
        </div>

        <div className="flex gap-4 flex-col w-full" >
        <Label className="text-lg">Add/Change Image</Label>
        <div className="flex gap-2">
          <Input type="text" placeholder="Label" className="border border-[#E2E8F0] p-4 gap-2 rounded-lg w-full lg:w-[599px] h-[58px] " />
          <Input type="file" accept="image/*" id="imageInput" placeholder="Upload Image" onChange={handleImageChange} className="hidden"/>
          <Button
    type="button"
    onClick={() => document.getElementById("imageInput")?.click()}
    className="w-[141px] h-[58px] border border-[#0F172A] py-2.5 px-6"
  >
    Upload Image
  </Button>
          </div>
        </div>
        {/* <Button type="button" onClick={() => {
    onSetProfileImage(imagePreview);
    localStorage.setItem("profileImage", imagePreview);
  }} className="w-[126px] h-12 bg-[#0F172A] py-2.5 px-6 text-white">Save Image
  </Button> */}
  <Button
  type="button"
  onClick={() => {
    onSetProfileImage(imagePreview);
    localStorage.setItem("profileImage", imagePreview);
  }}
  className="w-[126px] h-12 bg-[#0F172A] py-2.5 px-6 text-white"
>
  Save Image
</Button>

      </div>

      {/* Social Links */}
      <div className="flex flex-col gap-4 w-full max-w-[950px] border border-[#E2E8F0] rounded-2xl p-6 ">
        <Label className="text-lg">Links</Label>

        <div className="space-y-4">
          <div  className="flex flex-col gap-1.5">
            <Label>Website</Label>
            <Input className="border border-[#E2E8F0] p-4 gap-2 rounded-lg w-full  h-[58px]" {...register("website")} placeholder="Label" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>X (Formerly twitter)</Label>
            <Input className="border border-[#E2E8F0] p-4 gap-2 rounded-lg w-full  h-[58px]" {...register("twitter")} placeholder="Label" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>LinkedIn</Label>
            <Input className="border border-[#E2E8F0] p-4 gap-2 rounded-lg w-full  h-[58px]" {...register("linkedin")} placeholder="Label" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>Youtube</Label>
            <Input className="border border-[#E2E8F0] p-4 gap-2 rounded-lg w-full  h-[58px]" {...register("youtube")} placeholder="Label" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>Facebook</Label>
            <Input className="border border-[#E2E8F0] p-4 gap-2 rounded-lg w-full  h-[58px]" {...register("facebook")} placeholder="Label" />
          </div>
        </div>
      </div>
    </form>
    </>
  )
}

export default ProfileContent