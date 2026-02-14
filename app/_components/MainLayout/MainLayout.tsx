'use client'

import ImageOverlay from '@/app/_components/ImageOverlay';
import MainImage from '@/app/_components/MainImage';
import { Menu, MenuElement } from './Menu';
import HomePage from '@/app/_pages/HomePage';
import useSectionTracker from './useSectionTracker';
import ApplicationPage from '@/app/_pages/ApplicationPage';
import {
  Home,
  MailCheck,
  CalendarDays,
  Info,
} from "lucide-react";
import SchedulePage from '@/app/_pages/SchedulePage';
import { InfoPage } from '@/app/_pages/InfoPage';

const enum SectionEnum{
    Home = "home",
    Application = "application",
    Schedule = "schedule",
    Information = "information"
}

const iconSize = 25

export const menuElements: MenuElement[] = [
  {
    label: "Kezdőlap",
    href: SectionEnum.Home,
    icon: <Home size={iconSize} />,
  },
  {
    label: "Visszajelzés",
    href: SectionEnum.Application,
    icon: <MailCheck size={iconSize} />,
  },
  {
    label: "Menetrend",
    href: SectionEnum.Schedule,
    icon: <CalendarDays size={iconSize} />,
  },
  {
    label: "Infó",
    href: SectionEnum.Information,
    icon: <Info size={iconSize} />,
  },
];
const currentPageMapper = {
    [SectionEnum.Home]: <HomePage/>,
    [SectionEnum.Application]: <ApplicationPage/>,
    [SectionEnum.Schedule]: <SchedulePage/>,
    [SectionEnum.Information]: <InfoPage />
}

export default function MainLayout() {
    const {section} = useSectionTracker()
    const currentSection = section ?? SectionEnum.Home

    return (
        <div className="relative">
        <Menu elements={menuElements} currentSection={section}/>
        <div className="flex flex-col font-playfair bg-amber-50">
            <div className="w-full h-screen  relative">
                <div className="w-full h-screen relative ">
                    <div className="absolute inset-0 z-0">
                        <MainImage
                        images={["/cover1.jpeg","/cover2.jpeg","/cover3.jpeg","/cover4.jpeg"]}
                        interval={3000}
                        />
                        <ImageOverlay>
                        {currentPageMapper[currentSection]}
                        </ImageOverlay>
                    </div>

                    {/* <div className="absolute inset-0 ">
                        <ImageOverlay>
                        {currentPageMapper[currentSection]}
                        </ImageOverlay>
                    </div> */}
                    </div>
            </div>
            </div>
        </div>
)}