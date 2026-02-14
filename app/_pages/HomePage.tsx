import { CalendarHeart, MapPinned } from "lucide-react"
import Counter from "../_components/Home/Counter"
import { getFormattedWeddingDate, weddingPlace } from "../_components/consts"


const weddingPlaceUrl = "https://share.google/28OH8WFaQSsDrKdKZ"

export default function HomePage() {
    return ( <div className="flex flex-col items-center justify-center h-screen">
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-[42px] sm:text-6xl font-playfair font-normal">
        Lili és Deni
      </h1>
      <h2 className="font-libre text-xl font-medium italic">
        Közeledik az esküvőnk napja...
      </h2>
    </div>

    {/* Counter + pills */}
    <div className="flex flex-col items-center gap-3">
      <Counter />

      <div className="flex flex-col items-center gap-2">
        {/* Date pill */}
        <div className="flex items-center gap-2 px-4 py-1.5">
          <CalendarHeart />
          <span className="font-libre italic font-medium text-lg text-white">
            {getFormattedWeddingDate()}
          </span>
        </div>

        {/* Location pill */}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            weddingPlace
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2 px-4 py-2 rounded-full border border-white
            bg-white/10 hover:bg-white/20 transition-colors duration-200
            cursor-pointer
          "
        >
        <MapPinned className="text-white" />
        <span className="font-libre italic font-medium text-lg text-white underline">
          {weddingPlace}
        </span>
        </a>
      </div>
    </div>
    </div>)
}