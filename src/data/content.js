// =============================================================================
// AI学習サイト コンテンツデータ
// -----------------------------------------------------------------------------
// このファイルだけを編集すれば、サイトのカード・動画・各社情報を更新できます。
// YouTube動画IDは執筆時点で実在する初心者向け動画をキュレーションしています。
// 動画が非公開になった場合は youtube の値（11文字のID）を差し替えてください。
// =============================================================================

// -----------------------------------------------------------------------------
// 1. AIサービス（3社）
// -----------------------------------------------------------------------------
export const providers = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    vendor: "OpenAI",
    emoji: "💬",
    tagline: "世界で最も使われている対話型AI",
    description:
      "OpenAIが開発した対話型AI。GPT-5・o3/o4推論モデルを搭載し、文章作成・要約・画像生成・データ分析・自律エージェントまでこなす万能型。迷ったらまず触ってみたい定番。",
    accent: "#10A37F", // OpenAIグリーン
    accentSoft: "#E7F7F1",
    gradient: "linear-gradient(135deg, #10A37F 0%, #1A7F64 100%)",
    officialUrl: "https://chatgpt.com",
    freePlan: "無料プランあり（高性能モデルは回数制限あり）",
    bestFor: "とにかく万能。最初の1つに最適",
  },
  {
    id: "gemini",
    name: "Gemini",
    vendor: "Google",
    emoji: "✨",
    tagline: "動画・音声・マルチモーダルで最先端のAI",
    description:
      "Googleが開発したAI。Gemini 2.5 Pro/Flashは動画・音声・画像処理で業界トップクラス。Gmail・ドキュメント・YouTubeとの連携に加え、Deep Research、AI動画生成（Veo）まで対応。",
    accent: "#4285F4", // Googleブルー
    accentSoft: "#E8F0FE",
    gradient: "linear-gradient(135deg, #4285F4 0%, #9B72F2 50%, #D96570 100%)",
    officialUrl: "https://gemini.google.com",
    freePlan: "Googleアカウントがあれば無料で利用可能",
    bestFor: "Google連携・動画/音声処理・マルチモーダルな用途に",
  },
  {
    id: "claude",
    name: "Claude",
    vendor: "Anthropic",
    emoji: "🧠",
    tagline: "文章力・コーディング・長文読解で最高峰のAI",
    description:
      "Anthropicが開発したAI。Claude Sonnet 4.6などの最新モデルは長文読解・コード生成・思考の深掘りで定評あり。安全性重視の設計で、ビジネス利用でも信頼性が高い。MCPにも業界最速で対応。",
    accent: "#D97757", // Anthropicテラコッタ
    accentSoft: "#FBEEE8",
    gradient: "linear-gradient(135deg, #D97757 0%, #C15F3C 100%)",
    officialUrl: "https://claude.ai",
    freePlan: "無料プランあり（利用量に上限あり）",
    bestFor: "文章作成・長文の要約・コーディング・じっくり相談",
  },
];

// 「3社共通の基礎知識」をまとめる擬似プロバイダ
export const commonProvider = {
  id: "common",
  name: "AI共通の基礎",
  vendor: "はじめに",
  emoji: "🌱",
  tagline: "どのAIを使う前にも知っておきたいこと",
  description:
    "ChatGPT・Gemini・Claudeのどれを使うにも共通する、最初に押さえたい基礎知識と注意点。",
  accent: "#6366F1",
  accentSoft: "#EEF0FE",
  gradient: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
};

// -----------------------------------------------------------------------------
// 2. カテゴリ
// -----------------------------------------------------------------------------
export const categories = [
  {
    id: "basics",
    name: "基礎知識",
    emoji: "📚",
    description: "まず知っておきたい仕組みと注意点",
  },
  {
    id: "tips",
    name: "使い方の小技",
    emoji: "💡",
    description: "知っていると差がつく便利ワザ",
  },
  {
    id: "work",
    name: "仕事への活用術",
    emoji: "💼",
    description: "日々の業務をラクにする使い方",
  },
  {
    id: "personal",
    name: "個人使いのヒント",
    emoji: "🏠",
    description: "暮らしや学びを豊かにする使い方",
  },
];

// 難易度ラベル
export const levels = {
  beginner: { label: "入門", color: "#22C55E" },
  intermediate: { label: "ステップアップ", color: "#F59E0B" },
};

