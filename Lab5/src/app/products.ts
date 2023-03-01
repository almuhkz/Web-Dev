export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  url: string;
  categoryId: number;
  likes: number;
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
    categoryId: 2,
    likes: 0,
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
    url: "https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000#!/item",
    categoryId: 2,
    likes: 0,
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
    url: "https://kaspi.kz/shop/p/asus-rog-strix-g533zs-ln050x-90nr0b62-m002d0-chernyi-107490087/?c=750000000#!/item",
    categoryId: 2,
    likes: 0,
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
    url: "https://kaspi.kz/shop/p/apple-macbook-pro-14-z15g000cv-seryi-104887459/?c=750000000#!/item",
    categoryId: 2,
    likes: 0,
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
    url: "https://kaspi.kz/shop/p/msi-vector-gp66hx-12ugs-212kz-temno-seryi-108002384/?c=750000000#!/item",
    categoryId: 2,
    likes: 0,
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
    url: "https://kaspi.kz/shop/p/acer-predator-triton-500-se-pt516-52s-nh-qfrer-003-seryi-106550545/?c=750000000#!/item",
    categoryId: 2,
    likes: 0,
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
    url: "https://kaspi.kz/shop/p/gigabyte-aorus-15-xe5-xe5-73eeb34sh-chernyi-107137051/?c=750000000#!/item",
    categoryId: 2,
    likes: 0,
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
    url: "https://kaspi.kz/shop/p/lenovo-legion-5-pro-16ach6h-82jq00fbus-seryi-106382160/?c=750000000#!/item",
    categoryId: 2,
    likes: 0,
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
    url: "https://kaspi.kz/shop/p/hp-omen-16-b1017ci-6m883ea-chernyi-105985133/?c=750000000#!/item",
    categoryId: 2,
    likes: 0,
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
    url: "https://kaspi.kz/shop/p/asus-rog-zephyrus-m16-gu603ze-k8033-90nr0941-m002e0-chernyi-104385889/?c=750000000",
    categoryId: 2,
    likes: 0,
  },
  {
    id: 11,
    name: 'Apple iPhone 14 Pro Max 256Gb Purple',
    price: 1560,
    description: 'NFC technology: Yes\n' +
        'color: purple\n' +
        'Screen type: OLED, Super Retina XDR display\n' +
        'diagonal: 6.7 inch\n' +
        'main memory size: 6GB\n' +
        'processor: 6-core Apple A16 Bionic\n' +
        'Built-in memory: 256GB\n' +
        'Battery capacity: 3095mAh',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hab/hed/62948780671006/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
    url: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item",
    categoryId: 1,
    likes: 0,
  },
  {
    id: 12,
    name: 'Apple iPhone 13 128Gb Black',
    price: 850,
    description: 'NFC technology: Yes\n' +
        'color: black\n' +
        'screen type: OLED, Super Retina XDR\n' +
        'diagonal: 6.1 inch\n' +
        'main memory: 4GB\n' +
        'processor: 6-core Apple A15 Bionic\n' +
        'Built-in memory: 128GB\n' +
        'Battery capacity: 3095mAh',
    rating: 4,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hc2/h05/46392662458398/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg",
    url: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000",
    categoryId: 1,
    likes: 0,
  },
  {
    id: 13,
    name: ' Google Pixel 7 8 Gb/128Gb White',
    price: 770,
    description: 'NFC technology: Yes\n' +
        'Color: white\n' +
        'Display Type: FHD+ (1080 x 2400) OLED\n' +
        'diagonal: 6.3 inches\n' +
        'RAM size: 8GB\n' +
        'processor: Google Tensor G2\n' +
        'Built-in memory: 128GB\n' +
        'Battery capacity: 4355mAh',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h4b/h54/63411051823134/google-pixel-7-8-gb-128-gb-belyj-106971867-1.jpg",
    url: "https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-belyi-106971867/?c=750000000",
    categoryId: 1,
    likes: 0,
  },
  {
    id: 14,
    name: 'Xiaomi 12S Ultra 12GB/512GB green',
    price: 1500,
    description: 'NFC technology: Yes\n' +
        'color: green\n' +
        'Display Type: LTPO2 AMOLED, HDR10+\n' +
        'diagonal: 6.73 inch\n' +
        'main memory size: 12GB\n' +
        'processor: Qualcomm Snapdragon 8+ Gen 1\n' +
        'Built-in memory: 512GB\n' +
        'Battery capacity: 4860mAh',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h33/haf/64545017430046.jpg?format=preview-medium",
    url: "https://kaspi.kz/shop/p/xiaomi-12s-ultra-12-gb-512-gb-zelenyi-106955261/?c=750000000",
    categoryId: 1,
    likes: 0,
  },
  {
    id: 15,
    name: 'Xiaomi 12 Pro NFC 12GB/256GB purple',
    price: 1300,
    description: 'NFC technology: Yes\n' +
        'color: green\n' +
        'Display Type: LTPO2 AMOLED, HDR10+\n' +
        'diagonal: 6.73 inch\n' +
        'main memory size: 12GB\n' +
        'processor: Qualcomm Snapdragon 8+ Gen 1\n' +
        'Built-in memory: 512GB\n' +
        'Battery capacity: 4860mAh',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h90/h21/50827573428254/xiaomi-12x-pro-nfc-12-gb-256-gb-fioletovyj-104897127-1.jpg",
    url: "https://kaspi.kz/shop/p/xiaomi-12-pro-nfc-12-gb-256-gb-fioletovyi-104897127/?c=750000000",
    categoryId: 1,
    likes: 0,
  },
  {
    id: 16,
    name: 'CASIO MTP-1374L-1AVDF black',
    price: 60,
    description: 'type: quartz\n' +
        'time display: analog (hands)\n' +
        'case material: steel\n' +
        'shockproof: No\n' +
        'color: black\n' +
        'for whom: for men',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/ha1/ha8/63763581960222.jpg?format=preview-medium",
    url: "https://kaspi.kz/shop/p/casio-mtp-1374l-1avdf-chernyi-21400996/?c=750000000#!/item",
    categoryId: 3,
    likes: 0,
  },
  {
    id: 17,
    name: 'CASIO MTP-1374D-1AVDF silver',
    price: 60,
    description: 'type: quartz\n' +
        'time display: analog (hands)\n' +
        'case material: steel\n' +
        'shockproof: No\n' +
        'color: black\n' +
        'for whom: for men',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h76/h49/63778732965918.jpg?format=preview-medium",
    url: "https://kaspi.kz/shop/p/casio-mtp-1374d-1avdf-serebristyi-21401209/?c=750000000",
    categoryId: 3,
    likes: 0,
  },
  {
    id: 18,
    name: 'CASIO MTP-VD01D-1BVUDF silver',
    price: 65,
    description: 'type: quartz\n' +
        'time display: analog (hands)\n' +
        'case material: steel\n' +
        'shockproof: No\n' +
        'color: black\n' +
        'for whom: for men',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h57/h1e/63780877631518.jpg?format=preview-medium",
    url: "https://kaspi.kz/shop/p/casio-mtp-vd01d-1bvudf-serebristyi-21401969/?c=750000000",
    categoryId: 3,
    likes: 0,
  },
  {
    id: 19,
    name: 'CASIO MTP-1370D-1A1VDF silver',
    price: 70,
    description: 'type: quartz\n' +
        'time display: analog (hands)\n' +
        'case material: steel\n' +
        'shockproof: No\n' +
        'color: black\n' +
        'for whom: for men',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h25/hcc/63775714017310.jpg?format=preview-medium",
    url: "https://kaspi.kz/shop/p/casio-mtp-1370d-1a1vdf-serebristyi-21400929/?c=750000000",
    categoryId: 3,
    likes: 0,
  },
  {
    id: 20,
    name: 'CASIO AE-1200WHD-1AVEF silver',
    price: 65,
    description: 'type: quartz\n' +
        'time display: analog (hands)\n' +
        'case material: steel\n' +
        'shockproof: No\n' +
        'color: black\n' +
        'for whom: for men',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hc2/h7f/63815174783006.jpg?format=preview-medium",
    url: "https://kaspi.kz/shop/p/casio-ae-1200whd-1avef-serebristyi-21409364/?c=750000000",
    categoryId: 3,
    likes: 0,
  },
  {
    id: 21,
    name: 'Samsung UE43T5300AUXCE 109cm Black',
    price: 600,
    description: 'type: LED TV\n' +
        'diagonal: 43 inch\n' +
        'resolution: 1920x1080\n' +
        'HD support: 1080p Full HD\n' +
        'Smart TV technology: Yes\n' +
        'Wi-Fi: Yes\n' +
        'Inputs: AV, component, Ethernet (RJ-45), USB',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hfa/hfa/49319748403230/samsung-ue43t5300au-chernyi-100182013-1.jpg",
    url: "https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000#!/item",
    categoryId: 4,
    likes: 0,
  },
  {
    id: 22,
    name: 'Xiaomi Mi TV P1 50 L50M6-6ARG 127 cm black',
    price: 700,
    description: 'type: LED TV\n' +
        'diagonal: 43 inch\n' +
        'resolution: 1920x1080\n' +
        'HD support: 1080p Full HD\n' +
        'Smart TV technology: Yes\n' +
        'Wi-Fi: Yes\n' +
        'Inputs: AV, component, Ethernet (RJ-45), USB',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hdb/h56/51568662118430/xiaomi-l50m6-6arg-cernyj-105324626-1.jpg",
    url: "https://kaspi.kz/shop/p/xiaomi-mi-tv-p1-50-l50m6-6arg-127-sm-chernyi-105324626/?c=750000000",
    categoryId: 4,
    likes: 0,
  },
  {
    id: 23,
    name: 'LG 43UP78006LC 109 cm black',
    price: 800,
    description: 'type: LED TV\n' +
        'diagonal: 43 inch\n' +
        'resolution: 1920x1080\n' +
        'HD support: 1080p Full HD\n' +
        'Smart TV technology: Yes\n' +
        'Wi-Fi: Yes\n' +
        'Inputs: AV, component, Ethernet (RJ-45), USB',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h08/h05/64336141844510.jpg?format=preview-medium",
    url: "https://kaspi.kz/shop/p/lg-43up78006lc-109-sm-chernyi-101623604/?c=750000000",
    categoryId: 4,
    likes: 0,
  },
  {
    id: 24,
    name: 'Samsung UE43AU8000UXCE 109 cm black',
    price: 900,
    description: 'type: LED TV\n' +
        'diagonal: 43 inch\n' +
        'resolution: 1920x1080\n' +
        'HD support: 1080p Full HD\n' +
        'Smart TV technology: Yes\n' +
        'Wi-Fi: Yes\n' +
        'Inputs: AV, component, Ethernet (RJ-45), USB',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h9f/h87/63749624430622.jpg?format=preview-medium",
    url: "https://kaspi.kz/shop/p/samsung-ue43au8000uxce-109-sm-chernyi-101518390/?c=750000000",
    categoryId: 4,
    likes: 0,
  },
  {
    id: 25,
    name: 'TCL 55C725 140 cm black',
    price: 1000,
    description: 'type: LED TV\n' +
        'diagonal: 43 inch\n' +
        'resolution: 1920x1080\n' +
        'HD support: 1080p Full HD\n' +
        'Smart TV technology: Yes\n' +
        'Wi-Fi: Yes\n' +
        'Inputs: AV, component, Ethernet (RJ-45), USB',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h68/hb3/64126628528158.jpg?format=preview-medium",
    url: "https://kaspi.kz/shop/p/tcl-55c725-140-sm-chernyi-102499357/?c=750000000",
    categoryId: 4,
    likes: 0,
  },

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/