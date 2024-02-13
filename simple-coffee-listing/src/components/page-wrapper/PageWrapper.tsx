import { StyledPageWrapper } from "./PageWrapper.styled";

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};
