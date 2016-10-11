'use strict';

import './detail.less';

import detailTpl from './detail.tpl.html';
import sizeTpl from './blocks/size.tpl.html';

import Constant from '../utils/constant';
import Tool from '../utils/tool';
import Loading from '../components/loading';
import Xhr from '../utils/xhr';

export default {
    init() {
            this.renderMainTpl();
        },
        renderMainTpl() {
            var params = {
                success: (res) => {
                    var data = res.result[0].size38;
                    console.log(data);
                    var html = Template7.compile(detailTpl)(data);
                    $('.detail-page .page-content').append(html);
                    //模板渲染，加载是异步的。所以图片加载也必须在这里。不然会被覆盖。
                    this.setPicture();
                    this.bindModifySize();
                    this.bindPlus();
                    this.bindMinus();
                }
            };
            Xhr.getDetailBySize(params);
        },

        setPicture() {
            $('.detail-page .swiper-slide img').attr('src', Constant.MAIN.BANNER[0]);
        },

        bindModifySize() {
            var that = this;
            $('.details-chose').on('click', '.diff-size li', function() {
                var size = this.innerHTML;
                var size = 'size' + size;
                var params = {
                    success: (res) => {
                        var data = res.result[0];
                        //for循环保证有匹配项才渲染
                        for (let item in data) {
                            if (item == size) {
                                //这里必须使用[ ]寻址，点号寻址 变量会被当成字符串
                                var result = data[item];
                                console.log(result);
                                var html = Template7.compile(sizeTpl)(result);
                                $('.details-chose .custom-chose').html(html);
                                break;
                            }
                        }
                    }
                };
                Xhr.getDetailBySize(params);
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
        }

};
