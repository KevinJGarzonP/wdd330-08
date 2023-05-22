import { getParam } from "./utils.mjs";
import productDetails from "./productDetails.mjs";

const productId = getParam('product');
productDetails(productId);

import {loadHeaderFooter} from "./utils.mjs";

loadHeaderFooter();