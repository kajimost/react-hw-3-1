import Star from '../Star/Star';

type StarsProps = {
  count?: number;
};

export default function Stars({ count = 0 }: StarsProps) {
  if (
    typeof count !== 'number' ||
    count < 1 ||
    count > 5
  ) {
    return null;
  }

  const stars: number[] = [];

  for (let i = 0; i < count; i++) {
    stars.push(i);
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {stars.map((star, index) => (
        <li key={index}>
          <Star />
        </li>
      ))}
    </ul>
  );
}