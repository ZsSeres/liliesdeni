'use server';
import { db } from '@/app/_db/drizzle';
import { applications } from '@/app/_db/schema';
import { WeddingApplicationEntry } from '@/app/_lib/types';

const isTestEnv = process.env.ENV !== 'prod';

// I think its unused
export const getApplications = async () => {
  const data = (await db.select().from(applications)).filter((entry) => {
    if (isTestEnv) {
      return entry.isTestEntry;
    } else {
      return !entry.isTestEntry;
    }
  });
  return data;
};

const getIsTransferBackDb  = (isTransferBack?: string) =>
{
  if(isTransferBack === "Igen")
  {
    return true
  }
  if(isTransferBack === "Nem")
  {
    return false
  }

  return undefined
}

export const addApplication = async (application: WeddingApplicationEntry) => {
  await db.insert(applications).values({
    email: application.email,
    fullName: application.fullName,
    attendance: application.attendance === 'Igen' ? true: false,
    isTransferBack: getIsTransferBackDb(application.isTransferBack),
    phoneNumber: application.phoneNumber,
    otherGuests: application.otherGuests,
    accommodation: application.accommodation,
    foodRestrictions: application.foodRestrictions,
    comment: application.comment,
    isTestEntry: isTestEnv,
  });
};
