import { TonConnectButton } from "@tonconnect/ui-react";

const Header = () => {
  return (
    <header className="flex justify-end p-4 z-10">
      <TonConnectButton />
    </header>
  );
};

export default Header;