import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import cn from 'classnames';

import styles from './ProductDetailsPage.module.scss';

import { Breadcrumbs } from '../shared/Breadcrumbs';
import { BackButton } from '../shared/BackButton';
import { ProductDetailsSlider } from './components/ProductDetailsSlider';
import { EndPoints } from '../../types/Enums';
import { ProductAbout } from './components/ProductAbout/ProductAbout';
import { Detail, Product } from '../../types/Product';
import { useAppSelector } from '../../store/hooks';
import { ProductSlider } from '../shared/ProductSlider/ProductSlider';
import { getRecommendedProducts } from '../../api/service';
import { ProductTechSpec } from './components/ProductTechSpec/ProductTechSpec';

type Props = {
  loadData: (endPoint: EndPoints, itemId: string) => Promise<Detail>;
  endPoint: EndPoints;
};

export const ProductDetailsPage: React.FC<Props> = ({ loadData, endPoint }) => {
  const { itemId } = useParams();
  const [productDetail, setProductDetail] = useState<Detail>();
  const [recommended, setRecommended] = useState<Product[]>([]);
  const { isDarkTheme } = useAppSelector((state) => state.theme);

  useEffect(() => {
    if (itemId) {
      loadData(endPoint, itemId).then(setProductDetail);
      getRecommendedProducts(endPoint, itemId).then(setRecommended);
    }
  }, [loadData, itemId, endPoint, setProductDetail]);

  return (
    <section
      className={cn(styles.productDetails, {
        [styles.productDetailsDark]: isDarkTheme,
      })}
    >
      <Breadcrumbs />

      <BackButton />

      {productDetail && (
        <>
          <h2 className={styles.productDetails__title}>
            {productDetail.current.name}
          </h2>

          <ProductDetailsSlider images={productDetail.current.images} />

          <ProductAbout
            isDarkTheme={isDarkTheme}
            description={productDetail.current.description}
          />

          <ProductTechSpec
            isDarkTheme={isDarkTheme}
            specs={{
              screen: productDetail.current.screen,
              resolution: productDetail.current.resolution,
              processor: productDetail.current.processor,
              ram: productDetail.current.ram,
              camera: productDetail.current.camera,
              zoom: productDetail.current.zoom,
              cell: productDetail.current.cell,
            }}
          />

          <ProductSlider title="You may also like" phones={recommended} />
        </>
      )}
    </section>
  );
};
