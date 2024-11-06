export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 py-6 text-[#9198a1]">
      <p>© 2024 HCl.</p>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li className="mx-2">
          <a href="/commerce">特定商取引法に基づく表記</a>
        </li>
      </ul>
    </footer>
  );
}
