SuiteOf('スモークテスト');

Scenario('example.comにアクセスする',  ({ I }) => {
    // ページ遷移
    I.amOnPage('https://example.com')
    // 表示の確認
    I.see('Example Domain')
})
;
