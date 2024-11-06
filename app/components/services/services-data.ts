export type Service = {
  title: string;
  description: string;
  price?: string;
};

export const services: Service[] = [
  {
    title: "ホームページ制作",
    description:
      "企業サイトやポートフォリオなど、目的に応じた最適なホームページを制作します。レスポンシブデザイン対応、SEO対策込み。Next.js、Tailwind CSS等のモダンな技術スタックを使用します。",
    price: "30万円〜",
  },
  {
    title: "Webアプリケーション開発",
    description:
      "業務効率化ツールやSaaSなど、ビジネスニーズに合わせたWebアプリケーションを開発します。React、TypeScript、Node.js等を用いた堅牢なアプリケーション構築が可能です。",
    price: "50万円〜",
  },
  {
    title: "スマートコントラクト開発",
    description:
      "NFTやDeFiなど、ブロックチェーン上で動作するスマートコントラクトを開発します。Solidity、Hardhat、OpenZeppelin等を使用した安全な実装を提供します。",
    price: "50万円〜",
  },
  {
    title: "技術コンサルティング",
    description:
      "アーキテクチャ設計、技術選定、セキュリティレビュー、パフォーマンス最適化など、技術的な課題解決をサポートします。Web3やブロックチェーン関連の相談も承ります。",
    price: "80万円〜",
  },
  {
    title: "保守・運用サポート",
    description:
      "既存システムの保守、機能追加、セキュリティアップデート、パフォーマンスチューニングなど、継続的な運用をサポートします。24時間監視や緊急対応にも対応可能です。",
    price: "50万円〜/月",
  },
];
