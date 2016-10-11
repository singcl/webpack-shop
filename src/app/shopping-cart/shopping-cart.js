import './shopping-cart.less';

import ShoppingCartHtml from './shopping-cart.tpl.html';
import Constant from '../utils/constant';

export default {
    init(page) {
        var that = this;
        //下面的初始化函数必须按一定顺序。即必须先有dom文档
        this.renderShoppingCartTpl();
        // this.setPicture();
    },

    renderShoppingCartTpl() {
        // var html = Tool.renderTpl(mainHtml, data);
        var html = ShoppingCartHtml;
        $('.shopping-cart-page .page-content').html(html);
    },

    setPicture(pic) {
        var _pictureElm = $('.product img');
        _pictureElm.attr('src', pic);
    }
};