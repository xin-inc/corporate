import { positionHighlight } from "astro/runtime/client/dev-overlay/plugins/utils/highlight.js";

export const Members = [
  {
    key: 'ogose',
    name: '生越 悠介',
    role: 'Design Strategist / CEO',
    message: 'Love×Logic',
    copy: 'Design Strategist / 海外十数カ国→神戸→京都 / 京都大学法学部卒\n\n世の中に溢れる全てのものは、誰かしらの「想い」によって生み出されたもの。\nその想いが、真っ直ぐ、深く、何より幸せな体験として、人々に届くように。\n想いに寄り添う「愛」と、壁を破る「戦略」で、不可能を可能に変えていきたい。\nそれこそが「デザイン」なのだと思う今日この頃です。\n\n休みの日は、映画観てるかゲームしてるか写真撮ってるか料理してるかお酒飲んでるか、もしくはそのハイブリッドです。',
    tags: [
      '一日一映画',
      '分子料理',
      'U.K.育ち',
    ],
  },
  {
    key: 'ishigame',
    name: '石亀 伸宏',
    role: 'Creative Director / COO',
    message: 'なんてことない話をしたい',
    copy: `すだれ屋からWeb屋へ転身。あっという間に、いい歳になってました。\n
						デザインするのはWebが多いけれども、考えているのは常に誰かのことです。\n\n

						ユーザーのこと、クライアントのこと、仲間のこと、家族のこと。\n
						なんてことない話から、溢れてきた想いの種を、うんとこしょっと形にし続けて来ました。多分これからも、そうやってデザインしていくと思います。\n\n

						まずは、あなたのことを聞かせてください。\n
						なんてことない、話をしましょう。`,
    tags: [
      'エモ好き',
      '砂の国出身',
      '成人まで生きる',
    ],
  },
  {
    key: 'iwamoto',
    name: '岩本 拓也',
    role: 'Designer',
    message: 'ワクワクを創る',
    copy: `新卒で入社して以来、画面設計、コピー、デザイン、動画制作など、様々なクリエイティブの難しさにぶち当たってきました。\n\n

						そんな日々で学んだことは、「ワクワクする気持ち」こそがすべてをブレイクスルーさせるということ。\n\n

						「こんなアイデアが実現したら面白いんじゃないか」「多くの人が幸せになるんじゃないか」\n\n

						関わる人みんながそんな希望を抱けることを目指して、日々新しいワクワクのタネを探しています。`,
    tags: [
      'マンガ脳',
      'アマチュア俳優',
      '爬虫類',
    ],
  },
  {
    key: 'hayashi',
    name: '林 果歩',
    role: 'Designer',
    message: '好きを貫く！',
    copy: `小さい頃から絵が好きで、ビジュアルにやたらこだわる性格でした。\n\n
						友人に贈った似顔絵が好評で、調子に乗った私はそのままデザインの道へ一直線。
						前職はグラフィック、今はWEBデザイナーとして、サイト制作やロゴ制作など、様々な業務に携わっています。\n\n

						原点である「好きなこと」と「こだわる性格」は今も健在です。楽しいアイデア、美しいビジュアル、
						ときめくデザインで、誰かを喜ばせるデザイナーでありたいです。`,
    tags: [
      '映画',
      '梅干',
      '睡眠',
    ],
  },
  {
    key: 'maeta',
    name: '前田 凛々子',
    role: 'Designer',
    message: '長く傍にあるデザインを',
    copy: `新卒で入社してから、様々な大規模なECサイト制作のプロジェクトに携わらせていただきました。\n\n

						何のために行うのか、何を求められているのか、課題の奥深くまで追求し、じっくりと本質を考えることの大切さを学びました。\n\n

						これからも本質を考え、より良いものを作り、ただ目新しいものではなく、誰かの日常に心地よく存在するデザインを作れるデザイナーでありたいです。`,
    tags: [
      '超飽き性',
      'コーヒー牛乳中毒',
      '砂の国出身',
    ],
  },
  {
    key: 'takagishi',
    name: '高岸 竜吾',
    role: 'Designer',
    message: '興味≒可能性',
    copy: `「デザイナーとは、実現不可能な妄想をかたちにする仕事」という言葉に惹かれて入社しました。\n\n

						入社してからそれなりに経ちますが、自分の知らないことへの興味は尽きず、特にマークアップ、エンジニア分野への深掘りが止まらない毎日です。\n\n

						興味のある分野を深掘りしていくと、「あんなこともできそう！」という可能性が広がるのを感じるときがあります。これからも、まだ見ぬ可能性に出会うために、興味を持ち続けていきたいです。`,
    tags: [
      '作曲',
      'ガジェット',
      'うどん県出身',
    ],
  },
  {
    key: 'uchida',
    name: '内田 美菜子',
    role: 'Designer',
    message: '毎日が挑戦だ',
    copy: `元々は理学療法士として、病院や高齢者施設に勤務。\n
以前より好きだったものづくりを仕事にしたくデザインの勉強を始め、2022年5月よりデザイナーとしてXINへ。\n\n
毎日が挑戦の連続ですが、新しいことをたくさん吸収してデザイナーとして成長していきたいです。\n
ユーザーの目線に立ち、より多くの方に、使いやすく伝わるような設計・制作ができるよう、日々取り組んでいます。
`,
    tags: [
      '緑',
      '無印良品',
      'アーモンド',
    ],
  },
  {
    key: 'isoda',
    name: '磯田 萌乃',
    role: 'Designer',
    message: '素直に、楽しく！',
    copy: `短大で服飾を学んだ後、美大に編入。\n
誰かのためのものづくりって難しいけど面白い！と\n
デザイナーを志望し、新卒で入社しました。\n\n

デザインの奥深さに翻弄される毎日ですが、\n
先輩方にご指導いただきながら日々勉強中です。\n
素直に、そして楽しみながら、たくさん吸収していきたいと思っています。\n\n

立派なデザイナーになれるよう努めてまいります！`,
    tags: [
      '手芸',
      'お昼寝',
      '収集癖',
    ],
  },
  /* 
  // 本人の意思により非表示
  {
    key: 'ishizawa',
    name: '石澤 魁人',
    role: 'Designer',
    message: 'まっすぐ',
    copy: `関東某所、海の近くでのほほんと暮らしていくつもりが、いつの間にか京都でデザイナーになって早１年。

まだまだ勉強中の身ではありますが、
デザイナーとして「ビジネスとデザイン」「テクノロジーとデザイン」「サービスとユーザー」など様々なモノやコトに橋を架けれる存在になりたい、そんな想いで日々ご指導いただきながら新しいことにチャレンジしています。`,
    tags: [
      '海辺育ち',
      '車とバイク',
      '表情筋固め',
    ],
  },
  */
  {
    key: 'ubukata',
    name: '生方 もとか',
    role: 'Designer',
    message: '心に挑む',
    copy: `通常、人の心は目に見えませんが、仮説を持って挑むことで間接的に可視化することや、働きかけることができます。そんなところに面白さを感じ、大学では心理学を専攻していました。

そして今度は「デザインで心にアプローチしてみたい！」、そう思ってデザイナーを志しました。
まだまだ未熟者ですが、いつか誰かの心を動かせるよう、奮闘し続けたいです。`,
    tags: [
      '隠れバンドマン',
      'お笑いウォッチャー',
      'スマイルあげます',
    ],
  },
  /*
  // 本人の意思により非表示
  {
    key: 'nakamura',
    name: '中村 日捺子',
    role: 'Designer',
    message: 'ごきげんに生きる',
    copy: `学生時代は書道・アート・デザイン・建築と、さまざまなクリエイティブに夢中になっていました。

それらを通して気がついた、「人の頭の中の絡まった糸を解くような作業や対話が好き」ということ。
そんなことがしたくて、デザイナーを志望し、入社しました。

誰かのごきげんに繋がるようなデザインや体験設計ができるデザイナーになれるよう、日々精進してまいります！`,
    tags: [
      '作家',
      '書道家',
      '愛犬家',
    ],
  },
  */
  {
    key: 'tawa',
    name: '田和 幸子',
    role: 'Staff',
    message: '自分らしく',
    copy: `ファッション業界で販売や広報などの業務に長く携わった後、仕事と育児の両立を目指して事務職に転職。\n\n

						個性的で優秀なXINメンバーから、日々多くのことを学び、娘からはいつも新しい発見をもらっています。\n\n

						刺激を受けることはたくさんあっても、惑わされることはなくなった今日このごろです。`,
    tags: [
      '靴',
      'ミシン',
      '犬派',
    ],
  },
];