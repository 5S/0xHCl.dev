import Header from "@/app/components/Header";
import ProfileSidebar from "@/app/components/ProfileSidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 - 0xHCl.dev",
  twitter: {
    title: "特定商取引法に基づく表記 - 0xHCl.dev",
  },
  openGraph: {
    url: "https://0xhcl.dev/commerce",
    title: "特定商取引法に基づく表記 - 0xHCl.dev",
    siteName: "特定商取引法に基づく表記 - 0xHCl.dev",
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0d1117] text-white">
      <Header />
      <main className="flex-grow p-4 md:p-8">
        <div className="mx-auto max-w-7xl">
          <div className="md:flex md:space-x-8">
            <ProfileSidebar
              name="HCl"
              location="Tokyo, Japan"
              languages="Japanese, English"
              x="@HCl"
              gitHub="5S"
              ens="0xHCl.dev"
              ethereumAddress="0x1b6CD9541B2821934F8BF946c073C022B3Ba968b"
            />
            <div className="md:w-3/4">
              <h1 className="mb-8 font-bold text-2xl">
                特定商取引法に基づく表記
              </h1>

              <div className="space-y-8">
                <section>
                  <h2 className="mb-2 font-semibold text-xl">販売業社の名称</h2>
                  <p>Zia Innovation Labs</p>
                </section>

                <section>
                  <h2 className="mb-2 font-semibold text-xl">所在地</h2>
                  <p>請求があった場合、遅滞なく開示いたします。</p>
                </section>

                <section>
                  <h2 className="mb-2 font-semibold text-xl">電話番号</h2>
                  <p>請求があった場合、遅滞なく開示いたします。</p>
                </section>

                <section>
                  <h2 className="mb-2 font-semibold text-xl">メールアドレス</h2>
                  <a href="mailto:info@0xHCl.dev" className="text-blue-500">
                    info@0xHCl.dev
                  </a>
                </section>

                <section>
                  <h2 className="mb-2 font-semibold text-xl">運営統括責任者</h2>
                  <p>齊藤 宥惟</p>
                </section>

                <section>
                  <h2 className="mb-2 font-semibold text-xl">
                    追加手数料等の追加料金
                  </h2>
                  <p className="mb-4">特にありません。</p>

                  <h2 className="mb-2 font-semibold text-xl">交換ポリシー</h2>
                  <p className="mb-4">
                    受託システム開発の特性上、交換は基本的に行いません。ただし、納品されたシステムに重大な不具合があり、かつ当方の過失によるものである場合は、以下の対応をいたします。
                  </p>
                  <ul className="mb-4 list-disc pl-6">
                    <li>
                      不具合が確認された場合、当社は迅速に修正対応を行います。
                    </li>
                    <li>
                      修正対応が困難な場合は、代替システムの提供を検討いたします。
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="mb-2 font-semibold text-xl">引渡時期</h2>
                  <p>契約時に個別にお知らせいたします。</p>
                </section>

                <section>
                  <h2 className="mb-2 font-semibold text-xl">
                    受け付け可能な決済手段
                  </h2>
                  <p>クレジットカードまたは国内の銀行振込段</p>
                </section>

                <section>
                  <h2 className="mb-2 font-semibold text-xl">決済期間</h2>
                  <p>契約時に個別に定めます。</p>
                </section>

                <section>
                  <h2 className="mb-2 font-semibold text-xl">販売価格</h2>
                  <p>個別にお見積りいたします。</p>
                </section>

                <section>
                  <h2 className="mb-2 font-semibold text-xl">販売数量の制限</h2>
                  <p>
                    特に制限はありませんが、プロジェクトの内容や規模によって対応可能な範囲が異なります。
                  </p>
                </section>

                <section>
                  <h2 className="mb-2 font-semibold text-xl">販売価格</h2>
                  <p>個別にお見積りいたします。</p>
                </section>

                <section>
                  <h2 className="mb-2 font-semibold text-xl">
                    ソフトウェアの動作環境
                  </h2>
                  <p>契約時に個別に定めます。</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
