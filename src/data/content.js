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
      "OpenAIが開発した対話型AI。文章作成・要約・アイデア出し・画像生成・データ分析まで幅広くこなす万能型。迷ったらまず触ってみたい定番。",
    accent: "#10A37F", // OpenAIグリーン
    accentSoft: "#E7F7F1",
    gradient: "linear-gradient(135deg, #10A37F 0%, #1A7F64 100%)",
    officialUrl: "https://chatgpt.com",
    freePlan: "無料プランあり（GPTの上位モデルは回数制限あり）",
    bestFor: "とにかく万能。最初の1つに最適",
  },
  {
    id: "gemini",
    name: "Gemini",
    vendor: "Google",
    emoji: "✨",
    tagline: "Googleサービスと相性抜群のAI",
    description:
      "Googleが開発したAI。Gmail・ドキュメント・スプレッドシート・YouTubeなどGoogleサービスとの連携が強み。検索的な使い方や長い動画・資料の要約が得意。",
    accent: "#4285F4", // Googleブルー
    accentSoft: "#E8F0FE",
    gradient: "linear-gradient(135deg, #4285F4 0%, #9B72F2 50%, #D96570 100%)",
    officialUrl: "https://gemini.google.com",
    freePlan: "Googleアカウントがあれば無料で利用可能",
    bestFor: "Googleをよく使う人・要約や調べ物に",
  },
  {
    id: "claude",
    name: "Claude",
    vendor: "Anthropic",
    emoji: "🧠",
    tagline: "文章力と長文読解にすぐれたAI",
    description:
      "Anthropicが開発したAI。自然で丁寧な文章作成、長い資料の読み込み、思考の整理が得意。安全性を重視した設計で、じっくり相談する相棒として人気。",
    accent: "#D97757", // Anthropicテラコッタ
    accentSoft: "#FBEEE8",
    gradient: "linear-gradient(135deg, #D97757 0%, #C15F3C 100%)",
    officialUrl: "https://claude.ai",
    freePlan: "無料プランあり（利用量に上限あり）",
    bestFor: "文章作成・長文の要約・じっくり相談",
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
    title: "3社をどう使い分ける？",
    level: "beginner",
    summary:
      "どれも優秀ですが得意分野が少し違います。迷ったらChatGPT、Google中心ならGemini、文章・長文ならClaudeが目安。",
    points: [
      "ChatGPT：万能型。画像生成・データ分析・音声会話までこなす定番",
      "Gemini：Gmail/ドキュメント/YouTubeとの連携と、長い資料・動画の要約が強い",
      "Claude：自然で丁寧な文章作成、長文読解、じっくりした相談が得意",
      "全部無料で試せるので、同じ質問を3社に投げて“相性”を確かめるのがおすすめ",
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
    youtube: "7DkEl0kiD9g",
  },
  {
    id: "gpt-overview",
    providerId: "chatgpt",
    categoryId: "basics",
    title: "ChatGPTで“できること”全体像",
    level: "beginner",
    summary:
      "文章・要約・翻訳・アイデア出し・画像生成・データ分析・コード作成まで。1つで何役もこなす万能ツールです。",
    points: [
      "文章：メール・ブログ・企画書の作成と推敲",
      "情報：長文の要約、翻訳、調べ物（検索機能オン時）",
      "クリエイティブ：画像生成、ネーミング、キャッチコピー",
      "分析：表やファイルを読み込んでグラフ化・集計",
    ],
    youtube: "UIyokWUJHck",
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
    youtube: "watp8CGPa6c",
  },
  {
    id: "gem-overview",
    providerId: "gemini",
    categoryId: "basics",
    title: "Geminiの強み＝Google連携",
    level: "beginner",
    summary:
      "Gmail・ドキュメント・スプレッドシート・YouTube・マップなどGoogleサービスと深く連携できるのが最大の特徴です。",
    points: [
      "Gmailの長いスレッドを要約／返信文を作成",
      "ドキュメントやスプレッドシート上でAIに手伝ってもらう",
      "YouTube動画やWebページの内容を要約",
      "Googleマップ情報を使った調べ物にも強い",
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
    youtube: "a49tuT-O6ag",
  },
  {
    id: "cl-overview",
    providerId: "claude",
    categoryId: "basics",
    title: "Claudeが得意なこと",
    level: "beginner",
    summary:
      "自然な文章作成・推敲、長い資料の読み込み、考えの整理が強み。安全性を重視し、ていねいに付き合ってくれます。",
    points: [
      "文章：ニュアンスを汲んだライティング・校正・要約",
      "長文：大量のテキストや複数ファイルをまとめて読める",
      "思考：壁打ち相手として考えの整理・深掘りが得意",
      "制作：Artifactsで文書やちょっとしたアプリも作れる",
    ],
    youtube: "UdEIgP4B0Bs",
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
    youtube: "4NDb-X624gY",
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
];

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
