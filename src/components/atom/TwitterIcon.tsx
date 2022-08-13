import { TWITTER_URL, TWITTWE_PROFILE } from "../constants/Resources";

export default function TwitterIcon() {
  return (
    <svg
      className="w-6 h-6 text-blue-300 fill-orange"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      onClick={() => (window.location.href = `${TWITTWE_PROFILE}`)}
    >
      <path d={TWITTER_URL}></path>
    </svg>
  );
}
