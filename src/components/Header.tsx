import { TonConnectButton } from "@tonconnect/ui-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 z-10">
      <img src="/logo.png" alt="Logo" className="h-10" />
      <TonConnectButton />
    </header>
  );
};

export default Header;
