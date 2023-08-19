import { Title } from './Section.styled';

export const Section = ({ title, shouldpulsate, children }) => (
  <div>
    <Title shouldpulsate={shouldpulsate}>{title}</Title>
    {children}
  </div>
);
