import { FC } from 'react';
import { GetProducts } from '@full-stack/web/data-access-graphql';

type RgbColors = GetProducts['products'][0]['availableColors'];

interface IProps {
  colors: RgbColors;
}

export const ProductColors: FC<IProps> = (props) => {
  const { colors } = props;

  return (
    <div className="absolute left-2 bottom-2 flex justify-between gap-x-2 md:bottom-[calc(-8px-24px)]">
      {colors?.map(({ r, g, b }) => (
        <div
          key={r + g + b}
          className="h-2 w-2"
          style={{ backgroundColor: `rgb(${r},${g}, ${b})` }}
        />
      ))}
    </div>
  );
};
