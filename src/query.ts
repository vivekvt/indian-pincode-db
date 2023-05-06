import { pincodes } from './data/pincodes';

export const findByPincode = (pincodeNumber: number) => {
  const pincode = pincodes.filter(
    (pincodeDetail) => pincodeDetail.pincode === pincodeNumber
  );
  return pincode;
};

export const findByPostOffice = (postOfficeName: string) => {
  const pincode = pincodes.filter((pincodeDetail) =>
    pincodeDetail.officeName
      .toLowerCase()
      .includes(postOfficeName.toLowerCase())
  );
  return pincode;
};

export const findByDistrict = (district: string) => {
  const pincode = pincodes.filter(
    (pincodeDetail) =>
      pincodeDetail.district.toLowerCase() === district.toLowerCase()
  );
  return pincode;
};

export const findByState = (state: string) => {
  const pincode = pincodes.filter(
    (pincodeDetail) =>
      pincodeDetail.stateName.toLowerCase() === state.toLowerCase()
  );
  return pincode;
};
