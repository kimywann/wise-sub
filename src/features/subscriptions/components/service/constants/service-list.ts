import Netflix from "@/assets/logo/ott/Netflix.png";
import Disney from "@/assets/logo/ott/Disney.png";
import Tving from "@/assets/logo/ott/Tving.png";
import Watcha from "@/assets/logo/ott/Watcha.png";
import Laftel from "@/assets/logo/ott/Laftel.png";
import Wavve from "@/assets/logo/ott/Wavve.png";

import YouTubeMusic from "@/assets/logo/music/YoutubeMusic.png";
import AppleMusic from "@/assets/logo/music/AppleMusic.jpeg";
import Melon from "@/assets/logo/music/Melon.png";
import Spotify from "@/assets/logo/music/Spotify.png";
import Genie from "@/assets/logo/music/Genie.png";
import VIBE from "@/assets/logo/music/VIBE.jpeg";

import ChatGPT from "@/assets/logo/ai/ChatGPT.png";
import Gemini from "@/assets/logo/ai/Gemini.png";
import Cursor from "@/assets/logo/ai/Cursor.jpeg";
import Claude from "@/assets/logo/ai/Claude.png";
import Copilot from "@/assets/logo/ai/Copilot.jpeg";
import Perplexity from "@/assets/logo/ai/Perplexity.jpeg";

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
    { name: "티빙", image: Tving },
    { name: "디즈니+", image: Disney },
    { name: "라프텔", image: Laftel },
    { name: "왓챠", image: Watcha },
    { name: "웨이브", image: Wavve },
  ],
  MUSIC: [
    { name: "유튜브 뮤직", image: YouTubeMusic },
    { name: "Apple Music", image: AppleMusic },
    { name: "Melon", image: Melon },
    { name: "Spotify", image: Spotify },
    { name: "Genie", image: Genie },
    { name: "VIBE", image: VIBE },
  ],
  AI: [
    { name: "ChatGPT", image: ChatGPT },
    { name: "Claude", image: Claude },
    { name: "Gemini", image: Gemini },
    { name: "Perplexity", image: Perplexity },
    { name: "Cursor", image: Cursor },
    { name: "Copilot", image: Copilot },
  ],
  ETC: [
    { name: "배민클럽", image: BaeminClub },
    { name: "로켓와우", image: RocketWow },
  ],
};
