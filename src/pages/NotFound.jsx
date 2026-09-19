import { Link } from "react-router-dom";
import { FaHouse, FaPhone } from "react-icons/fa6";
import Button from "../components/common/Button";
import { siteConfig } from "../data/siteConfig";

/* ======================
   PAGE: 404 - NOT FOUND
=================== */

export default function NotFound() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-7xl font-extrabold text-brand-500 sm:text-8xl">
            404
          </p>

          <h1 className="mt-4 text-3xl sm:text-4xl">This Page Took A Wrong Turn</h1>

          <p className="mt-4 text-base leading-relaxed text-ink-700/80">
            The page you are looking for does not exist or has been moved. Do not
            worry &mdash; your journey can still start from here.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button as={Link} to="/" variant="primary" size="lg">
              <FaHouse /> Back To Home
            </Button>

            <Button
              as="a"
              href={`tel:${siteConfig.phoneRaw}`}
              variant="outline"
              size="lg"
            >
              <FaPhone /> {siteConfig.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
