import { notFound } from "next/navigation";

/** Unknown URLs inside a language get that language's 404 page. */
export default function CatchAll() {
  notFound();
}
