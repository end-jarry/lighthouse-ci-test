module.exports = {
  ci: {
    collect: {
      // staticDistDir: '.next',
      startServerCommand: 'yarn dev', // 서버를 명시적으로 포트 3000에서 시작
      url: ['http://localhost:3000'], // 테스트할 URL
      numberOfRuns: 3, // 각 URL에 대해 테스트를 3회 수행
      settings: {
        preset: 'desktop', // 데스크탑 환경 설정
      },
    },
    assert: {
      preset: 'lighthouse:recommended', // 추천된 Lighthouse 설정 사용
    },
    upload: {
      target: 'temporary-public-storage', // 임시 공개 저장소로 업로드
    },
  },
};
