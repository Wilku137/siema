import styles from "./Card.module.css";

interface Props {
  href: string;
  title: string;
  description: string;
}

export const Card = ({ href, title, description }: Props) => {
  return (
    <a href={href} className={styles.card}>
      <h2>{title} &rarr;</h2>
      <p>{description}</p>
    </a>
  );
};
