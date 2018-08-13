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

/**
 * Userクラスを検索する
 * https://docs.parseplatform.org/rest/guide/#querying
 * @param {Object} query 【必須】クエリ、検索条件
 * @param {Object} options 【任意】オプション ※ドキュメント参照
 * @return {Object} 実行結果
 */
function searchUserClass(query, options) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}
