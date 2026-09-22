import type { ReactNode } from "react";

type GuideHtmlProps = {
  html: string;
};

export default function GuideHtml({ html }: GuideHtmlProps): ReactNode {
  return <div className="guideHtml" dangerouslySetInnerHTML={{ __html: html }} />;
}
