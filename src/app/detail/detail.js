'use strict';

import './detail.less';

import detailTpl from './detail.tpl.html';
import sizeTpl from './blocks/size.tpl.html';

import Constant from '../utils/constant';
import Tool from '../utils/tool';
import Loading from '../components/loading';

export default {
    init() {
            this.renderMainTpl();
            this.setPicture();
            this.bindModifySize();
            this.bindPlus();
            this.bindMinus();
            this.checkColor();
            this.checkSize();
        },
        renderMainTpl() {
            //nodejs require()语法 + webpack loaders加载静态json
            var data = Constant.SIZE_JSON.result[0].size38;
            console.log(JSON.stringify(data));
            var html = Template7.compile(detailTpl)(data);
            $('.detail-page .page-content').append(html);
            //模板渲染，加载是异步的(现在去掉了ajax已经不是异步了)。所以图片加载也必须在这里。不然会被覆盖。
        },

        setPicture() {
            $('.detail-page .swiper-slide img').attr('src', Constant.MAIN.BANNER[0]);
        },

        bindModifySize() {
            var that = this;
            $('.details-chose').on('click', '.diff-size li', function() {
                var size = this.innerHTML;
                var size = 'size' + size;
                var data = Constant.SIZE_JSON.result[0];
                //for循环保证有匹配项才渲染
                for (let item in data) {
                    if (item == size) {
                        //这里必须使用[ ]寻址，点号寻址 变量会被当成字符串
                        var result = data[item];
                        console.log(JSON.stringify(result));
                        var html = Template7.compile(sizeTpl)(result);
                        $('.details-chose .custom-chose').html(html);
                        break;
                    }
                }
            })
        },

        bindPlus() {
            $('.details-chose').on('click', '.size-add', function() {
                var adjust = $(this).prev().val();
                adjust = +adjust;
                adjust++;
                $(this).prev().val(adjust);
            })
        },

        bindMinus() {
            $('.details-chose').on('click', '.size-minus', function() {
                var adjust = $(this).next().val();
                adjust = +adjust;
                adjust--;
                $(this).next().val(adjust);
            })
        },

        checkColor() {
            $('.color-check-toggle').on('click', '.color-check-toggle > dd', function() {
                $('.color-check-toggle').children().removeClass('active');
                $(this).toggleClass('active');
            })
        },

        checkSize() {
            $('.size-check-toggle').on('click', '.size-check-toggle > li', function() {
                $('.size-check-toggle').children().removeClass('active');
                $(this).toggleClass('active');
            })
        }

};
