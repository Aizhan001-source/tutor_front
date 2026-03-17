type MetricCardProps = {
  title: string;
  value: string;
  color: string;   
  imgSrc: string;
};

const MetricCard = ({ title, value, color, imgSrc }: MetricCardProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-start">
      
      <div className={`w-12 h-12 rounded-3xl ${color} flex items-center justify-center`}>
        <img src={imgSrc} alt={title} className="w-8 h-8 object-cover" />
        </div>

      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
    </div>
  );
};

export default MetricCard;