export interface Product {
  id: number;
  name: string;

  price: number;
  description: string;
  rating: number;
  image: string;
  url: string;
}

export const products = [
  {
    id: 1,
    name: 'Acer Nitro 5',
    price: 869,
    description: 'Screen diagonal: 15.6 inches\n' +
        'processor: Intel Core i5 11400H\n' +
        'graphics card: NVIDIA GeForce GTX 1650\n' +
        'RAM size: 16GB\n' +
        'Hard drive type: SSD\n' +
        'total storage capacity: 512GB',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h80/h97/66626494332958/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784-1.jpg",
    url: "https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item",
  },
  {
    id: 2,
    name: 'ASUS TUF Gaming A15',
    price: 780,
    description: 'Screen diagonal: 15.6 inches\n' +
        'processor: AMD Ryzen 5 4600H\n' +
        'graphics card: nVidia GeForce GTX1650\n' +
        'RAM size: 8GB\n' +
        'Hard drive type: SSD\n' +
        'total storage capacity: 512 GB',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/ha2/he7/62100002570270/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg",
    url: "https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000#!/item"
  },
  {
    id: 3,
    name: 'ASUS ROG Strix G533ZS',
    price: 4200,
    description: 'Screen diagonal: 15.6 inches\n' +
        'processor: Intel Core i9 12900H\n' +
        'graphics card: NVIDIA GeForce RTX 3080\n' +
        'RAM: 32GB\n' +
        'Hard drive type: SSD\n' +
        'Total hard drive capacity: 1024GB',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h45/h7d/65501275062302.jpg?format=preview-medium",
    url: "https://kaspi.kz/shop/p/asus-rog-strix-g533zs-ln050x-90nr0b62-m002d0-chernyi-107490087/?c=750000000#!/item"
  },
  {
    id: 4,
    name: 'Apple MacBook Pro 14',
    price: 4000,
    description: 'Screen diagonal: 14 inch\n' +
        'processor: Apple M1 Pro\n' +
        '32GB RAM: 32GB\n' +
        'Hard drive type: SSD\n' +
        'total storage capacity: 512GB',
    rating: 1,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hdd/hdc/64536553095198.jpg?format=preview-medium",
    url: "https://kaspi.kz/shop/p/apple-macbook-pro-14-z15g000cv-seryi-104887459/?c=750000000#!/item"
  },
  {
    id: 5,
    name: 'MSI Vector GP66HX',
    price: 3750,
    description: 'Screen diagonal: 15.6 inches\n' +
        'processor: Intel Core i9-12900HX\n' +
        'graphics card: NVIDIA GeForce RTX 3070 Ti\n' +
        'RAM size: 32GB\n' +
        'Hard drive type: SSD\n' +
        'Total hard drive capacity: 1024GB',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h1e/h01/66794307256350/msi-vector-gp66hx-12ugs-212kz-temno-seryi-108002384-1.jpg",
    url: "https://kaspi.kz/shop/p/msi-vector-gp66hx-12ugs-212kz-temno-seryi-108002384/?c=750000000#!/item"
  },
  {
    id: 6,
    name: 'Acer Predator Triton 500 SE',
    price: 3580,
    description: 'Screen diagonal: 16 inches\n' +
        'processor: Intel Core i9 12900H\n' +
        'graphics card: NVIDIA GeForce RTX 3080 TI\n' +
        'RAM: 32GB\n' +
        'Hard drive type: SSD\n' +
        'Total hard drive capacity: 1024GB',
    rating: 1,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hcd/h5c/64376713150494.jpg?format=preview-medium",
    url: "https://kaspi.kz/shop/p/acer-predator-triton-500-se-pt516-52s-nh-qfrer-003-seryi-106550545/?c=750000000#!/item"
  },
  {
    id: 7,
    name: 'GIGABYTE AORUS 15 XE5',
    price: 2690,
    description: 'Screen diagonal: 15.6 inches\n' +
        'processor: Intel Core i7-12700H\n' +
        'graphics card: NVIDIA GeForce RTX 3070 Ti\n' +
        'RAM size: 16GB\n' +
        'Hard drive type: SSD\n' +
        'Total hard drive capacity: 1024GB',
    rating: 4,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/he2/h22/52208748593182/gigabyte-aorus-15-xe5-xe5-73rub34sh-seryj-105664740-1.jpg",
    url: "https://kaspi.kz/shop/p/gigabyte-aorus-15-xe5-xe5-73eeb34sh-chernyi-107137051/?c=750000000#!/item"
  },
  {
    id: 8,
    name: 'Lenovo Legion 5 Pro 16',
    price: 2500,
    description: 'screen diagonal: 16 inches\n' +
        'processor: AMD Ryzen 7 5800H\n' +
        'graphics card: NVIDIA GeForce RTX 3070\n' +
        'RAM size: 16GB\n' +
        'Hard drive type: SSD\n' +
        'Total storage capacity: 1000GB',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h14/h20/64480374128670.jpg?format=preview-medium",
    url: "https://kaspi.kz/shop/p/lenovo-legion-5-pro-16ach6h-82jq00fbus-seryi-106382160/?c=750000000#!/item"
  },
  {
    id: 9,
    name: 'HP Omen 16',
    price: 2200,
    description: 'Screen diagonal: 16.1 inches\n' +
        'processor: Intel Core i7 12700H\n' +
        'graphics card: NVIDIA GeForce RTX 3070\n' +
        'RAM size: 16GB\n' +
        'Hard drive type: SSD\n' +
        'Total hard drive capacity: 1024GB',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hf9/h6f/61589676458014/hp-omen-16-b1017ci-6m883ea-cernyj-105985133-1.jpg",
    url: "https://kaspi.kz/shop/p/hp-omen-16-b1017ci-6m883ea-chernyi-105985133/?c=750000000#!/item"
  },
  {
    id: 10,
    name: 'ASUS ROG Zephyrus M16',
    price: 1900,
    description: 'Screen diagonal: 16 inches\n' +
        'processor: Intel Core i7-12700H\n' +
        'Graphics card: NVIDIA GeForce RTX 3050 Ti\n' +
        'RAM size: 16GB\n' +
        'Hard drive type: SSD\n' +
        'total storage capacity: 512GB',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h58/he5/49867528765470/asus-rog-zephyrus-m16-gu603ze-k8033-90nr0941-m002e0-cernyj-104385889-1.jpg",
    url: "https://kaspi.kz/shop/p/asus-rog-zephyrus-m16-gu603ze-k8033-90nr0941-m002e0-chernyi-104385889/?c=750000000"
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/