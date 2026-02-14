import { CalendarHeart } from "lucide-react";
import ApplicationForm from "../_components/application/ApplicationForm";
import Section from "../_components/Section";

export default function ApplicationPage(){
    return (
        <div >
        <Section
            icon={<CalendarHeart className="size-8 pt-1" />}            
            title="Visszajelzés"
          >
            <div className="flex flex-col gap-6 sm:max-w-[400px] text-black">
              <p>
                Kérjük, részvételi szándékod az alábbi űrlap kitöltésével jelezd 2026. március 1-ig!
              </p>
              <ApplicationForm />
            </div>
        </Section>
        </div>)
}