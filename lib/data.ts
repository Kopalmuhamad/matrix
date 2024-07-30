export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  section: string[];
  featured: boolean;
}

export const data: Product[] = [
  {
    id: 1,
    name: "Nike Air VaporMax 2023 Flyknit Electric",
    price: "3.369.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/64f064e4-4731-45ed-9e10-0e6b80fa4b1a/air-vapormax-2023-flyknit-electric-shoes-1q11q1.png",
    section: ["men-shoes", "shoes", "men"],
    featured: false,
  },
  {
    id: 2,
    name: "Nike InfinityRN 4 Electric",
    price: "2.649.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fbe575e0-b8c7-45ea-8a71-fa20ae683c06/infinityrn-4-electric-road-running-shoes-FkGQcG.png",
    section: ["men-shoes", "shoes", "men"],
    featured: true,
  },
  {
    id: 3,
    name: "Nike Invicible 3 Elektric",
    price: "2.999.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ae14a560-14f7-4dfc-be44-023a518c77c1/invincible-3-electric-road-running-shoes-nhn3wf.png",
    section: ["men-shoes", "shoes", "men"],
    featured: true,
  },
  {
    id: 4,
    name: "Nike Pegasus Easy On Electric",
    price: "2.249.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b2f46df2-476e-40a9-a113-8b2b2ed947bc/pegasus-easyon-electric-road-running-shoes-TZjKrB.png",
    section: ["men-shoes", "shoes", "men"],
    featured: true,
  },
  {
    id: 5,
    name: "Air Jordan 1 Low SE",
    price: "1.939.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8c73dd3a-cfa4-49ca-b66c-065c233802dc/air-jordan-1-low-se-shoes-FTrFvs.png",
    section: ["men-shoes", "shoes", "men"],
    featured: true,
  },
  {
    id: 6,
    name: "Air max 1 Essential",
    price: "2.199.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1b123e2a-89a2-48b1-8595-5cf0ec8eb3dd/air-max-1-essential-shoes-Vz0BS9.png",
    section: ["men-shoes", "shoes", "men"],
    featured: true,
  },
  {
    id: 7,
    name: "Air Jordan 1 Low",
    price: "1.909.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dc702cb7-ae0c-4c5a-b132-21c8f4ec93f8/air-jordan-1-low-shoes-zlGlds.png",
    section: ["men-shoes", "shoes", "men"],
    featured: true,
  },
  {
    id: 8,
    name: "Nike Zoom Vomero 5",
    price: "2.489.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e9dc7d31-f2ad-4577-bd3f-33ed7c34dfab/zoom-vomero-5-shoes-1DsLmz.png",
    section: ["men-shoes", "shoes", "men"],
    featured: true,
  },
  {
    id: 9,
    name: "Nike Air Force 1 07",
    price: "1.729.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eae44dff-5203-4c22-8455-1765022295a0/air-force-1-07-shoes-0XGfD7.png",
    section: ["men-shoes", "shoes", "men"],
    featured: true,
  },
  {
    id: 10,
    name: "Nike V2K Run",
    price: "1.909.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a8ae66e9-92bf-41bc-ab98-b33828503caa/v2k-run-shoes-4P7Wl1.png",
    section: ["men-shoes", "shoes", "men"],
    featured: true,
  },
  {
    id: 11,
    name: "Nike Air Force 1 '07",
    price: "1.729.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/67865d89-991d-4ed1-8447-6dd5bfb7177f/air-force-1-07-shoes-dP8WQk.png",
    section: ["women-shoes", "shoes", "women"],
    featured: true,
  },
  {
    id: 12,
    name: "Nike Air Force 1 '07 Next Nature",
    price: "1.549.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f23de45a-dbda-4522-9dc1-63f1e623b716/air-force-1-07-next-nature-shoes-cg65FM.png",
    section: ["women-shoes", "shoes", "women"],
    featured: true,
  },
  {
    id: 13,
    name: "Nike Air Force 1 '07 EasyOn",
    price: "1.729.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f153b4e4-9069-44ae-bf86-f70ae8ecbaa1/air-force-1-07-easyon-shoes-lpjTWM.png",
    section: ["women-shoes", "shoes", "women"],
    featured: true,
  },
  {
    id: 14,
    name: "Nike Blazer Low Platform",
    price: "1.379.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50dcd937-7ba3-413d-ae64-b0278fdbb983/blazer-low-platform-shoes-1g6h57.png",
    section: ["women-shoes", "shoes", "women"],
    featured: true,
  },
  {
    id: 15,
    name: "Nike Blazer Mid '77",
    price: "1.429.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cc7f9ed1-bb4b-4a8a-944d-586c7e05a03a/blazer-mid-77-shoes-pKBLXb.png",
    section: ["women-shoes", "shoes", "women"],
    featured: true,
  },
  {
    id: 16,
    name: "Nike Club",
    price: "789.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd59a239-38f8-46cf-bc6d-ed3d3fb0c605/club-short-sleeve-oxford-button-down-shirt-jvkpWJ.png",
    section: ["men-shirt", "men", "shirt"],
    featured: true,
  },
  {
    id: 17,
    name: "Nike ACG",
    price: "1.379.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f577566-776e-4012-9323-f4edb57e2a37/acg-uv-hiking-trousers-qWMjrg.png",
    section: ["men-pants", "men", "pants"],
    featured: true,
  },
  {
    id: 18,
    name: "Jordan",
    price: "559.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/be354c8c-537c-4d6d-9ba5-8a7805b1022b/jordan-mj-greatness-1985-t-shirt-PNPrxr.png",
    section: ["men-shirt", "men", "shirt"],
    featured: true,
  },
  {
    id: 19,
    name: "Nike Life",
    price: "829.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cbd9c006-4cd2-4ef7-b11d-fdf62c5a47b4/life-camp-shorts-R5bXb9.png",
    section: ["men-pants", "men", "pants"],
    featured: true,
  },
  {
    id: 20,
    name: "Nike",
    price: "399.000",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9a4a7d37-6a78-4309-9f09-5a4a4ec43ea4/dri-fit-fitness-t-shirt-lFdNHv.png",
    section: ["men-shirt", "men", "shirt"],
    featured: true,
  },
];
