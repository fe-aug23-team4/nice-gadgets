import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import cn from 'classnames';

import styles from './ProductDetailsPage.module.scss';

import { Breadcrumbs } from '../shared/Breadcrumbs';
import { BackButton } from '../shared/BackButton';
// import { ProductDetailsSlider } from './components/ProductDetailsSlider';
import { EndPoints } from '../../types/Enums';
import { ProductAbout }
  from './components/ProductDetailsSlider/ProductAbout/ProductAbout';
import { ProductTechspec }
  from './components/ProductDetailsSlider/ProductTechspec/ProductTechspec';
import { Detail } from '../../types/Product';
import { useAppSelector } from '../../store/hooks';
// import { ProductSlider } from '../shared/ProductSlider';

type Props = {
  loadData: (endPoint: EndPoints, itemId: string) => Promise<Detail>,
  endPoint: EndPoints
};

export const ProductDetailsPage: React.FC<Props> = ({
  loadData,
  endPoint,
}) => {
  const { itemId } = useParams();
  const [itemDetails, setItemDetails] = useState<Detail>();
  const { isDarkTheme } = useAppSelector(state => state.theme);

  useEffect(() => {
    if (itemId) {
      loadData(endPoint, itemId)
        .then(setItemDetails);
    }
  }, [loadData, itemId, endPoint]);

  return (
    <div className={cn(styles.productDetails, {
      [styles.productDetailsDark]: isDarkTheme,
    })}
    >
      <Breadcrumbs />

      <BackButton />

      {itemDetails && (
        <>
          <h2 className={styles.productDetails__title}>
            {itemDetails?.current.name}
          </h2>

          {/* <article>
        <ProductDetailsSlider images={phoneDetails?.images} />
      </article> */}

          {itemDetails.current.description && (
            <ProductAbout
              isDarkTheme={isDarkTheme}
              description={itemDetails.current.description}
            />
          )}

          <ProductTechspec
            isDarkTheme={isDarkTheme}
            screen={itemDetails.current.screen}
            resolution={itemDetails.current.resolution}
            processor={itemDetails.current.processor}
            ram={itemDetails.current.ram}
            camera={itemDetails.current.camera}
            zoom={itemDetails.current.zoom}
            cell={itemDetails.current.cell}
          />

          {/* <ProductSlider /> */}
        </>
      )}
    </div>
  );
};
