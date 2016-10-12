'use strict';

export default {
    SERVER_URL: 'http://210.34.193.149/engineering-college',
    // SERVER_URL: 'http://172.16.1.92:8080',
    STATUS: {
        SUCCESS: 0
    },
    MAIN: {
        BANNER: [
            require('../../assets/images/slideshow2.jpg'),
            require('../../assets/images/slideshow1.jpg'),
            require('../../assets/images/slideshow3.jpg')
        ],
        PICTURE: [
            require('../../assets/images/main_pic1.jpg'),
            require('../../assets/images/main_pic2.jpg'),
            require('../../assets/images/main_pic3.jpg'),
            require('../../assets/images/main_pic4.jpg')
        ],
        JSON: [
            require('../data/main_list.json')
        ]
    },
    
    SHOPPING_CART: {
        JSON: [
            require('../data/shopping_cart_list.json'),
            require('../data/shopping_cart_popup.json')
        ]
    },
    //nodejs require()语法 + webpack loaders加载静态json
    SIZE_JSON: require('../data/mock.json')
};