// -----------------------------------------------------------------------------
// 3. 学習カード
//   各カード:
//   { id, providerId, categoryId, title, level, summary,
//     points:[...], steps?:[...], tips?:[...], youtube?:"id" }
// -----------------------------------------------------------------------------
export const cards = [
  // ===========================================================================
  // 共通の基礎
  // ===========================================================================
  {
    id: "c-what-is-ai",
    providerId: "common",
    categoryId: "basics",
    title: "生成AIってそもそも何？",
    level: "beginner",
    summary:
      "ChatGPT・Gemini・Claudeはすべて「生成AI」。膨大な文章を学習し、続きとして“もっともらしい言葉”を予測して文章を作ります。",
    points: [
      "人間のように『理解』しているのではなく、確率的に言葉をつないで答えを作っている",
      "だから自然な文章が得意な一方、事実が間違うこともある（後述のハルシネーション）",
      "チャット欄に話しかけるだけ。専門知識やプログラミングは不要",
      "まずは『あなたは○○の専門家です。△△について教えて』のように話しかけてみよう",
    ],
  },
  {
    id: "c-hallucination",
    providerId: "common",
    categoryId: "basics",
    title: "AIは平気でウソをつく（ハルシネーション）",
    level: "beginner",
    summary:
      "AIは知らないことでも自信たっぷりに“それっぽい間違い”を答えることがあります。これをハルシネーションと呼びます。",
    points: [
      "人名・数字・日付・URL・法律・最新情報は特に間違えやすい",
      "重要な内容は必ず一次情報（公式サイト・書籍）で裏取りする",
      "『出典を教えて』『自信のない点はどこ？』と聞くと精度確認に役立つ",
      "AIは“下書きの達人・最終確認は人間”という役割分担が基本",
    ],
    tips: [
      "計算や最新ニュースは、検索・要約機能がある使い方（GeminiやChatGPTの検索）を選ぶと精度が上がる",
    ],
  },
  {
    id: "c-privacy",
    providerId: "common",
    categoryId: "basics",
    title: "入れてはいけない情報がある",
    level: "beginner",
    summary:
      "便利でも、個人情報や会社の機密はそのまま入力しないのが鉄則。入力内容が学習に使われる場合があります。",
    points: [
      "氏名・住所・電話番号・マイナンバー・パスワードなどは入力しない",
      "会社の未公開情報・顧客データ・契約書の中身もNG（社内ルールを確認）",
      "固有名詞は『A社』『担当者X』のように伏せて相談するのが安全",
      "設定で『学習にデータを使わない』をオンにできるサービスもある",
    ],
  },
  {
    id: "c-prompt-basics",
    providerId: "common",
    categoryId: "tips",
    title: "良い答えを引き出す『プロンプト』の型",
    level: "beginner",
    summary:
      "AIへの指示文（プロンプト）は、4つの要素を入れるだけで答えの質が劇的に上がります。",
    points: [
      "①役割：『プロの編集者として』など立場を与える",
      "②背景：『初心者向けブログ用に』など状況を伝える",
      "③依頼：『800字で要約して』と具体的に",
      "④条件：『箇条書き・専門用語なし』など形式を指定",
    ],
    steps: [
      "まずざっくり頼んでみる",
      "出てきた答えに『もっと短く』『例を3つ追加して』と注文を重ねる",
      "対話を続けて理想に近づける（一発で完璧を狙わない）",
    ],
  },
  {
    id: "c-compare",
    providerId: "common",
    categoryId: "basics",
    title: "3社をどう使い分ける？（2026年版）",
    level: "beginner",
    summary:
      "どれも急速に進化中ですが得意分野が異なります。迷ったらChatGPT、動画・Google連携ならGemini、文章・コーディングならClaudeが目安。",
    points: [
      "ChatGPT（GPT-5/o3）：万能型。画像生成・音声会話・高度な推論まで。最初の1台として最適",
      "Gemini（2.5 Pro/Flash）：動画・音声のマルチモーダルで業界最先端。Google連携・Deep Researchも強い",
      "Claude（Sonnet 4.6/Opus 4.8）：文章の質・長文読解・コーディングで定評。MCPエージェント活用にも最適",
      "全部無料で試せるので、同じ質問を3社に投げて“相性”を確かめるのがおすすめ",
    ],
    tips: [
      "2026年は思考モデル（推論AI）が各社で標準化。難しい問題ほど推論モードを試してみよう",
    ],
  },
  {
    id: "c-iterate",
    providerId: "common",
    categoryId: "tips",
    title: "『一発で完璧』を狙わない",
    level: "beginner",
    summary:
      "AI活用のコツは“会話を重ねること”。最初の答えをたたき台にして、注文を付け足していくと一気に良くなります。",
    points: [
      "『3案出して』→気に入った案を『これをもっと丁寧に』と育てる",
      "『なぜそう考えたの？』と聞くと、前提のズレに気づける",
      "うまくいったプロンプトはメモして“自分の型”として再利用する",
    ],
  },

  {
    id: "c-agents",
    providerId: "common",
    categoryId: "basics",
    title: "AIエージェントって何？（2026年の最重要トレンド）",
    level: "intermediate",
    summary:
      "「質問に答えるAI」から「自分で考えて動くAI（エージェント）」へ。2026年のAIは指示した目標に向かって複数のステップを自律的にこなせるようになりました。",
    points: [
      "従来のAI：人が質問→AIが1回答える（1往復）",
      "エージェントAI：目標を伝えると、調査→計画→実行→確認を自分でループして完遂する",
      "ChatGPT・Gemini（Project Mariner）・Claude（MCP連携）がそれぞれエージェント機能を提供",
      "できること例：競合5社を調べてスプレッドシートにまとめて、メールを確認して返信草案を作って",
    ],
    tips: [
      "エージェントは便利だが、重要な操作（送信・購入・削除）は人間が最終確認する習慣を持とう",
    ],
  },
  {
    id: "c-reasoning",
    providerId: "common",
    categoryId: "basics",
    title: "「思考モデル」とは？難問に強い推論AI",
    level: "intermediate",
    summary:
      "2026年に各社が標準化した「思考モデル（推論モデル）」は、答える前に内部でじっくり考えることで、複雑な問題の正確性が大幅に向上します。",
    points: [
      "通常モデル：質問を受けて即座に答える。速いが複雑な問題は精度が落ちやすい",
      "思考モデル：答える前に内部で熟考するプロセスを踏む。遅い代わりに精度が高い",
      "各社の思考モデル：o3/o4（OpenAI）・Gemini 2.5 Pro（Google）・Extended Thinking（Claude）",
      "使いどころ：数学・論理・法律・医療・複雑な計画立案など、ミスが許されない場面に最適",
    ],
    tips: [
      "日常的な文章作成には通常モデルで十分。難しい問題だけ思考モデルを使い分けるのがコツ",
    ],
  },

  // ===========================================================================
  // ChatGPT
  // ===========================================================================
  {
    id: "gpt-start",
    providerId: "chatgpt",
    categoryId: "basics",
    title: "ChatGPTの始め方（無料）",
    level: "beginner",
    summary:
      "メールアドレスかGoogleアカウントがあれば数分で開始。スマホアプリもあり、無料でしっかり使えます。",
    steps: [
      "chatgpt.com にアクセス、または公式アプリをインストール",
      "メール／Google／Appleアカウントで無料登録",
      "下の入力欄に質問や依頼を打ち込んでEnterまたはSend",
      "音声入力や画像添付のアイコンも試してみる",
    ],
    points: [
      "無料でも高性能モデルを一定回数使える",
      "会話は自動で履歴に保存され、後から続きを再開できる",
    ],
  },
  {
    id: "gpt-overview",
    providerId: "chatgpt",
    categoryId: "basics",
    title: "ChatGPTで“できること”全体像（2026年版）",
    level: "beginner",
    summary:
      "文章・要約・翻訳・アイデア出し・画像生成・データ分析・コード作成・自律エージェントまで。GPT-5の登場でさらに万能になりました。",
    points: [
      "文章：メール・ブログ・企画書の作成と推敲（GPT-5で自然さが大幅向上）",
      "推論：o3/o4思考モデルで数学・法律・複雑な計画など難問に強い",
      "クリエイティブ：高品質な画像生成（DALL-E 3）、ネーミング、キャッチコピー",
      "分析：表やファイルを読み込んでグラフ化・集計、Canvasでの共同編集",
    ],
  },
  {
    id: "gpt-voice",
    providerId: "chatgpt",
    categoryId: "tips",
    title: "音声で“話しかけて”使う",
    level: "beginner",
    summary:
      "スマホアプリの音声モードを使えば、まるで人と話すようにAIと会話できます。移動中や家事中の相談に便利。",
    points: [
      "アプリのヘッドホン／音声アイコンをタップするだけ",
      "英会話の練習相手や、考えを口に出して整理する用途に最適",
      "キーボードが苦手な人でも気軽に使える",
    ],
  },
  {
    id: "gpt-vision",
    providerId: "chatgpt",
    categoryId: "tips",
    title: "写真を見せて質問する",
    level: "beginner",
    summary:
      "画像を添付して『これ何？』『この表を文字に起こして』と聞けます。説明書・手書きメモ・エラー画面の解読に便利。",
    points: [
      "クリップ／＋アイコンから写真や画像を添付",
      "外国語のメニューや看板を撮って翻訳してもらう",
      "手書きメモや名刺を読み取ってテキスト化",
      "グラフや表の画像から数字を読み取って解説させる",
    ],
  },
  {
    id: "gpt-custom",
    providerId: "chatgpt",
    categoryId: "tips",
    title: "カスタム指示で“毎回の前置き”を省く",
    level: "intermediate",
    summary:
      "設定の『カスタム指示』に自分の情報や好みを登録すると、毎回説明しなくても自分仕様の答えが返ってきます。",
    points: [
      "『職業は〇〇』『回答は結論から・箇条書きで』などを登録",
      "敬語/カジュアルなどトーンも指定できる",
      "メモリ機能で会話をまたいで好みを覚えてくれる",
    ],
  },
  {
    id: "gpt-meeting",
    providerId: "chatgpt",
    categoryId: "work",
    title: "議事録・メモを“きれいに”整える",
    level: "beginner",
    summary:
      "走り書きのメモや文字起こしを貼り付けて『議事録にして』と頼むだけ。決定事項・ToDo・担当者を自動で整理。",
    steps: [
      "会議メモや音声の文字起こしを貼り付ける",
      "『議事録に整形して。決定事項・宿題・期限を表で』と依頼",
      "『参加者向けの要約メールも作って』と続けて頼む",
    ],
    points: ["長すぎる場合は分割して貼ると安定する"],
  },
  {
    id: "gpt-email",
    providerId: "chatgpt",
    categoryId: "work",
    title: "ビジネスメールを秒で下書き",
    level: "beginner",
    summary:
      "用件を箇条書きで渡すだけで、敬語の整ったメールが完成。お詫び・依頼・お礼など気を使う文面ほど効果大。",
    points: [
      "『取引先に納期遅延のお詫び。丁寧だが言い訳がましくなく』のように頼む",
      "『もう少し柔らかく』『3割短く』と微調整できる",
      "英文メールやその和訳も得意",
    ],
  },
  {
    id: "gpt-excel",
    providerId: "chatgpt",
    categoryId: "work",
    title: "Excel関数・式を作ってもらう",
    level: "beginner",
    summary:
      "『やりたいこと』を日本語で説明すれば、ExcelやスプレッドシートのVLOOKUPや関数式を作って解説してくれます。",
    points: [
      "『A列の日付から月だけ取り出す式は？』のように質問",
      "エラーの原因や直し方も聞ける",
      "関数だけでなくマクロ（VBA）の作成も依頼可能",
    ],
  },
  {
    id: "gpt-data",
    providerId: "chatgpt",
    categoryId: "work",
    title: "ファイルを読ませてデータ分析",
    level: "intermediate",
    summary:
      "CSVやExcelをアップロードすると、集計・グラフ化・傾向の説明までしてくれます（高度なデータ分析機能）。",
    steps: [
      "ファイルを添付する",
      "『売上を月別に集計してグラフにして』と依頼",
      "『気づいた傾向と改善案も教えて』と続ける",
    ],
    points: ["機密データは入れない／社内ルールを必ず確認"],
  },
  {
    id: "gpt-meal",
    providerId: "chatgpt",
    categoryId: "personal",
    title: "冷蔵庫の中身から献立を考える",
    level: "beginner",
    summary:
      "余っている食材を伝えるだけで、レシピと買い足しリストを提案。『あと一品』や時短メニューの相談にも。",
    points: [
      "『鶏むね肉・キャベツ・卵で20分で作れる夕食を3つ』",
      "『塩分控えめ』『子ども向け』など条件も指定できる",
      "1週間分の献立＋買い物リストもまとめて作れる",
    ],
  },
  {
    id: "gpt-travel",
    providerId: "chatgpt",
    categoryId: "personal",
    title: "旅行プランの相談相手にする",
    level: "beginner",
    summary:
      "行き先・日数・好みを伝えると、モデルコースや持ち物リストを作成。当日の急な予定変更にも相談できます。",
    points: [
      "『2泊3日の京都、寺と食べ歩き中心、歩きすぎない範囲で』",
      "予算や同行者（子連れ・高齢の親など）も考慮してくれる",
      "営業時間や料金など最新情報は公式で要確認（ハルシネーション対策）",
    ],
  },
  {
    id: "gpt-learn",
    providerId: "chatgpt",
    categoryId: "personal",
    title: "“自分専用の家庭教師”にする",
    level: "beginner",
    summary:
      "難しい話を『中学生にもわかるように』『例え話で』と頼めば、自分のレベルに合わせて何度でも教えてくれます。",
    points: [
      "『〇〇を小学生にもわかるように説明して』",
      "『理解度チェックのクイズを5問出して』で記憶に定着",
      "わからない所を恥ずかしがらず何度でも聞ける",
    ],
  },

  // ===========================================================================
  // Gemini
  // ===========================================================================
  {
    id: "gem-start",
    providerId: "gemini",
    categoryId: "basics",
    title: "Geminiの始め方（Googleアカウントで）",
    level: "beginner",
    summary:
      "普段使っているGoogleアカウントがあればすぐ利用開始。スマホはGeminiアプリやGoogleアプリから使えます。",
    steps: [
      "gemini.google.com にアクセスしてGoogleアカウントでログイン",
      "スマホはGeminiアプリをインストール",
      "入力欄に質問や依頼を入力",
      "マイクや画像アイコンで音声・写真も使える",
    ],
    points: ["Googleの検索基盤と連携し、最新情報の調べ物に強い"],
  },
  {
    id: "gem-overview",
    providerId: "gemini",
    categoryId: "basics",
    title: "Geminiの強み＝マルチモーダル＋Google連携",
    level: "beginner",
    summary:
      "2026年のGeminiは動画・音声・画像のマルチモーダル処理で業界トップクラス。Gmail・ドキュメントとの連携に加え、AI動画生成（Veo）も使えます。",
    points: [
      "マルチモーダル：テキスト・画像・音声・動画を同時に扱える（Gemini 2.5 Pro）",
      "AI動画生成：Veoで文章からリアルな動画を自動生成（Google Labs）",
      "Google連携：Gmail・ドキュメント・スプレッドシート・YouTube動画の要約が強い",
      "Deep Research：複数サイトを自動調査して出典付きレポートを生成",
    ],
  },
  {
    id: "gem-youtube",
    providerId: "gemini",
    categoryId: "tips",
    title: "長いYouTube動画を一瞬で要約",
    level: "beginner",
    summary:
      "動画のURLを貼って『要点を箇条書きで』と頼むだけ。1時間の動画も数十秒で“読める情報”になります。",
    steps: [
      "YouTube動画のURLをコピーして貼り付ける",
      "『この動画の要点を5つにまとめて』と依頼",
      "『〇分あたりで何を話してる？』と深掘りも可能",
    ],
    points: ["セミナー・講義・ニュースの“ながら視聴”の代わりに便利"],
  },
  {
    id: "gem-research",
    providerId: "gemini",
    categoryId: "tips",
    title: "Deep Research で“調査レポート”を作る",
    level: "intermediate",
    summary:
      "Deep Research機能を使うと、複数サイトを自動で調べて出典付きのレポートにまとめてくれます。下調べが一気にラクに。",
    points: [
      "『〇〇市場の最新動向を調査してレポートに』のように依頼",
      "AIが多数のサイトを巡回し、要点を整理",
      "出典リンクが付くので、自分で裏取りしやすい",
    ],
  },
  {
    id: "gem-image",
    providerId: "gemini",
    categoryId: "tips",
    title: "画像の生成・編集をことばで",
    level: "beginner",
    summary:
      "『青空の下のカフェのイラスト』のように頼めば画像を生成。写真をアップして『背景だけ変えて』と編集の指示も出せます。",
    points: [
      "資料の挿絵やSNS用画像のたたき台づくりに",
      "『この写真の不要な人を消して』など編集も自然文でOK",
      "生成画像の商用利用は各サービスの規約を確認",
    ],
  },
  {
    id: "gem-gmail",
    providerId: "gemini",
    categoryId: "work",
    title: "Gmailの要約と返信を任せる",
    level: "beginner",
    summary:
      "長くなったメールのやり取りを要約させたり、要点を伝えて返信の下書きを作らせたり。受信トレイの負担を軽くします。",
    points: [
      "『このスレッドの結論と次のアクションを教えて』",
      "『丁寧な了承の返信を作って』で下書き完成",
      "Workspace連携の有無で使える範囲が変わる点に注意",
    ],
  },
  {
    id: "gem-docs",
    providerId: "gemini",
    categoryId: "work",
    title: "ドキュメント・スライドの下書き作成",
    level: "beginner",
    summary:
      "GoogleドキュメントやスプレッドシートでAIに直接手伝ってもらえます。たたき台づくりや表の整形が一瞬で。",
    points: [
      "ドキュメントで『この議事録から報告書のたたき台を』",
      "スプレッドシートで関数や表の作成を補助",
      "資料の構成案・見出し案づくりにも便利",
    ],
  },
  {
    id: "gem-summarize-doc",
    providerId: "gemini",
    categoryId: "work",
    title: "長いPDF・資料を読み解く",
    level: "beginner",
    summary:
      "分厚い資料やPDFを渡して『3行で要約』『重要ポイントを表に』と頼めば、読む時間を大幅に短縮できます。",
    points: [
      "『この資料を初心者向けに噛み砕いて』",
      "『反論や注意点があれば指摘して』で多角的にチェック",
      "数値や固有名詞は元資料で確認する",
    ],
  },
  {
    id: "gem-travel",
    providerId: "gemini",
    categoryId: "personal",
    title: "調べ物＋プランづくりを同時に",
    level: "beginner",
    summary:
      "Google連携と検索の強さを活かし、最新情報を調べながら旅行や外出のプランを立てるのが得意です。",
    points: [
      "『今週末、東京近郊で雨でも楽しめる場所を子連れで』",
      "地図・営業情報と組み合わせた相談に強い",
      "最終的な予約・料金は公式で確認",
    ],
  },
  {
    id: "gem-study",
    providerId: "gemini",
    categoryId: "personal",
    title: "動画や記事で“ながら学習”",
    level: "beginner",
    summary:
      "気になる動画・ニュース・論文を要約させて、通勤中や家事の合間に要点だけインプット。情報収集が効率化します。",
    points: [
      "『この記事の要点と、私が知っておくべき背景を』",
      "『理解度クイズを出して』で記憶に定着",
      "興味の入り口づくりに最適（詳細は原典で）",
    ],
  },

  // ===========================================================================
  // Claude
  // ===========================================================================
  {
    id: "cl-start",
    providerId: "claude",
    categoryId: "basics",
    title: "Claudeの始め方（無料）",
    level: "beginner",
    summary:
      "メールアドレスやGoogleアカウントで無料登録。落ち着いた画面で、文章や相談にじっくり向き合えるAIです。",
    steps: [
      "claude.ai にアクセスして無料登録",
      "入力欄に質問・依頼・相談を入力",
      "ファイルやテキストを貼り付けて読み込ませる",
      "気に入った対話は『Projects』で整理できる",
    ],
    points: ["丁寧で自然な日本語と、長文の扱いが得意"],
  },
  {
    id: "cl-overview",
    providerId: "claude",
    categoryId: "basics",
    title: "Claudeが得意なこと（2026年版）",
    level: "beginner",
    summary:
      "文章・コーディング・長文読解は引き続き最高峰。2026年はExtended Thinking（深い推論）とMCPエージェント連携でさらに進化しました。",
    points: [
      "文章：ニュアンスを汲んだライティング・校正・要約（日本語の質が高い）",
      "コーディング：コード生成・デバッグで各社ベンチマーク上位。Claude Codeとしても利用可",
      "思考：Extended Thinking（深い推論モード）で複雑な問題も段階的に解ける",
      "エージェント：MCP（Model Context Protocol）に業界最速対応。外部ツールとの連携が強い",
    ],
    tips: [
      "Claudeは構造的なプロンプト（箇条書きや見出しで整理した指示）が特に効果的。複雑な依頼ほど精度が上がる",
    ],
  },
  {
    id: "cl-files",
    providerId: "claude",
    categoryId: "tips",
    title: "資料を“まとめて”読ませる",
    level: "beginner",
    summary:
      "PDFや長文を複数添付して、横断的に質問できます。『この3つの資料の違いは？』のような比較が得意。",
    points: [
      "クリップ／＋から複数ファイルを添付",
      "『各資料の主張を表で比較して』",
      "長い契約書・論文・マニュアルの読み解きに強い",
    ],
  },
  {
    id: "cl-projects",
    providerId: "claude",
    categoryId: "tips",
    title: "Projectsで“専用の作業部屋”を作る",
    level: "intermediate",
    summary:
      "Projectsに資料や前提を登録しておくと、毎回説明しなくてもその文脈を踏まえて答えてくれます。継続作業に便利。",
    points: [
      "ブログ運営・研究・特定業務ごとに部屋を分ける",
      "よく使う資料やルールを入れておけば毎回参照される",
      "チームでの知識共有にも使える",
    ],
  },
  {
    id: "cl-artifacts",
    providerId: "claude",
    categoryId: "tips",
    title: "Artifactsで成果物を“その場で”作る",
    level: "intermediate",
    summary:
      "文章・表・簡単なアプリやページを、画面横に成果物として表示・編集できる機能。作りながら直していけます。",
    points: [
      "『商品紹介ページのたたき台を作って』→その場でプレビュー",
      "『ここの色を青にして』など対話で修正",
      "プログラミング知識なしで“動くもの”が作れる",
    ],
  },
  {
    id: "cl-writing",
    providerId: "claude",
    categoryId: "work",
    title: "文章の作成・校正・リライト",
    level: "beginner",
    summary:
      "企画書・記事・プレスリリースなど、読み手を意識した自然な文章づくりが得意。既存文の推敲にも強みを発揮します。",
    points: [
      "『この文章を、専門外の人にも伝わるよう書き直して』",
      "『誤字脱字と冗長な表現を直して、変更点も教えて』",
      "『3パターンのトーンで書いて』で比較検討",
    ],
  },
  {
    id: "cl-longdoc",
    providerId: "claude",
    categoryId: "work",
    title: "大量の資料を要約・整理する",
    level: "beginner",
    summary:
      "長い議事録・レポート・複数の資料を読み込み、要点・論点・次のアクションに整理。情報量の多い仕事ほど効果的。",
    points: [
      "『この資料群から、意思決定に必要な論点を抽出して』",
      "『関係者向けに1ページの要約を作って』",
      "重要な数値・固有名詞は原典で確認",
    ],
  },
  {
    id: "cl-coding",
    providerId: "claude",
    categoryId: "work",
    title: "プログラミング・自動化の相棒に",
    level: "intermediate",
    summary:
      "コード生成やエラー解決に定評があります。簡単な自動化スクリプトやExcelマクロも、目的を伝えれば作ってくれます。",
    points: [
      "『毎日のレポート作成を自動化したい。何ができる？』と相談",
      "エラーメッセージを貼って原因と修正案を聞く",
      "プログラミング学習の質問相手にも最適",
    ],
  },
  {
    id: "cl-brainstorm",
    providerId: "claude",
    categoryId: "personal",
    title: "考えごとの“壁打ち相手”にする",
    level: "beginner",
    summary:
      "頭の中のモヤモヤを話すだけで、論点を整理し、質問を返してくれます。一人で抱え込まず思考を前に進められます。",
    points: [
      "『転職を迷っている。判断材料を一緒に整理して』",
      "『私の考えの穴を指摘して』で客観的な視点を得る",
      "結論を急がず、対話で考えを深められる",
    ],
  },
  {
    id: "cl-learn",
    providerId: "claude",
    categoryId: "personal",
    title: "じっくり学ぶ・読書のお供に",
    level: "beginner",
    summary:
      "難しい本や記事を一緒に読み解く相手として優秀。要約だけでなく、背景や関連知識まで丁寧に補ってくれます。",
    points: [
      "『この本の要点と、批判的な視点も教えて』",
      "『専門用語をやさしい言葉に置き換えて』",
      "学んだ内容を『自分の言葉で説明したので添削して』",
    ],
  },
  {
    id: "cl-life",
    providerId: "claude",
    categoryId: "personal",
    title: "ていねいな文章の代筆",
    level: "beginner",
    summary:
      "お礼状・スピーチ・SNS投稿など、気持ちを込めたい文章づくりが得意。あなたの言葉を活かして整えてくれます。",
    points: [
      "『恩師への感謝の手紙。エピソードはこれ→…』",
      "『結婚式の友人代表スピーチを3分で』",
      "硬すぎず砕けすぎない、ちょうどいい塩梅にできる",
    ],
  },

  // ===========================================================================
  // 共通の基礎（追加）
  // ===========================================================================
  {
    id: "c-copyright",
    providerId: "common",
    categoryId: "basics",
    title: "AI生成物の著作権・法律問題",
    level: "beginner",
    summary:
      "AIが作った文章・画像・コードは誰のもの？仕事や個人利用で知っておくべきルールを整理します。",
    points: [
      "日本の現行法では、AIのみが生成したものには著作権が発生しにくいとされる",
      "人間がプロンプトを工夫して創造性を発揮した場合は著作権が認められる可能性あり",
      "商用利用する場合は各サービスの利用規約を必ず確認する（サービスごとに異なる）",
      "他者の著作物を学習させて生成したものは権利侵害になる場合があるので注意",
    ],
    tips: [
      "ビジネス利用で不明な場合は法律の専門家に確認するのが安全。AIの法解釈は現在も進化中",
    ],
  },
  {
    id: "c-paid-vs-free",
    providerId: "common",
    categoryId: "basics",
    title: "無料で十分？有料プランとの違い（2026年版）",
    level: "beginner",
    summary:
      "3社とも無料で十分使えますが、頻繁に使うなら有料が快適。2026年は有料プランで推論モデルも使えるようになり差が広がっています。",
    points: [
      "ChatGPT Plus（約3,000円/月）：GPT-5・o3推論モデル優先・高品質画像生成・ファイル分析・エージェント機能",
      "Gemini Advanced（約3,000円/月）：Gemini 2.5 Pro優先・Deep Research・長い動画分析・Google One 2TBストレージ付き",
      "Claude Pro（約3,000円/月）：Opus 4.8/Sonnet 4.6使い放題・Projects機能フル活用・Extended Thinking（深い推論）",
      "毎日使うビジネス用途なら費用対効果◎。週数回の利用なら無料でも十分な場合が多い",
    ],
    tips: [
      "まず無料で1〜2週間使い、制限に不満を感じたら有料を検討するのが無駄のない順序",
    ],
  },
  {
    id: "c-limitations",
    providerId: "common",
    categoryId: "basics",
    title: "AIが苦手なこと・向かないこと",
    level: "beginner",
    summary:
      "万能に見えても、AIには明確な弱点があります。任せていい仕事と人間が担うべき仕事を理解しましょう。",
    points: [
      "リアルタイム情報：今日の株価・速報ニュースなど学習データ外の最新情報は不得意",
      "厳密な数値計算：複雑な計算はミスがあることも（重要な数字は電卓で確認）",
      "個人への最終判断：医療診断・法的判断・投資アドバイスはAIに任せず専門家へ",
      "感情・共感：相談の聞き役にはなれるが、本当の意味で「わかる」わけではない",
    ],
    tips: [
      "AIは『優秀な下書き作成者』。最終確認・責任・専門判断は人間が持つ意識が大切",
    ],
  },
  {
    id: "c-prompt-advanced",
    providerId: "common",
    categoryId: "tips",
    title: "プロンプトの応用テクニック",
    level: "intermediate",
    summary:
      "基本の型をマスターしたら、次は「思考の見える化」や「例を見せる」など上級テクニックで回答精度をさらに上げましょう。",
    points: [
      "Chain of Thought：『ステップバイステップで考えて』と添えると思考過程が見えてミスが減る",
      "出力形式指定：『JSON形式で』『Markdownの表で』と形式を明示すると後処理がラクに",
      "Few-shot：『例：入力→出力』を2〜3セット見せると、パターンを理解して応用してくれる",
      "役割の固定：長い会話では『あなたは〇〇の専門家です。この設定を維持して』と都度リマインド",
    ],
    tips: [
      "うまくいったプロンプトは「テンプレ」としてメモアプリに保存→次回再利用が効率的",
    ],
  },
  {
    id: "c-ai-image",
    providerId: "common",
    categoryId: "tips",
    title: "AI画像生成の基礎知識",
    level: "beginner",
    summary:
      "文章を入力するだけで絵・イラスト・写真風の画像を作れるAI画像生成。ChatGPT・Geminiでも使えます。",
    points: [
      "ChatGPT（DALL-E）・Gemini・Adobe Fireflyなどが代表的なAI画像生成ツール",
      "プロンプトは詳しく書くほど意図に近い画像になる（スタイル・色・構図・雰囲気を指定）",
      "生成画像の商用利用は各サービスの利用規約を必ず確認する",
      "実在する人物の顔・有名キャラクターの模倣は権利問題になりうるので注意",
    ],
    tips: [
      "まずは『シンプルなアイコン』『水彩画風の風景』から練習すると感覚がつかみやすい",
    ],
  },
  {
    id: "c-daily-habit",
    providerId: "common",
    categoryId: "personal",
    title: "AI活用を「習慣化」するコツ",
    level: "beginner",
    summary:
      "使いたいと思っていても続かないのはよくあること。日常の小さなシーンに組み込む方法を紹介します。",
    points: [
      "まず1つの用途（例：メール下書き）だけに絞って使い始め、慣れたら広げる",
      "『困ったらまずAIに聞いてみる』を口癖にすると自然に馴染んでいく",
      "うまくいったプロンプトはメモアプリに保存→次回そのまま使い回し",
      "週1回、新しい使い方を1つだけ試すゆるい目標を立てると続きやすい",
    ],
    tips: [
      "最初の1週間は「失敗してもいい練習期間」と考えると気軽に使い始められる",
    ],
  },

  // ===========================================================================
  // ChatGPT（追加）
  // ===========================================================================
  {
    id: "gpt-canvas",
    providerId: "chatgpt",
    categoryId: "tips",
    title: "Canvasで文書・コードをその場で編集",
    level: "intermediate",
    summary:
      "Canvasモードを使うと、AIが生成した文章やコードをサイドパネルに表示し、対話しながら共同編集できます。",
    points: [
      "長い文章の修正やコードの改善に最適（毎回全文を送り直す手間が省ける）",
      "「このCanvasで〇〇の段落を追加して」と指示するだけで部分的な修正が可能",
      "コメント機能で「この段落をもっと短く」などの指示を直接テキストに付けられる",
      "最終的な成果物のダウンロード・クリップボードへのコピーも簡単",
    ],
    tips: [
      "文章を繰り返し推敲するブログ記事・企画書・コードのリファクタリングに特に効果的",
    ],
  },
  {
    id: "gpt-memory",
    providerId: "chatgpt",
    categoryId: "tips",
    title: "メモリ機能で「自分を覚えてもらう」",
    level: "beginner",
    summary:
      "ChatGPTのメモリ機能をオンにすると、会話をまたいで自分の情報・好み・ルールを覚えてくれます。",
    points: [
      "設定→パーソナライゼーション→メモリからオン/オフを切り替え",
      "「私の職業は〇〇」「いつも箇条書きで回答して」などを伝えると記憶される",
      "「これまで覚えていることを教えて」と聞くと記憶内容を確認できる",
      "不要な記憶は個別に削除でき、プライバシーをコントロールできる",
    ],
    tips: [
      "毎回「〇〇の専門家として」と設定しなくても自動で一貫した回答が得られるようになる",
    ],
  },
  {
    id: "gpt-gpts",
    providerId: "chatgpt",
    categoryId: "tips",
    title: "GPTsで目的別アシスタントを使う",
    level: "intermediate",
    summary:
      "GPTsは用途に特化したカスタムChatGPT。語学練習・料理提案・コード補助など、専門家のように答えてくれます。",
    points: [
      "ChatGPTのサイドバー「GPTを探す」から無料で多数のGPTsが使える",
      "人気GPTs例：英会話練習パートナー・PDF読み込み解析・コード解説・旅行プランナー",
      "プロンプトを毎回書かなくていい分、使い慣れたら通常より効率的",
      "Plus/Proプランでは自作GPTを作り、チーム内で共有することも可能",
    ],
    tips: [
      "まず検索で「日本語対応」「初心者向け」のタグで絞り込むと使いやすいGPTsが見つかりやすい",
    ],
  },
  {
    id: "gpt-search",
    providerId: "chatgpt",
    categoryId: "tips",
    title: "ウェブ検索で最新情報を調べる",
    level: "beginner",
    summary:
      "ChatGPTの検索機能を使うと、リアルタイムでWebを調べた上で回答してくれます。ハルシネーションも減り信頼性アップ。",
    points: [
      "プロンプト欄の地球儀アイコンをオンにする（またはデフォルトで有効な場合も）",
      "「今日のドル円レートは？」「最新の〇〇ニュースは？」など時事情報に強くなる",
      "引用元URLが表示されるため、情報の信頼性を自分で確認できる",
      "通常の会話よりやや回答が遅くなる場合があるが、精度と信頼性は向上する",
    ],
  },
  {
    id: "gpt-reasoning",
    providerId: "chatgpt",
    categoryId: "tips",
    title: "o3/o4推論モデルで難問を解く",
    level: "intermediate",
    summary:
      "ChatGPTのo3・o4シリーズは「答える前に内部でじっくり考える」推論モデル。複雑な問題・数学・多段階の計画に圧倒的な強さを発揮します。",
    points: [
      "モデル選択でo3またはo4-miniを選ぶだけで推論モードに切り替わる",
      "通常モデルより回答が遅いが、数学・論理・コード生成・複雑な計画の正確性が大幅向上",
      "o4-miniはコスト効率が高く、コーディングや推論タスクにコスパ最強",
      "使い分け：日常会話はGPT-5、難しい問題だけo3/o4を使うとトークン節約にもなる",
    ],
    tips: [
      "「段階的に考えてから答えて」と一言添えると、通常モデルでも推論の質が上がる",
    ],
  },
  {
    id: "gpt-english",
    providerId: "chatgpt",
    categoryId: "personal",
    title: "ChatGPTで英語力を伸ばす",
    level: "beginner",
    summary:
      "英会話の練習相手・英作文の添削・難しい英語表現の解説まで、ChatGPTは最強の英語学習パートナーになります。",
    points: [
      "『英語で日常会話を練習したい。初中級レベルで話しかけてください』でスタート",
      "書いた英文を貼って『自然な表現に直して、変更点と理由も教えて』で添削",
      "ドラマのセリフや英語記事を貼って『わからない表現を全部解説して』",
      "音声モードで実際に話す練習もできる（リスニング・スピーキング両方に効果あり）",
    ],
    tips: [
      "「間違えても気にしないでください。自然な会話を続けて」と一言添えると練習しやすくなる",
    ],
  },

  // ===========================================================================
  // Gemini（追加）
  // ===========================================================================
  {
    id: "gem-notebooklm",
    providerId: "gemini",
    categoryId: "tips",
    title: "NotebookLMで勉強・研究を深める",
    level: "beginner",
    summary:
      "GoogleのNotebookLMは、自分でアップロードした資料だけを参照して回答するAI。ハルシネーションが少なく、論文・教科書の読み込みに最適です。",
    points: [
      "notebooklm.google.com で無料利用可能（Googleアカウントで即スタート）",
      "PDF・URL・Googleドキュメントを登録→その内容だけを根拠にした質問・要約ができる",
      "「この章のポイントを5つ」「反論になりそうな箇所は？」など深掘りが得意",
      "『Audio Overview』で登録した資料をポッドキャスト形式の音声対話に変換できる",
    ],
    tips: [
      "試験勉強・資格取得・学術研究など「この資料の範囲で正確に答えてほしい」場面にピッタリ",
    ],
  },
  {
    id: "gem-translate",
    providerId: "gemini",
    categoryId: "tips",
    title: "Geminiで翻訳・多言語コミュニケーション",
    level: "beginner",
    summary:
      "単純な翻訳だけでなく、ニュアンスやトーンを指定した翻訳、海外向けコミュニケーションの下書き作成が得意です。",
    points: [
      "『フォーマルなビジネスメールとして英訳して』のようにトーン・スタイルを指定できる",
      "外国語の文章を貼って『文化的な背景も説明しながら和訳して』と深い翻訳を依頼",
      "英語・中国語・韓国語・スペイン語など多言語に対応",
      "Google翻訳より文脈を理解した自然な翻訳が期待できる",
    ],
    tips: [
      "『ネイティブが読んで自然に聞こえるか確認して』と続けると品質チェックも一緒にできる",
    ],
  },
  {
    id: "gem-advanced",
    providerId: "gemini",
    categoryId: "basics",
    title: "Gemini Advancedの追加機能",
    level: "intermediate",
    summary:
      "Googleの有料プランでは、より高性能なモデルの優先利用・長い資料の処理・Workspace高度連携などが解放されます。",
    points: [
      "より高性能なモデルが優先利用でき、回答の質と処理スピードが向上する",
      "長い資料・動画・複数ファイルの処理上限が大幅アップ",
      "Google Workspace（Gmail/ドキュメント/スプレッドシートなど）との高度な連携が解放される",
      "Google Oneプレミアムプランにセットで含まれることが多く、2TB追加ストレージも付く",
    ],
    tips: [
      "仕事でGoogleサービスを毎日使う人なら、Google One Premiumとのセットとして費用対効果が高い",
    ],
  },
  {
    id: "gem-productivity",
    providerId: "gemini",
    categoryId: "work",
    title: "Geminiで業務効率を最大化する",
    level: "beginner",
    summary:
      "Googleサービスをよく使うビジネスパーソンなら、Geminiが一番効率を上げやすいAIかもしれません。主な連携ポイントを紹介。",
    points: [
      "Googleカレンダーと連携し「今週の空き時間を教えて」「ミーティング準備リストを作って」",
      "GoogleドライブのファイルをGeminiに読み込ませてその場で分析・要約・比較",
      "GmailとGeminiを組み合わせて受信トレイを素早く処理する習慣を作る",
      "Google MeetとGeminiを組み合わせて、会議後の要約・議事録・タスク整理を自動化",
    ],
    tips: [
      "Workspace（企業アカウント）ではGeminiをドキュメント・スプレッドシート内で直接呼び出せる",
    ],
  },
  {
    id: "gem-learn-support",
    providerId: "gemini",
    categoryId: "personal",
    title: "Google連携で学習をサポートする",
    level: "beginner",
    summary:
      "YouTube・検索・ドキュメントなどGoogleの学習コンテンツとGeminiを組み合わせると、情報収集から理解まで一気通貫できます。",
    points: [
      "気になる動画のURLをGeminiに貼ると要約と重要箇所を整理してくれる",
      "Googleドキュメントで勉強ノートを書きながら、隣のGeminiに質問して理解を深める",
      "「このトピックについて初心者向けのYouTubeチャンネルを教えて」で学習リソースを発掘",
      "興味ある分野の最新ニュースを毎日3行でまとめてもらう習慣づくりにも",
    ],
    tips: [
      "Gemini + NotebookLM（同じGoogleアカウント）を組み合わせると学習の深さが一段上がる",
    ],
  },

  {
    id: "gem-veo",
    providerId: "gemini",
    categoryId: "tips",
    title: "Veo 3でAI動画を生成する",
    level: "intermediate",
    summary:
      "GoogleのVeo 3は、文章を入力するだけでリアルな動画・音声付き映像を生成できるAI。2026年のGemini最大の目玉機能です。",
    points: [
      "夕暮れの海辺を歩く人のシーンのように日本語でシーンを説明するだけで動画が完成",
      "音声・BGM・環境音まで自動生成（Veo 3）。映像と音が同時に作られる",
      "SNS投稿・プレゼン資料・広告素材のたたき台づくりに活用できる",
      "Google Labs（labs.google）から試用可能（2026年時点で段階的公開中）",
    ],
    tips: [
      "生成動画の商用利用は規約を確認。SynthID（透かし）が埋め込まれており、AI生成と識別される",
    ],
  },

  // ===========================================================================
  // Claude（追加）
  // ===========================================================================
  {
    id: "cl-feedback",
    providerId: "claude",
    categoryId: "work",
    title: "自分の文章にフィードバックをもらう",
    level: "beginner",
    summary:
      "書いた文章を読んでもらい、論理の穴・わかりにくい箇所・改善案を率直に指摘してもらえます。Claudeは親身で具体的な批評が得意。",
    points: [
      "『この文章の問題点を、遠慮せず厳しく指摘して』と頼むと本音で答えてくれる",
      "『読み手が感じるであろう疑問点をすべて出して』で客観的なチェックができる",
      "プレゼン資料・応募書類・提案書の磨き上げに効果大",
      "指摘後に『この観点で書き直して』と続けると一気に完成度が上がる",
    ],
    tips: [
      "「批評した後で、私の文章の良かった点も教えて」と添えると学びになる指摘が得られる",
    ],
  },
  {
    id: "cl-english",
    providerId: "claude",
    categoryId: "personal",
    title: "Claudeで英文作成・英語学習",
    level: "beginner",
    summary:
      "Claudeは英語の自然さと丁寧さで定評あり。英文メールの下書き・英作文の添削・表現の幅を広げる練習に最適です。",
    points: [
      "「このビジネスメールを丁寧な英語に翻訳して」→ネイティブ品質の英文が完成",
      "書いた英文を貼って「添削して、変更箇所とその理由をわかりやすく教えて」",
      "「このフレーズを5種類の言い換えで」でボキャブラリーを効率よく増やす",
      "英語のエッセイや論文の構成チェック・フィードバックにも対応",
    ],
    tips: [
      "「添削は文法より自然さ重視でお願いします」と条件を付けるとより実用的な英語に近づく",
    ],
  },
  {
    id: "cl-planning",
    providerId: "claude",
    categoryId: "work",
    title: "プロジェクト計画・タスク整理の相談相手",
    level: "beginner",
    summary:
      "「何から始めればいいかわからない」という状態からでも、一緒に優先順位と手順を整理してもらえます。",
    points: [
      "「〇〇をゴールに、今月中にやるべきことをリストアップして優先順位を付けて」",
      "「このタスクの見積もり時間はどれくらい？考えられるリスクは？」で計画の精度を上げる",
      "「並行して進める作業と順番に進める作業を分けて整理して」でボトルネックを見つける",
      "「このプランの抜け漏れを指摘して」で完成後の最終チェックも依頼できる",
    ],
    tips: [
      "タスクを細分化してもらった後「Markdownのチェックリスト形式で出力して」と言うと使い回しやすい",
    ],
  },
  {
    id: "cl-debate",
    providerId: "claude",
    categoryId: "personal",
    title: "賛否両論を引き出して思考を深める",
    level: "beginner",
    summary:
      "物事を一方向だけで考えるより、AIに意図的に反論を引き出してもらうと、思考の質と判断の精度が一気に高まります。",
    points: [
      "「私の考えに反論してください。遠慮なく」で盲点・弱点を先に発見できる",
      "「この判断のメリットとデメリットを5対5で出して」でバランスある視点を得る",
      "「悪魔の代弁者として、逆の立場から意見を述べて」で想定外の視点を仕入れる",
      "プレゼンの想定Q&A準備・重要な決断の前の確認・論文の反論対策に活用できる",
    ],
    tips: [
      "一通り反論を聞いた後「これらを踏まえて、最終的な私の立場をどう補強すればいい？」と続けると有益",
    ],
  },
];

