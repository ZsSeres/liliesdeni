import { Hotel, Bed, ParkingCircleIcon, Shirt, XCircle } from "lucide-react";
import Section from "../_components/Section";
import InfoElement from "../_components/InfoElement/InfoElement";
import AccommodationCard, { AccommodationCardProps } from "../_components/InfoElement/AccomodationCard";
import Image from "next/image";


const hajmasAccomodation: AccommodationCardProps = {
  name: "Hajmás",
  distance: "helyszínen",
  rooms: 33,
  priceSingle: "27.000 HUF",
  priceDouble: "36.000 HUF",
  imageUrl: "/hajmas.jpg",
  href: "https://www.zselicvolgy.hu/hu/",
  description: "Az ár tartalmazza a büféreggelit (7:30–10:00), a parkolást, a fürdőköntös bekészítést, a korlátlan wellness használatot és az ingyenes Wi-Fi-t."
}

const galosfaAccomodation: AccommodationCardProps = {
  name: "Gálosfa Vendégház",
  distance: "5 km",
  rooms: 24,
  priceSingle: "22.500 HUF",
  priceDouble: "30.000 HUF",
  imageUrl: "/galosfa.jpg",
  href: "https://www.zselicvolgy.hu/hu/",
  description: "A két helyszín között éjfél után óránként ingyenes transzfert biztosítunk."
}

export const InfoPage = () => {
  return (
    <Section
      title="Hasznos tudnivalók"
      className="w-full sm:w-[500px]"
    >
      <InfoElement title="Szállás" icon={<Hotel  color="black"/>}>
        <p>Hogy biztosan lássuk a létszámot és mindenkit el tudjunk szállásolni 
          Hajmáson vagy a Gálosfa Vendégházban,kérjük, 
          március 31-ig jelezzetek vissza nekünk. Szeretnénk segíteni a szervezést azzal, 
          hogy a szobákat előre lefoglaljuk, a szállásdíjat pedig majd mindenki a saját részére, a 
          helyszínen tudja kifizetni. Köszönjük a segítségeteket és a megértéseteket!</p>
      </InfoElement>
      <InfoElement title="Szállás Lehetőségek" icon={<Bed  color="black"/>}>
        <p className="mb-10">A kényelmes pihenés érdekében összesen 57 szoba áll rendelkezésre két helyszínen, 
          így a 100 fős násznép számára teljes körű elhelyezést tudunk biztosítani.</p>
          <div className="mb-5">
            <AccommodationCard {...hajmasAccomodation}/>
          </div>
          <AccommodationCard {...galosfaAccomodation}/>
      </InfoElement>
      <InfoElement title="Parkolás" icon={<ParkingCircleIcon  color="black"/>}>
        <p>A parkolás miatt sem kell aggódnotok: a helyszín saját, tágas parkolóval rendelkezik, 
          amelyet teljesen ingyen és bátran igénybe vehettek az esemény ideje alatt.</p>
      </InfoElement>
      <InfoElement title="Dresscode" icon={<Shirt  color="black"/>}>
        <p className="mb-5">Érkezz nyugodtan bármilyen elegáns öltözékben, amiben jól érzed magad! 
          A hölgyeket arra kérjük, hogy a fehér, piros, fekete és világos bézs színeket ezúttal
          mellőzzék. Szeretnénk, ha az eseményt a pasztellszínek tennék lágyabbá, ezért kérjük, 
          részesítsétek előnyben ezeket az árnyalatokat. Segítségül csatolunk egy képet is, amelyen
          láthatjátok a preferrált színskálát.
        </p>
     <div className="w-full max-w-full h-auto flex justify-center">
        <Image
          src={"/dresscode.jpg"}
          alt={"dresscode"}
          width={500} // or desired max width
          height={300} // optional, maintains aspect ratio
          className="object-contain rounded-t-2xl"
        />
      </div>    
      </InfoElement>
      <InfoElement title="Lemondás" icon={<XCircle  color="black"/>}>
        <p>Alig várjuk, hogy együtt ünnepeljük veletek ezt a különleges napot! Nagyon bízunk benne, hogy mindannyian ott lesztek velünk, és reméljük, hogy végül senkinek nem kell majd lemondania a részvételt. 😊 Ha mégis úgy alakulna, hogy nem tudtok eljönni, kérjük, legkésőbb március 31-ig jelezzétek nekünk a fenti űrlapon.</p>
      </InfoElement>
    </Section>
  );
};