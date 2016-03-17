var TLPageSettings = (function () {
    function TLPageSettings() {
        this.NoTitle = true; // テキストとは別に見出しを設定するかどうか(trueのときテキストの先頭部分が見出しになる)
        this.PageLoad = true; // ページごとのロードをするかどうか
        this.NoServer = false; // サーバーを使うかどうか
    }
    return TLPageSettings;
})();
module.exports = TLPageSettings; // サーバー用
//# sourceMappingURL=TLPageSettings.js.map