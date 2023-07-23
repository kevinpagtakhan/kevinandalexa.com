import cls from "classnames";

interface HeadingProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  text: string;
}

export function Heading ({
  h1,
  h2,
  h3,
  h4,
  text,
}: HeadingProps): JSX.Element {
  const className = cls({
    ["text-2xl"]: h1,
    ["text-xl"]: h2,
    ["text-lg"]: h3,
    ["text-base"]: h4,
    ["pb-3"]: h1 || h2,
    ["pb-2"]: h3,
    ["pb-1"]: h4,
    ["text-sm"]: !h1 && !h2 && !h3 && !h4,
    ["fond-bold"]: !h1 && !h2 && !h3 && !h4,
  });

  if (h1) {
    return (
      <h1 className={className}>{text}</h1>
    );
  }

  if (h2) {
    return (
      <h2 className={className}>{text}</h2>
    );
  }

  if (h3) {
    return (
      <h3 className={className}>{text}</h3>
    );
  }

  if (h4) {
    return (
      <h5 className={className}>{text}</h5>
    );
  }

  return (
    <h5 className={className}>{text}</h5>
  );
}