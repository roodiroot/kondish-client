import {
  Aboutpage,
  Articlespage,
  Bascetpage,
  Billingpage,
  Carditempage,
  Contactspage,
  Deliverypage,
  Errorpage,
  Galerypage,
  Mainpage,
  Servicepage,
  Shoppage,
  Article,
  Adminpage,
  Loginpage,
  ListPortfolio,
  ListProduct,
  ListArticles,
  ListReviews,
} from "./utils";

export const constantLinks = {
  header: [
    {
      id: 1,
      name: "Главная",
      link: "/",
    },
    {
      id: 2,
      name: "Услуги",
      link: "/service-page",
    },
    {
      id: 3,
      name: "Галерея",
      link: "/gallery-page",
    },
    {
      id: 6,
      name: "Магазин",
      link: "/shop-page",
    },
    {
      id: 4,
      name: "О компании",
      link: "/about-page",
    },
    {
      id: 5,
      name: "Контакты",
      link: "/contacts-page",
    },
  ],
  mobilMenu: [
    {
      id: 1,
      name: "Главная",
      link: "/",
    },
    {
      id: 2,
      name: "Услуги",
      link: "/service-page",
    },
    {
      id: 3,
      name: "Галерея",
      link: "/gallery-page",
    },
    {
      id: 4,
      name: "О компании",
      link: "/about-page",
    },
    {
      id: 5,
      name: "Контакты",
      link: "/contacts-page",
    },
    {
      id: 6,
      name: "Магазин",
      link: "/shop-page",
    },
  ],
  additional: [
    {
      id: 1,
      name: "Полезные статьи",
      link: "/articles-page",
    },
    {
      id: 2,
      name: "Условия доставки",
      link: "/delivery-page",
    },
    {
      id: 3,
      name: "Варианты оплаты",
      link: "/billing-page",
    },
    {
      id: 4,
      name: "О компании",
      link: "/about-page",
    },
    {
      id: 5,
      name: "Контакты",
      link: "/contacts-page",
    },
  ],
};

export const allPablicRoutes = [
  { id: 1, path: "about-page", component: Aboutpage },
  { id: 2, path: "articles-page", component: Articlespage },
  { id: 4, path: "basket-page", component: Bascetpage },
  { id: 5, path: "billing-page", component: Billingpage },
  { id: 7, path: "contacts-page", component: Contactspage },
  { id: 8, path: "delivery-page", component: Deliverypage },
  { id: 9, path: "*", component: Errorpage },
  { id: 10, path: "gallery-page", component: Galerypage },
  { id: 11, path: "/", component: Mainpage },
  { id: 12, path: "service-page", component: Servicepage },
  { id: 13, path: "shop-page", component: Shoppage },
  { id: 14, path: "shop-page/card-item-page/:id", component: Carditempage },
  { id: 15, path: "card-item-page/:id", component: Carditempage },
  { id: 16, path: "article-page/:id", component: Article },
  { id: 17, path: "login-page", component: Loginpage },
];

export const privatRoutes = [
  { id: 1, path: "admin-page", component: Adminpage },
  { id: 2, path: "admin-page/portfolio-list-page", component: ListPortfolio },
  { id: 3, path: "admin-page/products-list-page", component: ListProduct },
  { id: 4, path: "admin-page/articles-list-page", component: ListArticles },
  { id: 5, path: "admin-page/rewievs-list-page", component: ListReviews },
];
