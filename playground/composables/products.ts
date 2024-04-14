import { fakerRU as faker } from '@faker-js/faker';
import { tryPick } from '@windx-foobar/shared';

export interface ProductSmallItem {
  id: string | number;
  code: string;
  name: string;
  price: number | string;
  inventoryStatus: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
  image: string;
}

export interface ProductItem extends ProductSmallItem {
  description: string;
  category: string;
  quantity: number;
  rating: number;
}

let products: ProductItem[] = Array(20)
  .fill(null)
  .map((_, idx) => {
    return {
      id: Date.now(),
      code: faker.commerce.isbn(10),
      name: faker.commerce.product(),
      description: faker.commerce.productDescription(),
      image: faker.image.urlLoremFlickr(),
      price: +faker.commerce.price({ min: 1000, max: 10000, dec: 0 }),
      category: faker.commerce.department(),
      quantity: faker.number.int(100),
      inventoryStatus: (<const>['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK'])[faker.number.int({ min: 0, max: 2 })],
      rating: faker.number.int({ min: 1, max: 5 })
    };
  });

export function useProducts() {
  function getProductsSmall(): Promise<ProductSmallItem[]> {
    return Promise.resolve(
      products.map((item) =>
        tryPick<ProductSmallItem>(item, ['id', 'code', 'name', 'inventoryStatus', 'price', 'image'])
      )
    );
  }

  return { getProductsSmall };
}
