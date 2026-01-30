import { settingsRoute } from "../../../data/cardData/settingsCardData";
import ReferralCard from "./components/ReferralCard";
import SettingsCard from "./components/SettingsCard";
function Settings() {

  return (
    <div className="flex flex-col px-8 pb-10 md:pb-0">
      <section className="text-start">
        <h1 className="mt-12 max-w-sm text-6xl font-bold text-bluewhale">
          Settings
        </h1>
        <p className="text-xl text-gray-500">
          Change your profile and account information
        </p>
      </section>
      <ReferralCard />
      {/*Map the values of the cards later*/}
      <section className="grid grid-cols-1 lg:grid-cols-[repeat(3,minmax(0,450px))] auto-rows-[10rem] md:auto-rows-[8rem] place-content-start mt-5 gap-5">
        {settingsRoute.map((settingsCard) => (
          <SettingsCard
            title={settingsCard.title!}
            description={settingsCard.description!}
            icon={settingsCard.icon}
            onClick={() => { }}
          />
        ))}
      </section>
    </div>
  );
}

export default Settings;