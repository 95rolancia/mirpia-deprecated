import { useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { selectedNavbarItem } from 'src/App';

interface Prop {
  title: string;
  onClick: () => void;
  active: boolean;
}

export default function NavbarItem({ title, onClick, active }: Prop): JSX.Element {
  const setNavbarItemName = useSetRecoilState(selectedNavbarItem);
  const handleClick = (): void => {
    onClick();
    setNavbarItemName(title);
  };
  return (
    <List active={active}>
      <Anchor onClick={handleClick} active={active}>
        <span>{title}</span>
      </Anchor>
    </List>
  );
}

interface Props {
  active: boolean;
}

const List = styled('li')<Props>`
  border-bottom: ${(props) => (props.active ? '0.2rem solid #141414' : '0.2rem solid #c7c7c7')};
  color: ${(props) => (props.active ? '#141414' : '#c7c7c7')};
  font-weight: ${(props) => props.active && '700'};
  flex: 1;
  height: 4.5rem;
  font-size: 1.5rem;
  line-height: 1.33333;
  text-align: center;
`;

const Anchor = styled('a')<Props>`
padding-bottom: ${(props) => (props.active && '1.2rem')};
  padding: 1.3rem 0 1.2rem;
  display: block;
  height: 100%;
`;
