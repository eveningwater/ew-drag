import { getCss } from './util';
const ani = (function () {
    var animation = {};
    function TimerManager() {
        this.timers = [];
        this.args = [];
        this.isTimerRun = false;
    }
    TimerManager.makeTimerManage = function (element) {
        if (!element.TimerManage ||
            element.TimerManage.constructor !== TimerManager
        ) {
            element.TimerManage = new TimerManager();
        }
    };
    TimerManager.prototype.add = function (timer, args) {
        this.timers.push(timer);
        this.args.push(args);
        this.timerRun();
    };
    TimerManager.prototype.timerRun = function () {
        if (!this.isTimerRun) {
            var timer = this.timers.shift(),
                args = this.args.shift();
            if (timer && args) {
                this.isTimerRun = true;
                timer(args[0], args[1]);
            }
        }
    };
    TimerManager.prototype.next = function () {
        this.isTimerRun = false;
        this.timerRun();
    };
    function slideUp(element, time) {
        if (element.offsetHeight > 0) {
            var totalHeight = element.offsetHeight;
            var currentHeight = totalHeight;
            var reduceValue = totalHeight / (time / 10);
            element.style.transition = "height " + time + " ms";
            element.style.overflow = "hidden";
            var timer = setInterval(function () {
                currentHeight -= reduceValue;
                element.style.height = currentHeight + "px";
                if (currentHeight <= 0) {
                    clearInterval(timer);
                    element.style.display = "none";
                    element.style.height = totalHeight + "px";
                    if (
                        element.TimerManage &&
                        element.TimerManage.constructor === TimerManager
                    ) {
                        element.TimerManage.next();
                    }
                }
            }, 10);
        } else {
            if (
                element.TimerManage &&
                element.TimerManage.constructor === TimerManager
            ) {
                element.TimerManage.next();
            }
        }
    }
    function slideDown(element, time) {
        if (element.offsetHeight <= 0) {
            element.style.display = "block";
            element.style.transition = "height" + time + " ms";
            element.style.overflow = "hidden";
            var totalHeight = element.offsetHeight;
            var currentHeight = 0;
            element.style.height = "0px";
            var addValue = totalHeight / (time / 10);
            var timer = setInterval(function () {
                currentHeight += addValue;
                element.style.height = currentHeight + "px";
                if (currentHeight >= totalHeight) {
                    clearInterval(timer);
                    element.style.height = totalHeight + "px";
                    if (
                        element.TimerManage &&
                        element.TimerManage.constructor === TimerManager
                    ) {
                        element.TimerManage.next();
                    }
                }
            }, 10);
        } else {
            if (
                element.TimerManage &&
                element.TimerManage.constructor === TimerManager
            ) {
                element.TimerManage.next();
            }
        }
    }
    function fadeIn(element, time) {
        element.style.transition = "opacity" + time + " ms";
        if (!Number(getCss(element, 'opacity')) || !parseInt(getCss(element, 'opacity')) <= 0) {
            element.style.display = "none";
            element.style.opacity = 0;
            let curAlpha = 0;
            let addAlpha = 1 * 100 / (time / 10);
            let timer = null;
            let handleFade = function () {
                curAlpha += addAlpha;
                if (element.style.display === 'none') element.style.display = "block";
                element.style.opacity = (curAlpha / 100).toFixed(2);
                if (curAlpha >= 100) {

                    if (timer) clearTimeout(timer);
                    element.style.opacity = 1;
                    if (
                        element.TimerManage &&
                        element.TimerManage.constructor === TimerManager
                    ) {
                        element.TimerManage.next();
                    }
                } else {
                    timer = setTimeout(handleFade, 10);
                }
            }
            handleFade();
        } else {
            if (
                element.TimerManage &&
                element.TimerManage.constructor === TimerManager
            ) {
                element.TimerManage.next();
            }
        }
    }
    function fadeOut(element, time) {
        element.style.transition = "opacity" + time + " ms";
        if (parseInt(getCss(element, 'opacity')) >= 1) {
            let curAlpha = 100;
            element.style.opacity = 1;
            element.style.display = "block";
            let reduceAlpha = 1 * 100 / (time / 10);
            let timer = null;
            let handleFade = function () {
                curAlpha -= reduceAlpha;
                element.style.opacity = (curAlpha / 100).toFixed(2);
                if (curAlpha <= 0) {
                    if (timer) clearTimeout(timer);
                    element.style.opacity = 0;
                    element.style.display = "none";
                    if (
                        element.TimerManage &&
                        element.TimerManage.constructor === TimerManager
                    ) {
                        element.TimerManage.next();
                    }
                } else {
                    timer = setTimeout(handleFade, 10);
                }
            }
            handleFade();
        } else {
            if (
                element.TimerManage &&
                element.TimerManage.constructor === TimerManager
            ) {
                element.TimerManage.next();
            }
        }
    }
    animation.slideUp = function (element) {
        TimerManager.makeTimerManage(element);
        element.TimerManage.add(slideUp, arguments);
        return this;
    };
    animation.slideDown = function (element) {
        TimerManager.makeTimerManage(element);
        element.TimerManage.add(slideDown, arguments);
        return this;
    };
    animation.fadeIn = function (element) {
        TimerManager.makeTimerManage(element);
        element.TimerManage.add(fadeIn, arguments);
        return this;
    };
    animation.fadeOut = function (element) {
        TimerManager.makeTimerManage(element);
        element.TimerManage.add(fadeOut, arguments);
        return this;
    };
    return animation;
})();
export default ani;