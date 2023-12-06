import { redirect } from "next/navigation";

function LogoutPage() {
  return redirect("api/auth/signout");
}

export default LogoutPage;
