import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
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
import { Loader } from '../shared/Loader';

function prepareInfo(
  productDetail: ProductDetail | null,
): PreparedInfo | null {
  if (productDetail) {
    return {
      fullPrice: productDetail.priceRegular,
      price: productDetail.priceDiscount,
      specs: {
        screen: productDetail.screen,
        resolution: productDetail.resolution,
        processor: productDetail.processor,
        ram: productDetail.ram,
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
  const [detail, setDetail] = useState<Detail | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recommended, setRecommended] = useState<Product[]>([]);
  const [itemIdIsChanged, setItemIdIsChanged] = useState(true);
  const [productDetail, setProductDetail] = useState<ProductDetail | null>(
    null,
  );
  const [product, setProduct] = useState<Product | null>(null);

  const { itemId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const preparedInfo = prepareInfo(productDetail);

  useEffect(() => {
    if (detail?.additional.some((prod) => prod.id === itemId)) {
      setProductDetail(
        detail?.additional.find((prod) => prod.id === itemId) || null,
      );
    }
  }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  const changeUrl = (id: string) => {
    navigate(`/${endPoint}/${id}`, {
      replace: true,
      state: { ...location.state },
    });
  };

  useEffect(() => {
    setProduct(detail?.products.find(
      (prod) => prod.itemId === productDetail?.id,
    ) || null);
  }, [detail?.products, productDetail?.id]);

  useEffect(() => {
    setItemIdIsChanged(
      detail ? !detail.additional.some((prod) => prod.id === itemId) : false,
    );
  }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (productDetail) {
      changeUrl(productDetail.id);
    }
  }, [productDetail]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (itemId && itemIdIsChanged) {
      setIsLoading(true);
      loadData(endPoint, itemId)
        .then((data) => {
          setDetail(data);
          setProductDetail(data.current);
        })
        .finally(() => {
          setItemIdIsChanged(false);
          setIsLoading(false);
        });
      getRecommendedProducts(endPoint, itemId).then(setRecommended);
    }
  }, [itemIdIsChanged]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section
      className={cn(styles.productDetails, {
        [styles.productDetailsDark]: isDarkTheme,
      })}
    >
      <div className={styles.breadCrumbsContiner}>
        <Breadcrumbs />

        <BackButton />
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        (productDetail && detail && !isLoading) && (
          <>
            <h2 className={styles.productDetails__title}>
              {productDetail.name}
            </h2>
            <div className={styles.productDetailsSlider}>
              <ProductDetailsSlider images={productDetail.images} />
            </div>
            <div className={styles.top}>
              <div className={styles.interactive}>
                <ColorCapacityComponent
                  productDetail={productDetail}
                  additional={detail.additional}
                  endPoint={endPoint}
                />

                {preparedInfo && (
                  <InfoAndPurchase product={product} info={preparedInfo} />
                )}
              </div>
            </div>

            <div className={styles.aboutContent}>
              <div className={styles.about}>
                <ProductAbout
                  isDarkTheme={isDarkTheme}
                  description={productDetail.description}
                />
              </div>

              <div className={styles.techSpec}>
                <ProductTechSpec
                  isDarkTheme={isDarkTheme}
                  specs={{
                    screen: productDetail.screen,
                    resolution: productDetail.resolution,
                    processor: productDetail.processor,
                    ram: productDetail.ram,
                    'built in memory': productDetail.capacity,
                    camera: productDetail.camera,
                    zoom: productDetail.zoom,
                    cell: productDetail.cell,
                  }}
                />
              </div>
            </div>

            <div className={styles.productSlider}>
              <ProductSlider title="You may also like" products={recommended} />
            </div>
          </>
        )
      )}
    </section>
  );
};
