/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import { css, Global } from '@emotion/react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import normalize from 'emotion-normalize';
import colors from 'constants/colors';
import Routes from 'pages/Routes';

import Navbar from 'components/Navbar';
import NavbarItem from 'components/NavbarItem';

import { useInternalRouter } from './pages/routing';
import { atom, useRecoilValue } from 'recoil';

export const selectedNavbarItem = atom({
  key: 'selectedNavbarItem',
  default: '메인',
});

export default function App(): EmotionJSX.Element {
  const { push } = useInternalRouter();
  const selectedNavbarItemName = useRecoilValue(selectedNavbarItem);
  return (
    <>
      <Global
        styles={css`
          ${normalize}
          * {
            box-sizing: border-box;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-size: 1em;
            font-weight: normal;
            margin: 0; /* or ‘0 0 1em’ if you’re so inclined */
          }
        `}
      />
      <Layout>
        <Navbar>
          <NavbarItem title="메인" onClick={() => push('/main')} active={selectedNavbarItemName === '메인'} />
          <NavbarItem title="통계" onClick={() => push('/stats')} active={selectedNavbarItemName === '통계'} />
        </Navbar>
        <Routes />
      </Layout>
    </>
  );
}

function Layout({ children }: { children: ReactNode }): EmotionJSX.Element {
  return (
    <div
      css={css`
        max-width: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        height: auto;
      `}
    >
      <div
        css={css`
          background: ${colors.background};
        `}
      >
        {children}
      </div>
    </div>
  );
}
