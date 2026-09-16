export function Footer() {
  return (
    <footer className="border-t border-console-border py-10">
      <div className="mx-auto flex max-w-[1080px] flex-wrap justify-between gap-2.5 px-6 font-mono text-[11.5px] text-console-dim">
        <span>© {new Date().getFullYear()} bigdev.uz</span>
        <span>Designed by Khushnud Eshtemirov</span>
      </div>
    </footer>
  );
}