// -----------------------------------------------------------------------------
// 3-b. 各カードのYouTube動画（厳選・実在＆埋め込み確認済み 2026-06）
//   カードID → 動画ID(11文字)。動画を変えたい時はここだけ直せばOK。
//   動画が非公開になった場合もこのIDを差し替えてください。
//   ※ここに無いカードIDは動画なしになります。
// -----------------------------------------------------------------------------
const cardVideos = {
  // AI共通の基礎（2026年版）
  "c-what-is-ai": "YFtoy_tfYfc",
  "c-hallucination": "xaW1JOkVigY",
  "c-privacy": "POnuTF1Dens",
  "c-prompt-basics": "drSBwuatp2o",
  "c-compare": "4gaP_6RC2VY",
  "c-iterate": "lLHJ46ss_7E",
  "c-agents": "sal78ACtGTY",
  "c-reasoning": "eqXMPMiLbCE",
  // ChatGPT
  "gpt-start": "EpvqUuHq4Rc",
  "gpt-overview": "aIhn9XXpTRY",
  "gpt-voice": "SQwbgyuwH3I",
  "gpt-vision": "9ht7y6cnUUE",
  "gpt-custom": "i3e26vgYYeg",
  "gpt-meeting": "pbcWRo52npo",
  "gpt-email": "Xm99TjhVw8Q",
  "gpt-excel": "Jd_kJRSzZD0",
  "gpt-data": "e27cLeNbPxw",
  "gpt-meal": "1gmBlmK4BwA",
  "gpt-travel": "p1_sZ5NIMrg",
  "gpt-learn": "ac9m5kGQDwU",
  // Gemini
  "gem-start": "o5kXK5JvIt8",
  "gem-overview": "bntUu77o6Vw",
  "gem-youtube": "9buDnQvQoGc",
  "gem-research": "4ZtCANJcdEQ",
  "gem-image": "fXTLSjO_S_Y",
  "gem-gmail": "yi0bDhRFAAI",
  "gem-docs": "UN_fExnmSLE",
  "gem-summarize-doc": "J5jigeCgKyo",
  "gem-travel": "6LzFY1CCsSo",
  "gem-study": "cdC_GHyi0UQ",
  // Claude
  "cl-start": "fZD2IlRGBTI",
  "cl-overview": "qZT57PZXG3o",
  "cl-files": "XpBDBRGy_94",
  "cl-projects": "RcLDdRBUanI",
  "cl-artifacts": "LPUPKoV14e0",
  "cl-writing": "gu6_cDIvFNw",
  "cl-longdoc": "JvJKjYMxZVM",
  "cl-coding": "Jhxj1fDN2DU",
  "cl-brainstorm": "zNxg1l-55O8",
  "cl-learn": "5f6SNajwepQ",
  "cl-life": "n6MLfIYswyM",
  // AI共通の基礎（追加）
  "c-copyright": "AaAGq2ZU-pE",
  "c-paid-vs-free": "PivRogcZn0A",
  "c-limitations": "q7OigZsj15I",
  "c-prompt-advanced": "bxMfSB-pD04",
  "c-ai-image": "bza_cmNgT1E",
  "c-daily-habit": "oovSJp62vDg",
  // ChatGPT（追加）
  "gpt-reasoning": "7oeAkTTYHiI",
  "gpt-canvas": "HyDh0Wb_KdA",
  "gpt-memory": "U8Es4bxPIlk",
  "gpt-gpts": "sDruvstmu6I",
  "gpt-search": "Gjb87d9MBzQ",
  "gpt-english": "c215r9FLbaw",
  // Gemini（追加）
  "gem-veo": "8zVVvnM73kA",
  "gem-notebooklm": "Wok45BQMEV8",
  "gem-translate": "HuyOO_oxoic",
  "gem-advanced": "watp8CGPa6c",
  "gem-productivity": "0BZpNHfdFIk",
  "gem-learn-support": "8WJMkNtxTUQ",
  // Claude（追加）
  "cl-feedback": "ZWdC0pUOpuo",
  "cl-english": "4IEaloiyelA",
  "cl-planning": "pCM6m4OaJwM",
  "cl-debate": "a49tuT-O6ag",
};

// 各カードへ動画IDを割り当てる（単一の真実: cardVideos）
cards.forEach((card) => {
  if (cardVideos[card.id]) card.youtube = cardVideos[card.id];
});

// -----------------------------------------------------------------------------
// 4. サイト全体のテキスト
// -----------------------------------------------------------------------------
export const site = {
  title: "はじめてのAIナビ",
  subtitle: "ChatGPT・Gemini・Claude を、初心者から。",
  heroLead:
    "3大AIの『これだけは知っておきたい基礎』から、仕事がラクになる活用術、暮らしが豊かになるヒントまで。カードで気軽に、動画でしっかり学べます。",
  heroNote: "登録不要・どこからでも読めます。気になるカードから、どうぞ。",
  footer:
    "本サイトは学習用のまとめです。各サービスの仕様・料金・規約は変わることがあるため、最新情報は各公式サイトでご確認ください。掲載動画は第三者が公開する参考資料です。",
};
