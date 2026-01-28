interface SettingsCardProps {
  icon: React.ReactNode,
  title: string,
  description: string,
  onClick: () => void;
};
function SettingsCard({ icon, title, description, onClick }: SettingsCardProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col md:flex-row justify-between px-5 py-5 md:py-2 w-full gap-2 cursor-pointer rounded-sm transition duration-300 hover:scale-105 hover:shadow-lg"
    >
      <div className="flex items-center h-10 w-10 px-2 text-white bg-blue-500 rounded-md">
        {icon}
      </div>
      <div className="w-full text-left">
        <h2 className="text-bluewhale text-xl font-semibold">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default SettingsCard;