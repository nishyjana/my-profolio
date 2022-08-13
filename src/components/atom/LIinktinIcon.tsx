import { LINKTIN_PROFILE, LINKTINICON_URL } from "../constants/Resources";

export default function LinkedinIcon() {
  return (
    <svg
      className="w-6 h-6 text-blue-500 fill-orange cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      onClick={() =>
        (window.location.href = `${LINKTIN_PROFILE}`)
      }
    >
      <path d={LINKTINICON_URL}></path>
    </svg>
  );
}
