/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

export const StartPage = () => {
  return (
    <div
      css={css`
        background-color: blue;
      `}
    >
      <div>버스</div>
      <div>식사</div>
      <div>학사 일정</div>
      <div>배달 음식</div>
    </div>
  );
};
