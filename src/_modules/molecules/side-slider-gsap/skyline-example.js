  zoomFrame: function(a, b) {
    var c, d;
    if (this.zoomInfo = this.calcZoom(a.boundsInfo, a.anchor, a.anchorOffset),
        a.transition) {
      c = a.duration,
        d = a.delay;
      var e = c / 1e3 + "s"
        , f = d / 1e3 + "s";
      this.$elInner.css("-webkit-transition", "-webkit-transform " + e + " cubic-bezier(0.645, 0.045, 0.355, 1.000) " + f).css("transition", "transform " + e + " cubic-bezier(0.645, 0.045, 0.355, 1.000) " + f)
    } else
      c = 0,
        d = 0,
        this.$elInner.css("-webkit-transition", "none").css("transition", "none");
    this.$elInner.css("-webkit-transform", "translate3d(" + parseFloat(this.zoomInfo.translate[0]).toFixed(3) + "px," + parseFloat(this.zoomInfo.translate[1]).toFixed(3) + "px,0)scale3d(" + parseFloat(this.zoomInfo.scale).toFixed(3) + "," + parseFloat(this.zoomInfo.scale).toFixed(3) + ",1)").css("transform", "translate3d(" + parseFloat(this.zoomInfo.translate[0]).toFixed(3) + "px," + parseFloat(this.zoomInfo.translate[1]).toFixed(3) + "px,0)scale3d(" + parseFloat(this.zoomInfo.scale).toFixed(3) + "," + parseFloat(this.zoomInfo.scale).toFixed(3) + ",1)"),
      this.horzPos = -this.zoomInfo.translate[0],
      setTimeout(b, (c || 0) + (d || 0))
  },
  shiftFrame: function(a) {
    this.$elInner.css("-webkit-transition", "none").css("transition", "none").css("-webkit-transform", "translate3d(" + -a + "px," + this.zoomInfo.translate[1] + "px,0)scale3d(" + this.zoomInfo.scale + "," + this.zoomInfo.scale + ",1)").css("transform", "translate3d(" + -a + "px," + this.zoomInfo.translate[1] + "px,0)scale3d(" + this.zoomInfo.scale + "," + this.zoomInfo.scale + ",1)"),
      $.publish("skyline:horzPos", a),
      this.horzPos = a
  },
  initSlideScroll: function() {
    var a = this;
    this.toggleFixedSlideScroll(!0),
      $(window).on("scroll.skyline", function(b) {
        var c = $(window).scrollTop();
        c >= a.maxSlide && !this.slideEnable ? (a.shiftFrame(a.maxSlide),
          a.toggleFixedSlideScroll(!1),
          $.publish("skyline:end"),
          a.$elOuter.css({
            top: a.maxSlide
          }).addClass("unfix")) : c < a.maxSlide && (a.toggleFixedSlideScroll(!0),
          a.$elOuter.css({
            top: "auto"
          }).removeClass("unfix"),
          a.shiftFrame(c))
      })
  },
  disableSlideScroll: function() {
    $(window).off("scroll.skyline")
  },
  toggleFixedSlideScroll: function(a) {
    this.slideEnable = a
  },
  initDraggable: function() {
    var a = this;
    this.$elInner.css("transition", "none"),
      this.swiper = Draggable.create(this.$elInner, {
        type: "x",
        bounds: a.$elOuter,
        lockAxis: !0,
        throwProps: !0,
        onDragStart: function() {
          this.startX = this.x
        },
        onDrag: function() {
          $.publish("skyline:horzPos", -this.x),
            a.horzPos = -this.x
        },
        onThrowUpdate: function() {
          $.publish("skyline:horzPos", -this.x),
            a.horzPos = -this.x
        },
        onThrowComplete: function() {
          $.publish("skyline:horzPos", -this.x),
            a.horzPos = -this.x
        }
      })
  },
  enableDraggable: function() {
    this.$elInner.css("transition", "none"),
      this.swiper[0].enable()
  },
  disableDraggable: function() {
    this.swiper[0].disable()
  }
  },
