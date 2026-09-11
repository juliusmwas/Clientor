import type { HelpArticle as HelpArticleType } from "../../../data/helpArticles";

type HelpArticleContentProps = {
  article: HelpArticleType;
};

function HelpArticleContent({ article }: HelpArticleContentProps) {
  return (
    <article className="prose prose-slate max-w-none dark:prose-invert">
      {article.sections.map((section) => (
        <section key={section.heading} className="mb-10 last:mb-0">
          <h2 className="text-xl font-semibold tracking-tight text-text-primary sm:text-2xl">
            {section.heading}
          </h2>

          {section.paragraphs?.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 text-base leading-7 text-text-secondary"
            >
              {paragraph}
            </p>
          ))}

          {section.steps && (
            <ol className="mt-5 space-y-3">
              {section.steps.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-3 text-base leading-7 text-text-secondary"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary-light text-sm font-semibold text-primary">
                    {index + 1}
                  </span>

                  <span>{step}</span>
                </li>
              ))}
            </ol>
          )}
        </section>
      ))}
    </article>
  );
}

export default HelpArticleContent;
