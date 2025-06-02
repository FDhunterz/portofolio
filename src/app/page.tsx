import { redirect } from "next/navigation";
import DeviceCheck from "../components/DeviceCheck";
import ProfileBase from "./profile/profile-base";


export default function Home() {
  redirect('/profile/faizal_triswanto');
}
