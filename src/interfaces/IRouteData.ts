
import { IHTMLElement } from './IHtmlElement';
import { ITableElement } from './ITableElement';

export interface IRouteData {
  path: string;
  exact?: boolean;
  items: Array<IHTMLElement | ITableElement>;
  linkTitle: string;
  pageTitle: string;
}