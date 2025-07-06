import { BsThreeDots } from "react-icons/bs";

const ProfileTracker = () => {
  const icons = [
    {
      iconName: "Figma",
      src: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    },
    {
      iconName: "Trello",
      src: "https://cdn-icons-png.flaticon.com/512/174/174874.png",
    },
    {
      iconName: "Slack",
      src: "https://w7.pngwing.com/pngs/345/302/png-transparent-chat-slack-slack-logo-social-media-icon-thumbnail.png",
    },
  ];

  return (
    <div className="h-1/4 rounded-3xl bg-[#e1e3e7] px-[2.5rem] py-[1rem] flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <span className="font-bold text-lg">Trackers Connected</span>
        <span className="font-semibold text-gray-400">3 active connection</span>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center space-x-[-10px]">
          {icons.map((icon, id) => (
            <div key={id} className="bg-white rounded-full p-2 shadow w-10 h-10 flex items-center justify-center">
              <img
                src={icon.src}
                alt={icon.iconName}
                className="w-full h-full objet-cover"
              />
            </div>
          ))}
        </div>
        <div className="cursor-pointer">
          <BsThreeDots size={20} color="#929498" />
        </div>
      </div>
    </div>
  );
};

export default ProfileTracker;
