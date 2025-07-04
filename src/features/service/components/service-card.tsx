import { type ServiceItem } from "../constants/service-list";

interface Props {
  service: ServiceItem;
}

export default function ServiceCard({ service }: Props) {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={service.image}
        alt={service.name}
        className="mt-4 h-[4.5rem] w-[4.5rem]"
      />
      <span className="font-medium">{service.name}</span>
    </div>
  );
}
