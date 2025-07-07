function HeadOfComponent({ title }: { title: string }) {
  return (
    <div className="mt-4 flex justify-between mb-8">
      <h1 className="text-primaryText text-4xl font-semibold ">{title}</h1>
      <p className="text-lg font-semibold">...</p>
    </div>
  );
}

export default HeadOfComponent;
