import { DefaultBodyType, MockedRequest, rest, RestHandler } from 'msw';

/**
 * API
 * 각 API는 HTTP handler로 정의되어 있어요. 아래의 handlers와 관련 주석을 확인해주세요.
 */
export function handlers(): Array<RestHandler<MockedRequest<DefaultBodyType>>> {
  return [
    /**
     * 현재 세션의 유저 정보를 조회합니다.
     * response: {
     *  name: string; // 고객명
     *  rrn: string; // 하이픈을 포함하는 주민등록번호 6+7자리입니다.
     * }
     */
    rest.get('/api/me', getMe),
  ];
}

const getMe: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      name: '김케이',
      rrn: '950615-1234567',
    })
  );
};
