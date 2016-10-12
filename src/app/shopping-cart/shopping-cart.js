import './shopping-cart.less';

import ShoppingCartHtml from './shopping-cart.tpl.html';
import ShoppingCartPopupHtml from './blocks/shopping-cart-popup.tpl.html';
import Constant from '../utils/constant';

export default {
    init(page) {
        var that = this;
        //下面的初始化函数必须按一定顺序。即必须先有dom文档
        this.renderShoppingCartTpl();
        this.renderShoppingCartPopupTpl();
    },

    renderShoppingCartTpl() {
        // var html = Tool.renderTpl(mainHtml, data);
        var data = Constant.SHOPPING_CART.JSON[0].result;
        console.log(data);
        var html = Template7.compile(ShoppingCartHtml)(data);
        $('.shopping-cart-page .page-content').html(html);
    },
    renderShoppingCartPopupTpl() {
        var data = Constant.SHOPPING_CART.JSON[1].result[0];
        console.log('定制详情：' + JSON.stringify(data));
        var html = Template7.compile(ShoppingCartPopupHtml)(data);
        $('.detail-popup').html(html);
    }
};