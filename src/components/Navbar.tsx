import { getAuthSession } from "@/lib/database";
import React from "react";

type Props = {};

const Navbar = async (props: Props) => {
  const session = await getAuthSession();

  if (session?.user) {
    return <pre>{JSON.stringify(session.user, null, 2)}</pre>;
  }

  return <div>Navbar</div>;
};

export default Navbar;
