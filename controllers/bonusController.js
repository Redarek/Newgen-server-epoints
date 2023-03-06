const bonusService = require('../service/bonusService');
const bonusModel = require('../models/bonusModel');

class BonusController {
    async addBonus(req, res, next) {
        // try {
        //     const {user, task, amount} = req.body;
        //     const bonusData = new taskModel(user, task, amount);
        //     const bonus = await bonusService.addBonus(bonusData);
        //     return res.json(bonus);
        //     // return res.json({task: taskData, status: 'success'});
        // } catch (error) {
        //     console.log(error);
        //     next(error);
        // }
    }

    async getAllBonusesByUserId(req, res, next) {
        try {
            const bonus = await bonusService.getAllBonusesByUserId(req.params.id)
            return res.json(bonus);
            // return res.json({task: taskData, status: 'success'});
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    async getAllBonusesByUserIdForWeek(req, res, next) {
        try {
            const bonuses = await bonusService.getAllBonusesByUserIdForWeek(req.params.id)
            return res.json(bonuses);
            // return res.json({task: taskData, status: 'success'});
        } catch (error) {
            next(error);
        }
    }

    async deleteBonus(req, res, next) {
        try {

        } catch (error) {
            next(error);
        }
    }

    async getBonusByTaskId(req, res, next) {
        try {
            const bonus = await bonusService.getBonusByTaskId(req.params.id)
        } catch (error) {

        }
    }

}

module.exports = new BonusController();

jQuery(function ($) {
    $(document).ready(function() {
        $('rs-slide').on('click', function (e) {
            var slide = $(this).attr('data-origindex');
            console.log(slide);
            revapi11.revcallslidewithid(slide);
            revapi11.on('revolution.slide.onafterswap', function (event, data) {
                console.log('swiped')

                console.log(data.currentslide.hasClass('rs-slide-limitgood'))
                if (data.currentslide.hasClass('rs-slide-place')) {
                    $('div#slider-title-mobile div.elementor-widget-container h1').text('Наши площадки');
                    console.log('place title')
                }
                else if (data.currentslide.hasClass('rs-slide-limitgood')) {
                    $('div#slider-title-mobile div.elementor-widget-container h1').text('Лимитированные товары');
                    console.log('goods title')
                }
            });
        });
        $('#main-slider-mobile > rs-arrow:nth-child(3)').on('click', function (e) {
            revapi11.on('revolution.slide.onafterswap', function (event, data) {

                console.log(data.currentslide.hasClass('rs-slide-limitgood'))
                if (data.currentslide.hasClass('rs-slide-place')) {
                    $('div#slider-title-mobile div.elementor-widget-container h1').text('/nНаши площадки');
                    console.log('place title')
                }
                else if (data.currentslide.hasClass('rs-slide-limitgood')) {
                    $('div#slider-title-mobile div.elementor-widget-container h1').text('Лимитированные товары');
                    console.log('goods title')
                }
                // data.previousslide = Previous Slide as jQuery Object

            });

        })
        $('#main-slider-mobile > rs-arrow:nth-child(2)').on('click', function (e) {
            revapi11.on('revolution.slide.onafterswap', function (event, data) {

                console.log(data.currentslide.hasClass('rs-slide-limitgood'))
                if (data.currentslide.hasClass('rs-slide-place')) {
                    $('div#slider-title-mobile div.elementor-widget-container h1').text('/nНаши площадки');
                    console.log('place title')
                }
                else if (data.currentslide.hasClass('rs-slide-limitgood')) {
                    $('div#slider-title-mobile div.elementor-widget-container h1').text('Лимитированные товары');
                    console.log('goods title')
                }
                // data.previousslide = Previous Slide as jQuery Object
            });
        });
    });
});