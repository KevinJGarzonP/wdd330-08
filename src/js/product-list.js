import productList from "./productList.mjs";
import {loadHeaderFooter} from "./utils.mjs";
import { getParam } from "./utils.mjs";

let category = getParam("category");

let tentList = productList(category, ".product-list");

loadHeaderFooter();