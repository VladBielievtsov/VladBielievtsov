import { Link } from "react-router";

function LinkComponent({
  children,
  href,
  router = false,
}: {
  children: React.ReactNode;
  href: string;
  router?: boolean;
}) {
  return router ? (
    <Link to={href} className="text-sapphire hover:text-green">
      [{children}]
    </Link>
  ) : (
    <a href={href} target="_blank" className="text-sapphire hover:text-green">
      [{children}]
    </a>
  );
}

export { LinkComponent as Link };
