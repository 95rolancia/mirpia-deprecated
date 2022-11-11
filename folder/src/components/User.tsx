import { selector, useRecoilValue } from 'recoil';
import { wait } from 'utils/utils';

const userInfoSelector = selector({
  key: 'userInfo',
  get: async () => {
    const res = await fetch('/api/me');
    const userInfo = await res.json();
    return userInfo;
  },
});

export default function User(): JSX.Element {
  const userInfo = useRecoilValue(userInfoSelector);

  return (
    <>
      <h2>{userInfo.name}</h2>
      <h2>{userInfo.rrn}</h2>
    </>
  );
}
