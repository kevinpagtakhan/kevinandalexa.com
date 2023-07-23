import cls from "classnames";

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}

export function Container ({
  children,
}: ContainerProps): JSX.Element {
  return (
    <div className={
      cls({
        ["relative"]: true,
        ["flex"]: true,
        ["flex-col"]: true,
        ["h-screen"]: true,
      })
    }>
      <main className={
        cls({
          ["container"]: true,
          ["mx-auto"]: true,
          ["max-w-screen-lg"]: true,
          ["pt-6"]: true,
          ["px-6"]: true,
          ["flex-grow"]: true,
        })
      }>
        {children}
      </main>
    </div>
  );
}