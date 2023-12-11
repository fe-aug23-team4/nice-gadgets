import cn from 'classnames';

type PhoneItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  fullPrice: number;
  year: number;
  screen?: string;
  capacity?: string;
  ram?: string;
  color?: string;
};

export const PhoneCard = (phoneItem: PhoneItem) => {
  const isThemeDark = false;

  const characteristicsArray = [
    { label: 'Screen', state: phoneItem.screen },
    { label: 'Capacity', state: phoneItem.capacity },
    { label: 'RAM', state: phoneItem.ram },
  ];

  return (
    <div className={cn('productCard', { 'productCard--dark': isThemeDark })}>
      <img
        src={phoneItem.image}
        alt={phoneItem.name}
        className="productCard__image"
      />

      <h2
        className={cn('productCard__name', {
          'productCard__name--dark': isThemeDark,
        })}
      >
        {phoneItem.name}
      </h2>

      <div className="productCard__price">
        <p
          className={cn('productCard__realPrice', {
            'productCard__realPrice--dark': isThemeDark,
          })}
        >
          {phoneItem.price}
        </p>

        <p
          className={cn('productCard__fullPrice', {
            'productCard__fullPrice--dark': isThemeDark,
          })}
        >
          {phoneItem.price}
        </p>
      </div>

      <div className="productCard__characteristics">
        {characteristicsArray.map((characteristic) => (
          <>
            <p
              className={cn('productCard__characteristic-label', {
                'productCard__characteristic-label--dark': isThemeDark,
              })}
            >
              {characteristic.label}
            </p>
            <p
              className={cn('productCard__characteristic-state', {
                'productCard__characteristic-state--dark': isThemeDark,
              })}
            >
              {characteristic.state}
            </p>
          </>
        ))}
      </div>
    </div>
  );
};
