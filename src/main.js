/**
 * Parse Server Clientのインスタンスを作成する
 * @param {String} domain 【必須】
 * @param {String} appId 【必須】
 * @param {String} key 【必須】
 * @return {ParseServerClient} Parse Server Clientのインスタンス
 */
function create(domain, appId, key) { // eslint-disable-line no-unused-vars
  return new ParseServerClient(domain, appId, key);
}
