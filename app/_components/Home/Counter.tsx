'use client';
import { getRemainingTimeInSeconds } from '@/app/_components/consts';
import { ComponentProps, FC, useEffect, useMemo, useState } from 'react';
import SlotCounter from 'react-slot-counter';


const CounterElement = ({remainingUnits,label,props, displayDots=true}: {remainingUnits: string, label: string, props: Omit<ComponentProps<typeof SlotCounter>, 'value'>, displayDots?: boolean}) => {
  return (
    <>
      <div className="flex flex-col items-center gap-2">
          <SlotCounter value={remainingUnits} {...props} />
          <span className="text-sm">{label}</span>
        </div>
      {displayDots && <span className="mb-10 px-2.5">:</span>}
    </>
  ) 
}

const Counter: FC = () => {
  const [remainingTimeInSeconds, setRemainingTime] = useState(getRemainingTimeInSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { remainingDays, remainingHours, remainingMinutes, remainingSeconds } = useMemo(() => {
    return Object.entries({
      remainingDays: Math.floor(remainingTimeInSeconds / 86400),
      remainingHours: Math.floor((remainingTimeInSeconds % 86400) / 3600),
      remainingMinutes: Math.floor((remainingTimeInSeconds % 3600) / 60),
      remainingSeconds: remainingTimeInSeconds % 60,
    }).reduce(
      (acc, [key, value]) => {
        acc[key] = value.toString().padStart(2, '0');
        return acc;
      },
      {} as Record<string, string>
    );
  }, [remainingTimeInSeconds]);

  const props = {
    sequentialAnimationMode: true,
    duration: 0.25,
    startFromLastDigit: true,
    speed: 4,
    useMonospaceWidth: true,
  } satisfies Omit<ComponentProps<typeof SlotCounter>, 'value'>;

  if (remainingTimeInSeconds <= 0) {
    return (
      <h3 className="text-3xl sm:text-4xl animate-fadeIn font-normal italic font-libre">
        Elérkezett a nagy nap!
      </h3>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2 animate-fadeInSlow">
      <div className="flex items-center font-normal font-libre italic justify-around px-8 text-3xl ">
        <CounterElement remainingUnits={remainingDays} label='nap' props={props}/>
        <CounterElement remainingUnits={remainingHours} label='óra' props={props}/>
        <CounterElement remainingUnits={remainingMinutes} label='perc' props={props}/>
        <CounterElement remainingUnits={remainingSeconds} label='másodperc' props={props} displayDots={false}/>
      </div>
    </div>
  );
};

export default Counter;
