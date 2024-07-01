export const XINService = {
  experienceDesign: [
    // 共感
    {
      key: 'empathy',
      title: '共感',
      description: `ユーザー視点はもちろん、ビジネスサイドでの視点など<br />
複数観点からサービスの状況・課題に対して「共感」し、お客様と一体となり伴走します。`,
      methods: [
        {
          key: 1,
          title: 'ゴールを見出す',
          icon: 'flag_circle',
          description: `ヒアリングと問いかけを通じて、お客様の目標や期待を明確にします。対話を重ねることで、潜在的なニーズや課題を掘り下げ、一緒に達成するべきゴールを具体化します。`,
        },
        {
          key: 2,
          title: 'コンテクストを知る',
          icon: 'manage_search',
          description: `市場環境を深く理解し、戦略的な位置付けを明確にするために、競合調査、ポジショニングマップ、SWOT分析のような手法を用いることがあります。お客様が直面する競争環境や市場の状況を把握します。`,
        },
        {
          key: 3,
          title: 'ユーザーを知る',
          icon: 'data_loss_prevention',
          description: `ユーザー・ジャーニー・マップ、ユーザー・インタビュー、ユーザー感情マッピングといった手法を通じて、ユーザーの行動や感情を詳細に把握します。これにより、ユーザーのニーズや期待を深く理解し、真に求められる体験をデザインします。`,
        },
      ],
    },
    // 価値探求
    {
      key: 'exploration',
      title: '価値探求',
      description: `限定せず、発散させ、理想を探求する。<br />
そもそもの目的から立ち返り、本当に目指すべき理想を<br />
デザイン思考を用いて、必要に応じてプロトタイプを用いながら探求します。`,
      methods: [
        {
          key: 1,
          title: '思いを引き出す',
          icon: 'heart_check',
          description: `ユーザーや開発チームの思いを引き出し、アイデアを具体化するために、ビジュアライズ、インサイト、ブレインストーミング、ワークショップのような手法を用いることがあります。創造性を引き出し、斬新なアイデアを共に生み出します。`,
        },
        {
          key: 2,
          title: 'コンセプトを立てる',
          icon: 'bookmark_star',
          description: `明確なビジョンと戦略を立てるために、コンセプトマッピング、ビジネスモデルキャンバス、バリュー・ウェブのような手法を用いることで、持続可能で革新的なコンセプトをお客様と共に構築します。`,
        },
        {
          key: 3,
          title: '体験を描く',
          icon: 'architecture',
          description: `ユーザーの体験を詳細に設計するために、サービスブループリント、シナリオプランニング、ペルソナの定義のような手法を用いることで、細部にわたる体験設計を共に描き、頭の中を可視化することで、最適なユーザー体験の共通理解をつくり上げます。`,
        },
      ],
    },
    // 価値創造
    {
      key: 'creation',
      title: '価値創造',
      description: `価値を定義し、優先順位付けを行う<br />
しっかりと目指すべき方向性を持った上で、単なる見た目や機能だけでなく、ユーザーのニーズや要求、感情、行動などを深く理解し、それに基づいて創造的な解決策を提供します。<br />
顧客や利用者のニーズに応えるだけでなく、ブランド価値の向上や社会的責任の果たし方によって、ビジネスに多面的な利益創出を目指します。`,
      methods: [
        {
          key: 1,
          title: 'デザインコンセプト',
          icon: 'thread_unread',
          description: `魅力的で一貫性のあるブランド体験を創り出すために、ブランド・アイデンティティとストーリーテリングのような手法を駆使することで、感情的なつながりを通じて、お客様のメッセージを効果的に伝えます。`,
        },
        {
          key: 2,
          title: '全体設計、体験設計',
          icon: 'draw_abstract',
          description: `使いやすく魅力的なユーザー体験を提供するために、ユーザー・エクスペリエンス（UX）、インタラクションデザイン、コンテンツ戦略のような手法を用いることで、細部まで考え抜かれた設計を実現します。`,
        },
        {
          key: 3,
          title: 'ユーザーレビュー',
          icon: 'reviews',
          description: `製品やサービスを最適化するために、公開前にプロトタイピングとユーザーテストを行うことで、実際のユーザーのフィードバックを反映し、より良い製品を共に作り上げます。`,
        },
      ],
    },
  ],
  productDesign: [
    // 設計
    {
      key: 'design',
      title: '設計',
      description: ``,
      methods: [
        {
          key: 1,
          title: '概要仕様策定',
          icon: 'summarize',
          description: `プロジェクトの全体像を明確にし、効率的で安全な開発をサポートするために、システム・アーキテクチャの設計、機能や性能要件、セキュリティ要件の設定、開発プロセスのガイドラインのような手法を用いることがあります。`,
        },
        {
          key: 2,
          title: '情報設計',
          icon: 'empty_dashboard',
          description: `ユーザーが直感的に理解できるデザインを提供するために、情報の整理・優先順位付け、構造化を行い、ユーザーが求める情報に簡単にアクセスできるよう、情報の構成を一緒に設計します。`,
        },
        {
          key: 3,
          title: 'UIの設計',
          icon: 'view_quilt',
          description: `ユーザーが操作しやすく、魅力的なインターフェースを提供するために、視覚的な魅力と使いやすさを兼ね備えたUIをデザインし、ユーザーの満足度を高めます。`,
        },
      ],
    },
    // 開発・実装
    {
      key: 'develop',
      title: '開発・実装',
      description: ``,
      methods: [
        {
          key: 1,
          title: 'デザインシステム',
          icon: 'widgets',
          description: `一貫したデザインの実現と継続的な成長を後押しするために、ガイドラインとコンポーネントを整備し、デザインの一貫性を保ちながら、効率的な開発をサポートします。`,
        },
        {
          key: 2,
          title: 'フロントエンド',
          icon: 'code_blocks',
          description: `優れたユーザー体験を提供するために、グラフィックとしてのデザインに留まらず、ユーザーが直接触れる部分までデザイン・設計を担当したデザイナー/チームが開発します。直感的で反応の良いインターフェースはもちろん、デザインの意図や目的を実現するため、コードでもデザインします。`,
        },
        {
          key: 3,
          title: 'アジャイル開発',
          icon: 'published_with_changes',
          description: `迅速に価値を提供するために、柔軟な開発手法を採用し、変化に対応しながら、継続的な改善を行い、最適なソリューションをお客様と共に作り上げます。`,
        },
      ],
    },
    // 自走支援
    {
      key: 'support',
      title: '自走支援',
      description: ``,
      methods: [
        {
          key: 1,
          title: 'グロースハック支援',
          icon: 'analytics',
          description: `成長を加速するための戦略と実行を支援します。データに基づくアプローチを用いることで、持続的な成長を共に追求します。`,
        },
        {
          key: 2,
          title: 'デザインガイド（+成功の型）',
          icon: 'checklist',
          description: `デザインに特別な知識のないチームでも、一貫性のあるデザインを保つためのガイドライン作成・共有を通して、組織全体のデザイン力を高めます。また、いままでに蓄積された成功のパターンを共有し、類似事例でのグロースに貢献します。`,
        },
        {
          key: 3,
          title: 'デザイン組織 立ち上げ支援',
          icon: 'groups',
          description: `持続可能なデザイン文化を育てるために、強力なデザインチームを構築し、初期の段階からサポートし、効果的なデザイン組織の立ち上げを共に推進します。`,
        },
      ],
    },
  ],
};