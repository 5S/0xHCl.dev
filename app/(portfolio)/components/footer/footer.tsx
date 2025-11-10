export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 py-6 text-[#9198a1]">
      <p>© 2024 HCl.</p>
      <ul className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/privacy-policy">Privacy Policy</a>
        </li>
        <li>
          <a href="/terms-of-service">Terms of Service</a>
        </li>
        <li>
          <a href="/specified-commercial-transaction-act">
            Specified Commercial Transactions Act
          </a>
        </li>
      </ul>
    </footer>
  );
}
