import { SERVICES_LIST } from "../constants/service-list";
import ServiceCard from "./service-card";

export default function ServiceBox() {
  return (
    <div className="mt-5">
      {Object.entries(SERVICES_LIST).map(([category, services]) => (
        <div key={category}>
          <p className="mb-2 text-lg font-semibold">{category}</p>

          <div className="mb-5 flex gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex h-30 w-30 cursor-pointer flex-col rounded-2xl border border-slate-300 hover:border-indigo-500"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
