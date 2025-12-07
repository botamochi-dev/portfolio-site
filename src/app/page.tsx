import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-liner-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      <main className="mx-auto max-w-5xl px-6 py-16">
        {/* ヘッダー */}
        <header className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Portfolio
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            このサイトの説明を書く
          </p>
        </header>

        {/* 自己紹介セクション */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            自己紹介
          </h2>
          <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-zinc-800">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <div className="shrink-0">
                <div className="h-32 w-32 rounded-full bg-zinc-300 dark:bg-zinc-600">
                  { <Image src="/projects/profile.png" alt="プロフィール" width={128} height={128} className="rounded-full" /> }
                </div>
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                  名前
                </h3>
                <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                  群馬大学 情報学科 3年
                </p>
                <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
                  自己紹介を書く
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 開発したシステムの紹介セクション */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            制作物
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* プロジェクト1 */}
            <div className="rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-zinc-800">
              <div className="mb-4 h-48 rounded-lg bg-zinc-200 dark:bg-zinc-700">
                {/* プロジェクトのスクリーンショットをここに配置 */}
                {/* <Image src="/projects/project1.png" alt="プロジェクト1" width={400} height={300} className="rounded-lg" /> */}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                プロジェクト名1
              </h3>
              <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                使用技術:
              </p>
              <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
                プロジェクトの説明
              </p>
            </div>

            {/* プロジェクト2 */}
            <div className="rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-zinc-800">
              <div className="mb-4 h-48 rounded-lg bg-zinc-200 dark:bg-zinc-700">
                {/* プロジェクトのスクリーンショットをここに配置 */}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                プロジェクト名2
              </h3>
              <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                使用技術:
              </p>
              <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
                プロジェクトの説明
              </p>
            </div>

            {/* プロジェクト3 */}
            <div className="rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-zinc-800">
              <div className="mb-4 h-48 rounded-lg bg-zinc-200 dark:bg-zinc-700">
                {/* プロジェクトのスクリーンショットをここに配置 */}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                プロジェクト名3
              </h3>
              <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                使用技術:
              </p>
              <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
                プロジェクトの説明
              </p>
            </div>

            {/* プロジェクト4 */}
            <div className="rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-zinc-800">
              <div className="mb-4 h-48 rounded-lg bg-zinc-200 dark:bg-zinc-700">
                {/* プロジェクトのスクリーンショットをここに配置 */}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                プロジェクト名4
              </h3>
              <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                使用技術:
              </p>
              <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
                プロジェクトの説明
              </p>
            </div>
          </div>
        </section>

        {/* スキル一覧セクション */}
        <section className="mb-20">
          <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            スキル
          </h2>
          <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-zinc-800">
            <div className="grid gap-6 md:grid-cols-2">
              {/* スキル項目の例 */}
              
              {/* JavaScript */}
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                  {/* アイコン画像を配置 */}
                  {<Image src="/projects/icon-javascript.svg" alt="JavaScript" width={56} height={56} />}
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 font-semibold text-zinc-900 dark:text-zinc-50">
                    JavaScript
                  </h3>
                  <p className="mb-2 text-xs text-zinc-600 dark:text-zinc-400">2年〜</p>
                  <div className="flex gap-1">
                    {/* スキルレベル表示（5段階） */}
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                  </div>
                </div>
              </div>

              {/* Python */}
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                  <Image src="/projects/icon-python.svg" alt="Python" width={56} height={56} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 font-semibold text-zinc-900 dark:text-zinc-50">
                    Python
                  </h3>
                  <p className="mb-2 text-xs text-zinc-600 dark:text-zinc-400">2年〜</p>
                  <div className="flex gap-1">
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                  </div>
                </div>
              </div>

              {/* TypeScript */}
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                  <Image src="/projects/icon-typescript.svg" alt="TypeScript" width={56} height={56} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 font-semibold text-zinc-900 dark:text-zinc-50">
                    TypeScript
                  </h3>
                  <p className="mb-2 text-xs text-zinc-600 dark:text-zinc-400">1年〜</p>
                  <div className="flex gap-1">
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                  </div>
                </div>
              </div>

              {/* Java */}
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                  <Image src="/projects/icon-java.svg" alt="Java" width={56} height={56} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 font-semibold text-zinc-900 dark:text-zinc-50">
                    Java
                  </h3>
                  <p className="mb-2 text-xs text-zinc-600 dark:text-zinc-400">2年〜</p>
                  <div className="flex gap-1">
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                  </div>
                </div>
              </div>

              {/* Next.js */}
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                  <Image src="/projects/icon-nextjs.svg" alt="Next.js" width={56} height={56} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 font-semibold text-zinc-900 dark:text-zinc-50">
                    Next.js
                  </h3>
                  <p className="mb-2 text-xs text-zinc-600 dark:text-zinc-400">1年〜</p>
                  <div className="flex gap-1">
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                  </div>
                </div>
              </div>

              {/* Minecraft */}
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                  <Image src="/projects/icon-minecraft.svg" alt="Minecraft" width={56} height={56} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 font-semibold text-zinc-900 dark:text-zinc-50">
                    MCFunction
                  </h3>
                  <p className="mb-2 text-xs text-zinc-600 dark:text-zinc-400">8年〜</p>
                  <div className="flex gap-1">
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                  </div>
                </div>
              </div>

              {/* Git/GitHub */}
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                  <Image src="/projects/icon-github.svg" alt="Git/GitHub" width={56} height={56} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 font-semibold text-zinc-900 dark:text-zinc-50">
                    Git/GitHub
                  </h3>
                  <p className="mb-2 text-xs text-zinc-600 dark:text-zinc-400">4年〜</p>
                  <div className="flex gap-1">
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                  </div>
                </div>
              </div>

              {/* Vercel */}
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                  <Image src="/projects/icon-vercel.svg" alt="Vercel" width={56} height={56} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 font-semibold text-zinc-900 dark:text-zinc-50">
                    Vercel
                  </h3>
                  <p className="mb-2 text-xs text-zinc-600 dark:text-zinc-400">2年〜</p>
                  <div className="flex gap-1">
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-600"></div>
                  </div>
                </div>
              </div>

            </div>

            {/* スキルレベルの凡例 */}
            <div className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-700">
              <h3 className="mb-3 text-sm font-semibold text-zinc-900 dark:text-zinc-50">スキルレベル</h3>
              <div className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                  </div>
                  <span>個人で案件を受けられるレベル</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300"></div>
                  </div>
                  <span>制作上で使用に困らないレベル</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300"></div>
                  </div>
                  <span>そこそこの機能が作れるレベル</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300"></div>
                  </div>
                  <span>基礎的な理解があるレベル</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300"></div>
                    <div className="h-3 w-3 rounded-full bg-zinc-300"></div>
                  </div>
                  <span>使用したことはあるレベル</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 連絡先情報セクション */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            連絡先
          </h2>
          <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-zinc-800">
            <div className="grid gap-6 md:grid-cols-2">
              {/* メール */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Email</p>
                  <a href="mailto:your.email@example.com" className="font-medium text-zinc-900 hover:text-blue-600 dark:text-zinc-50 dark:hover:text-blue-400">
                    your.email@example.com
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                  <svg className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">GitHub</p>
                  <a href="https://github.com/botamochi-dev" target="_blank" rel="noopener noreferrer" className="font-medium text-zinc-900 hover:text-blue-600 dark:text-zinc-50 dark:hover:text-blue-400">
                    github.com/botamochi-dev
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* フッター */}
        <footer className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>&copy; 2025 Botamochi. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
