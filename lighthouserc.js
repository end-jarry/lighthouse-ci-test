module.exports = {
  ci: {
    collect: {
      startServerCommand: 'yarn dev',
      url: ['http://localhost:3000'], // 테스트할 URL
      numberOfRuns: 3, // 각 URL에 대해 테스트를 3회 수행
      settings: {
        preset: 'desktop', // 데스크탑 환경 설정
        formFactor: 'desktop',
        screenEmulation: {
          deviceScaleFactor: 1,
          disabled: false,
          height: 1080,
          mobile: false,
          width: 1920,
        },
        skipAudits: [
          'uses-http2',
          'is-on-https',
          'no-document-write',
          'color-contrast',
          'meta-viewport',
        ],
        throttling: {
          cpuSlowdownMultiplier: 1,
          downloadThroughputKbps: 0,
          requestLatencyMs: 0,
          rttMs: 40,
          throughputKbps: 10 * 1024,
          uploadThroughputKbps: 0,
        },
      },
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'bf-cache': 'off', // Back/Forward Cache 감사를 비활성화
        'meta-description': 'off', // 메타 설명 감사를 비활성화
        'document-title': 'off', // 문서 제목 감사를 비활성화
        'valid-source-maps': 'off', // 소스 맵 감사를 비활성화
        'largest-contentful-paint': 'off', // LCP 감사를 비활성화
        'legacy-javascript': 'off', // 구형 JavaScript 감사를 비활성화
        'max-potential-fid': 'off', // 최대 잠재적 FID 감사를 비활성화
        'no-document-write': 'off', // Document.write 감사를 비활성화
        'meta-viewport': 'off', // Viewport 메타 태그 감사를 비활성화
        'color-contrast': 'off', // 색상 대비 감사를 비활성화
        'is-on-https': 'off', // HTTPS 감사를 비활성화
        'uses-http2': 'off', // HTTP/2 사용 감사를 비활성화
        'unminified-javascript': 'off', // 미압축 자바스크립트 감사를 비활성화
        'unused-javascript': 'off', // 사용되지 않은 자바스크립트 감사를 비활성화
      },
    },
    upload: {
      target: 'temporary-public-storage', // 임시 공개 저장소로 업로드
    },
  },
};
