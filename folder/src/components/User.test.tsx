/** @jest-environment jsdom */
import { render, screen } from '@testing-library/react';
import React, { Suspense } from 'react';
import { act } from 'react-dom/test-utils';
import { RecoilRoot } from 'recoil';
import User from './User';
import '@testing-library/jest-dom'

// act and advance jest timers
function flushPromisesAndTimers(): Promise<void> {
  return act(
    () =>
      new Promise(resolve => {
        setTimeout(resolve, 100);
        jest.runAllTimers()
      }),
  );
}

describe('App', () => {
  it('test', async () => {
    const mockState = {name: '김케이', rrn: '123456-0123456'};
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockState),
      }),
    );

    render(
      <RecoilRoot>
        <Suspense fallback={<div>loading...</div>}>
          <User />
        </Suspense>
      </RecoilRoot>,
    );
    expect(screen.queryByText('loading...')).toBeInTheDocument();
    expect(screen.queryByText(mockState.name)).not.toBeInTheDocument();
    await flushPromisesAndTimers();

    expect(screen.queryByText(mockState.name)).toBeInTheDocument();
    expect(screen.queryByText('loading...')).not.toBeInTheDocument();
  })
});
