import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session?.user?.name && (
        <h1 className="text-4xl text-center mt-10">
          Welcome {session?.user?.name}
        </h1>
      )}
      {session?.user?.email && (
        <h2 className="text-xl text-center mt-10">
          Logged-in Email: {session?.user?.email}
        </h2>
      )}
      {session?.user?.image && (
        <Image
          src={session?.user?.image}
          alt="user image"
          width={100}
          height={100}
          className="rounded-full mx-auto my-5"
        />
      )}
    </div>
  );
};

export default DashboardPage;
