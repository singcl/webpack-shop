import './main.less';

import mainHtml from './main.tpl.html';
import Constant from '../utils/constant';

export default {
    init() {
            var that = this;
            //下面的初始化函数必须按一定顺序。即必须先有dom文档
            this.renderMainTpl();
            this.setPicture(); 
            this.initSwiper();
            this.goToDetail();
        },

        renderMainTpl() {
            // var html = Tool.renderTpl(mainHtml, data);
            var data = Constant.MAIN.JSON[0].result;
            var html = Template7.compile(mainHtml)(data);
            $('.main-page .page-content').html(html);
        },

        setPicture() {
            $('.product img').each(function(index, elem) {
                $(this).attr('src', Constant.MAIN.PICTURE[index]);
            })
            $('.main-page .swiper-slide img').each(function(index, elem) {
                $(this).attr('src', Constant.MAIN.BANNER[index]);
            })
        },

        initSwiper() {
            myApp.swiper('.banner', {
                pagination: '.swiper-pagination'
            })
        },

        goToDetail() {
            $('.go-to-detail').on('click', '.go-to-detail img' ,function() {
                myApp.getCurrentView().router.loadPage('./page/detail.html');
            })
        }
};
