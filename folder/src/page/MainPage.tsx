import { Suspense } from 'react';
import User from 'components/User';

export default function MainPage(): JSX.Element {
  return (
    <>
      <h1>MainPage</h1>
      <Suspense fallback={<p>사용자 정보 로딩중...</p>}>
        <User />
      </Suspense>
    </>
  );
}
