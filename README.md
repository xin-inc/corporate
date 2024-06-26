# 🚀 Project Structure

ファイルの中身

```text
├── public/ 
│   ├── fonts/ ... フォント
│   └── imageFile/ ... 主な画像ファイル
├── src/
│   ├── assets/ ... 部品用の画像（あまりない）
│   ├── components/ ... コンポーネントファイル（部品）
│   ├── content/ ... 更新用データ領域
│   │   ├── news/      ... おしらせ（ファイル）
│   │   ├── works/     ... 事例（ファイル）
│   │   ├── Member.js  ... メンバー・プロフィールの定義
│   │   ├── Service.js ... サービスの定義
│   │   └── Story.js   ... JOIN US部分のSTORY（記事）
│   ├── layouts/  ... ページのテンプレート（基本 `PageTemplate` を使用 ）
│   ├── store/    ... モーダルのための状態管理 `nanostores` を使用
│   ├── styles/   ... スタイルシート（コンポーネントから呼び出し）
│   │   ├── css/  ... コンパイルしたものをコンポーネントからimport
│   │   └── scss/ ... ページ単位 or コンポーネント単位
│   └── pages/   ... ページごとの定義・設定
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```



## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


## ざっくり Astro について
- 特別な記述少なく、HTML/CSSのように書ける
  - 部品（コンポーネント）はHTMLタグのように記述可能
  - 引数を渡せる
- CSS はファイル内にも記述可能だし、ファイルでの読み込みも可能

```javascript
// src/pages/member.astro
---
import Layout from '../layouts/PageTemplate.astro';
import BreadCrumbs from '../components/BreadCrumbs.astro';
import PageTitle from '../components/PageTitle.astro';
import ContentTitle from '../components/ContentTitle.astro';
import Catch from '../components/Catch.astro';

import MemberListWrapper from '../components/MemberListWrapper.astro';

import '../styles/css/member.css';
---

<Layout title="Members" description="">
	<div id="members" class="md_contentUnit">
		<BreadCrumbs
      pages={[
        {name: 'TOP', url: '/'},
        {name: 'MEMBERS', url: '/members'},
      ]}
      />

		<PageTitle
				subTitle="WHO WE ARE"
				svg="/imageFile/member_title.svg">
				<h2 class="rubi">私たちの<br />想い</h2>
		</PageTitle>

		<div class="unitContent spaceLess pageTopCopy">
			<Catch>
				私たちはXINである以前に、ひとりひとりが個性溢れるクリエイター。<br>
				ここに集まった個性のひとつひとつが<br>
				XINを形作っています。
			</Catch>
		</div>

		<MemberListWrapper isTop={false} />

	</div>
</Layout>
```

- 繰り返しの処理により、データとデザイン・テンプレートを分離しやすい
- HTML内で JS の変数使うところは `{}` でくくる
  - Attribute に JS の値を渡す場合も同様 `=""` ではなく `={}`

```javascript
// src/components/MemberListWrapper.astro
---
import { Members } from '../content/Members.js';
import MemberList from '../components/MemberList.astro';
import MemberModal from '../components/MemberModal.astro';
import ContentTitle from '../components/ContentTitle.astro';
const { isTop } = Astro.props;

const memberSetClass = 'memberWrap';

import '../styles/css/modal.css';
---

<div class={memberSetClass}>
  {
    Members.map(member => (
    <MemberList key={member.key} name={member.name} isTop={isTop} data-member-unit />
    )
  )}
</div>
<div class="memberModal md_modal md_modal--member" id="memberModal">
  <span class="bgLayer md_linkPart js_modalX" id="memberModalClose"></span>
  <div class="md_card md_card--modalBase">
    <span class="closeLink md_linkPart js_modalX"></span>
    <div class="modalBaseWrap">
			<div class="bgArea">
				<img src="/imageFile/modal_bg.svg" alt="" class="bgImg">
			</div>
      {
        Members.map(member => (
        <MemberModal member={member} />
        )
      )}
    </div>
  </div>
</div>
```


## その他 ドキュメントなど
 - [Astro 公式ドキュメント 日本語](https://docs.astro.build/ja/getting-started/)
 - [AstroでSwiperを使用する](https://zenn.dev/h_ymt/articles/cde09dc1749a2c)