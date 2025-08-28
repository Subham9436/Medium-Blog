import { footerlinks } from "../constants";

export function FooterHero() {
  return (
    <div>
      <hr></hr>
      <div className="flex flex-row justify-center items-center py-10">
        {/* Footer Content */}
        {footerlinks.map((link) => (
          <div key={link.name} className="mx-4">
            <a
              href={link.link}
              className="text-lg text-gray-400 hover:underline underline-offset-4"
              style={{ cursor: "pointer" }}
            >
              <h3>{link.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
