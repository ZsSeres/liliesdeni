import { WeddingApplicationFormData } from '@/app/_lib/types';

const AdminNotifierEmailTemplate = (props: WeddingApplicationFormData) => {
  return (
    <div>
      <h1>Jelentkeztek esküvőre!</h1>
      <p>
        Jelentkezést adott le a következő személy:
        <br />
        <br />
        Teljes név: {props.fullName}
        <br />
        Email cím: {props.email}
        <br />
        Telefonszám: {props.phoneNumber || '--'}
        <br />
        Részvétel: {props.attendance}
        <br />
        További vendégek: {props.otherGuests.length !== 0 ? props.otherGuests.join(", ")  : '--'}
        <br />
        Szállás: {props.accommodation || '--'}
        <br />
        Transzfer vissza: {props.isTransferBack !== undefined ? props.isTransferBack : '--'}
        <br />
        Komment: {props.comment || '--'}
        <br />
        Érzékenység: {props.foodRestrictions || '--'}
        <br />
        <br />
        <br />
        Szeretettel,
        <br />
        ZsPapa email szervere
      </p>
    </div>
  );
};

export default AdminNotifierEmailTemplate;
