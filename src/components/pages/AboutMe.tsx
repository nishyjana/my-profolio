import Experience from "../atom/Experince";
import MediumArticle from "../atom/MediumArticle";

export default function AboutMe() {
  return (
    <div className="w-full h-full bg-black bg-opacity-5 rounded-2xl">
      <div className="lg:border-2 lg:border-orange rounder-3xl border-opacity-50 bg-orange bg-opacity-5 h-full w-full rounded-2xl m-auto flex-col">
        <h1 className="mx-10 text-center my-10 font-serif text-lg text-orange">
          My Experience
        </h1>
        <Experience/>
        <h1 className="mx-10 text-center my-10 font-serif text-lg text-orange">
          My medium articles
        </h1>
        <MediumArticle />
      </div>
    </div>
  );
}
