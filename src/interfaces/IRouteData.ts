
import { IHTMLElement } from './IHtmlElement';
import { ITableElement } from './ITableElement';

export interface IRouteData {
  path: string;
  items: Array<IHTMLElement | ITableElement>;
  linkTitle: string;
  pageTitle: string;
}