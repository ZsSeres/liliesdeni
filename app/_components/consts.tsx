import { MenuElement } from "./MainLayout/Menu";
import { ScheduleItem } from "./Schedule";

const weddingDate = new Date('2026-05-16T16:00:00'); // TODO: double check time

export const weddingPlace = "Zselic Völgye"

export const getRemainingTimeInSeconds = () =>
  Math.floor((weddingDate.getTime() - Date.now()) / 1000);


export const getFormattedWeddingDate = () => {
  return new Intl.DateTimeFormat('hu-HU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(weddingDate);
}

export const schedule: ScheduleItem[] = [
  {
    id: 0,
    title: "Vendégvárás", 
    hour: "15:00",
    content: <>blalbla</>,
    imageSrc: "schedule-item1-placeholder.jpg"
  },
  {
    id: 1,
    title: "Szertartás", 
    hour: "16:00",
    content: <>blabla</>,
    imageSrc: "schedule-item1-placeholder.jpg"
  }
] 


export const menuElements: MenuElement[] = [
  {label: "Visszajelzés", href: "#form"},
  {label: "Menetrend", href: "#schedule"},
  {label: "Infó", href: "#information"}
] 