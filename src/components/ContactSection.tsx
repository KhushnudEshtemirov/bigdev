import { CONTACT_LINKS } from "../data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-[1080px] px-6">
        <span className="mb-2.5 block font-mono text-[11.5px] uppercase tracking-[0.1em] text-accent-purple">
          // contact
        </span>
        <h2 className="mb-9 text-[28px] font-extrabold sm:text-[30px]">
          Get in touch
        </h2>

        <div className="rounded-[10px] border border-console-border bg-[#0D0F16] p-6 font-mono text-[13.5px] sm:p-[26px]">
          <div className="mb-4 flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-console-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-console-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-console-border" />
          </div>

          <div className="mb-2.5 text-console-dim">$ whoami</div>
          <div className="mb-2.5 text-console-dim">
            <b className="font-medium text-accent-green">khushnud</b> — frontend
            developer, Tashkent
          </div>
          <div className="mb-2.5 text-console-dim">$ cat contacts.txt</div>

          {CONTACT_LINKS.map((link) => (
            <div
              key={link.label}
              className="mb-2.5 break-words text-console-dim"
            >
              {link.label}:{" "}
              <a href={link.href} className="text-accent-blue hover:underline">
                {link.value}
              </a>
            </div>
          ))}

          <div className="text-console-dim">
            ${" "}
            <span className="inline-block h-3.5 w-[7px] animate-blink bg-accent-purple align-middle" />
          </div>
        </div>
      </div>
    </section>
  );
}
