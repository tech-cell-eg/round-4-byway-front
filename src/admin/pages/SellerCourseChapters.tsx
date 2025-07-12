import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import FileUploader from "../components/FileUploader ";
import ChaptersBtn from "../components/ChaptersBtn";
import Sidebar from "../components/Sidebar";

function SellerCourseChapters() {
    const chapterNum = `Chapter 1`; 
    const chapterTitle = `The Solid State`; 

return (
    <>
        <div className="flex">
            <Sidebar/>
            {/* content */}
            <div className="bg-[#E2E8F0] w-full p-4">
                {/* header */}
                <div className="mb-8 ">
                    {/* <div className="flex gap-3 align-center">
                        <ChevronLeft color="#334155" />
                        <h2 className="text-[18px] font-bold text-[#334155]">{chapterNum} - {chapterTitle}</h2>
                    </div>
                    <div className="flex gap-2 align-center">
                        <input type="button" className="text-white bg-[#DC2626] border rounded-[15px] hover:bg-[#965151] cursor-pointer p-3" value="Delete"/>
                        <input type="button" className="text-black bg-[#ffffff] border rounded-[15px] hover:bg-[#ccc9c9] cursor-pointer p-3" value="Move to Draft"/>
                        <input type="button" className="text-white bg-[#2563EB] border rounded-[15px] hover:bg-[#6178a8] cursor-pointer p-3" value="Add Course"/>
                    </div> */}
                    <ChaptersBtn/>
                </div>
                {/* tabs */}
                <div className="mt-5">
                    <Tabs defaultValue="Details">
                        <TabsList className="">
                            <TabsTrigger value="Details" className="cursor-pointer">Details</TabsTrigger>
                            <TabsTrigger value="Resources" className="cursor-pointer">Resources</TabsTrigger>
                            <TabsTrigger value="SEO" className="cursor-pointer">SEO</TabsTrigger>
                        </TabsList>
                            <div className="bg-[#74747444]  w-full h-[2px]">
                            </div>
                        <TabsContent value="Details" >
                                <div className="p-5 ">
                                        <h2 className="text-[18px] text-grey-900 font-[600]">Chapter details</h2>
                                        <p className="mt-3 text-grey-700 text-[16px] font-[400]">
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                        </p>

                                        <div className="my-4 w-full max-w-3xl text-wrap break-words bg-white p-3 border border-gray-400 rounded-[20px]">
                                            <h4 className="text-grey-700 font-[400] text-[14px]">Title</h4>
                                            <p className="mt-3 text-grey-700 text-[16px] font-[400]">{chapterNum} - {chapterTitle}</p>
                                        </div>

                                        <div className="my-4 w-full max-w-3xl text-wrap break-words bg-white p-3 border border-gray-400 rounded-[20px]">
                                            <h4 className="text-grey-700 font-[400] text-[14px]">Subtitle</h4>
                                            <p className="mt-3 text-grey-700 text-[16px] font-[400]">
                                                Learn about the solid states with ease and get sample papers and notes too!
                                            </p>
                                        </div>

                                        <div className="my-4 w-full max-w-3xl text-wrap break-words bg-white p-3 border border-gray-400 rounded-[20px]">
                                            <h4 className="text-grey-700 font-[400] text-[14px]">Description</h4>
                                            <p className="mt-3 break-words text-grey-700 text-[16px] font-[400]">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat commodi exercitationem hic voluptas illum quae magni. Inventore accusamus earum officia incidunt nemo ad, consequuntur assumenda nulla vel. Iusto, dolorum beatae!
                                            </p>
                                        </div>
                                </div>
                        </TabsContent>

                        <TabsContent value="Resources">  
                                <div className="p-5">
                                        <h2 className="text-[18px] text-grey-900 font-[600]">Upload Notes</h2>
                                        <p className="mt-3 text-grey-700 text-[16px] font-[400]">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>

                                        <div className="my-4 w-full max-w-3xl text-wrap break-words bg-white p-3 border border-gray-400 rounded-[20px]">
                                            <h4 className="text-grey-700 font-[400] text-[14px]">Content Type</h4>
                                            <p className="mt-3 text-grey-700 text-[16px] font-[400]">Notes</p>
                                        </div>

                                        <div className="my-4 w-full max-w-3xl text-wrap break-words bg-white p-3 border border-gray-400 rounded-[20px]">
                                            <h4 className="text-grey-700 font-[400] text-[14px]">Title</h4>
                                            <p className="mt-3 text-grey-700 text-[16px] font-[400]">
                                                Notes
                                            </p>
                                        </div>

                                        <div className="my-4 w-full max-w-3xl text-wrap break-words bg-white p-3 border border-gray-400 rounded-[20px]">
                                            <h4 className="text-grey-700 font-[400] text-[14px]">Description</h4>
                                            <p className="mt-3 break-words text-grey-700 text-[16px] font-[400]">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat commodi exercitationem hic voluptas illum quae magni. Inventore accusamus earum officia incidunt nemo ad, consequuntur assumenda nulla vel. Iusto, dolorum beatae!
                                            </p>
                                        </div>
                                        <h4 className="mt-5 text-grey-700 font-[400] text-[14px]">Upload File</h4>
                                        <div className="">
                                            <FileUploader/>
                                        </div>
                                        <h4 className="mt-5 text-grey-700 font-[400] text-[14px]">Upload File</h4>
                                        <div className="">
                                            <FileUploader/>
                                      </div>
                                </div>

                        </TabsContent>
                        <TabsContent value="SEO">

                                <div className="p-5">
                                        <h2 className="text-[18px] text-grey-900 font-[600]">SEO</h2>
                                        <p className="my-3 text-grey-700 text-[16px] font-[400]">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium distinctio nostrum cupiditate? Quod animi aperiam, ut eveniet, sapiente quasi molestiae dolores inventore modi temporibus optio harum placeat ea dolorem veniam.
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium distinctio nostrum cupiditate? Quod animi aperiam, ut eveniet, sapiente quasi molestiae dolores inventore modi temporibus optio harum placeat ea dolorem veniam.
                                        </p>

                                        <div className="my-4 w-full max-w-3xl text-wrap break-words bg-white p-3 border border-gray-400 rounded-[20px]">
                                            <h4 className="text-grey-700 font-[400] text-[14px]">PPT Title</h4>
                                            <p className="mt-3 text-grey-700 text-[16px] font-[400]">Notes</p>
                                        </div>

                                        <div className="my-4 w-full max-w-3xl text-wrap break-words bg-white p-3 border border-gray-400 rounded-[20px]">
                                            <h4 className="text-grey-700 font-[400] text-[14px]">Description</h4>
                                            <p className="mt-3 break-words text-grey-700 text-[16px] font-[400]">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat commodi exercitationem hic voluptas illum quae magni. Inventore accusamus earum officia incidunt nemo ad, consequuntur assumenda nulla vel. Iusto, dolorum beatae!
                                            </p>
                                        </div>
                                </div>
                        </TabsContent>
                    </Tabs>
                </div>

            </div>
        </div>





    
    </>
)
}

export default SellerCourseChapters