import { Separator } from "@radix-ui/react-separator"

export type ScheduleItemType = {
    name: string
    time: string
}

export const ScheduleItem = ({name, time}: ScheduleItemType) => {
    return (
        <>
            <Separator
              orientation="vertical"
              className="w-0.5 h-7 mt-2 bg-black rounded-sm"
            />
            <div className="flex flex-col items-center my-3">
              <p className="text-2xl text-kombu-black">{name}</p>
              <p className="text-camouflage-black text-xl">{time}</p>
            </div>
        </>
    )
}