const SectionHeader = ({ icon: Icon, title, count, iconBgColor = 'bg-orange-600' }) => {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className={`w-8 h-8 ${iconBgColor} rounded-full flex items-center justify-center`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      {count && (
        <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
          {count} New
        </div>
      )}
    </div>
  );
};

export default SectionHeader;