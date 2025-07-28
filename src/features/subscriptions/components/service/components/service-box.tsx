import { SERVICES_LIST, type ServiceItem } from "../constants/service-list";
import ServiceCard from "./service-card";

import { useUser } from "@supabase/auth-helpers-react";
import { addSubscription } from "../../api/add-subscription";

export default function ServiceBox() {
  const user = useUser();

  const addBoxClick = async (service: ServiceItem) => {
    if (!user) {
      alert("로그인 후 이용해주세요!");
      return;
    }

    try {
      await addSubscription(user.id, service);
      alert(`${service.name} 서비스가 추가되었습니다.`);
    } catch (error) {
      console.error("추가 실패:", error);
      alert("구독 추가에 실패했습니다.");
    }
  };

  return (
    <div className="mt-5">
      {Object.entries(SERVICES_LIST).map(([category, services]) => (
        <div key={category}>
          <p className="mb-2 text-lg font-semibold">{category}</p>

          <div className="mb-5 flex gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex h-30 w-30 cursor-pointer flex-col rounded-2xl border border-slate-300 hover:border-indigo-500 hover:shadow-md"
                onClick={() => addBoxClick(service)}
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
