export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 py-6 text-[#9198a1]">
      <p>© 2024 HCl.</p>
      <ul className="flex items-center gap-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/privacy">プライバシーポリシー</a>
        </li>
        <li>
          <a href="/terms">利用規約</a>
        </li>
        <li>
          <a href="/commerce">特定商取引法に基づく表記</a>
        </li>
      </ul>
    </footer>
  );
}
