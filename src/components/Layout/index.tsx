import { Container } from "./style";
import { LayoutProps } from "./types";

const Layout = ({ children }: LayoutProps) => {
  return <Container>{children}</Container>;
};

export default Layout;
