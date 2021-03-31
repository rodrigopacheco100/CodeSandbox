import Link from "next/link";

interface a {
  nome: string;
}

const IndexPage = () => {
  return (
    <div>
      Hello Worlda.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
};

export default IndexPage;
