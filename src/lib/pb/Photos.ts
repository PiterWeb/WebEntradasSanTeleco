import { pb } from "./pb";

export interface Photo {
  id: string;
  img: string;
}

const photosColl = "photos"

export async function getPhotos(): Promise<Photo[]> {
  const list = await pb.collection(photosColl).getFullList()
  return list.map(i => {
    return {id: i.id, img: pb.files.getURL(i, i.img)}
  })
}