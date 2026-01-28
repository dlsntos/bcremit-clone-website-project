import Card from "../../../components/ui/Card";
import { supportRoute } from "../../../data/routeData/supportRoute";

function Support() {
  return (
    <div className="px-8 pb-10 md:pb-0">
      <section className="text-start">
        <h1 className="mt-12 max-w-sm text-5xl font-extrabold text-bluewhale">
          Get The Support You Need
        </h1>
        <p className="text-xl text-gray-500">
          Feel free to get in touch. We are happy to assist you.
        </p>
      </section>
      <section className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,300px))] auto-rows-[11rem] md:auto-rows-[15rem] place-content-start gap-10">
        {supportRoute.map((supportCardData) => (
          <Card title={supportCardData.title}
            description={supportCardData.description}
            buttonName={supportCardData.title}
            icon={supportCardData.icon}
          />
        ))}
      </section>
    </div>
  );
}

export default Support;