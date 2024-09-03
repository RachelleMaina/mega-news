const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center">
      <div className="h-3 w-1 bg-brand rounded-full mr-2"></div>
      <h2 className="text-xl font-medium">{title}</h2>
    </div>
  );
};
export default Title;
