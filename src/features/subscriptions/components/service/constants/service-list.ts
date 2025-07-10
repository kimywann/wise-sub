import Netflix from "@/assets/logo/ott/Netflix.png";
import Watcha from "@/assets/logo/ott/Watcha.png";

import Melon from "@/assets/logo/music/Melon.png";
import YouTubeMusic from "@/assets/logo/music/YoutubeMusic.png";

import ChatGPT from "@/assets/logo/ai/ChatGPT.png";
import Cursor from "@/assets/logo/ai/Cursor.jpeg";

import BaeminClub from "@/assets/logo/etc/BaeminClub.png";
import RocketWow from "@/assets/logo/etc/RocketWow.png";

export type ServiceCategory = "OTT" | "MUSIC" | "AI" | "ETC";

export interface ServiceItem {
  name: string;
  image: string;
}

export const SERVICES_LIST: Record<ServiceCategory, ServiceItem[]> = {
  OTT: [
    { name: "넷플릭스", image: Netflix },
    { name: "왓챠", image: Watcha },
  ],
  MUSIC: [
    { name: "Melon", image: Melon },
    { name: "유튜브 뮤직", image: YouTubeMusic },
  ],
  AI: [
    { name: "ChatGPT", image: ChatGPT },
    { name: "Cursor", image: Cursor },
  ],
  ETC: [
    { name: "배민클럽", image: BaeminClub },
    { name: "로켓와우", image: RocketWow },
  ],
};
