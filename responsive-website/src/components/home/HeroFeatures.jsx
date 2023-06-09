import React from "react";
import secureIll from "../../assets/images/secure.svg";
import devicesIll from "../../assets/images/devices.svg";
import fastIll from "../../assets/images/fast.svg";
import locationIll from "../../assets/images/location.svg";

const FeatureCard = ({ feature, columnClass }) => {
  const { icon, title, description } = feature;

  return (
    <div className=" grid grid-cols-2 p-10 my-10 place-items-center text-black bg-white rounded-2xl">
      <div className={` row-span-3 ${columnClass}`}>
        <h3 className="text-2xl font-bold my-6">{title}</h3>
        <p className="text-lg leading-relaxed ">{description}</p>
      </div>
      <div className="">
        <img src={icon} alt={title} className=" h-60 row-span-2 " />
      </div>
    </div>
  );
};

const features = [
  {
    icon: devicesIll,
    title: "Protect all your devices",
    description:
      "With NordVPN, you can surf securely and privately on all popular platforms, devices, and browsers. There is a NordVPN app for Windows, macOS, iOS, Android, Linux, and Android TV. There are also encrypted proxy extensions for Chrome, Firefox, and Edge. With one NordVPN account, you can secure up to 6 devices at once. NordVPN is the top VPN provider for all your devices. Try our risk-free VPN now with a 30-day money-back guarantee.",
  },
  {
    icon: secureIll,
    title: "Access the Internet securely and privately",
    description:
      "A good online VPN service provides you with a secure, encrypted tunnel through which your online traffic can flow safely. This way, no one can see your online data or find out your real IP address and location. NordVPN is the best VPN service if you connect to insecure public Wi-Fi networks. Thanks to VPN, you can safely access your personal data as well as your work files. Besides, while surfing, your privacy will be preserved and no one will be able to see what you are doing online. Still not enough? Here you can find additional VPN benefits that our apps offer you.",
  },
  {
    icon: fastIll,
    title: "Fast and stable VPN connection - no matter where you are",
    description:
      "Buffering is the ultimate buzzkill, as streaming or downloading files with a slow internet connection is simply no fun. But don't worry - NordVPN is the solution. Our VPN offers an unbeatable combination of strong security, high connection speed and unlimited bandwidth. Choose from over 5700 NordVPN servers in 60 countries and enjoy the fastest VPN experience in the world - in Germany, Austria or Switzerland. Thousands of VPN servers ensure that your internet connection doesn't suffer. So turn on the VPN, access websites, download files, stream videos and enjoy a fast connection.",
  },
  {
    icon: locationIll,
    title: "Our feature protects you from ads, trackers and malware",
    description:
      "Mit dem Bedrohungsschutz von NordVPN kannst du dich online jetzt noch umfassender schützen. Du musst dich nicht mit einem VPN-Server verbinden, damit das Feature funktioniert. Sobald du die Funktion in den Einstellungen aktiviert hast, macht der Bedrohungsschutz dein Online-Leben sicherer, schneller und reibungsloser. Der Bedrohungsschutz neutralisiert Cyberbedrohungen, bevor sie deinem Gerät oder deinen Daten wirklich schaden können. Er blockiert schädliche Webseiten, Werbung und Online-Tracker. Außerdem scannt die Funktion Download-Dateien auf Viren, die bei Entdeckung gelöscht werden.",
  },
];

const HeroFeatures = () => {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <div className="">
        <div className="flex flex-col gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              columnClass={`col-start-${index % 2 === 0 ? 2 : 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroFeatures;
