import { BookHeart } from "lucide-react";
import Section from "../_components/Section";
import { ScheduleItem, ScheduleItemType } from "../_components/Schedule/ScheduleItem";


const schedule: ScheduleItemType[] = [
    {name: "vendégvárás", time: "15:00"},
    {name: "szertartás", time: "16:00"},
    {name: "gratuláció, csoportképek", time: "16:45"},
    {name: "vacsora", time: "19:00"},
    {name: "tortavágás", time: "20:30"},
    {name: "nyitótánc", time: "21:30"},
    {name: "buli kezdete", time: "21:45"}
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