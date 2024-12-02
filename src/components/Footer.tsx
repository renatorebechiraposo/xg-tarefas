import { FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="flex fixed w-full h-auto bottom-0 p-2 bg-green-600 justify-between items-center">
        <div>
          <p>XeydGel&copy;</p>
        </div>
        <div className="flex gap-2 mr-2">
          <a
            href="https://www.instagram.com/renatorebechiraposo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6 cursor-pointer" />
          </a>
          <a
            href="https://github.com/renatorebechiraposo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6 cursor-pointer" />
          </a>
        </div>
      </footer>
    </>
  );
}
