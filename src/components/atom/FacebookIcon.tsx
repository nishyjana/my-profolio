import { FACEBOOK_ICON_URL, FACEBOOK_PROFILE_LINK } from "../constants/Resources";

export default function FacebookIcon() {
  return (
    <svg
      className="w-6 h-6 text-blue-600 fill-orange cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      onClick={() =>
        (window.location.href = `${FACEBOOK_PROFILE_LINK}`)
      }
    >
      <path d={FACEBOOK_ICON_URL} />
    </svg>
  );
}
