import DeviceCheck from "@/components/DeviceCheck";
import ProfileBase from "../profile-base";
import { notFound } from "next/navigation";
import faizal from './resource/faizal.json';
import eko from './resource/eko.json';
import { DataProfileModel, SectionModel } from "./profile_model";

export async function generateStaticParams() {
  return [
    {name: "faizal_triswanto"},
    {name: "eko"}
  ];
}

export default async function ProfileDetailPage({
  params,
}: {
  params: Promise<{ name?: string | null | undefined }>;
}) {
  try {
    const {name} = await params;
    const file = [faizal, eko];
    const data = file.find((item) => item.name === name)?.data as DataProfileModel;
    const section = file.find((item) => item.name === name) as SectionModel;
    console.log(data);
    console.log(section);

    return (
      <DeviceCheck>
        <ProfileBase data={data!} section={section!} />
      </DeviceCheck>
    );
  } catch (error) {
    notFound()
  }
} 