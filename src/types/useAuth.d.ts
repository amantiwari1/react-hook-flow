interface UserFlow {
  addr: string;
  cid: string;
  loggedIn: boolean;
}

interface ProviderFlow {
  is_required?: boolean;
  requires_install?: boolean;
  install_link?: string;
  login_link?: string;
}

interface OptionsFlow {
  service?: {
    providers?: ProviderFlow;
  };
  redir?: boolean;
}
