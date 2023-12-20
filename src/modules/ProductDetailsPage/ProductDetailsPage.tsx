import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router';
import cn from 'classnames';

import styles from './ProductDetailsPage.module.scss';

import { getRecommendedProducts } from '../../api/service';
import { useAppSelector } from '../../store/hooks';
import {
  Detail, PreparedInfo, Product, ProductDetail,
} from '../../types/Product';
import { EndPoints } from '../../types/Enums';

import { Breadcrumbs } from '../shared/Breadcrumbs';
import { BackButton } from '../shared/BackButton';
import { ProductDetailsSlider } from './components/ProductDetailsSlider';
import { ColorCapacityComponent } from './components/ColorCapacityComponent';
import { ProductAbout } from './components/ProductAbout/ProductAbout';
import { ProductTechSpec } from './components/ProductTechSpec/ProductTechSpec';
import { ProductSlider } from '../shared/ProductSlider/ProductSlider';
import { InfoAndPurchase } from './components/InfoAndPurchase';

function getDetails(
  productDetail: Detail,
  params: { color: string; capacity: string },
) {
  const { color, capacity } = params;

  if (color && capacity) {
    return productDetail.additional.find(
      (product) => product.color === color && product.capacity === capacity,
    ) || null;
  }

  if (color) {
    return productDetail.additional.find(
      (product) => product.color === color
        && product.capacity === productDetail.current.capacity,
    ) || null;
  }

  if (capacity) {
    return productDetail.additional.find(
      (product) => product.capacity === capacity
        && product.color === productDetail.current.color,
    ) || null;
  }

  return productDetail.current;
}

function prepareInfo(
  productDetail: Detail | null,
  details: ProductDetail | null,
): PreparedInfo | null {
  if (productDetail && details) {
    return {
      fullPrice: details.priceRegular,
      price: details.priceDiscount,
      specs: {
        screen: details.screen,
        resolution: details.resolution,
        processor: details.processor,
        ram: details.ram,
      },
    };
  }

  return null;
}

type Props = {
  loadData: (endPoint: EndPoints, itemId: string) => Promise<Detail>;
  endPoint: EndPoints;
};

export const ProductDetailsPage: React.FC<Props> = ({ loadData, endPoint }) => {
  const { isDarkTheme } = useAppSelector((state) => state.theme);
  const [productDetail, setProductDetail] = useState<Detail | null>(null);
  const [recommended, setRecommended] = useState<Product[]>([]);
  const [color, setColor] = useState('');
  const [capacity, setCapacity] = useState('');
  const { itemId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const details = productDetail
    ? getDetails(productDetail, { color, capacity })
    : null;

  const preparedInfo = prepareInfo(productDetail, details);
  const product = productDetail?.products.find(
    (prod) => prod.itemId === details?.id,
  ) || null;

  const changeUrl = (id: string) => {
    navigate(`/${endPoint}/${id}`, {
      replace: true,
      state: { ...location.state },
    });
  };

  useEffect(() => {
    if (details) {
      changeUrl(details.id);
    }
  }, [details]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (itemId) {
      loadData(endPoint, itemId).then(setProductDetail);
      getRecommendedProducts(endPoint, itemId).then(setRecommended);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section
      className={cn(styles.productDetails, {
        [styles.productDetailsDark]: isDarkTheme,
      })}
    >
      <Breadcrumbs />

      <BackButton />

      {details && (
        <>
          <h2 className={styles.productDetails__title}>{details.name}</h2>

          <ProductDetailsSlider images={details.images} />

          <ColorCapacityComponent
            productDetail={details}
            setColor={setColor}
            setCapacity={setCapacity}
          />

          {preparedInfo && (
            <InfoAndPurchase product={product} info={preparedInfo} />
          )}

          <ProductAbout
            isDarkTheme={isDarkTheme}
            description={details.description}
          />

          <ProductTechSpec
            isDarkTheme={isDarkTheme}
            specs={{
              screen: details.screen,
              resolution: details.resolution,
              processor: details.processor,
              ram: details.ram,
              'built in memory': details.capacity,
              camera: details.camera,
              zoom: details.zoom,
              cell: details.cell,
            }}
          />

          <ProductSlider title="You may also like" phones={recommended} />
        </>
      )}
    </section>
  );
};
