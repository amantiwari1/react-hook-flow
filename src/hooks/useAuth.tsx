// @ts-ignore
import fcl from "@onflow/fcl";
import { useEffect, useState } from "react";

export function useAuth() {
  const [user, setUser] = useState<UserFlow>({
    addr: "",
    cid: "",
    loggedIn: false,
  });
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const signup = (opts: OptionsFlow = {}) => fcl.signUp(opts);
  const login = (opts: OptionsFlow = {}) => fcl.logIn(opts);
  const logout = () => fcl.unauthenticate();

  useEffect(() => {
    fcl.currentUser().subscribe(setUser);
    setIsAuth(user.loggedIn);
  }, []);

  return { isAuth, user, signup, login, logout };
}
