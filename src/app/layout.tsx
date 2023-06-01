import { PropsWithChildren } from "react";

export const metadata = {
  title: "Next Forum",
  description: "Next Forum",
};

type Props = PropsWithChildren;
const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
