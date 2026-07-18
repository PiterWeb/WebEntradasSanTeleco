import { pb } from "./pb";

export interface Partner {
  id: string;
  logo: string;
}

const partnerColl = "partners"

export async function getPartners(): Promise<Partner[]> {
  const list = await pb.collection(partnerColl).getFullList()
  return list?.map(i => {
    return {id: i.id, logo: pb.files.getURL(i, i.logo)}
  })
}