# Astro コンポーネントの依存関係

- `src/pages` 起点で見るとわかりやすい
  - pages のファイルが基本ページになる

### `src/pages/index.astro` ... Topページ
- `layouts/PageTemplate.astro` ... ページの基本レイアウト
  - `components/BaseHead.astro` ... メタタグなど
  - `components/Header.astro`   ... サイト共通のヘッダー
  - `components/Footer.astro`   ... サイト共通のフッター
- `components/WorkUnit.astro`  ... 事例ユニット
  - `components/TagList.astro` ... タグ表示
- `components/MemberListTop.astro` ... メンバーTop用の表示（カルーセルになる）
  - `components/MemberList` ... メンバー個々の表示
- `components/MemberTopModal.astro` ... メンバーモーダル
  - `components/MemberModal.astro`  ... メンバー一人一人の表示 
- `components/WorkModal.astro` ... 事例モーダル表示


### `src/pages/service.astro` ... Serviceページ
- `layouts/PageTemplate.astro` ... ページの基本レイアウト
- `components/BreadCrumbs.astro` ... パンくず
  - `components/BreadCrumbWithLink.astro` ... リンクのあるパンくず
- `components/PageTitle.astro` ... ページタイトル
- `components/ContentTitle.astro` ... 小見出し
- `components/Catch.astro` ... キャッチ
- `components/ContactInfo.astro` ... お問い合わせ誘導
- `components/ServiceUnit.astro` ... サービス項目
  - `components/ServiceMethod.astro` ... メソッド・ブロック
  - `components/ContentTitle.astro` ... 小見出し

サービス 6つの項目については `../content/Service.js` で管理


### `src/pages/works.astro` ... Worksページ
※同じものは省略
- `components/WorkUnit.astro` ... 事例ユニット（Topと共通）
  - `components/TagList.astro` ... タグ表示
- `components/WorkModal.astro` ... 事例モーダル表示（Topと共通）

事例は `../content/Cases.js` で管理  
元々は Case ごとに分けていたが、Topで表示できるようにまとめた


### `src/pages/members.astro` ... メンバー紹介ページ
※同じものは省略
- `components/MemberListWrapper.astro` ... メンバー紹介（コマ+モーダル）
  - `/components/MemberList.astro` ... メンバー コマ
  - `/components/MemberModal.astro` ... メンバー個々のモーダル

メンバーの情報は `../content/Member.js` で管理


### `src/pages/contact.astro` ... お問い合わせ
※Netlify Formの機能を利用
- `components/ContactForm.astro` ... お問い合わせフォーム
  - 確認画面へ行くとinputフォームをを隠し、入力した内容を表示する


### `src/pages/join-us.astro` ... JOIN US
- `components/StoryUnit.astro` ... ストーリーへのリンク

ストーリーは `content/Story.js` で管理


