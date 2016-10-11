'use strict';

import detailModule from './detail/detail';
import shoppingCartModule from './shopping-cart/shopping-cart';

export default {
    init() {
            var that = this;
            $(document).on('pageBeforeInit', (e) => {
                that.pageBeforeInit(e.detail.page);
            });
        },
        pageBeforeInit(page) {
            switch (page.name) {
                case 'detail':
                    detailModule.init(page);
                    break;

                case 'shopping-cart':
                    shoppingCartModule.init(page);
                    break;

                default:
                    break;
            }
        }
};
