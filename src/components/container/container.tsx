import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="container mx-auto px-5">{children}</div>;
};
