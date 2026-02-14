import { BookHeart } from "lucide-react";
import Section from "../_components/Section";
import { ScheduleItem, ScheduleItemType } from "../_components/Schedule/ScheduleItem";


const schedule: ScheduleItemType[] = [
    {name: "vendégvárás", time: "15:00"},
    {name: "szertartás", time: "16:00"},
    {name: "gratuláció, csoportképek", time: "16:45"},
    {name: "gratuláció, csoportképek", time: "16:45"},
    {name: "vacsora", time: "18:30"},
    {name: "nyitótánc és buli kezdete", time: "20:00"},
    {name: "tortavágás", time: "22:00"},
    {name: "mennyasszonytánc", time: "23:00"}
]

export default function SchedulePage(){
    return (
        <Section
            icon={<BookHeart className="size-8 pt-1" />}
            title="Menetrend"
          >
           {schedule.map(s=><ScheduleItem {...s} key={s.time}/>)}
        </Section>
  )
}