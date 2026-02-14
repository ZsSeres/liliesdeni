import { z } from 'zod';

export enum AccomodationEnum {
  Hajmas = "Hajmas",
  Galosfa = "Galosfa",
  NoSzallas = "NoSzallas"
}


export const weddingApplicationSchema = z.object({
  fullName: z.string().nonempty('Kérjük, add meg a teljes neved!'),
  email: z.email('Kérjük, add meg az e-mail címed!'),
  attendance: z.enum(['Igen', 'Nem'], {
    message: 'Kérjük, válaszd ki, hogy részt veszel-e!',
  }),
  phoneNumber: z.string().optional(),
  otherGuests: z.array(
      z.string().trim().min(1, 'A vendég neve nem lehet üres!')
    )
    .default([]),
  foodRestrictions: z.string().optional(),
  comment: z.string().optional(),
  accommodation: z
    .enum(Object.values(AccomodationEnum), {
      message: 'Kérjük, válaszd ki, hogy milyen szállást szeretnél!',
    })
    .optional(),
});

export type WeddingApplicationFormData = z.infer<typeof weddingApplicationSchema>;
export type WeddingApplicationEntry = WeddingApplicationFormData & {
  submittedApplicationAt?: Date;
  isTestEntry?: boolean;
};
