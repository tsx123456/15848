System.register("chunks:///_virtual/ActDlgShow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIDialog.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, UIDialog;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      UIDialog = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "9599fBP8/NCUL748jyAvgQC", "ActDlgShow", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        requireComponent = _decorator.requireComponent,
        menu = _decorator.menu;
      var ActDlgShow = exports('default', (_dec = ccclass("ActDlgShow"), _dec2 = menu("Ext/ActDlgShow"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ActDlgShow, _Component);
        function ActDlgShow() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = ActDlgShow.prototype;
        // @property({ displayName: "动画时间", visible: true })
        // protected _duration: number = 0.1;
        // @property({ displayName: "最小缩放", visible: true })
        // protected _minScale: number = 0.8;
        // //    // LIFE-CYCLE CALLBACKS:
        // //    // onLoad () {}
        // protected _allowOpt: boolean = true;
        _proto.start = function start() {
          this.Open();
        };
        _proto.Open = function Open() {
          var frame = this.getComponent(UIDialog);
          if (frame) frame.Open();
        }
        // public Close(closedNotify: (node: cc.Node) => void, closedCaller: any) {
        //     if (!this._allowOpt) {
        //         return;
        //     }
        //     let cb: (node: cc.Node) => void = closedNotify ? (closedCaller ? closedNotify.bind(closedCaller) : closedNotify) : () => {};
        //     let frame = this.getComponent(UIDialog);
        //     let dlg = frame ? frame.dlgFrame : null;
        //     if (dlg) {
        //         dlg.active = true;
        //         cc.tween(dlg)
        //             .stop()
        //             .to(this._duration, { scale: cc.v3(this._minScale, this._minScale, 1) }, { easing: "backIn" })
        //             .call(() => {
        //                 cb(this.node);
        //                 dlg.active = false;
        //                 this._allowOpt = true;
        //             })
        //             .start();
        //         cc.tween(dlg.getComponent(cc.UIOpacity))
        //             .stop()
        //             .to(this._duration, { opacity: 0 }, { easing: "backOut" })
        //             .call(() => {})
        //             .start();
        //     }
        //     this.MaskAct(frame, true);
        // }
        // protected MaskAct(frame: UIDialog, visible: boolean) {
        //     let mask = frame ? frame.dlgMask : null;
        //     if (mask && mask.node) {
        //         mask.node.active = true;
        //         mask.node.getComponent(cc.UIOpacity).opacity = visible ? 0 : mask.maxAlpha;
        //         cc.tween(mask.node.getComponent(cc.UIOpacity))
        //             .stop()
        //             .to(this._duration, { opacity: visible ? mask.maxAlpha : 0 })
        //             .start();
        //     }
        // }
        //    // update (dt) {}
        ;

        return ActDlgShow;
      }(Component)) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import UIDialog from "./UIDialog";
      //
      // const { ccclass, property, requireComponent, menu } = cc._decorator;
      //
      // @ccclass
      // @menu("Ext/ActDlgShow")
      // export default class ActDlgShow extends cc.Component {
      //     @property({ displayName: "动画时间", visible: true })
      //     protected _duration: number = 0.1;
      //     @property({ displayName: "最小缩放", visible: true })
      //     protected _minScale: number = 0.8;
      //     // LIFE-CYCLE CALLBACKS:
      //
      //     // onLoad () {}
      //     protected _allowOpt: boolean = true;
      //
      //     start() {
      //         this.Open();
      //     }
      //
      //     public Open() {
      //         if (!this._allowOpt) {
      //             return;
      //         }
      //         this._allowOpt = false;
      //         let frame = this.getComponent(UIDialog);
      //         let dlg = frame ? frame.dlgFrame : null;
      //         if (dlg) {
      //             dlg.active = true;
      //             dlg.opacity = 0;
      //             dlg.scale = this._minScale;
      //             this.scheduleOnce(() => {
      //                 cc.tween(dlg)
      //                     .stop()
      //                     .to(this._duration, { opacity: 255, scale: 1 }, { easing: "backOut" })
      //                     .call(() => {
      //                         this._allowOpt = true;
      //                     })
      //                     .start();
      //             }, 0.1);
      //         }
      //
      //         this.MaskAct(frame, true);
      //     }
      //
      //     public Close(closedNotify: (node: cc.Node) => void, closedCaller: any) {
      //         if (!this._allowOpt) {
      //             return;
      //         }
      //
      //         let cb: (node: cc.Node) => void = closedNotify
      //             ? closedCaller
      //                 ? closedNotify.bind(closedCaller)
      //                 : closedNotify
      //             : () => {};
      //         let frame = this.getComponent(UIDialog);
      //         let dlg = frame ? frame.dlgFrame : null;
      //         if (dlg) {
      //             dlg.active = true;
      //             cc.tween(dlg)
      //                 .stop()
      //                 .to(this._duration, { opacity: 0, scale: this._minScale }, { easing: "backIn" })
      //                 .call(() => {
      //                     cb(this.node);
      //                     dlg.active = false;
      //                     this._allowOpt = true;
      //                 })
      //                 .start();
      //         }
      //
      //         this.MaskAct(frame, true);
      //     }
      //
      //     protected MaskAct(frame: UIDialog, visible: boolean) {
      //         let mask = frame ? frame.dlgMask : null;
      //         if (mask && mask.node) {
      //             mask.node.active = true;
      //             mask.node.opacity = visible ? 0 : mask.maxAlpha;
      //             cc.tween(mask.node)
      //                 .stop()
      //                 .to(this._duration, { opacity: visible ? mask.maxAlpha : 0 })
      //                 .start();
      //         }
      //     }
      //     // update (dt) {}
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ActFlyTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, Vec3, v3, UIOpacity, tween, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Vec3 = module.Vec3;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "b3899+zDUtCvaMYQTBB9zma", "ActFlyTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ActFlyTip = exports('default', (_dec = ccclass("ActFlyTip"), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ActFlyTip, _Component);
        function ActFlyTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ActFlyTip.prototype;
        _proto.SetTip = function SetTip(tip) {
          this.tip = tip;
          return this;
        };
        _proto.RunAct = function RunAct() {
          var _this2 = this;
          //        // console.log("RunAct");
          this.node.setPosition(Vec3.ZERO);
          this.node.scale = v3(1.15, 1.15);
          this.node.getComponent(UIOpacity).opacity = 0;
          tween(this.node).stop().to(0.1, {
            scale: v3(1, 1, 1)
          }).delay(3).to(1, {
            position: v3(this.node.position.x, 300)
          }).call(function () {
            _this2.node.removeFromParent();
            _this2.node.destroy();
          }).start();
          tween(this.node.getComponent(UIOpacity)).stop().to(0.1, {
            opacity: 255
          }).delay(3).to(1, {
            opacity: 0
          }).call(function () {}).start();
          return this;
        }
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        ;

        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _createClass(ActFlyTip, [{
          key: "tip",
          set: function set(value) {
            gts.UI.SetLab(this.label, value);
          }
        }]);
        return ActFlyTip;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // const { ccclass, property } = cc._decorator;
      //
      // @ccclass
      // export default class ActFlyTip extends cc.Component {
      //     @property(cc.Label)
      //     label: cc.Label = null;
      //
      //     public set tip(value: string) {
      //         gts.UI.SetLab(this.label, value);
      //     }
      //
      //     public SetTip(tip: string): ActFlyTip {
      //         this.tip = tip;
      //         return this;
      //     }
      //
      //     public RunAct(): ActFlyTip {
      //         // console.log("RunAct");
      //         this.node.setPosition(cc.Vec3.ZERO);
      //         this.node.scale = 1.15;
      //         this.node.opacity = 0;
      //         cc.tween(this.node)
      //             .stop()
      //             .to(0.1, { scale: 1, opacity: 255 })
      //             .delay(3)
      //             .to(1, { opacity: 0, y: 300 })
      //             .call(() => {
      //                 this.node.removeFromParent();
      //                 this.node.destroy();
      //             })
      //             .start();
      //         return this;
      //     }
      //     // LIFE-CYCLE CALLBACKS:
      //
      //     // onLoad () {}
      //
      //     start() {}
      //
      //     // update (dt) {}
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ActionFade.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCInteger, UIOpacity, tween, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCInteger = module.CCInteger;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "49cec17EdpM0YbYncVRwUSo", "ActionFade", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        requireComponent = _decorator.requireComponent,
        executeInEditMode = _decorator.executeInEditMode;
      var ActionFade = exports('default', (_dec = ccclass("ActionFade"), _dec2 = menu("tools/ActionFade"), _dec3 = property(CCInteger), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ActionFade, _Component);
        function ActionFade() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "waitTime", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playTime", _descriptor2, _assertThisInitialized(_this));
          _this.callback = null;
          return _this;
        }
        var _proto = ActionFade.prototype;
        _proto.onEnable = function onEnable() {
          this.startAction();
        };
        _proto.startAction = function startAction() {
          var _this2 = this;
          this.node.getComponent(UIOpacity).opacity = 0;
          this.scheduleOnce(function () {
            tween(_this2.node.getComponent(UIOpacity)).to(_this2.playTime, {
              opacity: 255
            }).call(function () {
              if (_this2.callback) {
                _this2.callback();
              }
            }).start();
          }, this.waitTime);
        };
        return ActionFade;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "waitTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/activeButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component, MainManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "bb673u8qhpBxbjaS3D4Mfcp", "activeButton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var activeButton = exports('default', (_dec = ccclass("ActiveButton"), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(activeButton, _Component);
        function activeButton() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._mainManager = void 0;
          _this._eventManager = void 0;
          _this._configManager = void 0;
          _initializerDefineProperty(_this, "eventName", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "eventType", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "curNode", _descriptor3, _assertThisInitialized(_this));
          _this._checkType = "pay";
          _this._Index = 0;
          return _this;
        }
        var _proto = activeButton.prototype;
        _proto.onLoad = function onLoad() {
          this._mainManager = MainManager.getInstance();
          this._eventManager = this._mainManager.getEventManager();
          this._configManager = this._mainManager.getConfigManager();
        };
        _proto.start = function start() {};
        _proto.dispatchButtonEvent = function dispatchButtonEvent(event, eventData) {
          gts.Debug.Log(event);
          //        // this._mainManager.getAudioManager().playbuttonEffect();
          if (this._configManager[this.eventType][this.eventName]) {
            gts.Debug.Log("相应事件" + this._configManager[this.eventType][this.eventName]);
            gts.Debug.Log(this.eventName);
            this._eventManager.dispatch(this._configManager[this.eventType][this.eventName], {
              curNode: this.curNode,
              index: this._Index,
              eventData: this._checkType
            });
          } else {
            gts.Debug.Log("事件类型" + this.eventName + "未注册");
          }
        };
        _proto.initAction = function initAction() {}
        //    // update (dt) {}
        ;

        return activeButton;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "eventName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "事件类型";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "eventType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "ButtonEvent";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "curNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import ConfigManager from "../manager/ConfigManager";
      // import EventManager from "../manager/EventManager";
      // import MainManager from "../manager/MainManager";
      //
      // const { ccclass, property } = cc._decorator;
      //
      // @ccclass
      // export default class activeButton extends cc.Component {
      //     _mainManager: MainManager;
      //     _eventManager: EventManager;
      //     _configManager: ConfigManager;
      //
      //     @property
      //     eventName: string = "事件类型";
      //     @property
      //     eventType: string = "ButtonEvent";
      //     @property(cc.Node)
      //     curNode: cc.Node = null;
      //
      //     _checkType: string = "pay";
      //     _Index: number = 0;
      //     onLoad() {
      //         this._mainManager = MainManager.getInstance();
      //         this._eventManager = this._mainManager.getEventManager();
      //         this._configManager = this._mainManager.getConfigManager();
      //     }
      //     start() {}
      //     dispatchButtonEvent(event: cc.Event, eventData: any) {
      //         gts.Debug.Log(event);
      //         // this._mainManager.getAudioManager().playbuttonEffect();
      //         if (this._configManager[this.eventType][this.eventName]) {
      //             gts.Debug.Log("相应事件" + this._configManager[this.eventType][this.eventName]);
      //             gts.Debug.Log(this.eventName);
      //             this._eventManager.dispatch(this._configManager[this.eventType][this.eventName], {
      //                 curNode: this.curNode,
      //                 index: this._Index,
      //                 eventData: this._checkType,
      //             });
      //         } else {
      //             gts.Debug.Log("事件类型" + this.eventName + "未注册");
      //         }
      //     }
      //     initAction() {}
      //     // update (dt) {}
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Adaptor.ts", ['cc'], function (exports) {
  var cclegacy, view;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      view = module.view;
    }],
    execute: function () {
      cclegacy._RF.push({}, "602fdU/Q9RNTrMB3zQjrxHq", "Adaptor", undefined);
      var Adaptor = exports('default', /*#__PURE__*/function () {
        function Adaptor() {}
        //监听屏幕尺寸变化
        Adaptor.listenScreen = function listenScreen() {
          window.addEventListener("resize", function () {
            Adaptor.adaptScreen();
          });
        }

        //全屏适配
        //调用时机：在监听到窗口大小变化时 + 场景onLoad时
        ;

        Adaptor.adaptScreen = function adaptScreen() {
          var windowsScale = window.innerHeight / window.innerWidth;
          var targetScale1 = 1334 / 750;
          var targetScale2 = 1700 / 750;
          var scale1 = targetScale1 / (window.innerHeight / window.innerWidth);
          var scale2 = targetScale2 / (window.innerHeight / window.innerWidth);
          console.log("scal", scale1);
          console.log("sca2", scale2);
          if (windowsScale <= targetScale1) {
            view.setFrameSize(window.innerWidth / scale1, window.innerHeight);
          } else {
            if (windowsScale <= targetScale2) {
              view.setFrameSize(window.innerWidth, window.innerHeight);
            } else {
              view.setFrameSize(window.innerWidth, window.innerHeight * scale2);
            }
          }
        };
        return Adaptor;
      }());
      Adaptor.isF = false;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AddSpineEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, sp, Node, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "832fe75hdpBHr6ABEF64Vrq", "AddSpineEffect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var AddSpineEffect = exports('default', (_dec = ccclass("AddSpineEffect"), _dec2 = menu("tools/AddSpineEffect"), _dec3 = property(sp.Skeleton), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AddSpineEffect, _Component);
        function AddSpineEffect() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "spine_ani", _descriptor, _assertThisInitialized(_this));
          _this.aniName = null;
          return _this;
        }
        var _proto = AddSpineEffect.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.spine_ani.node.active = false;
          this.node.on(Node.EventType.MOUSE_ENTER, function () {
            if (_this2.spine_ani.node) {
              _this2.spine_ani.node.active = true;
              if (!_this2.aniName) {
                _this2.aniName = _this2.spine_ani.animation;
              }
              _this2.spine_ani.setAnimation(0, _this2.aniName, true);
            }
          }, this);
          this.node.on(Node.EventType.MOUSE_LEAVE, function () {
            _this2.spine_ani.node.active = false;
          }, this);
        };
        _createClass(AddSpineEffect, [{
          key: "animation",
          set: function set(name) {
            this.aniName = name;
            if (this.spine_ani.node.active) {
              this.spine_ani.setAnimation(0, this.aniName, true);
            }
          }
        }]);
        return AddSpineEffect;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "spine_ani", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AItemRenerer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "f5831HrIL9CWYRsN+ohvLE0", "AItemRenerer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      /**
       * 单项渲染基类 T数据结构
       * @author slf
       *  */
      var AItemRenderer = exports('default', (_dec = ccclass("AItemRenderer"), _dec2 = property({
        displayName: "是否添加点击事件"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AItemRenderer, _Component);
        function AItemRenderer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "isClick", _descriptor, _assertThisInitialized(_this));
          _this.callback = void 0;
          //回调函数
          _this.cbThis = void 0;
          //回调作用域
          _this._data = void 0;
          return _this;
        }
        var _proto = AItemRenderer.prototype;
        /**数据发生变化 子类重写*/
        _proto.dataChanged = function dataChanged() {}

        /**刷新数据 */;
        _proto.refreshData = function refreshData() {
          this.dataChanged();
        }

        /**销毁 */;
        _proto.onDestroy = function onDestroy() {
          this._data = null;
        }

        /**
         * 设置点击回调
         * @param cb 回调函数
         * @param cbT 回调作用域
         */;
        _proto.setTouchCallback = function setTouchCallback(cb, cbT) {
          this.callback = cb;
          this.cbThis = cbT;
          if (this.node) {
            if (this.node.hasEventListener(Node.EventType.TOUCH_END)) {
              this.node.off(Node.EventType.TOUCH_END, this.onClickCallback, this);
            }
            this.node.on(Node.EventType.TOUCH_END, this.onClickCallback, this);
          }
        }

        /**
         * 预制体点击回调 会携带data
         * @param e
         */;
        _proto.onClickCallback = function onClickCallback(e) {
          this.callback && this.callback.call(this.cbThis, this.data);
        };
        _createClass(AItemRenderer, [{
          key: "data",
          get:
          //数据结构
          function get() {
            return this._data;
          },
          set: function set(v) {
            this._data = v;
            this.dataChanged();
          }
        }]);
        return AItemRenderer;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "isClick", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Assembler2D.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // import * as cc from "cc";
      cclegacy._RF.push({}, "e213czk0mJDeob9pmnhqsyu", "Assembler2D", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy, sys, Node, director, AudioSource, AudioClip, resources, isValid;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
      Node = module.Node;
      director = module.director;
      AudioSource = module.AudioSource;
      AudioClip = module.AudioClip;
      resources = module.resources;
      isValid = module.isValid;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d4cd8MyAyJL/plnClhTvQhJ", "AudioManager", undefined);
      var AudioManager = exports('default', /*#__PURE__*/function () {
        function AudioManager() {
          //    // LIFE-CYCLE CALLBACKS:
          this._soundMusic = true;
          this._soundEffect = true;
          this._buttonClip = null;
          this._bgClip = [];
          this._gameBg = null;
          this._Hallbg = false;
          this._musicAudio = null;
          //背景音
          this._audioSource = void 0;
          this.musicNode = void 0;
          //音效管理列表
          this._audioList = new Map();
          this._audioID = 0;
          this._finishCallBackList = new Map();
          this.volume = 1;
          this._soundMusicBack = false;
          this._soundEffectBack = false;
          // let musicMgr = new Node();
          // musicMgr.name = "__audioMgr__";
          // director.getScene().addChild(musicMgr);
          // director.addPersistRootNode(musicMgr);
          // this._audioSource = musicMgr.addComponent(AudioSource);
          if (sys.localStorage.getItem("ismusic") != null) {
            //            //1 打开 -1 关闭
            this.setMusicStatus(sys.localStorage.getItem("ismusic") == 1);
          }
          if (sys.localStorage.getItem("issound") != null) {
            //            //1 打开 -1 关闭
            this.setSoundStatus(sys.localStorage.getItem("issound") == 1);
          }
        }
        var _proto = AudioManager.prototype;
        _proto.setMusicStatus = function setMusicStatus(isbool) {
          this._soundMusic = isbool;
          var ismusic = isbool == true ? 1 : -1;
          sys.localStorage.setItem("ismusic", ismusic);
          if (this._soundMusic == false) {
            // cc.audioEngine.stopMusic();
            if (this._audioSource) {
              this._audioSource.stop();
            }
            // this._audioSource.clip = sound;
            // this._audioSource.play();
            // this.audioSource.volume = volume;
          } else {
            if (this._Hallbg == true) {
              this.NextBgMusic();
            } else {
              if (this._musicAudio) {
                this.playGameMusic(this._musicAudio, true);
              }
            }
          }
        };
        _proto.setSoundStatus = function setSoundStatus(isbool) {
          this._soundEffect = isbool;
          var issound = isbool == true ? 1 : -1;
          sys.localStorage.setItem("issound", issound);
        };
        _proto.startBgMusic = function startBgMusic() {
          if (this._Hallbg == false) {
            this._Hallbg = true;
            this.playBgMusic();
          }
        };
        _proto.NextBgMusic = function NextBgMusic() {
          this.playBgMusic();
        };
        _proto.initSource = function initSource() {
          if (!this._audioSource) {
            var musicMgr = new Node();
            musicMgr.name = "__audioMgr__";
            director.getScene().addChild(musicMgr);
            director.addPersistRootNode(musicMgr);
            this._audioSource = musicMgr.addComponent(AudioSource);
            this._audioSource.playOnAwake = false;
            this._audioSource.volume = this.volume;
            this.musicNode = musicMgr;
            this._audioSource.node.on(AudioSource.EventType.ENDED, this.musicHander, this);
          }
        };
        _proto.musicHander = function musicHander(target) {
          var _this = this;
          if (target == this._audioSource && !target.loop) {
            this.NextBgMusic();
          } else {
            this._finishCallBackList.forEach(function (callback, key) {
              if (_this._audioList.get(key) == target) {
                callback();
                if (!target.loop) _this._finishCallBackList["delete"](key);
              }
            });
          }
        };
        _proto.playMusic = function playMusic(audio, isLoop) {
          this._audioSource.stop();
          this._audioSource.clip = audio;
          this._audioSource.loop = isLoop;
          this._audioSource.play();

          // console.log("playMusic");
          // this._audioSource.node.off(cc.AudioSource.EventType.ENDED, this.musicHander, this);
          // this._audioSource.node.on(cc.AudioSource.EventType.ENDED, this.musicHander, this);
        };

        _proto.playBgMusic = function playBgMusic(strPath, bundle, isLoop) {
          var _this2 = this;
          if (strPath === void 0) {
            strPath = null;
          }
          if (bundle === void 0) {
            bundle = null;
          }
          if (isLoop === void 0) {
            isLoop = false;
          }
          this.initSource();
          if (this._soundMusic) {
            if (strPath && bundle) {
              bundle.load(strPath, AudioClip, function (err, audio) {
                // let id = cc.audioEngine.playMusic(audio, isLoop || false);
                // cc.audioEngine.setFinishCallback(id, self.NextBgMusic.bind(self));

                _this2.playMusic(audio, isLoop);
              });
            } else {
              resources.load("sound/bg" + (1 + 1), AudioClip, function (err, audio) {
                // let id = cc.audioEngine.playMusic(audio, isLoop || false);
                // cc.audioEngine.setFinishCallback(id, self.NextBgMusic.bind(self));
                _this2.playMusic(audio, isLoop);
              });
            }
          }
        };
        _proto.playbuttonEffect = function playbuttonEffect() {
          var _this3 = this;
          //        //公共按钮音效
          this.initSource();
          if (this._soundEffect) {
            if (this._buttonClip) {
              // cc.audioEngine.playEffect(this._buttonClip, false);
              this._audioSource.playOneShot(this._buttonClip);
            } else {
              resources.load("sound/buttonClick", AudioClip, function (err, audio) {
                // cc.audioEngine.playEffect(audio, false);
                _this3._buttonClip = audio;
                _this3._audioSource.playOneShot(_this3._buttonClip);
              });
            }
          }
        };
        _proto.playGameMusic = function playGameMusic(audio, isloop) {
          this.initSource();
          this._Hallbg = false;
          this._musicAudio = audio;
          if (this._soundMusic) {
            // let id = cc.audioEngine.playMusic(audio, isloop);
            this.playMusic(audio, isloop);
          }
        }

        /**
         * 由于音频数量有限，音效尽量用该方法
         * @param audio 播放短频音效，不做管理
         */;
        _proto.playOneShot = function playOneShot(audio) {
          this.initSource();
          if (this._soundEffect) {
            this._audioSource.playOneShot(audio);
          }
        };
        _proto.playSound = function playSound(audio, isloop) {
          if (isloop === void 0) {
            isloop = false;
          }
          // if (!cc.audioEngine.isMusicPlaying()) {
          //     return;
          // }     3

          //短音频直接播放
          var duration = audio.getDuration();
          if (duration < 1 && !isloop) {
            this.playOneShot(audio);
            return 0;
          }
          this.initSource();
          if (this._soundEffect) {
            // this._curSoundID = cc.audioEngine.playEffect(audio, isloop);

            var _audioSource = this.musicNode.addComponent(AudioSource);
            _audioSource.clip = audio;
            _audioSource.playOnAwake = false;
            _audioSource.loop = isloop;
            _audioSource.volume = this.volume;
            _audioSource.play();
            this._audioList.set(++this._audioID, _audioSource);
            return this._audioID;
          }
          return 0;
        };
        _proto.stopSound = function stopSound(audioID) {
          audioID = audioID || this._audioID;
          if (audioID && this._audioList.get(audioID)) {
            // cc.audioEngine.stopEffect(audioID);

            this._audioList.get(audioID).stop();
            if (this._finishCallBackList.get(audioID)) {
              this._finishCallBackList["delete"](audioID);
            }
          }
        };
        _proto.setFinishCallback = function setFinishCallback(audioID, callback) {
          if (audioID && this._audioList.get(audioID)) {
            // cc.audioEngine.stopEffect(audioID);

            this._finishCallBackList.set(audioID, callback);

            // this._audioList.get(audioID).node.on(cc.AudioSource.EventType.ENDED, (target: AudioSource) => {
            //     if (target == this._audioList.get(audioID)) callback();
            // });
          }
        };

        _proto.playSoundAndCall = function playSoundAndCall(audio, isloop, callback) {
          this.initSource();
          if (this._soundEffect && audio) {
            var id = this.playSound(audio, isloop);
            var time = this._audioList.get(id).duration;
            if (callback) {
              callback(time);
            }
          } else {
            if (callback) {
              callback(0);
            }
          }
        };
        _proto.stopAllEffect = function stopAllEffect() {
          // cc.audioEngine.stopAllEffects();
          this._audioList.forEach(function (element) {
            if (element && isValid(element)) {
              element.stop();
              element.destroy();
            }
          });
          this._audioList.clear();
          this._finishCallBackList.clear();
        };
        _proto.pauseMusic = function pauseMusic() {
          if (this._audioSource) {
            this._audioSource.pause();
          }
        };
        _proto.resumeMusic = function resumeMusic() {
          if (this._soundMusic && this._audioSource) {
            this._audioSource.play();
          }
        };
        _proto.pauseAllEffect = function pauseAllEffect() {
          // cc.audioEngine.stopAllEffects();
          this._audioList.forEach(function (element) {
            if (element) {
              element.pause();
            }
          });
        };
        _proto.getAudioTime = function getAudioTime(id) {
          // return cc.audioEngine.getDuration(id);
          if (this._audioList.get(id)) {
            var time = this._audioList.get(id).duration;
            return time;
          }
          return 0;
        };
        _proto.stopAll = function stopAll() {
          // cc.audioEngine.stopAll();
          if (this._audioSource) {
            this._audioSource.stop();
          }
          this.stopAllEffect();
        };
        _proto.pauseAll = function pauseAll() {
          this._soundMusicBack = this._soundMusic;
          this._soundEffectBack = this._soundEffect;
          this._soundMusic = false;
          this._soundEffect = false;

          // cc.audioEngine.pauseAll();
          this.stopAll();
        };
        _proto.resumAll = function resumAll() {
          this._soundMusic = this._soundMusicBack;
          this._soundEffect = this._soundEffectBack;

          // cc.audioEngine.resumeAll();
          this.resumeMusic();
        };
        _proto.setVolume = function setVolume(volume) {
          this.volume = volume;
          this._audioList.forEach(function (element) {
            element.volume = volume;
          });
          if (this._audioSource) {
            this._audioSource.volume = volume;
          }
        };
        _createClass(AudioManager, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new AudioManager();
            }
            return this._instance;
          }
        }]);
        return AudioManager;
      }());
      AudioManager._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AutoChangeParent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GUtil.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, v3, Vec3, Component, GUtil;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      v3 = module.v3;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      GUtil = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "bd949Ik9CtAnZ0XHEsYAZVH", "AutoChangeParent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var AutoChangeParent = exports('default', (_dec = ccclass("AutoChangeParent"), _dec2 = menu("Ext/AutoChangeParent"), _dec3 = property(Node), _dec4 = property({
        displayName: "跟随原节点位置"
      }), _dec5 = property(), _dec6 = property({
        visible: function visible() {
          return this.resetZIndex;
        }
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AutoChangeParent, _Component);
        function AutoChangeParent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "newParent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "followOldParentPos", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resetZIndex", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "newZIndex", _descriptor4, _assertThisInitialized(_this));
          _this._debug = false;
          _this._onUpdate = function () {};
          _this._oldPos = v3(-10000, -10000);
          _this._posInFirstParent = Vec3.ZERO;
          //    // private _oldParent: cc.Node = null;
          _this._firstParent = null;
          return _this;
        }
        AutoChangeParent.Bind = function Bind(node, parent, followOldParentPos) {
          if (followOldParentPos === void 0) {
            followOldParentPos = false;
          }
          if (!node) {
            return null;
          }
          var acp = node.getComponent(AutoChangeParent);
          if (!acp) {
            acp = node.addComponent(AutoChangeParent);
          }
          acp.newParent = parent;
          acp.followOldParentPos = followOldParentPos;
          return acp;
        };
        var _proto = AutoChangeParent.prototype;
        _proto.SetDebug = function SetDebug(debug) {
          this._debug = debug;
          return this;
        };
        _proto.OnUpdateNotify = function OnUpdateNotify(cb, caller) {
          this._onUpdate = cb ? caller ? cb.bind(caller) : cb : function () {};
          return this;
        }
        //    // LIFE-CYCLE CALLBACKS:

        //    // onLoad () {}
        ;

        _proto.start = function start() {
          this.DoChange(this.newParent);
        };
        _proto.update = function update(dt) {
          //        // if (this._debug) {
          //        //     gts.Debug.Log(`#ACP DEBUG`);
          //        // }
          if (this.followOldParentPos && this._firstParent) {
            var pos = GUtil.Pos_L2W(this._firstParent);
            pos.x += this._posInFirstParent.x;
            pos.y += this._posInFirstParent.y;
            var dst = GUtil.Pos_W2L(pos, this.node.parent);
            this.node.position = dst;
          }
          this._onUpdate(dt, this);
        };
        _proto.DoChange = function DoChange(parent) {
          if (parent === void 0) {
            parent = this.newParent;
          }
          if (!parent) {
            return;
          }
          if (!this._firstParent) {
            this._firstParent = this.node.parent;
            this._posInFirstParent = this.node.getPosition();
          }
          var dstpos = GUtil.TransPos(this.node, parent);
          this.node.parent = parent;
          this.node.setPosition(dstpos);
          if (this.resetZIndex) {
            this.node.setSiblingIndex(this.newZIndex);
          }
        };
        return AutoChangeParent;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "newParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "followOldParentPos", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "resetZIndex", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "newZIndex", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AutoEventNode.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainManager.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Component, MainManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "5c7cdcd6bBOe71jf8rxP3BQ", "AutoEventNode", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AutoEventNode = exports('default', (_dec = ccclass("AutoEventNode"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AutoEventNode, _Component);
        function AutoEventNode() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //! 记录注册的回调信息
          _this._hnds = {};
          _this._eMgr = null;
          return _this;
        }
        AutoEventNode.BindNode = function BindNode(node) {
          if (!node) {
            return null;
          }
          var aen = node.getComponent(AutoEventNode) || node.addComponent(AutoEventNode);
          return aen;
        };
        var _proto = AutoEventNode.prototype;
        _proto.has = function has(event) {
          var hnd = this._hnds[event];
          if (hnd) {
            return true;
          }
          return false;
        };
        _proto.OnEvent = function OnEvent(event, cb, caller) {
          if (caller === void 0) {
            caller = this;
          }
          if (!this.eMgr) {
            gts.Debug.LogWarr("AutoEventNode:OnEvent.eMgr is nil!");
            return;
          }
          var hnd = this._hnds[event];
          if (hnd) {
            gts.Debug.LogWarr("AutoEventNode:OnEvent event[\"" + event + "\"] is reg");
            return;
          }
          hnd = {
            cb: cb,
            caller: caller
          };
          this._hnds[event] = hnd;
          this.eMgr.on(event, cb, caller);
        };
        _proto.offEvent = function offEvent(event, cb, caller) {
          if (caller === void 0) {
            caller = this;
          }
          if (!this.eMgr) {
            gts.Debug.LogWarr("AutoEventNode:OnEvent.eMgr is nil!");
            return;
          }
          var hnd = this._hnds[event];
          if (hnd) {
            this.eMgr.off(event, cb, caller);
            delete this._hnds[event];
          }
        };
        _proto.EmitEvent = function EmitEvent(event, data, arg1, arg2, arg3, arg4) {
          if (data === void 0) {
            data = null;
          }
          if (!this.eMgr) {
            gts.Debug.LogWarr("AutoEventNode:EmitEvent.eMgr is nil!");
            return;
          }
          this.eMgr.dispatch(event, data, arg1, arg2, arg3, arg4);
        }
        //    // onLoad () {}
        ;

        _proto.start = function start() {
          if (this.autoReListenMsg) {
            this.ReListenMsg();
          }
        };
        _proto.OnDisConnected = function OnDisConnected(cb, caller) {
          if (caller === void 0) {
            caller = this;
          }
          var hnd = cb ? caller ? cb.bind(caller) : cb : function () {};
          var mMgr = MainManager.getInstance();
          if (mMgr._configManager) {
            this.OnEvent(mMgr._configManager.eventTransform.disConnect, function () {
              hnd();
            });
          }
        };
        _proto.OnRConnected = function OnRConnected(cb, caller) {
          if (caller === void 0) {
            caller = this;
          }
          var hnd = cb ? caller ? cb.bind(caller) : cb : function () {};
          var mMgr = MainManager.getInstance();
          if (mMgr._configManager) {
            this.OnEvent(mMgr._configManager.eventTransform.reConnect, function () {
              hnd();
            });
          }
        };
        _proto.ReListenMsg = function ReListenMsg() {
          var _this2 = this;
          var mMgr = MainManager.getInstance();
          if (mMgr._netManager) {
            //            //! 重新开启监听
            mMgr._netManager.waitServiceSendData();
          }
          if (mMgr._configManager) {
            this.OnEvent(mMgr._configManager.eventTransform.gameShow, function () {
              _this2.OnEventGameShow();
              _this2.scheduleOnce(function () {
                if (mMgr._netManager) {
                  //                        //! 重新开启监听
                  mMgr._netManager.waitServiceSendData();
                }
              }, 0);
            });
          }
        };
        _proto.OnEventGameShow = function OnEventGameShow() {}
        //    // update (dt) {}
        //    //! 清理所有注册的回调事件
        ;

        _proto.ClearAllRegEvents = function ClearAllRegEvents() {
          if (!this.eMgr) {
            return;
          }
          var names = Object.keys(this._hnds);
          for (var i = 0; i < names.length; ++i) {
            var tmpname = names[i];
            var tmpdata = this._hnds[tmpname];
            this.eMgr.off(tmpname, tmpdata.cb, tmpdata.caller);
          }
        };
        _proto.onDestroy = function onDestroy() {
          this.ClearAllRegEvents();
        };
        _createClass(AutoEventNode, [{
          key: "autoReListenMsg",
          get: function get() {
            return false;
          }
        }, {
          key: "eMgr",
          get: function get() {
            if (!this._eMgr) {
              var mMgr = MainManager.getInstance();
              this._eMgr = mMgr ? mMgr.getEventManager() : null;
            }
            return this._eMgr;
          }
        }]);
        return AutoEventNode;
      }(Component)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import EventManager from "../manager/EventManager";
      // import MainManager from "../manager/MainManager";
      // import GUtil from "./GUtil";
      //
      // const { ccclass, property } = cc._decorator;
      //
      // @ccclass
      // export default class AutoEventNode extends cc.Component {
      //     public get autoReListenMsg(): boolean {
      //         return false;
      //     }
      //
      //     public static BindNode(node: cc.Node): AutoEventNode {
      //         if (!node) {
      //             return null;
      //         }
      //
      //         let aen = node.getComponent(AutoEventNode) || node.addComponent(AutoEventNode);
      //         return aen;
      //     }
      //
      //     //! 记录注册的回调信息
      //     private _hnds: { [key: string]: { cb: Function; caller: any } } = {};
      //
      //     private _eMgr: EventManager = null;
      //     protected get eMgr(): EventManager {
      //         if (!this._eMgr) {
      //             let mMgr = MainManager.getInstance();
      //             this._eMgr = mMgr ? mMgr.getEventManager() : null;
      //         }
      //         return this._eMgr;
      //     }
      //
      //     public has(event: string): boolean {
      //         let hnd = this._hnds[event];
      //         if (hnd) {
      //             return true;
      //         }
      //
      //         return false;
      //     }
      //
      //     public OnEvent(event: string, cb: Function, caller: any = this) {
      //         if (!this.eMgr) {
      //             gts.Debug.LogWarr(`AutoEventNode:OnEvent.eMgr is nil!`);
      //             return;
      //         }
      //
      //         let hnd = this._hnds[event];
      //         if (hnd) {
      //             gts.Debug.LogWarr(`AutoEventNode:OnEvent event[\"${event}\"] is reg`);
      //             return;
      //         }
      //         hnd = { cb: cb, caller: caller };
      //         this._hnds[event] = hnd;
      //         this.eMgr.on(event, cb, caller);
      //     }
      //
      //     public offEvent(event: string, cb?: Function, caller: any = this) {
      //         if (!this.eMgr) {
      //             gts.Debug.LogWarr(`AutoEventNode:OnEvent.eMgr is nil!`);
      //             return;
      //         }
      //
      //         let hnd = this._hnds[event];
      //         if (hnd) {
      //             this.eMgr.off(event, cb, caller);
      //             delete this._hnds[event];
      //         }
      //     }
      //
      //     public EmitEvent(event: string, data: any = null, arg1?: any, arg2?: any, arg3?: any, arg4?: any) {
      //         if (!this.eMgr) {
      //             gts.Debug.LogWarr(`AutoEventNode:EmitEvent.eMgr is nil!`);
      //             return;
      //         }
      //
      //         this.eMgr.dispatch(event, data, arg1, arg2, arg3, arg4);
      //     }
      //
      //     // onLoad () {}
      //
      //     start() {
      //         if (this.autoReListenMsg) {
      //             this.ReListenMsg();
      //         }
      //     }
      //
      //     protected OnDisConnected(cb: () => void, caller: any = this) {
      //         let hnd = cb ? (caller ? cb.bind(caller) : cb) : () => {};
      //         let mMgr = MainManager.getInstance();
      //         if (mMgr._configManager) {
      //             this.OnEvent(mMgr._configManager.eventTransform.disConnect, () => {
      //                 hnd();
      //             });
      //         }
      //     }
      //     protected OnRConnected(cb: () => void, caller: any = this) {
      //         let hnd = cb ? (caller ? cb.bind(caller) : cb) : () => {};
      //         let mMgr = MainManager.getInstance();
      //         if (mMgr._configManager) {
      //             this.OnEvent(mMgr._configManager.eventTransform.reConnect, () => {
      //                 hnd();
      //             });
      //         }
      //     }
      //
      //     protected ReListenMsg() {
      //         let mMgr = MainManager.getInstance();
      //         if (mMgr._netManager) {
      //             //! 重新开启监听
      //             mMgr._netManager.waitServiceSendData();
      //         }
      //         if (mMgr._configManager) {
      //             this.OnEvent(mMgr._configManager.eventTransform.gameShow, () => {
      //                 this.OnEventGameShow();
      //                 this.scheduleOnce(() => {
      //                     if (mMgr._netManager) {
      //                         //! 重新开启监听
      //                         mMgr._netManager.waitServiceSendData();
      //                     }
      //                 }, 0);
      //             });
      //         }
      //     }
      //
      //     protected OnEventGameShow() {}
      //     // update (dt) {}
      //
      //     //! 清理所有注册的回调事件
      //     protected ClearAllRegEvents() {
      //         if (!this.eMgr) {
      //             return;
      //         }
      //
      //         let names = Object.keys(this._hnds);
      //         for (let i = 0; i < names.length; ++i) {
      //             let tmpname = names[i];
      //             let tmpdata = this._hnds[tmpname];
      //             this.eMgr.off(tmpname, tmpdata.cb, tmpdata.caller);
      //         }
      //     }
      //
      //     onDestroy() {
      //         this.ClearAllRegEvents();
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AutoScale.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, view, v3, Component, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      view = module.view;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "005e1NXjrtAko3TjiX5EUwb", "AutoScale", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        requireComponent = _decorator.requireComponent,
        executeInEditMode = _decorator.executeInEditMode;
      var AutoScale = exports('default', (_dec = ccclass("AutoScale"), _dec2 = menu("tools/AutoScale"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AutoScale, _Component);
        function AutoScale() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = AutoScale.prototype;
        _proto.start = function start() {
          var size = view.getVisibleSize();
          if (!Common.checkStandard()) {
            this.node.scale = v3(750 / 1080, 750 / 1080, 1);
          }
        };
        return AutoScale;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AVirtualScrollView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AItemRenerer.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Layout, UITransform, Vec2, instantiate, ScrollView, AItemRenderer;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Layout = module.Layout;
      UITransform = module.UITransform;
      Vec2 = module.Vec2;
      instantiate = module.instantiate;
      ScrollView = module.ScrollView;
    }, function (module) {
      AItemRenderer = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "73e9doeH/RERpQSzddXIKhU", "AVirtualScrollView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * 虚拟滚动视图 扩展ScrollView
       * 渲染预制体必需挂载 AItemRenderer子类
       * @author slf
       */
      var AVirtualScrollView = exports('default', (_dec = property({
        type: Prefab,
        serializable: true,
        displayName: "渲染预制体"
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_ScrollView) {
        _inheritsLoose(AVirtualScrollView, _ScrollView);
        function AVirtualScrollView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ScrollView.call.apply(_ScrollView, [this].concat(args)) || this;
          /**渲染预制体必需挂载 AItemRenderer子类 */
          _initializerDefineProperty(_this, "itemRenderer", _descriptor, _assertThisInitialized(_this));
          /**子项点击 回调函数  回调作用域*/
          _this.callback = void 0;
          _this.cbThis = void 0;
          /**最大渲染预制体 垂直数量 */
          _this.verticalCount = void 0;
          /**最大渲染预制体 水平数量 */
          _this.horizontalCount = void 0;
          /**预制体宽高 */
          _this.itemW = void 0;
          _this.itemH = void 0;
          /**定时器 */
          _this.interval = void 0;
          /**预制体池 */
          _this.itemPool = void 0;
          /**预制体列表 */
          _this.itemList = void 0;
          /**预制体渲染类列表 */
          _this.itemRendererList = void 0;
          /**数据列表 */
          _this.dataList = void 0;
          /**开始坐标 */
          _this.startPos = void 0;
          /**布局*/
          _this.contentLayout = void 0;
          /**强制刷新 */
          _this.forcedRefresh = void 0;
          /**刷新 */
          _this.refresh = void 0;
          _this._uiTransform = void 0;
          return _this;
        }
        var _proto = AVirtualScrollView.prototype;
        _proto.onLoad = function onLoad() {
          this.itemList = [];
          this.itemPool = [];
          this.itemRendererList = [];
          this.contentLayout = this.content.getComponent(Layout);
          this.contentLayout.enabled = false;
          this._uiTransform = this.node.getComponent(UITransform);
          //起始位置
          var itemNode = this.itemRenderer.data.getComponent(UITransform);
          this.startPos = new Vec2(itemNode.width * itemNode.anchorX + this.contentLayout.paddingLeft, -(itemNode.height * itemNode.anchorY + this.contentLayout.paddingTop));
          //预制体宽高
          this.itemW = itemNode.width + this.contentLayout.spacingX;
          this.itemH = itemNode.height + this.contentLayout.spacingY;
          //垂直、水平最大预制体数量
          this.horizontalCount = Math.ceil(this._uiTransform.width / this.itemW) + 1;
          this.verticalCount = Math.ceil(this._uiTransform.height / this.itemH) + 1;
          if (this.contentLayout.type == Layout.Type.GRID) {
            if (this.contentLayout.startAxis == Layout.AxisDirection.HORIZONTAL) {
              this.horizontalCount = Math.floor(this._uiTransform.width / this.itemW);
            } else {
              this.verticalCount = Math.floor(this._uiTransform.height / this.itemH);
            }
          }
        };
        _proto.start = function start() {};
        _proto.onDestroy = function onDestroy() {
          this.dataList = null;
          this.itemList = null;
          this.itemRendererList = null;
          clearInterval(this.interval);
        }

        /**利用ScrollView本身方法 来标记滑动中 */;
        _proto._setContentPosition = function _setContentPosition(position) {
          _ScrollView.prototype["_setContentPosition"].call(this, position);
          this.refresh = true;
        }

        /**
         * 设置列表 子项点击回调
         * 回调会携带当前子项的 data
         * @param cb 回调
         * @param cbT 作用域
         */;
        _proto.setTouchItemCallback = function setTouchItemCallback(cb, cbT) {
          this.callback = cb;
          this.cbThis = cbT;
        }

        /**选中数据 */;
        _proto.onItemTap = function onItemTap(data) {
          this.callback && this.callback.call(this.cbThis, data);
        }

        /**
         * 刷新数据
         * @param data 数据源 单项|队列
         */;
        _proto.refreshData = function refreshData(data) {
          if (Array.isArray(data)) {
            this.dataList = data;
          } else {
            this.dataList = [data];
          }
          if (this.interval) {
            clearInterval(this.interval);
          }
          this.addItem();
          this.refreshContentSize();
          this.forcedRefresh = true;
          this.refresh = true;
          this.interval = setInterval(this.refreshItem.bind(this), 1000 / 10);
        }

        /**添加预制体 */;
        _proto.addItem = function addItem() {
          var len = 0;
          switch (this.contentLayout.type) {
            case Layout.Type.HORIZONTAL:
              len = this.horizontalCount;
              break;
            case Layout.Type.VERTICAL:
              len = this.verticalCount;
              break;
            case Layout.Type.GRID:
              len = this.horizontalCount * this.verticalCount;
              break;
          }
          len = Math.min(len, this.dataList.length);
          var itemListLen = this.itemList.length;
          if (itemListLen < len) {
            var itemRenderer = null;
            for (var i = itemListLen; i < len; i++) {
              var child = this.itemPool.length > 0 ? this.itemPool.shift() : instantiate(this.itemRenderer);
              this.content.addChild(child);
              this.itemList.push(child);
              itemRenderer = child.getComponent(AItemRenderer);
              this.itemRendererList.push(itemRenderer);
              if (itemRenderer.isClick) {
                itemRenderer.setTouchCallback(this.onItemTap, this);
              }
            }
          } else {
            var cL = this.content.children.length;
            var item;
            while (cL > len) {
              item = this.itemList[cL - 1];
              this.content.removeChild(item);
              this.itemList.splice(cL - 1, 1);
              this.itemRendererList.splice(cL - 1, 1);
              this.itemPool.push(item);
              cL = this.content.children.length;
            }
          }
        }

        /**根据数据数量 改变content宽高 */;
        _proto.refreshContentSize = function refreshContentSize() {
          var layout = this.contentLayout;
          var dataListLen = this.dataList.length;
          switch (this.contentLayout.type) {
            case Layout.Type.VERTICAL:
              this.content.getComponent(UITransform).height = layout.paddingTop + dataListLen * this.itemH + layout.paddingBottom;
              break;
            case Layout.Type.HORIZONTAL:
              this.content.getComponent(UITransform).width = layout.paddingLeft + dataListLen * this.itemW + layout.paddingRight;
              break;
            case Layout.Type.GRID:
              if (this.contentLayout.startAxis == Layout.AxisDirection.HORIZONTAL) {
                this.content.getComponent(UITransform).height = layout.paddingTop + Math.ceil(dataListLen / this.horizontalCount) * this.itemH + layout.paddingBottom;
              } else if (this.contentLayout.startAxis == Layout.AxisDirection.VERTICAL) {
                this.content.getComponent(UITransform).width = layout.paddingLeft + Math.ceil(dataListLen / this.verticalCount) * this.itemW + layout.paddingRight;
              }
              break;
          }
        }

        /**刷新预制体位置 和 数据填充 */;
        _proto.refreshItem = function refreshItem() {
          if (!this.refresh) {
            return;
          }
          switch (this.contentLayout.type) {
            case Layout.Type.HORIZONTAL:
              this.refreshHorizontal();
              break;
            case Layout.Type.VERTICAL:
              this.refreshVertical();
              break;
            case Layout.Type.GRID:
              this.refreshGrid();
              break;
          }
          this.refresh = false;
          this.forcedRefresh = false;
        }

        /**刷新水平 */;
        _proto.refreshHorizontal = function refreshHorizontal() {
          var start = Math.floor(Math.abs(this.getContentPosition().x) / this.itemW);
          if (start < 0 || this.getContentPosition().x > 0) {
            //超出边界处理
            start = 0;
          }
          var end = start + this.horizontalCount;
          if (end > this.dataList.length) {
            //超出边界处理
            end = this.dataList.length;
            start = Math.max(end - this.horizontalCount, 0);
          }
          var tempV = 0;
          var itemListLen = this.itemList.length;
          var item, pos, idx;
          for (var i = 0; i < itemListLen; i++) {
            idx = (start + i) % itemListLen;
            item = this.itemList[idx];
            pos = item.getPosition();
            tempV = this.startPos.x + (start + i) * this.itemW;
            if (pos.x != tempV || this.forcedRefresh) {
              // console.log("修改的数据=" + (start + i));
              pos.x = tempV;
              item.position = pos;
              this.itemRendererList[idx].data = this.dataList[start + i];
            }
          }
        }

        /**刷新垂直 */;
        _proto.refreshVertical = function refreshVertical() {
          var start = Math.floor(Math.abs(this.getContentPosition().y) / this.itemH);
          if (start < 0 || this.getContentPosition().y < 0) {
            start = 0;
          }
          var end = start + this.verticalCount;
          if (end > this.dataList.length) {
            end = this.dataList.length;
            start = Math.max(end - this.verticalCount, 0);
          }
          var tempV = 0;
          var itemListLen = this.itemList.length;
          var item, pos, idx;
          for (var i = 0; i < itemListLen; i++) {
            idx = (start + i) % itemListLen;
            item = this.itemList[idx];
            pos = item.getPosition();
            tempV = this.startPos.y + -(start + i) * this.itemH;
            if (pos.y != tempV || this.forcedRefresh) {
              // console.log("修改的数据=" + (start + i));
              pos.y = tempV;
              item.position = pos;
              this.itemRendererList[idx].data = this.dataList[start + i];
            }
          }
        }

        /**刷新网格 */;
        _proto.refreshGrid = function refreshGrid() {
          //是否垂直方向 添加网格
          var isVDirection = this.contentLayout.startAxis == Layout.AxisDirection.VERTICAL;
          var start = Math.floor(Math.abs(this.getContentPosition().y) / this.itemH) * this.horizontalCount;
          if (isVDirection) {
            start = Math.floor(Math.abs(this.getContentPosition().x) / this.itemW) * this.verticalCount;
            if (this.getContentPosition().x > 0) {
              start = 0;
            }
          } else if (this.getContentPosition().y < 0) {
            start = 0;
          }
          if (start < 0) {
            start = 0;
          }
          var end = start + this.horizontalCount * this.verticalCount;
          if (end > this.dataList.length) {
            end = this.dataList.length;
            start = Math.max(end - this.horizontalCount * this.verticalCount, 0);
          }
          var tempX = 0;
          var tempY = 0;
          var itemListLen = this.itemList.length;
          var item, pos, idx;
          for (var i = 0; i < itemListLen; i++) {
            idx = (start + i) % itemListLen;
            item = this.itemList[idx];
            pos = item.getPosition();
            if (isVDirection) {
              tempX = this.startPos.x + Math.floor((start + i) / this.verticalCount) * this.itemW;
              tempY = this.startPos.y + -((start + i) % this.verticalCount) * this.itemH;
            } else {
              tempX = this.startPos.x + (start + i) % this.horizontalCount * this.itemW;
              tempY = this.startPos.y + -Math.floor((start + i) / this.horizontalCount) * this.itemH;
            }
            if (pos.y != tempY || pos.x != tempX || this.forcedRefresh) {
              // console.log("修改的数据=" + (start + i));
              pos.x = tempX;
              pos.y = tempY;
              item.position = pos;
              this.itemRendererList[idx].data = this.dataList[start + i];
            }
          }
        };
        return AVirtualScrollView;
      }(ScrollView), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemRenderer", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseEvent.ts", ['cc'], function (exports) {
  var cclegacy, EventTarget;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      EventTarget = module.EventTarget;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b390eC9TMdE6IZ1UY8HrcpN", "BaseEvent", undefined);
      var BaseEvent = exports('BaseEvent', /*#__PURE__*/function () {
        function BaseEvent() {
          this.eventTarget = void 0;
          this.eventTarget = new EventTarget();
        }
        //    /**
        //     * 事件监听
        //     * @param eventName
        //     * @param cb
        //     * @param target
        //     */
        var _proto = BaseEvent.prototype;
        _proto.on = function on(eventName, cb, target) {
          this.eventTarget.on(eventName, cb, target);
        }
        //    /**
        //     * 单次事件监听
        //     * @param eventName
        //     * @param cb
        //     * @param target
        //     */
        ;

        _proto.once = function once(eventName, cb, target) {
          // this.eventTarget.once(
          //     eventName,
          //     (params) => {
          //         cb.apply(null, params);
          //     },
          //     target
          // );
          this.eventTarget.once(eventName, cb, target);
        }
        //    /**
        //     * 通过事件名发送自定义事件
        //     * @param eventName
        //     * @param params
        //     */
        ;

        _proto.emit = function emit(eventName) {
          var _this$eventTarget;
          for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            params[_key - 1] = arguments[_key];
          }
          (_this$eventTarget = this.eventTarget).emit.apply(_this$eventTarget, [eventName].concat(params));
        }
        //    /**
        //     * 取消事件监听
        //     * @param target
        //     */
        ;

        _proto.off = function off(type, callback, target) {
          this.eventTarget.off(type, callback, target);
        };
        _proto.targetOff = function targetOff(target) {
          this.eventTarget.targetOff(target);
        }
        //    /**
        //     * 获取事件目标
        //     */
        ;

        _proto.getEventTarget = function getEventTarget() {
          return this.eventTarget;
        };
        return BaseEvent;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Batcher2DEx.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // import { Director, director, Scheduler, Node, Root, gfx, cclegacy } from "cc";
      cclegacy._RF.push({}, "4052aoNFTtJVaGl6Do8WnWF", "Batcher2DEx", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/bgScreen.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainManager.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, UITransform, view, Component, MainManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      view = module.view;
      Component = module.Component;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "a61b2agRqdIbpqZbOJ2A/is", "bgScreen", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var bgScreen = exports('default', (_dec = ccclass("BgScreen"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(bgScreen, _Component);
        function bgScreen() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._mainManager = void 0;
          _this._eventManager = void 0;
          _this._configManager = void 0;
          return _this;
        }
        var _proto = bgScreen.prototype;
        _proto.onLoad = function onLoad() {
          this._mainManager = MainManager.getInstance();
          this._eventManager = this._mainManager.getEventManager();
          this._configManager = this._mainManager.getConfigManager();
          this.node.getComponent(UITransform).width = view.getFrameSize().width;
          this.node.getComponent(UITransform).height = view.getFrameSize().height;
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        return bgScreen;
      }(Component)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import ConfigManager from "../manager/ConfigManager";
      // import EventManager from "../manager/EventManager";
      // import MainManager from "../manager/MainManager";
      //
      // const { ccclass, property } = cc._decorator;
      //
      // @ccclass
      // export default class bgScreen extends cc.Component {
      //     _mainManager: MainManager;
      //     _eventManager: EventManager;
      //     _configManager: ConfigManager;
      //
      //     onLoad() {
      //         this._mainManager = MainManager.getInstance();
      //         this._eventManager = this._mainManager.getEventManager();
      //         this._configManager = this._mainManager.getConfigManager();
      //         this.node.width = cc.view.getFrameSize().width;
      //         this.node.height = cc.view.getFrameSize().height;
      //     }
      //     start() {}
      //
      //     // update (dt) {}
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BlackWordProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ProxyMgr.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, ProxyBase, ConfigManager, EventManager, NetManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ProxyBase = module.ProxyBase;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c005ekDrXJBzbf4TS7lIcme", "BlackWordProxy", undefined);
      /**
       * 屏蔽字数据代理
       */
      var BlackWordProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(BlackWordProxyMgr, _ProxyBase);
        function BlackWordProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.wordList = [];
          _this.wsEvents = [];
          _this.patten = void 0;
          return _this;
        }
        var _proto = BlackWordProxyMgr.prototype;
        _proto.registSocketEvent = function registSocketEvent() {
          this.wsEvents = [ConfigManager.getInstance().protocolHall.actionSensitiveWordList];
          for (var _iterator = _createForOfIteratorHelperLoose(this.wsEvents), _step; !(_step = _iterator()).done;) {
            var event = _step.value;
            EventManager.getInstance().on(event, this.recvData, this);
          }

          //
        };

        _proto.removeSocketEvent = function removeSocketEvent() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.wsEvents), _step2; !(_step2 = _iterator2()).done;) {
            var event = _step2.value;
            EventManager.getInstance().off(event, this.recvData, this);
          }
        };
        _proto.recvData = function recvData(data) {
          var list = data.Data;
          list = list.split(",");
          // console.log("list", list);
          var str = "";
          for (var _iterator3 = _createForOfIteratorHelperLoose(list), _step3; !(_step3 = _iterator3()).done;) {
            var i = _step3.value;
            str += i + "|";
          }
          str = str.slice(0, str.length - 1);
          var reg = new RegExp(str, "g");
          this.wordList = list;
          this.patten = reg;
        }

        /**屏蔽字库初始化 */;
        _proto.initList = function initList() {
          // if (this.wordList.length > 0) {
          //     return;
          // }
          // let url = ConfigManager.getInstance().httpDIr.blackWordList;

          // let param = {};
          // let platform = DataManager.instance.getUserDataForKey(UserKey.PLATFORM);
          // if (platform) {
          //     param["platformCode"] = platform;
          // }
          // NetManager.instance.httpGet(
          //     url,
          //     param,
          //     (msg) => {
          //         let list = msg.data;
          //         list = list.split(",");
          //         // console.log("list", list);
          //         let str = "";
          //         for (let i of list) {
          //             str += i + "|";
          //         }
          //         str = str.slice(0, str.length - 1);
          //         let reg = new RegExp(str, "g");

          //         this.wordList = list;
          //         this.patten = reg;
          //     },
          //     null
          // );

          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.actionSensitiveWordList);
        };
        _proto.startSchedule = function startSchedule() {
          // cc.director.getScheduler().enableForTarget(this);
          // if (!cc.director.getScheduler().isScheduled(this.initList, this)) cc.director.getScheduler().schedule(this.initList, this, 5);
        }

        /**
         * 文本过滤
         * @param content
         * @returns
         */;
        _proto.filter = function filter(content) {
          var str = content;
          var search = content.match(this.patten);
          if (search) {
            for (var _iterator4 = _createForOfIteratorHelperLoose(search), _step4; !(_step4 = _iterator4()).done;) {
              var item = _step4.value;
              var len = item.length;
              var x = "";
              for (var i = 0; i < len; i++) {
                x += "*";
              }
              str = str.replace(item, x);
            }
          }

          // let str = content.replace(this.patten, "*");

          return str;
        };
        return BlackWordProxyMgr;
      }(ProxyBase);
      var BlackWordProxy = exports('default', new BlackWordProxyMgr("BlackWordProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BtnArea.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GUtil.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, UIOpacity, Button, tween, v3, Tween, Component, GUtil;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UIOpacity = module.UIOpacity;
      Button = module.Button;
      tween = module.tween;
      v3 = module.v3;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      GUtil = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "1dfcd1N761K1q5ZVLLZBXP/", "BtnArea", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        requireComponent = _decorator.requireComponent;
      var BtnArea = exports('default', (_dec = ccclass("BtnArea"), _dec2 = menu("Ext/BtnArea"), _dec3 = property(Node), _dec4 = property(), _dec5 = property(), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BtnArea, _Component);
        function BtnArea() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "selEff", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fateDt", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isEffScale", _descriptor3, _assertThisInitialized(_this));
          _this._onClicked = function () {};
          return _this;
        }
        BtnArea.OnClicked = function OnClicked(node, cb, caller) {
          var ba = node.getComponent(BtnArea);
          if (ba) {
            ba.OnClicked(cb, caller);
            return ba;
          }
          gts.UI.OnClick(node, cb, caller);
          return null;
        };
        var _proto = BtnArea.prototype;
        _proto.OnClicked = function OnClicked(notify, caller) {
          this._onClicked = GUtil.MakeHnd(notify, caller);
          return this;
        }
        //    // LIFE-CYCLE CALLBACKS:
        ;

        _proto.onLoad = function onLoad() {
          var _this2 = this;
          if (!this.isEffScale) {
            if (this.selEff) {
              this.selEff.getComponent(UIOpacity).opacity = 0;
            }
          }
          this.node.off(Node.EventType.TOUCH_END);
          this.node.on(Node.EventType.TOUCH_END, function () {
            var btncom = _this2.node.getComponent(Button);
            if (btncom && !btncom.interactable) {
              return;
            }
            if (_this2.selEff) {
              if (!_this2.isEffScale) {
                _this2.selEff.getComponent(UIOpacity).opacity = 255;
                tween(_this2.selEff.getComponent(UIOpacity)).stop().to(_this2.fateDt, {
                  opacity: 0
                }).start();
              } else {
                _this2.selEff.scale = v3(1.0, 1.0);
                tween(_this2.selEff).stop().to(_this2.fateDt, {
                  scale: v3(1.2, 1.2, 1)
                }).to(_this2.fateDt, {
                  scale: v3(1, 1, 1)
                }).start();
              }
            }
            _this2._onClicked(_this2);
          }, this);
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _proto.PlayEff = function PlayEff(value, dt) {
          if (dt === void 0) {
            dt = 0.5;
          }
          if (this.selEff) {
            Tween.stopAllByTarget(this.selEff);
            Tween.stopAllByTarget(this.selEff.getComponent(UIOpacity));
            this.selEff.getComponent(UIOpacity).opacity = 0;
            if (value) {
              // this.selEff.runAction(cc.repeatForever(cc.sequence(cc.fadeTo(dt, 255), cc.fadeTo(dt, 0))));
              tween(this.selEff.getComponent(UIOpacity)).to(dt, {
                opacity: 255
              }).to(dt, {
                opacity: 0
              }).union().repeatForever().start();
            }
          }
        };
        return BtnArea;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "selEff", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fateDt", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isEffScale", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import GUtil from "./GUtil";
      //
      // const { ccclass, property, menu, requireComponent } = cc._decorator;
      //
      // @ccclass
      // @menu("Ext/BtnArea")
      // export default class BtnArea extends cc.Component {
      //     @property(cc.Node)
      //     private selEff: cc.Node = null;
      //     @property()
      //     private fateDt: number = 0.1;
      //
      //     @property()
      //     private isEffScale: boolean = false;
      //
      //     public static OnClicked(node: cc.Node, cb: (btn?: BtnArea) => void, caller: any): BtnArea {
      //         let ba = node.getComponent(BtnArea);
      //         if (ba) {
      //             ba.OnClicked(cb, caller);
      //             return ba;
      //         }
      //
      //         gts.UI.OnClick(node, cb, caller);
      //         return null;
      //     }
      //
      //     private _onClicked: (btn: BtnArea) => void = () => {};
      //     public OnClicked(notify: (btn: BtnArea) => void, caller: any): BtnArea {
      //         this._onClicked = GUtil.MakeHnd(notify, caller);
      //         return this;
      //     }
      //     // LIFE-CYCLE CALLBACKS:
      //
      //     onLoad() {
      //         if (!this.isEffScale) {
      //             if (this.selEff) {
      //                 this.selEff.opacity = 0;
      //             }
      //         }
      //
      //         this.node.off(cc.Node.EventType.TOUCH_END);
      //         this.node.on(
      //             cc.Node.EventType.TOUCH_END,
      //             () => {
      //                 let btncom = this.node.getComponent(cc.Button);
      //                 if (btncom && !btncom.interactable) {
      //                     return;
      //                 }
      //                 if (this.selEff) {
      //                     if (!this.isEffScale) {
      //                         this.selEff.opacity = 255;
      //                         cc.tween(this.selEff).stop().to(this.fateDt, { opacity: 0 }).start();
      //                     } else {
      //                         this.selEff.scale = 1.0;
      //                         cc.tween(this.selEff).stop().to(this.fateDt, { scale: 1.2 }).to(this.fateDt, { scale: 1.0 }).start();
      //                     }
      //                 }
      //
      //                 this._onClicked(this);
      //             },
      //             this
      //         );
      //     }
      //
      //     start() {}
      //
      //     // update (dt) {}
      //     public PlayEff(value: boolean, dt: number = 0.5) {
      //         if (this.selEff) {
      //             this.selEff.stopAllActions();
      //             this.selEff.opacity = 0;
      //             if (value) {
      //                 this.selEff.runAction(cc.repeatForever(cc.sequence(cc.fadeTo(dt, 255), cc.fadeTo(dt, 0))));
      //             }
      //         }
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BtnPolygon.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, director, UITransform, view, v3, PolygonCollider2D, Intersection2D, v2, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      UITransform = module.UITransform;
      view = module.view;
      v3 = module.v3;
      PolygonCollider2D = module.PolygonCollider2D;
      Intersection2D = module.Intersection2D;
      v2 = module.v2;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "fd3ebxztBZMKKaIIBMcXkKE", "BtnPolygon", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var BtnPolygon = exports('default', (_dec = ccclass("BtnPolygon"), _dec2 = menu("Ext/BtnPolygon"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BtnPolygon, _Component);
        function BtnPolygon() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _this._oldHitTest = null;
          _this._camera = void 0;
          return _this;
        }
        var _proto = BtnPolygon.prototype;
        _proto.onLoad = function onLoad() {
          var cameras = director.root.cameraList;
          if (cameras[0]) {
            this._camera = cameras[0];
          }
          // let funcHitTest: Function = this.node["_hitTest"];
          var funcHitTest = this.node.getComponent(UITransform).hitTest;

          //        // gts.Debug.Log(`HitTest finded ? ${funcHitTest ? 'true' : 'false'}`);
          if (funcHitTest) {
            this._oldHitTest = funcHitTest.bind(this.node);
            // this.node["_hitTest"] = this.polygonHitTest.bind(this.node);
            this.node.getComponent(UITransform).hitTest = this.polygonHitTest.bind(this.node);
          }
        };
        _proto.start = function start() {}
        //    /**
        //     * 不规则多边形触摸测试
        //     * @param {触摸点} point
        //     * @param {监听} listener
        //     */
        ;

        _proto.polygonHitTest = function polygonHitTest(point) {
          var self = this;

          // if (this._camera) {
          //     worldPoint = this._camera.worldToScreen(worldPoint, cc.v3(point.x, point.y, 0));

          //     worldPoint = legacyCC.view._convertToUISpace(point);
          // }
          // console.log("point", worldPoint, this._camera);
          // @ts-ignore
          view._convertToUISpace(point);
          var worldPoint = v3(point.x, point.y, 0);
          var polygonCollider = self.getComponent(PolygonCollider2D);
          if (polygonCollider) {
            worldPoint = self.getComponent(UITransform).convertToNodeSpaceAR(worldPoint);
            //            // point.x -= self.getContentSize().width / 2;
            //            // point.y -= self.getContentSize().height / 2;
            var out = Intersection2D.pointInPolygon(v2(worldPoint.x, worldPoint.y), polygonCollider.points);
            return out;
          } else {
            return this._oldHitTest(point);
          }
        }
        //    // update (dt) {}
        ;

        return BtnPolygon;
      }(Component)) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // const { ccclass, property, menu } = cc._decorator;
      //
      // @ccclass
      // @menu("Ext/BtnPolygon")
      // export default class BtnPolygon extends cc.Component {
      //     // LIFE-CYCLE CALLBACKS:
      //
      //     private _oldHitTest: Function = null;
      //
      //     onLoad() {
      //         // this.node._oldHitTest = this.node._hitTest.bind(this.node);
      //         // this.node._hitTest = this.polygonHitTest.bind(this.node);
      //         let funcHitTest: Function = this.node["_hitTest"];
      //         // gts.Debug.Log(`HitTest finded ? ${funcHitTest ? 'true' : 'false'}`);
      //         if (funcHitTest) {
      //             this._oldHitTest = funcHitTest.bind(this.node);
      //             this.node["_hitTest"] = this.polygonHitTest.bind(this.node);
      //         }
      //     }
      //
      //     start() {}
      //
      //     /**
      //      * 不规则多边形触摸测试
      //      * @param {触摸点} point
      //      * @param {监听} listener
      //      */
      //     polygonHitTest(point, listener) {
      //         let self: cc.Node = this as any;
      //
      //         var polygonCollider = self.getComponent(cc.PolygonCollider);
      //         if (polygonCollider) {
      //             point = self.convertToNodeSpaceAR(point);
      //             // point.x -= self.getContentSize().width / 2;
      //             // point.y -= self.getContentSize().height / 2;
      //             return cc.Intersection.pointInPolygon(point, polygonCollider.points);
      //         } else {
      //             return this._oldHitTest(point, listener);
      //         }
      //     }
      //     // update (dt) {}
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ButtonInit.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './EventManager.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, ConfigManager, EventManager, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "3009dOrUUhLA5huOVkcwMdk", "ButtonInit", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ButtonInit = exports('default', (_dec = ccclass("ButtonInit"), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ButtonInit, _Component);
        function ButtonInit() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "eventName", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "eventType", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isDelay", _descriptor3, _assertThisInitialized(_this));
          _this.isRuning = false;
          return _this;
        }
        var _proto = ButtonInit.prototype;
        //    // onLoad() {}
        //    // start() {}
        _proto.dispatchButtonEvent = function dispatchButtonEvent(event, eventData) {
          var _this2 = this;
          // console.log("dispatchButtonEvent", event, eventData);
          if (ConfigManager.getInstance()[this.eventType][this.eventName]) {
            Common.showLog("相应事件" + ConfigManager.getInstance()[this.eventType][this.eventName]);
            if (!this.isDelay) {
              EventManager.getInstance().dispatch(ConfigManager.getInstance()[this.eventType][this.eventName], eventData);
              return;
            }
            if (!this.isRuning) {
              this.isRuning = true;
              this.scheduleOnce(function () {
                _this2.isRuning = false;
              }, 0.5);
              EventManager.getInstance().dispatch(ConfigManager.getInstance()[this.eventType][this.eventName], eventData);
            } else {
              Common.showLog("button speed too fast");
            }
          } else {
            Common.showLog("事件类型" + this.eventName + "未注册");
          }
        };
        _proto.initAction = function initAction() {}
        //    // update (dt) {}
        ;

        return ButtonInit;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "eventName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "事件类型";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "eventType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "ButtonEvent";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isDelay", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ButtonSetData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainManager.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, MainManager, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "fbfd1aHy29AlZsnja8gECUS", "ButtonSetData", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ButtonSetData = exports('default', (_dec = ccclass("ButtonSetData"), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ButtonSetData, _Component);
        function ButtonSetData() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._mainManager = void 0;
          _this._eventManager = void 0;
          _this._configManager = void 0;
          _initializerDefineProperty(_this, "eventName", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "eventType", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isDelay", _descriptor3, _assertThisInitialized(_this));
          _this.isRuning = false;
          _this._Btndata = null;
          return _this;
        }
        var _proto = ButtonSetData.prototype;
        _proto.onLoad = function onLoad() {
          this._mainManager = MainManager.getInstance();
          this._eventManager = this._mainManager.getEventManager();
          this._configManager = this._mainManager.getConfigManager();
        };
        _proto.start = function start() {};
        _proto.setButtonData = function setButtonData(data) {
          this._Btndata = data;
        };
        _proto.dispatchButtonEvent = function dispatchButtonEvent(event, eventData) {
          //        // this._mainManager.getAudioManager().playbuttonEffect();
          if (this._configManager[this.eventType][this.eventName]) {
            Common.showLog("相应事件" + this._configManager[this.eventType][this.eventName]);
            if (this.isDelay == false) {
              this._eventManager.dispatch(this._configManager[this.eventType][this.eventName], this._Btndata);
              return;
            }
            var self = this;
            if (this.isRuning == false) {
              this.isRuning = true;
              this.scheduleOnce(function () {
                self.isRuning = false;
              }, 0.5);
              self._eventManager.dispatch(self._configManager[self.eventType][self.eventName], this._Btndata);
            } else {
              Common.showLog("button speed too fast");
            }
          } else {
            Common.showLog("事件类型" + this.eventName + "未注册");
          }
        };
        _proto.initAction = function initAction() {}
        //    // update (dt) {}
        ;

        return ButtonSetData;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "eventName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "事件类型";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "eventType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "ButtonEvent";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isDelay", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import ConfigManager from "../manager/ConfigManager";
      // import EventManager from "../manager/EventManager";
      // import MainManager from "../manager/MainManager";
      // import { Common } from "./Common";
      //
      // const { ccclass, property } = cc._decorator;
      //
      // @ccclass
      // export default class ButtonSetData extends cc.Component {
      //     _mainManager: MainManager;
      //     _eventManager: EventManager;
      //     _configManager: ConfigManager;
      //     @property
      //     eventName: string = "事件类型";
      //     @property
      //     eventType: string = "ButtonEvent";
      //     @property
      //     isDelay: boolean = true;
      //
      //     isRuning: boolean = false;
      //     _Btndata = null;
      //     onLoad() {
      //         this._mainManager = MainManager.getInstance();
      //         this._eventManager = this._mainManager.getEventManager();
      //         this._configManager = this._mainManager.getConfigManager();
      //     }
      //     start() {}
      //     setButtonData(data) {
      //         this._Btndata = data;
      //     }
      //     dispatchButtonEvent(event: cc.Event, eventData: any) {
      //         // this._mainManager.getAudioManager().playbuttonEffect();
      //         if (this._configManager[this.eventType][this.eventName]) {
      //             Common.showLog("相应事件" + this._configManager[this.eventType][this.eventName]);
      //             if (this.isDelay == false) {
      //                 this._eventManager.dispatch(this._configManager[this.eventType][this.eventName], this._Btndata);
      //                 return;
      //             }
      //             let self = this;
      //             if (this.isRuning == false) {
      //                 this.isRuning = true;
      //                 this.scheduleOnce(function () {
      //                     self.isRuning = false;
      //                 }, 0.5);
      //                 self._eventManager.dispatch(self._configManager[self.eventType][self.eventName], this._Btndata);
      //             } else {
      //                 Common.showLog("button speed too fast");
      //             }
      //         } else {
      //             Common.showLog("事件类型" + this.eventName + "未注册");
      //         }
      //     }
      //     initAction() {}
      //     // update (dt) {}
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ButtonShow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component, tween;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
      tween = module.tween;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "6d1cborMOtJ57t04BvVITAR", "ButtonShow", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ButtonShow = exports('default', (_dec = ccclass("ButtonShow"), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ButtonShow, _Component);
        function ButtonShow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "buttons", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ButtonShow.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          if (this.buttons && this.buttons.length > 0) {
            var showNext = function showNext(buttons, counts) {
              if (counts + 1 > buttons.length) {
                return;
              }
              tween(buttons[counts]).to(0.3, {
                scale: 1,
                opacity: 255
              }, {
                easing: "backOut"
              }).call(function () {
                counts += 1;
                showNext(buttons, counts);
              }).start();
            };
            showNext(this.buttons, 0);
          }
        };
        return ButtonShow;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "buttons", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // const { ccclass, property } = cc._decorator;
      //
      // @ccclass
      // export default class ButtonShow extends cc.Component {
      //     @property(cc.Node)
      //     buttons: cc.Node[] = [];
      //
      //     // LIFE-CYCLE CALLBACKS:
      //
      //     onLoad() {}
      //
      //     start() {}
      //     onEnable() {
      //         if (this.buttons && this.buttons.length > 0) {
      //             let showNext = function (buttons: cc.Node[], counts: number) {
      //                 if (counts + 1 > buttons.length) {
      //                     return;
      //                 }
      //                 cc.tween(buttons[counts])
      //                     .to(0.3, { scale: 1, opacity: 255 }, { easing: "backOut" })
      //                     .call(() => {
      //                         counts += 1;
      //                         showNext(buttons, counts);
      //                     })
      //                     .start();
      //             };
      //
      //             showNext(this.buttons, 0);
      //         }
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CaptainProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './MainManager.ts', './ProxyMgr.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, sys, assetManager, i18n, MainManager, ProxyBase, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
      assetManager = module.assetManager;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      ProxyBase = module.ProxyBase;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6935arpMcxL1bI3SEc7OSsh", "CaptainProxy", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var CaptainGameEvent = exports('CaptainGameEvent', /*#__PURE__*/function (CaptainGameEvent) {
        CaptainGameEvent["ENTER_ROOM"] = "enterRoom";
        CaptainGameEvent["LEAVE_ROOM"] = "leaveRoom";
        CaptainGameEvent["UPDATE_CONFIG"] = "updateConfig";
        CaptainGameEvent["UPDATE_BETLIST"] = "updateBetList";
        CaptainGameEvent["CLOSE_BONUS"] = "closeBonus";
        CaptainGameEvent["SELECT_BET"] = "selectBet";
        CaptainGameEvent["START"] = "start";
        CaptainGameEvent["CLICK_ITEM"] = "clickItem";
        CaptainGameEvent["ERROR"] = "errorReturn";
        CaptainGameEvent["SHOW_LIGHT"] = "showLight";
        CaptainGameEvent["SHOW_SMOKE"] = "showSmoke";
        return CaptainGameEvent;
      }({}));
      var BetAmountInfo = exports('BetAmountInfo', function BetAmountInfo() {
        this.betSizeIndex = void 0;
        this.betLevelIndex = void 0;
        this.betLinesIndex = void 0;
        this.betAmount = void 0;
      });
      var CaptainProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(CaptainProxyMgr, _ProxyBase);
        function CaptainProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "CaptainGame";
          _this.wsEvents = [MainManager.instance.getConfigManager().ProtocolSlotCaptain.bet, MainManager.instance.getConfigManager().ProtocolSlotCaptain.info];
          _this.result = null;
          _this.initInfo = null;
          _this.betSizeList = void 0;
          _this.betLevelList = void 0;
          _this.betLinesList = void 0;
          _this.betAmountList = void 0;
          _this.betAmountInfoList = void 0;
          _this.betSizeIdx = void 0;
          _this.betLevelIdx = void 0;
          _this.betLinesIdx = void 0;
          _this.betAmountIdx = void 0;
          _this.freeTotalWin = 0;
          _this.testNo = 0;
          return _this;
        }
        var _proto = CaptainProxyMgr.prototype;
        _proto.getBet = function getBet() {
          return this.betAmountList[this.betAmountIdx];
        };
        _proto.setBet = function setBet() {
          this.emit(CaptainGameEvent.SELECT_BET);
        };
        _proto.registSocketEvent = function registSocketEvent() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.wsEvents), _step; !(_step = _iterator()).done;) {
            var event = _step.value;
            MainManager.instance.getEventManager().on(event, this.recvData, this);
          }
        };
        _proto.removeSocketEvent = function removeSocketEvent() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.wsEvents), _step2; !(_step2 = _iterator2()).done;) {
            var event = _step2.value;
            MainManager.instance.getEventManager().off(event, this.recvData, this);
          }
        };
        _proto.recvData = function recvData(data) {
          gts.Debug.Log("data", data);
          if (data.Code && data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code), sys.isMobile);
            if (data.cmd == ConfigManager.ProtocolSlotCaptain.bet) {
              this.emit(CaptainGameEvent.ERROR);
            }
            return;
          }
          switch (data.cmd) {
            case ConfigManager.ProtocolSlotCaptain.info:
              {
                //data.Data.FreeInfo.Count = 10
                this.initInfo = data.Data;
                this.emit(CaptainGameEvent.UPDATE_BETLIST, data.Data);
                break;
              }
            case ConfigManager.ProtocolSlotCaptain.bet:
              {
                // if (this.testNo == 4) {
                //     this.result = {
                //         FreeInfo: {
                //             Count: 3,
                //             Multiple: 1,
                //             TotalCount: 0,
                //             TotalPrizeAmount: 10650,
                //         },
                //         Res: [{
                //             ExtraOdd: 1,
                //             PosMsg: [6, 4, 5, 5, 6, 5, 6, 5, 5, 3, 7, 1, 8, 5, 2],
                //             RewardLines: { 5: 3, 12: 3, 17: 4 },
                //             RewardMoney: 400,
                //             RewardPos: [0, 6, 12]
                //         }, {
                //             ExtraOdd: 1,
                //             PosMsg: [7, 3, 4, 5, 6, 5, 4, 5, 5, 3, 7, 1, 5, 5, 2],
                //             RewardLines: null,
                //             RewardMoney: 0,
                //             RewardPos: null
                //         },]
                //     }
                //     this.testNo -= 1
                // } else if (this.testNo == 2 || this.testNo == 3) {
                //     this.result = {
                //         FreeInfo: {
                //             Count: this.testNo,
                //             Multiple: 1,
                //             TotalCount: 0,
                //         },
                //         Res: [{
                //             ExtraOdd: 1,
                //             PosMsg: [7, 3, 4, 5, 6, 5, 4, 5, 5, 3, 7, 1, 5, 5, 2],
                //             RewardLines: null,
                //             RewardMoney: 0,
                //             RewardPos: null
                //         },]
                //     }
                // } else {
                //     this.testNo -= 1
                //     this.result = {
                //         FreeInfo: {
                //             Count: this.testNo,
                //             Multiple: 1,
                //             TotalCount: 0,
                //             TotalPrizeAmount: 10650,
                //         },
                //         Res: [{
                //             ExtraOdd: 1,
                //             PosMsg: [6, 4, 5, 5, 6, 5, 6, 5, 5, 3, 7, 1, 8, 5, 2],
                //             RewardLines: { 5: 3, 12: 3, 17: 4 },
                //             RewardMoney: 400,
                //             RewardPos: [0, 6, 12],
                //         }, {
                //             ExtraOdd: 1,
                //             PosMsg: [7, 3, 4, 5, 6, 5, 4, 5, 5, 3, 7, 1, 5, 5, 2],
                //             RewardLines: null,
                //             RewardMoney: 0,
                //             RewardPos: null
                //         },]
                //     }
                // }

                //大奖
                // this.result = {
                //     FreeInfo: {
                //         Count: 1,
                //         Multiple: 1,
                //         TotalCount: 0,
                //         TotalPrizeAmount: 10650,
                //     },
                //     Res: [{
                //         ExtraOdd: 1,
                //         PosMsg: [6, 4, 5, 5, 6, 5, 6, 5, 5, 3, 7, 1, 8, 5, 2],
                //         RewardLines: { 5: 3, 12: 3, 17: 4 },
                //         RewardMoney: 45000,
                //         RewardPos: [0, 6, 12]
                //     }, {
                //         ExtraOdd: 1,
                //         PosMsg: [7, 3, 4, 5, 6, 5, 4, 5, 5, 3, 7, 1, 5, 5, 2],
                //         RewardLines: null,
                //         RewardMoney: 0,
                //         RewardPos: null
                //     },]
                // }

                // this.result = {
                //     FreeInfo: {
                //         Count: 0,
                //         Multiple: 1,
                //         TotalCount: 0,
                //     },
                //     Res: [{
                //         ExtraOdd: 1,
                //         PosMsg: [3, 1, 2, 4, 5, 7, 1, 5, 7, 4, 3, 1, 1, 2, 3],
                //         RewardLines: null,
                //         RewardMoney: 0,
                //         RewardPos: null
                //     },]
                // }

                //进入免费模式
                // if (this.testNo == 0) {
                //     // this.result = {
                //     //     FreeInfo: {
                //     //         Count: 2,
                //     //         Multiple: 1,
                //     //         TotalCount: 0,
                //     //     },
                //     //     Res: [{
                //     //         ExtraOdd: 1,
                //     //         PosMsg: [4, 3, 3, 5, 6, 5, 4, 5, 5, 3, 7, 9, 5, 9, 2],
                //     //         RewardLines: { 5: 3 },
                //     //         RewardMoney: 300,
                //     //         RewardPos: [0]
                //     //     }, {
                //     //         ExtraOdd: 1,
                //     //         PosMsg: [9, 3, 3, 5, 6, 5, 4, 5, 5, 3, 7, 9, 5, 9, 2],
                //     //         RewardLines: null,
                //     //         RewardMoney: 0,
                //     //         RewardPos: null
                //     //     },]
                //     // }

                //     this.result = {
                //         FreeInfo: {
                //             Count: 2,
                //             Multiple: 1,
                //             TotalCount: 0,
                //         },
                //         Res: [{
                //             ExtraOdd: 1,
                //             PosMsg: [9, 3, 3, 5, 6, 5, 4, 5, 5, 3, 7, 9, 5, 9, 2],
                //             RewardLines: null,
                //             RewardMoney: 0,
                //             RewardPos: null
                //         },]
                //     }

                //     this.testNo = 1
                // }
                // else if (this.testNo == 1) {
                //     this.testNo = 2
                //     this.result = {
                //         FreeInfo: {
                //             Count: 2,
                //             Multiple: 1,
                //             TotalCount: 0,
                //         },
                //         Res: [{
                //             ExtraOdd: 1,
                //             PosMsg: [9, 3, 3, 5, 6, 5, 4, 5, 5, 3, 7, 9, 5, 9, 2],
                //             RewardLines: null,
                //             RewardMoney: 0,
                //             RewardPos: null
                //         },]
                //     }
                // }
                // else {
                //     this.result = data.Data;
                // }

                this.result = data.Data;

                // if (this.testNo == 0) {
                //     this.result = {
                //         FreeInfo: {
                //             Count: 2,
                //             Multiple: 1,
                //             TotalCount: 0,
                //         },
                //         Res: [{
                //             ExtraOdd: 1,
                //             PosMsg: [7, 1, 1, 1, 3, 6, 6, 7, 9, 3, 5, 7, 6, 5, 9],
                //             RewardLines: { 12: 3 },
                //             RewardMoney: 1500,
                //             RewardPos: [12, 5, 6]
                //         }, {
                //             ExtraOdd: 1,
                //             PosMsg: [3, 1, 2, 1, 3, 7, 1, 1, 9, 3, 5, 7, 7, 5, 9],
                //             RewardLines: { 7: 3 },
                //             RewardMoney: 600,
                //             RewardPos: [5, 11, 12]
                //         }, {
                //             ExtraOdd: 1,
                //             PosMsg: [6, 6, 6, 1, 3, 3, 1, 2, 9, 3, 5, 1, 1, 5, 9],
                //             RewardLines: { 1: 3 },
                //             RewardMoney: 1200,
                //             RewardPos: [1, 2, 0]
                //         }, {
                //             ExtraOdd: 1,
                //             PosMsg: [7, 4, 9, 1, 3, 3, 1, 2, 9, 3, 5, 1, 1, 5, 9],
                //             RewardLines: null,
                //             RewardMoney: 0,
                //             RewardPos: null
                //         }]
                //     }
                //     this.testNo = 1
                // } else {
                //     this.result = {
                //         FreeInfo: {
                //             Count: 0,
                //             Multiple: 1,
                //             TotalCount: 0,
                //         },
                //         Res: [{
                //             ExtraOdd: 1,
                //             PosMsg: [3, 1, 2, 4, 5, 7, 1, 5, 7, 4, 3, 1, 1, 2, 3],
                //             RewardLines: null,
                //             RewardMoney: 0,
                //             RewardPos: null
                //         },]
                //     }
                // }

                //层级有问题
                // this.result = {
                //     FreeInfo: {
                //         Count: 0,
                //         Multiple: 1,
                //         TotalCount: 0,
                //     },
                //     Res: [{
                //         ExtraOdd: 1,
                //         PosMsg: [9, 2, 1, 7, 4, 5, 5, 5, 4, 4, 7, 3, 1, 1, 6],
                //         RewardLines: { 15: 3, 19: 3 },
                //         RewardMoney: 500,
                //         RewardPos: [5, 6, 7]
                //     }, {
                //         ExtraOdd: 1,
                //         PosMsg: [7, 6, 8, 7, 4, 9, 2, 1, 4, 4, 7, 3, 1, 1, 6],
                //         RewardLines: null,
                //         RewardMoney: 0,
                //         RewardPos: null
                //     },]
                // }

                this.result.prizeAmount = 0;
                //count--
                for (var _iterator3 = _createForOfIteratorHelperLoose(this.result.Res), _step3; !(_step3 = _iterator3()).done;) {
                  var item = _step3.value;
                  this.result.prizeAmount += item.RewardMoney;
                }
                this.emit(CaptainGameEvent.START);
              }
          }
        };
        _createClass(CaptainProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return CaptainProxyMgr;
      }(ProxyBase);
      var CaptainProxy = exports('default', new CaptainProxyMgr("CaptainProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ChipProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, Sprite, resources, SpriteFrame, color, i18n, ProxyBase, ConfigManager, EventManager, NetManager, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Sprite = module.Sprite;
      resources = module.resources;
      SpriteFrame = module.SpriteFrame;
      color = module.color;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ProxyBase = module.ProxyBase;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "34c16b/69tG/7n1/vPrv8ED", "ChipProxy", undefined);
      var DIYFromType = exports('DIYFromType', /*#__PURE__*/function (DIYFromType) {
        DIYFromType[DIYFromType["NORMAL"] = 0] = "NORMAL";
        DIYFromType[DIYFromType["DX3MIN"] = 1] = "DX3MIN";
        return DIYFromType;
      }({}));
      var ChipEvent = exports('ChipEvent', /*#__PURE__*/function (ChipEvent) {
        ChipEvent["SELECT_NORMAL"] = "selectNormal";
        ChipEvent["SELECT_EDIT"] = "selectEdit";
        ChipEvent["SELECT_CHIP"] = "selectChip";
        ChipEvent["DELECT_DIY"] = "delectDiy";
        ChipEvent["UPDATE_DIY_LIST"] = "updateDiyList";
        ChipEvent["ADD_DIY_CHIP"] = "addDiyChip";
        return ChipEvent;
      }({}));
      var ChipType = exports('ChipType', /*#__PURE__*/function (ChipType) {
        ChipType["NORMAL"] = "normal";
        ChipType["CHIP"] = "chip";
        ChipType["CHIP_DIY"] = "chipDiy";
        ChipType["EDIT"] = "edit";
        ChipType["DIY"] = "diy";
        return ChipType;
      }({}));
      var ChipColor = exports('ChipColor', {
        kb_cm1k: "#664818",
        kb_cm1M: "#46102d",
        kb_cm2k: "#4f1969",
        kb_cm5k: "#69182b",
        kb_cm5M: "#691960",
        kb_cm10k: "#6b3019",
        kb_cm10M: "#175863",
        kb_cm20k: "#691937",
        kb_cm50k: "#174e64",
        kb_cm50M: "#692219",
        kb_cm100: "#176345",
        kb_cm100k: "#172864",
        kb_cm200: "#176460",
        kb_cm200k: "#270f44",
        kb_cm500: "#173463",
        kb_cm500k: "#7b0919",
        kb_cmhs: "#141414"
      });
      var ChipProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(ChipProxyMgr, _ProxyBase);
        function ChipProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.numList = [{
            name: "kb_cm50M",
            count: 50000000
          }, {
            name: "kb_cm10M",
            count: 10000000
          }, {
            name: "kb_cm5M",
            count: 5000000
          }, {
            name: "kb_cm1M",
            count: 1000000
          }, {
            name: "kb_cm500k",
            count: 500000
          }, {
            name: "kb_cm200k",
            count: 200000
          }, {
            name: "kb_cm100k",
            count: 100000
          }, {
            name: "kb_cm50k",
            count: 50000
          }, {
            name: "kb_cm20k",
            count: 20000
          }, {
            name: "kb_cm10k",
            count: 10000
          }, {
            name: "kb_cm5k",
            count: 5000
          }, {
            name: "kb_cm2k",
            count: 2000
          }, {
            name: "kb_cm1k",
            count: 1000
          }, {
            name: "kb_cm500",
            count: 500
          }, {
            name: "kb_cm200",
            count: 200
          }, {
            name: "kb_cm100",
            count: 100
          }];
          _this.specialChipName = ["big_cm_blue", "big_cm_yellow", "big_cm_green", "big_cm_darkblue", "big_cm_orange", "big_cm_pink", "big_cm_purple", "big_cm_red"];
          _this.allList = {};
          //游戏房间内筹码列表
          _this.chipList = [];
          return _this;
        }
        var _proto = ChipProxyMgr.prototype;
        _proto.init = function init() {
          this.onEvent();
        };
        _proto.getDiyList = function getDiyList() {
          NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.getCustomChips);
        };
        _proto.onEvent = function onEvent() {
          var _this2 = this;
          EventManager.getInstance().on(ConfigManager.getInstance().protocolHall.updateCustomChips, this.udpateDiyList, this);
          EventManager.getInstance().on(ConfigManager.getInstance().protocolHall.getCustomChips, this.udpateDiyList, this);
          this.on(ChipEvent.DELECT_DIY, function (data) {
            var type = data.type || DIYFromType.NORMAL;
            if (!_this2.allList[type]) {
              _this2.allList[type] = [];
            }
            var list = _this2.allList[type];
            var length = list.length;
            var _loop = function _loop(i) {
              if (data.name == list[i].name && data.count == list[i].count) {
                Common.showTishiSureBtn(i18n.lang.diyTipRemove, function () {
                  list.splice(i, 1);
                  _this2.sortList(list);
                  var diyList = [];
                  for (var _i in _this2.allList) {
                    diyList = diyList.concat(_this2.allList[_i]);
                  }
                  NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.updateCustomChips, {
                    chips: diyList
                  });
                }, function () {});
                return 1; // break
              }
            };

            for (var i = 0; i < length; i++) {
              if (_loop(i)) break;
            }
          }, this);
          this.on(ChipEvent.ADD_DIY_CHIP, function (data) {
            // console.log("ADD_DIY_CHIP", data);
            var type = data.type || DIYFromType.NORMAL;
            if (!_this2.allList[type]) {
              _this2.allList[type] = [];
            }
            var list = _this2.allList[type];
            for (var _iterator = _createForOfIteratorHelperLoose(list), _step; !(_step = _iterator()).done;) {
              var _i2 = _step.value;
              if (_i2.count == data.count) {
                Common.showTip(i18n.lang.diyTip);
                return;
              }
            }
            var length = 6;
            if (type == DIYFromType.DX3MIN) {
              length = 8;
            }
            if (list.length >= length) {
              list.shift();
            }
            list.push(data);
            _this2.sortList(list);
            var diyList = [];
            for (var i in _this2.allList) {
              diyList = diyList.concat(_this2.allList[i]);
            }
            NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.updateCustomChips, {
              chips: diyList
            });
          }, this);
        };
        _proto.sortList = function sortList(list) {
          list.sort(function (a, b) {
            return a.count - b.count;
          });
        };
        _proto.udpateDiyList = function udpateDiyList(data) {
          this.allList = {};
          var diyList = data.Data || [];
          for (var _iterator2 = _createForOfIteratorHelperLoose(diyList), _step2; !(_step2 = _iterator2()).done;) {
            var _i3 = _step2.value;
            var type = _i3.type || DIYFromType.NORMAL;
            if (!this.allList[type]) {
              this.allList[type] = [];
            }
            this.allList[type].push(_i3);
          }
          for (var i in this.allList) {
            this.sortList(this.allList[i]);
          }
          this.emit(ChipEvent.UPDATE_DIY_LIST);
        };
        _proto.initChipList = function initChipList(data) {
          if (!data) return;
          this.chipList = [];
          for (var _iterator3 = _createForOfIteratorHelperLoose(data), _step3; !(_step3 = _iterator3()).done;) {
            var count = _step3.value;
            var find = false;
            for (var _iterator4 = _createForOfIteratorHelperLoose(this.numList), _step4; !(_step4 = _iterator4()).done;) {
              var i = _step4.value;
              if (count == i.count) {
                var _chips = {
                  name: i.name,
                  count: i.count
                };
                this.chipList.push(_chips);
                find = true;
                break;
              }
            }
            if (!find) {
              var chips = {
                name: "kb_cmhs",
                count: count
              };
              this.chipList.push(chips);
            }
          }
        };
        _proto.initSpecialChipList = function initSpecialChipList(data) {
          this.initChipList(data);
          for (var i = 0; i < this.chipList.length; i++) {
            if (this.specialChipName[i]) {
              this.chipList[i].name = this.specialChipName[i];
            }
          }
        };
        _proto.getChip = function getChip(count) {
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.diyList), _step5; !(_step5 = _iterator5()).done;) {
            var i = _step5.value;
            if (count == i.count) {
              return i;
            }
          }
          for (var _iterator6 = _createForOfIteratorHelperLoose(this.numList), _step6; !(_step6 = _iterator6()).done;) {
            var _i4 = _step6.value;
            if (count >= _i4.count) {
              return _i4;
            }
          }
          return null;
        };
        _proto.getChips = function getChips() {
          var list = this.diyList;
          for (var _iterator7 = _createForOfIteratorHelperLoose(this.chipList), _step7; !(_step7 = _iterator7()).done;) {
            var i = _step7.value;
            var has = false;
            for (var _iterator8 = _createForOfIteratorHelperLoose(list), _step8; !(_step8 = _iterator8()).done;) {
              var j = _step8.value;
              if (j.count == i.count) {
                has = true;
                break;
              }
            }
            if (!has) {
              list.push(i);
            }
          }
          return list;
        };
        _proto.loadChip = function loadChip(name, node) {
          return new Promise(function (resolve, reject) {
            var icon = node instanceof Sprite ? node : node.getComponent(Sprite);
            resources.load("cm/" + name + "/spriteFrame", SpriteFrame, function (err, sprite) {
              if (err) {
                reject(err);
                return;
              }
              icon.spriteFrame = sprite;
              resolve();
            });
          });
        };
        _proto.loadChipByCount = function loadChipByCount(count, node) {
          var chip = this.getChip(count);
          if (chip) {
            return this.loadChip(chip.name, node);
          }
        };
        _proto.changeTextColorByName = function changeTextColorByName(node, name) {
          var color$1 = ChipColor[name];
          if (color$1) {
            node.color = color().fromHEX(color$1);
          }
        };
        _createClass(ChipProxyMgr, [{
          key: "diyList",
          get: function get() {
            return this.allList[DIYFromType.NORMAL] || [];
          }
        }, {
          key: "dxDiyList",
          get: function get() {
            return this.allList[DIYFromType.DX3MIN] || [];
          }
        }]);
        return ChipProxyMgr;
      }(ProxyBase);
      var ChipProxy = exports('default', new ChipProxyMgr("ChipProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ClickbtnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, sp, Node, UIOpacity, UITransform, Component, EventManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      sp = module.sp;
      Node = module.Node;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "37dcd13NwhMMo1L7nXoycL5", "ClickbtnEffect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      // let setEnumAttr = function (obj, propName, enumDef) {
      //     //@ts-ignore
      //     cc.Class.Attr.setClassAttr(obj, propName, "type", "Enum");
      //     //@ts-ignore
      //     cc.Class.Attr.setClassAttr(obj, propName, "enumList", cc.Enum.getList(enumDef));
      // };
      var ClickbtnEffect = exports('default', (_dec = ccclass("ClickbtnEffect"), _dec2 = menu("tools/ClickbtnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ClickbtnEffect, _Component);
        function ClickbtnEffect() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_skeletonData", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "animation", _descriptor2, _assertThisInitialized(_this));
          _this.Node_effect = null;
          _this.switchAnimation = null;
          return _this;
        }
        var _proto = ClickbtnEffect.prototype;
        _proto.onLoad = function onLoad() {};
        _proto._getAnimEnum = function _getAnimEnum(skeletonData) {
          var animEnum;
          var sd = skeletonData.getRuntimeData(true);
          if (sd) {
            var enumDef = {
              "<None>": 0
            };
            var anims = sd.animations;
            for (var i = 0; i < anims.length; i++) {
              var name = anims[i].name;

              //                //@ts-ignore
              enumDef[name] = i + 1;
            }
            animEnum = Enum(enumDef);
            return animEnum;
          }
          return null;
        };
        _proto._updateAnimEnum = function _updateAnimEnum() {
          var animEnum = this._getAnimEnum(this.skeletonData);
          //        // change enum
          // setEnumAttr(this, "_animation", animEnum || DefaultAnimsEnum);
        };

        _proto.onEnable = function onEnable() {
          var _this2 = this;
          if (this.Node_effect) {
            this.Node_effect.destroyFromParent();
            this.Node_effect = null;
          }
          EventManager.getInstance().on("onMouseMoveIn" + this.node.name, function (event) {
            if (_this2.animation > 0 && _this2.skeletonData) {
              if (!_this2.Node_effect) {
                _this2.Node_effect = new Node();
                _this2.Node_effect.addComponent(UIOpacity);
                _this2.Node_effect.addComponent(UITransform);
                _this2.node.addChild(_this2.Node_effect);
                var Skeleton = _this2.Node_effect.addComponent(sp.Skeleton);
                Skeleton.loop = true;
                Skeleton.premultipliedAlpha = false;
              }
              _this2.scheduleOnce(function () {
                if (_this2.Node_effect) {
                  var _Skeleton = _this2.Node_effect.getComponent(sp.Skeleton);
                  _Skeleton.skeletonData = _this2.skeletonData;
                  if (_this2.switchAnimation) {
                    _Skeleton.setAnimation(0, _this2.switchAnimation, true);
                  } else {
                    var sd = _this2.skeletonData.getRuntimeData(true);
                    var ani = sd.animations[_this2.animation - 1];
                    _Skeleton.setAnimation(0, ani.name, true);
                  }
                }
              });
            }
          }, this);
          EventManager.getInstance().on("onMouseMoveOut" + this.node.name, function (event) {
            if (_this2.Node_effect) {
              _this2.Node_effect.destroyFromParent();
              _this2.Node_effect = null;
            }
          }, this);
          this.node.on("pauseEffect", function () {
            if (_this2.Node_effect) {
              _this2.Node_effect.active = false;
            }
          }, this);
          this.node.on("resumeEffect", function () {
            if (_this2.Node_effect) {
              _this2.Node_effect.active = true;
              var Skeleton = _this2.Node_effect.getComponent(sp.Skeleton);
              if (_this2.switchAnimation) {
                Skeleton.setAnimation(0, _this2.switchAnimation, true);
              } else {
                var sd = _this2.skeletonData.getRuntimeData(true);
                var ani = sd.animations[_this2.animation - 1];
                Skeleton.setAnimation(0, ani.name, true);
              }
            }
          }, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.getInstance().off("onMouseMoveIn" + this.node.name);
          EventManager.getInstance().off("onMouseMoveOut" + this.node.name);
          this.node.off("pauseEffect");
          this.node.off("resumeEffect");
        };
        _proto.switchAni = function switchAni(animation) {
          if (animation === void 0) {
            animation = null;
          }
          if (this.switchAnimation && !animation) {
            if (this.Node_effect) {
              this.Node_effect.active = true;
              var Skeleton = this.Node_effect.getComponent(sp.Skeleton);
              var sd = this.skeletonData.getRuntimeData(true);
              var ani = sd.animations[this.animation - 1];
              Skeleton.setAnimation(0, ani.name, true);
            }
          }
          this.switchAnimation = animation;
        };
        _createClass(ClickbtnEffect, [{
          key: "skeletonData",
          get: function get() {
            return this._skeletonData;
          },
          set: function set(val) {
            this._skeletonData = val;
          }
        }]);
        return ClickbtnEffect;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_skeletonData", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "skeletonData", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "skeletonData"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animation", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return DefaultAnimsEnum["<None>"];
        }
      })), _class2)) || _class) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import EventManager from "../manager/EventManager";
      //
      // const { ccclass, property, menu, executeInEditMode } = cc._decorator;
      //
      // let DefaultAnimsEnum = cc.Enum({ "<None>": 0 });
      // let setEnumAttr = function (obj, propName, enumDef) {
      //     //@ts-ignore
      //     cc.Class.Attr.setClassAttr(obj, propName, "type", "Enum");
      //     //@ts-ignore
      //     cc.Class.Attr.setClassAttr(obj, propName, "enumList", cc.Enum.getList(enumDef));
      // };
      //
      // @ccclass
      // @menu("tools/ClickbtnEffect")
      // @executeInEditMode
      // export default class ClickbtnEffect extends cc.Component {
      //     @property(sp.SkeletonData)
      //     _skeletonData: sp.SkeletonData = null;
      //
      //     @property(sp.SkeletonData)
      //     get skeletonData() {
      //         return this._skeletonData;
      //     }
      //
      //     set skeletonData(val: sp.SkeletonData) {
      //         this._skeletonData = val;
      //         if (CC_EDITOR && this._skeletonData) {
      //             setEnumAttr(this, "animation", this._getAnimEnum(this._skeletonData) || DefaultAnimsEnum);
      //             Editor.Utils.refreshSelectedInspector("node", this.node.uuid);
      //         }
      //     }
      //
      //     @property({
      //         type: DefaultAnimsEnum,
      //         visible() {
      //             return !(this._skeletonData == null);
      //         },
      //     })
      //     animation = DefaultAnimsEnum["<None>"];
      //
      //     Node_effect: cc.Node = null;
      //
      //     onLoad() {
      //         if (CC_EDITOR && this._skeletonData) {
      //             setEnumAttr(this, "animation", this._getAnimEnum(this._skeletonData) || DefaultAnimsEnum);
      //             Editor.Utils.refreshSelectedInspector("node", this.node.uuid);
      //         }
      //     }
      //
      //     _getAnimEnum(skeletonData) {
      //         var animEnum;
      //         let sd = skeletonData.getRuntimeData(true);
      //         if (sd) {
      //             let enumDef = { "<None>": 0 };
      //             let anims = sd.animations;
      //             for (let i = 0; i < anims.length; i++) {
      //                 let name = anims[i].name;
      //
      //                 //@ts-ignore
      //                 enumDef[name] = i + 1;
      //             }
      //
      //             animEnum = cc.Enum(enumDef);
      //             return animEnum;
      //         }
      //
      //         return null;
      //     }
      //
      //     _updateAnimEnum() {
      //         let animEnum = this._getAnimEnum(this.skeletonData);
      //         // change enum
      //         setEnumAttr(this, "_animation", animEnum || DefaultAnimsEnum);
      //     }
      //
      //     protected onEnable(): void {
      //         if (this.Node_effect) {
      //             this.Node_effect.removeFromParent();
      //             this.Node_effect = null;
      //         }
      //
      //         EventManager.getInstance().on(
      //             "onMouseMoveIn" + this.node.name,
      //             (event) => {
      //                 if (this.animation > 0 && this.skeletonData) {
      //                     if (!this.Node_effect) {
      //                         this.Node_effect = new cc.Node();
      //                         this.node.addChild(this.Node_effect);
      //
      //                         let Skeleton = this.Node_effect.addComponent(sp.Skeleton);
      //                         Skeleton.loop = true;
      //                         Skeleton.premultipliedAlpha = false;
      //                     }
      //
      //                     this.scheduleOnce(() => {
      //                         if (this.Node_effect) {
      //                             let Skeleton = this.Node_effect.getComponent(sp.Skeleton);
      //                             Skeleton.skeletonData = this.skeletonData;
      //
      //                             if (this.switchAnimation) {
      //                                 Skeleton.setAnimation(0, this.switchAnimation, true);
      //                             } else {
      //                                 let sd = this.skeletonData.getRuntimeData(true);
      //                                 let ani = sd.animations[this.animation - 1];
      //                                 Skeleton.setAnimation(0, ani.name, true);
      //                             }
      //                         }
      //                     });
      //                 }
      //             },
      //             this
      //         );
      //         EventManager.getInstance().on(
      //             "onMouseMoveOut" + this.node.name,
      //             (event) => {
      //                 if (this.Node_effect) {
      //                     this.Node_effect.removeFromParent();
      //                     this.Node_effect = null;
      //                 }
      //             },
      //             this
      //         );
      //
      //         this.node.on(
      //             "pauseEffect",
      //             () => {
      //                 if (this.Node_effect) {
      //                     this.Node_effect.active = false;
      //                 }
      //             },
      //             this
      //         );
      //         this.node.on(
      //             "resumeEffect",
      //             () => {
      //                 if (this.Node_effect) {
      //                     this.Node_effect.active = true;
      //
      //                     let Skeleton = this.Node_effect.getComponent(sp.Skeleton);
      //
      //                     if (this.switchAnimation) {
      //                         Skeleton.setAnimation(0, this.switchAnimation, true);
      //                     } else {
      //                         let sd = this.skeletonData.getRuntimeData(true);
      //                         let ani = sd.animations[this.animation - 1];
      //                         Skeleton.setAnimation(0, ani.name, true);
      //                     }
      //                 }
      //             },
      //             this
      //         );
      //     }
      //     protected onDisable(): void {
      //         EventManager.getInstance().off("onMouseMoveIn" + this.node.name);
      //         EventManager.getInstance().off("onMouseMoveOut" + this.node.name);
      //
      //         this.node.off("pauseEffect");
      //         this.node.off("resumeEffect");
      //     }
      //
      //     switchAnimation: string = null;
      //     switchAni(animation = null) {
      //         if (this.switchAnimation && !animation) {
      //             if (this.Node_effect) {
      //                 this.Node_effect.active = true;
      //
      //                 let Skeleton = this.Node_effect.getComponent(sp.Skeleton);
      //
      //                 let sd = this.skeletonData.getRuntimeData(true);
      //                 let ani = sd.animations[this.animation - 1];
      //                 Skeleton.setAnimation(0, ani.name, true);
      //             }
      //         }
      //         this.switchAnimation = animation;
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ColorAssembler2D.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cfc4dKl3JdPVJqq4zmcwXi+", "ColorAssembler2D", undefined);
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import showToast from "../tools/showToast";
      //
      // const { ccclass, property, executeInEditMode, requireComponent, menu } = cc._decorator;
      //
      // export enum ColorType {
      //     UP_2_BOTTOM = 1,
      //     LEFT_2_RIGHT = 2,
      // }
      //
      //
      // @ccclass
      // @executeInEditMode
      // @requireComponent(cc.RenderComponent)
      // @menu("i18n:MAIN_MENU.component.renderers/ColorAssembler2D")
      // export default class ColorAssembler2D extends cc.Component {
      //     @property({ type: cc.Enum(ColorType), visible: true })
      //     _colorType: ColorType = ColorType.UP_2_BOTTOM;
      //     @property({ displayName: "颜色1", visible: true })
      //     _color0: cc.Color = cc.Color.WHITE;
      //     @property({ displayName: "颜色2", visible: true })
      //     _color2: cc.Color = cc.Color.BLACK;
      //
      //     private _colors: cc.Color[] = [];
      //     public get colors() {
      //         return this._colors;
      //     }
      //
      //     public set colors(colors) {
      //         this._colors = colors;
      //         this._updateColors();
      //     }
      //
      //     onEnable() {
      //         cc.director.once(cc.Director.EVENT_AFTER_DRAW, this._updateColors, this);
      //     }
      //
      //     onDisable() {
      //         cc.director.off(cc.Director.EVENT_AFTER_DRAW, this._updateColors, this);
      //         this.node["_renderFlag"] |= cc["RenderFlow"].FLAG_COLOR;
      //     }
      //
      //     private _updateColors() {
      //         let arr =
      //             this._colorType === ColorType.UP_2_BOTTOM
      //                 ? [this._color2, this._color2, this._color0, this._color0]
      //                 : [this._color0, this._color2, this._color0, this._color2];
      //         this._colors.splice(0, this._colors.length, ...arr);
      //
      //         const cmp = this.getComponent(cc.RenderComponent);
      //         if (!cmp) return;
      //         const _assembler = cmp["_assembler"];
      //         if (!(_assembler instanceof cc["Assembler2D"])) return;
      //         const uintVerts = _assembler._renderData.uintVDatas[0];
      //         if (!uintVerts) return;
      //         const color = this.node.color;
      //         const floatsPerVert = _assembler.floatsPerVert;
      //         const colorOffset = _assembler.colorOffset;
      //         let count = 0;
      //         for (let i = colorOffset, l = uintVerts.length; i < l; i += floatsPerVert) {
      //             uintVerts[i] = (this.colors[count++] || color)["_val"];
      //         }
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Common.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './GameDef.ts', './DataManager.ts', './ViewManager.ts', './URLUtil.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, _createClass, cclegacy, sys, Label, resources, SpriteFrame, Sprite, isValid, Material, builtinResMgr, sp, view, i18n, GameDef, DataManager, UserKey, ViewManager, urlUtil;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
      Label = module.Label;
      resources = module.resources;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      isValid = module.isValid;
      Material = module.Material;
      builtinResMgr = module.builtinResMgr;
      sp = module.sp;
      view = module.view;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      urlUtil = module.urlUtil;
    }],
    execute: function () {
      exports('Common', void 0);
      cclegacy._RF.push({}, "975c7UUgiRA76rQkgEybotG", "Common", undefined);
      var Common;
      (function (_Common) {
        // 数据表
        var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        /**
         * utf8的编码
         *
         * @param {string} str
         * @returns
         */
        function _utf8_encode(str) {
          str = str.replace(/\r\n/g, "\n");
          var utftext = "";
          for (var n = 0; n < str.length; n++) {
            var c = str.charCodeAt(n);
            if (c < 128) {
              utftext += String.fromCharCode(c);
            } else if (c > 127 && c < 2048) {
              utftext += String.fromCharCode(c >> 6 | 192);
              utftext += String.fromCharCode(c & 63 | 128);
            } else {
              utftext += String.fromCharCode(c >> 12 | 224);
              utftext += String.fromCharCode(c >> 6 & 63 | 128);
              utftext += String.fromCharCode(c & 63 | 128);
            }
          }
          return utftext;
        }

        /**
         * utf8的解码
         *
         * @param {string} str
         * @returns
         */
        function _utf8_decode(utftext) {
          var str = "";
          var i = 0;
          var c = 0;
          var c2 = 0;
          var c3 = 0;
          while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
              str += String.fromCharCode(c);
              i++;
            } else if (c > 191 && c < 224) {
              c2 = utftext.charCodeAt(i + 1);
              str += String.fromCharCode((c & 31) << 6 | c2 & 63);
              i += 2;
            } else {
              c2 = utftext.charCodeAt(i + 1);
              c3 = utftext.charCodeAt(i + 2);
              str += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
              i += 3;
            }
          }
          return str;
        }

        /**
         *
         * Base64的工具类
         * @export
         * @class Base64
         */
        var Base64 = /*#__PURE__*/function () {
          function Base64() {}
          /**
           *
           * base64的编码
           * @static
           * @param {string} input
           * @returns
           * @memberof Base64
           */
          Base64.encode = function encode(input) {
            var output = "";
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            var i = 0;
            input = _utf8_encode(input);
            while (i < input.length) {
              chr1 = input.charCodeAt(i++);
              chr2 = input.charCodeAt(i++);
              chr3 = input.charCodeAt(i++);
              enc1 = chr1 >> 2;
              enc2 = (chr1 & 3) << 4 | chr2 >> 4;
              enc3 = (chr2 & 15) << 2 | chr3 >> 6;
              enc4 = chr3 & 63;
              if (isNaN(chr2)) {
                enc3 = enc4 = 64;
              } else if (isNaN(chr3)) {
                enc4 = 64;
              }
              output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
            }
            return output;
          }

          /**
           *
           * base64的解码
           * @static
           * @param {string} input
           * @returns
           * @memberof Base64
           */;
          Base64.decode = function decode(input) {
            var output = "";
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (i < input.length) {
              enc1 = _keyStr.indexOf(input.charAt(i++));
              enc2 = _keyStr.indexOf(input.charAt(i++));
              enc3 = _keyStr.indexOf(input.charAt(i++));
              enc4 = _keyStr.indexOf(input.charAt(i++));
              chr1 = enc1 << 2 | enc2 >> 4;
              chr2 = (enc2 & 15) << 4 | enc3 >> 2;
              chr3 = (enc3 & 3) << 6 | enc4;
              output = output + String.fromCharCode(chr1);
              if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
              }
              if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
              }
            }
            output = _utf8_decode(output);
            return output;
          };
          return Base64;
        }();
        _Common.Base64 = Base64;
        var Md5 = /*#__PURE__*/function () {
          function Md5() {
            this.A = 0x67452301;
            this.B = 0xefcdab89;
            this.C = 0x98badcfe;
            this.D = 0x10325476;
            this.S = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21];
          }
          var _proto = Md5.prototype;
          _proto.get_md5 = function get_md5(str) {
            return this.md5(str);
          };
          _proto.split = function split(target, step, markString) {
            if (markString === void 0) {
              markString = typeof target === "string";
            }
            if (typeof target === "string") target = target.split("");
            var result = target.map(function (_, index) {
              return index % step === 0 ? Array.from(Array(step).keys()).map(function (x) {
                return target[index + x];
              }) : [];
            }).filter(function (x) {
              return x.length > 0;
            });
            if (markString) result = result.map(function (x) {
              return x.join("");
            });
            return result;
          };
          _proto.padding = function padding(str, length, _char, tail, isArray) {
            if (tail === void 0) {
              tail = true;
            }
            if (isArray === void 0) {
              isArray = Array.isArray(str);
            }
            var arr;
            if (Array.isArray(str)) {
              arr = str;
            } else {
              arr = str.split("");
            }
            var paddingStr = this.range(length - str.length).map(function () {
              return _char;
            });
            var result = tail ? arr.concat(paddingStr) : paddingStr.concat(arr);
            return isArray ? result : result.join("");
          };
          _proto.little_endian = function little_endian(charCode) {
            return this.split(this.padding(charCode.toString(16), 8, "0", false), 2).reverse().join("");
          };
          _proto.range = function range() {
            var start = arguments.length === 1 ? 0 : arguments.length <= 0 ? undefined : arguments[0];
            var end = arguments.length === 2 ? arguments.length <= 1 ? undefined : arguments[1] : (arguments.length <= 0 ? undefined : arguments[0]) - 1;
            return Array.from(Array(end - start + 1).keys()).map(function (x) {
              return x + start;
            });
          };
          _proto.to_binary = function to_binary(code, bit, max) {
            if (bit === void 0) {
              bit = 8;
            }
            if (max === void 0) {
              max = Math.pow(2, bit) - 1;
            }
            if (code < 0) throw new Error("code should be greater than: 0");
            if (code > max) throw new Error("code should be less than: " + max);
            return this.padding(code.toString(2), bit, "0", false);
          };
          _proto.to_hex = function to_hex(code, bit, max) {
            if (bit === void 0) {
              bit = 8;
            }
            if (max === void 0) {
              max = Math.pow(16, bit) - 1;
            }
            if (code < 0) throw new Error("code should be greater than: 0");
            if (code > max) throw new Error("code should be less than: " + max);
            return this.padding(code.toString(16), bit, "0", false);
          };
          _proto.to_code = function to_code(str) {
            if (str.substr(0, 2).toLowerCase() === "0b") return parseInt(str.substr(2, 8), 2);
            if (str.substr(0, 2).toLowerCase() === "0x") return parseInt(str.substr(2, 8), 16);
          };
          _proto.utf16_to_utf8 = function utf16_to_utf8(str) {
            var _this = this;
            return str.split("").map(function (_char2) {
              return _this.utf8_encode(_char2);
            }).join("");
          };
          _proto.utf8_encode = function utf8_encode(_char3) {
            var utftext = "";
            var c = _char3.charCodeAt(0);
            if (c < 128) {
              utftext += String.fromCharCode(c);
            } else if (c > 127 && c < 2048) {
              utftext += String.fromCharCode(c >> 6 | 192);
              utftext += String.fromCharCode(c & 63 | 128);
            } else {
              utftext += String.fromCharCode(c >> 12 | 224);
              utftext += String.fromCharCode(c >> 6 & 63 | 128);
              utftext += String.fromCharCode(c & 63 | 128);
            }
            return utftext;
          };
          _proto.uint_add = function uint_add() {
            var t = Uint32Array.from([0]);
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            var x = Uint32Array.from(args);
            x.forEach(function (n) {
              return t[0] = t[0] + n;
            });
            return t[0];
          };
          _proto.loop_shift_left = function loop_shift_left(n, bits) {
            return n << bits | n >>> 32 - bits;
          };
          _proto.F = function F(b, c, d) {
            return b & c | ~b & d;
          };
          _proto.G = function G(b, c, d) {
            return b & d | c & ~d;
          };
          _proto.H = function H(b, c, d) {
            return b ^ c ^ d;
          };
          _proto.I = function I(b, c, d) {
            return c ^ (b | ~d);
          };
          _proto.T = function T(i) {
            return Math.floor(Math.pow(2, 32) * Math.abs(Math.sin(i + 1)));
          };
          _proto.x_index = function x_index(i) {
            if (i >= 0 && i <= 15) return i;
            if (i >= 16 && i <= 31) return (5 * i + 1) % 16;
            if (i >= 32 && i <= 47) return (3 * i + 5) % 16;
            if (i >= 48 && i <= 63) return 7 * i % 16;
            return 0;
          };
          _proto.wrap = function wrap(m) {
            var _this2 = this;
            return function (a, b, c, d, x, s, t) {
              // 循环左移
              return _this2.uint_add(_this2.loop_shift_left(_this2.uint_add(a, m(b, c, d), x, t), s), b);
            };
          };
          _proto.porcess_message = function porcess_message(str) {
            var _this3 = this;
            var length = str.length;
            var length_of_zero = Math.ceil(length / 64) * 64 - length - 8 - 1;
            str += String.fromCharCode(128);
            var strArray = this.padding(str.split(""), length + 1 + length_of_zero, String.fromCharCode(0));
            var tail = this.split(this.padding(this.to_binary(length * 8 % Math.pow(2, 64)), 64, "0"), 8).map(function (x) {
              return parseInt(x, 2);
            });
            var head = strArray.map(function (x) {
              return x.charCodeAt(0);
            });
            return Uint32Array.from(this.split(head.concat(tail), 4).map(function (x) {
              return x.map(function (t) {
                return _this3.padding(t.toString(16), 2, "0", false);
              }).join("");
            }).map(function (x) {
              return parseInt(x, 16);
            }).map(function (x) {
              return parseInt(_this3.little_endian(x), 16);
            }));
          };
          _proto.fghi = function fghi(i) {
            if (i >= 0 && i <= 15) return this.F;
            if (i >= 16 && i <= 31) return this.G;
            if (i >= 32 && i <= 47) return this.H;
            if (i >= 48 && i <= 63) return this.I;
          };
          _proto.fghi_wrapped = function fghi_wrapped(i) {
            return this.wrap(this.fghi(i));
          }
          //------------------------------------------------
          ;

          _proto.md5 = function md5(str) {
            var _this4 = this;
            str = this.utf16_to_utf8(str);
            var uint32_array = this.porcess_message(str);
            var result = Uint32Array.from([this.A, this.B, this.C, this.D]);
            var chunks = this.split(Array.from(uint32_array), 16);
            for (var _iterator = _createForOfIteratorHelperLoose(chunks), _step; !(_step = _iterator()).done;) {
              var chunk = _step.value;
              var a = result[0];
              var b = result[1];
              var c = result[2];
              var d = result[3];
              for (var i = 0; i < 64; i++) {
                result[(4 - i % 4) % 4] = this.fghi_wrapped(i)(result[(4 - i % 4) % 4], result[(4 - i % 4 + 1) % 4], result[(4 - i % 4 + 2) % 4], result[(4 - i % 4 + 3) % 4], chunk[this.x_index(i)], this.S[i], this.T(i));
              }
              result[0] = a + result[0];
              result[1] = b + result[1];
              result[2] = c + result[2];
              result[3] = d + result[3];
            }
            return Array.from(result).map(function (x) {
              return _this4.little_endian(x);
            }).join("").toLowerCase();
          };
          _createClass(Md5, null, [{
            key: "Instance",
            get: function get() {
              return this._inst || (this._inst = new Md5());
            }
          }]);
          return Md5;
        }();
        Md5._inst = void 0;
        _Common.Md5 = Md5;
        function md5(x) {
          return Md5.Instance.get_md5(x);
        }
        _Common.md5 = md5;
        function showLog(data) {
          ViewManager.instance.showLog(data);
        }
        _Common.showLog = showLog;
        function closeWait() {
          ViewManager.instance.closeWait();
        }
        _Common.closeWait = closeWait;
        function showWait() {
          ViewManager.instance.showWait();
        }
        _Common.showWait = showWait;
        function showNetTips() {
          ViewManager.instance.showNetTipPop();
        }
        _Common.showNetTips = showNetTips;
        function closeNetTips() {
          ViewManager.instance.closeNetTipPop();
        }
        _Common.closeNetTips = closeNetTips;
        function showTishiSureBtn(text, callback1, callback2) {
          ViewManager.instance.showTipPop(text, callback1, callback2);
        }
        _Common.showTishiSureBtn = showTishiSureBtn;
        function showTipPop(text, callback1, callback2) {
          ViewManager.instance.showTipPop(text, callback1, callback2);
        }
        _Common.showTipPop = showTipPop;
        function showTip(text, isVertical, pos) {
          if (isVertical === void 0) {
            isVertical = false;
          }
          console.log("showtip", text);
          ViewManager.instance.showToast(text, isVertical, pos);
        }
        _Common.showTip = showTip;
        function changeScene(path, callbacl1, callback2, isshowWait) {
          ViewManager.instance.changeScene(path, callbacl1, callback2, isshowWait);
        }
        _Common.changeScene = changeScene;
        function enterGameScene(path, buddle, callbacl1, callback2, isshowWait) {
          ViewManager.instance.enterGameScene(path, buddle, callbacl1, callback2, isshowWait);
        }
        _Common.enterGameScene = enterGameScene;
        function loadPopPublic(path, callbacl1, callback2, isshowWait) {
          ViewManager.instance.loadPopPublic(path, callbacl1, callback2, isshowWait);
        }
        _Common.loadPopPublic = loadPopPublic;
        function loadPopBuddle(path, buddle, callbacl1, callback2, isshowWait) {
          ViewManager.instance.loadPopBuddle(path, buddle, callbacl1, callback2, isshowWait);
        }
        _Common.loadPopBuddle = loadPopBuddle;
        function Base64Encode(x) {
          return Base64.encode(x);
        }
        _Common.Base64Encode = Base64Encode;
        function Base64Decode(x) {
          return Base64.decode(x);
        }
        _Common.Base64Decode = Base64Decode;
        function getTime(data) {
          var arrData = data.split(/T|\.|\+/g);
          return {
            date: arrData[0],
            time: arrData[1]
          };
        }
        _Common.getTime = getTime;
        function getChatContent(data, imageType) {
          if (imageType === void 0) {
            imageType = false;
          }
          if (imageType) {
            return {
              text: null,
              img: [data]
            };
          } else if (-1 == data.search(/<|>/g)) {
            return {
              text: data,
              img: null
            };
          }
          var arrStr = data.match(/[^><]+(?=<\/p>)/g);
          var imgUrl = data.match(/(\/|http|https)[^>]+\.(jpg|jpeg|JPG|JPEG|png|PNG|gif)/g);
          return {
            text: arrStr,
            img: imgUrl
          };
        }
        _Common.getChatContent = getChatContent;
        function getParams(data) {
          var redata = [];
          var temp = data.split("&");
          for (var i in temp) {
            var s = temp[i].split("=");
            if (s.length == 2) {
              redata[s[0]] = s[1];
            }
          }
          return redata;
        }
        _Common.getParams = getParams;
        function getTimeFormat(utcTime) {
          var utc = "" + utcTime;
          var date = !utc.match(/T/g) && isNaN(utcTime) ? new Date(utc.replace(/-/g, "/")) : new Date(utcTime);
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var day = date.getDate();
          var hour = date.getHours().toString().padStart(2, "0");
          var min = date.getMinutes().toString().padStart(2, "0");
          var second = date.getSeconds().toString().padStart(2, "0");
          return {
            date: year + "-" + month + "-" + day,
            time: hour + ":" + min + ":" + second
          };
        }
        _Common.getTimeFormat = getTimeFormat;
        function formatTime(seconds) {
          var hours = Math.floor(seconds / 3600); // 计算小时数
          var minutes = Math.floor(seconds % 3600 / 60); // 计算分钟数
          var remainingSeconds = seconds % 60; // 剩余秒数

          // 格式化为两位数，保证时分秒格式统一
          var formattedHours = hours < 10 ? "0" + hours : hours;
          var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
          var formattedSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
          if (hours > 0) {
            return formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
          } else {
            return formattedMinutes + ":" + formattedSeconds;
          }
        }
        _Common.formatTime = formatTime;
        function setGameNo(GameNo) {
          return "" + GameNo;
        }
        _Common.setGameNo = setGameNo;
        function getPaltform() {
          //获取设备类型
          if (sys.isNative) {
            return sys.os;
          } else {
            var os = sys.os;
            if (isPC()) {
              if (os.indexOf("pc_") == -1) {
                return "pc_" + os;
              } else {
                return os;
              }
            } else {
              if (os.indexOf("h5_") == -1) {
                return "h5_" + os;
              } else {
                return os;
              }
            }
          }
        }
        _Common.getPaltform = getPaltform;
        function ChangeMoneyShowM(num, digits) {
          var si = [{
            value: 1,
            symbol: ""
          }, {
            value: 1e3,
            symbol: "K"
          }, {
            value: 1e6,
            symbol: "M"
          }];
          var i;
          for (i = si.length - 1; i > 0; i--) {
            if (Math.abs(num) >= si[i].value) {
              break;
            }
          }

          // i = i > 3 ? 3 : i;
          num = num / si[i].value;
          var ret = num.toString().replace(new RegExp("([0-9]+.[0-9]{" + digits + "})[0-9]*"), "$1") + si[i].symbol;
          return ret;
        }
        _Common.ChangeMoneyShowM = ChangeMoneyShowM;
        function ChangeMoneyShow(num, digits) {
          var si = [{
            value: 1,
            symbol: ""
          }, {
            value: 1e3,
            symbol: "K"
          }, {
            value: 1e6,
            symbol: "M"
          }, {
            value: 1e9,
            symbol: "B"
          }, {
            value: 1e12,
            symbol: "T"
          }, {
            value: 1e15,
            symbol: "P"
          }, {
            value: 1e18,
            symbol: "E"
          }];
          var i;
          for (i = si.length - 1; i > 0; i--) {
            if (Math.abs(num) >= si[i].value) {
              break;
            }
          }

          // i = i > 3 ? 3 : i;
          num = num / si[i].value;
          var ret = num.toString().replace(new RegExp("([0-9]+.[0-9]{" + digits + "})[0-9]*"), "$1") + si[i].symbol;
          return ret;
        }
        _Common.ChangeMoneyShow = ChangeMoneyShow;
        function ChangeMoneyFormat(num, digits) {
          var si = [{
            value: 1,
            symbol: ""
          }, {
            value: 1e3,
            symbol: "K"
          }];
          var i;
          for (i = si.length - 1; i > 0; i--) {
            if (Math.abs(num) >= si[i].value) {
              break;
            }
          }
          num = num / si[i].value;
          var ret = num.toString().replace(/\d+/, function (n) {
            // 先提取整数部分
            return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
              return $1 + ",";
            });
          });
          ret = ret.replace(new RegExp("([0-9,]+.[0-9]{" + digits + "})[0-9]*"), "$1") + si[i].symbol;
          return ret;
        }
        _Common.ChangeMoneyFormat = ChangeMoneyFormat;
        function nickNameFormat(nickName, digits) {
          if (digits === void 0) {
            digits = 9;
          }
          return nickName.length > digits ? nickName.substring(0, digits) + "..." : nickName;
        }
        _Common.nickNameFormat = nickNameFormat;
        function formatNickName(nickName) {
          var str = nickName.replace(/^(.{3}).*(.{2})$/, "$1**$2");
          return str;
        }
        _Common.formatNickName = formatNickName;
        function getHeadStr(strUrl) {
          return strUrl.replace(/(http(s)?|:).*\//g, "").replace(/\..*/g, "");
        }
        _Common.getHeadStr = getHeadStr;
        function nickNameFormatL(labelNode, nickName, width, owner) {
          if (owner === void 0) {
            owner = null;
          }
          var cLabel = labelNode instanceof Label ? labelNode : labelNode.getComponent(Label);
          // let _overflow = cLabel.overflow;
          // width = _overflow != cc.Label.Overflow.NONE ? cLabel.node.width : width;
          // cLabel.overflow = cc.Label.Overflow.NONE;

          // let curWidth = 0;
          // let digits = nickName.length + 1;
          // do {
          //     digits--;
          //     cLabel.string = `${nickName.substring(0, digits)}`;
          //     //@ts-ignore
          //     cLabel._forceUpdateRenderData();
          //     curWidth = cLabel.node.width;
          // } while (curWidth > width);

          // cLabel.overflow = _overflow;
          // cLabel.node.width = width;

          // if (digits < nickName.length) {
          //     cLabel.string = `${cLabel.string}...`;
          // }
          if (!owner) {
            owner = DataManager.instance.nickName;
          }
          if (nickName == owner) {
            cLabel.string = nickName;
          } else {
            cLabel.string = nickName.replace(/^(.{3}).*(.{2})$/, "$1**$2");
          }
          return cLabel.string;
        }
        _Common.nickNameFormatL = nickNameFormatL;
        function is(obj, type) {
          return Object.prototype.toString.call(obj).slice(8, -1) === type;
        }
        _Common.is = is;
        function clone(obj) {
          var ret = obj.slice ? [] : {},
            p,
            prop;
          // 配合 is 函数使用
          if (this.is(obj, "Array")) return obj.slice();
          for (p in obj) {
            if (!obj.hasOwnProperty(p)) continue;
            prop = obj[p];
            ret[p] = this.is(prop, "Object") || this.is(prop, "Array") ? this.clone(prop) : prop;
          }
          return ret;
        }
        _Common.clone = clone;
        function loadHeadRes(cb) {
          resources.loadDir("head", SpriteFrame, function (error, assets) {
            if (!error) {
              for (var _iterator2 = _createForOfIteratorHelperLoose(assets), _step2; !(_step2 = _iterator2()).done;) {
                var _SpriteFrame = _step2.value;
                DataManager.instance.localHead[_SpriteFrame.name] = _SpriteFrame;
              }
              if (cb) {
                cb();
              }
            }
          });
        }
        _Common.loadHeadRes = loadHeadRes;
        function strFormat(strTemp) {
          for (var _len2 = arguments.length, param = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            param[_key2 - 1] = arguments[_key2];
          }
          if (param && param.length > 0) {
            var index = 0;
            return strTemp.replace(/{\d}/g, function () {
              return "" + param[index++];
            });
          }
          return strTemp;
        }
        _Common.strFormat = strFormat;
        function numFormat(num) {
          var nums = parseInt(num);
          var res = nums.toString().replace(/\d+/, function (n) {
            // 先提取整数部分
            return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
              return $1 + ",";
            });
          });
          return res;
        }
        _Common.numFormat = numFormat;
        function numFormat2(num) {
          var nums = parseInt(num);
          var res = nums.toString().replace(/\d+/, function (n) {
            // 先提取整数部分
            return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
              return $1 + ".";
            });
          });
          return res;
        }
        _Common.numFormat2 = numFormat2;
        function isPC() {
          var userAgentInfo = navigator.userAgent;
          var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod"];
          var flag = true;
          for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
              flag = false;
              break;
            }
          }
          //  if(window.screen.width>=768){
          //     flag = true;
          //  }
          return flag;
        }
        _Common.isPC = isPC;
        function formatInputContent(strContent) {
          //越南语过滤
          if (!strContent || strContent.length == 0) return "";
          var re = /(http(s)?|www|ftp|file|com|.cn|net|org|gov|:|\/|^\s*|\s*$)/g; //过滤网址 斜杠 冒号 头尾空格
          strContent = strContent.replace(re, "");
          var strList = [];
          var pattern = new RegExp("[A-Za-z0-9]+"); //判断英文和数字
          var len = strContent.length;
          for (var i = 0; i < len; ++i) {
            var strTemp = strContent[i];
            if (pattern.test(strTemp)) {
              strList.push(strTemp);
              continue;
            }
            if (strTemp.search(/[\s]/g) != -1) {
              //保留中间空格
              strList.push(strTemp);
              continue;
            }
            //是否为越南文
            var isVietnamese = true;

            //越南文判断
            // let temp = Object.keys(unicodeRange);
            // for (let j = 0; j < temp.length; ++j) {
            //     let start = unicodeRange[j].start;
            //     let end = unicodeRange[j].end;
            //     let patternSub = new RegExp(`[${start}-${end}]+`);
            //     if (patternSub.test(strTemp)) {
            //         isVietnamese = true;
            //         break;
            //     }
            // }

            if (isVietnamese) {
              strList.push(strTemp);
              continue;
            }
          }
          if (strList.length == 0) return "";
          var connectStr = "";
          for (var _i = 0; _i < strList.length; ++_i) {
            connectStr += strList[_i];
          }
          connectStr = connectStr.replace(/^\s*|\s*$/g, ""); //格式化后再去一次去头尾空格
          return connectStr;
        }
        _Common.formatInputContent = formatInputContent;
        function judgeInputContent(strContent) {
          // 0. 符合要求
          // -1.无效字符串
          // 1. 0开头的数字
          // 2. 数字超过6位
          if (!strContent) return -1;
          var len = strContent.length;
          if (len == 0) return -1;
          var pattern = new RegExp("[0-9]+"); //判断数字
          if (len > 1) {
            if (strContent[0] == "0" && pattern.test(strContent[1])) {
              return 1;
            }
          }
          var str_num = strContent.replace(/[^0-9]/gi, ""); //截取字符串中的数字
          if (str_num.length > 5) {
            return 2;
          }
          return 0;
        }
        _Common.judgeInputContent = judgeInputContent;
        function setButtonGray(button, isGray) {
          if (isGray === void 0) {
            isGray = true;
          }
          var target = button.node.getComponent(Sprite) || button.target && button.target.getComponent(Sprite);
          if (target) {
            target.customMaterial = null;
            target.grayscale = isGray;
          }
        }
        _Common.setButtonGray = setButtonGray;
        function setButtonEnableWithGray(button, enable) {
          if (enable === void 0) {
            enable = true;
          }
          button.interactable = enable;
          this.setButtonGray(button, !enable);
        }
        _Common.setButtonEnableWithGray = setButtonEnableWithGray;
        function changeNodeEffect(node, isGray) {
          if (isGray === void 0) {
            isGray = true;
          }
          var sprite = node.getComponent(Sprite);
          if (sprite) {
            if (isGray) {
              resources.load("/effect/graySprite", function (err, tex) {
                if (!err && tex && isValid(sprite)) {
                  var material = new Material();
                  material.initialize({
                    effectName: "../resources/effect/graySprite",
                    defines: {
                      USE_TEXTURE: true
                    }
                  });
                  material.setProperty("grays", 1, 0);
                  sprite.customMaterial = material;
                  var gray = material.getProperty("grays", 0);
                  if (gray != undefined) {
                    material.setProperty("grays", 1);
                  }
                }
              });
            } else {
              var material = builtinResMgr.get("ui-sprite-material");
              sprite.customMaterial = material;
            }
          } else {
            var spine = node.getComponent(sp.Skeleton);
            if (spine) {
              if (isGray) {
                resources.load("/effect/graySpine", function (err, tex) {
                  if (!err && tex && isValid(sp)) {
                    var _material = new Material();
                    _material.initialize({
                      effectName: "../resources/effect/graySpine"
                    });
                    spine.customMaterial = _material;
                  }
                });
              } else {
                var _material2 = builtinResMgr.get("default-spine-material");
                spine.customMaterial = _material2;
              }
            }
          }
        }
        _Common.changeNodeEffect = changeNodeEffect;
        function checkStandard() {
          var size = view.getVisibleSize();
          if (Math.round(size.width) == 1920 || Math.round(size.height) == 1080) {
            return true;
          }
          return false;
        }
        _Common.checkStandard = checkStandard;
        function loadHeguanByType(node, bundle, name) {
          return new Promise(function (resolve, reject) {
            var spine = node;
            bundle.load(name, sp.SkeletonData, function (err, asset) {
              if (err) {
                reject();
                return;
              }
              if (isValid(spine)) spine.skeletonData = asset;
              resolve();
            });
          });
        }
        _Common.loadHeguanByType = loadHeguanByType;
        function getRecordResult(data) {
          // gts.Debug.Log("==getRecordResult=data=" + JSON.stringify(data));

          try {
            var strResult = data.GameResult;
            if (!strResult || strResult.length == 0) {
              return "-";
            }
            switch (data.GameType) {
              case GameDef.GameType.racing:
                {
                  var result = strResult.replace(/\[|\]/g, "");
                  return result;
                }
              case GameDef.GameType.bigSmallMD5:
                {
                  var _result = JSON.parse(strResult);
                  var arrDic = _result.openNum.split(",");
                  var totalDice = parseInt(arrDic[0]) + parseInt(arrDic[1]) + parseInt(arrDic[2]);
                  return totalDice > 10 ? i18n.lang.gameResult.Tai : i18n.lang.gameResult.Xiu;
                }
              case GameDef.GameType.dx3Min:
              case GameDef.GameType.dxLive:
              case GameDef.GameType.dxVip:
              case GameDef.GameType.dx:
                {
                  var arrDice = strResult.split(",");
                  var _totalDice = parseInt(arrDice[0]) + parseInt(arrDice[1]) + parseInt(arrDice[2]);
                  return _totalDice > 10 ? i18n.lang.gameResult.Tai : i18n.lang.gameResult.Xiu;
                }
              case GameDef.GameType.sdLive:
                {
                  var arrCount = [0, 0];
                  for (var _iterator3 = _createForOfIteratorHelperLoose(strResult), _step3; !(_step3 = _iterator3()).done;) {
                    var strDice = _step3.value;
                    parseInt(strDice) == 1 ? arrCount[0]++ : arrCount[1]++;
                  }
                  var retStr = "";
                  if (arrCount[0] > 0) {
                    retStr = arrCount[0] + " " + i18n.lang.gameResult.red;
                  }
                  if (arrCount[1] > 0) {
                    retStr = retStr + " " + arrCount[1] + " " + i18n.lang.gameResult.white + " ";
                  }
                  return retStr;
                }
              case GameDef.GameType.sdVip:
              case GameDef.GameType.sd:
                {
                  var resultData = JSON.parse(strResult);
                  var _result2 = resultData.num ? resultData.num : "" + resultData;
                  var _arrCount = [0, 0];
                  for (var _iterator4 = _createForOfIteratorHelperLoose(_result2), _step4; !(_step4 = _iterator4()).done;) {
                    var _strDice = _step4.value;
                    parseInt(_strDice) == 1 ? _arrCount[0]++ : _arrCount[1]++;
                  }
                  var _retStr = "";
                  if (_arrCount[0] > 0) {
                    _retStr = _arrCount[0] + " " + i18n.lang.gameResult.red;
                  }
                  if (_arrCount[1] > 0) {
                    _retStr = _retStr + " " + _arrCount[1] + " " + i18n.lang.gameResult.white + " ";
                  }
                  return _retStr;
                }
              case GameDef.GameType.yxxLive:
                {
                  var arrRes = ["lu", "ji", "huLu", "yu", "xie", "xia"];
                  var _arrDice = strResult.split(",");
                  var _retStr2 = "";
                  for (var _iterator5 = _createForOfIteratorHelperLoose(_arrDice), _step5; !(_step5 = _iterator5()).done;) {
                    var _strDice2 = _step5.value;
                    _retStr2 += i18n.lang.gameResult[arrRes[parseInt(_strDice2) - 1]] + ",";
                  }
                  return _retStr2.substring(0, _retStr2.length - 1);
                }
              case GameDef.GameType.yxx:
                {
                  var _result3 = JSON.parse(JSON.parse(strResult).num);

                  // let arrRes = ["lu", "ji", "huLu", "yu", "xie", "xia"];
                  var _arrRes = ["yu", "xia", "xie", "lu", "ji", "huLu"];
                  var R1 = i18n.lang.gameResult[_arrRes[parseInt(_result3["1"]) - 1]];
                  var R2 = i18n.lang.gameResult[_arrRes[parseInt(_result3["2"]) - 1]];
                  var R3 = i18n.lang.gameResult[_arrRes[parseInt(_result3["3"]) - 1]];
                  return R1 + "," + R2 + "," + R3;
                }
              case GameDef.GameType.cardLhd2:
                {
                  var _result4 = JSON.parse(strResult);
                  for (var i = 0; i < 2; i++) {
                    _result4["" + (i + 1)] %= 13;
                    _result4["" + (i + 1)] = parseInt(_result4["" + (i + 1)]);
                  }
                  return _result4["1"] > _result4["2"] ? i18n.lang.gameResult["Long"] : _result4["1"] == _result4["2"] ? i18n.lang.gameResult["Hoa"] : i18n.lang.gameResult["Ho"];
                }
              case GameDef.GameType.bjl:
                {
                  var _result5 = JSON.parse(JSON.parse(strResult).num);
                  var bank = _result5.BANKER_CARD;
                  var bankPoint = 0;
                  for (var _i2 = 0; _i2 < bank.length; _i2++) {
                    bank[_i2] %= 13;
                    bankPoint += bank[_i2] > 9 ? 0 : bank[_i2];
                  }
                  bankPoint %= 10;
                  var isBankPair = bank[0] == bank[1] || bank[0] == bank[2] || bank[1] == bank[2];
                  var player = _result5.PLAYER_CARD;
                  var playerPoint = 0;
                  for (var _i3 = 0; _i3 < bank.length; _i3++) {
                    player[_i3] %= 13;
                    playerPoint += player[_i3] > 9 ? 0 : player[_i3];
                  }
                  playerPoint %= 10;
                  var isPlayerPair = player[0] == player[1] || player[0] == player[2] || player[1] == player[2];
                  var strRet = bankPoint > playerPoint ? i18n.lang.gameResult["Banker"] : bankPoint == playerPoint ? i18n.lang.gameResult["Tie"] : i18n.lang.gameResult["Player"];
                  strRet += isBankPair ? "," + i18n.lang.gameResult["BankerPair"] : "";
                  strRet += isPlayerPair ? "," + i18n.lang.gameResult["PlayerPair"] : "";
                  return strRet;
                }
              case GameDef.GameType.dice:
                {
                  var _result6 = JSON.parse(strResult).openNum;
                  return _result6[0] + "," + _result6[1] + "," + _result6[2];
                  break;
                }
              case GameDef.GameType.keno:
                {
                  strResult = strResult.replace(/ /g, ","); // JSON.parse(strResult);
                  var _result7 = JSON.parse(strResult);
                  var totalNum = 0;
                  for (var _iterator6 = _createForOfIteratorHelperLoose(_result7), _step6; !(_step6 = _iterator6()).done;) {
                    var num = _step6.value;
                    totalNum += num;
                  }
                  var strDaXiao = totalNum >= 811 ? i18n.lang.gameResult.Tai : i18n.lang.gameResult.Xiu;
                  //金：210-695,木：764-855,水：696-763,火：856-923,土：924-1410,
                  var strWuXing = totalNum < 210 ? "" : totalNum < 696 ? i18n.lang.gameResult.jin : totalNum < 764 ? i18n.lang.gameResult.shui : totalNum < 856 ? i18n.lang.gameResult.mu : totalNum < 924 ? i18n.lang.gameResult.huo : i18n.lang.gameResult.tu;
                  return "K\u1EBFt qu\u1EA3: " + strDaXiao + "-" + strWuXing + "(" + totalNum + ")";
                }
              default:
                {
                  return "-";
                  // return Common.numFormat(data.CurBalance);
                }

              // case GameDef.GameType.guessBigSmall: {
              //     break;
              // }
              // case GameDef.GameType.roshambo: {
              //     break;
              // }
              // case GameDef.GameType.mini_poker: {
              //     break;
              // }
              // case GameDef.GameType.slotLs: {
              //     break;
              // }
              // case GameDef.GameType.cardLieng: {
              //     break;
              // }
              // case GameDef.GameType.cardPhom: {
              //     break;
              // }
              // case GameDef.GameType.bigSmallMD5: {
              //     break;
              // }
              // case GameDef.GameType.fish: {
              //     break;
              // }
              // case GameDef.GameType.cardLhd: {
              //     break;
              // }
              // case GameDef.GameType.bjl: {
              //     break;
              // }
              // case GameDef.GameType.slotCs: {
              //     break;
              // }
              // case GameDef.GameType.slotGemstone: {
              //     break;
              // }
              // case GameDef.GameType.f35: {
              //     break;
              // }
              // case GameDef.GameType.dice: {
              //     break;
              // }
              // case GameDef.GameType.slotFruit: {
              //     break;
              // }
              // case GameDef.GameType.slotXy: {
              //     break;
              // }
              // case GameDef.GameType.slotMj: {
              //     break;
              // }
              // case GameDef.GameType.slotBowl: {
              //     break;
              // }
              // case GameDef.GameType.cardLhd2: {
              //     break;
              // }
              // case GameDef.GameType.slotSpringFestival: {
              //     break;
              // }
              // case GameDef.GameType.slotVigorous: {
              //     break;
              // }
              // case GameDef.GameType.slotGod: {
              //     break;
              // }
              // case GameDef.GameType.cardSss: {
              //     break;
              // }
              // case GameDef.GameType.slotBoxing: {
              //     break;
              // }
              // case GameDef.GameType.slotCat: {
              //     break;
              // }
              // case GameDef.GameType.slotPoker: {
              //     break;
              // }
            }
          } catch (error) {
            return "-";
          }
        }
        _Common.getRecordResult = getRecordResult;
        function exitGame() {
          if (window.history.length > 1) {
            window.history.back();
          } else {
            location.reload();
          }
        }
        _Common.exitGame = exitGame;
        function numberFormat(num, digits) {
          var lang = urlUtil.lang;
          var locales;
          if (lang == "pt") {
            locales = "de-DE";
          } else {
            locales = "en-US";
          }
          return num.toLocaleString(locales, {
            minimumFractionDigits: digits,
            maximumFractionDigits: digits
          });
        }
        _Common.numberFormat = numberFormat;
        function moneyFormat(money) {
          return DataManager.instance.getUserDataForKey(UserKey.CURRENCY_SYMBOL) + Common.numberFormat(money / GameDef.Constant.moneyRatio, 2);
        }
        _Common.moneyFormat = moneyFormat;
        function updateProgress(t) {
          window["updateProgress"] && window["updateProgress"](t);
        }
        _Common.updateProgress = updateProgress;
      })(Common || (Common = exports('Common', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ConfigManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "449c9SszexAk5y+AY+LLEP1", "ConfigManager", undefined); // //游戏配置管理器包括 1.按钮事件类型配置 2.传输事件类型配置 3.http网络协议配置 4.socket网络协议配置
      var ServerType = exports('ServerType', /*#__PURE__*/function (ServerType) {
        ServerType[ServerType["LOCAL"] = 0] = "LOCAL";
        ServerType[ServerType["AMAZON_TEST_WSS"] = 1] = "AMAZON_TEST_WSS";
        ServerType[ServerType["AMAZON_TEST"] = 2] = "AMAZON_TEST";
        ServerType[ServerType["RELEASE"] = 3] = "RELEASE";
        ServerType[ServerType["AMAZON_YaCe"] = 4] = "AMAZON_YaCe";
        ServerType[ServerType["BOSS"] = 5] = "BOSS";
        ServerType[ServerType["myLocal"] = 6] = "myLocal";
        ServerType[ServerType["HAI"] = 7] = "HAI";
        return ServerType;
      }({}));
      var ConfigManager = exports('default', /*#__PURE__*/function () {
        function ConfigManager() {
          //    //服务器连接类型
          this.serverType = ServerType.LOCAL;
          this.httpHost = "";
          //网关服务器地址
          this.scoketHost = "";
          //网关socket地址
          this.scoketPort = 0;
          //网关端口
          this.debug = 4;
          //判断运行环境0正式 1测试
          this.pem = "";
          //    //是否启用更新
          this.isUpdate = true;
          //    //是否启用临时app测试
          this.isAppTest = true;
          this._webHostIndex = 0;
          this.webHostList = [];
          //  gameArr=["Dxgame","Yxxgame","Sdgame","LsGame","SssGame","CddSGame","CddWGame","CsdGame","PhomGame","FishGame","CpGame"];                       //大厅子游戏游戏配置
          // gameArr={
          //     hotGame:["Dxgame","Yxxgame","Sdgame"],
          //     slot:["LsGame","CsdGame","AvGame","DanceGame"],//
          //     pokeGame:["CddSGame","CddWGame","SssGame","SgGame","PhomGame","SixGame","LhGame","BaccaratGame"],  //小图标,"BaccaratGame"
          //     lotteryGame:["CpGame"],
          //     miniGame:["Minipoker","GuessBigSmall","FingGuess"],                    //小图标
          //     liveGame:["LiveCasino","LiveSports"],   //视讯
          // }
          //按钮事件类型
          this.ButtonEvent = {
            //登录界面按钮事件
            //大厅类 二级界面按钮
            showRecord: "showRecord",
            activeType: "activeType",
            //活动类型
            goWork: "goWork",
            // 前往任务
            getWorkGold: "getWorkGold",
            // 领取任务
            gljCz: "gljCz",
            // 鼓励金跳转充值
            gljClose: "gljClose",
            // 鼓励金关闭

            //公共按钮事件
            closePop: "closePop",
            //关闭弹窗事件
            //大厅子游戏按钮事件
            GameButton: "GameButton",
            //子游戏button
            miniGame: "miniGame",
            //mini游戏
            //邀请游戏通知
            invite: "invite",
            //邀请
            inviteGo: "inviteGo",
            //邀请进入

            longInfo: "longInfo"
          };
          //传输事件
          this.eventTransform = {
            readEmail: "readEmail",
            //读邮件
            showLogin: "showLogin",
            //显示登录按钮
            checkHotUpdate: "checkHotUpdate",
            //检查热更新
            checkGame: "checkGame",
            //检查游戏
            enterGame: "enterGame",
            //进入对应游戏
            showGameContent: "showGameContent",
            //更新游戏显示位置
            reConnect: "reConnect",
            //断线重连
            disConnect: "disConnect",
            //掉线
            gameShow: "gameShow",
            //后台切出
            gameHide: "gameHide",
            enterUpdate: "enterUpdate",
            //load进度更新
            hotUpdate: "hotUpdate",
            //热更更新
            hotUpdateFinish: "hotUpdateFinish",
            // 热更完成
            account_disConnect: "accountDisConnect",
            getHallInfo: "getHallInfo",
            enterUpdateCancel: "enterUpdateCancel",
            //load进度更新取消

            activitySelect: "activitySelect",
            onChatTopMsg: "onChatTopMsg",
            onEmojiClick: "onEmojiClick",
            onShowVideo: "onShowVideo",
            closePopView: "closePopView",
            openPopView: "openPopView",
            setAuto: "setAuto",
            setBase: "setBase",
            setBet: "setBet",
            setQuick: "setQuick",
            scrollNumberEvent: "scrollNumberEvent"
          };
          //http协议
          this.httpDIr = {
            // login: "/user/login", //登录http请求协议
            // register: "/user/register", //注册
            // checkBigUpdate: "/version/get?app_key=vnFirstPPdwckd", //检测大版本更新
            // bindPhone: "/sms/send", //绑定手机号 发验证码
            // checkToken: "/user/token_bind", //检查token 并且获取ip
            // getKefuChat: "/version/conf", //获取客服链接
            getVersion: "/app/getSysGameHotVersionList",
            //热更版本信息
            getNotice: "/app/platformAdList",
            //公告
            blackWordList: "/app/sensitiveWordList",
            //敏感词

            // getActivitySignList: "http://192.168.8.235:18081/admin-activity/sign/list",
            // signIn: "http://192.168.8.235:18081/admin-activity/sign/take",
            // activityList: "http://192.168.8.137:18081/app/activityByAccount",
            // activityLog: "http://192.168.8.137:18081/app/receiveAwardLog",
            // receiveActivity: "http://192.168.8.137:18081/app/receiveAward",
            getActivityList: "/app/activityList",
            //活动code列表
            userActivity: "/app/userActivity",
            //活动内容
            activityLog: "/app/activityAwardRecord",
            //活动领取记录
            receiveActivity: "/app/activityReceiveAward",
            //领取活动
            netList: "/app/domain"
          };
          //聊天模块网路协议
          this.protocolChat = {
            joinChat: "chat/HD_joinGroup",
            //加入聊天室
            exitChat: "chat/HD_exitGroup",
            //推出聊天室
            pushChat: "chat/newMessage",
            //聊天推送
            sendChat: "chat/HD_send",
            //发送聊天信息
            getChatRecord: "chat/HD_msgLog",
            //获取聊天记录
            chatConfig: "chat/HD_limitationConf",
            adminTopMsg: "chat/adminTopMsg",
            //主动推送 置顶
            adminCancelTopMsg: "chat/adminCancelTopMsg" //主动推送 取消 置顶
          };
          // 网络scoket事件协议
          //1.大厅事件协议
          this.protocolHall = {
            checkGame: "lobby/HD_checkGame",
            //禁用和黑名单 检测
            login: "lobby/HD_login",
            // 登录
            activity: "lobby/HD_GetActivityList",
            //活动
            email: "lobby/HD_GetMailList",
            //邮箱
            bindPhone: "lobby/HD_bindPhone",
            //手机绑定
            hallInfo: "lobby/HD_info",
            //大厅信息
            getUserInfo: "lobby/HD_GetUserInfo",
            //玩家等级信息

            agencyInfo: "lobby/HD_agentConf",
            //代理信息配置
            agencyData: "lobby/HD_agentInfo",
            //自己代理收益明细
            huazhuan: "pay/HD_agentIncome2wallet",
            //划转
            getRecord: "lobby/HD_QueryBetRecord",
            //押注记录
            updateEmail: "lobby/HD_UpdateMailState",
            //读邮件
            removeEmail: "lobby/HD_DeleteMail",
            //删除邮件
            modifyPsw: "lobby/HD_ModifyPassword",
            //修改密码
            changeHead: "lobby/HD_SetAvatar",
            //修改头像
            setName: "lobby/HD_SetNickName",
            //设置昵称
            getJiangli: "lobby/HD_ActivityReceive",
            //领取活动奖励

            getWallet: "lobby/HD_Wallet",
            //获取金币
            pushWallet: "all/wallet",
            //金币推送

            LongDragon: "all/LongDragon",
            //连续开奖推送

            GongGao: "lobby/globalNotice",
            //自动弹公告
            gamePage: "lobby/HD_page",
            apiConf: "lobby/HD_apiConf",
            //视讯api
            getVnd: "lobby/HD_GetWindowVnd",
            HD_ClickCharge: "lobby/HD_ClickCharge",
            HD_GetCarouselInfo: "lobby/HD_GetCarouselInfo",
            HD_GetActivityStatus: "lobby/HD_GetActivityStatus",
            //活动
            joinFirst: "activity/HD_JoinFirstCharge",
            // 加入首次充值
            activeConf: "activity/HD_GetActivityConf",
            //活动配置
            chargeAll: "activity/HD_GetTotalChargeActivity",
            // 累计充值
            getLjGold: "activity/HD_ReceiveTotalChargeActivity",
            //领取累计充值奖励
            getSignConf: "activity/HD_GetSignInActivity",
            //获取签到配置
            getSignGold: "activity/HD_ReceiveSignInActivity",
            //获取签到奖励
            getWorkConf: "activity/HD_GetDayActivity",
            //任务配置
            getWorkGold: "activity/HD_ReceiveDayActivity",
            //领取任务奖励
            getGuliConf: "activity/HD_GetEncouragementConf",
            //获取鼓励金配置

            gulijin1: "activity/HD_EncouragementReceiveHint",
            // 提醒获取鼓励金
            gulijin2: "activity/HD_EncouragementChargeHint",
            // 提醒充值多少获取鼓励金次数
            gulijin3: "activity/HD_TodayEncourageFinish",
            // 提醒今日鼓励金已经领取完了
            //邀请游戏通知
            inviteData: "lobby/HD_GameInviteRecord",
            //邀请游戏通知数据
            inviteGo: "lobby/HD_InviteEnter",
            //通过邀请进入房间

            getRankData: "lobby/HD_GetWinRankList",
            //获取排行榜

            getMaxJackpotAll: "lobby/HD_GetMaxJackpotAll",
            //获取大奖柱形图数据

            getCustomChips: "customChips/HD_chipsList",
            // 获取自定义筹码列表
            updateCustomChips: "customChips/HD_chipsUpdate",
            //更新自定义筹码列表

            getPumping: "lobby/HD_GetPumping",
            //抽水
            HD_GetHeadPics: "lobby/HD_GetHeadPics",
            //获取头像信息-这个接口返回一个字符串数据，头像的url
            HD_SetHeadPic: "lobby/HD_SetHeadPic",
            //设置头像-这个接口参数是HeadPicUrl

            HD_GetGamePlay: "lobby/HD_GetGamePlay",
            //keno。。。赔率

            HD_CollectGame: "lobby/HD_CollectGame",
            // 收藏

            actionSysGameHotVersionList: "lobby/HD_SysGameHotVersionList",
            //热更版本信息
            actionPlatformAdList: "lobby/HD_PlatformAdList",
            //公告
            actionSensitiveWordList: "lobby/HD_SensitiveWordList",
            //敏感词
            actionActivityList: "lobby/HD_ActivityList",
            //活动列表
            actionUserActivity: "lobby/HD_UserActivity",
            //活动内容
            actionActivityAwardRecord: "lobby/HD_ActivityAwardRecord",
            //活动领取记录
            actionActivityReceiveAward: "lobby/HD_ActivityReceiveAward",
            //领取活动
            actionDomain: "lobby/HD_Domain" //服务器列表
          };

          this.ProtocolRedPacket = {
            HD_Grab: "activityRedPacket/HD_Grab",
            //领取红包
            HD_info: "activityRedPacket/HD_info",
            //红包信息
            HD_ActivityInfo: "activityRedPacket/HD_ActivityInfo",
            HD_StartRedPacket: "activityRedPacket/HD_StartRedPacket",
            HD_ActivityStateChange: "activityRedPacket/HD_ActivityStateChange",
            HD_GetActivityBeginEndTime: "activityRedPacket/HD_GetActivityBeginEndTime"
          };
          this.ProtocolStone = {
            bet: "slotGemstone/HD_Bet",
            betList: "slotGemstone/HD_BetList"
          };
          this.ProtocolStone2 = {
            bet: "slotGemstone2/HD_Bet",
            betList: "slotGemstone2/HD_BetList"
          };
          this.ProtocolFestival = {
            bet: "slotSpringFestival/HD_Bet",
            info: "slotSpringFestival/HD_info"
          };
          this.ProtocolXy = {
            getConfig: "slotXy/HD_info",
            bet: "slotXy/HD_Bet",
            betList: "slotXy/HD_BetList",
            jackpotList: "slotXy/HD_GetJackpot"
          };
          this.ProtocolPoker = {
            bet: "slotPoker/HD_Bet",
            info: "slotPoker/HD_info"
          };
          this.ProtocolFortuneTiger = {
            bet: "slotFortuneTiger/HD_Bet",
            info: "slotFortuneTiger/HD_info"
          };
          this.ProtocolFortuneMouse = {
            bet: "slotFortuneMouse/HD_Bet",
            info: "slotFortuneMouse/HD_info"
          };
          this.ProtocolFortuneElephant = {
            bet: "slotGaneshaGold/HD_Bet",
            info: "slotGaneshaGold/HD_info"
          };
          this.ProtocolSlotQueen = {
            bet: "slotQueenOfBounty/HD_Bet",
            info: "slotQueenOfBounty/HD_info",
            select: "slotQueenOfBounty/HD_SelectFreeGame"
          };
          this.ProtocolSlotMacau = {
            bet: "slotDreamsofMacau/HD_Bet",
            info: "slotDreamsofMacau/HD_info",
            buyFree: "slotDreamsofMacau/HD_BuyFree"
          };
          this.ProtocolSlotCaptain = {
            bet: "slotCaptainBounty/HD_Bet",
            info: "slotCaptainBounty/HD_info"
          };
          this.ProtocolSlotSpeedWinner = {
            bet: "slotSpeedWinner/HD_Bet",
            info: "slotSpeedWinner/HD_info"
          };
          this.ProtocolSlotWildBountyShowdown = {
            bet: "slotWildBountyShowdown/HD_Bet",
            info: "slotWildBountyShowdown/HD_info",
            buyFree: "slotWildBountyShowdown/HD_BuyFree"
          };
          this.ProtocolSdVip = {
            bet: "sdVip/HD_Bet",
            history: "sdVip/HD_History",
            info: "sdVip/HD_info"
          };
          this.ProtocolLhVip = {
            bet: "cardLhd3d/HD_Bet",
            history: "cardLhd3d/HD_History",
            info: "cardLhd3d/HD_info"
          };
          this.ProtocolSlotApotheosis = {
            bet: "slotApotheosis/HD_Bet",
            info: "slotApotheosis/HD_info",
            buyFree: "slotApotheosis/HD_BuyFree"
          };
          this.ProtocolSlotGoldenBook = {
            bet: "slotGoldenBook/HD_Bet",
            info: "slotGoldenBook/HD_info"
          };
          this.ProtocolSlotJLCS = {
            bet: "slotJLCS/HD_Bet",
            info: "slotJLCS/HD_info"
          };
          this.ProtocolSlotWinWinFishPrawnCrab = {
            bet: "slotWinWinFishPrawnCrab/HD_Bet",
            info: "slotWinWinFishPrawnCrab/HD_info"
          };
          this.ProtocolSlotWildBandito = {
            bet: "slotWildBandito/HD_Bet",
            info: "slotWildBandito/HD_info"
          };
          this.ProtocolSlotCocktailNights = {
            bet: "slotCocktailNights/HD_Bet",
            info: "slotCocktailNights/HD_info"
          };
          this.ProtocolSlotEmojiRiches = {
            bet: "slotEmojiRiches/HD_Bet",
            info: "slotEmojiRiches/HD_info",
            buyFree: "slotEmojiRiches/HD_BuyFree"
          };
          this.protocolKeno = {
            //游戏流程
            getConfig: "Keno/HD_info",
            //得到游戏配置
            KenoXiazhu: "Keno/doingBet",
            //下注大盘通知
            KenoResult: "Keno/result",
            //大小结果通知
            KenoShowResult: "Keno/checkout",
            //结算
            KenoNextWait: "Keno/waiteNext",
            //等待下一局
            KenoPlay: "Keno/HD_play",
            //下注操作
            KenoBet: "Keno/Bet",
            //下注的各种场景
            getRecord: "lobby/HD_QueryBetRecord",
            //押注记录
            history: "Keno/HD_history",
            //历史走势
            getDetails: "Keno/HD_details",
            //细节
            getPoolData: "Keno/HD_jackpotHistory",
            //大奖记录
            backBet: "Keno/refund",
            //返回

            curRoundBet: "Keno/HD_CurRoundBet",
            //当局下注数据

            //游戏按钮
            closeKenoGame: "closeKenoGame",
            //关闭子游戏
            KenoCloseChat: "KenoCloseChat",
            //关闭聊天窗口
            KenoSendChat: "KenoSendChat",
            //发送消息
            KenoRecord: "KenoRecord",
            //自己的押注记录
            pathList: "pathList",
            //走势图
            pathshow: "pathshow",
            //显示走势

            KenoActive: "KenoActive",
            //活动
            Kenowh: "Kenowh",
            //问号

            KenoChat: "Kenolt",
            //聊天框

            Kenojl: "Kenojl",
            //记录

            KenoyzNum: "KenoyzNum",
            //押注数量
            KenoPool: "KenoPool",
            //大奖按钮

            KenoJackpotHistory: "KenoJackpotHistory",
            //大奖记录
            KenochatRecordSwitch: "KenochatRecordSwitch" //聊天记录切换
          };
          //大小子游戏
          this.protocolDx = {
            //游戏流程
            getConfig: "dx/HD_info",
            //得到游戏配置
            dxXiazhu: "dx/doingBet",
            //下注大盘通知
            dxResult: "dx/result",
            //大小结果通知
            dxShowResult: "dx/checkout",
            //结算
            dxNextWait: "dx/waiteNext",
            //等待下一局
            dxPlay: "dx/HD_play",
            //下注操作
            dxBet: "dx/Bet",
            //下注的各种场景
            getRecord: "lobby/HD_QueryBetRecord",
            //押注记录
            history: "dx/HD_history",
            //历史走势
            getDetails: "dx/HD_details",
            //细节
            getPoolData: "dx/HD_jackpotHistory",
            //大奖记录
            backBet: "dx/refund",
            //返回

            curRoundBet: "dx/HD_CurRoundBet",
            //当局下注数据

            //游戏按钮
            closeDxGame: "closeDxGame",
            //关闭子游戏
            dxCloseChat: "dxCloseChat",
            //关闭聊天窗口
            dxSendChat: "dxSendChat",
            //发送消息
            dxRecord: "dxRecord",
            //自己的押注记录
            pathList: "pathList",
            //走势图
            pathshow: "pathshow",
            //显示走势

            dxActive: "dxActive",
            //活动
            dxwh: "dxwh",
            //问号

            dxChat: "dxlt",
            //聊天框

            dxjl: "dxjl",
            //记录

            dxyzNum: "dxyzNum",
            //押注数量
            DxPool: "DxPool",
            //大奖按钮

            dxJackpotHistory: "dxJackpotHistory",
            //大奖记录
            dxchatRecordSwitch: "dxchatRecordSwitch" //聊天记录切换
          };

          this.protocolDxMD5 = {
            config: "bigSmallMD5/HD_info",
            bet: "bigSmallMD5/HD_play",
            // 下注
            history: "bigSmallMD5/HD_history",
            // 历史记录
            details: "bigSmallMD5/HD_details",
            // 详情
            roundBet: "bigSmallMD5/HD_CurRoundBet",
            // 下注
            curRoundGroup: "bigSmallMD5/dxCurBet",
            // 下注
            doingBet: "bigSmallMD5/doingBet",
            // 下注
            result: "bigSmallMD5/result",
            // 结果
            waitNext: "bigSmallMD5/waiteNext",
            // 等待
            checkOut: "bigSmallMD5/checkout",
            // 有下注才有的结果

            leave: "bigSmallMD5/HD_Leave",
            betInfo: "bigSmallMD5/HD_getBetInfo"
          };
          this.protocolDx3Min = {
            //游戏流程
            getConfig: "dx3Min/HD_info",
            //得到游戏配置
            dxXiazhu: "dx3Min/doingBet",
            //下注大盘通知
            dxResult: "dx3Min/result",
            //大小结果通知
            dxShowResult: "dx3Min/checkout",
            //结算
            dxNextWait: "dx3Min/waiteNext",
            //等待下一局
            dxPlay: "dx3Min/HD_play",
            //下注操作
            dxBet: "dx3Min/Bet",
            //下注的各种场景
            getRecord: "lobby/HD_QueryBetRecord",
            //押注记录
            history: "dx3Min/HD_history",
            //历史走势
            getDetails: "dx3Min/HD_details",
            //细节
            getPoolData: "dx3Min/HD_jackpotHistory",
            //大奖记录
            backBet: "dx3Min/refund",
            //返回

            curRoundBet: "dx3Min/HD_CurRoundBet",
            //当局下注数据

            //游戏按钮
            closeDx3MinGame: "closeDx3MinGame",
            //关闭子游戏
            dxCloseChat: "dx3MinCloseChat",
            //关闭聊天窗口
            dxSendChat: "dx3MinSendChat",
            //发送消息
            dxRecord: "dx3MinRecord",
            //自己的押注记录
            pathList: "3MinpathList",
            //走势图
            pathshow: "3Minpathshow",
            //显示走势

            dxActive: "dx3MinActive",
            //活动
            dxwh: "dx3Minwh",
            //问号

            dxChat: "dx3Minlt",
            //聊天框

            dxjl: "dx3Minjl",
            //记录

            dxyzNum: "dx3MinyzNum",
            //押注数量
            DxPool: "Dx3MinPool",
            //大奖按钮

            dxJackpotHistory: "dx3MinJackpotHistory",
            //大奖记录
            dxchatRecordSwitch: "dx3MinchatRecordSwitch",
            //聊天记录切换
            leave: "dx3Min/HD_Leave",
            betInfo: "dx3Min/HD_getBetInfo"
          };
          //Phom
          this.protocolPhom = {
            //网络协议
            config: "cardPhom/HD_GetHallInfo",
            //获取大厅的 房间信息
            enter: "cardPhom/HD_Enter",
            //进入房间 获取房间号
            autoEnter: "cardPhom/HD_AutoEnter",
            //自动进入
            exit: "cardPhom/HD_QuitTable",
            //退出房间
            rank: "cardPhom/HD_GetWinLoseRank",
            // 获取排行榜
            checkInRoom: "cardPhom/HD_CheckPlayerInGame",
            //检测是否再房间

            getEnterData: "cardPhom/HD_GetEnterData",
            //获取房间数据

            ready: "cardPhom/HD_Ready",
            //准备协议
            updatePlayerInfo: "cardPhom/HD_UpdatePlayerInfo",
            //刷新人物信息
            roomState: "cardPhom/HD_SwitchRoomState",
            //切换房间状态
            start: "cardPhom/HD_MasterStartGame",
            //房主开始游戏
            sendCard: "cardPhom/HD_StartGame",
            //发牌
            cardStatus: "cardPhom/HD_NotifyWaitingState",
            //个人状态

            sortCard: "cardPhom/HD_SortPoker",
            //整牌
            getCard: "cardPhom/HD_DrawPoker",
            //抓牌
            outCard: "cardPhom/HD_PutPoker",
            //出牌
            eatCard: "cardPhom/HD_EatPoker",
            //吃牌
            cardXf: "cardPhom/HD_PhomPoker",
            //下坟
            giveCard: "cardPhom/HD_GivePoker",
            //给牌
            moveCard: "cardPhom/HD_MovePoker",
            // 移动牌
            result: "cardPhom/HD_JieSuan",
            //结算
            invite: "cardPhom/HD_GameInvite",
            //邀请

            createRoom: "cardPhom/HD_CreateTable",
            // 创建房间
            scoreList: "cardPhom/HD_BaseScoreList",
            // 挡位
            addRoom: "cardPhom/HD_EnterPrivate",
            //加入房间
            privateRoomList: "cardPhom/HD_PrivateTables",
            // 私人房间列表

            kickOut: "cardPhom/HD_MasterKickOut",
            // 踢人

            chat: "cardPhom/HD_SendShortCut",
            goldNotEnough: "cardPhom/HD_BalanceNotEnough" //余额不足被踢
          };
          //鱼虾蟹
          this.protocolYxx = {
            //按钮事件
            YxxplayerInfo: "YxxplayerInfo",
            //人物信息

            yxxBetBtn: "yxxBetBtn",
            //下注
            yxxHaveBet: "yxxHaveBet",
            //确认下注
            yxxLastYz1: "yxxLastYz1",
            //上轮下注
            yxxLastYz2: "yxxLastYz2",
            //加倍下注
            YxxPublic: "YxxPublic",
            //所有玩家信息
            yxxrecord: "yxxrecord",
            yxxJackpotHistory: "yxxJackpotHistory",
            //大奖上下一条记录

            yxxchat: "yxxchat",
            //chat view
            yxxmenu: "yxxmenu",
            //menu view
            yxxBigrecord: "yxxBigrecord",
            //大奖按钮

            //网络事件
            // getInfo: "yxx/HD_info", //鱼虾蟹 房间配置
            // enterRoom: "yxx/HD_Enter", //加入房间
            // exitRoom: "yxx/HD_QuitTable", //退出房间
            // getBigPoolList: "yxx/HD_GetPrizeRecord", //获取大奖数据
            // getRecordDetails: "yxx/HD_GetResultsRecord", //获取开奖结果
            // getPlayerList: "yxx/HD_GetPlayerList", //获取玩家列表
            // checkInRoom: "yxx/HD_CheckPlayerInGame", //检查是否再房间

            sendShortCut: "yxx/HD_SendShortCut",
            //聊天
            updatePool: "yxx/HD_RefreshPrizePool" //刷新奖池
          };
          //色蝶
          this.protocolSd = {
            //色蝶大厅按钮事件
            backHall: "backHall",
            createRoom: "createRoom",
            joinRoom: "joinRoom",
            sdRecord: "sdRecord",
            sdHelp: "sdHelp",
            sdRank: "sdRank",
            sdChat: "sdchat",
            //chat view

            //按钮事件
            SdplayerInfo: "SdplayerInfo",
            //人物信息
            yxxmenu: "yxxmenu",
            //menu view
            yxxBetBtn: "yxxBetBtn",
            //下注
            yxxHaveBet: "yxxHaveBet",
            //确认下注
            yxxLastYz1: "yxxLastYz1",
            //上轮下注
            yxxLastYz2: "yxxLastYz2",
            //加倍下注
            SdPublic: "SdPublic",
            //显示全部人物信息

            //网络事件
            getInfo: "sd/HD_GetTableList",
            //鱼虾蟹 房间配置
            checkInRoom: "sd/HD_CheckPlayerInGame",
            //检查是否再房间
            enterRoom: "sd/HD_Enter",
            //加入房间
            startGame: "sd/HD_GetEnterData",
            //开始游戏 启动
            exitRoom: "sd/HD_QuitTable",
            //退出房间

            getPlayerList: "sd/HD_GetPlayerList",
            //获取玩家列表

            //手动请求，主动推送
            DoubleXZ: "sd/HD_DoubleXiaZhu",
            //加倍下注
            LastXZ: "sd/HD_LastXiaZhu",
            //上轮下注

            doingBet: "sd/HD_Bet",
            //普通下注

            //主动推送
            deskinfo: "sd/HD_UpdateTableInfo",
            //桌子信息  （奖池  下注池  倒计时 房间状态）进来的时候
            playerInfo: "sd/HD_UpdatePlayerList",
            //玩家信息变动

            updatePlayerNum: "sd/HD_UpdatePlayerNum",
            //刷新玩家人数
            updatePlayerStatus: "sd/HD_UpdatePlayerInfo",
            //刷新玩家状态

            updateRoomStatus: "sd/HD_SwitchRoomState",
            //刷新房间状态
            checkout: "sd/HD_Checkout",
            //更新结算状态

            sendShortCut: "sd/HD_SendShortCut",
            //聊天

            createTable: "sd/HD_CreateTableReq",
            //创建房间
            getScoreList: "sd/HD_GetBaseScoreList",
            //获取挡位

            audoEnter: "sd/HD_AutoEnter",
            betInfo: "sd/HD_BetList",
            md5Text: "sd/HD_Md5Ciphertext",
            history: "sd/HD_HistoryV2",
            openResult: "sd/HD_OpenResult" //更新结算状态
          };

          this.protocolVSd = {
            //色蝶大厅按钮事件
            backHall: "backHall",
            createRoom: "createRoom",
            joinRoom: "joinRoom",
            sdRecord: "sdRecord",
            sdHelp: "sdHelp",
            sdRank: "sdRank",
            sdChat: "sdchat",
            //chat view

            //按钮事件
            SdplayerInfo: "SdplayerInfo",
            //人物信息
            yxxmenu: "yxxmenu",
            //menu view
            yxxBetBtn: "yxxBetBtn",
            //下注
            yxxHaveBet: "yxxHaveBet",
            //确认下注
            yxxLastYz1: "yxxLastYz1",
            //上轮下注
            yxxLastYz2: "yxxLastYz2",
            //加倍下注
            SdPublic: "SdPublic",
            //显示全部人物信息

            //网络事件
            checkInRoom: "sdLive/HD_CheckPlayerInGame",
            //检查是否再房间
            enterRoom: "sdLive/HD_Enter",
            //加入房间
            startGame: "sdLive/HD_GetEnterData",
            //开始游戏 启动
            exitRoom: "sdLive/HD_QuitTable",
            //退出房间

            getPlayerList: "sdLive/HD_GetPlayerList",
            //获取玩家列表

            doingBet: "sdLive/HD_Bet",
            //普通下注
            updateRoomStatus: "sdLive/HD_SwitchRoomState",
            //刷新房间状态

            checkout: "sdLive/HD_Checkout",
            //更新结算状态

            playerInfo: "sdLive/HD_UpdatePlayerList",
            //玩家信息变动

            updatePlayerNum: "sdLive/HD_UpdatePlayerNum",
            //刷新玩家人数
            updatePlayerStatus: "sdLive/HD_GetSeatPlayer",
            //刷新玩家状态

            betInfo: "sdLive/HD_BetList",
            history: "sdLive/HD_History",
            openResult: "sdLive/HD_OpenResult" //更新结算状态
          };
          //骰宝
          this.protocolDice = {
            //骰宝大厅按钮事件
            // //按钮事件
            DiceplayerInfo: "SdplayerInfo",
            //人物信息
            yxxHaveBet: "yxxHaveBet",
            //确认下注
            DicePublic: "SdPublic",
            //显示全部人物信息

            //网络事件
            getInfo: "dice/HD_GetTableList",
            //鱼虾蟹 房间配置
            checkInRoom: "dice/HD_CheckPlayerInGame",
            //检查是否再房间
            enterRoom: "dice/HD_Enter",
            //加入房间
            startGame: "dice/HD_GetEnterData",
            //开始游戏 启动
            exitRoom: "dice/HD_QuitTable",
            //退出房间

            getPlayerList: "dice/HD_GetPlayerList",
            //获取玩家列表

            //手动请求，主动推送

            doingBet: "dice/HD_Bet",
            //普通下注

            //主动推送
            deskinfo: "dice/HD_UpdateTableInfo",
            //桌子信息  （奖池  下注池  倒计时 房间状态）进来的时候
            playerInfo: "dice/HD_UpdatePlayerList",
            //玩家信息变动

            updatePlayerNum: "dice/HD_UpdatePlayerNum",
            //刷新玩家人数
            updatePlayerStatus: "dice/HD_UpdatePlayerInfo",
            //刷新玩家状态

            updateRoomStatus: "dice/HD_SwitchRoomState",
            //刷新房间状态

            checkout: "dice/HD_Checkout",
            //更新结算状态

            sendShortCut: "dice/HD_SendShortCut",
            //聊天

            createTable: "dice/HD_CreateTableReq",
            //创建房间
            getScoreList: "dice/HD_GetBaseScoreList",
            //获取挡位

            audoEnter: "dice/HD_AutoEnter",
            betInfo: "dice/HD_BetList",
            md5Text: "dice/HD_Md5Ciphertext",
            history: "dice/HD_History",
            openResult: "dice/HD_OpenResult"
          };
          //slotLs/HD_info 龙神
          this.protocolLs = {
            //按钮 传输事件
            runButton: "runButton",
            //摇老虎机
            changeCoin: "changeCoin",
            //改变老虎机 硬币
            showBase: "showBase",
            //显示选择 低分板
            changeBase: "changeBase",
            //改变底分
            changetype: "changetype",
            //改变运行模式
            autoRun: "autoRun",
            //自动玩
            selectFb: "selectFb",
            //选择副本
            backHall: "backHall",
            //返回大厅
            help: "help",
            //帮助
            setting: "setting",
            //设置

            bigrecord: "bigrecord",
            //大奖按钮
            jackpotHistory: "jackpotHistory",
            //大奖上下一条记录

            "try": "try",
            //试玩

            sound: "sound"
          };
          //龙虎  仿照鱼虾蟹
          this.protocolLh = {
            //按钮事件
            btnPlayerInfo: "btnPlayerInfo",
            //人物信息
            yxxmenu: "yxxmenu",
            //menu view
            yxxBetBtn: "yxxBetBtn",
            //下注
            yxxLastYz1: "yxxLastYz1",
            //上轮下注
            yxxLastYz2: "yxxLastYz2",
            //加倍下注
            yxxrecord: "yxxrecord",
            yxxchat: "yxxchat",
            //chat view

            btnPublicInfo: "btnPublicInfo",
            bet: "lhbet",
            //网络事件
            getInfo: "cardLhd/HD_GetTableList",
            //鱼虾蟹 房间配置
            checkInRoom: "cardLhd/HD_CheckPlayerInGame",
            //检查是否再房间
            enterRoom: "cardLhd/HD_Enter",
            //加入房间
            startGame: "cardLhd/HD_GetEnterData",
            //开始游戏 启动
            exitRoom: "cardLhd/HD_QuitTable",
            //退出房间

            getPlayerList: "cardLhd/HD_GetPlayerList",
            //获取玩家列表

            //手动请求，主动推送
            DoubleXZ: "cardLhd/HD_DoubleXiaZhu",
            //加倍下注
            LastXZ: "cardLhd/HD_LastXiaZhu",
            //上轮下注

            doingBet: "cardLhd/HD_Bet",
            //普通下注

            //主动推送
            deskinfo: "cardLhd/HD_UpdateTableInfo",
            //桌子信息  （奖池  下注池  倒计时 房间状态）进来的时候
            playerInfo: "cardLhd/HD_UpdatePlayerList",
            //玩家信息变动

            updatePlayerNum: "cardLhd/HD_UpdatePlayerNum",
            //刷新玩家人数
            updatePlayerStatus: "cardLhd/HD_UpdatePlayerInfo",
            //刷新玩家状态

            updateRoomStatus: "cardLhd/HD_SwitchRoomState",
            //刷新房间状态
            checkout: "cardLhd/HD_Checkout",
            //更新结算状态

            sendShortCut: "cardLhd/HD_SendShortCut",
            //聊天

            createTable: "cardLhd/HD_CreateTableReq",
            //创建房间
            getScoreList: "cardLhd/HD_GetBaseScoreList",
            //获取挡位

            audoEnter: "cardLhd/HD_AutoEnter",
            betInfo: "cardLhd/HD_BetList",
            md5Text: "cardLhd/HD_Md5Ciphertext",
            history: "cardLhd/HD_History",
            openResult: "cardLhd/HD_OpenResult" //更新结算状态
          };
          //龙虎  仿照鱼虾蟹
          this.protocolLh2 = {
            //按钮事件
            btnPlayerInfo: "btnPlayerInfo",
            //人物信息
            yxxmenu: "yxxmenu",
            //menu view
            yxxBetBtn: "yxxBetBtn",
            //下注
            yxxLastYz1: "yxxLastYz1",
            //上轮下注
            yxxLastYz2: "yxxLastYz2",
            //加倍下注
            yxxrecord: "yxxrecord",
            yxxchat: "yxxchat",
            //chat view

            btnPublicInfo: "btnPublicInfo",
            bet: "lhbet",
            //网络事件
            getInfo: "cardLhd2/HD_GetTableList",
            //鱼虾蟹 房间配置
            checkInRoom: "cardLhd2/HD_CheckPlayerInGame",
            //检查是否再房间
            enterRoom: "cardLhd2/HD_Enter",
            //加入房间
            startGame: "cardLhd2/HD_GetEnterData",
            //开始游戏 启动
            exitRoom: "cardLhd2/HD_QuitTable",
            //退出房间

            getPlayerList: "cardLhd2/HD_GetPlayerList",
            //获取玩家列表

            //手动请求，主动推送
            DoubleXZ: "cardLhd2/HD_DoubleXiaZhu",
            //加倍下注
            LastXZ: "cardLhd2/HD_LastXiaZhu",
            //上轮下注

            doingBet: "cardLhd2/HD_Bet",
            //普通下注

            //主动推送
            deskinfo: "cardLhd2/HD_UpdateTableInfo",
            //桌子信息  （奖池  下注池  倒计时 房间状态）进来的时候
            playerInfo: "cardLhd2/HD_UpdatePlayerList",
            //玩家信息变动

            updatePlayerNum: "cardLhd2/HD_UpdatePlayerNum",
            //刷新玩家人数
            updatePlayerStatus: "cardLhd2/HD_UpdatePlayerInfo",
            //刷新玩家状态

            updateRoomStatus: "cardLhd2/HD_SwitchRoomState",
            //刷新房间状态
            checkout: "cardLhd2/HD_Checkout",
            //更新结算状态

            sendShortCut: "cardLhd2/HD_SendShortCut",
            //聊天

            createTable: "cardLhd2/HD_CreateTableReq",
            //创建房间
            getScoreList: "cardLhd2/HD_GetBaseScoreList",
            //获取挡位

            audoEnter: "cardLhd2/HD_AutoEnter",
            betInfo: "cardLhd2/HD_BetList",
            md5Text: "cardLhd2/HD_Md5Ciphertext",
            history: "cardLhd2/HD_History",
            openResult: "cardLhd2/HD_OpenResult" //更新结算状态
          };

          this.protocolThirteen = {
            config: "cardSss/HD_GetHallInfo",
            //获取大厅的 房间信息
            enter: "cardSss/HD_Enter",
            //进入房间 获取房间号
            autoEnter: "cardSss/HD_AutoEnter",
            //自动进入
            exit: "cardSss/HD_QuitTable",
            //退出房间
            rank: "cardSss/HD_GetWinLoseRank",
            // 获取排行榜
            getEnterData: "cardSss/HD_GetEnterData",
            //获取房间数据
            ready: "cardSss/HD_Ready",
            //准备协议
            updatePlayerInfo: "cardSss/HD_UpdatePlayerInfo",
            //刷新人物信息
            roomState: "cardSss/HD_SwitchRoomState",
            //切换房间状态
            start: "cardSss/HD_MasterStartGame",
            //房主开始游戏
            showPoker: "cardSss/HD_ShowPoker",
            //发牌
            result: "cardSss/HD_JieSuan",
            //结算
            sendCard: "cardSss/HD_StartGame",
            //发牌
            sort: "cardSss/HD_SortPoker",
            pokerType: "cardSss/HD_GetPokerType",
            finishDeal: "cardSss/HD_FinishDeal"
          };
          //财神到老虎机
          this.protocolCsd = {
            //按钮事件
            CsdBack: "CsdBack",
            //返回
            CsdRule: "CsdRule",
            //规则
            CsdSetting: "CsdSetting",
            //设置
            CsdLine: "CsdLine",
            //line type
            CsdCoin: "CsdCoin",
            //coin type
            CsdRunType: "CsdRunType",
            // run type
            CsdRunBtn: "CsdRunBtn",
            //run
            CsdAutoRun: "CsdAutoRun",
            //自动玩
            CsdSelectBonus: "CsdSelectBonus",
            //bonus 选择图案
            CsdSelectBsBtn: "CsdSelectBsBtn",
            //bonus 选择倍数
            CsdTryBtn: "CsdTryBtn",
            //试玩
            CsdSelectMiniBtn: "CsdSelectMiniBtn",
            //选择mini
            CsdMini: "CsdMini",
            //miniGame

            CsdBigrecord: "bigrecord",
            //大奖按钮
            CsdJackpotHistory: "jackpotHistory",
            //大奖上下一条记录
            sound: "sound"
          };
          this.initServer();
        }
        var _proto = ConfigManager.prototype;
        _proto.initServer = function initServer() {
          this.setHttpAdr("http://192.168.1.115:8080");
        };
        _proto.getCreateAndEnterUrl = function getCreateAndEnterUrl() {
          return "/api/v1/test/createAndEnter";
        };
        ConfigManager.getInstance = function getInstance() {
          if (!this._instance) {
            this._instance = new ConfigManager();
          }
          return this._instance;
        };
        // /**聊天协议 */
        // protoChat = {
        //     /**百家乐 */
        //     bjl: "bjl/HD_SendShortCut",
        //     /**龙虎 */
        //     cardLhd: "cardLhd/HD_SendShortCut",
        //     cardLhd2: "cardLhd2/HD_SendShortCut",
        //     /**鱼虾蟹 */
        //     yxx: "yxx/HD_SendShortCut",
        //     /**色碟 */
        //     sd: "sd/HD_SendShortCut",
        //     /**三公 */
        //     cardLieng: "cardLieng/HD_SendShortCut",
        //     cardPhom: "cardPhom/HD_SendShortCut",
        //     dice: "dice/HD_SendShortCut",
        // };
        _proto.setHttpAdr = function setHttpAdr(httphost, cdnHost) {
          this.httpHost = httphost;
        };
        _proto.checkHttpAdr = function checkHttpAdr() {
          this._webHostIndex++;
          if (this._webHostIndex > this.webHostList.length) {
            return false;
          } else {
            var webHost = this.webHostList[this._webHostIndex];
            this.setHttpAdr(webHost);
            return true;
          }
        };
        _proto.setSocketAdr = function setSocketAdr(scoketHost, port) {
          if (port === void 0) {
            port = 9002;
          }
          this.scoketHost = scoketHost;
          this.scoketPort = port;
        };
        _createClass(ConfigManager, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new ConfigManager();
            }
            return this._instance;
          }
        }]);
        return ConfigManager;
      }());
      ConfigManager._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ContentEx.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ContentTypeEx.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, Enum, _decorator, Node, UITransform, UIOpacity, v3, Component, ContentTypeEx;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
      UIOpacity = module.UIOpacity;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      ContentTypeEx = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "3ae8aIj0ipD04jNkekCJ9lq", "ContentEx", undefined);

      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      var GameContentType = /*#__PURE__*/function (GameContentType) {
        GameContentType[GameContentType["BOTTOM"] = 0] = "BOTTOM";
        GameContentType[GameContentType["BG"] = 1] = "BG";
        GameContentType[GameContentType["BTN"] = 10] = "BTN";
        GameContentType[GameContentType["BTN2"] = 11] = "BTN2";
        GameContentType[GameContentType["SPRITE"] = 50] = "SPRITE";
        GameContentType[GameContentType["SPRITE2"] = 51] = "SPRITE2";
        GameContentType[GameContentType["SPRITE3"] = 52] = "SPRITE3";
        GameContentType[GameContentType["LABEL"] = 100] = "LABEL";
        GameContentType[GameContentType["LABEL2"] = 101] = "LABEL2";
        GameContentType[GameContentType["LABEL3"] = 102] = "LABEL3";
        GameContentType[GameContentType["TOP"] = 9999] = "TOP";
        return GameContentType;
      }(GameContentType || {});
      var _cc$_decorator = _decorator,
        ccclass = _cc$_decorator.ccclass,
        property = _cc$_decorator.property,
        menu = _cc$_decorator.menu;
      /**
       * 扩展列表管理
       * 重新组织列表子节点树
       */
      var ContentEx = exports('default', (_dec = menu("tools/ContentEx"), _dec2 = property({
        type: Enum(GameContentType)
      }), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_cc$Component) {
        _inheritsLoose(ContentEx, _cc$Component);
        function ContentEx() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _cc$Component.call.apply(_cc$Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mgrType", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ContentEx.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.reload = function reload() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.mgrType), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
            var name = "" + i.toString();
            if (!this.node.getChildByName(name)) {
              var node = new Node(name);
              node.addComponent(UITransform);
              node.addComponent(UIOpacity);
              this.node.addChild(node);
            }
          }
        };
        _proto.findChild = function findChild(name, node) {
          if (!node) {
            node = this.node;
          }
          var children = node.children;
          for (var _iterator2 = _createForOfIteratorHelperLoose(children), _step2; !(_step2 = _iterator2()).done;) {
            var i = _step2.value;
            if (i.name === name) {
              return i;
            }
            var obj = this.findChild(name, i);
            if (obj) {
              return obj;
            }
          }
          return null;
        };
        _proto.organize = function organize(node) {
          if (!node) {
            node = this.node;
          }
          var children = node.children;
          var length = children.length;
          for (var i = length - 1; i >= 0; i--) {
            var child = children[i];
            this.organize(child);
            var comp = child.getComponent(ContentTypeEx);
            if (comp) {
              var _i = comp.mgrType;
              var name = "" + _i.toString();
              var father = this.node.getChildByName(name);
              if (father) {
                var pos = child.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0));
                if (child.parent.name == name) {
                  continue;
                }
                var scale = child.parent.scale;
                child.parent = null;
                father.addChild(child);
                var position = father.getComponent(UITransform).convertToNodeSpaceAR(pos);
                child.position = position;
                // child.scale = scale;
              }
            }
          }
        };

        return ContentEx;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "mgrType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ContentExx.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './EventManager.ts'], function (exports) {
  var _inheritsLoose, cclegacy, isValid, rect, UITransform, v3, sp, GameDef, EventManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      isValid = module.isValid;
      rect = module.rect;
      UITransform = module.UITransform;
      v3 = module.v3;
      sp = module.sp;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bce3cHpLQRMqY8h4jzNaGh5", "ContentExx", undefined);
      var ContentExx = exports('ContentExx', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(ContentExx, _GameDef$BaseSington);
        function ContentExx() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          //    /////////////////////////////////////////////////////////////////////
          //    //控制骨骼 显隐
          _this._scrollView = null;
          _this._skeList = [];
          return _this;
        }
        var _proto = ContentExx.prototype;
        _proto.skeletonCtrl = function skeletonCtrl() {
          var _this2 = this;
          if (!isValid(this._scrollView)) {
            return;
          }
          var viewRect = rect(0, -500, this._scrollView.getComponent(UITransform).width, 1000);
          this._skeList.forEach(function (skeNode) {
            if (!isValid(skeNode.node)) {
              return;
            }
            var curPos = _this2._scrollView.getComponent(UITransform).convertToNodeSpaceAR(skeNode.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0)));
            var curRect = rect(curPos.x - skeNode.node.getComponent(UITransform).width / 2.0, curPos.y - skeNode.node.getComponent(UITransform).height / 2.0, skeNode.node.getComponent(UITransform).width, skeNode.node.getComponent(UITransform).height);
            skeNode.node.active = viewRect.containsRect(curRect) || viewRect.intersects(curRect);
          });
        };
        _proto.doSkeletonCtrl = function doSkeletonCtrl(scrollView, content) {
          var _this3 = this;
          if (!scrollView || !content) {
            return;
          }
          this._scrollView = scrollView;
          this._skeList = [];
          content.walk(function (node) {
            var c_sp = node.getComponent(sp.Skeleton);
            if (c_sp) {
              _this3._skeList.push(c_sp);
            }
          }, function (node) {
            _this3.skeletonCtrl();
          });
          do {
            this._scrollView.off("scrolling");
            this._scrollView.on("scrolling", function (event) {
              _this3.skeletonCtrl();
            });
            EventManager.getInstance().off("resize", this.delayCtrl, this);
            //            // EventManager.getInstance().on("resize", this.skeletonCtrl, this);
            EventManager.getInstance().on("resize", this.delayCtrl, this);
          } while (false);
        };
        _proto.delayCtrl = function delayCtrl() {
          var _this4 = this;
          setTimeout(function () {
            _this4.skeletonCtrl();
          }, 0.1);
        }
        //    ////////////////////////////////////////////////////////////////////
        ;

        return ContentExx;
      }(GameDef.BaseSington()));

      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import { GameDef } from "../GameDef";
      // import EventManager from "../manager/EventManager";
      // /**
      //  * 类似 ContentEx 扩展 自己添加控制模块
      //  */
      // export class ContentExx extends GameDef.BaseSington<ContentExx>() {
      //     /////////////////////////////////////////////////////////////////////
      //     //控制骨骼 显隐
      //     private _scrollView: cc.Node = null;
      //     private _skeList: sp.Skeleton[] = [];
      //     private skeletonCtrl() {
      //         if (!cc.isValid(this._scrollView)) {
      //             return;
      //         }
      //         let viewRect = cc.rect(0, -500, this._scrollView.width, 1000);
      //         this._skeList.forEach((skeNode) => {
      //             if (!cc.isValid(skeNode.node)) {
      //                 return;
      //             }
      //             let curPos = this._scrollView.convertToNodeSpaceAR(skeNode.node.convertToWorldSpaceAR(cc.v2(0, 0)));
      //             let curRect = cc.rect(curPos.x - skeNode.node.width / 2.0, curPos.y - skeNode.node.height / 2.0, skeNode.node.width, skeNode.node.height);
      //             skeNode.node.active = viewRect.containsRect(curRect) || viewRect.intersects(curRect);
      //         });
      //     }
      //     doSkeletonCtrl(scrollView: cc.Node, content: cc.Node): void {
      //         if (!scrollView || !content) {
      //             return;
      //         }
      //
      //         this._scrollView = scrollView;
      //         this._skeList = [];
      //
      //         content.walk(
      //             (node: cc.Node) => {
      //                 let c_sp = node.getComponent(sp.Skeleton);
      //                 if (c_sp) {
      //                     this._skeList.push(c_sp);
      //                 }
      //             },
      //             (node: cc.Node) => {
      //                 this.skeletonCtrl();
      //             }
      //         );
      //
      //         do {
      //             this._scrollView.off("scrolling");
      //             this._scrollView.on("scrolling", (event) => {
      //                 this.skeletonCtrl();
      //             });
      //
      //             EventManager.getInstance().off("resize", this.delayCtrl, this);
      //             // EventManager.getInstance().on("resize", this.skeletonCtrl, this);
      //             EventManager.getInstance().on("resize", this.delayCtrl, this);
      //         } while (false);
      //     }
      //     delayCtrl() {
      //         setTimeout(() => {
      //             this.skeletonCtrl();
      //         }, 0.1);
      //     }
      //
      //     ////////////////////////////////////////////////////////////////////
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ContentTypeEx.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, Enum, _decorator, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "9140b4YWDdCc6rkijFuSHJi", "ContentTypeEx", undefined);
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      var GameContentType = exports('GameContentType', /*#__PURE__*/function (GameContentType) {
        GameContentType[GameContentType["BOTTOM"] = 0] = "BOTTOM";
        GameContentType[GameContentType["BG"] = 1] = "BG";
        GameContentType[GameContentType["BTN"] = 10] = "BTN";
        GameContentType[GameContentType["BTN2"] = 11] = "BTN2";
        GameContentType[GameContentType["SPRITE"] = 50] = "SPRITE";
        GameContentType[GameContentType["SPRITE2"] = 51] = "SPRITE2";
        GameContentType[GameContentType["SPRITE3"] = 52] = "SPRITE3";
        GameContentType[GameContentType["LABEL"] = 100] = "LABEL";
        GameContentType[GameContentType["LABEL2"] = 101] = "LABEL2";
        GameContentType[GameContentType["LABEL3"] = 102] = "LABEL3";
        GameContentType[GameContentType["TOP"] = 9999] = "TOP";
        return GameContentType;
      }({}));
      var _cc$_decorator = _decorator,
        ccclass = _cc$_decorator.ccclass,
        property = _cc$_decorator.property,
        menu = _cc$_decorator.menu,
        disallowMultiple = _cc$_decorator.disallowMultiple;
      /**
       * 列表子节点类型组件
       */
      var ContentTypeEx = exports('default', (_dec = menu("tools/ContentTypeEx"), _dec2 = property({
        type: Enum(GameContentType)
      }), ccclass(_class = disallowMultiple(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_cc$Component) {
        _inheritsLoose(ContentTypeEx, _cc$Component);
        function ContentTypeEx() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _cc$Component.call.apply(_cc$Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mgrType", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ContentTypeEx.prototype;
        _proto.onLoad = function onLoad() {};
        return ContentTypeEx;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "mgrType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return GameContentType.BG;
        }
      }), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cryptojs.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bfa5bkGfKRJ/JskNtV+EH1N", "cryptojs", undefined);
      var cryptojs = exports('default', /*#__PURE__*/function () {
        function cryptojs() {}
        cryptojs.encrypt = function encrypt(word) {
          var key = CryptoJS.enc.Utf8.parse(this.key);
          var iv = CryptoJS.enc.Utf8.parse(this.iv);
          var srcs = CryptoJS.enc.Utf8.parse(word);
          // 加密模式为CBC，补码方式为PKCS5Padding（也就是PKCS7）
          var encrypted = CryptoJS.AES.encrypt(srcs, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          });

          //返回base64
          return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
        };
        cryptojs.decrypt = function decrypt(word) {
          var key = CryptoJS.enc.Utf8.parse(this.key);
          var iv = CryptoJS.enc.Utf8.parse(this.iv);
          var base64 = CryptoJS.enc.Base64.parse(word);
          var src = CryptoJS.enc.Base64.stringify(base64);

          // 解密模式为CBC，补码方式为PKCS5Padding（也就是PKCS7）
          var decrypt = CryptoJS.AES.decrypt(src, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          });
          var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
          return decryptedStr.toString();
        };
        cryptojs.httpEncrypt = function httpEncrypt(word) {
          var key = CryptoJS.enc.Utf8.parse(this.httpKey);
          var iv = CryptoJS.enc.Utf8.parse(this.httpIv);
          var srcs = CryptoJS.enc.Utf8.parse(word);
          // 加密模式为CBC，补码方式为PKCS5Padding（也就是PKCS7）
          var encrypted = CryptoJS.AES.encrypt(srcs, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          });

          //返回base64
          return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
        };
        cryptojs.httpDecrypt = function httpDecrypt(word) {
          var key = CryptoJS.enc.Utf8.parse(this.httpKey);
          var iv = CryptoJS.enc.Utf8.parse(this.httpIv);
          var base64 = CryptoJS.enc.Base64.parse(word);
          var src = CryptoJS.enc.Base64.stringify(base64);

          // 解密模式为CBC，补码方式为PKCS5Padding（也就是PKCS7）
          var decrypt = CryptoJS.AES.decrypt(src, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          });
          var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
          return decryptedStr.toString();
        };
        return cryptojs;
      }());
      cryptojs.key = "12345678abcdefgh";
      cryptojs.iv = "12345678abcdefgh";
      cryptojs.httpKey = "hj7x89HayuBI0456cddb0b864f79e5dd";
      cryptojs.httpIv = "NIfba95GUY86Gfgh";
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DataManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ProxyMgr.ts', './GameDef.ts', './ConfigManager.ts', './EventManager.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, assetManager, SpriteFrame, ProxyBase, GameDef, ConfigManager, EventManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      ProxyBase = module.ProxyBase;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "373abJqfRdDboJIa4ri0vDh", "DataManager", undefined);
      var UserProxyEvent = exports('UserProxyEvent', /*#__PURE__*/function (UserProxyEvent) {
        UserProxyEvent["CHANGE_GOLD"] = "changeGold";
        UserProxyEvent["CHANGE_Head"] = "changeHead";
        return UserProxyEvent;
      }({}));
      var UserKey = exports('UserKey', /*#__PURE__*/function (UserKey) {
        UserKey["AVATAR"] = "Avatar";
        UserKey["GOLD"] = "gold";
        UserKey["OID"] = "Oid";
        UserKey["GAMETYPE"] = "gameType";
        UserKey["NICKNAME"] = "NickName";
        UserKey["GradeCode"] = "GradeCode";
        UserKey["TOKEN"] = "AccessToken";
        UserKey["VISITOR_ID"] = "visitorId";
        UserKey["PHONE"] = "Phone";
        UserKey["INVITE_URL"] = "inviteUrl";
        UserKey["SIGN"] = "signature";
        UserKey["PLATFORM"] = "platform";
        UserKey["ACCOUNT"] = "Account";
        UserKey["CURL"] = "Curl";
        UserKey["TURL"] = "Turl";
        UserKey["CURRENCY_MULTIPLIER"] = "CURRENCY_MULTIPLIER";
        UserKey["CURRENCY_SYMBOL"] = "CURRENCY_SYMBOL";
        return UserKey;
      }({}));

      //数据管理器，主管用户数据 游戏数据等
      var DataManager = exports('default', /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(DataManager, _ProxyBase);
        function DataManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.gameID = GameDef.eGameID.gameID_none;
          _this.userData = {};
          //  "Oid":"5fb760a1678182c0ade7808a",//用户ID
          //   "ShowId":25842,//用户显示ID，仅做显示使用
          //   "Account":"test",//登录账号
          //   "NickName":"用户25842",
          //   "Avatar":"",
          //   "Area":0,
          //   "Phone":"",
          //   "Type":1,//用户类型， 1 正常玩家
          //   "CreateTime":"2020-11-20T13:22:25.842+07:00",
          //   "UpdateTime":"2020-11-20T13:22:25.842+07:00"
          _this.isTry = false;
          _this.isFree = false;
          _this.isAuto = false;
          _this.showPopNotify = false;
          _this._isChangeGOLD = true;
          _this.serverID = null;
          _this.notifyList = [];
          _this.notifyListPop = [];
          _this.notifyListChat = [];
          _this.loadRemoteMap = {};
          _this.localHead = {};
          return _this;
        }
        var _proto = DataManager.prototype;
        _proto.init = function init() {
          this.initRecv();
        };
        _proto.loadRemote = function loadRemote(url, options, onComplete) {
          return new Promise(function (resolve, project) {
            var mSpriteFrame = DataManager.instance.loadRemoteMap[url];
            if (mSpriteFrame) {
              resolve(mSpriteFrame);
            } else {
              assetManager.loadRemote(url, options, function (err, tex) {
                if (!err && tex) {
                  DataManager.instance.loadRemoteMap[url] = SpriteFrame.createWithImage(tex);
                  var spriteFrame = DataManager.instance.loadRemoteMap[url];
                  spriteFrame.packable = false;
                  resolve(spriteFrame);
                } else {
                  project(err);
                }
              });
            }
          });
        };
        _proto.recvData = function recvData(data) {
          // console.log("recvData", data);
          switch (data.cmd) {
            case ConfigManager.getInstance().protocolHall.getWallet:
              this.setUserDataForKey(UserKey.GOLD, data.Data.wallet.VndBalance);
              if (this._isChangeGOLD) {
                this.emit(UserProxyEvent.CHANGE_GOLD);
              }
              break;
            case ConfigManager.getInstance().protocolHall.pushWallet:
              this.setUserDataForKey(UserKey.GOLD, data.Wallet.VndBalance);
              if (this._isChangeGOLD) {
                this.emit(UserProxyEvent.CHANGE_GOLD);
              }
              break;
          }
        };
        _proto.initRecv = function initRecv() {
          //监听网络事件
          // EventManager.getInstance().on(ConfigManager.getInstance().protocolHall.getWallet, this.recvData, this);
          // EventManager.getInstance().on(ConfigManager.getInstance().protocolHall.pushWallet, this.recvData, this);
        };
        _proto.registSocketEvent = function registSocketEvent() {
          EventManager.getInstance().on(ConfigManager.getInstance().protocolHall.getWallet, this.recvData, this);
          EventManager.getInstance().on(ConfigManager.getInstance().protocolHall.pushWallet, this.recvData, this);
          //
        };

        _proto.removeSocketEvent = function removeSocketEvent() {};
        _proto.setUserDataForKey = function setUserDataForKey(key, value) {
          this.userData[key] = value;
        };
        _proto.setUserData = function setUserData(data) {
          var keys = Object.keys(data);
          for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
            var i = _keys[_i];
            this.userData[i] = data[i];
          }
        };
        _proto.getUserDataForKey = function getUserDataForKey(key) {
          if (typeof this.userData[key] == "undefined") {
            return null;
          } else {
            return this.userData[key];
          }
        };
        _proto.setfree = function setfree(free //是否副本
        ) {
          this.isFree = free;
        };
        _proto.getfree = function getfree() {
          return this.isFree;
        };
        _proto.setTry = function setTry(data //是否试玩
        ) {
          this.isTry = data;
        };
        _proto.getTry = function getTry() {
          return this.isTry;
        };
        _proto.setAuto = function setAuto(auto //是否自动
        ) {
          this.isAuto = auto;
        };
        _proto.getAuto = function getAuto() {
          return this.isAuto;
        };
        _proto.checkEnterGame = function checkEnterGame() {
          var gametype = this.getUserDataForKey(UserKey.GAMETYPE);
          if (gametype) {
            EventManager.getInstance().dispatch(ConfigManager.getInstance().eventTransform.checkGame, gametype);
            EventManager.getInstance().dispatch(ConfigManager.getInstance().eventTransform.showGameContent, gametype);
            this.setUserDataForKey(UserKey.GAMETYPE, null);
          }
        };
        _createClass(DataManager, [{
          key: "isChangeGold",
          get: function get() {
            return this._isChangeGOLD;
          },
          set: function set(isChange) {
            this._isChangeGOLD = isChange;
          }
        }, {
          key: "nickName",
          get: function get() {
            return this.userData["NickName"];
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new DataManager("UserProxy");
            }
            return this._instance;
          }
        }]);
        return DataManager;
      }(ProxyBase));
      DataManager._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/directorEx.ts", ['cc'], function () {
  var cclegacy, Director, assetManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Director = module.Director;
      assetManager = module.assetManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2857bisdUtCDa0bL5vWjPEg", "directorEx", undefined);
      (function () {
        Object.assign(Director.prototype, {
          loadSceneWithProgress: function loadSceneWithProgress(sceneName, onProgress, onLaunched, onUnloaded) {
            var _this = this;
            if (this._loadingScene) {
              return false;
            }
            var bundle = assetManager.bundles.find(function (bundle) {
              return !!bundle.getSceneInfo(sceneName);
            });
            if (bundle) {
              this.emit(Director.EVENT_BEFORE_SCENE_LOADING, sceneName);
              this._loadingScene = sceneName;
              // eslint-disable-next-line no-console
              console.time("LoadScene " + sceneName);
              bundle.loadScene(sceneName, onProgress, function (err, scene) {
                // eslint-disable-next-line no-console
                console.timeEnd("LoadScene " + sceneName);
                _this._loadingScene = "";
                if (err) {
                  if (onLaunched) {
                    onLaunched(err);
                  }
                } else {
                  _this.runSceneImmediate(scene, onUnloaded, onLaunched);
                }
              });
              return true;
            } else {
              return false;
            }
          }
        });
      })();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/en.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "49548hqrpdCuKwJQBFEo9/i", "en", undefined);
      /*
       * @Author: huangww
       * @Date: 2021-09-16 16:34:18
       * @LastEditTime: 2021-11-17 15:03:10
       */
      var en = exports('en', {
        lang: "简体中文",
        test: "测试",
        10001: "Insufficient balance. Please recharge promptly.",
        //余额不足，请及时充值/
        10002: "One cannot bet on both sides",
        ///不能下注两边/
        10003: "Draw cards",
        ///选牌打/
        10004: "Bet placed successfully",
        ///下注成功/
        10005: "The betting flag has been raised!",
        //  /下注旗已结束/
        10007: "It is necessary to fill in.",
        ///必要填写/
        10008: "Minimum bet: 1K",
        ///下注最低1K/
        10009: "Please wait a moment.",
        ////// /请稍等/
        10010: "The game is in progress.",
        ///游戏进行中/
        10011: "Please select the chips.",
        // /请选择筹码/
        10012: "The game is in progress, so the limit cannot be adjusted.",
        // /游戏进行中不能调限额/
        10013: "To draw cards and play",
        ///要选牌打
        10014: "The hand was not played in accordance with the rules.",
        ///下牌不合规/
        10015: "Non-compliant",
        /////不合规/
        10016: "Playing cards in an improper manner",
        // /出牌不合规/
        10017: "Copy successful",
        ///复制成功/
        10018: "The old password cannot be left blank.",
        ///旧密码不能空白/
        10019: "The new password cannot be blank.",
        ///新密码不能空白/
        10020: "Please confirm your password.",
        ///请确认您的密码/
        10021: "Passwords do not match",
        ///密码不一致/
        10022: "Please enter your mobile phone number.",
        ///请输入手机号码/
        10023: "Sent successfully",
        ///发送成功/
        10024: "Please enter your mobile phone number.",
        // /  请输入手机号码/
        10025: "The confirmation code cannot be left blank.",
        // /确认码不能为空/
        10026: "Activation successful",
        ///激活成功/
        10027: "Password change successful",
        // /换密码成功/
        10028: "Conversion successful",
        // /转换成功/
        10029: "The nickname cannot be left blank.",
        // /昵称不能空白/
        10030: "Setup completed",
        ///设置成功/
        10031: "Network connection failed",
        // /网络连接不成功/
        10032: "The account number cannot be left blank.",
        // /账号不能空白/
        10033: "The password cannot be left blank.",
        // /密码不能空白/
        10034: "Passwords do not match",
        ///密码不一致/
        10035: "Please confirm your password.",
        // /请确认您的密码/
        10036: "Bank account set up successfully",
        //  /设置银行账号成功/
        10037: "Recharge command submitted successfully",
        //   /充值命令提交成功/
        10038: "Recharge successful",
        //  /充值成功/
        10039: "Incorrect entry of the amount",
        //  /填写金额错误/
        10040: "Please select the recharge amount.",
        //  /请选择充值金额/
        10041: "Please fill in the phone bill card SERI",
        //  /请填写话费卡SERI/
        10042: "Please enter the phone bill card number.",
        ////    /请填写话费卡号码/
        10043: "Please enter the redemption bonus number.",
        //   /请输入兑换奖金号码/
        10044: "Please wait a moment.",
        //  /请稍等/
        10045: "Please enter the correct amount.",
        // /请输入正确金额/

        10046: "PlayFriends is still preparing for your desired start.",
        // /玩友还在准备您想开始/
        10047: "The update has been successful. Please restart the game.",
        //  /已更新成功，请重启游戏/
        10048: "Server connection failed. Please try again.",
        ///服务器连接失败,请重试
        10049: "Server connection failed. Using the alternate address.",
        // /服务器连接失败,使用备用地址
        10050: "The network is busy. Please try again.",
        ///网络在忙请重试/
        10051: "Are you sure you want to log out?",
        ///您确定要登出/
        10052: "Profit cannot be converted",
        ///赢利不能转换/
        10053: "You have logged in on another device.\nPlease try to log in again.",
        // /您已在其他设备登录/---顶号
        10054: "The withdrawal request has been processed successfully. Please wait for the system to complete the processing.",
        //  /申请取款已成功，等系统处理/
        10055: "Deposit command submitted successfully",
        //  /存款命令提交成功/
        10056: "First recharge",
        //首次充值
        10057: "Please select the type.",
        //请选择类型
        10058: "Confirm to log in again, or cancel to exit.",
        // /您已在其他设备登录!\n确认则重新登录，取消则退出/
        10059: "Your game account has been deactivated.\nPlease try to log in again.",
        //账号失效
        10060: "VIP room: The minimum total bet must be more than 200,000.",
        //
        10061: "The upper limit for single-zone betting is 5 billion.",
        //
        10062: "Place the maximum bet on the top 5 areas",
        //

        10063: "VIP room, the minimum total bet must be greater than {0}",
        //
        10064: "Upper limit for single-zone bet {0}",
        //
        activeBank: "进入银行",
        dxgameTip: "退款 ",
        KenoGameTip: "HOÀN TIỀN CÂN CỬA ",
        commonCopy: "复制成功",
        recordPage: "页面",
        betedExitTip: "下注不能退出房间",
        //#region fishGame
        strLoadingTip: ["还有拉霸游戏...", "龙王驾临.百倍宝箱任您赢！",
        //龙王驾临.百倍宝箱任您赢！
        "拍摄了一个幸运袋来探索海洋的宝藏!", "散弹炮为你提供100发的免费子弹!", "Sjas.Cua的浓度对同时击倒鱼群很特别!"],
        LoadingType: {
          LoadRes: "资源加载中...",
          EnterRoom: "房间进入中..."
        },
        lsGame: {
          Commission: "奖金抽水:  "
        },
        fishTip: {
          gold: "余额不足，请及时充值!",
          //金币不足提示
          noAway: "T比赛正在进行中。 当子弹从池中消失时退出游戏.",
          //不能离开
          fdTip: "\u70B9\u51FB\u4EFB\u610F1\u4E2A\u798F\u888B\u83B7\u5F97\u5956\u52B1\uFF0C<color=#E9F902>{0}</color> \u79D2\u540E\u81EA\u52A8\u9886\u53D6" //福袋提示
        },

        chatErr1: "内容无效",
        chatErr2: "内容中数字不能超过6位",
        chatErr3: "余额不足，不能发送信息",
        allIn: "下注所有",
        chooseGold: "选择下注金额",
        newStart: "新的一局",
        dxgameTimeTip: "Trả tiền cân cửa",
        loadGameErr: "游戏加载错误",
        notOpenTip: "游戏未开放，敬请期待!",
        disableBet: "当前不能下注",
        blackListTip: "该游戏被限制，请尝试其他游戏",
        disableConnect: "The server is disconnected. Please check your network",
        checkVersion: "检测版本",
        downloading: "downloading...",
        moveHandTip: "移动盘子开奖!",
        kickOut: "确定要踢出房间吗?",
        kickOutTip: "您已被房主请出房间",
        diyTip: "已经存在相同筹码",
        diyFullTip: "最多添加${}个筹码",
        diyTipRemove: "是否移除该筹码?",
        helpPumping: "${} 奖金抽水为 ${}% ",
        devTip: "功能开发中,敬请期待!",
        activityRecvTip: "领取成功",
        activityRecvErr: "活动状态异常",
        netChangeTip: "线路切换成功，请耐心等待",
        chipTip: "请选择筹码",
        chipMainTip: "请先下注主区",
        redPackage: {
          wait: "未开始",
          start: "进行中",
          totalDay: "${} 用时",
          totalReward: "总奖励 đ ${}",
          hasReceive: "已领取",
          noReceiveTip: "未达到领取条件",
          noStart: "活动未开始"
        },
        activityErrCode: {
          30021: "重复领取",
          30027: "您访问的IP地址，参与活动的用户数量超过活动限制"
        },
        ipErrortip: "您访问的IP地址，参与活动的用户数量超过活动限制",
        phom: {
          all: "全部",
          four: "四人桌",
          si: "私人桌",
          man: "四人",
          goldNotEnough: "余额不足,自动退出房间",
          dian: "点"
        },
        lieng: {
          colseBuyIn: "游戏已开始，无法选择带入金额"
        },
        dice: {
          result: {
            0: "小",
            1: "大",
            2: "豹"
          }
        },
        thirdteen: {
          cardType: {
            0: "乌龙",
            1: "同花十三水",
            2: "十三水",
            3: "五对三条",
            4: "三同花",
            5: "三顺子",
            7: "六对半",
            8: "凑一色"
          }
        },
        lhvip: {
          type: {
            1: "龙",
            2: "虎",
            3: "平",
            4: "同花平"
          }
        },
        //#endregion

        //网络错误代码 提示
        errTip: {
          //------------  系统错误  -----------
          302: "You have logged in on another device",
          //AccountChanged
          401: "Illegal request. Access prohibited",
          //Forbidden
          402: "Illegal request",
          //Illegal
          500: "Internal error",
          //ServerError
          501: "The server is busy. Please try again later.",
          //ServerBusy

          10001: "Missing parameter key",
          //ErrParams
          10002: "-- Unknown error --FileOverMax",
          //FileOverMax
          10003: "The \"Action\" parameter is incorrect",
          //ActionNotFound
          10004: "There is an error in the payment of methodId. Please contact customer service",
          //PayMethodIdErr
          10005: "The quantity of beans is not within the allowable range",
          //DoudouAmountErr
          10006: "Please contact customer service.",
          //ConnectCustomerService
          10007: "This account does not allow this operation",
          //AccountNotAllow

          //------------- 一般功能错误  ------------
          20001: "This account already exists. Please log in directly",
          //AccountExisted
          20002: "The account does not exist.",
          //AccountNotExist
          20003: "Account or password is incorrect",
          //PasswordErr
          20004: "The size parameter is incorrect.",
          //PageSizeErr
          20005: "The text messages are sent too frequently. Please try again later.",
          //SmsSentTooFast
          20006: "The verification code is incorrect. Please enter the correct verification code",
          //SmsCodeErr
          20007: "This mobile phone number has been bound",
          //PhoneAlreadyBind
          20008: "The format of the mobile phone number is incorrect",
          //PhoneFormatErr
          20009: "-- Unknown Error --UserAlreadyBind",
          //UserAlreadyBind
          20010: "You still need to bet on Doudou",
          //BetNotEnough
          20011: "Doudou is not within the permitted range",
          //AmountNotAllow
          20012: "-- Unknown Error --DataNotFind",
          //DataNotFind
          20013: "-- Unknown error --WalletPayErr",
          //WalletPayErr
          20014: "-- Unknown error --ChatGroupNotFind",
          //ChatGroupNotFind
          20015: "-- Unknown Error --NotAvailableSeat",
          //NotAvailableSeat
          20016: "This game is restricted. Please try other games",
          //GameDisable
          20017: "This game is restricted. Please try other games",
          //UserBlacklist

          30001: "Betting on this round of the game has been stopped. Please wait for the next round to start",
          //GameStopBet
          30002: "You can't press both sides simultaneously",
          //dxGameBetErr
          30003: "Your balance is insufficient. Please top it up first",
          //BalanceNotEnough
          30004: "You cannot leave the room after placing a bet",
          //XiaZhuCantQuit
          30005: "At least 5 characters. Pure numbers are not allowed. Symbols can only be in English and numbers",
          //NameFormatError
          30006: "It cannot contain Spaces and should be 6 to 16 characters long",
          //PwdFormatError

          30007: "-- Unknown error --",
          //

          30008: "Bets cannot be placed at present.",
          //CurCanXiaZhuError
          30009: "Not in the room",
          //NotInRoomError
          30010: "Rooms cannot be created.",
          //CantCreateTableError
          30011: "The original password is incorrect",
          //OldPwdError
          30012: "The two passwords are inconsistent",
          //PwdNotSameError
          30013: "The number of times you can change beans has reached the limit",
          //DouDouCountOverLimit
          30014: "Failed to claim",
          //ActivityReceiveError
          30015: "The sending time interval is too short",
          //TimeIntervalError
          30016: "It takes 20,000 Doudou to chat",
          //ChatYxbLimitError
          30017: "The commission balance is insufficient.",
          //AgentBalanceNotEnough
          30018: "The gift code is incorrect. Please enter the correct redemption code",
          //GiftCodeErr
          30019: "gift code has been used",
          //GiftCodeUsed
          30020: "The nickname already exists.",
          //NickNameExistError
          30021: "You have already bound it",
          //AlreadyBindBankCard
          30022: "Please bind the DouDou platform first",
          //NotBindBtCard
          30023: "This DouDou platform has been bound",
          //BtCardAlreadyBind
          30024: "Please enter a legal DouDou platform",
          //DouDouNumNotAllow
          30025: "Submission failed. You still have unprocessed DouDou orders",
          //UncompleteOrder
          30026: "Invalid card play",
          //InvalidPutPoker
          30027: "Invalid phom",
          //InvalidPhomPoker
          30028: "An invalid card is given",
          //InvalidGivePoker
          30029: "You cannot exit the room during the free game",
          //FreeGameCantQuit
          30030: "It is not possible to seize the market share at present",
          //CurGrabDealerError
          30031: "An order can only be submitted once within five minutes",
          //Order5MinuteOnce
          30032: "Companion accounts are not allowed to enter this game",
          //PlayAccountNotAllow
          30033: "Binding to the DouDou platform does not exist",
          //BindBankNotExist
          30034: "The DouDou platform has been used or filled in the wrong position",
          //NapTuDongError
          30035: "This DouDou deposit method is under maintenance",
          //ChargeProtectError
          30036: "You need to recharge DouDou first",
          //ActivityNeedChargeError
          30037: "The format on the DouDou platform is not allowed",
          //DouDouAccountNotAllow
          30038: "The DouDou platform is the same",
          //DouDouSameBt

          30039: "The minimum amount for DouDou is $1",
          //DouDouMinAmount
          30040: "Unknown lottery type",
          //InvalidLotteryCode
          30041: "Incorrect issue number",
          //LotteryNumberErr
          30042: "Gameplay error",
          //LotteryPlayErr
          30043: "The order code is incorrect",
          //BetCodeErr
          30044: "Betting cap",
          //BetLimit
          30045: "The room password is incorrect.",
          //

          30101: "Failed to create a user",
          //ApiCreateUserErr
          30102: "Third-party API error",
          //ApiErr
          30103: "Login to the third party failed.",
          //ApiLoginErr

          30200: "The room is fully occupied",
          //RoomPlayerNumLimit
          30201: "Insufficient points",
          //PointsNotEnough
          30202: "Please unlock first",
          //PleaseUnlockSafe
          30203: "Please activate the safe first",
          //PleaseActivationSafe
          30204: "The system has detected that due to your frequent registration of new accounts, we are now taking risk control measures against you. Account registration is prohibited. If you have any questions, please contact customer service",
          //RegisterLimit
          30205: "The game ends and you will automatically exit the room",
          //QuitRoomAfterOver
          30206: "Cancel exit room",
          //QuitRoomCancel
          30207: "You have been asked out of your room by the homeowner and will automatically exit after the game ends",
          //kick out tip

          30210: "",
          30211: "Visitors, bets are not supported for the time being"
        },
        gameName: {
          yxx: "鱼虾蟹",
          //鱼虾蟹
          sd: "色碟",
          //色碟
          guessBigSmall: "猜上下",
          //牌猜大小
          roshambo: "石头剪刀布",
          //石头剪刀布
          mini_poker: "迷你扑克",
          //迷你
          dx: "猜大小",
          //色子 大小
          slotLs: "龙神",
          //龙神
          slotCs: "财神到",
          //财神到
          bjl: "百家乐",
          //百家乐
          cardLhd: "龙虎斗",
          //龙虎斗
          fish: "捕鱼",
          //捕鱼
          cardLieng: "三公",
          lieng: "三公",
          cardPhom: "塔拉",
          bigSmallMD5: "大小MD5",
          dx3Min: "大小三分钟",
          slotFruit: "水果机",
          slotXy: "西游",
          dice: "骰宝",
          f35: "F35",
          slotGemstone: "宝石商人",
          slotMj: "麻将",
          slotVigorous: "劲爆777",
          slotSpringFestival: "大过年",
          cardLhd2: "龙虎斗2",
          slotBowl: "聚宝盆",
          slotCat: "招财猫",
          slotPoker: "超级王牌",
          slotBoxing: "拳王",
          slotGod: "赢财神",
          cardSss: "十三水",
          dxLive: "真人大小",
          yxxLive: "真人鱼虾蟹",
          sdLive: "真人色蝶",
          slotGoldenCity: "夺宝黄金城",
          slotFortuneRabbit: "金钱兔",
          slotFortuneTiger: "虎虎生财",
          slotFortuneMouse: "鼠鼠福福",
          slotFortuneOx: "十倍金牛",
          slotPiggyGold: "金猪招财",
          slotGaneshaGold: "福运象财神",
          slotGoldenEmpire: "黄金帝国",
          slotQueenOfBounty: "赏金女王",
          slotCaptainBounty: "海盗船长",
          slotNightCity: "夜上海",
          dxVip: "大小VIP",
          zpVip: "转盘",
          sdVip: "色蝶VIP",
          slotGoldenBook: "黄金之书",
          slotAlibaba: "阿里巴巴",
          keno: "基诺",
          blackJack: "21点",
          plinko: "飞碟",
          slotApotheosis: "封神",
          slotWildBountyShowdown: "赏金大对决",
          slotJLCS: "吉利财神",
          slotWinWinFishPrawnCrab: "赢鱼虾蟹",
          slotWildBandito: "亡灵大道",
          slotCocktailNights: "夜醉佳人",
          slotEmojiRiches: "表情",
          slotGemstone2: "宝石商人2",
          slotMahjongWays2: "麻将胡了2",
          racing: "极速赛车",
          slotKylin: "麒麟送宝",
          slotDreamsofMacau: "澳门豪梦",
          cardLhd3d: "龙虎斗VIP",
          slotChargeBuffalo: "牛牛冲锋",
          slotWildCoaster: "过山车",
          bjl3d: "百家乐 VIP" //百家乐VIP
        },

        gameType: {
          all: "ALL GAMES",
          pai: "GAME BÀI",
          slot: "SLOTS",
          scenes: "GẦN NHẤT"
        },
        gameResult: {
          //大小
          Tai: "大",
          Xiu: "小",
          //色碟
          Chan: "双",
          Le: "单",
          //骰宝
          Bao: "豹子",
          //百家乐
          Player: "闲",
          Tie: "和",
          Banker: "庄",
          PlayerPair: "闲双",
          BankerPair: "庄双",
          //龙虎
          Long: "龙",
          Ho: "虎",
          Hoa: "和",
          red: "红",
          //红
          white: "白",
          //白

          //鱼虾蟹
          xie: "蟹",
          lu: "鹿",
          xia: "虾",
          yu: "鱼",
          ji: "鸡",
          huLu: "葫芦",
          //keno
          jin: "金",
          mu: "木",
          shui: "水",
          huo: "火",
          tu: "土"
        },
        //pg
        "CaptainsBountyPayout": {
          "PayoutMainTitle": "Symbol Payout Values",
          "PayoutWild": "Wild Symbol",
          "PayoutScatter": "Scatter symbol",
          "Payout3_Title": "Winning Bet Lines"
        },
        "CaptainsBountyPayoutAndRulesShared": {
          "Rule1_14_Payout4_3": "After the payout of every round is made, all winning symbols will explode allowing the symbols above them to cascade down for a new round.",
          "Rule1_15_Payout4_4": "Additional winning combination will be tallied in every round until no more winning combination can be tallied.",
          "Rule1_17_Payout1_1": "Wild symbol substitutes for all symbols except Scatter symbol.",
          "Rule1_18_Payout1_2": "Wild symbol appears on reels 2, 3 and 4 only.",
          "Rule2_Payout2": "Multiplier",
          "Rule2_1_Payout2_1": "During any spins, all wins will be multiplied by the multiplier shown above the reels, starting with x1 in the first round.",
          "Rule2_2_Payout2_2": "Any win in the first round will increase the second round's multiplier to x2.",
          "Rule2_3_Payout2_3": "Any win in the second round will increase the third round's multiplier to x3.",
          "Rule2_4_Payout2_4": "Any win in the third round will increase the fourth round's (and beyond) multiplier to x5.",
          "Rule3_Payout_3": "Free Spins Feature",
          "Rule3_1_Payout3_1": "3 Scatter symbols appearing anywhere will trigger the Free Spins Feature with 10 free spins. Each additional Scatter symbol will trigger 5 more free spins.",
          "Rule3_2_Payout3_2": "During the Free Spins Feature, the multipliers above the reels will be increased to x3, x6, x9 and x15 respectively.",
          "Rule3_3_Payout3_3": "Free spins can be retriggered.",
          "Rule4_Payout_4": "Maximum Win",
          "Rule4_1_Payout4_1": "The maximum win amount is %{30000}x of the bet amount.",
          "Rule4_2_Payout4_2": "If the total win in the main game or the Free Spins Feature reaches %{30000}x of the bet amount, the spin ends."
        },
        "SlotRulesBetLineRelated": {
          "WinDetailBreakdown": "A bet line win in cash is equal to the value shown in the \"Paytable\" multiplied by the bet size and bet level.",
          "HighestWinIsPaid": "Only the highest win per bet line is paid.",
          "WinFromLeftmost": "Bet lines win if the winning symbols are in succession from the leftmost reel to the right.",
          "SimultanuousWin": "Simultaneous wins on different bet lines are added.",
          "SpinAction": "Tap to start spin at the current Bet Lines, Bet Size and Bet Level.",
          "PressSpaceAction": "Press the <Space> key to start spin at the current Bet Lines, Bet Size and Bet Level."
        },
        "CommonRulesShared": {
          "InGameCurrency": "The in-game currency is %{configuredValue}.",
          "CashWallet": "\"Cash Wallet\" displays the cash available for wager.",
          "WinShownInCash": "All wins shown in cash.",
          "BackAction": "Tap to leave the game and go back to the previous page.",
          "GameHistoryDescription": "Shows details of the previous games played. Scroll down to the end to load more records.",
          "GameHistoryActionWithIcon": "Tap<img src='game-rules-sprite game-rules-ic_nav_calender'/>to select the dates of games to be shown in History.",
          "ReturnToPlayerDescription": "The theoretical return to player (RTP) for this game is %{rtpValue}. This RTP represents the long-term statistical percentage of total stakes in the game that is paid out as winnings over time. The RTP value is calculated by dividing the total winnings by the total stakes from a simulation of numerous game rounds.",
          "AdditionInfoMalfunctionDescription": "Malfunction voids all pays and plays.",
          "AdditionInfoInactiveGameSessions": "The game will automatically return to its initial state after being idle for %{dayCount} days. Progress and status of any collection games, unfinished free games, and unfinished feature games etc will no longer be retained.",
          "AdditionInfoInactiveGameSessionsHour": "The game will automatically return to its initial state after being idle for %{hourCount} hours. Progress and status of any collection games, unfinished free games, and unfinished feature games etc will no longer be retained.",
          "AdditionInfoDisputeHistoryDescription": "In the event of disputes over game results, all game results that are shown in the game history page are absolute and final.",
          "AdditionInfoInactiveGameSessionsAlternate": "In the event that a game round is interrupted due to network disconnection, technical issues, or if the player intentionally exits, the game round will remain valid and will not be forfeited. The incomplete round will resume from the point of interruption during the player's next game session."
        },
        "CaptainsBountySymbolPopOut": {
          "ScatterDesription": "3 or more Scatter symbols appearing anywhere will trigger the Free Spins Feature.",
          "WildDescription": "Wild symbol substitutes for all symbols except Scatter symbol."
        },
        "History": {
          "HistoryMainPageTime": "Time",
          "HistoryMainSpinTypeTime": "Transaction",
          "HistoryMainPagePayout": "Bet",
          "HistoryMainPageWin": "Profit",
          "HistoryRecordTransaction": "Transaction",
          "HistoryRecordPayout": "Bet",
          "HistoryRecordWin": "Profit",
          "HistoryRecordTotalWin": "Win",
          "HistoryRecordBalance": "Balance",
          "HistoryCalendarDateRange": "Select Date Range",
          "HistoryCalenderToday": "Today",
          "HistoryCalenderWeek": "Last 7 days",
          "HistoryCalenderMonth": "Last 30 days",
          "HistoryCalenderCustom": "Custom",
          "HistoryCalenderStart": "Start",
          "HistoryCalenderEnd": "End",
          "HistoryCalendarCancel": "Cancel",
          "HistoryCalendarConfirm": "Confirm",
          "HistoryRetry": "Retry",
          "HistoryOK": "OK",
          "HistoryLoadMoreData": "Release to start loading",
          "HistoryLoadDataPull": "Pull up to load more",
          "HistoryAllRecordDisplayed": "All record(s) displayed",
          "HistoryMainTitle": "Game History",
          "HistoryLoading": "Loading",
          "HistoryNoHistory": "No Game History",
          "HistoryServerFail": "Server Error",
          "HistoryFailLoadTitle": "Query History Fail",
          "HistoryFailLoadSentence": "Please check your network settings and try again",
          "HistoryRecordMainTitle": "Spin Details",
          "HistoryRecordBack": "Back",
          "HistoryBarClose": "Close",
          "HistoryRecord": "Record",
          "HistoryRecords": "Records",
          "HistoryNormalSpin": "Normal Spin",
          "HistoryBetSize": "Bet Size",
          "HistoryBetLevel": "Bet Level",
          "HistoryPayout": "Payout",
          "HistoryNoWinning": "No Winning Combination",
          "HistoryDetailItemRoundLabel": "Round %{currCount}/%{maxCount}",
          "HistoryReplaySpin": "Replay Spin",
          "HistoryReplayRound": "Replay Round",
          "HistoryRecordsDelayed": "History records may take awhile to appear. Please come back later!",
          "HistoryTransactionIdCopied": "Transaction ID %{transactionId} has been copied to clipboard.",
          "HistoryCopy": "Copy",
          "HistoryProfile": "History",
          "HistoryProfileName": "Games",
          "HistoryProfileSpin": "Spin(s)",
          "HistoryTipsMultiplier": "Multiplier",
          "HistoryTipsWay": "Way(s)",
          "HistoryTipsSymbolCount": "Symbol Count",
          "HistoryTipsBetSize": "Bet Size",
          "HistoryTipsBetLevel": "Bet Level",
          "HistoryTipsPayout": "Symbol Payout Values",
          "HistoryVrfPopupTitle1": "Official and Genuine PG Games",
          "HistoryVrfPopupTitle2": "<Color>Verify exclusively with</Color>",
          "HistoryVrfPopupDesc1": "Press <Color>'Accept'</Color> to verify your Transaction ID,",
          "HistoryVrfPopupDesc2": "or press <Color>'Ignore'</Color> to skip the verification.",
          "HistoryVrfPopupIgnoreBtn": "Ignore",
          "HistoryVrfPopupAcceptBtn": "Accept",
          "HistoryVrfPopupCheckboxLabel": "Don't show this again for %{days} day(s)",
          "HistoryVryBarTitle1": "Click below for official PG game <Color>verification:</Color>",
          "HistoryVrfStep1": "Select one of the Transaction ID",
          "HistoryVrfStep2": "Click the <Color>'Verify'</Color> button",
          "HistoryVrfStep3": "View results",
          "HistoryVrfBarTitle2": "Verify <Color>exclusively</Color> with",
          "HistoryVrfTransID": "Transaction ID",
          "HistoryVrfBtn": "Verify",
          "HistoryVrfBrowserErr": "Browser error? Copy and retry the link below.",
          "HistoryVrfLinkCopied": "Link copied"
        },
        "BetOptions": {
          "BetWord": "Bet",
          "BetChangeProgressRemind": "Changing Bet Amount will load the corresponding game progress.",
          "BetChangeForfeitProgressRemind": "Changing Bet Amount will forfeit the current game progress.",
          "BetOriginalAmountTitle": "Original Bet Amount: ",
          "BetSettingWord": "Bet Options",
          "ReminderWord": "Reminder",
          "BiggestBet": "Max Bet",
          "Confirm": "Confirm",
          "BetCurrencyRate": "Bet Size",
          "BetMultiple": "Bet Level",
          "BetAmountTitle": "Bet Amount",
          "BetAmount": "Bet Amount: ",
          "SubReminderWord": "Time Reminder",
          "BetLines": "Lines",
          "ReminderHours": "%{value} hour",
          "ReminderMinutes": "%{value} minutes",
          "ReminderSeconds": "%{value} second(s)",
          "MaxPayout": "Max Payout",
          "RTP": "RTP",
          "PayoutProbabilities": "1 in %{value} spins"
        },
        "General": {
          "ErrorLoginFailed": "Login Failed",
          "ErrorTransactionFailed": "Transaction Failed",
          "ErrorLaunchFailed": "Launch Failed",
          "ErrorPreloadError": "Loading Failed",
          "ErrorChangeFailed": "Switch Failed",
          "DialogRetry": "Retry",
          "DialogQuit": "Quit",
          "DialogOk": "OK",
          "DialogCancel": "Cancel",
          "DialogLater": "Later",
          "DialogContinue": "Continue",
          "DialogRealMoney": "Real Mode",
          "RetryNetwork": "Network is busy, retrying now...",
          "LoadingLogin": "Logging in",
          "LoadingResource": "Loading resources",
          "LoadingCompleted": "Completed",
          "LoadingInfo": "Reading Info",
          "LoadingInfoRetry": "Reading info failed, system retrying...",
          "ResourceLoadingMessage": "Loading",
          "ResourceRetryMessage": "Loading resources failed, system retrying...",
          "MaintenanceTitle": "Maintenance Notice",
          "MaintenanceMessage": "Game Maintenance will begin at %{startDate} to %{endDate}.",
          "ErrorOccur": "An unknown error has occurred, please try again.",
          "DemoMessage": "You are playing in Demo Mode!",
          "BaseBet": "Base Bet",
          "BetLines": "Lines",
          "DialogReload": "Reload",
          "Warning": "Warning",
          "DemoContinue": "Continue"
        },
        "SpinOptions": {
          "ChooseValue": "Choose Value",
          "SettingSliderNumNone": "None",
          "AutoSpinWordShort": "Auto",
          "AutoSpinWord": "Auto Spin",
          "SpinSpeed": "Spin Speed",
          "NormalSpeed": "Normal",
          "FastSpeed": "Turbo",
          "AutoSpin": "Number of Auto Spins",
          "OnceCashLessThanTitle": "Stop if balance decreases by",
          "RequiredTitle": "*Required",
          "OnceCashMoreThanTitle": "Stop if balance increases by",
          "OnceWinAmountTargetTitle": "Stop if a single win exceeds",
          "StartAutoSpin": "Start Auto Spin",
          "MoreOptions": "More",
          "HideOptions": "Hide",
          "TotalBet": "Total Bet"
        },
        "SettingMenu": {
          "WalletLoading": "Loading",
          "SettingSliderNumNone": "None",
          "BalanceWord": "Balance",
          "WinPrizeWord": "Win",
          "WalletRetry": "Retry",
          "SettingCloseWord": "Close",
          "SettingHistoryWord": "History",
          "SettingPayoutWord": "Paytable",
          "SettingRulesWord": "Rules",
          "SettingSoundWord": "Sound",
          "TurboSpinEnable": "Turbo Spin Enabled",
          "TurboSpinDisable": "Turbo Spin Disabled",
          "BiggestBet": "Maximum Bet",
          "SmallestBet": "Minimum Bet",
          "SettingQuitWord": "Quit",
          "Bet": "Bet",
          "Max": "Max",
          "FreeGame": "Free Game",
          "RollOver": "Roll-over"
        },
        //机翻
        "result": "Result",
        "page": "Page",
        "rank": "Rank",
        "username": "Username",
        "reset": "Reset",
        "logOut": "LOG OUT"
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, EventTarget;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      EventTarget = module.EventTarget;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6e5d2Or5itP76KDHoeRKJkY", "EventManager", undefined);
      var EventManager = exports('default', /*#__PURE__*/function (_EventTarget) {
        _inheritsLoose(EventManager, _EventTarget);
        function EventManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _EventTarget.call.apply(_EventTarget, [this].concat(args)) || this;
          _this._listeners = [];
          return _this;
        }
        EventManager.getInstance = function getInstance() {
          if (!this._instance) {
            this._instance = new EventManager();
          }
          return this._instance;
        };
        var _proto = EventManager.prototype;
        _proto.on = function on(name, callFunc, target) {
          name = name.toString();
          var handle = function handle(event) {
            callFunc.call(target, event);
          };
          if (typeof this._listeners[name] == "undefined" || typeof this._listeners[name] == "function") {
            this._listeners[name] = 0;
          }
          this._listeners[name]++;
          _EventTarget.prototype.on.call(this, name, callFunc, target);
          return handle;
        };
        _proto.dispatch = function dispatch(name) {
          var _EventTarget$prototyp;
          name = name.toString();
          //        // if (this._listeners[name] && this._listeners[name] > 0) {
          //        //     super.emit(name, data);
          //        // }
          for (var _len2 = arguments.length, arg = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            arg[_key2 - 1] = arguments[_key2];
          }
          (_EventTarget$prototyp = _EventTarget.prototype.emit).call.apply(_EventTarget$prototyp, [this, name].concat(arg));
        };
        _proto.emit = function emit(key, arg1, arg2, arg3, arg4, arg5) {
          key = key.toString();
          if (this._listeners[key] && this._listeners[key] > 0) {
            _EventTarget.prototype.emit.call(this, key, arg1, arg2, arg3, arg4, arg5);
          }
        };
        _proto.off = function off(name, callFunc, target) {
          name = name.toString();
          if (this._listeners[name]) {
            this._listeners[name]--;
            if (this._listeners[name] < 0) {
              this._listeners[name] = 0;
            }
          }
          _EventTarget.prototype.off.call(this, name, callFunc, target);
        };
        _createClass(EventManager, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new EventManager();
            }
            return this._instance;
          }
        }]);
        return EventManager;
      }(EventTarget));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // export default class EventManager extends cc.EventTarget {
      //     private static _instance: EventManager = null;
      //     static get instance() {
      //         if (!this._instance) {
      //             this._instance = new EventManager();
      //         }
      //
      //         return this._instance;
      //     }
      //
      //     private _listeners = [];
      //
      //     on(name: string, callFunc: any, target?: any): any {
      //         name = name.toString();
      //         const handle = function (event) {
      //             callFunc.call(target, event);
      //         };
      //         if (typeof this._listeners[name] == "undefined" || typeof this._listeners[name] == "function") {
      //             this._listeners[name] = 0;
      //         }
      //         this._listeners[name]++;
      //         super.on(name, callFunc, target);
      //         return handle;
      //     }
      //
      //     dispatch(name, ...arg) {
      //         name = name.toString();
      //         // if (this._listeners[name] && this._listeners[name] > 0) {
      //         //     super.emit(name, data);
      //         // }
      //         super.emit(name, ...arg);
      //     }
      //
      //     emit(key: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) {
      //         key = key.toString();
      //         if (this._listeners[key] && this._listeners[key] > 0) {
      //             super.emit(key, arg1, arg2, arg3, arg4, arg5);
      //         }
      //     }
      //
      //     off(name, callFunc?, target?) {
      //         name = name.toString();
      //         if (this._listeners[name]) {
      //             this._listeners[name]--;
      //             if (this._listeners[name] < 0) {
      //                 this._listeners[name] = 0;
      //             }
      //         }
      //
      //         super.off(name, callFunc, target);
      //     }
      // }
      EventManager._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/fitCanvas.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, view, Size, ResolutionPolicy, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      view = module.view;
      Size = module.Size;
      ResolutionPolicy = module.ResolutionPolicy;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "d7f4dAz/U9HDIGd2ZX7c0B8", "fitCanvas", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var fitCanvas = exports('default', (_dec = ccclass("FitCanvas"), _dec2 = property(), _dec3 = property(), _dec4 = property({
        displayName: "标记竖屏"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(fitCanvas, _Component);
        function fitCanvas() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "width", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "height", _descriptor2, _assertThisInitialized(_this));
          _this.curDR = null;
          _initializerDefineProperty(_this, "isVertical", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = fitCanvas.prototype;
        _proto.onLoad = function onLoad() {
          var self = this;
          view.setResizeCallback(function () {
            self.changeResize();
          });
          this.changeResize();
        };
        _proto.changeResize = function changeResize() {
          // let cvs = view.getDesignResolutionSize();
          var cvs = new Size(this.width, this.height);
          if (!this.curDR) {
            this.curDR = cvs;
          }
          var dr = this.curDR,
            s = view.getVisibleSize(),
            rw = s.width,
            rh = s.height,
            finalW = rw,
            finalH = rh;
          var fixType = ResolutionPolicy.FIXED_HEIGHT;
          if (rw / rh > dr.width / dr.height) {
            finalH = dr.height;
            finalW = finalH * rw / rh;
          } else {
            fixType = ResolutionPolicy.FIXED_WIDTH;
            finalW = dr.width;
            finalH = rh / rw * finalW;
          }
          view.setDesignResolutionSize(finalW, finalH, fixType);
          view.emit("canvas-resize");
        };
        return fitCanvas;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "width", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1920;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "height", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1080;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isVertical", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FortuneHistory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Component, ConfigManager, EventManager, NetManager, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "c0e78YD41ZMxY9d15Cj/eSR", "FortuneHistory", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var FortuneHistory = exports('default', (_dec = ccclass("FortuneHistory"), _dec2 = menu("Fortune/FortuneHistory"), _dec3 = property(gts.List), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneHistory, _Component);
        function FortuneHistory() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_curPage", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_last", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_next", _descriptor4, _assertThisInitialized(_this));
          _this._curPage = 0;
          _this._totalPage = 0;
          _this._lastPage = 1;
          _this._pageSize = 13;
          _this._gameType = void 0;
          return _this;
        }
        var _proto = FortuneHistory.prototype;
        _proto.onLoad = function onLoad() {
          Common.showWait();
        };
        _proto.onBefore = function onBefore() {
          this._lastPage = this._curPage;

          //        //上一页
          this._curPage--;
          if (this._curPage < 0) {
            this._curPage = 0;
          }
          var start = this._curPage * this._pageSize;
          this.send(start);
        };
        _proto.onNext = function onNext() {
          this._lastPage = this._curPage;
          this._curPage++;
          var start = this._curPage * this._pageSize;
          this.send(start);
        };
        _proto.onEnable = function onEnable() {
          EventManager.getInstance().on(ConfigManager.getInstance().protocolHall.getRecord, this.recvData, this);
        };
        _proto.setGameType = function setGameType(gameType, pageSize) {
          if (pageSize === void 0) {
            pageSize = 13;
          }
          this._gameType = gameType;
          this._pageSize = pageSize;
          this.send();
        };
        _proto.send = function send(offset) {
          if (offset === void 0) {
            offset = 0;
          }
          NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.getRecord, {
            Offset: offset,
            PageSize: this._pageSize,
            RecordType: this._gameType
          });
        };
        _proto.recvData = function recvData(data) {
          if (data.cmd == ConfigManager.getInstance().protocolHall.getRecord) {
            if (data.Data.RecordType == this._gameType) {
              data = data.Data;
              Common.closeWait();
              if (!data || !data.BetRecord || data.BetRecord.length == 0) {
                this._curPage = this._lastPage;
                this.Button_next.active = false;
                return;
              }
              this.Button_last.active = this._curPage > 0;
              this.Button_next.active = data.NextPage;
              this.Label_curPage.string = "Trang:" + (this._curPage + 1);
              this.scrollView_content.setData(data.BetRecord);
            }
          }
        };
        _proto.onDisable = function onDisable() {
          EventManager.getInstance().off(ConfigManager.getInstance().protocolHall.getRecord, this.recvData, this);
        };
        return FortuneHistory;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_curPage", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Button_last", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Button_next", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import ConfigManager from "../../../script/manager/ConfigManager";
      // import EventManager from "../../../script/manager/EventManager";
      // import NetManager from "../../../script/manager/NetManager";
      // import { Common } from "../../../script/tools/Common";
      //
      // const { ccclass, property, menu, inspector } = cc._decorator;
      //
      // const pageSize = 9;
      //
      // @ccclass
      // @menu("Fortune/FortuneHistory")
      // // @inspector("packages://autoproperty/inspector.js")
      // export default class FortuneHistory extends cc.Component {
      //     @property(gts.List)
      //     scrollView_content: gts.List = null;
      //
      //     @property(cc.Label)
      //     Label_curPage: cc.Label = null;
      //
      //     @property(cc.Node)
      //     Button_last: cc.Node = null;
      //     @property(cc.Node)
      //     Button_next: cc.Node = null;
      //
      //     _curPage: number = 0;
      //     _totalPage: number = 0;
      //     _lastPage = 1;
      //     _pageSize = 13;
      //
      //     _gameType;
      //     onLoad() {
      //         Common.showWait();
      //     }
      //
      //     onBefore() {
      //         this._lastPage = this._curPage;
      //
      //         //上一页
      //         this._curPage--;
      //         if (this._curPage < 0) {
      //             this._curPage = 0;
      //         }
      //         let start = this._curPage * this._pageSize;
      //         this.send(start);
      //     }
      //
      //     onNext() {
      //         this._lastPage = this._curPage;
      //         this._curPage++;
      //         let start = this._curPage * this._pageSize;
      //         this.send(start);
      //     }
      //
      //     protected onEnable(): void {
      //         EventManager.getInstance().on(ConfigManager.getInstance().protocolHall.getRecord, this.recvData, this);
      //     }
      //
      //     setGameType(gameType: string, pageSize: number = 13) {
      //         this._gameType = gameType;
      //         this._pageSize = pageSize;
      //         this.send();
      //     }
      //
      //     send(offset = 0) {
      //         NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.getRecord, {
      //             Offset: offset,
      //             PageSize: this._pageSize,
      //             RecordType: this._gameType,
      //         });
      //     }
      //
      //     recvData(data) {
      //         if (data.cmd == ConfigManager.getInstance().protocolHall.getRecord) {
      //             if (data.Data.RecordType == this._gameType) {
      //                 data = data.Data;
      //                 Common.closeWait();
      //                 if (!data || !data.BetRecord || data.BetRecord.length == 0) {
      //                     this._curPage = this._lastPage;
      //                     this.Button_next.active = false;
      //                     return;
      //                 }
      //
      //                 this.Button_last.active = this._curPage > 0;
      //                 this.Button_next.active = data.NextPage;
      //
      //                 this.Label_curPage.string = `Trang:${this._curPage + 1}`;
      //                 this.scrollView_content.setData(data.BetRecord);
      //             }
      //         }
      //     }
      //
      //     onDisable() {
      //         EventManager.getInstance().off(ConfigManager.getInstance().protocolHall.getRecord, this.recvData, this);
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FortuneHistoryItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UIOpacity, color, Component, AutoChangeParent, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      UIOpacity = module.UIOpacity;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "5e4e4WUM3FOJK60p/9eX0xK", "FortuneHistoryItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var FortuneHistoryItem = exports('default', (_dec = ccclass("FortuneHistoryItem"), _dec2 = menu("Fortune/FortuneHistoryItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneHistoryItem, _Component);
        function FortuneHistoryItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_bg", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gameNo", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_date", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_time", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor9, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = FortuneHistoryItem.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          this.node.active = true;
          this.Node_label.active = true;
        };
        _proto.onDisable = function onDisable() {};
        _proto.start = function start() {
          var _this2 = this;
          //        //将label节点绑定到label root 并跟随原来节点
          AutoChangeParent.Bind(this.Node_label, this.content_label, true).OnUpdateNotify(function (dt) {
            _this2.Node_label.getComponent(UIOpacity).opacity = _this2.node.getComponent(UIOpacity).opacity;
            _this2.Node_label.active = _this2.node.active;
            _this2.Node_label.scale = _this2.node.scale;
          }, this);

          //        //注册item OnDataChangedNotify OnHideNotify 回调
          if (this.item) {
            this.item.OnDataChangedNotify(function () {
              _this2.UpdateUI();
            }, this);
            this.item.OnHideNotify(function () {
              _this2.node.active = false;
              _this2.Node_label.active = false;
            }, this);
            this.UpdateUI();
          }
        }
        //    //item update
        ;

        _proto.UpdateUI = function UpdateUI() {
          var tempData = this.item.data;
          this.Sprite_bg.active = this.item.itemIndex % 2 != 0;
          this.Label_gameNo.string = Common.setGameNo(tempData.GameNo);

          //        //改为开奖结果
          var strResult = Common.getRecordResult(tempData);
          this.Label_gold.string = strResult;
          var date = Common.getTimeFormat(tempData.CreateAt);
          this.Label_time.string = date.time;
          this.Label_date.string = date.date;
          this.Label_bet.string = Common.moneyFormat(tempData.BetAmount);
          var str = Common.moneyFormat(tempData.Income);
          if (tempData.Income > 0) {
            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str;
        };
        _createClass(FortuneHistoryItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return FortuneHistoryItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content_label", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_label", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_bg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_gameNo", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_date", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_time", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FortuneRank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, ConfigManager, EventManager, NetManager, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "6b57eRXycRP5ahXWUxM5rxc", "FortuneRank", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var FortuneRank = exports('default', (_dec = ccclass("FortuneRank"), _dec2 = menu("Fortune/FortuneRank"), _dec3 = property(gts.List), _dec4 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneRank, _Component);
        function FortuneRank() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_curPage", _descriptor2, _assertThisInitialized(_this));
          _this._curPage = 0;
          _this._totalPage = 0;
          _this._lastPage = 1;
          return _this;
        }
        var _proto = FortuneRank.prototype;
        _proto.onLoad = function onLoad() {
          Common.showWait();
        };
        _proto.onEnable = function onEnable() {
          EventManager.getInstance().on(ConfigManager.getInstance().protocolHall.getRankData, this.recvData, this);
        };
        _proto.send = function send(type) {
          NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.getRankData, {
            gameType: type
          });
        };
        _proto.recvData = function recvData(data) {
          if (data.cmd == ConfigManager.getInstance().protocolHall.getRankData) {
            Common.closeWait();
            data = data.Data;
            //            //排行榜记录
            if (data.RankList) this.scrollView_content.setData(data.RankList);
          }
        };
        _proto.onDisable = function onDisable() {
          EventManager.getInstance().off(ConfigManager.getInstance().protocolHall.getRankData, this.recvData, this);
        };
        return FortuneRank;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_curPage", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import { ConnectCampaigns } from "aws-sdk";
      // import ConfigManager from "../../../script/manager/ConfigManager";
      // import EventManager from "../../../script/manager/EventManager";
      // import NetManager from "../../../script/manager/NetManager";
      // import { Common } from "../../../script/tools/Common";
      //
      // const { ccclass, property, menu, inspector } = cc._decorator;
      //
      // const pageSize = 9;
      //
      // @ccclass
      // @menu("Fortune/FortuneRank")
      // // @inspector("packages://autoproperty/inspector.js")
      // export default class FortuneRank extends cc.Component {
      //     @property(gts.List)
      //     scrollView_content: gts.List = null;
      //
      //     @property(cc.Label)
      //     Label_curPage: cc.Label = null;
      //
      //     _curPage: number = 0;
      //     _totalPage: number = 0;
      //     _lastPage = 1;
      //
      //     onLoad() {
      //         Common.showWait();
      //     }
      //
      //     protected onEnable(): void {
      //         EventManager.getInstance().on(ConfigManager.getInstance().protocolHall.getRankData, this.recvData, this);
      //     }
      //
      //     send(type) {
      //         NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.getRankData, { gameType: type });
      //     }
      //
      //     recvData(data) {
      //         if (data.cmd == ConfigManager.getInstance().protocolHall.getRankData) {
      //             Common.closeWait();
      //             data = data.Data;
      //             //排行榜记录
      //             if (data.RankList) this.scrollView_content.setData(data.RankList);
      //         }
      //     }
      //
      //     onDisable() {
      //         EventManager.getInstance().off(ConfigManager.getInstance().protocolHall.getRankData, this.recvData, this);
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FortuneRankItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Label, SpriteFrame, UIOpacity, Component, AutoChangeParent, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Sprite = module.Sprite;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "6792fOEB15BR7COr1WhMxwG", "FortuneRankItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var FortuneRankItem = exports('default', (_dec = ccclass("FortuneRankItem"), _dec2 = menu("Fortune/FortuneRankItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneRankItem, _Component);
        function FortuneRankItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_bg", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_rankTag", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_rank", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_nickName", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrame_rank", _descriptor8, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = FortuneRankItem.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          this.node.active = true;
          this.Node_label.active = true;
        };
        _proto.onDisable = function onDisable() {};
        _proto.start = function start() {
          var _this2 = this;
          //        //将label节点绑定到label root 并跟随原来节点
          AutoChangeParent.Bind(this.Node_label, this.content_label, true).OnUpdateNotify(function (dt) {
            _this2.Node_label.getComponent(UIOpacity).opacity = _this2.node.getComponent(UIOpacity).opacity;
            _this2.Node_label.active = _this2.node.active;
            _this2.Node_label.scale = _this2.node.scale;
          }, this);

          //        //注册item OnDataChangedNotify OnHideNotify 回调
          if (this.item) {
            this.item.OnDataChangedNotify(function () {
              _this2.UpdateUI();
            }, this);
            this.item.OnHideNotify(function () {
              _this2.node.active = false;
              _this2.Node_label.active = false;
            }, this);
            this.UpdateUI();
          }
        }
        //    //item update
        ;

        _proto.UpdateUI = function UpdateUI() {
          var tmpdata = this.item.data;
          if (!tmpdata || tmpdata === undefined) {
            this.node.active = false;
            this.Node_label.active = false;
            return;
          }
          var rankIndex = this.item.itemIndex;
          if (rankIndex < 3) {
            this.Sprite_rankTag.node.active = true;
            this.Label_rank.node.active = false;
            this.Sprite_rankTag.spriteFrame = this.spriteFrame_rank[rankIndex];
          } else {
            this.Sprite_rankTag.node.active = false;
            this.Label_rank.node.active = true;
            this.Label_rank.string = "" + (rankIndex + 1);
          }
          this.Sprite_bg.active = this.item.itemIndex % 2 != 0;
          this.Label_nickName.string = "" + tmpdata.NickName;
          // this.Label_win.string = `${GUtil.numberFormat(tmpdata.Score / 1000, 2)}K`;
          this.Label_win.string = Common.moneyFormat(tmpdata.Score);
        };
        _createClass(FortuneRankItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return FortuneRankItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content_label", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_label", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_bg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_rankTag", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_rank", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_nickName", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrame_rank", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import AutoChangeParent from "../../../script/gts/AutoChangeParent";
      // import GUtil from "../../../script/gts/GUtil";
      //
      // const { ccclass, property, menu, inspector } = cc._decorator;
      //
      // @ccclass
      // @menu("Fortune/FortuneRankItem")
      // export default class FortuneRankItem extends cc.Component {
      //     //
      //     @property(cc.Node)
      //     content_label: cc.Node = null;
      //     @property(cc.Node)
      //     Node_label: cc.Node = null;
      //
      //     @property(cc.Node)
      //     Sprite_bg: cc.Node = null;
      //     @property(cc.Sprite)
      //     Sprite_rankTag: cc.Sprite = null;
      //
      //     @property(cc.Label)
      //     Label_rank: cc.Label = null;
      //     @property(cc.Label)
      //     Label_nickName: cc.Label = null;
      //     @property(cc.Label)
      //     Label_win: cc.Label = null;
      //
      //     @property(cc.SpriteFrame)
      //     spriteFrame_rank: cc.SpriteFrame[] = [];
      //
      //     private _gtItem: gts.ListItem = null;
      //     public get item(): gts.ListItem {
      //         if (!this._gtItem) {
      //             this._gtItem = this.getComponent(gts.ListItem);
      //         }
      //         return this._gtItem;
      //     }
      //
      //     // LIFE-CYCLE CALLBACKS:
      //
      //     onLoad() {}
      //     protected onEnable(): void {
      //         this.node.active = true;
      //         this.Node_label.active = true;
      //     }
      //     protected onDisable(): void {}
      //
      //     start() {
      //         //将label节点绑定到label root 并跟随原来节点
      //         AutoChangeParent.Bind(this.Node_label, this.content_label, true).OnUpdateNotify((dt: number) => {
      //             this.Node_label.opacity = this.node.opacity;
      //             this.Node_label.active = this.node.active;
      //             this.Node_label.scale = this.node.scale;
      //         }, this);
      //
      //         //注册item OnDataChangedNotify OnHideNotify 回调
      //         if (this.item) {
      //             this.item.OnDataChangedNotify(() => {
      //                 this.UpdateUI();
      //             }, this);
      //
      //             this.item.OnHideNotify(() => {
      //                 this.node.active = false;
      //                 this.Node_label.active = false;
      //             }, this);
      //
      //             this.UpdateUI();
      //         }
      //     }
      //
      //     //item update
      //     protected UpdateUI() {
      //         let tmpdata = this.item.data;
      //         if (!tmpdata || tmpdata === undefined) {
      //             this.node.active = false;
      //             this.Node_label.active = false;
      //             return;
      //         }
      //
      //         let rankIndex = this.item.itemIndex;
      //         if (rankIndex < 3) {
      //             this.Sprite_rankTag.node.active = true;
      //             this.Label_rank.node.active = false;
      //             this.Sprite_rankTag.spriteFrame = this.spriteFrame_rank[rankIndex];
      //         } else {
      //             this.Sprite_rankTag.node.active = false;
      //             this.Label_rank.node.active = true;
      //             this.Label_rank.string = `${rankIndex}`;
      //         }
      //
      //         this.Sprite_bg.active = this.item.itemIndex % 2 != 0;
      //
      //         this.Label_nickName.string = `${tmpdata.NickName}`;
      //         this.Label_win.string = `${GUtil.numberFormat(tmpdata.Score / 1000, 2)}K`;
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FortuneScrollView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './EventManager.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Node, ScrollView, instantiate, Label, Component, UITransform, v3, UIOpacity, ConfigManager, EventManager, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Node = module.Node;
      ScrollView = module.ScrollView;
      instantiate = module.instantiate;
      Label = module.Label;
      Component = module.Component;
      UITransform = module.UITransform;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "eba89y2R1FCZYgcWENTXEeW", "FortuneScrollView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var eAutoRateType = Enum({
        baseScore: 0,
        baseRate: 1,
        basePay: 2,
        baseBet: 3
      });
      var FortuneScrollView = exports('default', (_dec = ccclass("FortuneScrollView"), _dec2 = menu("Fortune/FortuneScrollView"), _dec3 = property({
        type: eAutoRateType
      }), _dec4 = property(), _dec5 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_cc$Component) {
        _inheritsLoose(FortuneScrollView, _cc$Component);
        function FortuneScrollView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _cc$Component.call.apply(_cc$Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "type", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemCounts", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "item", _descriptor3, _assertThisInitialized(_this));
          _this._ScrollViewView = null;
          _this._curIndex = 0;
          _this._maxIndex = 0;
          _this.itemList = void 0;
          _this._hTouch = null;
          _this._isLongTouch = false;
          _this.isSetNew = false;
          return _this;
        }
        var _proto = FortuneScrollView.prototype;
        _proto.onLoad = function onLoad() {
          this._ScrollViewView = this.node.getComponent(ScrollView);
        }
        //    // protected onEnable(): void {}
        ;

        _proto.onDisable = function onDisable() {
          if (this._hTouch) {
            clearTimeout(this._hTouch);
          }
        };
        _proto.setData = function setData(itemList, curIndex) {
          var _this2 = this;
          this.itemList = itemList;
          this._maxIndex = itemList.length - 1;
          this._curIndex = curIndex;
          for (var index = 0; index < itemList.length; index++) {
            var item = this._ScrollViewView.content.children[index];
            if (!item) {
              item = instantiate(this.item);
              this._ScrollViewView.content.addChild(item);
            }
            item.active = true;
            item.name = "item_" + index;
            item.getComponent(Label).string = this.getDefaultValue(index);
          }

          //        //注册_ScrollViewView滚动效果
          this._ScrollViewView.node.on("touch-up", function () {
            _this2.onScrollTouchUp();
          }, this);
          this._ScrollViewView.node.on("touchcancel", function () {
            _this2.onScrollTouchUp();
          }, this);
          var setItem = function setItem() {
            for (var _index = 0; _index < _this2._ScrollViewView.content.children.length; _index++) {
              var itemNode = _this2._ScrollViewView.content.children[_index];
              var curPos = itemNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0));
              curPos = _this2._ScrollViewView.node.getComponent(UITransform).convertToNodeSpaceAR(curPos);
              var hW = _this2._ScrollViewView.node.getComponent(UITransform).height / 2.0;
              if (Math.abs(curPos.y) < hW) {
                itemNode.getComponent(UIOpacity).opacity = 255 * (1 - Math.abs(curPos.y) / hW);
                if (Math.abs(curPos.y) < itemNode.getComponent(UITransform).height) {
                  itemNode.scale = v3(1 + 0.5 * (1 - Math.abs(curPos.y) / itemNode.getComponent(UITransform).height), 1 + 0.5 * (1 - Math.abs(curPos.y) / itemNode.getComponent(UITransform).height));
                } else {
                  itemNode.scale = v3(1, 1, 1);
                }
              } else {
                itemNode.getComponent(UIOpacity).opacity = 0;
                itemNode.scale = v3(1, 1, 1);
              }

              //                // itemNode.color = itemNode.scale > 1.25 ? cc.color(255, 255, 255) : cc.color(100, 120, 180);
              if (itemNode.scale.x > 1.25 && _this2._curIndex != _index) {
                _this2._curIndex = _index;
                if (!_this2.isSetNew) {
                  EventManager.getInstance().emit(ConfigManager.getInstance().eventTransform.setBase, _this2.type, _this2._curIndex);
                }
              }
            }
          };
          this._ScrollViewView.node.on("scroll-ended", function () {
            setItem();
            _this2.isSetNew = false;
          }, this);
          this._ScrollViewView.node.on("scrolling", setItem, this);
          this._ScrollViewView.scrollToPercentVertical((this._maxIndex - this._curIndex) / this._maxIndex, 0);
          setItem();
        }
        //    //滚动触摸离开--停止滚动触摸
        ;

        _proto.onScrollTouchUp = function onScrollTouchUp(delay) {
          var _this3 = this;
          if (delay === void 0) {
            delay = 0.5;
          }
          this.scheduleOnce(function () {
            var getScrollOffset = _this3._ScrollViewView.getScrollOffset();
            _this3._curIndex = Math.round(Math.abs(getScrollOffset.y) / 76);

            //            // gts.Debug.Log("=this._curIndex==0000=" + this._curIndex);
            _this3._ScrollViewView.stopAutoScroll();
            _this3._curIndex = _this3._curIndex < 0 ? 0 : _this3._curIndex > _this3._maxIndex ? _this3._maxIndex : _this3._curIndex;
            //            //
            //            // gts.Debug.Log("=this._curIndex==1111=" + this._curIndex);
            _this3._ScrollViewView.scrollToPercentVertical((_this3._maxIndex - _this3._curIndex) / _this3._maxIndex, 0.1);
          }, delay);
        };
        _proto.setNewPos = function setNewPos(_curIndex) {
          if (this._curIndex != _curIndex) {
            this._curIndex = _curIndex;
            this.isSetNew = true;
            this._ScrollViewView.scrollToPercentVertical((this._maxIndex - this._curIndex) / this._maxIndex, 0.1);
          }
        };
        _proto.doMax = function doMax() {
          this._curIndex = this.itemList.length - 1;
          this._ScrollViewView.scrollToPercentVertical((this._maxIndex - this._curIndex) / this._maxIndex, 0.0001);
        };
        _proto.getDefaultValue = function getDefaultValue(index) {
          if (this.type == eAutoRateType.baseScore || this.type == eAutoRateType.baseBet) {
            return Common.moneyFormat(this.itemList[index]);
          }
          return this.itemList[index].toString();
        };
        return FortuneScrollView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return eAutoRateType.baseScore;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemCounts", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FortuneSetAuto.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './EventManager.ts', './ViewManager.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Label, Sprite, color, Component, ConfigManager, EventManager, ViewManager, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      Label = module.Label;
      Sprite = module.Sprite;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "55af24IsxNGfb7Ci1w3x9pb", "FortuneSetAuto", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var FortuneSetAuto = exports('default', (_dec = ccclass("FortuneSetAuto"), _dec2 = menu("Fortune/FortuneSetAuto"), _dec3 = property(Node), _dec4 = property(Button), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneSetAuto, _Component);
        function FortuneSetAuto() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.selNode = null;
          _initializerDefineProperty(_this, "contentRoot", _descriptor, _assertThisInitialized(_this));
          //    // @property(cc.Node)
          //    // scrollView_list: cc.Node = null;
          _initializerDefineProperty(_this, "Button_ok", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bet", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FortuneSetAuto.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          //        // this.selNode = this.contentRoot.getChildByName(`Node_item_0`);
          //        // this.selNode.color = cc.color(125, 125, 125, 255);
          //        // this.selNode.getChildByName("Label_times").color = cc.color(255, 152, 0, 255);

          Common.setButtonGray(this.Button_ok);
        };
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        _proto.setData = function setData(data) {
          this.txt_gold.string = Common.moneyFormat(data.gold);
          this.txt_bet.string = Common.moneyFormat(data.bet);
          this.txt_win.string = Common.moneyFormat(data.win);
        }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            case "close":
              {
                //                // EventManager.getInstance().emit(ConfigManager.getInstance().eventTransform.setAuto, 0);
                ViewManager.instance.closePopView();
                break;
              }
            case "Button_ok":
              {
                if (this.selNode) {
                  var arrTimes = [10, 30, 50, 80, 1000];
                  var times = arrTimes[parseInt(this.selNode.name.replace("Node_item_", ""))];
                  EventManager.getInstance().emit(ConfigManager.getInstance().eventTransform.setAuto, times);
                }
                ViewManager.instance.closePopView();
                break;
              }
            default:
              {
                if (this.selNode) {
                  this.selNode.getComponent(Sprite).color = color(255, 255, 255, 255);
                  this.selNode.getChildByName("Label_times").getComponent(Label).color = color(152, 152, 152, 255);
                }
                this.selNode = event.target;
                this.selNode.getComponent(Sprite).color = color(125, 125, 125, 255);
                this.selNode.getChildByName("Label_times").getComponent(Label).color = color(255, 152, 0, 255);
                this.Button_ok.interactable = true;
                Common.setButtonGray(this.Button_ok, false);
              }
          }
        };
        return FortuneSetAuto;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Button_ok", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_gold", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txt_bet", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FortuneSetAutobyBlue.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './EventManager.ts', './ViewManager.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Label, Sprite, color, Component, ConfigManager, EventManager, ViewManager, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      Label = module.Label;
      Sprite = module.Sprite;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "b46acjyJapJBrscSv3yo5lE", "FortuneSetAutobyBlue", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var FortuneSetAutoByBlue = exports('default', (_dec = ccclass("FortuneSetAutoByBlue"), _dec2 = menu("Fortune/FortuneSetAutoByBlue"), _dec3 = property(Node), _dec4 = property(Button), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneSetAutoByBlue, _Component);
        function FortuneSetAutoByBlue() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.selNode = null;
          _initializerDefineProperty(_this, "contentRoot", _descriptor, _assertThisInitialized(_this));
          //    // @property(cc.Node)
          //    // scrollView_list: cc.Node = null;
          _initializerDefineProperty(_this, "Button_ok", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bet", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FortuneSetAutoByBlue.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          Common.setButtonGray(this.Button_ok);
        };
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        _proto.setData = function setData(data) {
          this.txt_gold.string = Common.moneyFormat(data.gold);
          this.txt_bet.string = Common.moneyFormat(data.bet);
          this.txt_win.string = Common.moneyFormat(data.win);
        }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            case "close":
              {
                ViewManager.instance.closePopView();
                break;
              }
            case "Button_ok":
              {
                if (this.selNode) {
                  var arrTimes = [10, 30, 50, 80, 1000];
                  var times = arrTimes[parseInt(this.selNode.name.replace("Node_item_", ""))];
                  EventManager.getInstance().emit(ConfigManager.getInstance().eventTransform.setAuto, times);
                }
                ViewManager.instance.closePopView();
                break;
              }
            default:
              {
                if (this.selNode) {
                  this.selNode.getComponent(Sprite).color = color(255, 255, 255, 255);
                  this.selNode.getChildByName("Label_times").getComponent(Label).color = color(152, 152, 152, 255);
                }
                this.selNode = event.target;
                this.selNode.getComponent(Sprite).color = color(125, 125, 125, 255);
                this.selNode.getChildByName("Label_times").getComponent(Label).color = color(96, 219, 254, 255);
                this.Button_ok.interactable = true;
                Common.setButtonGray(this.Button_ok, false);
              }
          }
        };
        return FortuneSetAutoByBlue;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Button_ok", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_gold", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txt_bet", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FortuneSetAutobyGreen.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './EventManager.ts', './ViewManager.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Label, Sprite, color, Component, ConfigManager, EventManager, ViewManager, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      Label = module.Label;
      Sprite = module.Sprite;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "6b97a0Fo3lBGr7mMdJBhwyx", "FortuneSetAutobyGreen", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var FortuneSetAutoByGreen = exports('default', (_dec = ccclass("FortuneSetAutoByGreen"), _dec2 = menu("Fortune/FortuneSetAutoByGreen"), _dec3 = property(Node), _dec4 = property(Button), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneSetAutoByGreen, _Component);
        function FortuneSetAutoByGreen() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.selNode = null;
          _initializerDefineProperty(_this, "contentRoot", _descriptor, _assertThisInitialized(_this));
          //    // @property(cc.Node)
          //    // scrollView_list: cc.Node = null;
          _initializerDefineProperty(_this, "Button_ok", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bet", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FortuneSetAutoByGreen.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          Common.setButtonGray(this.Button_ok);
        };
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        _proto.setData = function setData(data) {
          this.txt_gold.string = Common.moneyFormat(data.gold);
          this.txt_bet.string = Common.moneyFormat(data.bet);
          this.txt_win.string = Common.moneyFormat(data.win);
        }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            case "close":
              {
                ViewManager.instance.closePopView();
                break;
              }
            case "Button_ok":
              {
                if (this.selNode) {
                  var arrTimes = [10, 30, 50, 80, 1000];
                  var times = arrTimes[parseInt(this.selNode.name.replace("Node_item_", ""))];
                  EventManager.getInstance().emit(ConfigManager.getInstance().eventTransform.setAuto, times);
                }
                ViewManager.instance.closePopView();
                break;
              }
            default:
              {
                if (this.selNode) {
                  this.selNode.getComponent(Sprite).color = color(255, 255, 255, 255);
                  this.selNode.getChildByName("Label_times").getComponent(Label).color = color(152, 152, 152, 255);
                }
                this.selNode = event.target;
                this.selNode.getComponent(Sprite).color = color(125, 125, 125, 255);
                this.selNode.getChildByName("Label_times").getComponent(Label).color = color(101, 214, 141, 255);
                this.Button_ok.interactable = true;
                Common.setButtonGray(this.Button_ok, false);
              }
          }
        };
        return FortuneSetAutoByGreen;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Button_ok", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_gold", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txt_bet", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FortuneSetBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './ViewManager.ts', './Common.ts', './FortuneScrollView.ts', './ViewOpenAnim.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Label, Node, Component, ConfigManager, DataManager, UserKey, EventManager, ViewManager, Common, FortuneScrollView, ViewOpenAnim;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      FortuneScrollView = module.default;
    }, function (module) {
      ViewOpenAnim = module.ViewOpenAnim;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "b1f71VHVAFC3KmLkpfm2vQQ", "FortuneSetBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var eAutoRateType = Enum({
        baseScore: 0,
        baseRate: 1,
        basePay: 2,
        baseBet: 3
      });
      // // @inspector("packages://autoproperty/inspector.js")
      var FortuneSetBase = exports('default', (_dec = ccclass("FortuneSetBase"), _dec2 = menu("Fortune/FortuneSetBase"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneSetBase, _Component);
        function FortuneSetBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_bet", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView_baseScore", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView_baseRate", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView_basePay", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView_baseBet", _descriptor7, _assertThisInitialized(_this));
          _this.betSizeList = void 0;
          _this.betLevelList = void 0;
          _this.betLinesList = void 0;
          _this.betAmountList = void 0;
          _this.betAmountInfoList = void 0;
          _this.betSizeIdx = 0;
          _this.betLevelIdx = 0;
          _this.betLinesIdx = 0;
          _this.betAmountIdx = 0;
          //    ////////////////////
          _this._data = void 0;
          return _this;
        }
        var _proto = FortuneSetBase.prototype;
        _proto.onLoad = function onLoad() {
          var gold = Common.moneyFormat(DataManager.instance.getUserDataForKey(UserKey.GOLD));
          this.Label_gold.string = gold;

          //        // if (HjcModel.instance.curTotalWin > 0) {
          //        //     this.Label_win.string = `${HjcUtils.instance.numberFormat(HjcModel.instance.curTotalWin / 1000, 2.0)}K`;
          //        // } else {
          //        //     this.Label_win.string = `0.00`;
          //        // }

          //        // this.Label_bet.string = `${GUtil.numberFormat(FortuneMouseProxy.getBet(), 2.0)}`;
          //        // this._curIndex_baseScore = FortuneMouseProxy._curBetListIndex;
          //        // this._curIndex_baseRate = FortuneMouseProxy._curBetCount;
          //        // this._curIndex_baseBet = FortuneMouseProxy._curBetListIndex * FortuneMouseProxy.betMaxCount + FortuneMouseProxy._curBetCount;
        };

        _proto.setData = function setData(data) {
          var _this2 = this;
          this._data = data;
          console.log("this._data", this._data);
          this.betSizeList = data.betSizeList;
          this.betLevelList = data.betLevelList;
          this.betLinesList = data.betLinesList;
          this.betAmountList = data.betAmountList;
          this.betAmountInfoList = data.betAmountInfoList;
          this.betSizeIdx = data.betAmountInfoList[data.betAmountIdx].betSizeIndex;
          this.betLevelIdx = data.betAmountInfoList[data.betAmountIdx].betLevelIndex;
          this.betLinesIdx = data.betAmountInfoList[data.betAmountIdx].betLinesIndex;
          this.betAmountIdx = data.betAmountIdx;
          this.Label_bet.string = "" + Common.moneyFormat(data.betAmountList[data.betAmountIdx]);
          this.getComponent(ViewOpenAnim).onContentShow = function () {
            _this2.scrollView_baseScore.getComponent(FortuneScrollView).setData(data.betSizeList, _this2.betSizeIdx);
            _this2.scrollView_baseRate.getComponent(FortuneScrollView).setData(data.betLevelList, _this2.betLevelIdx);
            _this2.scrollView_basePay.getComponent(FortuneScrollView).setData(data.betLinesList, _this2.betLinesIdx);
            _this2.scrollView_baseBet.getComponent(FortuneScrollView).setData(data.betAmountList, _this2.betAmountIdx);
          };
        };
        _proto.onEnable = function onEnable() {
          EventManager.getInstance().on(ConfigManager.getInstance().eventTransform.setBase, this.onSetBase, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.getInstance().off(ConfigManager.getInstance().eventTransform.setBase, this.onSetBase, this);
        };
        _proto.updateWin = function updateWin(RewardMoney) {
          //        // if (RewardMoney == 0) {
          //        //     if (HjcModel.instance.curTotalWin > 0) {
          //        //         this.Label_win.string = `${HjcUtils.instance.numberFormat(HjcModel.instance.curTotalWin / 1000, 2.0)}K`;
          //        //     } else {
          //        //         this.Label_win.string = `0.00`;
          //        //     }
          //        //     return;
          //        // }
          //        // let destWin = HjcModel.instance.curTotalWin + RewardMoney;
          //        // let disWin = RewardMoney / 10;
          //        // cc.tween(this.Label_win.node)
          //        //     .repeat(
          //        //         11,
          //        //         cc
          //        //             .tween(this.Label_win.node)
          //        //             .delay(0.05)
          //        //             .call(() => {
          //        //                 HjcModel.instance.curTotalWin += disWin;
          //        //                 if (HjcModel.instance.curTotalWin > destWin) {
          //        //                     HjcModel.instance.curTotalWin = destWin;
          //        //                 }
          //        //                 this.Label_win.string = `${HjcUtils.instance.numberFormat(HjcModel.instance.curTotalWin / 1000, 2.0)}K`;
          //        //             })
          //        //     )
          //        //     .start();
        };
        _proto.updateBaseBetIndex = function updateBaseBetIndex() {
          var betAmount = this.betSizeList[this.betSizeIdx] * this.betLevelList[this.betLevelIdx] * this.betLinesList[this.betLinesIdx];
          for (var i = 0; i < this.betAmountList.length; i++) {
            if (this.betAmountList[i] == betAmount) {
              this.betAmountIdx = i;
              break;
            }
          }
        };
        _proto.onSetBase = function onSetBase(type, curIndex) {
          //        // console.log("type", type, curIndex);
          switch (type) {
            case eAutoRateType.baseScore:
              {
                this.betSizeIdx = curIndex;
                this.updateBaseBetIndex();
                this.scrollView_baseBet.getComponent(FortuneScrollView).setNewPos(this.betAmountIdx);
                break;
              }
            case eAutoRateType.baseRate:
              {
                this.betLevelIdx = curIndex;
                this.updateBaseBetIndex();
                this.scrollView_baseBet.getComponent(FortuneScrollView).setNewPos(this.betAmountIdx);
                break;
              }
            case eAutoRateType.baseBet:
              {
                this.betAmountIdx = curIndex;
                var betAmountInfo = this.betAmountInfoList[curIndex];
                this.betSizeIdx = betAmountInfo.betSizeIndex;
                this.betLevelIdx = betAmountInfo.betLevelIndex;
                this.betLinesIdx = betAmountInfo.betLinesIndex;
                this.scrollView_baseScore.getComponent(FortuneScrollView).setNewPos(this.betSizeIdx);
                this.scrollView_baseRate.getComponent(FortuneScrollView).setNewPos(this.betLevelIdx);
                break;
              }
          }
        }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            //            //
            case "Button_reset":
              {
                this.betAmountIdx = this._data.betAmountList.length - 1;
                this.betLevelIdx = this._data.betLevelList.length - 1;
                this.betSizeIdx = this._data.betSizeList.length - 1;
                this.scrollView_baseScore.getComponent(FortuneScrollView).doMax();
                this.scrollView_baseRate.getComponent(FortuneScrollView).doMax();
                this.scrollView_baseBet.getComponent(FortuneScrollView).doMax();
                break;
              }
            case "Button_ok":
              {
                //                // HjcModel.instance._curIndex_baseScore = this._curIndex_baseScore;
                //                // HjcModel.instance._curIndex_baseRate = this._curIndex_baseRate;
                //                // HjcModel.instance._curIndex_baseBet = this._curIndex_baseBet;
                //                // EventManager.getInstance().emit(HjcDef.eEvent.updateBaseBet);
                //                // FortuneMouseProxy.setBet(this._curIndex_baseScore, this._curIndex_baseRate);

                EventManager.getInstance().emit(ConfigManager.getInstance().eventTransform.setBet, this.betAmountIdx);
                ViewManager.instance.closePopView();
                break;
              }
          }
        };
        return FortuneSetBase;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scrollView_baseScore", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scrollView_baseRate", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "scrollView_basePay", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "scrollView_baseBet", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import GUtil from "../../../script/gts/GUtil";
      // import ConfigManager from "../../../script/manager/ConfigManager";
      // import DataManager, { UserKey } from "../../../script/manager/DataManager";
      // import EventManager from "../../../script/manager/EventManager";
      // import ViewManager from "../../../script/manager/ViewManager";
      // import { Common } from "../../../script/tools/Common";
      // import FortuneScrollView from "../../../script/view/fortuneCommon/FortuneScrollView";
      //
      // const { ccclass, property, menu, inspector } = cc._decorator;
      // const eAutoRateType = cc.Enum({
      //     baseScore: 0,
      //     baseRate: 1,
      //     basePay: 2,
      //     baseBet: 3,
      // });
      //
      // const pageSize = 9;
      //
      // @ccclass
      // @menu("Fortune/FortuneSetBase")
      // // @inspector("packages://autoproperty/inspector.js")
      // export default class FortuneSetBase extends cc.Component {
      //     @property(cc.Label)
      //     Label_bet: cc.Label = null;
      //     @property(cc.Label)
      //     Label_gold: cc.Label = null;
      //     @property(cc.Label)
      //     Label_win: cc.Label = null;
      //
      //     @property(cc.Node)
      //     scrollView_baseScore: cc.Node = null;
      //     @property(cc.Node)
      //     scrollView_baseRate: cc.Node = null;
      //     @property(cc.Node)
      //     scrollView_basePay: cc.Node = null;
      //     @property(cc.Node)
      //     scrollView_baseBet: cc.Node = null;
      //
      //     _curIndex_baseScore = 0;
      //     _curIndex_baseRate = 0;
      //     _curIndex_baseBet = 0;
      //     ////////////////////
      //
      //     _data;
      //     protected onLoad(): void {
      //         let gold = Common.numFormat(DataManager.instance.getUserDataForKey(UserKey.GOLD));
      //         this.Label_gold.string = gold;
      //
      //         // if (HjcModel.instance.curTotalWin > 0) {
      //         //     this.Label_win.string = `${HjcUtils.instance.numberFormat(HjcModel.instance.curTotalWin / 1000, 2.0)}K`;
      //         // } else {
      //         //     this.Label_win.string = `0.00`;
      //         // }
      //
      //         // this.Label_bet.string = `${GUtil.numberFormat(FortuneMouseProxy.getBet(), 2.0)}`;
      //         // this._curIndex_baseScore = FortuneMouseProxy._curBetListIndex;
      //         // this._curIndex_baseRate = FortuneMouseProxy._curBetCount;
      //         // this._curIndex_baseBet = FortuneMouseProxy._curBetListIndex * FortuneMouseProxy.betMaxCount + FortuneMouseProxy._curBetCount;
      //     }
      //
      //     setData(data: { _curBetListIndex: number; _curBetCount: number; betMaxCount: number; betList: number[]; betRate: number }) {
      //         this._data = data;
      //         console.log("this._data", this._data);
      //         this._curIndex_baseScore = data._curBetListIndex;
      //         this._curIndex_baseRate = data._curBetCount;
      //         this._curIndex_baseBet = data._curBetListIndex * data.betMaxCount + data._curBetCount;
      //
      //         this.Label_bet.string = `${GUtil.numberFormat(data.betList[data._curBetListIndex] * (data._curBetCount + 1) * data.betRate * 1000, 2.0)}`;
      //
      //         this.scrollView_baseScore.getComponent(FortuneScrollView).setData(data);
      //         this.scrollView_baseRate.getComponent(FortuneScrollView).setData(data);
      //         this.scrollView_basePay.getComponent(FortuneScrollView).setData(data);
      //         this.scrollView_baseBet.getComponent(FortuneScrollView).setData(data);
      //     }
      //     protected onEnable(): void {
      //         EventManager.getInstance().on(ConfigManager.getInstance().eventTransform.setBase, this.onSetBase, this);
      //     }
      //     protected onDisable(): void {
      //         EventManager.getInstance().off(ConfigManager.getInstance().eventTransform.setBase, this.onSetBase, this);
      //     }
      //
      //     updateWin(RewardMoney) {
      //         // if (RewardMoney == 0) {
      //         //     if (HjcModel.instance.curTotalWin > 0) {
      //         //         this.Label_win.string = `${HjcUtils.instance.numberFormat(HjcModel.instance.curTotalWin / 1000, 2.0)}K`;
      //         //     } else {
      //         //         this.Label_win.string = `0.00`;
      //         //     }
      //         //     return;
      //         // }
      //         // let destWin = HjcModel.instance.curTotalWin + RewardMoney;
      //         // let disWin = RewardMoney / 10;
      //         // cc.tween(this.Label_win.node)
      //         //     .repeat(
      //         //         11,
      //         //         cc
      //         //             .tween(this.Label_win.node)
      //         //             .delay(0.05)
      //         //             .call(() => {
      //         //                 HjcModel.instance.curTotalWin += disWin;
      //         //                 if (HjcModel.instance.curTotalWin > destWin) {
      //         //                     HjcModel.instance.curTotalWin = destWin;
      //         //                 }
      //         //                 this.Label_win.string = `${HjcUtils.instance.numberFormat(HjcModel.instance.curTotalWin / 1000, 2.0)}K`;
      //         //             })
      //         //     )
      //         //     .start();
      //     }
      //
      //     onSetBase(type, curIndex) {
      //         // console.log("type", type, curIndex);
      //         switch (type) {
      //             case eAutoRateType.baseScore: {
      //                 this._curIndex_baseScore = curIndex;
      //                 this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
      //                 this.scrollView_baseBet.getComponent(FortuneScrollView).setNewPos(this._curIndex_baseBet);
      //                 break;
      //             }
      //             case eAutoRateType.baseRate: {
      //                 this._curIndex_baseRate = curIndex;
      //                 this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
      //                 this.scrollView_baseBet.getComponent(FortuneScrollView).setNewPos(this._curIndex_baseBet);
      //                 break;
      //             }
      //             case eAutoRateType.baseBet: {
      //                 this._curIndex_baseBet = curIndex;
      //                 this._curIndex_baseRate = curIndex % 10;
      //                 this._curIndex_baseScore = Math.floor(curIndex / 10);
      //
      //                 this.scrollView_baseScore.getComponent(FortuneScrollView).setNewPos(this._curIndex_baseScore);
      //                 this.scrollView_baseRate.getComponent(FortuneScrollView).setNewPos(this._curIndex_baseRate);
      //                 break;
      //             }
      //         }
      //     }
      //
      //     //按钮事件回调
      //     onBtnClick(event) {
      //         switch (event.target.name) {
      //             //
      //             case "Button_reset": {
      //                 this._curIndex_baseBet = 0;
      //                 this._curIndex_baseRate = 0;
      //                 this._curIndex_baseScore = 0;
      //                 this.scrollView_baseScore.getComponent(FortuneScrollView).doReset();
      //                 this.scrollView_baseRate.getComponent(FortuneScrollView).doReset();
      //                 this.scrollView_baseBet.getComponent(FortuneScrollView).doReset();
      //                 break;
      //             }
      //             case "Button_ok": {
      //                 // HjcModel.instance._curIndex_baseScore = this._curIndex_baseScore;
      //                 // HjcModel.instance._curIndex_baseRate = this._curIndex_baseRate;
      //                 // HjcModel.instance._curIndex_baseBet = this._curIndex_baseBet;
      //                 // EventManager.getInstance().emit(HjcDef.eEvent.updateBaseBet);
      //                 // FortuneMouseProxy.setBet(this._curIndex_baseScore, this._curIndex_baseRate);
      //
      //                 EventManager.getInstance().emit(ConfigManager.getInstance().eventTransform.setBet, this._curIndex_baseScore, this._curIndex_baseRate);
      //
      //                 ViewManager.instance.closePopView();
      //                 break;
      //             }
      //         }
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameButtonDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7adb1Qfh89F85wYaXZEdkD/", "GameButtonDef", undefined);
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */

      var GameButtonIconType = exports('GameButtonIconType', /*#__PURE__*/function (GameButtonIconType) {
        GameButtonIconType[GameButtonIconType["NORMAL"] = 0] = "NORMAL";
        GameButtonIconType[GameButtonIconType["SMALL"] = 1] = "SMALL";
        return GameButtonIconType;
      }({}));
      var GameButtonMap = exports('GameButtonMap', {
        sd: {
          gameType: "sd",
          spineName: "icon_xocdia",
          // iconName: "",
          bgType: GameButtonIconType.NORMAL
          // bgName: "icon_sd",
        },

        yxx: {
          gameType: "yxx",
          spineName: "icon_baucua",
          bgType: GameButtonIconType.NORMAL,
          // bgName: "icon_yxx",
          useComponent: "yxxGameButton"
        },
        guessBigSmall: {
          gameType: "guessBigSmall",
          // spineDownName: "icon_duoi",
          // iconName: "tittle_trenduoi",
          bgName: "icon_guessBigSmall",
          bgType: GameButtonIconType.SMALL,
          iconY: 10,
          useComponent: "GuessBigSmall"
        },
        roshambo: {
          gameType: "roshambo",
          // spineDownName: "icon_oantuty",
          // iconName: "tittle_oantuty",
          bgName: "icon_roshambo",
          bgType: GameButtonIconType.SMALL,
          iconY: -40
        },
        mini_poker: {
          gameType: "mini_poker",
          // spineDownName: "icon_minipk",
          // iconName: "tittle_minigame",
          bgType: GameButtonIconType.SMALL,
          iconY: 6,
          bgName: "icon_mini_poker",
          useComponent: "MinipokerGame"
        },
        dx: {
          gameType: "dx",
          spineName: "icon_taixiu",
          bgType: GameButtonIconType.NORMAL,
          // bgName: "icon_dx",
          useComponent: "dxGameButton"
        },
        slotLs: {
          gameType: "slotLs",
          // spineDownName: "hallicon_dragongod",
          // iconName: "tittle_longthan",
          bgType: GameButtonIconType.NORMAL,
          iconY: -51,
          // bgName: "icon_slotLs",
          spineName: "icon_longshen",
          useComponent: "LsGameButton"
        },
        slotCs: {
          gameType: "slotCs",
          // spineDownName: "icon_thantai",
          // iconName: "tittle_thantai",
          bgType: GameButtonIconType.NORMAL,
          // bgName: "icon_slotCs",
          spineName: "icon_caishen",
          useComponent: "CsdGameButton"
        },
        bjl: {
          gameType: "bjl",
          spineName: "icon_baccarat",
          // iconName: "tittle_baccarat",
          // bgName: "icon_bjl",
          bgType: GameButtonIconType.NORMAL,
          iconY: -42,
          useComponent: "bjlGameButton"
        },
        cardLhd: {
          gameType: "cardLhd",
          // spineDownName: "icon_longho",
          // iconName: "tittle_longho",
          bgName: "icon_cardLhd",
          bgType: GameButtonIconType.NORMAL
        },
        cardLhd2: {
          gameType: "cardLhd2",
          // spineDownName: "icon_longhu2",
          // iconName: "tittle_longhu2",
          // bgName: "icon_cardLhd2",
          spineName: "icon_longhu2",
          bgType: GameButtonIconType.NORMAL
        },
        fish: {
          gameType: "fish",
          // spineName: "icon_banca",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_fish"
        },
        bigSmallMD5: {
          gameType: "bigSmallMD5",
          spineName: "icon_txmd5",
          bgType: GameButtonIconType.NORMAL,
          // bgName: "icon_bigSmallMD5",
          useComponent: "DxMD5GameButton"
        },
        cardPhom: {
          gameType: "cardPhom",
          // spineDownName: "icon_phom",
          bgName: "icon_cardPhom",
          // iconName: "tittle_phom",
          bgType: GameButtonIconType.SMALL,
          iconY: -50
        },
        cardLieng: {
          gameType: "cardLieng",
          // spineDownName: "icon_lieng",
          // iconName: "tittle_lieng",
          bgName: "icon_cardLieng",
          bgType: GameButtonIconType.SMALL,
          iconY: -40
        },
        dx3Min: {
          gameType: "dx3Min",
          spineName: "icon_3mintaixiu",
          // spineUpName: "3mintittle",
          // bgName: "icon_dx3Min",
          bgType: GameButtonIconType.NORMAL,
          useComponent: "Dx3MinGameButton"
        },
        slotXy: {
          gameType: "slotXy",
          // spineDownName: "icon_xiyou",
          // iconName: "tittle_xiyou",
          bgType: GameButtonIconType.NORMAL,
          iconY: 160,
          bgName: "icon_slotXy",
          useComponent: "XyGameButton"
        },
        slotFruit: {
          gameType: "slotFruit",
          // spineDownName: "icon_fruit",
          // iconName: "tittle_fruit",
          bgName: "icon_slotFruit",
          bgType: GameButtonIconType.SMALL,
          iconY: -55
        },
        dice: {
          gameType: "dice",
          spineName: "icon_sicbo",
          // iconName: "tittle_sicbo",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_dice",
          iconY: -126
        },
        f35: {
          gameType: "f35",
          // spineDownName: "icon_f35",
          bgName: "icon_FF35",
          bgType: GameButtonIconType.NORMAL
        },
        slotGemstone: {
          gameType: "slotGemstone",
          // spineDownName: "icon_jialuobaoshi",
          // iconName: "tittle_fg",
          bgType: GameButtonIconType.SMALL,
          bgName: "icon_slotGemstone",
          iconY: -126
        },
        slotMj: {
          gameType: "slotMj",
          // spineDownName: "icon_mahjong",
          // iconName: "tittle_mahjong",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_Mj",
          iconY: -121
        },
        slotSpringFestival: {
          gameType: "slotSpringFestival",
          // spineDownName: "icon_newyear",
          // iconName: "tittle_festival",
          bgName: "icon_slotSpringFestival",
          bgType: GameButtonIconType.NORMAL,
          iconY: -121
        },
        slotVigorous: {
          gameType: "slotVigorous",
          // spineDownName: "icon_jb777",
          // iconName: "tittle_ftgod777",
          bgType: GameButtonIconType.SMALL,
          bgName: "icon_slotVigorous",
          iconY: -160
        },
        slotBowl: {
          gameType: "slotBowl",
          // spineDownName: "icon_jubaopen",
          // iconName: "tittle_jubaopen",
          bgType: GameButtonIconType.SMALL,
          bgName: "icon_slotBowl",
          iconY: -160
        },
        slotPoker: {
          gameType: "slotPoker",
          // spineDownName: "icon_newyear",
          // iconName: "tittle_festival",
          bgName: "icon_slotPoker",
          bgType: GameButtonIconType.NORMAL,
          iconY: -121
        },
        slotCat: {
          gameType: "slotCat",
          // spineDownName: "icon_jubaopen",
          // iconName: "tittle_jubaopen",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_slotCat"
          // iconY: -160,
        },

        slotBoxing: {
          gameType: "slotBoxing",
          // spineDownName: "icon_jubaopen",
          // iconName: "tittle_jubaopen",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_slotBoxing"
          // iconY: -160,
        },

        slotGod: {
          gameType: "slotGod",
          // spineDownName: "icon_jubaopen",
          // iconName: "tittle_jubaopen",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_slotGod"
          // iconY: -160,
        },

        slotGoldenCity: {
          gameType: "slotGoldenCity",
          // spineDownName: "icon_jubaopen",
          // iconName: "tittle_jubaopen",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_slotGoldenCity"
          // iconY: -160,
        },

        cardSss: {
          gameType: "cardSss",
          // spineDownName: "icon_jubaopen",
          // iconName: "tittle_jubaopen",
          bgType: GameButtonIconType.SMALL,
          bgName: "icon_cardSss"
          // iconY: -160,
        },

        dxLive: {
          gameType: "dxLive",
          bgType: GameButtonIconType.NORMAL,
          // bgName: "icon_dxLive",
          spineName: "icon_sd_dx"
          // iconY: -160,
        },

        sdLive: {
          gameType: "sdLive",
          bgType: GameButtonIconType.NORMAL,
          spineName: "icon_sd_xocdia"
        },
        yxxLive: {
          gameType: "yxxLive",
          bgType: GameButtonIconType.NORMAL,
          spineName: "icon_sd_yxx"
          // iconY: -160,
        },

        slotFortuneTiger: {
          gameType: "slotFortuneTiger",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_fortuneTiger"
          // iconY: -160,
        },

        slotFortuneRabbit: {
          gameType: "slotFortuneRabbit",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_slotFortuneRabbit"
          // iconY: -160,
        },

        slotFortuneOx: {
          gameType: "slotFortuneOx",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_slotCattle"
        },
        slotFortuneMouse: {
          gameType: "slotFortuneMouse",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_FortuneMouse"
          // iconY: -160,
        },

        slotGaneshaGold: {
          gameType: "slotGaneshaGold",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_GaneshaGold"
        },
        slotPiggyGold: {
          gameType: "slotPiggyGold",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_slotPig"
          // iconY: -160,
        },

        slotQueenOfBounty: {
          gameType: "slotQueenOfBounty",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_queenOfBounty"
        },
        slotGoldenEmpire: {
          gameType: "slotGoldenEmpire",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_slotGoldenEmpire"
          // iconY: -160,
        },

        slotCaptainBounty: {
          gameType: "slotCaptainBounty",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_CaptainBounty"
        },
        slotRoosterRumble: {
          gameType: "slotRoosterRumble",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_slotRoosterRumble"
          // iconY: -160,
        },

        slotNightCity: {
          gameType: "slotNightCity",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_slotNightCity"
          // iconY: -160,
        },

        slotSpeedWinner: {
          gameType: "slotSpeedWinner",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_SlotSpeedWinner"
        },
        dxVip: {
          gameType: "dxVip",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_dxVip"
          // iconY: -160,
        },

        slotWildBountyShowdown: {
          gameType: "slotWildBountyShowdown",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_slotWildBountyShowdown"
        },
        zpVip: {
          gameType: "zpVip",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_roulette"
        },
        sdVip: {
          gameType: "sdVip",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_sdVIP"
        },
        slotApotheosis: {
          gameType: "slotApotheosis",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_fs"
        },
        slotAlibaba: {
          gameType: "slotAlibaba",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_slotAlbb"
        },
        slotGoldenBook: {
          gameType: "slotGoldenBook",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_bookofgold"
        },
        slotJLCS: {
          gameType: "slotJLCS",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_jilics"
        },
        slotWinWinFishPrawnCrab: {
          gameType: "slotWinWinFishPrawnCrab",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_winwinFishPravCrab"
        },
        blackJack: {
          gameType: "blackJack",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_blackJack"
        },
        keno: {
          gameType: "keno",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_keno"
        },
        plinko: {
          gameType: "plinko",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_plinko"
        },
        slotWildBandito: {
          gameType: "slotWildBandito",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_slotWildBandito"
        },
        slotCocktailNights: {
          gameType: "slotCocktailNights",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_CocktailNights"
        },
        slotMahjongWays2: {
          gameType: "slotMahjongWays2",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_Mj2",
          iconY: -121
        },
        racing: {
          gameType: "racing",
          bgType: GameButtonIconType.NORMAL,
          spineName: "icon_racing"

          // useComponent: "dxGameButton",
          // bgName: "icon_speedCar",
        },

        slotGemstone2: {
          gameType: "slotGemstone2",
          // spineDownName: "icon_jialuobaoshi",
          // iconName: "tittle_fg",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_slotGemstone2"
        },
        slotEmojiRiches: {
          gameType: "slotEmojiRiches",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_slotEmojiRiches"
        },
        slotKylin: {
          gameType: "slotKylin",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_slotKylin"
        },
        slotDreamsofMacau: {
          gameType: "slotDreamsofMacau",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_DreamsofMacau"
        },
        cardLhd3d: {
          gameType: "cardLhd3d",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_cardLhd3d"
        },
        slotChargeBuffalo: {
          gameType: "slotChargeBuffalo",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_Buffalo"
        },
        slotWildCoaster: {
          gameType: "slotWildCoaster",
          bgType: GameButtonIconType.NORMAL,
          bgName: "slotCoaster"
        },
        bjl3d: {
          gameType: "bjl3d",
          bgType: GameButtonIconType.NORMAL,
          bgName: "icon_cardBjl3d"
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameDef.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
    }],
    execute: function () {
      exports('GameDef', void 0);
      cclegacy._RF.push({}, "ff0eaJh7Q5LbKinB/Q25Hj2", "GameDef", undefined);
      var GameDef;
      (function (_GameDef) {
        var gameHide = _GameDef.gameHide = "gameHide";
        /**
         * 当前已有游戏类型bundle
         */
        var Game = {
          Yxxgame: "Yxxgame",
          FishGame: "FishGame",
          Baccarat: "BaccaratGame",
          FingGuess: "FingGuess",
          GuessBigSmall: "GuessBigSmall",
          Minipoker: "Minipoker",
          Dxgame: "Dxgame",
          KenoGame: "KenoGame",
          Sdgame: "Sdgame",
          CsdGame: "CsdGame",
          LhGame: "LhGame",
          LsGame: "LsGame",
          DxgameMD5: "DxgameMD5",
          PhomGame: "PhomGame",
          LiengGame: "LiengGame",
          Dxgame3Min: "Dxgame3Min",
          XyGame: "XyGame",
          Fruit77: "Fruit77",
          DiceGame: "DiceGame",
          F35Game: "F35Game",
          StoneGame: "StoneGame",
          MjxxlGame: "MjxxlGame",
          Jb777Game: "Jb777Game",
          FestivalGame: "FestivalGame",
          LhGame2: "LhGame2",
          JbpGame: "JbpGame",
          PokerGame: "PokerGame",
          ZcmGame: "ZcmGame",
          BoxingGame: "BoxingGame",
          ThirteenGame: "ThirteenGame",
          YcsGame: "YcsScene",
          VDxGame: "VDxGame",
          VSdGame: "VSdGame",
          VYxxGame: "VYxxGame",
          HjcGame: "HjcScene",
          FortuneTigerGame: "FortuneTigerGame",
          RabbitGame: "RabbitScene",
          CattleGame: "CattleScene",
          FortuneMouseGame: "FortuneMouseGame",
          FortuneElephantGame: "FortuneElephantGame",
          SlotPigGame: "SlotPigGame",
          SlotQueenGame: "SlotQueenGame",
          EmpireGame: "EmpireGame",
          CaptainGame: "CaptainGame",
          SpeedWinnerGame: "SpeedWinnerGame",
          slotWildBountyShowdownGame: "slotWildBountyShowdownGame",
          slotApotheosisGame: "slotApotheosisGame",
          slotWinWinFishPrawnCrabGame: "slotWinWinFishPrawnCrabGame",
          SlotDjGame: "SlotDjGame",
          NightCityGame: "NightCityGame",
          DxVipGame: "DxVipGame",
          RouletteGame: "RouletteGame",
          SdVipGame: "SdVipGame",
          AlbbGame: "AlbbGame",
          GoldenBookGame: "GoldenBookGame",
          BlackJackGame: "BlackJackGame",
          UfoGame: "UfoGame",
          slotCocktailNightsGame: "slotCocktailNightsGame",
          MjhlGame: "MjhlGame",
          SpeedCarGame: "SpeedCarGame",
          StoneGame2: "StoneGame2",
          slotEmojiRichesGame: "slotEmojiRichesGame",
          QlsbGame: "QlsbGame",
          SlotMacauGame: "SlotMacauGame",
          LhVipGame: "LhVipGame",
          slotBuffaloGame: "slotBuffaloGame",
          CoasterGame: "CoasterGame",
          BjlVipGame: "BjlVipGame"
        };
        _GameDef.Game = Game;
        var eMiniGame = /*#__PURE__*/function (eMiniGame) {
          eMiniGame["FingGuess"] = "FingGuess";
          eMiniGame["GuessBigSmall"] = "GuessBigSmall";
          eMiniGame["Minipoker"] = "Minipoker";
          eMiniGame["Dxgame"] = "Dxgame";
          eMiniGame["DxgameMD5"] = "DxgameMD5";
          eMiniGame["Dxgame3Min"] = "Dxgame3Min";
          eMiniGame["Fruit77"] = "Fruit77";
          eMiniGame["YxxMini"] = "YxxMini";
          eMiniGame["Jb777Game"] = "Jb777Game";
          eMiniGame["KenoGame"] = "KenoGame";
          return eMiniGame;
        }({});
        _GameDef.eMiniGame = eMiniGame;
        var eGameID = {
          gameID_none: 0,
          gameID_mini: 1
        }; //迷你扑克
        _GameDef.eGameID = eGameID;
        var eMiniGameScene = /*#__PURE__*/function (eMiniGameScene) {
          eMiniGameScene["GuessBigSmall"] = "GuessBigSmallMainView";
          eMiniGameScene["FingGuess"] = "FingGuessMainView";
          eMiniGameScene["Minipoker"] = "MiniPokerMainView";
          eMiniGameScene["Dxgame"] = "DxgameLayer";
          eMiniGameScene["Dxgame3Min"] = "DxgameLayer";
          eMiniGameScene["Fruit77"] = "Fruit77MainView";
          eMiniGameScene["YxxMini"] = "YxxGameMiniLayer";
          eMiniGameScene["Jb777Game"] = "Jb777GameView";
          eMiniGameScene["KenoGame"] = "KenoGameLayer";
          return eMiniGameScene;
        }({});
        _GameDef.eMiniGameScene = eMiniGameScene;
        var _gameScene = /*#__PURE__*/function (_gameScene) {
          _gameScene["Yxxgame"] = "Yxxgame";
          _gameScene["Sdgame"] = "SdScene";
          _gameScene["LsGame"] = "LsLodingGame";
          _gameScene["CsdGame"] = "CsdGameScene";
          _gameScene["FishGame"] = "FishGameScene";
          _gameScene["LhGame"] = "LhLoadingScene";
          _gameScene["BaccaratGame"] = "BaccaratGameScene";
          _gameScene["GuessBigSmall"] = "GuessBigSmallMainView";
          _gameScene["FingGuess"] = "FingGuessMainView";
          _gameScene["Minipoker"] = "MiniPokerMainView";
          _gameScene["Dxgame"] = "DxgameLayer";
          _gameScene["HKFiveGame"] = "HKFiveScene";
          _gameScene["PhomGame"] = "PhomGameScene";
          _gameScene["DxgameMD5"] = "DxMD5Layer";
          _gameScene["LiengGame"] = "liengScene";
          _gameScene["Dxgame3Min"] = "DxgameLayer";
          _gameScene["Fruit77"] = "Fruit77MainView";
          _gameScene["YxxMini"] = "YxxGameMiniLayer";
          _gameScene["XyGame"] = "XyScene";
          _gameScene["DiceGame"] = "DiceScene";
          _gameScene["F35Game"] = "F35Scene";
          _gameScene["StoneGame"] = "StoneScene";
          _gameScene["MjxxlGame"] = "MjxxlScene";
          _gameScene["Jb777Game"] = "Jb777GameView";
          _gameScene["FestivalGame"] = "FestivalScene";
          _gameScene["LhGame2"] = "LhScene2";
          _gameScene["JbpGame"] = "JbpScene";
          _gameScene["PokerGame"] = "PokerScene";
          _gameScene["ZcmGame"] = "ZcmScene";
          _gameScene["BoxingGame"] = "BoxingScene";
          _gameScene["ThirteenGame"] = "ThirteenScene";
          _gameScene["YcsGame"] = "YcsScene";
          _gameScene["VDxGame"] = "VDxScene";
          _gameScene["VSdGame"] = "VSdScene";
          _gameScene["VYxxGame"] = "VYxxScene";
          _gameScene["HjcGame"] = "HjcScene";
          _gameScene["FortuneTigerGame"] = "FortuneTigerScene";
          _gameScene["RabbitGame"] = "RabbitScene";
          _gameScene["CattleGame"] = "CattleScene";
          _gameScene["FortuneMouseGame"] = "FortuneMouseScene";
          _gameScene["FortuneElephantGame"] = "FortuneElephantScene";
          _gameScene["SlotPigGame"] = "SlotPigScene";
          _gameScene["SlotQueenGame"] = "SlotQueenScene";
          _gameScene["EmpireGame"] = "EmpireScene";
          _gameScene["CaptainGame"] = "CaptainScene";
          _gameScene["SpeedWinnerGame"] = "SpeedWinnerScene";
          _gameScene["slotWildBountyShowdownGame"] = "slotWildBountyShowdownScene";
          _gameScene["slotApotheosisGame"] = "slotApotheosisScene";
          _gameScene["slotJLCSGame"] = "slotJLCSScene";
          _gameScene["slotWinWinFishPrawnCrabGame"] = "slotWinWinFishPrawnCrabScene";
          _gameScene["SlotDjGame"] = "SlotDjScene";
          _gameScene["NightCityGame"] = "NightCityScene";
          _gameScene["DxVipGame"] = "DxVipScene";
          _gameScene["RouletteGame"] = "RouletteScene";
          _gameScene["SdVipGame"] = "SdVipScene";
          _gameScene["AlbbGame"] = "AlbbScene";
          _gameScene["GoldenBookGame"] = "GoldenBookScene";
          _gameScene["slotWildBanditoGame"] = "slotWildBanditoScene";
          _gameScene["slotCocktailNightsGame"] = "slotCocktailNightsScene";
          _gameScene["slotEmojiRichesGame"] = "slotEmojiRichesScene";
          _gameScene["BlackJackGame"] = "BlackJackScene";
          _gameScene["KenoGame"] = "KenoGameLayer";
          _gameScene["UfoGame"] = "UfoScene";
          _gameScene["MjhlGame"] = "MjhlScene";
          _gameScene["SpeedCarGame"] = "SpeedCarScene";
          _gameScene["StoneGame2"] = "Stone2Scene";
          _gameScene["QlsbGame"] = "QlsbScene";
          _gameScene["SlotMacauGame"] = "SlotMacauScene";
          _gameScene["LhVipGame"] = "LhVipScene";
          _gameScene["slotBuffaloGame"] = "BuffaloScene";
          _gameScene["CoasterGame"] = "CoasterScene";
          _gameScene["BjlVipGame"] = "BjlVipScene";
          return _gameScene;
        }({});
        _GameDef._gameScene = _gameScene;
        var GameMap = /*#__PURE__*/function (GameMap) {
          GameMap["hall"] = "hall";
          GameMap["yxx"] = "Yxxgame";
          GameMap["sd"] = "Sdgame";
          GameMap["guessBigSmall"] = "GuessBigSmall";
          GameMap["roshambo"] = "FingGuess";
          GameMap["mini_poker"] = "Minipoker";
          GameMap["dx"] = "Dxgame";
          GameMap["slotLs"] = "LsGame";
          GameMap["slotCs"] = "CsdGame";
          GameMap["bjl"] = "BaccaratGame";
          GameMap["cardLhd"] = "LhGame";
          GameMap["fish"] = "FishGame";
          GameMap["bigSmallMD5"] = "DxgameMD5";
          GameMap["cardPhom"] = "PhomGame";
          GameMap["cardLieng"] = "LiengGame";
          GameMap["dx3Min"] = "Dxgame3Min";
          GameMap["slotXy"] = "XyGame";
          GameMap["slotFruit"] = "Fruit77";
          GameMap["dice"] = "DiceGame";
          GameMap["f35"] = "F35Game";
          GameMap["slotGemstone"] = "StoneGame";
          GameMap["slotGemstone2"] = "StoneGame2";
          GameMap["slotMj"] = "MjxxlGame";
          GameMap["slotVigorous"] = "Jb777Game";
          GameMap["slotSpringFestival"] = "FestivalGame";
          GameMap["cardLhd2"] = "LhGame2";
          GameMap["slotBowl"] = "JbpGame";
          GameMap["slotPoker"] = "PokerGame";
          GameMap["slotCat"] = "ZcmGame";
          GameMap["slotBoxing"] = "BoxingGame";
          GameMap["cardSss"] = "ThirteenGame";
          GameMap["slotGod"] = "YcsGame";
          GameMap["dxLive"] = "VDxGame";
          GameMap["sdLive"] = "VSdGame";
          GameMap["yxxLive"] = "VYxxGame";
          GameMap["slotGoldenCity"] = "HjcGame";
          GameMap["slotFortuneTiger"] = "FortuneTigerGame";
          GameMap["slotFortuneRabbit"] = "RabbitGame";
          GameMap["slotFortuneOx"] = "CattleGame";
          GameMap["slotFortuneMouse"] = "FortuneMouseGame";
          GameMap["slotGaneshaGold"] = "FortuneElephantGame";
          GameMap["slotPiggyGold"] = "SlotPigGame";
          GameMap["slotQueenOfBounty"] = "SlotQueenGame";
          GameMap["slotGoldenEmpire"] = "EmpireGame";
          GameMap["slotCaptainBounty"] = "CaptainGame";
          GameMap["slotSpeedWinner"] = "SpeedWinnerGame";
          GameMap["slotWildBountyShowdown"] = "slotWildBountyShowdownGame";
          GameMap["slotApotheosis"] = "slotApotheosisGame";
          GameMap["slotJLCS"] = "slotJLCSGame";
          GameMap["slotWinWinFishPrawnCrab"] = "slotWinWinFishPrawnCrabGame";
          GameMap["slotCocktailNights"] = "slotCocktailNightsGame";
          GameMap["slotRoosterRumble"] = "SlotDjGame";
          GameMap["slotNightCity"] = "NightCityGame";
          GameMap["dxVip"] = "DxVipGame";
          GameMap["zpVip"] = "RouletteGame";
          GameMap["sdVip"] = "SdVipGame";
          GameMap["slotAlibaba"] = "AlbbGame";
          GameMap["slotGoldenBook"] = "GoldenBookGame";
          GameMap["blackJack"] = "BlackJackGame";
          GameMap["keno"] = "KenoGame";
          GameMap["plinko"] = "UfoGame";
          GameMap["slotWildBandito"] = "slotWildBanditoGame";
          GameMap["slotMahjongWays2"] = "MjhlGame";
          GameMap["racing"] = "SpeedCarGame";
          GameMap["slotEmojiRiches"] = "slotEmojiRichesGame";
          GameMap["slotKylin"] = "QlsbGame";
          GameMap["slotDreamsofMacau"] = "SlotMacauGame";
          GameMap["slotChargeBuffalo"] = "slotBuffaloGame";
          GameMap["slotWildCoaster"] = "CoasterGame";
          GameMap["cardLhd3d"] = "LhVipGame";
          GameMap["bjl3d"] = "BjlVipGame";
          return GameMap;
        }({});
        _GameDef.GameMap = GameMap;
        var GameType = /*#__PURE__*/function (GameType) {
          GameType["hall"] = "hall";
          GameType["yxx"] = "yxx";
          GameType["sd"] = "sd";
          GameType["guessBigSmall"] = "guessBigSmall";
          GameType["roshambo"] = "roshambo";
          GameType["mini_poker"] = "mini_poker";
          GameType["dx"] = "dx";
          GameType["slotLs"] = "slotLs";
          GameType["slotCs"] = "slotCs";
          GameType["bjl"] = "bjl";
          GameType["cardLhd"] = "cardLhd";
          GameType["fish"] = "fish";
          GameType["bigSmallMD5"] = "bigSmallMD5";
          GameType["cardPhom"] = "cardPhom";
          GameType["cardLieng"] = "cardLieng";
          GameType["dx3Min"] = "dx3Min";
          GameType["slotXy"] = "slotXy";
          GameType["slotFruit"] = "slotFruit";
          GameType["dice"] = "dice";
          GameType["f35"] = "f35";
          GameType["slotGemstone"] = "slotGemstone";
          GameType["slotGemstone2"] = "slotGemstone2";
          GameType["slotMj"] = "slotMj";
          GameType["slotVigorous"] = "slotVigorous";
          GameType["slotSpringFestival"] = "slotSpringFestival";
          GameType["cardLhd2"] = "cardLhd2";
          GameType["slotBowl"] = "slotBowl";
          GameType["slotPoker"] = "slotPoker";
          GameType["slotCat"] = "slotCat";
          GameType["slotBoxing"] = "slotBoxing";
          GameType["cardSss"] = "cardSss";
          GameType["slotGod"] = "slotGod";
          GameType["dxLive"] = "dxLive";
          GameType["sdLive"] = "sdLive";
          GameType["yxxLive"] = "yxxLive";
          GameType["slotGoldenCity"] = "slotGoldenCity";
          GameType["slotFortuneTiger"] = "slotFortuneTiger";
          GameType["slotFortuneRabbit"] = "slotFortuneRabbit";
          GameType["slotFortuneOx"] = "slotFortuneOx";
          GameType["slotFortuneMouse"] = "slotFortuneMouse";
          GameType["slotGaneshaGold"] = "slotGaneshaGold";
          GameType["slotPiggyGold"] = "slotPiggyGold";
          GameType["slotGoldenEmpire"] = "slotGoldenEmpire";
          GameType["slotQueenOfBounty"] = "slotQueenOfBounty";
          GameType["slotCaptainBounty"] = "slotCaptainBounty";
          GameType["slotSpeedWinner"] = "slotSpeedWinner";
          GameType["slotWildBountyShowdown"] = "slotWildBountyShowdown";
          GameType["slotNightCity"] = "slotNightCity";
          GameType["dxVip"] = "dxVip";
          GameType["zpVip"] = "zpVip";
          GameType["sdVip"] = "sdVip";
          GameType["slotApotheosis"] = "slotApotheosis";
          GameType["slotJLCS"] = "slotJLCS";
          GameType["slotWinWinFishPrawnCrab"] = "slotWinWinFishPrawnCrab";
          GameType["slotRoosterRumble"] = " slotRoosterRumble";
          GameType["slotWildBandito"] = "slotWildBandito";
          GameType["slotCocktailNights"] = "slotCocktailNights";
          GameType["slotEmojiRiches"] = "slotEmojiRiches";
          GameType["blackJack"] = "blackJack";
          GameType["slotGoldenBook"] = "slotGoldenBook";
          GameType["racing"] = "racing";
          GameType["plinko"] = "plinko";
          GameType["keno"] = "keno";
          GameType["slotAlibaba"] = "slotAlibaba";
          GameType["slotMahjongWays2"] = "slotMahjongWays2";
          GameType["slotKylin"] = "slotKylin";
          GameType["slotDreamsofMacau"] = "slotDreamsofMacau";
          GameType["cardLhd3d"] = "cardLhd3d";
          GameType["slotChargeBuffalo"] = "slotChargeBuffalo";
          GameType["slotWildCoaster"] = "slotWildCoaster";
          GameType["bjl3d"] = "bjl3d";
          return GameType;
        }({});
        _GameDef.GameType = GameType; ///base class
        //#region base class
        function BaseCtrl() {
          var baseCtrl = /*#__PURE__*/function () {
            function baseCtrl() {
              this._iViewList = [];
              this.ref = 0;
              this.ref = 0;
              this.initProto();
            }
            var _proto = baseCtrl.prototype;
            _proto.initProto = function initProto() {
              gts.Debug.Log("===baseCtrl====initProto====");
            };
            _proto.removeProto = function removeProto() {
              gts.Debug.Log("===baseCtrl====removeProto====");
            };
            _proto.onRecvData = function onRecvData(data) {
              // gts.Debug.Log("===baseCtrl====onRecvData====");
            }

            ////////////////////////////////////////
            ////////////ICtrl
            ;

            _proto.regist = function regist(iView) {
              // gts.Debug.Log("===baseCtrl====regist====");
              if (iView) {
                this._iViewList.push(iView);
                this.ref++;
              }
            };
            _proto.unRegist = function unRegist(iView) {
              // gts.Debug.Log("===baseCtrl====unRegist====");
              var keys = Object.keys(this._iViewList);
              for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
                var key = _keys[_i];
                if (this._iViewList[key] == iView) {
                  this._iViewList.splice(parseInt(key), 1);
                  this.ref--;
                  break;
                }
              }
            };
            _proto.destroy = function destroy() {
              gts.Debug.Log("===baseCtrl====destroy====");
              this.removeProto();
              this._iViewList = [];
            };
            _proto.emitUpdateView = function emitUpdateView(cmd, data) {
              // gts.Debug.Log("===baseCtrl====emitUpdateView====");
              if (data != null) {
                this._iViewList.forEach(function (iView) {
                  if (iView.updateView) {
                    iView.updateView(cmd, data);
                  }
                });
              }
            };
            _createClass(baseCtrl, null, [{
              key: "instance",
              get: function get() {
                if (!this._instance) {
                  this._instance = new this();
                }
                return this._instance;
              },
              set: function set(t) {
                this._instance = t;
              }
            }]);
            return baseCtrl;
          }();
          baseCtrl._instance = null;
          return baseCtrl;
        }
        _GameDef.BaseCtrl = BaseCtrl;
        //extends GameDef.BaseView implements GameDef.IView
        var BaseView = /*#__PURE__*/function (_cc$Component) {
          _inheritsLoose(BaseView, _cc$Component);
          function BaseView() {
            var _this;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            _this = _cc$Component.call.apply(_cc$Component, [this].concat(args)) || this;
            _this._ctrl = null;
            _this._isRegist = false;
            ////////////////////////////////////////
            // protected isMain: boolean = false;
            _this.isUpdateView = true;
            return _this;
          }
          var _proto2 = BaseView.prototype;
          ///////////////////////////////
          //需要override onLoad super.onLoad(GameCtrl.instance);
          _proto2.onLoad = function onLoad(iCtrl) {
            gts.Debug.Log("===BaseView====onLoad====");
            this._ctrl = iCtrl || null;
            if (this._ctrl && !this._isRegist && this.isUpdateView) {
              this._isRegist = true;
              this._ctrl.regist(this);
            }
          };
          _proto2.onEnable = function onEnable() {
            gts.Debug.Log("===BaseView====onEnable====");
            if (this._ctrl && !this._isRegist && this.isUpdateView) {
              this._isRegist = true;
              this._ctrl.regist(this);
            }
          }
          //若子类 有实现 则 需super.onDisable()
          ;

          _proto2.onDisable = function onDisable() {
            gts.Debug.Log("===BaseView====onDisable====");
            if (this._ctrl && this._isRegist && this.isUpdateView) {
              this._ctrl.unRegist(this);
              this._isRegist = false;
            }
            // console.trace("BaseView onDisable");
          };

          _proto2.onDestroy = function onDestroy() {
            gts.Debug.Log("===BaseView====onDestroy====");
            if (this._ctrl && this._isRegist && this.isUpdateView) {
              this._ctrl.unRegist(this);
              this._isRegist = false;
            }
            if (this._ctrl && this._ctrl.ref == 0) {
              this._ctrl.destroy();
              this._ctrl = null;
            }
          };
          return BaseView;
        }(Component);
        _GameDef.BaseView = BaseView;
        function BaseSington() {
          var baseSington = /*#__PURE__*/function () {
            function baseSington() {}
            baseSington.destroy = function destroy() {
              // gts.Debug.Log("===BaseSington====destroy====");

              if (this._instance) {
                delete this._instance;
                this._instance = null;
              }
            };
            _createClass(baseSington, null, [{
              key: "instance",
              get: function get() {
                if (!this._instance) {
                  this._instance = new this();
                }
                return this._instance;
              },
              set: function set(t) {
                this._instance = t;
              }
            }]);
            return baseSington;
          }();
          baseSington._instance = null;
          return baseSington;
        }
        _GameDef.BaseSington = BaseSington;
        var Constant = /*#__PURE__*/function (Constant) {
          Constant[Constant["moneyRatio"] = 10000] = "moneyRatio";
          Constant[Constant["baseScore"] = 200] = "baseScore";
          Constant[Constant["baseScoreIncreaseMultiple"] = 5] = "baseScoreIncreaseMultiple";
          Constant[Constant["baseRate"] = 1] = "baseRate";
          Constant[Constant["basePay"] = 20] = "basePay";
          return Constant;
        }({});
        _GameDef.Constant = Constant;
      })(GameDef || (GameDef = exports('GameDef', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GPRoundBoxAssembler.ts", ['cc'], function (exports) {
  var cclegacy, dynamicAtlasManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      dynamicAtlasManager = module.dynamicAtlasManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e6b42BRwPRDnYE4r4L7dClK", "GPRoundBoxAssembler", undefined);
      var GPRoundBoxAssembler = exports('GPRoundBoxAssembler', {
        // 根据圆角segments参数，构造网格的顶点索引列表
        GetIndexBuffer: function GetIndexBuffer(sprite) {
          var indexBuffer = [0, 1, 2, 2, 3, 0, 4, 5, 6, 6, 7, 4, 8, 9, 10, 10, 11, 8];

          // 为四个角的扇形push进索引值
          var index = 12;
          var fanIndexBuild = function fanIndexBuild(center, start, end) {
            var last = start;
            for (var i = 0; i < sprite.segments - 1; i++) {
              // 左上角 p2为扇形圆心，p1/p5为两个边界
              var cur = index;
              index++;
              indexBuffer.push(center, last, cur);
              last = cur;
            }
            indexBuffer.push(center, last, end);
          };
          if (sprite.leftBottom) fanIndexBuild(3, 4, 0);
          if (sprite.leftTop) fanIndexBuild(2, 1, 5);
          if (sprite.rightTop) fanIndexBuild(9, 6, 10);
          if (sprite.rightBottom) fanIndexBuild(8, 11, 7);
          return indexBuffer;
        },
        createData: function createData(sprite) {
          var renderData = sprite.requestRenderData();
          var corner = 0;
          corner += sprite.leftBottom ? 1 : 0;
          corner += sprite.leftTop ? 1 : 0;
          corner += sprite.rightTop ? 1 : 0;
          corner += sprite.rightBottom ? 1 : 0;
          var vNum = 12 + (sprite.segments - 1) * corner;
          renderData.dataLength = vNum;
          renderData.resize(vNum, 18 + sprite.segments * 3 * corner);
          var indexBuffer = GPRoundBoxAssembler.GetIndexBuffer(sprite);
          renderData.chunk.setIndexBuffer(indexBuffer);
          return renderData;
        },
        // 照抄simple的
        updateRenderData: function updateRenderData(sprite) {
          var frame = sprite.spriteFrame;
          dynamicAtlasManager.packToDynamicAtlas(sprite, frame);
          this.updateUVs(sprite); // dirty need
          //this.updateColor(sprite);// dirty need

          var renderData = sprite.renderData;
          if (renderData && frame) {
            if (renderData.vertDirty) {
              this.updateVertexData(sprite);
            }
            renderData.updateRenderData(sprite, frame);
          }
        },
        // 局部坐标转世界坐标 照抄的，不用改
        updateWorldVerts: function updateWorldVerts(sprite, chunk) {
          var renderData = sprite.renderData;
          var vData = chunk.vb;
          var dataList = renderData.data;
          var node = sprite.node;
          var m = node.worldMatrix;
          var stride = renderData.floatStride;
          var offset = 0;
          var length = dataList.length;
          for (var i = 0; i < length; i++) {
            var curData = dataList[i];
            var x = curData.x;
            var y = curData.y;
            var rhw = m.m03 * x + m.m07 * y + m.m15;
            rhw = rhw ? 1 / rhw : 1;
            offset = i * stride;
            vData[offset + 0] = (m.m00 * x + m.m04 * y + m.m12) * rhw;
            vData[offset + 1] = (m.m01 * x + m.m05 * y + m.m13) * rhw;
            vData[offset + 2] = (m.m02 * x + m.m06 * y + m.m14) * rhw;
          }
        },
        // 每帧调用的，把数据和到一整个meshbuffer里
        fillBuffers: function fillBuffers(sprite) {
          if (sprite === null) {
            return;
          }
          var renderData = sprite.renderData;
          var chunk = renderData.chunk;
          if (sprite.node.hasChangedFlags || renderData.vertDirty) {
            // const vb = chunk.vertexAccessor.getVertexBuffer(chunk.bufferId);
            this.updateWorldVerts(sprite, chunk);
            renderData.vertDirty = false;
          }
          if (sprite["_flagChangedVersion"] !== sprite.node["flagChangedVersion"] || renderData.vertDirty) {
            // const vb = chunk.vertexAccessor.getVertexBuffer(chunk.bufferId);
            this.updateWorldVerts(sprite, chunk);
            renderData.vertDirty = false;
            sprite["_flagChangedVersion"] = sprite.node["flagChangedVersion"];
          }

          // quick version
          var bid = chunk.bufferId;
          var vidOrigin = chunk.vertexOffset;
          var meshBuffer = chunk.meshBuffer;
          var ib = chunk.meshBuffer.iData;
          var indexOffset = meshBuffer.indexOffset;
          var vid = vidOrigin;
          // 沿着当前这个位置往后将我们这个对象的index放进去
          var indexBuffer = GPRoundBoxAssembler.GetIndexBuffer(sprite);
          for (var i = 0; i < renderData.indexCount; i++) {
            ib[indexOffset++] = vid + indexBuffer[i];
          }
          meshBuffer.indexOffset += renderData.indexCount;
        },
        // 计算每个顶点相对于sprite坐标的位置
        updateVertexData: function updateVertexData(sprite) {
          var renderData = sprite.renderData;
          if (!renderData) {
            return;
          }
          var uiTrans = sprite.node._uiProps.uiTransformComp;
          var dataList = renderData.data;
          var cw = uiTrans.width;
          var ch = uiTrans.height;
          var appX = uiTrans.anchorX * cw;
          var appY = uiTrans.anchorY * ch;
          var left = 0 - appX;
          var right = cw - appX;
          var top = ch - appY;
          var bottom = 0 - appY;
          var left_r = left + sprite.radius;
          var bottom_r = bottom + sprite.radius;
          var top_r = top - sprite.radius;
          var right_r = right - sprite.radius;

          // 三个矩形的顶点
          dataList[0].x = left;
          dataList[0].y = sprite.leftBottom ? bottom_r : bottom;
          dataList[1].x = left;
          dataList[1].y = sprite.leftTop ? top_r : top;
          dataList[2].x = left_r;
          dataList[2].y = sprite.leftTop ? top_r : top;
          dataList[3].x = left_r;
          dataList[3].y = sprite.leftBottom ? bottom_r : bottom;
          dataList[4].x = left_r;
          dataList[4].y = bottom;
          dataList[5].x = left_r;
          dataList[5].y = top;
          dataList[6].x = right_r;
          dataList[6].y = top;
          dataList[7].x = right_r;
          dataList[7].y = bottom;
          dataList[8].x = right_r;
          dataList[8].y = sprite.rightBottom ? bottom_r : bottom;
          dataList[9].x = right_r;
          dataList[9].y = sprite.rightTop ? top_r : top;
          dataList[10].x = right;
          dataList[10].y = sprite.rightTop ? top_r : top;
          dataList[11].x = right;
          dataList[11].y = sprite.rightBottom ? bottom_r : bottom;

          // 扇形圆角的顶点
          var index = 12;
          var fanPosBuild = function fanPosBuild(center, startAngle) {
            for (var i = 1; i < sprite.segments; i++) {
              // 我这里顶点都是按顺时针分配的，所以角度要从开始角度减
              // 每个扇形都是90度
              var angle = startAngle * Math.PI / 180 - i / sprite.segments * 0.5 * Math.PI;
              dataList[index].x = center.x + Math.cos(angle) * sprite.radius;
              dataList[index].y = center.y + Math.sin(angle) * sprite.radius;
              index++;
            }
          };
          if (sprite.leftBottom) fanPosBuild(dataList[3], 270);
          if (sprite.leftTop) fanPosBuild(dataList[2], 180);
          if (sprite.rightTop) fanPosBuild(dataList[9], 90);
          if (sprite.rightBottom) fanPosBuild(dataList[8], 0);
          renderData.vertDirty = true;
        },
        // 更新计算uv
        updateUVs: function updateUVs(sprite) {
          if (!sprite.spriteFrame) return;
          var renderData = sprite.renderData;
          var vData = renderData.chunk.vb;
          var uv = sprite.spriteFrame.uv;

          // 这里我打印了一下uv的值，第一个看上去是左上角，但其实，opengl端的纹理存在上下颠倒问题，所以这里其实还是左下角
          // 左下，右下，左上，右上
          var uv_l = uv[0];
          var uv_b = uv[1];
          var uv_r = uv[2];
          var uv_t = uv[5];
          var uv_w = Math.abs(uv_r - uv_l);
          var uv_h = uv_t - uv_b;
          var uiTrans = sprite.node._uiProps.uiTransformComp;
          var dataList = renderData.data;
          var cw = uiTrans.width;
          var ch = uiTrans.height;
          var appX = uiTrans.anchorX * cw;
          var appY = uiTrans.anchorY * ch;

          // 用相对坐标，计算uv
          for (var i = 0; i < renderData.dataLength; i++) {
            vData[i * renderData.floatStride + 3] = uv_l + (dataList[i].x + appX) / cw * uv_w;
            vData[i * renderData.floatStride + 4] = uv_b + (dataList[i].y + appY) / ch * uv_h;
          }
        },
        // 照抄，不用改
        updateColor: function updateColor(sprite) {
          var renderData = sprite.renderData;
          var vData = renderData.chunk.vb;
          var colorOffset = 5;
          var color = sprite.color;
          var colorR = color.r / 255;
          var colorG = color.g / 255;
          var colorB = color.b / 255;
          var colorA = color.a / 255;
          for (var i = 0; i < renderData.dataLength; i++, colorOffset += renderData.floatStride) {
            vData[colorOffset] = colorR;
            vData[colorOffset + 1] = colorG;
            vData[colorOffset + 2] = colorB;
            vData[colorOffset + 3] = colorA;
          }
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GPRoundBoxSprite.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GPRoundBoxAssembler.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _extends, _createClass, cclegacy, _decorator, Sprite, CCBoolean, SpriteAtlas, CCInteger, CCFloat, SpriteFrame, InstanceMaterialType, RenderTexture, Material, UIRenderer, GPRoundBoxAssembler;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _extends = module.extends;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      CCBoolean = module.CCBoolean;
      SpriteAtlas = module.SpriteAtlas;
      CCInteger = module.CCInteger;
      CCFloat = module.CCFloat;
      SpriteFrame = module.SpriteFrame;
      InstanceMaterialType = module.InstanceMaterialType;
      RenderTexture = module.RenderTexture;
      Material = module.Material;
      UIRenderer = module.UIRenderer;
    }, function (module) {
      GPRoundBoxAssembler = module.GPRoundBoxAssembler;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "b0cc2DuZkhP765zU0OC0k54", "GPRoundBoxSprite", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        type = _decorator.type;
      var GPRoundBoxSprite = exports('GPRoundBoxSprite', (_dec = ccclass("tools/GPRoundBoxSprite"), _dec2 = property({
        serializable: true
      }), _dec3 = type(Sprite.SizeMode), _dec4 = property({
        serializable: true
      }), _dec5 = property({
        type: CCBoolean
      }), _dec6 = property({
        serializable: true
      }), _dec7 = type(SpriteAtlas), _dec8 = property({
        type: CCInteger,
        serializable: true
      }), _dec9 = property({
        type: CCInteger,
        serializable: true,
        min: 1
      }), _dec10 = property({
        type: CCFloat,
        serializable: true
      }), _dec11 = property({
        type: CCFloat,
        serializable: true,
        min: 0
      }), _dec12 = property({
        serializable: true
      }), _dec13 = type(SpriteFrame), _dec14 = property({
        serializable: true
      }), _dec15 = property({
        serializable: true
      }), _dec16 = property({
        serializable: true
      }), _dec17 = property({
        serializable: true
      }), _dec18 = property({
        serializable: true
      }), _dec19 = property({
        serializable: true
      }), _dec20 = property({
        serializable: true
      }), _dec21 = property({
        serializable: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_UIRenderer) {
        _inheritsLoose(GPRoundBoxSprite, _UIRenderer);
        function GPRoundBoxSprite() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _UIRenderer.call.apply(_UIRenderer, [this].concat(args)) || this;
          // 尺寸模式，可以看枚举原本定义的地方有注释说明
          _initializerDefineProperty(_this, "_sizeMode", _descriptor, _assertThisInitialized(_this));
          /**
           * @en Grayscale mode.
           * @zh 是否以灰度模式渲染。
           */
          _initializerDefineProperty(_this, "_useGrayscale", _descriptor2, _assertThisInitialized(_this));
          // 图集
          _initializerDefineProperty(_this, "_atlas", _descriptor3, _assertThisInitialized(_this));
          // 圆角用三角形模拟扇形的线段数量，越大，则越圆滑
          _initializerDefineProperty(_this, "_segments", _descriptor4, _assertThisInitialized(_this));
          // 圆角半径
          _initializerDefineProperty(_this, "_radius", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_spriteFrame", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_leftTop", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_rightTop", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_leftBottom", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_rightBottom", _descriptor10, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = GPRoundBoxSprite.prototype;
        _proto.onLoad = function onLoad() {
          _UIRenderer.prototype.onLoad.call(this);
          this._flushAssembler();
        };
        _proto.__preload = function __preload() {
          this.changeMaterialForDefine();
          _UIRenderer.prototype.__preload.call(this);
        };
        _proto.onEnable = function onEnable() {
          _UIRenderer.prototype.onEnable.call(this);

          // Force update uv, material define, active material, etc
          this._activateMaterial();
          var spriteFrame = this._spriteFrame;
          if (spriteFrame) {
            this._updateUVs();
          }
        };
        _proto.onDestroy = function onDestroy() {
          _UIRenderer.prototype.onDestroy.call(this);
        }

        /**
         * @en
         * Quickly switch to other sprite frame in the sprite atlas.
         * If there is no atlas, the switch fails.
         *
         * @zh
         * 选取使用精灵图集中的其他精灵。
         * @param name @en Name of the spriteFrame to switch. @zh 要切换的 spriteFrame 名字。
         */;
        _proto.changeSpriteFrameFromAtlas = function changeSpriteFrameFromAtlas(name) {
          if (!this._atlas) {
            console.warn("SpriteAtlas is null.");
            return;
          }
          var sprite = this._atlas.getSpriteFrame(name);
          this.spriteFrame = sprite;
        }

        /**
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         */;
        _proto.changeMaterialForDefine = function changeMaterialForDefine() {
          var texture;
          var lastInstanceMaterialType = this._instanceMaterialType;
          if (this._spriteFrame) {
            texture = this._spriteFrame.texture;
          }
          var value = false;
          if (texture instanceof cclegacy.TextureBase) {
            var format = texture.getPixelFormat();
            value = format === cclegacy.TextureBase.PixelFormat.RGBA_ETC1 || format === cclegacy.TextureBase.PixelFormat.RGB_A_PVRTC_4BPPV1 || format === cclegacy.TextureBase.PixelFormat.RGB_A_PVRTC_2BPPV1;
          }
          if (value && this.grayscale) {
            this._instanceMaterialType = InstanceMaterialType.USE_ALPHA_SEPARATED_AND_GRAY;
          } else if (value) {
            this._instanceMaterialType = InstanceMaterialType.USE_ALPHA_SEPARATED;
          } else if (this.grayscale) {
            this._instanceMaterialType = InstanceMaterialType.GRAYSCALE;
          } else {
            this._instanceMaterialType = InstanceMaterialType.ADD_COLOR_AND_TEXTURE;
          }
          if (lastInstanceMaterialType !== this._instanceMaterialType) {
            // this.updateMaterial();
            // d.ts里没有注上这个函数，直接调用会表红。
            this["updateMaterial"]();
          }
        };
        _proto._updateBuiltinMaterial = function _updateBuiltinMaterial() {
          var mat = _UIRenderer.prototype._updateBuiltinMaterial.call(this);
          if (this.spriteFrame && this.spriteFrame.texture instanceof RenderTexture) {
            var defines = _extends({
              SAMPLE_FROM_RT: true
            }, mat.passes[0].defines);
            var renderMat = new Material();
            renderMat.initialize({
              effectAsset: mat.effectAsset,
              defines: defines
            });
            mat = renderMat;
          }
          return mat;
        };
        _proto._render = function _render(render) {
          render.commitComp(this, this.renderData, this._spriteFrame, this._assembler, null);
        };
        _proto._canRender = function _canRender() {
          if (!_UIRenderer.prototype._canRender.call(this)) {
            return false;
          }
          var spriteFrame = this._spriteFrame;
          if (!spriteFrame || !spriteFrame.texture) {
            return false;
          }
          return true;
        };
        _proto.resetAssembler = function resetAssembler() {
          this._assembler = null;
          this._flushAssembler();
        };
        _proto._flushAssembler = function _flushAssembler() {
          var assembler = GPRoundBoxAssembler;
          if (this._assembler !== assembler) {
            this.destroyRenderData();
            this._assembler = assembler;
          }
          if (!this._renderData) {
            if (this._assembler && this._assembler.createData) {
              this._renderData = this._assembler.createData(this);
              this._renderData.material = this.getRenderMaterial(0);
              this.markForUpdateRenderData();
              if (this.spriteFrame) {
                this._assembler.updateRenderData(this);
              }
              this._updateColor();
            }
          }
        };
        _proto._applySpriteSize = function _applySpriteSize() {
          if (this._spriteFrame) {
            {
              if (Sprite.SizeMode.RAW === this._sizeMode) {
                var size = this._spriteFrame.originalSize;
                this.node._uiProps.uiTransformComp.setContentSize(size);
              } else if (Sprite.SizeMode.TRIMMED === this._sizeMode) {
                var rect = this._spriteFrame.rect;
                this.node._uiProps.uiTransformComp.setContentSize(rect.width, rect.height);
              }
            }
            this.markForUpdateRenderData(true);
            this._assembler.updateRenderData(this);
          }
        };
        _proto._resized = function _resized() {
          {
            return;
          }
        };
        _proto._activateMaterial = function _activateMaterial() {
          var spriteFrame = this._spriteFrame;
          var material = this.getRenderMaterial(0);
          if (spriteFrame) {
            if (material) {
              this.markForUpdateRenderData();
            }
          }
          if (this.renderData) {
            this.renderData.material = material;
          }
        };
        _proto._updateUVs = function _updateUVs() {
          if (this._assembler) {
            this._assembler.updateUVs(this);
          }
        };
        _proto._applySpriteFrame = function _applySpriteFrame(oldFrame) {
          var spriteFrame = this._spriteFrame;
          var textureChanged = false;
          if (spriteFrame) {
            if (!oldFrame || oldFrame.texture !== spriteFrame.texture) {
              textureChanged = true;
            }
            if (textureChanged) {
              if (this.renderData) this.renderData.textureDirty = true;
              this.changeMaterialForDefine();
            }
            this._applySpriteSize();
          }
        };
        _createClass(GPRoundBoxSprite, [{
          key: "sizeMode",
          get: function get() {
            return this._sizeMode;
          },
          set: function set(value) {
            if (this._sizeMode === value) {
              return;
            }
            this._sizeMode = value;
            if (value !== Sprite.SizeMode.CUSTOM) {
              this._applySpriteSize();
            }
          }
        }, {
          key: "grayscale",
          get: function get() {
            return this._useGrayscale;
          },
          set: function set(value) {
            if (this._useGrayscale === value) {
              return;
            }
            this._useGrayscale = value;
            this.changeMaterialForDefine();
            this["updateMaterial"]();
          }
        }, {
          key: "spriteAtlas",
          get: function get() {
            return this._atlas;
          },
          set: function set(value) {
            if (this._atlas === value) {
              return;
            }
            this._atlas = value;
          }
        }, {
          key: "segments",
          get: function get() {
            return this._segments;
          },
          set: function set(segments) {
            this._segments = segments;
            this._renderData = null;
            this._flushAssembler();
          }
        }, {
          key: "radius",
          get: function get() {
            return this._radius;
          },
          set: function set(radius) {
            this._radius = radius;
            this._updateUVs();
            this.markForUpdateRenderData(true);
          }
        }, {
          key: "spriteFrame",
          get: function get() {
            return this._spriteFrame;
          },
          set: function set(value) {
            if (this._spriteFrame === value) {
              return;
            }
            var lastSprite = this._spriteFrame;
            this._spriteFrame = value;
            this.markForUpdateRenderData();
            this._applySpriteFrame(lastSprite);
          }
        }, {
          key: "leftTop",
          get: function get() {
            return this._leftTop;
          },
          set: function set(value) {
            this._leftTop = value;
            this.resetAssembler();
          }
        }, {
          key: "rightTop",
          get: function get() {
            return this._rightTop;
          },
          set: function set(value) {
            this._rightTop = value;
            this.resetAssembler();
          }
        }, {
          key: "leftBottom",
          get: function get() {
            return this._leftBottom;
          },
          set: function set(value) {
            this._leftBottom = value;
            this.resetAssembler();
          }
        }, {
          key: "rightBottom",
          get: function get() {
            return this._rightBottom;
          },
          set: function set(value) {
            this._rightBottom = value;
            this.resetAssembler();
          }
        }]);
        return GPRoundBoxSprite;
      }(UIRenderer), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_sizeMode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Sprite.SizeMode.TRIMMED;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "sizeMode", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "sizeMode"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_useGrayscale", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "grayscale", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "grayscale"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_atlas", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "spriteAtlas", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "spriteAtlas"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_segments", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "segments", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "segments"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_radius", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "radius", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "radius"), _class2.prototype), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_spriteFrame", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "spriteFrame", [_dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "spriteFrame"), _class2.prototype), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_leftTop", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "leftTop", [_dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "leftTop"), _class2.prototype), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_rightTop", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "rightTop", [_dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "rightTop"), _class2.prototype), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_leftBottom", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "leftBottom", [_dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "leftBottom"), _class2.prototype), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_rightBottom", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "rightBottom", [_dec21], Object.getOwnPropertyDescriptor(_class2.prototype, "rightBottom"), _class2.prototype)), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GUtil.ts", ['cc', './AudioManager.ts', './EventManager.ts'], function (exports) {
  var cclegacy, v3, tween, Tween, v2, instantiate, NodePool, UIOpacity, UITransform, Label, sys, Button, BlockInputEvents, game, AudioManager, EventManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
      tween = module.tween;
      Tween = module.Tween;
      v2 = module.v2;
      instantiate = module.instantiate;
      NodePool = module.NodePool;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      Label = module.Label;
      sys = module.sys;
      Button = module.Button;
      BlockInputEvents = module.BlockInputEvents;
      game = module.game;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      exports('GDef', void 0);
      cclegacy._RF.push({}, "6a9f8P4Gx1Pr6l3CHU/9VOj", "GUtil", undefined);
      var GDef;
      var GUtil = exports('default', /*#__PURE__*/function () {
        function GUtil() {}
        /**
         *  二阶贝塞尔曲线 运动
         * @param target
         * @param {number} duration
         * @param {} c1 起点坐标
         * @param {} c2 控制点
         * @param {Vec3} to 终点坐标
         * @param opts
         * @returns {any}
         */
        GUtil.bezierTo = function bezierTo(target, duration, c1, c2, to, opts) {
          if (opts === void 0) {
            opts = null;
          }
          opts = opts || Object.create(null);
          /**
           * @desc 二阶贝塞尔
           * @param {number} t 当前百分比
           * @param {} p1 起点坐标
           * @param {} cp 控制点
           * @param {} p2 终点坐标
           * @returns {any}
           */
          var twoBezier = function twoBezier(t, p1, cp, p2) {
            var x = (1 - t) * (1 - t) * p1.x + 2 * t * (1 - t) * cp.x + t * t * p2.x;
            var y = (1 - t) * (1 - t) * p1.y + 2 * t * (1 - t) * cp.y + t * t * p2.y;
            return v3(x, y, 0);
          };
          opts.onUpdate = function (arg, ratio) {
            target.position = twoBezier(ratio, c1, c2, to);
          };
          return tween(target).to(duration, {}, opts);
        }

        /**
         * 3阶贝塞尔曲线
         * @param target
         * @param t
         * @param p1
         * @param cp1
         * @param cp2
         * @param p2
         * @param opts
         * @returns
         */;
        GUtil.bezierTo3 = function bezierTo3(target, t, p1, cp1, cp2, p2, opts) {
          if (opts === void 0) {
            opts = null;
          }
          opts = opts || Object.create(null);
          var threeBezier = function threeBezier(t, p1, cp1, cp2, p2) {
            var x = (1 - t) * (1 - t) * (1 - t) * p1.x + 3 * t * (1 - t) * (1 - t) * cp1.x + 3 * t * t * (1 - t) * cp2.x + t * t * t * p2.x;
            var y = (1 - t) * (1 - t) * (1 - t) * p1.y + 3 * t * (1 - t) * (1 - t) * cp1.y + 3 * t * t * (1 - t) * cp2.y + t * t * t * p2.y;
            var z = (1 - t) * (1 - t) * (1 - t) * p1.z + 3 * t * (1 - t) * (1 - t) * cp1.z + 3 * t * t * (1 - t) * cp2.z + t * t * t * p2.z;
            return v3(x, y, z);
          };
          opts.onUpdate = function (arg, ratio) {
            target.position = threeBezier(ratio, p1, cp1, cp2, p2);
            if (opts.updateCb) {
              opts.updateCb();
            }
          };
          return tween(target).to(t, {}, opts);
        }
        /**
         * 3阶3D贝塞尔曲线
         * @param target
         * @param t
         * @param p1
         * @param cp1
         * @param cp2
         * @param p2
         * @param opts
         * @returns
         */;
        GUtil.bezierTo3W = function bezierTo3W(target, t, p1, cp1, cp2, p2, opts) {
          if (opts === void 0) {
            opts = null;
          }
          opts = opts || Object.create(null);
          var threeBezier = function threeBezier(t, p1, cp1, cp2, p2) {
            var x = (1 - t) * (1 - t) * (1 - t) * p1.x + 3 * t * (1 - t) * (1 - t) * cp1.x + 3 * t * t * (1 - t) * cp2.x + t * t * t * p2.x;
            var y = (1 - t) * (1 - t) * (1 - t) * p1.y + 3 * t * (1 - t) * (1 - t) * cp1.y + 3 * t * t * (1 - t) * cp2.y + t * t * t * p2.y;
            var z = (1 - t) * (1 - t) * (1 - t) * p1.z + 3 * t * (1 - t) * (1 - t) * cp1.z + 3 * t * t * (1 - t) * cp2.z + t * t * t * p2.z;
            return v3(x, y, z);
          };
          opts.onUpdate = function (arg, ratio) {
            target.worldPosition = threeBezier(ratio, p1, cp1, cp2, p2);
            if (opts.updateCb) {
              opts.updateCb();
            }
          };
          return tween(target).to(t, {}, opts);
        };
        GUtil.NodeRotate = function NodeRotate(node, dt, angle, times) {
          if (dt === void 0) {
            dt = 5;
          }
          if (times === void 0) {
            times = -1;
          }
          if (!node) {
            return;
          }
          Tween.stopAllByTarget(node);
          node.angle = 0;
          node.active = true;
          // let act = cc.rotateBy(dt, angle);
          if (times <= 0) {
            // node.runAction(cc.repeatForever(act));
            tween(node).by(dt, {
              angle: 360
            }).repeatForever().start();
          } else {
            // node.runAction(cc.repeat(act, times));
            tween(node).by(dt, {
              angle: 360
            }).repeat(times).start();
          }
        };
        GUtil.PointInCricle = function PointInCricle(r, angle) {
          var x = this.PointXInCircle(r, angle);
          var y = this.PointYInCircle(r, angle);
          return v2(x, y);
        };
        GUtil.PointXInCircle = function PointXInCircle(r, angle) {
          return r * Math.cos(angle / (180 / Math.PI));
        };
        GUtil.PointYInCircle = function PointYInCircle(r, angle) {
          return r * Math.sin(angle / (180 / Math.PI));
        };
        GUtil.NewObj2Pool = function NewObj2Pool(pool, comp, copyTarget, count) {
          if (count === void 0) {
            count = 20;
          }
          if (!pool || !copyTarget) {
            return;
          }
          for (var i = 0; i < count; ++i) {
            var unit = instantiate(copyTarget);
            pool.put(unit);
          }
        };
        GUtil.AllocObjPool = function AllocObjPool(name, comp, copyTarget, count) {
          if (count === void 0) {
            count = 20;
          }
          var pool = new NodePool();
          this.NewObj2Pool(pool, comp, copyTarget, count);
          return pool;
        };
        GUtil.GetObjFromPool = function GetObjFromPool(pool, comp, copyTarget, params) {
          if (!pool) {
            return null;
          }
          if (pool.size() <= 0) {
            this.NewObj2Pool(pool, comp, copyTarget);
          }
          return pool.get(params);
        };
        GUtil.MakeHnd = function MakeHnd(func, caller) {
          return func ? caller ? func.bind(caller) : func : function () {};
        };
        GUtil.HideNode = function HideNode(node) {
          this.NodeVisible(node, false);
        };
        GUtil.ShowNode = function ShowNode(node) {
          this.NodeVisible(node, true);
        }
        //    /**
        //     *
        //     * @param node
        //     * @param visible
        //     * @param duration 默认0
        //     */
        ;

        GUtil.NodeVisible = function NodeVisible(node, visible, duration) {
          if (duration === void 0) {
            duration = 0;
          }
          if (node) {
            if (duration <= 0) {
              node.active = visible;
            } else {
              // node.stopAllActions();
              Tween.stopAllByTarget(node);
              Tween.stopAllByTarget(node.getComponent(UIOpacity));
              var dt = duration / 2;
              if (visible) {
                node.active = true;
                node.getComponent(UIOpacity).opacity = 0;
                node.scale = v3(0.7, 0.7, 0.7);
                tween(node.getComponent(UIOpacity)).to(dt, {
                  opacity: 255
                }, {
                  easing: "cubicIn"
                }).start();
                tween(node).to(dt, {
                  scale: v3(1.1, 1.1, 1.1)
                }, {
                  easing: "cubicIn"
                }).to(dt, {
                  scale: v3(1, 1, 1)
                }, {
                  easing: "cubicIn"
                }).start();
              } else {
                tween(node.getComponent(UIOpacity)).to(dt, {
                  opacity: 0
                }, {
                  easing: "cubicIn"
                }).start();
                tween(node).to(dt * 0.2, {
                  scale: v3(1.1, 1.1, 1.1)
                }, {
                  easing: "cubicIn"
                }).to(dt * 0.8, {
                  scale: v3(0.7, 0.7, 0.7)
                }, {
                  easing: "cubicIn"
                }).start();
              }
            }
          }
        };
        GUtil.Pos_L2W = function Pos_L2W(node) {
          if (!node || !node.parent) {
            return v3(0, 0, 0);
          }
          var pos = node.parent.getComponent(UITransform).convertToWorldSpaceAR(node.position);
          return pos; //poscc.v2(pos.getPosition().x, pos.getPosition().y);
        };

        GUtil.Pos_L2W_V2 = function Pos_L2W_V2(node) {
          var pos = this.Pos_L2W(node);
          return v2(pos.x, pos.y);
        };
        GUtil.Pos_W2L = function Pos_W2L(pos, node) {
          var out = node.getComponent(UITransform).convertToNodeSpaceAR(v3(pos.x, pos.y, 0));
          return out;
        };
        GUtil.Pos_W2L_V2 = function Pos_W2L_V2(pos, node) {
          var out = this.Pos_W2L(pos, node);
          return v2(out.x, out.y);
        };
        GUtil.TransPos = function TransPos(node, target) {
          var wpos = this.Pos_L2W(node);
          var lPos = this.Pos_W2L(wpos, target);
          return lPos;
        };
        GUtil.SetLabCacheMode = function SetLabCacheMode(node, mode) {
          var lab = node ? node.getComponent(Label) : null;
          if (!lab) {
            return;
          }
          lab.cacheMode = mode;
        };
        GUtil.LookAt = function LookAt(node, worldPos, fix) {
          var wPos = GUtil.Pos_L2W(node);
          var angle = Math.atan2(wPos.y - worldPos.y, wPos.x - worldPos.x);
          var theta = angle * (180 / Math.PI) + fix;
          node.angle = theta;
          return theta;
        }
        //    //
        ;

        GUtil.getAngle = function getAngle(wCanPos, worldPos, fix) {
          var angle = Math.atan2(wCanPos.y - worldPos.y, wCanPos.x - worldPos.x);
          var theta = angle * (180 / Math.PI) + fix;
          return theta;
        }
        //    //取两点间距离
        ;

        GUtil.GetDistance = function GetDistance(startPos, endPos) {
          var diff_x = startPos.x - endPos.x;
          var diff_y = startPos.y - endPos.y;
          var distance = Math.pow(diff_x * diff_x + diff_y * diff_y, 0.5);
          return distance;
        }
        //    //通过初始位置和角度和距离，计算目标位置
        ;

        GUtil.GetDestination = function GetDestination(startPos, angle, distance) {
          var radian = angle / 180 * Math.PI;
          var diff_x = Math.cos(radian) * distance;
          var diff_y = Math.sin(radian) * distance;
          var x = startPos.x + diff_x;
          var y = startPos.y + diff_y;
          return v2(x, y);
        };
        GUtil.Distance = function Distance(x1, y1, x2, y2) {
          return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        };
        GUtil.SetNodeAngle = function SetNodeAngle(node, angle) {
          if (!node) {
            return;
          }
          node.angle = angle;
        };
        GUtil.numberFormat = function numberFormat(num, digits) {
          var rate = "" + num;
          var arrRate = rate.split(".");
          var digit = num - Math.floor(num);
          if (!arrRate[1] || digit < 1 / Math.pow(10, digits)) {
            rate = "" + arrRate[0];
          } else if (arrRate[1].length < digits) {
            //            // while (arrRate[1].length < digits) {
            //            //     arrRate[1] = arrRate[1].concat("0");
            //            // }
            rate = arrRate[0] + "." + arrRate[1];
          } else if (arrRate[1].length > digits) {
            arrRate[1] = arrRate[1].substring(0, digits);
            rate = arrRate[0] + "." + arrRate[1];
          }

          //        // gts.Debug.Log("==numberFormat==" + rate);
          return rate;
        };
        GUtil.numberFormatFloat = function numberFormatFloat(num, digits) {
          var rate = "" + num;
          var arrRate = rate.split(".");
          if (!arrRate[1]) {
            rate = arrRate[0] + ".00";
          } else if (arrRate[1].length < digits) {
            while (arrRate[1].length < digits) {
              arrRate[1] = arrRate[1].concat("0");
            }
            rate = arrRate[0] + "." + arrRate[1];
          } else if (arrRate[1].length > digits) {
            arrRate[1] = arrRate[1].substring(0, digits);
            rate = arrRate[0] + "." + arrRate[1];
          }
          return rate;
        };
        GUtil.setCursorStytle = function setCursorStytle() {
          if (sys.platform == sys.Platform.DESKTOP_BROWSER) {
            if (Button.prototype["__onMouseMoveIn"]) {
              return;
            }

            //@ts-ignore
            Button.prototype["__onMouseMoveIn"] = Button.prototype._onMouseMoveIn;
            //@ts-ignore
            Button.prototype._onMouseMoveIn = function (event) {
              if (!this.interactable || !this.enabledInHierarchy) {
                EventManager.getInstance().emit("onMouseMoveOut" + event.target.name, event);
                return;
              }
              if (!this.node.getComponent(BlockInputEvents)) {
                game.canvas.style.cursor = "pointer";
                EventManager.getInstance().emit("onMouseMoveIn" + event.target.name, event);
              }
              Button.prototype["__onMouseMoveIn"].call(this, event);
            };

            //@ts-ignore
            Button.prototype["__onMouseMoveOut"] = Button.prototype._onMouseMoveOut;
            //@ts-ignore
            Button.prototype._onMouseMoveOut = function (event) {
              if (!this.interactable || !this.enabledInHierarchy) {
                EventManager.getInstance().emit("onMouseMoveOut" + event.target.name, event);
                return;
              }
              game.canvas.style.cursor = "default";
              Button.prototype["__onMouseMoveOut"].call(this, event);
              EventManager.getInstance().emit("onMouseMoveOut" + event.target.name, event);
            };

            //@ts-ignore
            Button.prototype["__onTouchEnded"] = Button.prototype._onTouchEnded;
            //@ts-ignore
            Button.prototype._onTouchEnded = function (event) {
              if (!this.interactable || !this.enabledInHierarchy) {
                return;
              }

              //                // cc.game.canvas.style.cursor = "default";

              if (!(event.target && event.target.getComponent("onBtnPress"))) {
                if (this._pressed) AudioManager.instance.playbuttonEffect();
              }
              Button.prototype["__onTouchEnded"].call(this, event);
              EventManager.getInstance().emit("onMouseMoveOut" + event.target.name, event);
            };
          } else {
            //@ts-ignore
            Button.prototype["__onTouchBegan"] = Button.prototype._onTouchBegan;
            //@ts-ignore
            Button.prototype._onTouchBegan = function (event) {
              if (!this.interactable || !this.enabledInHierarchy) {
                return;
              }
              Button.prototype["__onTouchBegan"].call(this, event);
              EventManager.getInstance().emit("onMouseMoveIn" + event.target.name, event);
            };

            //@ts-ignore
            Button.prototype["__onTouchEnded"] = Button.prototype._onTouchEnded;
            //@ts-ignore
            Button.prototype._onTouchEnded = function (event) {
              if (!this.interactable || !this.enabledInHierarchy) {
                return;
              }
              //                // cc.game.canvas.style.cursor = "default";

              if (!(event.target && event.target.getComponent("onBtnPress"))) {
                if (this._pressed) AudioManager.instance.playbuttonEffect();
              }
              Button.prototype["__onTouchEnded"].call(this, event);
              EventManager.getInstance().emit("onMouseMoveOut" + event.target.name, event);
            };
          }
          gts.List.prototype["updateGrid_H"] = function () {
            var e,
              i = this.itemList,
              s = this.halfScrollView,
              o = this.scrollView.content.position.x > this.lastContentPosX,
              n = (this.itemWidth + this.spaceX) * (this.spawnCount / this.gridRow);
            for (var a = 0; a < i.length; a++) {
              e = i[a];
              var h = this.getPositionInView(e);
              if (o) {
                if (h.x > s && e.position.x - n - this.padding_left > 0) {
                  var _i = e.getComponent(gts.ListItem),
                    _s = _i.itemIndex - this.spawnCount / this.gridRow * this.gridRow;
                  null != this.itemDataList[_s] ? (e.position.x = e.position.x - n, _i.itemIndex = _s, _i.data = this.itemDataList[_s], _i.OnDataChanged(), e.getComponent(UIOpacity).opacity = 255) : (e.position.x = e.position.x - n, _i.itemIndex = _s, e.getComponent(UIOpacity).opacity = 0);
                }
              } else if (h.x < -s && e.position.x + n + this.padding_right < this.content.getComponent(UITransform).width) {
                var _i2 = e.getComponent(gts.ListItem),
                  _s2 = _i2.itemIndex + this.spawnCount / this.gridRow * this.gridRow;
                null != this.itemDataList[_s2] ? (e.position.x = e.position.x + n, _i2.itemIndex = _s2, _i2.data = this.itemDataList[_s2], _i2.OnDataChanged(), e.getComponent(UIOpacity).opacity = 255) : (e.position.x = e.position.x + n, _i2.itemIndex = _s2, e.getComponent(UIOpacity).opacity = 0);
              }
            }
            this.lastContentPosX = this.scrollView.content.position.x;
          };
          gts.List.prototype["updateGrid_V"] = function () {
            var e,
              i = this.itemList,
              s = this.halfScrollView,
              o = this.scrollView.content.position.y > this.lastContentPosY,
              n = (this.itemHeight + this.spaceY) * (this.spawnCount / this.gridCol);
            for (var a = 0; a < i.length; a++) {
              e = i[a];
              var h = this.getPositionInView(e);
              if (o) {
                if (h.y > s && e.position.y - n - this.padding_buttom > -this.content.getComponent(UITransform).height) {
                  var _i3 = e.getComponent(gts.ListItem),
                    _s3 = _i3.itemIndex + this.spawnCount / this.gridCol * this.gridCol;
                  null != this.itemDataList[_s3] ? (e.position.y = e.position.y - n, _i3.itemIndex = _s3, _i3.data = this.itemDataList[_s3], _i3.OnDataChanged(), e.getComponent(UIOpacity).opacity = 255) : (e.position.y = e.position.y - n, _i3.itemIndex = _s3, e.getComponent(UIOpacity).opacity = 0);
                }
              } else if (h.y < -s && e.position.y + n + this.padding_top < 0) {
                var _i4 = e.getComponent(gts.ListItem),
                  _s4 = _i4.itemIndex - this.spawnCount / this.gridCol * this.gridCol;
                null != this.itemDataList[_s4] ? (e.position.y = e.position.y + n, _i4.itemIndex = _s4, _i4.data = this.itemDataList[_s4], _i4.OnDataChanged(), e.getComponent(UIOpacity).opacity = 255) : (e.position.y = e.position.y + n, _i4.itemIndex = _s4, e.getComponent(UIOpacity).opacity = 0);
              }
            }
            this.lastContentPosY = this.scrollView.content.position.y;
          };
          gts.List.prototype["udpateH"] = function () {
            var e,
              i = this.itemList,
              s = this.halfScrollView,
              o = this.scrollView.content.position.x > this.lastContentPosX,
              n = (this.itemWidth + this.spaceX) * i.length;
            for (var a = 0; a < i.length; a++) {
              e = i[a];
              var h = this.getPositionInView(e);
              if (o) {
                if (h.x > s && e.position.x - n - this.padding_left > 0) {
                  var _s5 = e.getComponent(gts.ListItem),
                    _o = _s5.itemIndex - i.length;
                  _s5.itemIndex = _o, _s5.data = this.itemDataList[_o], _s5.OnDataChanged(), e.setPosition(e.position.x - n, e.position.y);
                }
              } else if (h.x < -s && e.position.x + n + this.padding_right < this.content.getComponent(UITransform).width) {
                var _s6 = e.getComponent(gts.ListItem),
                  _o2 = _s6.itemIndex + i.length;
                _s6.itemIndex = _o2, _s6.data = this.itemDataList[_o2], _s6.OnDataChanged(), e.setPosition(e.position.x + n, e.position.y);
              }
            }
            this.lastContentPosX = this.scrollView.content.position.x;
          };
          gts.List.prototype["updateV"] = function () {
            var t = this.itemList,
              e = null,
              i = this.halfScrollView,
              s = this._forceRefresh || this.scrollView.content.position.y > this.lastContentPosY,
              o = (this.itemHeight + this.spaceY) * t.length;
            for (var n = 0; n < t.length; n++) {
              e = t[n];
              var a = this.getPositionInView(e);
              if (s) {
                if (this._forceRefresh) for (; a.y > i && e.position.y - o - this.padding_buttom > -this.content.getComponent(UITransform).height;) this.updateV_up(e, o);else a.y > i && e.position.y - o - this.padding_buttom > -this.content.getComponent(UITransform).height && this.updateV_up(e, o);
              } else if (this._forceRefresh) for (; a.y < -i && e.position.y + o + this.padding_top < 0;) this.updateV_down(e, o);else a.y < -i && e.position.y + o + this.padding_top < 0 && this.updateV_down(e, o);
            }
            this.lastContentPosY = this.scrollView.content.position.y, this._forceRefresh = !1;
          };
          gts.List.prototype["updateV_up"] = function (e, i) {
            var s = e.getComponent(gts.ListItem),
              o = s.itemIndex + this.itemList.length;
            s.itemIndex = o, s.data = this.itemDataList[o], s.OnDataChanged(), e.setPosition(e.position.x, e.position.y - i);
          };
          gts.List.prototype["updateV_down"] = function (e, i) {
            var s = e.getComponent(gts.ListItem),
              o = s.itemIndex - this.itemList.length;
            s.itemIndex = o, s.data = this.itemDataList[o], s.OnDataChanged(), e.setPosition(e.position.x, e.position.y + i);
          };
          gts.List.prototype["createList"] = function (e, i) {
            this.itemDataList.length > this.spawnCount && e + this.spawnCount - 1 >= this.itemDataList.length ? (e = this.itemDataList.length - this.spawnCount, i = this.scrollView.getMaxScrollOffset()) : this.itemDataList.length <= this.spawnCount && (e = 0);
            for (var h = 0; h < this.spawnCount; h++) {
              var ie = void 0;
              if (!(h + e < this.itemDataList.length)) {
                this.itemList.length > this.itemDataList.length - e && ((ie = this.itemList.pop()).removeFromParent(), this.itemPool.push(ie));
                continue;
              }
              null == this.itemList[h] ? ((ie = this.getItem()).active = !0, this.itemList.push(ie), ie.parent = this.content) : ie = this.itemList[h];
              var r = ie.getComponent(gts.ListItem);
              if (r.itemIndex = h + e, r.data = this.itemDataList[h + e], r.OnDataChanged(), this.type == gts.ListType.Vertical) ie.setPosition(this.content.getComponent(UITransform).width / 2, -ie.getComponent(UITransform).height * (0.5 + h + e) - this.spaceY * (h + e) - this.padding_top);else if (this.type == gts.ListType.Horizontal) ie.setPosition(ie.getComponent(UITransform).width * (0.5 + h + e) + this.spaceX * (h + e) + this.padding_left, -this.content.getComponent(UITransform).height / 2);else if (this.type == gts.ListType.Grid) if (this.startAxis == gts.ListType.Vertical) {
                var s = Math.floor((h + e) / this.gridCol),
                  o = (h + e) % this.gridCol;
                ie.setPosition(ie.getComponent(UITransform).width * (0.5 + o) + this.spaceX * o + this.padding_left, -ie.getComponent(UITransform).height * (0.5 + s) - this.spaceY * s - this.padding_top), ie.getComponent(UIOpacity).opacity = 255;
              } else this.startAxis == gts.ListType.Horizontal && (s = (h + e) % this.gridRow, o = Math.floor((h + e) / this.gridRow), ie.setPosition(ie.getComponent(UITransform).width * (0.5 + o) + this.spaceX * o + this.padding_left, -ie.getComponent(UITransform).height * (0.5 + s) - this.spaceY * s - this.padding_top), ie.getComponent(UIOpacity).opacity = 255);
            }
            this.scrollView.scrollToOffset(i);
          };
          gts.List.prototype["countListParam"] = function () {
            var _this = this;
            var t = this.itemDataList.length;
            this.type == gts.ListType.Vertical ? (this.scrollView.horizontal = !1, this.scrollView.vertical = !0, this.content.getComponent(UITransform).width = this.content.parent.getComponent(UITransform).width, this.content.getComponent(UITransform).height = t * this.itemHeight + (t - 1) * this.spaceY + this.padding_top + this.padding_buttom, this.spawnCount = Math.round(this.scrollView.node.getComponent(UITransform).height / (this.itemHeight + this.spaceY)) + 2, this._funcHalfScrollview = function () {
              return _this.scrollView.node.getComponent(UITransform).height / 2 + _this.itemHeight / 2 + _this.spaceY;
            }, this.updateFun = this.updateV) : this.type == gts.ListType.Horizontal ? (this.scrollView.horizontal = !0, this.scrollView.vertical = !1, this.content.getComponent(UITransform).width = t * this.itemWidth + (t - 1) * this.spaceX + this.padding_left + this.padding_right, this.content.getComponent(UITransform).height = this.content.parent.getComponent(UITransform).height, this.spawnCount = Math.round(this.scrollView.node.getComponent(UITransform).width / (this.itemWidth + this.spaceX)) + 2, this._funcHalfScrollview = function () {
              return _this.scrollView.node.getComponent(UITransform).width / 2 + _this.itemWidth / 2 + _this.spaceX;
            }, this.updateFun = this.udpateH) : this.type == gts.ListType.Grid && (this.startAxis == gts.ListType.Vertical ? (this.scrollView.horizontal = !1, this.scrollView.vertical = !0, this.content.getComponent(UITransform).width = this.content.parent.getComponent(UITransform).width, this.padding_left + this.padding_right + this.itemWidth + this.spaceX > this.content.getComponent(UITransform).width && (this.padding_left = 0, this.padding_right = 0, console.error("padding_left\u6216padding_right\u8FC7\u5927")), this.gridCol = Math.floor((this.content.getComponent(UITransform).width - this.padding_left - this.padding_right) / (this.itemWidth + this.spaceX)), this.gridRow = Math.ceil(t / this.gridCol), this.content.getComponent(UITransform).height = this.gridRow * this.itemHeight + (this.gridRow - 1) * this.spaceY + this.padding_top + this.padding_buttom, this.spawnCount = Math.round(this.scrollView.node.getComponent(UITransform).height / (this.itemHeight + this.spaceY)) * this.gridCol + 2 * this.gridCol, this._funcHalfScrollview = function () {
              return _this.scrollView.node.getComponent(UITransform).height / 2 + _this.itemHeight / 2 + _this.spaceY;
            }, this.updateFun = this.updateGrid_V) : this.startAxis == gts.ListType.Horizontal && (this.scrollView.horizontal = !0, this.scrollView.vertical = !1, this.content.getComponent(UITransform).height = this.content.parent.getComponent(UITransform).height, this.padding_top + this.padding_buttom + this.itemHeight + this.spaceY > this.content.getComponent(UITransform).height && (this.padding_top = 0, this.padding_buttom = 0, console.error("padding_top\u6216padding_buttom\u8FC7\u5927")), this.gridRow = Math.floor((this.content.getComponent(UITransform).height - this.padding_top - this.padding_buttom) / (this.itemHeight + this.spaceY)), this.gridCol = Math.ceil(t / this.gridRow), this.content.getComponent(UITransform).width = this.gridCol * this.itemWidth + (this.gridCol - 1) * this.spaceX + this.padding_left + this.padding_right, this.spawnCount = Math.round(this.scrollView.node.getComponent(UITransform).width / (this.itemWidth + this.spaceX)) * this.gridRow + 2 * this.gridRow, this._funcHalfScrollview = function () {
              return _this.scrollView.node.getComponent(UITransform).width / 2 + _this.itemWidth / 2 + _this.spaceX;
            }, this.updateFun = this.updateGrid_H));
          };
        };
        return GUtil;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HallDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5ab32l00HVNPaqbu9U4FpeO", "HallDef", undefined);
      /**
       * 大厅常量定义
       */
      var WinTipType = exports('WinTipType', /*#__PURE__*/function (WinTipType) {
        WinTipType["CLOSE"] = "Close";
        WinTipType["RECEIVE"] = "Received";
        WinTipType["UNDO"] = "Undo";
        return WinTipType;
      }({}));
      var MainIconType = exports('MainIconType', /*#__PURE__*/function (MainIconType) {
        MainIconType["ALL"] = "all";
        MainIconType["NEW"] = "new";
        MainIconType["SCENE"] = "scenes";
        MainIconType["SLOT"] = "slot";
        MainIconType["CARD"] = "3d";
        MainIconType["MINI"] = "mini";
        MainIconType["NEARLY"] = "nearly";
        return MainIconType;
      }({}));
      var HallProxyEvent = exports('HallProxyEvent', /*#__PURE__*/function (HallProxyEvent) {
        HallProxyEvent["NOTICE"] = "notice";
        HallProxyEvent["BANNER"] = "banner";
        HallProxyEvent["LONGDRAGON"] = "longDragon";
        HallProxyEvent["LOAD_GAMES"] = "loadGames";
        HallProxyEvent["WIN_TIP"] = "winTip";
        HallProxyEvent["LIVE_CHAT"] = "liveChat";
        HallProxyEvent["UPDATE_NOTIFY"] = "updateNotify";
        HallProxyEvent["UPDATE_Grade"] = "updateGrade";
        return HallProxyEvent;
      }({}));

      /**
       * 大厅消息HallInfo 子类型定义
       */
      var HallInfoType = exports('HallInfoType', /*#__PURE__*/function (HallInfoType) {
        HallInfoType["RECONNECT"] = "reconnectInfo";
        HallInfoType["LOAD_GAMES"] = "lobbyGameLayout";
        HallInfoType["HAS_PLAY"] = "playGames";
        HallInfoType["RECOMMEND_GAME"] = "recommendGames";
        HallInfoType["BANNER"] = "bannerArray";
        HallInfoType["NOTICE"] = "lobbyNotice";
        HallInfoType["NUM_OF_MAIL"] = "mailUnreadNum";
        HallInfoType["NUM_OF_ACTIVITY"] = "normalActivityNum";
        HallInfoType["NUM_OF_TASK"] = "dayActivityNum";
        HallInfoType["WIN_TIP"] = "firstChargeStatus";
        HallInfoType["SERVICE"] = "customerService";
        HallInfoType["DXINFO"] = "dxInfo";
        HallInfoType["DX3MinINFO"] = "dx3MinInfo";
        HallInfoType["POOL_OF_SLOT_SEX"] = "slotSexPrizePool";
        HallInfoType["POOL_OF_SLOT_CS"] = "slotCsPrizePool";
        HallInfoType["POOL_OF_SLOT_LS"] = "slotLsPrizePool";
        HallInfoType["POOL_OF_GBS"] = "gbsPoolInfo";
        HallInfoType["POOL_OF_MINIPOKER"] = "miniPokerPool";
        HallInfoType["POOL_OF_YXX"] = "yxxPrizePool";
        HallInfoType["POOL_OF_F35"] = "f35PoolInfo";
        HallInfoType["POOL_OF_Mjxxl"] = "mjxxlPoolInfo";
        HallInfoType["BJL_INFO"] = "bjlRebateConf";
        HallInfoType["GAME_THEME"] = "gameTheme";
        return HallInfoType;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HallProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './HallDef.ts', './Common.ts', './PlatformMgr.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, i18n, ProxyBase, ConfigManager, DataManager, UserKey, EventManager, NetManager, ViewManager, MainIconType, HallProxyEvent, Common, PlatformMgr, PlatformType;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ProxyBase = module.ProxyBase;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      MainIconType = module.MainIconType;
      HallProxyEvent = module.HallProxyEvent;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      PlatformMgr = module.default;
      PlatformType = module.PlatformType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "13a23uu7JdE97Z0HUZb1fHw", "HallProxy", undefined);

      /**
       * 大厅数据代理
       */
      var HallProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(HallProxyMgr, _ProxyBase);
        function HallProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          /**公告文本 */
          _this.noticeArray = [];
          /**滚动条内容 */
          _this.bannerArray = [];
          /**游戏列表 */
          _this.lobbyGames = [];
          //
          _this.hasPlayGames = [];
          _this.recommendGames = [];
          /**首登弹框标识 */
          _this.winTipState = false;
          /**首登弹框标识 */
          _this.winTipType = void 0;
          _this.wsEvents = [];
          /**游戏内记录位置 */
          _this.scrollX = 0;
          _this.serviceUrl = "";
          //长龙信息记录
          _this.longInfo = null;
          _this.hallIconType = MainIconType.ALL;
          /**长龙推送内容 */
          _this.arrLongDragon = [
            // {
            //     gameType: "cardLhd",
            //     tableID: "123",
            //     openResult: "Long",
            //     Length: 15,
            // },
            // {
            //     gameType: "cardLhd",
            //     tableID: "456",
            //     openResult: "Ho",
            //     Length: 20,
            // },
          ];
          _this._collectList = [];
          return _this;
        }
        var _proto = HallProxyMgr.prototype;
        // 收藏列表
        _proto.init = function init() {
          this.initRecv();
        };
        _proto.registSocketEvent = function registSocketEvent() {
          this.wsEvents = [ConfigManager.getInstance().protocolHall.hallInfo, ConfigManager.getInstance().protocolHall.inviteGo, ConfigManager.getInstance().protocolHall.LongDragon, ConfigManager.getInstance().protocolHall.HD_GetCarouselInfo, ConfigManager.getInstance().protocolHall.getUserInfo, ConfigManager.getInstance().protocolHall.HD_CollectGame, ConfigManager.getInstance().protocolHall.actionPlatformAdList];
          for (var _iterator = _createForOfIteratorHelperLoose(this.wsEvents), _step; !(_step = _iterator()).done;) {
            var event = _step.value;
            EventManager.getInstance().on(event, this.recvData, this);
          }

          //
        };

        _proto.removeSocketEvent = function removeSocketEvent() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.wsEvents), _step2; !(_step2 = _iterator2()).done;) {
            var event = _step2.value;
            EventManager.getInstance().off(event, this.recvData, this);
          }
        };
        _proto.getIconDataByName = function getIconDataByName(name) {
          if (!HallProxy.lobbyGames) {
            return null;
          }
          for (var i = 0; i < HallProxy.lobbyGames.length; i++) {
            var item = HallProxy.lobbyGames[i];
            if (item.GameName == name) {
              return item;
            }
          }
        };
        _proto.getIconDatasByType = function getIconDatasByType(type) {
          var data = [];
          switch (type) {
            case MainIconType.NEARLY:
              {
                if (HallProxy.hasPlayGames) {
                  for (var _iterator3 = _createForOfIteratorHelperLoose(HallProxy.hasPlayGames), _step3; !(_step3 = _iterator3()).done;) {
                    var name = _step3.value;
                    var item = this.getIconDataByName(name);
                    if (item) {
                      data.push(item);
                    }
                  }
                }
                if (HallProxy._collectList) {
                  for (var _iterator4 = _createForOfIteratorHelperLoose(HallProxy._collectList), _step4; !(_step4 = _iterator4()).done;) {
                    var i = _step4.value;
                    if (HallProxy.hasPlayGames) {
                      var index = HallProxy.hasPlayGames.indexOf(i);
                      if (index == -1) {
                        var _item = this.getIconDataByName(i);
                        if (_item) {
                          data.push(_item);
                        }
                      }
                    } else {
                      var _item2 = this.getIconDataByName(i);
                      if (_item2) {
                        data.push(_item2);
                      }
                    }
                  }
                }
                if (data.length == 0) {
                  var other = HallProxy.recommendGames || [];
                  for (var _iterator5 = _createForOfIteratorHelperLoose(other), _step5; !(_step5 = _iterator5()).done;) {
                    var _name = _step5.value;
                    var _item3 = this.getIconDataByName(_name);
                    if (_item3) {
                      data.push(_item3);
                    }
                  }
                }
                break;
              }
            case MainIconType.NEW:
              {
                for (var _i = 0; _i < HallProxy.lobbyGames.length; _i++) {
                  var _item4 = HallProxy.lobbyGames[_i];
                  if (_item4.IsHot || _item4.IsNew) {
                    data.push(_item4);
                  }
                }
                break;
              }
            case MainIconType.ALL:
              {
                data = data.concat(HallProxy.lobbyGames);
                break;
              }
            default:
              {
                for (var _i2 = 0; _i2 < HallProxy.lobbyGames.length; _i2++) {
                  var _item5 = HallProxy.lobbyGames[_i2];
                  if (_item5.GameType == type) {
                    data.push(_item5);
                  }
                }
                break;
              }
          }
          this.filterDataByVersion(data);
          return data;
        };
        _proto.filterDataByVersion = function filterDataByVersion(data) {
          if (!data) return;
          if (PlatformMgr.type == PlatformType.ANDROID) {
            var version = PlatformMgr.p.getAppVersion();
            if (version) {
              var v = parseInt(version);
              if (v < 7) {
                var len = data.length;
                for (var i = len - 1; i >= 0; i--) {
                  var info = data[i];
                  if (info.GameName == "dxLive" || info.GameName == "sdLive" || info.GameName == "yxxLive") {
                    data.splice(i, 1);
                  }
                }
              }
            }
          }
        };
        _proto.sortGameList = function sortGameList() {
          if (this._collectList) {
            for (var i = 0; i < this._collectList.length; i++) {
              var item = this.getIconDataByName(this._collectList[i]);
              if (item) {
                item.SortType -= 1000;
              }
            }
          }
          if (this.lobbyGames) this.lobbyGames.sort(function (a, b) {
            return a.SortType - b.SortType;
          });
        };
        _proto.hallSceneInfo = function hallSceneInfo(data) {
          var hallinfo = data.Data;

          // if (typeof hallinfo.lobbyNotice != "undefined") {
          //     //公告
          //     this.noticeArray = hallinfo.lobbyNotice as hallProto.notice[];
          //     console.log(" hallinfo.lobbyNotice;", hallinfo.lobbyNotice);
          //     this.emit(HallProxyEvent.NOTICE);
          // }
          if (typeof hallinfo.customerService != "undefined") {
            //

            this.serviceUrl = hallinfo.customerService.customerOnline;
            this.emit(HallProxyEvent.LIVE_CHAT, hallinfo.customerService.customerOnline);
          }
          if (typeof hallinfo.bannerArray != "undefined") {
            //滚屏
            this.bannerArray = hallinfo.bannerArray || [];
            this.emit(HallProxyEvent.BANNER);
          }
          if (typeof hallinfo.firstChargeStatus != "undefined") {
            this.winTipType = hallinfo.firstChargeStatus;
            if (!this.winTipState) {
              this.winTipState = true;
              // this.emit(HallProxyEvent.WIN_TIP);
            }
          }

          if (typeof hallinfo.playGames != "undefined") {
            this.hasPlayGames = hallinfo.playGames;
          }
          if (typeof hallinfo.recommendGames != "undefined") {
            this.recommendGames = hallinfo.recommendGames;
          }
          if (typeof hallinfo.lobbyGameLayout != "undefined") {
            // console.log("hallinfo.lobbyGameLayout", hallinfo.lobbyGameLayout);

            // hallinfo.lobbyGameLayout.sort((a, b) => {
            //     return a.LobbyPos * 100 + a.SortType - (b.LobbyPos * 100 + b.SortType);
            // });
            // hallinfo.lobbyGameLayout.sort((a, b) => {
            //     return a.SortType - b.SortType;
            // });
            var currentStr = JSON.stringify(this.lobbyGames);
            this.lobbyGames = hallinfo.lobbyGameLayout;
            this.sortGameList();
            var nextStr = JSON.stringify(this.lobbyGames);
            if (currentStr != nextStr) {
              // this.lobbyGames = hallinfo.lobbyGameLayout;

              // this.lobbyGames.unshift({
              //     GameName: "bjl3d",
              //     GameType: "scenes",
              //     IsHot: 1,
              //     IsNew: 1,
              //     IsNotAllowPlay: 0,
              //     LobbyPos: 1,
              //     SortType: 2,
              //     Status: 1,
              //     Rtp: 1,
              //     UpdateTime: "0001-01-01T00:00:00Z",
              // } as hallProto.gameItem);

              // for (const gameInfo of this.lobbyGames) {
              //     if (gameInfo.GameName == "slotBoxing") {
              //         gameInfo.Status = 1;
              //     }
              // }

              // this.lobbyGames[this.lobbyGames.length - 1].GameName = "jb777";

              //配置缓存
              // cc.sys.localStorage.setItem("_lobbyGames_" + ConfigManager.getInstance().serverType, JSON.stringify(this.lobbyGames));
              // gts.Debug.Log("localStorage\n" + JSON.stringify(this.lobbyGames));
              this.emit(HallProxyEvent.LOAD_GAMES, this.hallIconType);
            }
          }
          if (typeof hallinfo.reconnectInfo != "undefined") {
            var gametype = DataManager.instance.getUserDataForKey(UserKey.GAMETYPE);
            if (!gametype) {
              //断线重连
              var serid = hallinfo.reconnectInfo.serverID;
              if (serid != "" && NetManager.instance.toGetSerid) {
                DataManager.instance.serverID = serid;
                NetManager.instance.toGetSerid = false;
                var _data = {};
                _data["Data"] = {};
                _data["Data"]["ServerID"] = serid;
                ViewManager.instance.setGameData(_data);
                var game = serid.split("@")[0];
                EventManager.getInstance().dispatch(ConfigManager.getInstance().eventTransform.checkGame, game);
                EventManager.getInstance().dispatch(ConfigManager.getInstance().eventTransform.showGameContent, game);
              }
            }
          }
        };
        _proto.getCollectTypeByGame = function getCollectTypeByGame(gameType) {
          if (this._collectList) {
            for (var _iterator6 = _createForOfIteratorHelperLoose(this._collectList), _step6; !(_step6 = _iterator6()).done;) {
              var i = _step6.value;
              if (i == gameType) {
                return true;
              }
            }
          }
          return false;
        };
        _proto.setCollectType = function setCollectType(gameType, oprateType) {
          if (oprateType === void 0) {
            oprateType = "1";
          }
          if (oprateType == "2") {
            var index = this._collectList.indexOf(gameType);
            if (index != -1) {
              this._collectList.splice(index, 1);
              var item = this.getIconDataByName(gameType);
              if (item) {
                item.SortType += 1000;
              }
            }
          } else {
            this._collectList.push(gameType);
            var _item6 = this.getIconDataByName(gameType);
            if (_item6) {
              _item6.SortType -= 1000;
            }
          }
          this.sortGameList();
        };
        _proto.requestNotice = function requestNotice() {
          // let url = ConfigManager.getInstance().httpDIr.getNotice;
          // let param = {};
          // let platform = DataManager.instance.getUserDataForKey(UserKey.PLATFORM);
          // if (platform) {
          //     param["platformCode"] = platform;
          // }
          // NetManager.instance.httpGet(
          //     url,
          //     param,
          //     (msg) => {
          //         let list = msg.data;
          //         this.noticeArray = list as hallProto.notice[];
          //         this.emit(HallProxyEvent.NOTICE);
          //     },
          //     null
          // );

          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.actionPlatformAdList);
        };
        _proto.getNotice = function getNotice(index) {
          if (index === void 0) {
            index = 0;
          }
          if (!this.noticeArray) {
            return null;
          }
          var length = this.noticeArray.length;
          if (length == 0) {
            return null;
          }
          index = index % length;
          return this.noticeArray[index];
        };
        _proto.onInvite = function onInvite(data) {
          //通过邀请进入房间
          if (data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code));
            return;
          }
          var rdata = {};
          rdata["Data"] = {};
          rdata["Data"]["ServerID"] = data.Data.ServerID;
          ViewManager.instance.setGameData(rdata);
          var game = data.Data.ServerID.split("@")[0];
          EventManager.getInstance().dispatch(ConfigManager.getInstance().eventTransform.checkGame, game);
        };
        _proto.onPushGame = function onPushGame(data) {
          // let info = data.Data;
          // let platform = DataManager.instance.getUserDataForKey(UserKey.PLATFORM);
          // if (platform && info.GameType == "dx3Min" && info.TableID != platform) {
          //     return;
          // }
          gts.Debug.Log("===onPushGame===" + JSON.stringify(data.Data));
          this.arrLongDragon.push(data.Data);
          this.emit(HallProxyEvent.LONGDRAGON);
        };
        _proto.onNotify = function onNotify(data) {
          if (data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code));
            return;
          }
          if (!data.Data || data.Data.length == 0) {
            return;
          }
          var dataList = data.Data.sort(function (a, b) {
            return a.Sort - b.Sort;
          });

          // this.node.zIndex = 10000;
          DataManager.instance.notifyList = [];
          DataManager.instance.notifyListPop = [];
          DataManager.instance.notifyListChat = [];

          //1:轮播 2：弹窗--顺序只弹一个 3:聊天 JumpType=1 JumpCode=gameType
          for (var i = 0; i < dataList.length; i++) {
            var info = dataList[i];
            switch (info.ShowType) {
              case 1:
                {
                  DataManager.instance.notifyList.push(info);
                  break;
                }
              case 2:
                {
                  DataManager.instance.notifyListPop.push(info);
                  break;
                }
              case 3:
                {
                  DataManager.instance.notifyListChat.push(info);
                  break;
                }
            }

            // DataManager.instance.notifyListPop.push(info);
            // DataManager.instance.notifyListPop.push(info);
          }

          this.emit(HallProxyEvent.UPDATE_NOTIFY);
        };
        _proto.initRecv = function initRecv() {};
        _proto.recvData = function recvData(data) {
          switch (data.cmd) {
            case ConfigManager.getInstance().protocolHall.hallInfo:
              this.hallSceneInfo(data);
              break;
            case ConfigManager.getInstance().protocolHall.inviteGo:
              this.onInvite(data);
              break;
            case ConfigManager.getInstance().protocolHall.LongDragon:
              {
                this.onPushGame(data);
                break;
              }
            case ConfigManager.getInstance().protocolHall.HD_GetCarouselInfo:
              {
                this.onNotify(data);
                break;
              }
            case ConfigManager.getInstance().protocolHall.getUserInfo:
              {
                DataManager.instance.setUserDataForKey(UserKey.GradeCode, data.Data.user.GradeCode);
                EventManager.getInstance().emit(HallProxyEvent.UPDATE_Grade);
                break;
              }
            case ConfigManager.getInstance().protocolHall.HD_CollectGame:
              {
                this._collectList = data.Data;
                this.sortGameList();
                break;
              }
            case ConfigManager.getInstance().protocolHall.actionPlatformAdList:
              {
                this.noticeArray = data.Data;
                this.emit(HallProxyEvent.NOTICE);
                break;
              }
          }
        };
        return HallProxyMgr;
      }(ProxyBase);
      var HallProxy = exports('default', new HallProxyMgr("HallProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HelpPumping.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, i18n, ConfigManager, EventManager, NetManager, ViewManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "5a605gqlb1MzKiopwlNivX2", "HelpPumping", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var HelpPumping = exports('default', (_dec = ccclass("HelpPumping"), _dec2 = menu("tools/HelpPumping"), _dec3 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HelpPumping, _Component);
        function HelpPumping() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameType", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isAdept", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = HelpPumping.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.getPumping, {
            gameName: this.gameType
          });
          if (!this.isAdept) {
            return;
          }
          if (this.gameType == "bigSmallMD5") {
            ViewManager.instance.adeptPopGameSize(this.node, 1, 0.675);
          }
        };
        _proto.onEnable = function onEnable() {
          EventManager.getInstance().on(ConfigManager.getInstance().protocolHall.getPumping, this.recvData, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.getInstance().off(ConfigManager.getInstance().protocolHall.getPumping, this.recvData, this);
        };
        _proto.recvData = function recvData(data) {
          if (data.cmd == ConfigManager.getInstance().protocolHall.getPumping) {
            // console.log("this.txt_content", data.Data);

            var title = i18n.getGameName(this.gameType);
            var num = data.Data.Pumping;
            var str = i18n.t("helpPumping", title, num);
            this.txt_content.string = str;
            if (!data.Data.Pumping) {
              this.txt_content.node.active = false;
            }
          }
        };
        return HelpPumping;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isAdept", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import i18n from "../../i18n/I18n";
      // import ConfigManager from "../manager/ConfigManager";
      // import EventManager from "../manager/EventManager";
      // import NetManager from "../manager/NetManager";
      // import ViewManager from "../manager/ViewManager";
      //
      // const { ccclass, property, menu } = cc._decorator;
      //
      // @ccclass
      // @menu("tools/HelpPumping")
      // export default class HelpPumping extends cc.Component {
      //     @property(cc.Label)
      //     txt_content: cc.Label = null;
      //
      //     @property
      //     gameType = "";
      //     onLoad() {
      //         NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.getPumping, {
      //             gameName: this.gameType,
      //         });
      //
      //         if (this.gameType == "bigSmallMD5") {
      //             ViewManager.instance.adeptPopGameSize(this.node, 1, 0.675);
      //         }
      //     }
      //
      //     protected onEnable(): void {
      //         EventManager.getInstance().on(ConfigManager.getInstance().protocolHall.getPumping, this.recvData, this);
      //     }
      //
      //     onDisable() {
      //         EventManager.getInstance().off(ConfigManager.getInstance().protocolHall.getPumping, this.recvData, this);
      //     }
      //
      //     recvData(data) {
      //         if (data.cmd == ConfigManager.getInstance().protocolHall.getPumping) {
      //             // console.log("this.txt_content", data.Data);
      //
      //             let title = i18n.getGameName(this.gameType);
      //             let num = data.Data.Pumping;
      //             let str = i18n.t("helpPumping", title, num);
      //             this.txt_content.string = str;
      //             if (!data.Data.Pumping) {
      //                 this.txt_content.node.active = false;
      //             }
      //         }
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/http_request.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _extends, cclegacy;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        get: get,
        post: post
      });
      cclegacy._RF.push({}, "58ce4LRRXtBPqw6ZUQ5UOHV", "http_request", undefined);
      /**
       *
       * @param url target url
       * @param options options object
       * @param options.params url params
       * @param
       */
      function get(url, options) {
        return _request(url, "GET", _extends({}, options));
      }
      function post(url, data, options) {
        var headers = options && typeof options.headers === "object" ? _extends({}, options.headers) : {};
        headers["Content-Type"] = "application/json";
        return _request(url, "POST", _extends({
          data: data
        }, options, {
          headers: headers
        }));
      }
      function _request(url, method, options) {
        var urlParams;
        if (options) {
          //手游不支持URLSearchParams
          // if (options.params) urlParams = new URLSearchParams(options.params).toString();
          if (options.params) {
            urlParams = _createQueryString(options.params);
          }
        }
        if (urlParams) {
          url = url + "?" + urlParams;
        }
        return new Promise(function (resolve, reject) {
          var retryTimes = _isValidNumber(options.retry) ? Math.round(options.retry) : 3;
          retryTimes = Math.max(1, retryTimes);
          _doRequestOneTimes();
          function _doRequestOneTimes() {
            --retryTimes;
            _doRequest(function (response) {
              resolve(response);
            }, function (error) {
              if (retryTimes > 0) {
                _doRequestOneTimes();
              } else {
                reject(error);
              }
            }, function (error) {
              reject(error);
            });
          }
          function _doRequest(cbDone, cbError, cbCancel) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
              var data = this.response;
              var headersStrs = this.getAllResponseHeaders().split(/\r\n/g);
              var headers = {};
              headersStrs.forEach(function (item) {
                var strs = item.split(": ");
                headers[strs[0]] = strs[1];
              });
              var response = {
                status: this.status,
                statusText: this.statusText,
                data: data,
                headers: headers,
                request: this
              };
              if (this.status < 400) {
                cbDone(response);
              } else {
                cbError(new Error("Http Request: The request failed with status " + this.status));
              }
            };
            xhr.onerror = function () {
              cbError(new Error("Http Request: An error occurred."));
            };
            xhr.onabort = function () {
              cbCancel(new Error("Http Request: The request is canceled."));
            };
            xhr.ontimeout = function () {
              cbError(new Error("Http Request: Timeout"));
            };
            xhr.open(method, url, true);
            if (options && typeof options.headers === "object") {
              for (var _name in options.headers) {
                xhr.setRequestHeader(_name, options.headers[_name]);
              }
            }
            xhr.timeout = _isValidNumber(options.timeout) ? options.timeout : 5000;
            xhr.responseType = options && typeof options.responseType === "string" ? options.responseType : "";
            if (options && typeof options.data === "object") {
              xhr.send(JSON.stringify(options.data));
            } else {
              xhr.send();
            }
          }
        });
      }

      // function _parseQueryString(queryString: string) {
      //     if (! queryString) return;
      //     if (queryString.charAt(0) === "?") {
      //         queryString = queryString.slice(1);
      //     }
      //     var vars = queryString.split("&");
      //     var queryMap: any = {};
      //     for (var i = 0; i < vars.length; i++) {
      //       var pair = vars[i].split("=");
      //       var key = decodeURIComponent(pair[0]);
      //       var value = decodeURIComponent(pair[1]);
      //       // If first entry with this name
      //       if (typeof queryMap[key] === "undefined") {
      //         queryMap[key] = value;
      //         // If second entry with this name
      //       } else if (typeof queryMap[key] === "string") {
      //         var arr = [queryMap[key], value];
      //         queryMap[key] = arr;
      //         // If third or later entry with this name
      //       } else {
      //         queryMap[key].push(value);
      //       }
      //     }
      //     return queryMap;
      // }

      function _createQueryString(obj) {
        var query = "";
        var lastSubStr;
        for (var key in obj) {
          if (lastSubStr) {
            query += "&";
          }
          var subStr = encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
          query += subStr;
          lastSubStr = subStr;
        }
        return query;
      }
      function _isValidNumber(num) {
        return num && typeof num === "number" && !Number.isNaN(num);
      }

      ////TEMP
      // postLogin() {
      //     return httpRequest.post(constructURL(routeLogin), {
      //         accounts: "cocostest",
      //         phone: "18912345678",
      //         code: "1111",
      //     })
      //     .then((res) => {
      //         let data = res.data;
      //         if (typeof data === "string") data = JSON.parse(data);
      //         data = data.data;
      //         userId = data.userId;
      //         token = data.token;
      //     });
      // }

      // getUserInfo() {
      //     return httpRequest.get(constructURL(routeUsernfo), {
      //         params: {
      //             userId: userId,
      //         },
      //         headers: {
      //             token,
      //         }
      //     })
      //     .then((res) => {
      //         let data = res.data;
      //         if (typeof data === "string") data = JSON.parse(data);
      //         data = data.data;

      //          return {
      //             balance: data.balance,
      //             nickName: data.nickName,
      //             avatar: data.headPic,
      //          };
      //     });
      // }

      // /**
      // * 请求用户信息
      // */
      // public requestUserInfo() {
      //     return server.getUserInfo()
      //     .then((res) => {
      //         this._name = res.nickName;
      //         this._balance = res.balance;
      //         this._avatarURL = res.avatar;
      //         this.emit(Model.EVENT_INFO_CHANGE);
      //     })
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/I18n.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './vn.ts', './zh.ts', './en.ts', './pt.ts'], function (exports) {
  var _createClass, cclegacy, director, vn, zh, en, pt;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
    }, function (module) {
      vn = module.vn;
    }, function (module) {
      zh = module.zh;
    }, function (module) {
      en = module.en;
    }, function (module) {
      pt = module.pt;
    }],
    execute: function () {
      cclegacy._RF.push({}, "731df+QiAxE1L06mcaQ/FO6", "I18n", undefined);
      var YDI18n = /*#__PURE__*/function () {
        function YDI18n(lan) {
          if (lan === void 0) {
            lan = "en";
          }
          this._lang = null;
          this._langType = void 0;
          this.init(lan);
        }

        /**
         * 设置语言
         * @param lang
         */
        var _proto = YDI18n.prototype;
        _proto.init = function init(lang) {
          this._langType = lang;
          switch (lang) {
            case "zh":
              this.lang = zh;
              break;
            case "vn":
              this.lang = vn;
              break;
            case "en":
              this.lang = en;
              break;
            case "pt":
              this.lang = pt;
              break;
            default:
              this.lang = en;
              break;
          }
        };
        _proto.getLangType = function getLangType() {
          return this._langType;
        };
        _proto.t = function t(key, arg) {
          if (!key) return key;
          var keys = key.split(".");
          var value = this.lang;
          for (var i = 0; i < keys.length; i++) {
            value = value[keys[i]];
            if (value === null || value === undefined) {
              return key;
            }
          }
          if (arg) {
            for (var _key in arg) {
              value = value.replace("%{" + _key + "}", arg[_key]);
            }
          }
          return value;
        };
        _proto.errTip = function errTip(key, arg) {
          if (!key) return key;
          var keyStr;
          if (typeof key == "string") {
            keyStr = key;
          } else {
            keyStr = key.toString();
          }
          var keys = keyStr.split(".");
          var value = this.lang.errTip;
          for (var i = 0; i < keys.length; i++) {
            value = value[keys[i]];
            if (value === null || value === undefined) {
              return key;
            }
          }
          if (arg) {
            for (var _key2 in arg) {
              value = value.replace("%{" + _key2 + "}", arg[_key2]);
            }
          }
          return value;
        };
        _proto.getGameName = function getGameName(key) {
          return this._lang.gameName[key] || "";
        };
        _proto.updateLang = function updateLang(lan) {
          this.lang = lan;
          this.updateSceneRenderers();
        };
        _proto.updateSceneRenderers = function updateSceneRenderers() {
          // very costly iterations
          var rootNodes = director.getScene().children;
          // walk all nodes with localize label and update
          var allLocalizedLabels = [];
          for (var i = 0; i < rootNodes.length; ++i) {
            var labels = rootNodes[i].getComponentsInChildren("LabelLocal");
            Array.prototype.push.apply(allLocalizedLabels, labels);
          }
          for (var _i = 0; _i < allLocalizedLabels.length; ++_i) {
            var label = allLocalizedLabels[_i];
            if (!label.node.active) continue;
            label.translate();
          }
        };
        _createClass(YDI18n, [{
          key: "lang",
          get: function get() {
            return this._lang;
          },
          set: function set(lan) {
            this._lang = lan;
          }
        }]);
        return YDI18n;
      }();
      var i18n = exports('default', new YDI18n());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InitI18n.ts", ['cc', './URLUtil.ts', './I18n.ts'], function () {
  var cclegacy, urlUtil, i18n;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      urlUtil = module.urlUtil;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "93146MDVb9LPons5QWNj7kH", "InitI18n", undefined);

      /**
       * 设置语言类型
       */
      (function () {
        {
          i18n.init(urlUtil.lang);
        }
      })();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LabelLocal.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, CCString, Component, i18n;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      CCString = module.CCString;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "9e844SLwkpOqaXJMuA83gHU", "LabelLocal", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode,
        requireComponent = _decorator.requireComponent,
        executionOrder = _decorator.executionOrder;
      var LabelLocal = exports('default', (_dec = ccclass("LabelLocal"), _dec2 = requireComponent(Label), _dec3 = executionOrder(-1), _dec4 = menu("i18n/LabelLocal"), _dec5 = property({}), _dec6 = property({
        displayName: "TEXT_KEY",
        tooltip: "Enter i18n key here",
        type: CCString
      }), _dec(_class = executeInEditMode(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LabelLocal, _Component);
        function LabelLocal() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_text", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "show", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LabelLocal.prototype;
        _proto.onLoad = function onLoad() {
          this.translate();
        };
        _proto.translate = function translate() {
          var label = this.node.getComponent(Label);
          if (label) {
            var str = i18n.t(this.text);
            label.string = str;
          }
        };
        _proto.notify = function notify(oldValue, newValue) {
          if (oldValue == newValue) {
            return;
          }
          var str = i18n.t(newValue);
          this.show = str;
          var label = this.node.getComponent(Label);
          label.string = str;
        };
        _proto.onDestroy = function onDestroy() {
          //        // cc.director.off('translate', this.translate, this)
        };
        _createClass(LabelLocal, [{
          key: "text",
          get: function get() {
            return this._text;
          },
          set: function set(value) {
            this.notify(this._text, value);
            this._text = value;
          }
        }]);
        return LabelLocal;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_text", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "show", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "text", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "text"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // /*
      //  * @Author: huangww
      //  * @Date: 2021-09-16 16:53:27
      //  * @LastEditTime: 2021-10-20 15:47:15
      //  */
      //
      // import i18n from "./I18n";
      //
      // const { ccclass, property, menu, executeInEditMode, requireComponent, executionOrder } = cc._decorator;
      //
      // @ccclass
      // @executeInEditMode
      // @requireComponent(cc.Label)
      // @executionOrder(-1)
      // @menu("i18n/LabelLocal")
      // export default class LabelLocal extends cc.Component {
      //     @property({})
      //     _text: string = "";
      //
      //     @property
      //     show: string = "";
      //
      //     @property({
      //         displayName: "TEXT_KEY",
      //         tooltip: "Enter i18n key here",
      //         type: cc.String,
      //     })
      //     get text(): string {
      //         return this._text;
      //     }
      //     set text(value) {
      //         this.notify(this._text, value);
      //         this._text = value;
      //     }
      //
      //     onLoad() {
      //         this.translate();
      //     }
      //
      //     translate() {
      //         let label = this.node.getComponent(cc.Label);
      //         if (label) {
      //             let str = i18n.t(this.text);
      //             label.string = str;
      //         }
      //     }
      //
      //     notify(oldValue: string, newValue: string) {
      //         if (oldValue == newValue) {
      //             return;
      //         }
      //         let str = i18n.t(newValue);
      //         this.show = str;
      //
      //         let label = this.node.getComponent(cc.Label);
      //         label.string = str;
      //     }
      //
      //     onDestroy() {
      //         // cc.director.off('translate', this.translate, this)
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LineAssembler.ts", ['cc', './LineSprite.ts'], function (exports) {
  var cclegacy, Vec2, Color, LineSprite;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec2 = module.Vec2;
      Color = module.Color;
    }, function (module) {
      LineSprite = module.LineSprite;
    }],
    execute: function () {
      cclegacy._RF.push({}, "390bbMYOy5HsY65V7SlqSD4", "LineAssembler", undefined);
      var _tangent = new Vec2();
      // const _miter = new Vec2();
      var _normal = new Vec2();
      var _vec2 = new Vec2();
      var QUAD_INDICES;
      function normal(out, dir) {
        // get perpendicular
        out.x = -dir.y;
        out.y = dir.x;
        return out;
      }
      var LineAssembler = exports('LineAssembler', {
        createData: function createData(comp) {
          var renderData = comp.requestRenderData();
          renderData.dataLength = 4;
          renderData.resize(16, (16 - 2) * 3);
          return renderData;
        },
        update: function update(comp, dt) {
          var stroke = comp.stroke / 2;
          var node = comp.node;
          var matrix = node.worldMatrix;
          var tx = matrix.m12;
          var ty = matrix.m13;
          var points = comp.points;
          var cur;
          if (points.length > 1) {
            var point = points[0];
            var difx = point.point.x - tx;
            var dify = point.point.y - ty;
            if (difx * difx + dify * dify < comp.minSeg) {
              cur = point;
            }
          }
          if (!cur) {
            cur = new LineSprite.Point();
            points.unshift(cur);
          }
          cur.setPoint(tx, ty);
          cur.time = comp.fadeTime + dt;
          var vertexCount = 0;
          var indexCount = 0;
          if (points.length < 2) {
            return;
          }
          var renderData = comp.renderData;
          this.updateRenderDataCache(comp, renderData);
          var color = comp.color;
          var cr = color.r;
          var cg = color.g;
          var cb = color.b;
          var ca = color.a;
          var prev = points[1];
          prev.distance = Vec2.subtract(_vec2, cur.point, prev.point).length();
          _vec2.normalize();
          prev.setDir(_vec2.x, _vec2.y);
          cur.setDir(_vec2.x, _vec2.y);
          renderData.dataLength = points.length * 2;
          var data = renderData.data;
          var fadeTime = comp.fadeTime;
          var findLast = false;
          for (var i = points.length - 1; i >= 0; i--) {
            var p = points[i];
            var _point = p.point;
            var dir = p.dir;
            p.time -= dt;

            // if (p.time < 0) {
            //     points.splice(i, 1);
            //     continue;
            // }

            // const progress = p.time / fadeTime;
            var progress = 1;
            var next = points[i - 1];
            if (!findLast) {
              if (!next) {
                points.splice(i, 1);
                continue;
              }
              _point.x = next.point.x - dir.x * progress;
              _point.y = next.point.y - dir.y * progress;
            }
            findLast = true;
            normal(_normal, dir);
            var da = progress * ca;
            var c = (da << 24 >>> 0) + (cb << 16) + (cg << 8) + cr;
            var offset = vertexCount;
            data[offset].x = _point.x + _normal.x * stroke;
            data[offset].y = _point.y + _normal.y * stroke;
            data[offset].u = 1;
            data[offset].v = progress;
            data[offset].color._val = c;
            offset += 1;
            data[offset].x = _point.x - _normal.x * stroke;
            data[offset].y = _point.y - _normal.y * stroke;
            data[offset].u = 0;
            data[offset].v = progress;
            data[offset].color._val = c;
            vertexCount += 2;
          }
          indexCount = vertexCount <= 2 ? 0 : (vertexCount - 2) * 3;
          renderData.resize(vertexCount, indexCount); // resize
        },

        updateWorldVertexAllData: function updateWorldVertexAllData(comp) {
          var renderData = comp.renderData;
          var stride = renderData.floatStride;
          var dataList = renderData.data;
          var vData = renderData.chunk.vb;
          for (var i = 0; i < dataList.length; i++) {
            var offset = i * stride;
            vData[offset + 0] = dataList[i].x;
            vData[offset + 1] = dataList[i].y;
            vData[offset + 2] = dataList[i].z;
            vData[offset + 3] = dataList[i].u;
            vData[offset + 4] = dataList[i].v;
            Color.toArray(vData, dataList[i].color, offset + 5);
          }
        },
        createQuadIndices: function createQuadIndices(comp, indexCount) {
          var renderData = comp.renderData;
          var chunk = renderData.chunk;
          var vid = 0;
          var meshBuffer = chunk.meshBuffer;
          var indexOffset = meshBuffer.indexOffset;
          QUAD_INDICES = null;
          QUAD_INDICES = new Uint16Array(indexCount);
          for (var i = 0, l = indexCount; i < l; i += 2) {
            var start = vid + i;
            QUAD_INDICES[indexOffset++] = start;
            QUAD_INDICES[indexOffset++] = start + 2;
            QUAD_INDICES[indexOffset++] = start + 1;
            QUAD_INDICES[indexOffset++] = start + 1;
            QUAD_INDICES[indexOffset++] = start + 2;
            QUAD_INDICES[indexOffset++] = start + 3;
          }
        },
        updateRenderDataCache: function updateRenderDataCache(comp, renderData) {
          if (renderData.passDirty) {
            renderData.updatePass(comp);
          }
          if (renderData.nodeDirty) {
            renderData.updateNode(comp);
          }
          if (renderData.textureDirty && comp.texture) {
            renderData.updateTexture(comp.texture);
            renderData.material = comp.getRenderMaterial(0);
          }
          if (renderData.hashDirty) {
            renderData.updateHash();
          }
        },
        updateRenderData: function updateRenderData(comp) {},
        updateColor: function updateColor(comp) {},
        //@ts-ignore
        fillBuffers: function fillBuffers(comp, renderer) {
          var renderData = comp.renderData;
          var chunk = renderData.chunk;
          var dataList = renderData.data;
          var vertexCount = renderData.vertexCount;
          var indexCount = renderData.indexCount;
          var vData = chunk.vb;
          var vertexOffset = 0;
          for (var i = 0; i < vertexCount; i++) {
            var vert = dataList[i];
            vData[vertexOffset++] = vert.x;
            vData[vertexOffset++] = vert.y;
            vData[vertexOffset++] = vert.z;
            vData[vertexOffset++] = vert.u;
            vData[vertexOffset++] = vert.v;
            Color.toArray(vData, vert.color, vertexOffset);
            vertexOffset += 4;
          }

          // fill index data
          var bid = chunk.bufferId;
          var vid = chunk.vertexOffset;
          var meshBuffer = chunk.meshBuffer;
          var ib = chunk.meshBuffer.iData;
          var indexOffset = meshBuffer.indexOffset;
          for (var _i = 0, l = indexCount; _i < l; _i += 2) {
            var start = vid + _i;
            ib[indexOffset++] = start;
            ib[indexOffset++] = start + 2;
            ib[indexOffset++] = start + 1;
            ib[indexOffset++] = start + 1;
            ib[indexOffset++] = start + 2;
            ib[indexOffset++] = start + 3;
          }
          meshBuffer.indexOffset += renderData.indexCount;
          meshBuffer.setDirty();
        }
      });
      var LineAssemblerManager = exports('LineAssemblerManager', {
        getAssembler: function getAssembler(comp) {
          return LineAssembler;
        }
      });
      LineSprite.Assembler = LineAssemblerManager;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LineSprite.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Texture2D, Vec2, v2, Tween, tween, v3, UIRenderer;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Texture2D = module.Texture2D;
      Vec2 = module.Vec2;
      v2 = module.v2;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      UIRenderer = module.UIRenderer;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _class4;
      cclegacy._RF.push({}, "5be9fMBln1LIaXHSCyhH53O", "LineSprite", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode,
        playOnFocus = _decorator.playOnFocus,
        type = _decorator.type;
      var Point = /*#__PURE__*/function () {
        function Point(point, dir) {
          this.point = new Vec2();
          this.dir = new Vec2();
          this.distance = 0;
          this.time = 0;
          if (point) this.point.set(point);
          if (dir) this.dir.set(dir);
        }
        var _proto = Point.prototype;
        _proto.setPoint = function setPoint(x, y) {
          this.point.x = x;
          this.point.y = y;
        };
        _proto.setDir = function setDir(x, y) {
          this.dir.x = x;
          this.dir.y = y;
        };
        return Point;
      }();
      /**
       * @en
       * cc.MotionStreak manages a Ribbon based on it's motion in absolute space.                 <br/>
       * You construct it with a fadeTime, minimum segment size, texture path, texture            <br/>
       * length and color. The fadeTime controls how long it takes each vertex in                 <br/>
       * the streak to fade out, the minimum segment size it how many pixels the                  <br/>
       * streak will move before adding a new ribbon segment, and the texture                     <br/>
       * length is the how many pixels the texture is stretched across. The texture               <br/>
       * is vertically aligned along the streak segment.
       * @zh 运动轨迹，用于游戏对象的运动轨迹上实现拖尾渐隐效果。
       */
      var LineSprite = exports('LineSprite', (_dec = ccclass("LineSprite"), _dec2 = property(), _dec3 = property(), _dec4 = property(), _dec5 = property(), _dec6 = type(Texture2D), _dec7 = property(Vec2), _dec8 = property(Vec2), _dec9 = property(), _dec10 = property(), _dec11 = property(), _dec12 = property(), _dec13 = property(), _dec(_class2 = executeInEditMode(_class2 = playOnFocus(_class2 = (_class3 = (_class4 = /*#__PURE__*/function (_UIRenderer) {
        _inheritsLoose(LineSprite, _UIRenderer);
        function LineSprite() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _UIRenderer.call.apply(_UIRenderer, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "positions", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startPos", _descriptor2, _assertThisInitialized(_this));
          _this._positionIndex = 0;
          _this._distance = 0;
          _initializerDefineProperty(_this, "_preview", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_fadeTime", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_minSeg", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_stroke", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_texture", _descriptor7, _assertThisInitialized(_this));
          _this._points = [];
          return _this;
        }
        var _proto2 = LineSprite.prototype;
        _proto2.onLoad = function onLoad() {
          _UIRenderer.prototype.onLoad.call(this);
          if (!this.startPos) {
            this.startPos = v2(this.node.position.x, this.node.position.y);
          }
          var distance = 0;
          var start = this.startPos;
          this.node.setPosition(this.startPos.x, this.startPos.y);
          for (var _iterator = _createForOfIteratorHelperLoose(this.positions), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
            distance += Vec2.distance(start, i);
            start = i;
          }
          this._distance = distance;
        };
        _proto2.action = function action() {
          this.node.active = true;
          var distance = 0;
          var start = v2(0, 0);
          Tween.stopAllByTarget(this.node);
          var action = tween(this.node);
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.positions), _step2; !(_step2 = _iterator2()).done;) {
            var i = _step2.value;
            distance = Vec2.distance(start, i);
            var time = distance / this._distance * this._fadeTime;
            action = action.to(time, {
              position: v3(i.x, i.y)
            }).delay(0.05);
            start = i;
          }
          action.start();
        };
        _proto2.hide = function hide() {
          this.node.setPosition(this.startPos.x, this.startPos.y);
          this.reset();
          this.node.active = false;
        };
        _proto2.onEnable = function onEnable() {
          _UIRenderer.prototype.onEnable.call(this);
          this.reset();
        };
        _proto2._flushAssembler = function _flushAssembler() {
          var assembler = LineSprite.Assembler.getAssembler(this);
          if (this._assembler !== assembler) {
            this._assembler = assembler;
          }
          if (!this._renderData) {
            if (this._assembler && this._assembler.createData) {
              this._renderData = this._assembler.createData(this);
              this._renderData.material = this.material;
              this._updateColor();
            }
          }
        };
        _proto2.onFocusInEditor = function onFocusInEditor() {
          if (this._preview) {
            this.reset();
          }
        };
        _proto2.onLostFocusInEditor = function onLostFocusInEditor() {
          if (this._preview) {
            this.reset();
          }
        }

        /**
         * @en Remove all living segments of the ribbon.
         * @zh 删除当前所有的拖尾片段。
         * @example
         * // Remove all living segments of the ribbon.
         * myMotionStreak.reset();
         */;
        _proto2.reset = function reset() {
          this._points.length = 0;
          this._positionIndex = 0;
          if (this._renderData) this._renderData.clear();
        };
        _proto2.update = function update(dt) {};
        _proto2.lateUpdate = function lateUpdate(dt) {
          if (this._assembler) this._assembler.update(this, dt);
        }

        /**
         * @deprecated since v3.5.0, this is an engine private interface that will be removed in the future.
         */
        //@ts-ignore
        ;

        _proto2._render = function _render(render) {
          render.commitComp(this, this._renderData, this._texture, this._assembler, null);
        };
        _createClass(LineSprite, [{
          key: "preview",
          get:
          /**
           * @en Preview the trailing effect in editor mode.
           * @zh 在编辑器模式下预览拖尾效果。
           */
          function get() {
            return this._preview;
          },
          set: function set(val) {
            this._preview = val;
            this.reset();
          }
          /**
           * @en The fade time to fade.
           * @zh 拖尾的渐隐时间，以秒为单位。
           * @example
           * motionStreak.fadeTime = 3;
           */
        }, {
          key: "fadeTime",
          get: function get() {
            return this._fadeTime;
          },
          set: function set(val) {
            this._fadeTime = val;
            this.reset();
          }
          /**
           * @en The minimum segment size.
           * @zh 拖尾之间最小距离。
           * @example
           * motionStreak.minSeg = 3;
           */
        }, {
          key: "minSeg",
          get: function get() {
            return this._minSeg;
          },
          set: function set(val) {
            this._minSeg = val;
          }
          /**
           * @en The stroke's width.
           * @zh 拖尾的宽度。
           * @example
           * motionStreak.stroke = 64;
           */
        }, {
          key: "stroke",
          get: function get() {
            return this._stroke;
          },
          set: function set(val) {
            this._stroke = val;
          }

          /**
           * @en The texture of the MotionStreak.
           * @zh 拖尾的贴图。
           * @example
           * motionStreak.texture = newTexture;
           */
        }, {
          key: "texture",
          get: function get() {
            return this._texture;
          },
          set: function set(val) {
            if (this._texture === val) return;
            this._texture = val;
          }
        }, {
          key: "points",
          get: function get() {
            return this._points;
          }
        }]);
        return LineSprite;
      }(UIRenderer), _class4.Point = Point, _class4), (_applyDecoratedDescriptor(_class3.prototype, "preview", [_dec2], Object.getOwnPropertyDescriptor(_class3.prototype, "preview"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "fadeTime", [_dec3], Object.getOwnPropertyDescriptor(_class3.prototype, "fadeTime"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "minSeg", [_dec4], Object.getOwnPropertyDescriptor(_class3.prototype, "minSeg"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "stroke", [_dec5], Object.getOwnPropertyDescriptor(_class3.prototype, "stroke"), _class3.prototype), _applyDecoratedDescriptor(_class3.prototype, "texture", [_dec6], Object.getOwnPropertyDescriptor(_class3.prototype, "texture"), _class3.prototype), _descriptor = _applyDecoratedDescriptor(_class3.prototype, "positions", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "startPos", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "_preview", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "_fadeTime", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "_minSeg", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "_stroke", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class3.prototype, "_texture", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class3)) || _class2) || _class2) || _class2));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LocalizedImage.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './I18n.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Sprite, CCString, assetManager, error, SpriteFrame, Component, GameDef, i18n;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      CCString = module.CCString;
      assetManager = module.assetManager;
      error = module.error;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "c823dfm+E1MQoLabmeeAvOL", "LocalizedImage", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        requireComponent = _decorator.requireComponent,
        executeInEditMode = _decorator.executeInEditMode;
      var LocalizedImage = exports('LocalizedImage', (_dec = ccclass('LocalizedImage'), _dec2 = requireComponent(Sprite), _dec3 = property(CCString), _dec4 = property(CCString), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LocalizedImage, _Component);
        function LocalizedImage() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_key", _descriptor, _assertThisInitialized(_this));
          _this.sprite = void 0;
          return _this;
        }
        var _proto = LocalizedImage.prototype;
        _proto.updateSprite = function updateSprite() {
          if (!this._key) {
            return;
          }
          {
            var bundle = assetManager.getBundle(GameDef.GameMap[GameDef.GameType.slotCaptainBounty]);
            if (!bundle) {
              error("bundle " + GameDef.GameMap[GameDef.GameType.slotCaptainBounty] + " not loaded");
              return;
            }
            var _url = "language/" + i18n.getLangType() + "/" + this._key + "/spriteFrame";
            var spriteFrame = bundle.get(_url, SpriteFrame);
            if (!spriteFrame) {
              error(_url + " not loaded");
              return;
            }
            this.sprite.spriteFrame = spriteFrame;
          }
        };
        _proto.onLoad = function onLoad() {
          this.sprite = this.getComponent(Sprite);
        };
        _proto.onEnable = function onEnable() {
          this.updateSprite();
        };
        _createClass(LocalizedImage, [{
          key: "key",
          get: function get() {
            return this._key;
          },
          set: function set(val) {
            this._key = val;
            this.updateSprite();
          }
        }]);
        return LocalizedImage;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_key", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "key", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "key"), _class2.prototype)), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Loding.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, ProgressBar, Node, sp, Component, MainManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ProgressBar = module.ProgressBar;
      Node = module.Node;
      sp = module.sp;
      Component = module.Component;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "1542e5qFMJC6ZOdSsape+Sj", "Loding", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Loding = exports('default', (_dec = ccclass("Loding"), _dec2 = property(ProgressBar), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Loding, _Component);
        function Loding() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "progressBar", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "animalAction", _descriptor2, _assertThisInitialized(_this));
          _this._percent = 0;
          _this._count = 0;
          _this._aniName = ["1.Phinh", "2.Nhan", "3.thantai"];
          _this._mainManager = void 0;
          return _this;
        }
        var _proto = Loding.prototype;
        _proto.onLoad = function onLoad() {
          this._mainManager = MainManager.getInstance();
          this._mainManager.getEventManager().on("loding", this.setProgress, this);
        };
        _proto.onEnable = function onEnable() {
          this.nextAnimal();
        };
        _proto.nextAnimal = function nextAnimal() {
          var spine = this.animalAction.getComponent(sp.Skeleton);
          spine.setAnimation(0, this._aniName[0], false);
          spine.addAnimation(0, this._aniName[1], false);
          spine.addAnimation(0, this._aniName[2], false);
        };
        _proto.setProgress = function setProgress(percent) {
          //        // this.progressBar.node.active = true;
          //        // this.progressBar.progress = percent;
          this._percent = percent;
        };
        _proto.start = function start() {};
        _proto.onDisable = function onDisable() {
          this._mainManager.getEventManager().off("loding", this.setProgress, this);
        };
        _proto.update = function update(dt) {
          if (this.progressBar.progress < this._percent) {
            this.progressBar.progress += dt;
          }
        };
        return Loding;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animalAction", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import MainManager from "../manager/MainManager";
      //
      // const { ccclass, property } = cc._decorator;
      //
      // @ccclass
      // export default class Loding extends cc.Component {
      //     @property(cc.ProgressBar)
      //     progressBar: cc.ProgressBar = null;
      //
      //     @property(cc.Node)
      //     animalAction: cc.Node = null;
      //
      //     _percent = 0;
      //
      //     _count = 0;
      //     _aniName = ["1.Phinh", "2.Nhan", "3.thantai"];
      //     _mainManager: MainManager;
      //     onLoad() {
      //         this._mainManager = MainManager.getInstance();
      //         this._mainManager.getEventManager().on("loding", this.setProgress, this);
      //     }
      //     onEnable() {
      //         this.nextAnimal();
      //     }
      //     nextAnimal() {
      //         let spine: sp.Skeleton = this.animalAction.getComponent(sp.Skeleton);
      //         spine.setAnimation(0, this._aniName[0], false);
      //         spine.addAnimation(0, this._aniName[1], false);
      //         spine.addAnimation(0, this._aniName[2], false);
      //     }
      //     setProgress(percent) {
      //         // this.progressBar.node.active = true;
      //         // this.progressBar.progress = percent;
      //         this._percent = percent;
      //     }
      //     start() {}
      //     onDisable() {
      //         this._mainManager.getEventManager().off("loding", this.setProgress, this);
      //     }
      //     update(dt) {
      //         if (this.progressBar.progress < this._percent) {
      //             this.progressBar.progress += dt;
      //         }
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Log.ts", ['cc'], function (exports) {
  var cclegacy, sys;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }],
    execute: function () {
      cclegacy._RF.push({}, "559f0pvptdHgJEOtX8t9nLw", "Log", undefined);
      var YDLog = /*#__PURE__*/function () {
        function YDLog() {}
        var _proto = YDLog.prototype;
        /**
         * 打印log
         * @param title
         * @param content
         */
        _proto.log = function log(content) {
          this.baseLog("", content, "#35495e", "#409EFF");
        }

        /**
         * 打印info
         * @param title
         * @param content
         */;
        _proto.info = function info(title, content) {
          this.baseLog(title, content, "#35495e", "#00CBAE");
        }

        /**
         * 打印warn
         * @param title
         * @param content
         */;
        _proto.warn = function warn(title, content) {
          this.baseLog(title, content, "#35495e", "#DC9028");
          // console.trace("%c 【调用堆栈】", `background:#DC9028 ; padding: 1px; border-radius: 2px 0 0 2px;  color: #fff`);
        }

        /**
         * 打印error
         * @param title
         * @param content
         */;
        _proto.error = function error(title, content) {
          this.baseLog(title, content, "#35495e", "#F26362");
          // console.trace("%c 【调用堆栈】", `background:#F26362 ; padding: 1px; border-radius: 2px 0 0 2px;  color: #fff`);
        }

        /**
         * 打印error
         * @param title
         * @param content
         */;
        _proto.network = function network(title, content) {
          this.baseLog(title, content, "#35495e", "#FF00FF");
          // console.trace("%c 【调用堆栈】", `background:#FF00FF ; padding: 1px; border-radius: 2px 0 0 2px;  color: #fff`);
        }

        /**
         * 打印log
         * @param title
         * @param content
         * @param titleColor
         * @param contentColor
         */;
        _proto.baseLog = function baseLog(title, content, titleColor, contentColor) {
          if (sys.isBrowser && !sys.isMobile) {
            console.log("%c \u3010" + title + "\u3011 %c " + content + " %c", "background:" + titleColor + " ; padding: 1px; border-radius: 2px 0 0 2px;  color: #fff", "background:" + contentColor + " ; padding: 1px; border-radius: 0 2px 2px 0;  color: #fff", "background:transparent");
          } else {
            console.log("\u3010" + title + "\u3011 " + content + " ");
          }
        };
        return YDLog;
      }();
      var Log = exports('default', new YDLog());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoginScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './DataManager.ts', './EventManager.ts', './MainManager.ts', './NetManager.ts', './ViewManager.ts', './ProxyMgr.ts', './GUtil.ts', './ConfigManager.ts', './Common.ts', './URLUtil.ts', './GameButtonDef.ts', './Adaptor.ts', './GameDef.ts', './env', './CaptainProxy.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, assetManager, Asset, SpriteFrame, Component, i18n, DataManager, UserKey, EventManager, MainManager, NetManager, ViewManager, ProxyMgr, GUtil, ConfigManager, Common, urlUtil, GameButtonMap, Adaptor, GameDef, DEBUG, CaptainProxy;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      assetManager = module.assetManager;
      Asset = module.Asset;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      urlUtil = module.urlUtil;
    }, function (module) {
      GameButtonMap = module.GameButtonMap;
    }, function (module) {
      Adaptor = module.default;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      DEBUG = module.DEBUG;
    }, function (module) {
      CaptainProxy = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b94f09m9DpI+qAykHU0iP5A", "LoginScene", undefined);
      var ccclass = _decorator.ccclass;
      var LoginScene = exports('default', (_dec = ccclass("LoginScene"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoginScene, _Component);
        function LoginScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._mainManager = void 0;
          _this._eventManager = void 0;
          _this._viewManager = void 0;
          _this._netManager = void 0;
          _this._dataManager = void 0;
          _this._configManager = void 0;
          _this._audioManager = void 0;
          _this.isFirstLogin = void 0;
          _this.isWaitCheckGame = void 0;
          _this.isWaitGameInfo = void 0;
          return _this;
        }
        var _proto = LoginScene.prototype;
        _proto.onLoad = function onLoad() {
          window["fadeInOut"] && window["fadeInOut"]();
          GUtil.setCursorStytle();
          Adaptor.listenScreen();
          Adaptor.adaptScreen();
          this._mainManager = MainManager.getInstance();
          this._eventManager = this._mainManager.getEventManager();
          this._netManager = this._mainManager.getNetManager();
          this._viewManager = this._mainManager.getViewManager();
          this._dataManager = this._mainManager.getDataManager();
          this._configManager = this._mainManager.getConfigManager();
          this._audioManager = this._mainManager.getAudioManager();
          gts.Debug.enableLog = DEBUG;
          this.isWaitCheckGame = false;
          this.isWaitGameInfo = false;
          this.initEvent();
          this.firstLogin();
        };
        _proto.firstLogin = function firstLogin() {
          this.isFirstLogin = true;
          Common.updateProgress(0);
          this.login(5);
        };
        _proto.login = function login(retryTimes) {
          var _this2 = this;
          var param = {
            ssoKey: urlUtil.ssoKey,
            //"acc12ab532e031ae5c2b687d4cbd3f840794d0f"
            gameId: urlUtil.gameId,
            //"game1111",
            userid: urlUtil.userId,
            //"wzp1",
            appid: urlUtil.appId
          };
          NetManager.instance.httpGet(ConfigManager.instance.getCreateAndEnterUrl(), param, function (data) {
            var token = data.data.token;
            var wssHost = data.data.wssHost;
            var wssPort = Number(data.data.wssPort);
            DataManager.instance.setUserDataForKey(UserKey.OID, "uuid_web");
            DataManager.instance.setUserDataForKey(UserKey.TOKEN, token);
            ConfigManager.getInstance().setSocketAdr(wssHost, wssPort);
            NetManager.instance.connect();
          }, function () {
            if (--retryTimes > 0) {
              _this2.login(retryTimes);
            }
          });
        };
        _proto.changeScene = function changeScene() {
          this.isWaitCheckGame = true;
          EventManager.getInstance().dispatch(ConfigManager.getInstance().eventTransform.checkGame, GameButtonMap.slotCaptainBounty.gameType);
        };
        _proto.initEvent = function initEvent() {
          //        //通过事件管理器 注册登录 注册等按钮得事件管理
          //        // 监听弹窗按钮 登录和注册弹框

          //        //监听传输事件
          this._eventManager.on(this._configManager.eventTransform.gameShow, this.gameShow, this); //断线

          //        //监听网络事件
          this._eventManager.on(this._configManager.protocolHall.login, this.recvData, this);
          this._eventManager.on(this._configManager.protocolHall.checkGame, this.recvData, this);
          this._eventManager.on(ConfigManager.getInstance().ProtocolSlotCaptain.info, this.recvData, this);
        };
        _proto.gameShow = function gameShow() {
          this._netManager.waitServiceSendData(); // 监听推送
        };

        _proto.closePop = function closePop(data) {
          this._viewManager.closePopView();
        };
        _proto.onDestroy = function onDestroy() {
          //        //监听传输事件
          //        // this._eventManager.off("hotUpdateRate", this.hotUpdateRate, this);
          this._eventManager.off(this._configManager.eventTransform.gameShow, this.gameShow, this); //断线

          //        //监听网络事件
          this._eventManager.off(this._configManager.protocolHall.login, this.recvData, this);
          this._eventManager.off(this._configManager.protocolHall.checkGame, this.recvData, this);
          this._eventManager.off(ConfigManager.getInstance().ProtocolSlotCaptain.info, this.recvData, this);
          ProxyMgr.close(this);
        };
        _proto.onLoginSuccess = function onLoginSuccess() {
          this.closePop(null);
          if (this.isFirstLogin) {
            this.isFirstLogin = false;
            Common.updateProgress(0.1);
            this.loadBundle();
          }
          if (this.isWaitGameInfo) {
            this.reqGameInfo();
          }
          if (this.isWaitCheckGame) {
            this.changeScene();
          }
        };
        _proto.loadBundle = function loadBundle() {
          var _this3 = this;
          var bundleName = GameDef.GameMap[GameButtonMap.slotCaptainBounty.gameType];
          assetManager.loadBundle(bundleName, function (err, bundle) {
            if (err) {
              _this3.scheduleOnce(_this3.loadBundle, 0.5);
              return;
            }
            _this3.loadAssets(bundle);
          });
        };
        _proto.loadAssets = function loadAssets(bundle) {
          var _this4 = this;
          var pathList = [];
          var animInfoList = bundle.getDirWithPath("animation");
          animInfoList.forEach(function (val) {
            return pathList.push(val.path);
          });
          var atlasInfoList = bundle.getDirWithPath("atlas");
          atlasInfoList.forEach(function (val) {
            return pathList.push(val.path);
          });
          var textureInfoList = bundle.getDirWithPath("textures");
          textureInfoList.forEach(function (val) {
            return pathList.push(val.path);
          });
          var bigImageInfoList = bundle.getDirWithPath("big_image");
          bigImageInfoList.forEach(function (val) {
            return pathList.push(val.path);
          });
          var bottomBtnInfoList = bundle.getDirWithPath("bottomBtn");
          bottomBtnInfoList.forEach(function (val) {
            return pathList.push(val.path);
          });
          var spineInfoList = bundle.getDirWithPath("spine");
          spineInfoList.forEach(function (val) {
            return pathList.push(val.path);
          });
          var soundInfoList = bundle.getDirWithPath("sound");
          soundInfoList.forEach(function (val) {
            return pathList.push(val.path);
          });
          var fontInfoList = bundle.getDirWithPath("font");
          fontInfoList.forEach(function (val) {
            return pathList.push(val.path);
          });
          var prefabInfoList = bundle.getDirWithPath("prefab");
          prefabInfoList.forEach(function (val) {
            return pathList.push(val.path);
          });
          var sceneInfoList = bundle.getDirWithPath("scene");
          sceneInfoList.forEach(function (val) {
            return pathList.push(val.path);
          });
          var count = 0;
          for (var i = 0; i < pathList.length; i++) {
            this.loadAsset(bundle, pathList[i], Asset, function (asset) {
              count++;
              var t;
              if (count >= pathList.length) {
                t = 1;
              } else {
                t = count / pathList.length;
              }
              t = 0.1 + t * 0.7;
              Common.updateProgress(t);
              if (count >= pathList.length) {
                _this4.loadLanguageImage(bundle);
              }
            });
          }
        };
        _proto.loadAsset = function loadAsset(bundle, path, type, onSuccess) {
          var _this5 = this;
          bundle.load(path, type, function (err, asset) {
            if (err) {
              _this5.scheduleOnce(function () {
                _this5.loadAsset(bundle, path, type, onSuccess);
              }, 0.5);
              return;
            }
            onSuccess(asset);
          });
        };
        _proto.loadLanguageImage = function loadLanguageImage(bundle) {
          var _this6 = this;
          var pathList = [];
          var languageList = bundle.getDirWithPath("language/" + urlUtil.lang, SpriteFrame);
          languageList.forEach(function (val) {
            return pathList.push(val.path);
          });
          if (languageList.length == 0) {
            Common.updateProgress(0.9);
            this.reqGameInfo();
            return;
          }
          var count = 0;
          for (var i = 0; i < pathList.length; i++) {
            this.loadAsset(bundle, pathList[i], SpriteFrame, function (asset) {
              count++;
              var t;
              if (count >= pathList.length) {
                t = 1;
              } else {
                t = count / pathList.length;
              }
              t = 0.8 + t * 0.1;
              Common.updateProgress(t);
              if (count >= pathList.length) {
                _this6.reqGameInfo();
              }
            });
          }
        };
        _proto.reqGameInfo = function reqGameInfo() {
          this.isWaitGameInfo = true;
          NetManager.instance.sendOnlineData(ConfigManager.getInstance().ProtocolSlotCaptain.info, {});
        };
        _proto.recvData = function recvData(data) {
          Common.showLog("场景成功收到长连接返回");
          if (data.cmd == this._configManager.protocolHall.login) {
            if (data.Code == 20017) {
              var str = i18n.lang.errTip[data.Code];
              ViewManager.instance.showTipPop(str, function () {
                Common.exitGame();
              }, null);
              return;
            }
            this.onLoginSuccess();
          } else if (data.cmd == this._configManager.protocolHall.checkGame) {
            this.isWaitCheckGame = false;
          } else if (data.cmd == ConfigManager.getInstance().ProtocolSlotCaptain.info) {
            this.isWaitGameInfo = false;
            CaptainProxy.initInfo = data.Data;
            this.changeScene();
          }
        };
        return LoginScene;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./I18n.ts', './InitI18n.ts', './LabelLocal.ts', './LocalizedImage.ts', './en.ts', './pt.ts', './vn.ts', './zh.ts', './CaptainProxy.ts', './GameDef.ts', './cryptojs.ts', './http_request.ts', './server.ts', './mqttlib.ts', './ViewOpenAnim.ts', './BaseEvent.ts', './Log.ts', './ProxyMgr.ts', './SchedulerMgr.ts', './Util.ts', './Batcher2DEx.ts', './NodeEventProcessorEx.ts', './SpineRunner.ts', './UITransformEx.ts', './directorEx.ts', './nodeEx.ts', './tweenBezier.ts', './unSchedulerTimer.ts', './ActDlgShow.ts', './ActFlyTip.ts', './AutoChangeParent.ts', './AutoEventNode.ts', './BtnArea.ts', './BtnPolygon.ts', './ColorAssembler2D.ts', './GUtil.ts', './SoundMgr.ts', './UIClock.ts', './UIDialog.ts', './AudioManager.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './MainManager.ts', './NetManager.ts', './UpdateManager.ts', './ViewManager.ts', './maxJackpot.ts', './MiniButton.ts', './MiniGameMoveOpacity.ts', './showMini.ts', './PAndroid.ts', './PIOS.ts', './PWindows.ts', './PlatformBase.ts', './PlatformMgr.ts', './WEB.ts', './AItemRenerer.ts', './AVirtualScrollView.ts', './ActionFade.ts', './Adaptor.ts', './AddSpineEffect.ts', './Assembler2D.ts', './AutoScale.ts', './BlackWordProxy.ts', './ButtonInit.ts', './ButtonSetData.ts', './ButtonShow.ts', './ChipProxy.ts', './ClickbtnEffect.ts', './Common.ts', './ContentEx.ts', './ContentExx.ts', './ContentTypeEx.ts', './GPRoundBoxAssembler.ts', './GPRoundBoxSprite.ts', './HelpPumping.ts', './LineAssembler.ts', './LineSprite.ts', './Loding.ts', './OpenImgFile.ts', './SafeArea.ts', './ScrollList.ts', './ScrollListDataItem.ts', './ScrollNumLabel.ts', './ScrollViewEx.ts', './ScrollViewExItem.ts', './TipsAni.ts', './URLUtil.ts', './activeButton.ts', './bgScreen.ts', './fitCanvas.ts', './onBtnPress.ts', './showScore.ts', './showTip.ts', './showToast.ts', './updateText.ts', './viewPop.ts', './HallDef.ts', './HallProxy.ts', './LoginScene.ts', './FortuneHistory.ts', './FortuneHistoryItem.ts', './FortuneRank.ts', './FortuneRankItem.ts', './FortuneScrollView.ts', './FortuneSetAuto.ts', './FortuneSetAutobyBlue.ts', './FortuneSetAutobyGreen.ts', './FortuneSetBase.ts', './GameButtonDef.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MainManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ViewManager.ts', './EventManager.ts', './NetManager.ts', './DataManager.ts', './ConfigManager.ts', './AudioManager.ts'], function (exports) {
  var _createClass, cclegacy, ViewManager, EventManager, NetManager, DataManager, ConfigManager, AudioManager;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "86e86Gx2D9CA6fRQ2eGHAD3", "MainManager", undefined); // //主管理器 用于管理所有管理器的单例
      var MainManager = exports('default', /*#__PURE__*/function () {
        function MainManager() {
          this._viewManager = void 0;
          this._eventManager = void 0;
          this._netManager = void 0;
          this._dataManager = void 0;
          this._configManager = void 0;
          this._AudioManager = void 0;
        }
        MainManager.getInstance = function getInstance() {
          if (MainManager._instance == null) {
            MainManager._instance = new MainManager();
            MainManager._instance.init();
          }
          return MainManager._instance;
        };
        var _proto = MainManager.prototype;
        _proto.init = function init() {
          this._viewManager = ViewManager.instance;
          this._eventManager = EventManager.getInstance(); //new EventManager();
          this._netManager = NetManager.instance; //new NetManager();
          this._dataManager = DataManager.instance;
          this._configManager = ConfigManager.getInstance(); //new ConfigManager();
          this._AudioManager = AudioManager.instance; //new AudioManager();

          this._viewManager.setListenerGonggao();
        };
        _proto.getAudioManager = function getAudioManager() {
          return this._AudioManager;
        };
        _proto.getViewManager = function getViewManager() {
          return this._viewManager;
        };
        _proto.getEventManager = function getEventManager() {
          return this._eventManager;
        };
        _proto.getNetManager = function getNetManager() {
          return this._netManager;
        };
        _proto.getDataManager = function getDataManager() {
          return this._dataManager;
        };
        _proto.getConfigManager = function getConfigManager() {
          return this._configManager;
        };
        _createClass(MainManager, null, [{
          key: "instance",
          get: function get() {
            if (MainManager._instance == null) {
              MainManager._instance = new MainManager();
              MainManager._instance.init();
            }
            return MainManager._instance;
          }
        }]);
        return MainManager;
      }()); // window["main"] = MainManager.instance;
      //    // LIFE-CYCLE CALLBACKS:
      MainManager._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/maxJackpot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ConfigManager.ts', './EventManager.ts', './MainManager.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Node, UITransform, find, instantiate, Sprite, Label, tween, UIOpacity, Component, i18n, ConfigManager, EventManager, MainManager, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Node = module.Node;
      UITransform = module.UITransform;
      find = module.find;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      Label = module.Label;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "53e59AL3KNAJbuSYCB3IPfT", "maxJackpot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MaxJackpot = exports('default', (_dec = ccclass("MaxJackpot"), _dec2 = property({
        type: SpriteFrame,
        displayName: "柱子"
      }), _dec3 = property({
        type: SpriteFrame,
        displayName: "dx"
      }), _dec4 = property({
        type: SpriteFrame,
        displayName: "guessBigSmall"
      }), _dec5 = property({
        type: SpriteFrame,
        displayName: "mini_poker"
      }), _dec6 = property({
        type: SpriteFrame,
        displayName: "slotCs"
      }), _dec7 = property({
        type: SpriteFrame,
        displayName: "slotLs"
      }), _dec8 = property({
        type: SpriteFrame,
        displayName: "yxx"
      }), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MaxJackpot, _Component);
        function MaxJackpot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "spriteFrames_shape", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrames_dx", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrames_guessBigSmall", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrames_mini_poker", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrames_slotCs", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrames_slotLs", _descriptor6, _assertThisInitialized(_this));
          //    // @property({ type: cc.SpriteFrame, displayName: "slotSex" })
          //    // spriteFrames_slotSex: cc.SpriteFrame = null;
          _initializerDefineProperty(_this, "spriteFrames_yxx", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "content", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemTemp", _descriptor9, _assertThisInitialized(_this));
          //    // @property(cc.Node)
          //    // sub_main = null;
          _initializerDefineProperty(_this, "jackpotLayer", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_ranks", _descriptor11, _assertThisInitialized(_this));
          _this._mainManager = void 0;
          _this._configManager = void 0;
          _this._eventManager = void 0;
          _this._viewManager = void 0;
          _this._dataManager = void 0;
          _this._netManager = void 0;
          _this._startPos = void 0;
          //    // _isOpen = false;
          _this._allChang = void 0;
          _this._pos = {
            x: 0,
            y: 0
          };
          return _this;
        }
        var _proto = MaxJackpot.prototype;
        _proto.onLoad = function onLoad() {
          this._mainManager = MainManager.getInstance();
          this._eventManager = this._mainManager.getEventManager();
          this._viewManager = this._mainManager.getViewManager();
          this._dataManager = this._mainManager.getDataManager();
          this._configManager = this._mainManager.getConfigManager();
          this._netManager = this._mainManager.getNetManager();
          this.node.parent.getComponent(UITransform).priority = 1000;
        };
        _proto.onEnable = function onEnable() {
          this._netManager.sendOnlineData(this._configManager.protocolHall.getMaxJackpotAll, {});
          this.initEvent();
        };
        _proto.initEvent = function initEvent() {
          //        // this.jackpotLayer.on("touchend", this.closeOpen, this);
          //        // if (cc.isValid(this.sub_main)) {
          //        //     this.sub_main.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
          //        //     this.sub_main.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          //        //     this.sub_main.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
          //        //     this.sub_main.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          //        // }
          this._eventManager.on(this._configManager.protocolHall.getMaxJackpotAll, this.showMaxJackpot, this);
          var spr_input = find("spr_input", this.jackpotLayer);
          spr_input.on("click", this.closeOpen, this);
        };
        _proto.showMaxJackpot = function showMaxJackpot(data) {
          var _this2 = this;
          if (data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code));
            return;
          }
          this.jackpotLayer.active = true;
          //        // this.jackpotLayer.x = cc.director.getScene().getChildByName('Canvas').width/2.0;
          //        // this.jackpotLayer.y = cc.director.getScene().getChildByName('Canvas').height/2.0;

          var spriteFrame = {
            dx: this.spriteFrames_dx,
            yxx: this.spriteFrames_yxx,
            guessBigSmall: this.spriteFrames_guessBigSmall,
            //            // slotSex: this.spriteFrames_slotSex,
            slotCs: this.spriteFrames_slotCs,
            slotLs: this.spriteFrames_slotLs,
            mini_poker: this.spriteFrames_mini_poker
          };
          var msg = data.Data;
          var infoFirst = msg[0];
          var trueIndex = 0;
          msg.forEach(function (info, index) {
            var sprFrame = spriteFrame[info.GameType];
            if (!sprFrame) {
              return;
            }
            var newNode = instantiate(_this2.itemTemp);
            newNode.active = true;
            newNode.parent = _this2.content;
            var Sprite_icon = find("Sprite_icon", newNode).getComponent(Sprite);
            Sprite_icon.spriteFrame = sprFrame;
            newNode.on("click", function (event) {
              EventManager.getInstance().dispatch(ConfigManager.getInstance().eventTransform.checkGame, info.GameType);
              EventManager.getInstance().dispatch(ConfigManager.getInstance().eventTransform.showGameContent, info.GameType);
              _this2.jackpotLayer.active = false;
              _this2.content.removeAllChildren();
            });
            var Sprite_shape = find("img_number", newNode).getComponent(Sprite);
            Sprite_shape.spriteFrame = _this2.spriteFrames_shape[trueIndex] || _this2.spriteFrames_shape[3];
            var Label_percent = find("Label_percent", newNode).getComponent(Label);
            Label_percent.string = Common.ChangeMoneyShow(info.Jackpot, 2);
            find("txt_number", newNode).getComponent(Label).string = "" + (trueIndex + 1);
            if (_this2.txt_ranks[trueIndex]) {
              find("icon_number", newNode).getComponent(Sprite).spriteFrame = _this2.txt_ranks[trueIndex];
            } else {
              find("icon_number", newNode).active = false;
            }
            trueIndex++;
          });
        };
        _proto.closeOpen = function closeOpen() {
          var _this3 = this;
          //        // if (this._isOpen == true) {
          //        //     this._isOpen = false;
          //        // let pos = this._pos;
          //        // cc.tween(this.sub_main).to(0.2, { x: pos.x, y: pos.y }).start();
          //        // this.sub_main.getChildByName("openLayer").active = false;
          //        // this.jackpotLayer.active = false;

          tween(this.node.getComponent(UIOpacity)).to(0.25, {
            opacity: 0
          }).call(function () {
            _this3.node.destroyFromParent();
          }).start();
          //        // }
        };

        _proto.onDisable = function onDisable() {
          this.removeEvent();
        }
        //    // onTouchStart(event) {
        //    //     // console.log('点击开始');
        //    //     this._startPos = new cc.Vec2(this.sub_main.x, this.sub_main.y);
        //    //     this._allChang = this._startPos;
        //    //     if (this._isOpen == false) {
        //    //         this.sub_main.scale = 1.2;
        //    //     }
        //    // }
        //    // onTouchMove(event) {
        //    //     if (!cc.isValid(this.sub_main)) return;
        //    //     if (this._isOpen == true) {
        //    //         return;
        //    //     }
        //    //     let delta = event.getDelta();
        //    //     this._allChang = new cc.Vec2(this._allChang.x + delta.x, this._allChang.y + delta.y);
        //    //     let changdu = this._startPos.sub(this._allChang).mag();
        //    //     if (changdu > this.sub_main.width / 3) {
        //    //         this.sub_main.x += delta.x;
        //    //         this.sub_main.y += delta.y;
        //    //     }
        //    // }
        //    // onTouchCancel() {
        //    //     if (!cc.isValid(this.sub_main)) return;
        //    //     Common.showLog("touch cancel");
        //    //     if (this._isOpen == false) {
        //    //         this.sub_main.scale = 1;
        //    //     }
        //    //     if (this._isOpen == true) {
        //    //         this.clickButton();
        //    //         return;
        //    //     }
        //    //     let endPos = new cc.Vec2(this.sub_main.x, this.sub_main.y);
        //    //     let changdu = this._startPos.sub(endPos).mag();
        //    //     if (changdu <= this.sub_main.width / 3) {
        //    //         this.clickButton();
        //    //         return;
        //    //     }
        //    // }
        //    // onTouchEnd(event) {
        //    //     if (!cc.isValid(this.sub_main)) return;
        //    //     if (this._isOpen == false) {
        //    //         this.sub_main.scale = 1;
        //    //     }
        //    //     if (this._isOpen == true) {
        //    //         this.clickButton();
        //    //         return;
        //    //     }
        //    //     let endPos = new cc.Vec2(this.sub_main.x, this.sub_main.y);
        //    //     if (endPos.x == this._startPos.x && endPos.y == this._startPos.y) {
        //    //         this.clickButton();
        //    //         return;
        //    //     }
        //    // }
        //    // clickButton() {
        //    //     if (!this.jackpotLayer.active) {
        //    //         this._netManager.sendOnlineData(this._configManager.protocolHall.getMaxJackpotAll, {});
        //    //     } else {
        //    //         this.jackpotLayer.active = false;
        //    //         this.content.removeAllChildren(true);
        //    //     }
        //    // }
        ;

        _proto.removeEvent = function removeEvent() {
          //        // if (cc.isValid(this.sub_main)) {
          //        //     this.sub_main.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
          //        //     this.sub_main.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          //        //     this.sub_main.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
          //        //     this.sub_main.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          //        // }
          this.jackpotLayer.off("touchend", this.closeOpen, this);
          this._eventManager.off(this._configManager.protocolHall.getMaxJackpotAll, this.showMaxJackpot, this);
        };
        _proto.onDestroy = function onDestroy() {
          //        //   this.removeEvent();
        };
        return MaxJackpot;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spriteFrames_shape", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrames_dx", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrames_guessBigSmall", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrames_mini_poker", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrames_slotCs", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrames_slotLs", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrames_yxx", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "itemTemp", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "jackpotLayer", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "txt_ranks", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import i18n from "../../i18n/I18n";
      // import ConfigManager from "../manager/ConfigManager";
      // import DataManager from "../manager/DataManager";
      // import EventManager from "../manager/EventManager";
      // import MainManager from "../manager/MainManager";
      // import NetManager from "../manager/NetManager";
      // import ViewManager from "../manager/ViewManager";
      // import { Common } from "../tools/Common";
      //
      // //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
      // const { ccclass, property } = cc._decorator;
      // @ccclass
      // export default class MaxJackpot extends cc.Component {
      //     @property({ type: cc.SpriteFrame, displayName: "柱子" })
      //     spriteFrames_shape: cc.SpriteFrame[] = [];
      //
      //     @property({ type: cc.SpriteFrame, displayName: "dx" })
      //     spriteFrames_dx: cc.SpriteFrame = null;
      //     @property({ type: cc.SpriteFrame, displayName: "guessBigSmall" })
      //     spriteFrames_guessBigSmall: cc.SpriteFrame = null;
      //     @property({ type: cc.SpriteFrame, displayName: "mini_poker" })
      //     spriteFrames_mini_poker: cc.SpriteFrame = null;
      //     @property({ type: cc.SpriteFrame, displayName: "slotCs" })
      //     spriteFrames_slotCs: cc.SpriteFrame = null;
      //     @property({ type: cc.SpriteFrame, displayName: "slotLs" })
      //     spriteFrames_slotLs: cc.SpriteFrame = null;
      //
      //     // @property({ type: cc.SpriteFrame, displayName: "slotSex" })
      //     // spriteFrames_slotSex: cc.SpriteFrame = null;
      //
      //     @property({ type: cc.SpriteFrame, displayName: "yxx" })
      //     spriteFrames_yxx: cc.SpriteFrame = null;
      //
      //     @property(cc.Node)
      //     content: cc.Node = null;
      //     @property(cc.Node)
      //     itemTemp = null;
      //
      //     // @property(cc.Node)
      //     // sub_main = null;
      //     @property(cc.Node)
      //     jackpotLayer = null;
      //
      //     @property(cc.SpriteFrame)
      //     txt_ranks: cc.SpriteFrame[] = [];
      //
      //     _mainManager: MainManager;
      //     _configManager: ConfigManager;
      //     _eventManager: EventManager;
      //     _viewManager: ViewManager;
      //     _dataManager: DataManager;
      //     _netManager: NetManager;
      //
      //     _startPos;
      //     // _isOpen = false;
      //     _allChang: cc.Vec2;
      //     _pos = { x: 0, y: 0 };
      //     onLoad() {
      //         this._mainManager = MainManager.getInstance();
      //         this._eventManager = this._mainManager.getEventManager();
      //         this._viewManager = this._mainManager.getViewManager();
      //         this._dataManager = this._mainManager.getDataManager();
      //         this._configManager = this._mainManager.getConfigManager();
      //         this._netManager = this._mainManager.getNetManager();
      //         this.node.parent.zIndex = 1000;
      //     }
      //
      //     onEnable() {
      //         this._netManager.sendOnlineData(this._configManager.protocolHall.getMaxJackpotAll, {});
      //         this.initEvent();
      //     }
      //
      //     initEvent() {
      //         // this.jackpotLayer.on("touchend", this.closeOpen, this);
      //         // if (cc.isValid(this.sub_main)) {
      //         //     this.sub_main.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
      //         //     this.sub_main.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
      //         //     this.sub_main.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
      //         //     this.sub_main.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
      //         // }
      //         this._eventManager.on(this._configManager.protocolHall.getMaxJackpotAll, this.showMaxJackpot, this);
      //
      //         let spr_input = cc.find("spr_input", this.jackpotLayer);
      //         spr_input.on("click", this.closeOpen, this);
      //     }
      //
      //     showMaxJackpot(data) {
      //         if (data.Code != 0) {
      //             Common.showTip(i18n.errTip(data.Code));
      //             return;
      //         }
      //         this.jackpotLayer.active = true;
      //         // this.jackpotLayer.x = cc.director.getScene().getChildByName('Canvas').width/2.0;
      //         // this.jackpotLayer.y = cc.director.getScene().getChildByName('Canvas').height/2.0;
      //
      //         let spriteFrame = {
      //             dx: this.spriteFrames_dx,
      //             yxx: this.spriteFrames_yxx,
      //             guessBigSmall: this.spriteFrames_guessBigSmall,
      //             // slotSex: this.spriteFrames_slotSex,
      //             slotCs: this.spriteFrames_slotCs,
      //             slotLs: this.spriteFrames_slotLs,
      //             mini_poker: this.spriteFrames_mini_poker,
      //         };
      //
      //         let msg = data.Data as hallProto.jackpotItem[];
      //         let infoFirst = msg[0];
      //
      //         let trueIndex = 0;
      //         msg.forEach((info, index) => {
      //             let sprFrame = spriteFrame[info.GameType];
      //             if (!sprFrame) {
      //                 return;
      //             }
      //
      //             let newNode = cc.instantiate(this.itemTemp);
      //             newNode.active = true;
      //             newNode.parent = this.content;
      //
      //             let Sprite_icon = cc.find("Sprite_icon", newNode).getComponent(cc.Sprite);
      //             Sprite_icon.spriteFrame = sprFrame;
      //
      //             newNode.on("click", (event) => {
      //                 EventManager.getInstance().dispatch(ConfigManager.getInstance().eventTransform.checkGame, info.GameType);
      //                 EventManager.getInstance().dispatch(ConfigManager.getInstance().eventTransform.showGameContent, info.GameType);
      //
      //                 this.jackpotLayer.active = false;
      //                 this.content.removeAllChildren(true);
      //             });
      //
      //             let Sprite_shape = cc.find("img_number", newNode).getComponent(cc.Sprite);
      //             Sprite_shape.spriteFrame = this.spriteFrames_shape[trueIndex] || this.spriteFrames_shape[3];
      //
      //             let Label_percent = cc.find("Label_percent", newNode).getComponent(cc.Label);
      //             Label_percent.string = Common.ChangeMoneyShow(info.Jackpot, 2);
      //
      //             cc.find("txt_number", newNode).getComponent(cc.Label).string = "" + (trueIndex + 1);
      //             if (this.txt_ranks[trueIndex]) {
      //                 cc.find("icon_number", newNode).getComponent(cc.Sprite).spriteFrame = this.txt_ranks[trueIndex];
      //             } else {
      //                 cc.find("icon_number", newNode).active = false;
      //             }
      //             trueIndex++;
      //         });
      //     }
      //
      //     closeOpen() {
      //         // if (this._isOpen == true) {
      //         //     this._isOpen = false;
      //         // let pos = this._pos;
      //         // cc.tween(this.sub_main).to(0.2, { x: pos.x, y: pos.y }).start();
      //         // this.sub_main.getChildByName("openLayer").active = false;
      //         // this.jackpotLayer.active = false;
      //
      //         cc.tween(this.node).to(0.25, { opacity: 0 }).removeSelf().start();
      //         // }
      //     }
      //
      //     onDisable() {
      //         this.removeEvent();
      //     }
      //
      //     // onTouchStart(event) {
      //     //     // console.log('点击开始');
      //     //     this._startPos = new cc.Vec2(this.sub_main.x, this.sub_main.y);
      //     //     this._allChang = this._startPos;
      //     //     if (this._isOpen == false) {
      //     //         this.sub_main.scale = 1.2;
      //     //     }
      //     // }
      //
      //     // onTouchMove(event) {
      //     //     if (!cc.isValid(this.sub_main)) return;
      //     //     if (this._isOpen == true) {
      //     //         return;
      //     //     }
      //     //     let delta = event.getDelta();
      //     //     this._allChang = new cc.Vec2(this._allChang.x + delta.x, this._allChang.y + delta.y);
      //     //     let changdu = this._startPos.sub(this._allChang).mag();
      //     //     if (changdu > this.sub_main.width / 3) {
      //     //         this.sub_main.x += delta.x;
      //     //         this.sub_main.y += delta.y;
      //     //     }
      //     // }
      //     // onTouchCancel() {
      //     //     if (!cc.isValid(this.sub_main)) return;
      //     //     Common.showLog("touch cancel");
      //     //     if (this._isOpen == false) {
      //     //         this.sub_main.scale = 1;
      //     //     }
      //     //     if (this._isOpen == true) {
      //     //         this.clickButton();
      //     //         return;
      //     //     }
      //     //     let endPos = new cc.Vec2(this.sub_main.x, this.sub_main.y);
      //     //     let changdu = this._startPos.sub(endPos).mag();
      //     //     if (changdu <= this.sub_main.width / 3) {
      //     //         this.clickButton();
      //     //         return;
      //     //     }
      //     // }
      //     // onTouchEnd(event) {
      //     //     if (!cc.isValid(this.sub_main)) return;
      //     //     if (this._isOpen == false) {
      //     //         this.sub_main.scale = 1;
      //     //     }
      //     //     if (this._isOpen == true) {
      //     //         this.clickButton();
      //     //         return;
      //     //     }
      //     //     let endPos = new cc.Vec2(this.sub_main.x, this.sub_main.y);
      //     //     if (endPos.x == this._startPos.x && endPos.y == this._startPos.y) {
      //     //         this.clickButton();
      //     //         return;
      //     //     }
      //     // }
      //
      //     // clickButton() {
      //     //     if (!this.jackpotLayer.active) {
      //     //         this._netManager.sendOnlineData(this._configManager.protocolHall.getMaxJackpotAll, {});
      //     //     } else {
      //     //         this.jackpotLayer.active = false;
      //     //         this.content.removeAllChildren(true);
      //     //     }
      //     // }
      //
      //     removeEvent() {
      //         // if (cc.isValid(this.sub_main)) {
      //         //     this.sub_main.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
      //         //     this.sub_main.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
      //         //     this.sub_main.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
      //         //     this.sub_main.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
      //         // }
      //         this.jackpotLayer.off("touchend", this.closeOpen, this);
      //         this._eventManager.off(this._configManager.protocolHall.getMaxJackpotAll, this.showMaxJackpot, this);
      //     }
      //
      //     onDestroy() {
      //         //   this.removeEvent();
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MiniButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './MainManager.ts', './ViewManager.ts', './Common.ts', './GUtil.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, UITransform, view, v3, instantiate, isValid, director, Director, Label, sp, tween, Vec2, Button, v2, Component, GameDef, ConfigManager, EventManager, MainManager, ViewManager, Common, GUtil;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
      view = module.view;
      v3 = module.v3;
      instantiate = module.instantiate;
      isValid = module.isValid;
      director = module.director;
      Director = module.Director;
      Label = module.Label;
      sp = module.sp;
      tween = module.tween;
      Vec2 = module.Vec2;
      Button = module.Button;
      v2 = module.v2;
      Component = module.Component;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      GUtil = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "f8eef+NKNhMC6WB3+KqzOCg", "MiniButton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MiniButton = exports('default', (_dec = ccclass("MiniButton"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MiniButton, _Component);
        function MiniButton() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sub_main", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "miniLayer", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "openLayer", _descriptor3, _assertThisInitialized(_this));
          _this._mainManager = void 0;
          _this._configManager = void 0;
          _this._eventManager = void 0;
          _this._viewManager = void 0;
          _this._dataManager = void 0;
          _this._netManager = void 0;
          _this._startPos = void 0;
          _this._isOpen = false;
          _this._allChang = void 0;
          _this._pos = {
            x: 0,
            y: 0
          };
          _this._adeptScale = 1;
          return _this;
        }
        var _proto = MiniButton.prototype;
        _proto.onLoad = function onLoad() {
          this._mainManager = MainManager.getInstance();
          this._eventManager = this._mainManager.getEventManager();
          this._viewManager = this._mainManager.getViewManager();
          this._dataManager = this._mainManager.getDataManager();
          this._configManager = this._mainManager.getConfigManager();
          this._netManager = this._mainManager.getNetManager();
          this.node.parent.getComponent(UITransform).priority = 1000;
          this.initEvent();
          this.initIcon();
          this._eventManager.on(this._configManager.protocolDx.getConfig, this.initUi, this);
          this._netManager.sendOnlineData(this._configManager.protocolDx.getConfig, {});
          this.adeptSize();
        };
        _proto.onEnable = function onEnable() {
          this.moveToEdge();
          EventManager.getInstance().on("resize", this.onMoveToEdge, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.getInstance().off("resize", this.onMoveToEdge, this);
          //        // this.removeEvent();
        };

        _proto.onMoveToEdge = function onMoveToEdge() {
          var _this2 = this;
          this.scheduleOnce(function () {
            _this2.moveToEdge();
          }, 0.1);
        };
        _proto.adeptSize = function adeptSize() {
          var size = view.getVisibleSize();
          var scaleX = size.width / 1920;
          var scaleY = size.height / 1080;
          this._adeptScale = scaleX < scaleY ? scaleX : scaleY;
          this.sub_main.scale = v3(this._adeptScale, this._adeptScale, 1);
        };
        _proto.enterGame = function enterGame(gameType, bundle) {
          if (gameType == "KenoGame" || gameType == "Dxgame" || gameType == "GuessBigSmall" || gameType == "FingGuess" || gameType == "Minipoker" || gameType == "DxgameMD5") {
            //            //如果小游戏  悬浮类游戏
            var that = this;
            var sceneName = GameDef.eMiniGameScene[gameType];
            var layerPath = "prefab/" + sceneName;
            Common.loadPopBuddle(layerPath, bundle, function (cur, total) {}, function (GameLayer) {
              var gameLayer = instantiate(GameLayer);
              that._viewManager.addPopGame(gameLayer, gameType);
            }, true);
          }
          this.closeOpen();
        };
        _proto.miniGame = function miniGame(data) {
          var gameType = GameDef.GameMap[data];
          var popgameArr = ViewManager.instance._popgameArr;
          if (popgameArr[gameType] != null && popgameArr[gameType] != "undefined") {
            var node_game = popgameArr[gameType]["node"];
            var curMaxIndex = ViewManager.instance.getMaxMiniZIndex();
            node_game.getComponent(UITransform).priority = curMaxIndex + 1;
            node_game.getComponent("MiniGameMoveOpacity").doTouchEnd();
            this.closeOpen();
            return;
          }
          var special = null;
          if (data == "yxx") {
            special = "YxxMini";
            if (ViewManager.instance.checkSceneName("Yxxgame")) {
              return;
            }
          }
          EventManager.getInstance().dispatch(ConfigManager.getInstance().eventTransform.checkGame, data, special);
          EventManager.getInstance().dispatch(ConfigManager.getInstance().eventTransform.showGameContent, data);
          this.closeOpen();
        };
        _proto.initEvent = function initEvent() {
          this.miniLayer.on(Node.EventType.TOUCH_END, this.closeOpen, this);
          this._eventManager.on(this._configManager.ButtonEvent.miniGame, this.miniGame, this);
          if (isValid(this.sub_main)) {
            this.sub_main.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
            this.sub_main.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
            this.sub_main.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.sub_main.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          }
          director.on(Director.EVENT_AFTER_SCENE_LAUNCH, this.adeptSize, this);
        };
        _proto.initUi = function initUi(data) {
          this._eventManager.off(this._configManager.protocolDx.getConfig, this.initUi, this);
          if (data.Data.dx.Result == 0) {
            var layer = this._isOpen == true ? this.sub_main.getChildByName("openLayer") : this.sub_main.getChildByName("closeLayer");
            layer.getChildByName("zi1").active = false;
            layer.getChildByName("kuang").active = true;
            layer.getChildByName("kuang").getChildByName("djs").getComponent(Label).string = data.Data.timeLeft;
          } else {
            this.scheduleOnce(function () {
              var layer = this._isOpen == true ? this.sub_main.getChildByName("openLayer") : this.sub_main.getChildByName("closeLayer");
              layer.getChildByName("kuang").active = false;
              var aniName = data.Data.dx.Result == 1 ? "xiu_1" : "TAI_1";
              if (isValid(layer)) {
                // layer.getChildByName("zi1").active = true;
                // layer.getChildByName("zi1").getComponent(sp.Skeleton).setAnimation(0, aniName, true);
                var node = layer.getChildByName("zi1");
                if (node) {
                  node.active = true;
                  var ani = node.getChildByName("ani");
                  ani.getComponent(sp.Skeleton).setAnimation(0, aniName, true);
                }
              }
            }, 6);
          }
          this._eventManager.on(this._configManager.protocolDx.dxXiazhu, this.showCountDown, this);
          this._eventManager.on(this._configManager.protocolDx.dxResult, this.showResult, this);
        };
        _proto.showCountDown = function showCountDown(data) {
          var layer = this._isOpen == true ? this.sub_main.getChildByName("openLayer") : this.sub_main.getChildByName("closeLayer");
          layer.getChildByName("zi1").active = false;
          layer.getChildByName("kuang").active = true;
          layer.getChildByName("kuang").getChildByName("djs").getComponent(Label).string = data.TimeLeft;
        };
        _proto.showResult = function showResult(data) {
          this.scheduleOnce(function () {
            var layer = this._isOpen == true ? this.sub_main.getChildByName("openLayer") : this.sub_main.getChildByName("closeLayer");
            layer.getChildByName("kuang").active = false;
            var aniName = data.dx.Result == 1 ? "xiu_1" : "TAI_1";
            if (isValid(layer)) {
              var node = layer.getChildByName("zi1");
              if (node) {
                node.active = true;
                var ani = node.getChildByName("ani");
                ani.getComponent(sp.Skeleton).setAnimation(0, aniName, true);
              }
            }
          }, 6);
        };
        _proto.initIcon = function initIcon() {
          this.miniLayer.active = this._isOpen == true;
          this.sub_main.getChildByName("openLayer").active = this._isOpen == true;
          this.sub_main.getChildByName("closeLayer").active = this._isOpen == false;
        };
        _proto.closeOpen = function closeOpen() {
          if (this._isOpen == true) {
            this._isOpen = false;
            var pos = this._pos;
            var openLayer = this.sub_main.getChildByName("openLayer");
            tween(openLayer).to(0.5, {
              scale: v3(0, 0, 1)
            }).call(function () {
              openLayer.active = false;
              openLayer.scale = v3(1, 1, 1);
            }).start();
            // cc.tween(this.sub_main).to(0.5, { x: pos.x, y: pos.y, angle: 0 }).start();
            tween(this.sub_main).to(0.5, {
              position: v3(pos.x, pos.y),
              angle: 0
            }).start();

            //            // cc.tween(this.sub_main).to(0.2, { x: 0, y: 0 }).start();
            this.sub_main.getChildByName("miniAni").scale = v3(1, 1, 1);
            this.sub_main.getChildByName("miniAni").getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            this.sub_main.getChildByName("closeLayer").active = true;
            this.miniLayer.active = false;
            this.sub_main.getChildByName("closeLayer").getChildByName("zi1").active = false;
            this.sub_main.getChildByName("closeLayer").getChildByName("kuang").active = false;
            this.sub_main.getChildByName("openLayer").getChildByName("zi1").active = false;
            this.sub_main.getChildByName("openLayer").getChildByName("kuang").active = false;
          }
        };
        _proto.onTouchStart = function onTouchStart(event) {
          //        // console.log('点击开始');
          this._startPos = new Vec2(this.sub_main.getPosition().x, this.sub_main.getPosition().y);
          this._allChang = this._startPos;
          if (this._isOpen == false) {
            this.sub_main.getChildByName("miniAni").scale = v3(1.2, 1.2, 1);
          }
        };
        _proto.onTouchMove = function onTouchMove(event) {
          if (!isValid(this.sub_main)) return;
          if (this._isOpen == true) {
            return;
          }
          var delta = event.getDelta();
          this._allChang = new Vec2(this._allChang.x + delta.x, this._allChang.y + delta.y);
          var changdu = GUtil.GetDistance(this._startPos, this._allChang);
          if (changdu > this.sub_main.getComponent(UITransform).width / 3) {
            var x = this.sub_main.getPosition().x + delta.x;
            var y = this.sub_main.getPosition().y + delta.y;
            this.sub_main.setPosition(x, y);
          }
        };
        _proto.onTouchCancel = function onTouchCancel() {
          if (!isValid(this.sub_main)) return;
          Common.showLog("touch cancel");
          if (this._isOpen == false) {
            this.sub_main.getChildByName("miniAni").scale = v3(1, 1, 1);
          }
          if (this._isOpen == true) {
            this.clickButton();
            return;
          }
          var endPos = new Vec2(this.sub_main.getPosition().x, this.sub_main.getPosition().y);
          // let changdu = this._startPos.sub(endPos).mag();
          var changdu = GUtil.GetDistance(this._startPos, endPos);
          if (changdu <= this.sub_main.getComponent(UITransform).width / 3) {
            this.clickButton();
            return;
          }
          var pos = this.getCurPos();
          tween(this.sub_main).to(0.2, {
            position: v3(pos.x, pos.y)
          }).start();
        };
        _proto.onTouchEnd = function onTouchEnd(event) {
          if (!isValid(this.sub_main)) return;
          if (this._isOpen == false) {
            this.sub_main.getChildByName("miniAni").scale = v3(1, 1, 1);
          }
          if (this._isOpen == true) {
            this.clickButton();
            return;
          }
          var endPos = new Vec2(this.sub_main.getPosition().x, this.sub_main.getPosition().y);
          if (endPos.x == this._startPos.x && endPos.y == this._startPos.y) {
            this.clickButton();
            return;
          }
          this.moveToEdge();
        };
        _proto.moveToEdge = function moveToEdge() {
          if (this._isOpen) return;
          var pos = this.getCurPos();
          tween(this.sub_main).stop().to(0.2, {
            position: v3(pos.x, pos.y)
          }).start();
        };
        _proto.setGameStatus = function setGameStatus(_lobbyGames) {
          var btnChildren = this.openLayer.children;
          for (var _iterator = _createForOfIteratorHelperLoose(btnChildren), _step; !(_step = _iterator()).done;) {
            var node = _step.value;
            var btn = node.getComponent(Button);
            if (!btn) {
              continue;
            }
            var isEnable = false;
            var gameName = btn.clickEvents[0].customEventData;
            for (var _iterator2 = _createForOfIteratorHelperLoose(_lobbyGames), _step2; !(_step2 = _iterator2()).done;) {
              var _gameItem = _step2.value;
              if (_gameItem.GameName == gameName) {
                isEnable = _gameItem.Status != 0;
                break;
              }
            }

            // btn.interactable = isEnable;
            Common.setButtonEnableWithGray(btn, isEnable);
          }
        };
        _proto.clickButton = function clickButton() {
          if (this._isOpen == true) {
            this.closeOpen();
          } else {
            this._isOpen = true;
            this.sub_main.scale = v3(this._adeptScale, this._adeptScale, 1);
            this._pos.x = this.sub_main.getPosition().x;
            this._pos.y = this.sub_main.getPosition().y;
            var pos = this.getCurPos();
            this.sub_main.scale = v3(0, 0, 1);
            //            // console.log("_adeptScale", this._adeptScale);
            // cc.tween(this.sub_main).to(0.5, { x: 0, y: 0, scale: this._adeptScale, angle: 360 }, { easing: "quadOut" }).start();

            tween(this.sub_main).to(0.5, {
              position: v3(0, 0),
              scale: v3(this._adeptScale, this._adeptScale, 1),
              angle: 360
            }, {
              easing: "quadOut"
            }).start();

            //            // cc.tween(this.sub_main).to(0.2, { x: pos.x, y: pos.y, scale: 1 }).start();
            this.sub_main.getChildByName("miniAni").getComponent(sp.Skeleton).setAnimation(0, "idle2", true);
            //            // this.sub_main.getChildByName("miniAni").scale = 1.5;
            this.miniLayer.active = true;
            this.sub_main.getChildByName("openLayer").active = true;
            this.sub_main.getChildByName("closeLayer").active = false;
            this.sub_main.getChildByName("closeLayer").getChildByName("zi1").active = false;
            this.sub_main.getChildByName("closeLayer").getChildByName("kuang").active = false;
            this.sub_main.getChildByName("openLayer").getChildByName("zi1").active = false;
            this.sub_main.getChildByName("openLayer").getChildByName("kuang").active = false;

            //            //
          }

          this._eventManager.off(this._configManager.protocolDx.dxXiazhu, this.showCountDown, this);
          this._eventManager.off(this._configManager.protocolDx.dxResult, this.showResult, this);
          this._eventManager.on(this._configManager.protocolDx.getConfig, this.initUi, this);
          this._netManager.sendOnlineData(this._configManager.protocolDx.getConfig, {});
        };
        _proto.getCurPos = function getCurPos() {
          var node = this.sub_main;
          var width = this._isOpen == true ? this.sub_main.getChildByName("openLayer").getComponent(UITransform).width : this.sub_main.getComponent(UITransform).width;
          var height = this._isOpen == true ? this.sub_main.getChildByName("openLayer").getComponent(UITransform).height : this.sub_main.getComponent(UITransform).height;
          var screen = view.getVisibleSize();
          //        // let world = node.convertToWorldSpaceAR(new cc.Vec2(0, 0));
          var posZuo = new Vec2(-(screen.width / 2.0 - width / 2), 0);
          var posYou = new Vec2(screen.width / 2.0 - width / 2, 0);
          var posTop = new Vec2(0, screen.height / 2.0 - height / 2);
          var posBottom = new Vec2(0, -(screen.height / 2.0 - height / 2));
          var pos = new Vec2(0, 0);
          var juli1 = GUtil.GetDistance(posZuo, v2(node.getPosition().x, 0));
          var juli2 = GUtil.GetDistance(posYou, v2(node.getPosition().x, 0));
          var juli3 = GUtil.GetDistance(posTop, v2(0, node.getPosition().y));
          var juli4 = GUtil.GetDistance(posBottom, v2(0, node.getPosition().y));
          if (juli1 <= juli2 && juli1 <= juli3 && juli1 <= juli4) {
            //            //左靠
            Common.showLog("zuo zuo");
            pos.x = posZuo.x + 10;
            pos.y = node.getPosition().y;
            var abs_posY = Math.abs(pos.y);
            var abs_height = screen.height / 2.0 - height / 2;
            if (abs_posY > abs_height) {
              pos.y = pos.y / abs_posY * abs_height;
            }
          } else if (juli2 <= juli1 && juli2 <= juli3 && juli2 <= juli4) {
            pos.x = posYou.x - 10;
            pos.y = node.getPosition().y;
            var _abs_posY = Math.abs(pos.y);
            var _abs_height = screen.height / 2.0 - height / 2;
            if (_abs_posY > _abs_height) {
              pos.y = pos.y / _abs_posY * _abs_height;
            }
          } else if (juli3 <= juli1 && juli3 <= juli2 && juli3 <= juli4) {
            pos.x = node.getPosition().x;
            pos.y = posTop.y;
            var abs_posX = Math.abs(pos.x);
            var abs_width = screen.width / 2.0 - width / 2;
            if (abs_posX > abs_width) {
              pos.x = pos.x / abs_posX * abs_width;
            }
          } else if (juli4 <= juli1 && juli4 <= juli2 && juli4 <= juli3) {
            pos.x = node.getPosition().x;
            pos.y = posBottom.y;
            var _abs_posX = Math.abs(pos.x);
            var _abs_width = screen.width / 2.0 - width / 2;
            if (_abs_posX > _abs_width) {
              pos.x = pos.x / _abs_posX * _abs_width;
            }
          }
          return {
            x: pos.x,
            y: pos.y
          };
        };
        _proto.removeEvent = function removeEvent() {
          if (isValid(this.sub_main)) {
            this.sub_main.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
            this.sub_main.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
            this.sub_main.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.sub_main.off(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
          }
          this.miniLayer.off(Node.EventType.TOUCH_END, this.closeOpen, this);
          this._eventManager.off(this._configManager.protocolDx.getConfig, this.initUi, this);
          this._eventManager.off(this._configManager.protocolDx.dxXiazhu, this.showCountDown, this);
          this._eventManager.off(this._configManager.protocolDx.dxResult, this.showResult, this);
          this._eventManager.off(this._configManager.ButtonEvent.miniGame, this.miniGame, this);
          director.off(Director.EVENT_AFTER_SCENE_LAUNCH, this.adeptSize, this);
        };
        _proto.onDestroy = function onDestroy() {
          //        // this.removeEvent();
        };
        return MiniButton;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sub_main", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "miniLayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "openLayer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MiniGameMoveOpacity.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, UITransform, isValid, UIOpacity, Component, MainManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
      isValid = module.isValid;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "e3f296/bIZDHLPEEpYbOLUK", "MiniGameMoveOpacity", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MiniGameMoveOpacity = exports('default', (_dec = ccclass("MiniGameMoveOpacity"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MiniGameMoveOpacity, _Component);
        function MiniGameMoveOpacity() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._mainManager = void 0;
          _this._viewManager = void 0;
          _initializerDefineProperty(_this, "shade", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sub_main", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sub_main2", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameType", _descriptor4, _assertThisInitialized(_this));
          _this._onStart = false;
          return _this;
        }
        var _proto = MiniGameMoveOpacity.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this._mainManager = MainManager.getInstance();
          this._viewManager = this._mainManager.getViewManager();
          //        // this.node.zIndex = 100;

          this.shade.on(Node.EventType.TOUCH_END, function () {
            _this2._viewManager.setPopGameOp(_this2.gameType, false);
            _this2.node.getComponent(UITransform).priority = 100;
            if (isValid(_this2.sub_main)) {
              _this2.sub_main.getComponent(UIOpacity).opacity = 150;
            }
            if (isValid(_this2.sub_main2)) {
              _this2.sub_main2.getComponent(UIOpacity).opacity = 150;
            }
            if (isValid(_this2.shade)) {
              _this2.shade.active = false;
            }
          }, this);
          //        // gts.UI.OnClick(
          //        //     this.shade,
          //        //     () => {
          //        //         this._viewManager.setPopGameOp(this.gameType, false);
          //        //         this.node.zIndex = 100;
          //        //         if (cc.isValid(this.sub_main)) {
          //        //             this.sub_main.opacity = 150;
          //        //         }
          //        //         if (cc.isValid(this.sub_main2)) {
          //        //             this.sub_main2.opacity = 150;
          //        //         }
          //        //         if (cc.isValid(this.shade)) {
          //        //             this.shade.active = false;
          //        //         }
          //        //     },
          //        //     this
          //        // );
          this.initEvent();
        };
        _proto.initMiniByData = function initMiniByData(data) {
          this.node.getComponent(UITransform).priority = data["opacity"] == true ? 100 : 99;
          if (isValid(this.sub_main)) {
            this.sub_main.getComponent(UIOpacity).opacity = data["opacity"] == true ? 255 : 150;
            var x = data["pos1"] == null ? this.sub_main.getPosition().x : data["pos1"].x;
            var y = data["pos1"] == null ? this.sub_main.getPosition().y : data["pos1"].y;
            this.sub_main.setPosition(x, y);
          }
          if (isValid(this.sub_main2)) {
            this.sub_main2.getComponent(UIOpacity).opacity = data["opacity"] == true ? 255 : 150;
            var _x = data["pos2"] == null ? this.sub_main.getPosition().x : data["pos2"].x;
            var _y = data["pos2"] == null ? this.sub_main.getPosition().y : data["pos2"].y;
            this.sub_main2.setPosition(_x, _y);
          }
          if (isValid(this.shade)) {
            this.shade.active = data["opacity"];
          }
        };
        _proto.initEvent = function initEvent() {
          var _this3 = this;
          if (isValid(this.sub_main)) {
            this.sub_main.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
            this.sub_main.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
            this.sub_main.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.sub_main.on(Node.EventType.TOUCH_CANCEL, function () {
              _this3._onStart = false;
            }, this);
          }
          if (isValid(this.sub_main2)) {
            this.sub_main2.on(Node.EventType.TOUCH_START, this.onTouchStart2, this);
            this.sub_main2.on(Node.EventType.TOUCH_MOVE, this.onTouchMove2, this);
            this.sub_main2.on(Node.EventType.TOUCH_END, this.onTouchEnd2, this);
          }
        };
        _proto.onDisable = function onDisable() {
          this.removeEvent();
        };
        _proto.onTouchStart = function onTouchStart() {
          this._onStart = true;
          // console.log("点击开始1");
        };

        _proto.onTouchMove = function onTouchMove(event) {
          if (!isValid(this.sub_main) || !this._onStart) return;
          var delta = event.getDelta();
          var x = this.sub_main.getPosition().x + delta.x;
          var y = this.sub_main.getPosition().y + delta.y;
          this.sub_main.setPosition(x, y);
        };
        _proto.doTouchEnd = function doTouchEnd() {
          this.onTouchEnd();
          this.onTouchEnd2();
        };
        _proto.onTouchEnd = function onTouchEnd() {
          this._onStart = false;
          if (!isValid(this.sub_main)) return;
          this.sub_main.getComponent(UIOpacity).opacity = 255;
          this.node.getComponent(UITransform).priority = this._viewManager.getMaxMiniZIndex(+1);
          if (isValid(this.sub_main2)) {
            this.sub_main2.getComponent(UIOpacity).opacity = 255;
          }
          if (isValid(this.shade)) {
            this.shade.active = true;
          }
          this._viewManager.setPopGameOp(this.gameType, true);
          this._viewManager.setPopGamePos(this.gameType, {
            x: this.sub_main.getPosition().x,
            y: this.sub_main.getPosition().y
          }, 1);
          this._viewManager.setPopGameFirst(this.gameType);
        };
        _proto.onTouchStart2 = function onTouchStart2() {};
        _proto.onTouchMove2 = function onTouchMove2(event) {
          if (!isValid(this.sub_main2)) return;
          var delta = event.getDelta();
          var x = this.sub_main2.getPosition().x + delta.x;
          var y = this.sub_main2.getPosition().y + delta.y;
          this.sub_main2.setPosition(x, y);
        };
        _proto.onTouchEnd2 = function onTouchEnd2() {
          if (!isValid(this.sub_main2)) return;
          this.sub_main2.getComponent(UIOpacity).opacity = 255;
          this.node.getComponent(UITransform).priority = this._viewManager.getMaxMiniZIndex(+1);
          if (isValid(this.sub_main)) {
            this.sub_main.getComponent(UIOpacity).opacity = 255;
          }
          if (isValid(this.shade)) {
            this.shade.active = true;
          }
          this._viewManager.setPopGameOp(this.gameType, true);
          this._viewManager.setPopGamePos(this.gameType, {
            x: this.sub_main2.getPosition().x,
            y: this.sub_main2.getPosition().y
          }, 2);
          this._viewManager.setPopGameFirst(this.gameType);
        };
        _proto.removeEvent = function removeEvent() {
          if (isValid(this.sub_main)) {
            this.sub_main.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
            this.sub_main.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
            this.sub_main.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.sub_main.off(Node.EventType.TOUCH_CANCEL);
          }
          if (isValid(this.sub_main2)) {
            this.sub_main2.off(Node.EventType.TOUCH_START, this.onTouchStart2, this);
            this.sub_main2.off(Node.EventType.TOUCH_MOVE, this.onTouchMove2, this);
            this.sub_main2.off(Node.EventType.TOUCH_END, this.onTouchEnd2, this);
          }
        };
        return MiniGameMoveOpacity;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "shade", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sub_main", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sub_main2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/mqttlib.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0805bX8m1BLw7tWl1PT/ftT", "mqttlib", undefined); //'use strict'
      // import * as Paho from "./paho-mqtt";
      // import Paho from './mqttws31'
      var hashmap = function hashmap() {};
      hashmap.prototype = {
        constructor: hashmap,
        add: function add(k, v) {
          if (!this.hasOwnProperty(k)) {
            this[k] = v;
          }
        },
        remove: function remove(k) {
          if (this.hasOwnProperty(k)) {
            delete this[k];
          }
        },
        update: function update(k, v) {
          this[k] = v;
        },
        has: function has(k) {
          var type = typeof k;
          if (type === "string" || type === "number") {
            return this.hasOwnProperty(k);
          } else if (type === "function" && this.some(k)) {
            return true;
          }
          return false;
        },
        clear: function clear() {
          var keys = Object.keys(this);
          for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
            var k = _keys[_i];
            if (this.hasOwnProperty(k)) {
              delete this[k];
            }
          }
        },
        empty: function empty() {
          var keys = Object.keys(this);
          for (var _i2 = 0, _keys2 = keys; _i2 < _keys2.length; _i2++) {
            var k = _keys2[_i2];
            if (this.hasOwnProperty(k)) {
              return false;
            }
          }
          return true;
        },
        each: function each(fn) {
          var keys = Object.keys(this);
          for (var _i3 = 0, _keys3 = keys; _i3 < _keys3.length; _i3++) {
            var k = _keys3[_i3];
            if (this.hasOwnProperty(k)) {
              fn.call(this, this[k], k, this);
            }
          }
        },
        map: function map(fn) {
          var hash = new hashmap();
          var keys = Object.keys(this);
          for (var _i4 = 0, _keys4 = keys; _i4 < _keys4.length; _i4++) {
            var k = _keys4[_i4];
            if (this.hasOwnProperty(k)) {
              hash.add(k, fn.call(this, this[k], k, this));
            }
          }
          return hash;
        },
        filter: function filter(fn) {},
        join: function join(split) {
          split = split !== undefined ? split : ",";
          var rst = [];
          this.each(function (v) {
            rst.push(v);
          });
          return rst.join(split);
        },
        every: function every(fn) {
          var keys = Object.keys(this);
          for (var _i5 = 0, _keys5 = keys; _i5 < _keys5.length; _i5++) {
            var k = _keys5[_i5];
            if (this.hasOwnProperty(k)) {
              if (!fn.call(this, this[k], k, this)) {
                return false;
              }
            }
          }
          return true;
        },
        some: function some(fn) {
          var keys = Object.keys(this);
          for (var _i6 = 0, _keys6 = keys; _i6 < _keys6.length; _i6++) {
            var k = _keys6[_i6];
            if (this.hasOwnProperty(k)) {
              if (fn.call(this, this[k], k, this)) {
                return true;
              }
            }
          }
          return false;
        },
        find: function find(k) {
          var type = typeof k;
          if (type === "string" || type === "number" && this.has(k)) {
            return this[k];
          } else if (type === "function") {
            var keys = Object.keys(this);
            for (var _i7 = 0, _keys7 = keys; _i7 < _keys7.length; _i7++) {
              var _k = _keys7[_i7];
              if (this.hasOwnProperty(_k) && k.call(this, this[_k], _k, this)) {
                return this[_k];
              }
            }
          }
          return null;
        }
      };
      var mqant = function mqant() {};
      mqant.prototype = {
        constructor: mqant,
        curr_id: 0,
        client: null,
        waiting_queue: new hashmap(),
        init: function init(prop) {
          prop["onFailure"] = prop["onFailure"] || function () {
            console.log("onFailure");
          };
          prop["onConnectionLost"] = prop["onConnectionLost"] || function (responseObject) {
            if (responseObject.errorCode !== 0) {
              console.log("onConnectionLost:" + responseObject.errorMessage);
              console.log("连接已断开");
            }
          };
          prop["useSSL"] = prop["useSSL"] || false;
          this.client = prop["useSSL"] ? new Paho.Client(prop["host"], prop["client_id"]) : new Paho.Client(prop["host"], prop["port"], prop["client_id"]);
          // prop["pem"] = prop["pem"] || null;
          this.client.connect({
            onSuccess: prop["onSuccess"],
            onFailure: prop["onFailure"],
            mqttVersion: 3,
            useSSL: prop["useSSL"],
            cleanSession: true,
            keepAliveInterval: 10,
            pem: prop["pem"]
          }); //连接服务器并注册连接成功处理事件
          this.client.onConnectionLost = prop["onConnectionLost"]; //注册连接断开处理事件
          this.client.onMessageArrived = onMessageArrived; //注册消息接收处理事件
          var self = this;
          function onMessageArrived(message) {
            try {
              var callback = self.waiting_queue.find(message.destinationName);
              if (callback != null) {
                //有等待消息的callback 还缺一个信息超时的处理机制
                var h = message.destinationName.split("/");
                if (h.length > 2) {
                  //这个topic存在msgid 那么这个回调只使用一次
                  self.waiting_queue.remove(message.destinationName);
                }
                // let str = cryptojs.decrypt(message.payloadString);
                callback(self.parseJson(message.payloadString), message.destinationName, message);
              }
            } catch (e) {
              console.log(e);
            }
          }
        },
        disConnect: function disConnect() {
          this.client.disconnect();
        },
        /**
         * 向服务器发送一条消息
         * @param topic
         * @param msg
         * @param callback
         */
        request: function request(topic, msg, callback) {
          this.curr_id = this.curr_id + 1;
          var rtopic = topic + "/" + this.curr_id; //给topic加一个msgid 这样服务器就会返回这次请求的结果,否则服务器不会返回结果
          var payload = JSON.stringify(msg);
          this.on(rtopic, callback);
          //  payload = cryptojs.encrypt(payload);

          this.client.send(rtopic, payload, 0);
        },
        requestStr: function requestStr(topic, msg, callback) {
          this.curr_id = this.curr_id + 1;
          var rtopic = topic + "/" + this.curr_id; //给topic加一个msgid 这样服务器就会返回这次请求的结果,否则服务器不会返回结果
          var payload = msg;
          this.on(rtopic, callback);
          this.client.send(rtopic, payload, 0);
        },
        /**
         * 向服务器发送一条消息,但不要求服务器返回结果
         * @param topic
         * @param msg
         */
        requestNR: function requestNR(topic, msg) {
          var payload = JSON.stringify(msg);
          this.client.send(topic, payload, 0);
        },
        /**
         * 监听指定类型的topic消息
         * @param topic
         * @param callback
         */
        on: function on(topic, callback) {
          //服务器不会返回结果
          this.waiting_queue.add(topic, callback); //添加这条消息到等待队列
        },

        offAll: function offAll() {
          this.waiting_queue.clear();
        },
        parseJson: function parseJson(str) {
          if (typeof str == "string") {
            try {
              return JSON.parse(str);
            } catch (e) {
              return str;
            }
          } else {
            return str;
          }
        }
      };

      // window.mqant=new mqant()
      var mqant$1 = exports('default', mqant = new mqant());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './mqttlib.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './Common.ts', './I18n.ts', './URLUtil.ts', './GameButtonDef.ts'], function (exports) {
  var _createClass, cclegacy, mqant, ConfigManager, DataManager, UserKey, EventManager, Common, i18n, urlUtil, GameButtonMap;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      mqant = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      urlUtil = module.urlUtil;
    }, function (module) {
      GameButtonMap = module.GameButtonMap;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b4ef1n8aihCM4n4j90sbdBD", "NetManager", undefined); // //网络管理器  用于管理所有http socket网络事件的分发 和接受
      var NetManager = exports('default', /*#__PURE__*/function () {
        function NetManager() {
          this._connect = false;
          this._IsListener = false;
          this._startRequset = false;
          this._reConnectCounts = 0;
          this._hTimerOut = null;
          this._configManager = null;
          this.toGetSerid = false;
          this._isChange = false;
          this._isLoginForB = false;
          this._configManager = ConfigManager.getInstance();
          this.waitServiceSendData();
        }
        var _proto = NetManager.prototype;
        _proto.connect = function connect() {
          var _this = this;
          //        //连接或者登录错误 20次 则等待5秒
          if (this._reConnectCounts > 1) {
            if (!this._hTimerOut) {
              this._hTimerOut = setTimeout(function () {
                _this._reConnectCounts = 0;
                _this._hTimerOut = null;
                _this.connect();
              }, 3000);
            }
            return;
          }
          this._reConnectCounts++;

          //        //建立长连接，握手
          var oid = DataManager.instance.getUserDataForKey(UserKey.OID);
          var clientId = oid; //调用登录后获得的用户ID
          var useSSL = false;
          var host = this._configManager.scoketHost; //长链接HOST
          var port = this._configManager.scoketPort; //长链接端口

          var pem = ConfigManager.getInstance().pem;

          //        //wss连接判断
          if (host.split(":")[0] == "wss") {
            useSSL = true;
          }
          mqant.init({
            host: host,
            port: port,
            client_id: clientId,
            useSSL: useSSL,
            pem: pem,
            onSuccess: function onSuccess() {
              //                //握手成功
              console.log("socket 连接成功");
              _this._connect = true;
              _this.toGetSerid = true;

              //                // if (DataManager.instance.getUserDataForKey(UserKey.SIGN)) {
              //                //     this.onLoginConnect();
              //                // } else {
              //                //     this.connectBefore(); // 长连接登录
              //                // }
              if (_this._startRequset) {
                _this._startRequset = false;
                EventManager.instance.dispatch(_this._configManager.eventTransform.reConnect, null);
              }
              _this.onLoginConnect();
              _this.waitServiceSendData();
            },
            onConnectionLost: function onConnectionLost(responseObject) {
              //                //连接中断
              gts.Debug.Log("--连接中断----", JSON.stringify(responseObject));
              _this._connect = false;
              if (_this.getChangeZh() == false && _this.getLoginStatus() == false) {
                _this._startRequset = true;
                EventManager.instance.dispatch(_this._configManager.eventTransform.disConnect, null);
                gts.Debug.Log("--连接中断--重新连接--");
                _this.connect();
              }
            },
            onFailure: function onFailure() {
              //                //握手失败
              gts.Debug.Log("--握手失败----");
              Common.showLog("onFailure:");
              EventManager.instance.dispatch(_this._configManager.eventTransform.disConnect, null);
              _this.connect();
            }
          });
        };
        _proto.disconnect = function disconnect() {
          this._connect = false;
          mqant.disConnect();
        };
        _proto.onLoginConnect = function onLoginConnect() {
          var _this2 = this;
          //        //长连接登录
          var data = {};
          var cmd = this._configManager.protocolHall.login;
          data["uid"] = DataManager.instance.getUserDataForKey(UserKey.OID);
          data["rateKey"] = urlUtil.currencyCode;
          data["gameType"] = GameButtonMap.slotCaptainBounty.gameType;
          var signature = DataManager.instance.getUserDataForKey(UserKey.SIGN);
          if (signature) {
            data["signature"] = signature;
          } else {
            var token = DataManager.instance.getUserDataForKey(UserKey.TOKEN);
            if (token) {
              data["token"] = token;
            }
          }
          var that = this;
          mqant.request(cmd, data, function (redata, topic, msg) {
            if (!redata) {
              Common.showLog("==redata==null");
              return;
            }
            if (redata.Code && redata.Code != 0) {
              //                // Common.showTip(i18n.errTip(redata.Code));
              Common.showLog(redata.ErrMsg);
            }
            if (typeof redata.Action != "undefined" && redata.Action != "" && redata.Action != "nothing") {
              if (redata.Code == 0) {
                DataManager.instance.setUserDataForKey(UserKey.CURRENCY_MULTIPLIER, Number(redata.Data.rateVal));
                DataManager.instance.setUserDataForKey(UserKey.CURRENCY_SYMBOL, redata.Data.moneySymbol);
                DataManager.instance.setUserDataForKey(UserKey.ACCOUNT, redata.Data.user.Account);
                DataManager.instance.setUserDataForKey(UserKey.GOLD, redata.Data.wallet.VndBalance);
                DataManager.instance.setUserData(redata.Data.user);
                DataManager.instance.setUserDataForKey(UserKey.SIGN, redata.Data.signature);
                console.log("登录成功---", redata.Data.signature);
                if (redata.Data.user.PlatformCode == "BET66") {
                  redata.Data.user.PlatformCode = "XOSO66";
                }
                DataManager.instance.setUserDataForKey(UserKey.PLATFORM, redata.Data.user.PlatformCode);
                DataManager.instance.setUserDataForKey(UserKey.CURL, redata.Data.user.Curl);
                DataManager.instance.setUserDataForKey(UserKey.TURL, redata.Data.user.Turl);
                DataManager.instance.showPopNotify = true;
                that._reConnectCounts = 0;
                if (_this2.getChangeZh() || _this2.getLoginStatus()) {
                  _this2.setChangeZh(false);
                  _this2.setLoginStatus(false);
                  EventManager.getInstance().dispatch(_this2._configManager.eventTransform.getHallInfo);
                }
              }
              that.recvNetData(redata);
            } else {
              Common.showLog("不需要处理的回调：" + redata.Action);
            }
          });
        };
        _proto.sendOnlineData = function sendOnlineData(cmd, data) {
          var _this3 = this;
          if (data === void 0) {
            data = {};
          }
          if (this._connect == false) {
            Common.showLog("断线中...");
            return;
          }
          data["uid"] = DataManager.instance.getUserDataForKey(UserKey.OID);
          //        // data["token"] = DataManager.instance.getUserDataForKey(UserKey.TOKEN);
          var token = DataManager.instance.getUserDataForKey(UserKey.TOKEN);
          if (token) {
            data["token"] = token;
          }
          var that = this;

          //        // gts.Debug.Log(`=sendOnlineData-cmd=${cmd}=data=${JSON.stringify(data)}`);
          mqant.request(cmd, data, function (redata, topic, msg) {
            Common.showLog(redata);
            if (redata == null) {
              //                // Common.showTishiSureBtn("Đường truyền đang bận , Vui lòng thử lại！",function(){
              //                //    // that.sendOnlineData(cmd,data);
              //                //  },null);
              gts.Debug.LogWarr("==onRecvData=redata==null=");
              return;
            }
            if (redata.Code == 302 || redata.Code == 401) {
              _this3._connect = false;
              _this3.connect();
              return;
            }
            if (typeof redata.Action != "undefined" && redata.Action != "" && redata.Action != "nothing") {
              that.recvNetData(redata);
            } else {
              Common.showLog("不需要处理的回调：" + redata.Action);
            }
          });
        };
        _proto.recvNetData = function recvNetData(data) {
          //        // Common.showLog(cmd);
          //        // Common.showLog("接受服务端数据");
          //        // Common.showLog(data);
          //        // console.log("recvNetData", data);
          //        // gts.Debug.Log(`=接受服务端数据=recvNetData=${JSON.stringify(data)}`);
          if (data.Code == 30211) {
            Common.showTip(i18n.errTip(data.Code));
            return;
          } else if (data.Code == 302 || data.Code == 401) {
            //            //账号挤兑--账号失效
            data.Code == 302 ? this.setChangeZh(true) : this.setLoginStatus(true);
            this.disconnect();
            gts.Debug.Log("=======recvNetData=====");
            EventManager.getInstance().emit(ConfigManager.getInstance().eventTransform.account_disConnect, data.Code, true);
            return;
          }
          //        // if (data.Code && data.Code != 0) {
          //        //     Common.showTip(i18n.errTip(data.Code));
          //        // }
          this.recvData(data);
        };
        _proto.recvData = function recvData(data) {
          var cmd = data.GameType + "/" + data.Action;
          data.cmd = cmd;
          if (data.Action != "doingBet" && data.Action != "waiteNext") ;
          EventManager.instance.dispatch(cmd, data);
        };
        _proto.waitServiceSendData = function waitServiceSendData() {
          //        //等待服务器发送消息
          if (this._IsListener == false) {
            this._IsListener = true;
            var self = this;
            mqant.on("game/push", function (data) {
              self.recvNetData(data);
            });
          }
        };
        _proto.removeWaitServicePush = function removeWaitServicePush() {
          //        //取消服务端推送监听
          if (this._IsListener == true) {
            this._IsListener = false;
            mqant.offAll();
          }
        };
        _proto.httpGet = function httpGet(url, params, callback1, callback2) {
          var _this4 = this;
          var lastUrl = ConfigManager.instance.httpHost;
          var nativeUrl = lastUrl + url;
          var dataStr = "";
          Object.keys(params).forEach(function (key) {
            dataStr += key + "=" + encodeURIComponent(params[key]) + "&";
          });
          if (dataStr !== "") {
            dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
            //            // dataStr = dataStr.substr(0, dataStr.lastIndexOf("&"));
            nativeUrl = nativeUrl + "?" + dataStr;
          }
          var xhr = new XMLHttpRequest();
          // xhr.timeout = 6 * 1000;
          xhr.open("GET", nativeUrl, true);
          xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
          //        // xhr.setRequestHeader("bearer", "bb068839aee78be725a317ffc427d1a4");

          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              var response = xhr.responseText;
              if (xhr.status >= 200 && xhr.status < 400) {
                var data = JSON.parse(response);
                callback1(data);
              } else if (xhr.status >= 500) {
                if (lastUrl != ConfigManager.instance.httpHost || ConfigManager.instance.checkHttpAdr()) {
                  _this4.httpGet(url, params, callback1, callback2);
                } else {
                  if (callback2) {
                    callback2();
                  }
                }
              } else {
                if (callback2) {
                  callback2();
                }
              }
            }
          };
          xhr.onerror = function () {
            if (lastUrl != ConfigManager.instance.httpHost || ConfigManager.instance.checkHttpAdr()) {
              _this4.httpGet(url, params, callback1, callback2);
            } else {
              if (callback2) {
                callback2();
              }
            }
          };
          xhr.ontimeout = function () {
            if (lastUrl != ConfigManager.instance.httpHost || ConfigManager.instance.checkHttpAdr()) {
              _this4.httpGet(url, params, callback1, callback2);
            } else {
              if (callback2) {
                callback2();
              }
            }
          };
          xhr.send();
        };
        _proto.httpPost = function httpPost(url, param, callback1, callback2) {
          var _this5 = this;
          if (param === void 0) {
            param = {};
          }
          var xhr = new XMLHttpRequest();
          xhr.timeout = 6 * 1000;
          var lastUrl = ConfigManager.instance.httpHost;
          var nativeUrl = lastUrl + url;
          xhr.open("POST", nativeUrl, true);
          xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
          var token = DataManager.instance.getUserDataForKey(UserKey.SIGN);
          if (!token || token == "") {
            callback2();
            return;
          }
          //        // xhr.setRequestHeader("token", token);
          //        // xhr.setRequestHeader("bearer", "bb068839aee78be725a317ffc427d1a4");

          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              var response = xhr.responseText;
              if (xhr.status >= 200 && xhr.status < 400) {
                var data = JSON.parse(response);
                callback1(data);
              } else if (xhr.status >= 500) {
                if (lastUrl != ConfigManager.instance.httpHost || ConfigManager.instance.checkHttpAdr()) {
                  _this5.httpPost(url, param, callback1, callback2);
                } else {
                  if (callback2) {
                    callback2();
                  }
                }
              } else {
                if (callback2) {
                  callback2();
                }
              }
            }
          };
          xhr.onerror = function () {
            if (lastUrl != ConfigManager.instance.httpHost || ConfigManager.instance.checkHttpAdr()) {
              _this5.httpPost(url, param, callback1, callback2);
            } else {
              if (callback2) {
                callback2();
              }
            }
          };

          // xhr.ontimeout = () => {
          //     if (lastUrl != ConfigManager.instance.httpHost || ConfigManager.instance.checkHttpAdr()) {
          //         this.httpPost(url, param, callback1, callback2);
          //     } else {
          //         if (callback2) {
          //             callback2();
          //         }
          //     }
          // };

          xhr.send(JSON.stringify(param));
        };
        _proto.setLoginStatus = function setLoginStatus(isbool) {
          this._isLoginForB = isbool;
        };
        _proto.getLoginStatus = function getLoginStatus() {
          return this._isLoginForB;
        };
        _proto.setChangeZh = function setChangeZh(isbool) {
          this._isChange = isbool;
        };
        _proto.getChangeZh = function getChangeZh() {
          return this._isChange;
        };
        _proto.analisCommit = function analisCommit(mainType, subType) {
          if (mainType === void 0) {
            mainType = "";
          }
          if (subType === void 0) {
            subType = "";
          }
          this.sendOnlineData(ConfigManager.getInstance().protocolHall.HD_ClickCharge, {
            mainType: mainType,
            subType: subType
          });
        };
        _createClass(NetManager, [{
          key: "netState",
          get: function get() {
            return this._connect;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new NetManager();
            }
            return this._instance;
          }
        }]);
        return NetManager;
      }());
      NetManager._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NodeEventProcessorEx.ts", ['cc'], function () {
  var cclegacy, NodeEventType;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      NodeEventType = module.NodeEventType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2f718yX7ARMUozqB3uYlV5w", "NodeEventProcessorEx", undefined);
      (function () {
        cclegacy.NodeEventProcessor.prototype._handleMouseEnter = function (event) {
          this._isMouseLeaveWindow = false;
          return false;
        };
        cclegacy.NodeEventProcessor.prototype._handleMouseLeave = function (event) {
          if (this.previousMouseIn) {
            event.type = NodeEventType.MOUSE_LEAVE;
            this._node.dispatchEvent(event);
            this.previousMouseIn = false;
          }
          return false;
        };
      })();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/nodeEx.ts", ['cc'], function () {
  var cclegacy, Node;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
    }],
    execute: function () {
      cclegacy._RF.push({}, "eb7c6JRFlBBQ5C9dgjRm1Hx", "nodeEx", undefined);
      (function () {
        Node.prototype.removeAllChildren = function () {
          var children = this._children;
          for (var i = children.length - 1; i >= 0; i--) {
            var node = children[i];
            if (node) {
              node.parent = null;
              node.destroy();
            }
          }
          this._children.length = 0;
        };
        Object.assign(Node.prototype, {
          destroyFromParent: function destroyFromParent() {
            this.removeFromParent();
            this.destroy();
          }
        });
      })();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/onBtnPress.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Node, Sprite, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Node = module.Node;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "bace3pHE7ZDlqX5CKfW1/7l", "onBtnPress", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var onBtnPress = exports('default', (_dec = ccclass("OnBtnPress"), _dec2 = menu("tools/onBtnPress"), _dec3 = property(), _dec4 = property({
        type: SpriteFrame,
        visible: function visible() {
          return this.isBtn;
        }
      }), _dec5 = property({
        type: SpriteFrame,
        visible: function visible() {
          return this.isBtn;
        }
      }), _dec6 = property({
        visible: function visible() {
          return this.isBtn;
        }
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(onBtnPress, _Component);
        function onBtnPress() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "isBtn", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_nomalSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_pressSpriteFrame", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isSwitch", _descriptor4, _assertThisInitialized(_this));
          _this._switch = false;
          return _this;
        }
        var _proto = onBtnPress.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.node.on(Node.EventType.TOUCH_START, function () {
            var _pressSpriteFrame = _this2.isSwitch && _this2._switch ? _this2._nomalSpriteFrame : _this2._pressSpriteFrame;
            if (_pressSpriteFrame) {
              _this2.node.getChildByName("Background").getComponent(Sprite).spriteFrame = _pressSpriteFrame;
            }
          });
          this.node.on(Node.EventType.TOUCH_END, function () {
            _this2._switch = !_this2._switch;
            var _nomalSpriteFrame = _this2.isSwitch && _this2._switch ? _this2._pressSpriteFrame : _this2._nomalSpriteFrame;
            if (_this2._nomalSpriteFrame) {
              _this2.node.getChildByName("Background").getComponent(Sprite).spriteFrame = _nomalSpriteFrame;
            }
          });
          this.node.on(Node.EventType.TOUCH_CANCEL, function () {
            _this2._switch = !_this2._switch;
            var _nomalSpriteFrame = _this2.isSwitch && _this2._switch ? _this2._pressSpriteFrame : _this2._nomalSpriteFrame;
            if (_this2._nomalSpriteFrame) {
              _this2.node.getChildByName("Background").getComponent(Sprite).spriteFrame = _nomalSpriteFrame;
            }
          });
        };
        return onBtnPress;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_nomalSpriteFrame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_pressSpriteFrame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "isSwitch", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // // Learn TypeScript:
      // //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
      // // Learn Attribute:
      // //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
      // // Learn life-cycle callbacks:
      // //  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
      //
      // const { ccclass, property, menu } = cc._decorator;
      //
      // @ccclass
      // @menu("tools/onBtnPress")
      // export default class onBtnPress extends cc.Component {
      //     // LIFE-CYCLE CALLBACKS:
      //     @property()
      //     isBtn: boolean = false;
      //
      //     @property({
      //         type: cc.SpriteFrame,
      //         visible: function () {
      //             return this.isBtn;
      //         },
      //     })
      //     _nomalSpriteFrame: cc.SpriteFrame = null;
      //     @property({
      //         type: cc.SpriteFrame,
      //         visible: function () {
      //             return this.isBtn;
      //         },
      //     })
      //     _pressSpriteFrame: cc.SpriteFrame = null;
      //
      //     @property({
      //         visible: function () {
      //             return this.isBtn;
      //         },
      //     })
      //     isSwitch: boolean = false;
      //
      //     _switch: boolean = false;
      //
      //     onLoad() {
      //         this.node.on(cc.Node.EventType.TOUCH_START, () => {
      //             let _pressSpriteFrame = this.isSwitch && this._switch ? this._nomalSpriteFrame : this._pressSpriteFrame;
      //             if (_pressSpriteFrame) {
      //                 this.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = _pressSpriteFrame;
      //             }
      //         });
      //         this.node.on(cc.Node.EventType.TOUCH_END, () => {
      //             this._switch = !this._switch;
      //             let _nomalSpriteFrame = this.isSwitch && this._switch ? this._pressSpriteFrame : this._nomalSpriteFrame;
      //             if (this._nomalSpriteFrame) {
      //                 this.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = _nomalSpriteFrame;
      //             }
      //         });
      //         this.node.on(cc.Node.EventType.TOUCH_CANCEL, () => {
      //             this._switch = !this._switch;
      //             let _nomalSpriteFrame = this.isSwitch && this._switch ? this._pressSpriteFrame : this._nomalSpriteFrame;
      //             if (this._nomalSpriteFrame) {
      //                 this.node.getChildByName("Background").getComponent(cc.Sprite).spriteFrame = _nomalSpriteFrame;
      //             }
      //         });
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/OpenImgFile.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dd1adjQ1k1GvIFUe1EHk96q", "OpenImgFile", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var OpenImgFile = exports('default', /*#__PURE__*/function () {
        function OpenImgFile() {}
        OpenImgFile.canRepeatUpload = function canRepeatUpload() {
          var inputImgFile = document.getElementById(OpenImgFile.tagName);
          if (!inputImgFile) {
            console.info("上传失败！！！");
            return;
          }
          if (inputImgFile.outerHTML) {
            inputImgFile.outerHTML = inputImgFile.outerHTML;
          }
          if (inputImgFile.nodeValue) {
            inputImgFile.nodeValue = null;
          }
        };
        OpenImgFile.openFile = function openFile() {
          return new Promise(function (resolve, reject) {
            var inputImgFile = document.getElementById(OpenImgFile.tagName);
            if (inputImgFile) {
              console.info("openFile成功！！！！");
              inputImgFile.onchange = function (e) {
                var files = e.target.files;
                var upType = files[0].type;
                if (upType == "image/gif" || upType.indexOf("image") < 0) {
                  console.info("只能上传图片！！！");
                  OpenImgFile.canRepeatUpload();
                  reject(null);
                  return;
                }
                try {
                  if (window.FileReader) {
                    var curFile = files[0];
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL(curFile);
                    if (curFile.size > 1024 * 1024 * 5) {
                      console.info("文件太大，请重选！！！");
                      OpenImgFile.canRepeatUpload();
                      reject(null);
                      return;
                    }
                    fileReader.onload = function (ee) {
                      if (fileReader.readyState == fileReader.DONE) {
                        OpenImgFile.canRepeatUpload();
                        resolve({
                          name: curFile.name,
                          data: ee.target.result
                        });
                      }
                    };
                  } else {
                    console.info("不支持该浏览器！！！");
                    reject(null);
                  }
                } catch (err) {
                  console.info("读取文件失败，再试一次！");
                  OpenImgFile.canRepeatUpload();
                  reject(null);
                  return;
                }
              };
            } else {
              reject(null);
              console.info("openFile失败！！！！");
            }
            if (inputImgFile) {
              inputImgFile.click();
            }
          });
        }
        //    ////////////////////////////////
        //    // uint8array转base64
        ;

        OpenImgFile.uint8arrayToBase64 = function uint8arrayToBase64(value) {
          //        // 必须定义 binary 二进制
          //@ts-ignore
          return Buffer.from(value, "binary").toString("base64");
        };
        OpenImgFile.base64ToUint8array = function base64ToUint8array(value) {
          // @ts-ignore
          value = Buffer.from(value, "base64").toString("binary");
          var len = value.length;
          var outputArray = new Uint8Array(len);
          for (var i = 0; i < len; ++i) {
            outputArray[i] = value.charCodeAt(i);
          }
          return outputArray;
        };
        return OpenImgFile;
      }());
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // const { ccclass, property, menu } = cc._decorator;
      //
      // export default class OpenImgFile {
      //     private static readonly tagName = "OpenImageFile";
      //     private static canRepeatUpload() {
      //         const inputImgFile = document.getElementById(OpenImgFile.tagName);
      //         if (!inputImgFile) {
      //             console.info("上传失败！！！");
      //             return;
      //         }
      //
      //         if (inputImgFile.outerHTML) {
      //             inputImgFile.outerHTML = inputImgFile.outerHTML;
      //         }
      //
      //         if (inputImgFile.nodeValue) {
      //             inputImgFile.nodeValue = null;
      //         }
      //     }
      //
      //     public static openFile() {
      //         return new Promise<{ name: string; data: string }>((resolve, reject) => {
      //             const inputImgFile = document.getElementById(OpenImgFile.tagName);
      //             if (inputImgFile) {
      //                 console.info("openFile成功！！！！");
      //
      //                 inputImgFile.onchange = (e) => {
      //                     const files = (<HTMLInputElement>e.target).files;
      //                     const upType = files[0].type;
      //                     if (upType == "image/gif" || upType.indexOf("image") < 0) {
      //                         console.info("只能上传图片！！！");
      //                         OpenImgFile.canRepeatUpload();
      //
      //                         reject(null);
      //                         return;
      //                     }
      //                     try {
      //                         if (window.FileReader) {
      //                             const curFile = files[0];
      //                             const fileReader = new FileReader();
      //                             fileReader.readAsDataURL(curFile);
      //                             if (curFile.size > 1024 * 1024 * 5) {
      //                                 console.info("文件太大，请重选！！！");
      //                                 OpenImgFile.canRepeatUpload();
      //
      //                                 reject(null);
      //                                 return;
      //                             }
      //                             fileReader.onload = (ee) => {
      //                                 if (fileReader.readyState == fileReader.DONE) {
      //                                     OpenImgFile.canRepeatUpload();
      //                                     resolve({ name: curFile.name, data: <string>ee.target.result });
      //                                 }
      //                             };
      //                         } else {
      //                             console.info("不支持该浏览器！！！");
      //
      //                             reject(null);
      //                         }
      //                     } catch (err) {
      //                         console.info("读取文件失败，再试一次！");
      //                         OpenImgFile.canRepeatUpload();
      //
      //                         reject(null);
      //                         return;
      //                     }
      //                 };
      //             } else {
      //                 reject(null);
      //                 console.info("openFile失败！！！！");
      //             }
      //
      //             if (inputImgFile) {
      //                 inputImgFile.click();
      //             }
      //         });
      //     }
      //
      //     ////////////////////////////////
      //     // uint8array转base64
      //     public static uint8arrayToBase64(value) {
      //         // 必须定义 binary 二进制
      //         //@ts-ignore
      //         return Buffer.from(value, "binary").toString("base64");
      //     }
      //
      //     public static base64ToUint8array(value) {
      //         // @ts-ignore
      //         value = Buffer.from(value, "base64").toString("binary");
      //         let len = value.length;
      //         let outputArray = new Uint8Array(len);
      //         for (let i = 0; i < len; ++i) {
      //             outputArray[i] = value.charCodeAt(i);
      //         }
      //         return outputArray;
      //     }
      // }
      OpenImgFile.tagName = "OpenImageFile";
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PAndroid.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './Log.ts', './ConfigManager.ts', './DataManager.ts', './PlatformBase.ts', './Common.ts', './ViewManager.ts'], function (exports) {
  var _inheritsLoose, cclegacy, resources, Prefab, instantiate, native, i18n, Log, ConfigManager, ServerType, DataManager, UserKey, PlatformBase, Common, ViewManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      resources = module.resources;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      native = module.native;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      Log = module.default;
    }, function (module) {
      ConfigManager = module.default;
      ServerType = module.ServerType;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      PlatformBase = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      ViewManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "25194PcfUpPs5kUu1vQczhA", "PAndroid", undefined);
      var NATIVE_PATH = "com/cocos/game/AppActivity";
      var STREAM_PATH = "com/cocos/game/StreamHelper";
      var PlatformAndroid = exports('default', /*#__PURE__*/function (_PlatformBase) {
        _inheritsLoose(PlatformAndroid, _PlatformBase);
        function PlatformAndroid() {
          return _PlatformBase.apply(this, arguments) || this;
        }
        var _proto = PlatformAndroid.prototype;
        _proto.checkLogin = function checkLogin() {
          console.log("checkLogin android");
          //        // let sign = "7b522126b86ac061a65c21d93b46acff";
          if (ConfigManager.getInstance().serverType == ServerType.LOCAL) {
            var sign = this.callNativeMethod(NATIVE_PATH, "checkPlatform", "()Ljava/lang/String;");
            if (sign) {
              resources.load("prefab/login/login", Prefab, function (err, loginlayer) {
                if (err) {
                  return false;
                }
                var login = instantiate(loginlayer);
                ViewManager.instance.popNodeView(login, true);
              });
            }
          } else {
            var _sign = this.callNativeMethod(NATIVE_PATH, "getToken", "()Ljava/lang/String;");
            if (_sign) {
              var split = _sign.split(",");
              var token = split[0];
              var gameType = split[1];
              if (gameType) {
                DataManager.instance.setUserDataForKey(UserKey.GAMETYPE, gameType);
              }

              //                // token = "e6a43ec0ca0ad8bea2cd7755eb347623";
              //                // DataManager.instance.platform = "PC";
              DataManager.instance.setUserDataForKey(UserKey.OID, "uuid_web");
              DataManager.instance.setUserDataForKey(UserKey.TOKEN, token);
              return true;
            }
          }
          return false;
        };
        _proto.gameExit = function gameExit() {
          this.callNativeMethod(NATIVE_PATH, "gameExit", "()V");
        };
        _proto.gameWebExit = function gameWebExit() {
          if (ConfigManager.getInstance().serverType == ServerType.LOCAL) {
            return;
          }
          this.callNativeMethod(NATIVE_PATH, "gameWebExit", "()V");
        };
        _proto.copyToClipBoard = function copyToClipBoard(str) {
          this.callNativeMethod(NATIVE_PATH, "copy", "(Ljava/lang/String;)V", str);
          Common.showTip(i18n.lang.commonCopy);
        };
        _proto.showWebview = function showWebview(url) {
          this.callNativeMethod(NATIVE_PATH, "showWebview", "(Ljava/lang/String;)V", url);
        };
        _proto.getAppVersion = function getAppVersion() {
          var version = this.callNativeMethod(NATIVE_PATH, "getAppVersion", "()Ljava/lang/String;");
          return version;
        };
        _proto.getApi = function getApi() {
          var api = this.callNativeMethod(NATIVE_PATH, "getApi", "()Ljava/lang/String;");
          return api;
        };
        _proto.openStream = function openStream(url) {
          //        // console.log("openStream ", url);
          //        //android 不支持https , 在此转换
          if (url.indexOf("https") != -1) {
            url = url.replace("https", "http");
          }
          this.callNativeMethod(STREAM_PATH, "openStream", "(Ljava/lang/String;)V", url);
        };
        _proto.closeStream = function closeStream() {
          this.callNativeMethod(STREAM_PATH, "closeStream", "()V");
        };
        _proto.setStreamRect = function setStreamRect(width, height, up) {
          this.callNativeMethod(STREAM_PATH, "setStreamRect", "(III)V", width, height, up);
        };
        _proto.setStreamVisible = function setStreamVisible(vs) {
          this.callNativeMethod(STREAM_PATH, "setVisible", "(I)V", vs);
        };
        _proto.pauseStream = function pauseStream() {
          this.callNativeMethod(STREAM_PATH, "setVisible", "(I)V", 0);
        }
        //    /** 安卓JNI调用 */
        ;

        _proto.callNativeMethod = function callNativeMethod(className, methodName, methodSignature) {
          var _cc$native$reflection;
          console.log("callNativeMethod", methodName);
          for (var _len = arguments.length, parameters = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
            parameters[_key - 3] = arguments[_key];
          }
          return (_cc$native$reflection = native.reflection).callStaticMethod.apply(_cc$native$reflection, [className, methodName, methodSignature].concat(parameters));
        };
        _proto.method = function method(arg, funName) {
          var funcname = funName == null ? "sdkOpt" : funName;
          return native.reflection.callStaticMethod(NATIVE_PATH, funcname, "(Ljava/lang/String;)Ljava/lang/String;", arg);
        };
        _proto.noImplement = function noImplement() {
          Log.warn("\u5E73\u53F0\u65B9\u6848", "该方法未实现ANDROID版");
        };
        return PlatformAndroid;
      }(PlatformBase));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PIOS.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './Log.ts', './ConfigManager.ts', './DataManager.ts', './NetManager.ts', './PlatformBase.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, native, i18n, Log, ConfigManager, DataManager, UserKey, NetManager, PlatformBase, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      native = module.native;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      Log = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      PlatformBase = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "00e26rwRLhGErgNB9JOR7vK", "PIOS", undefined);
      var PlatformIOS = exports('default', /*#__PURE__*/function (_PlatformBase) {
        _inheritsLoose(PlatformIOS, _PlatformBase);
        function PlatformIOS() {
          return _PlatformBase.apply(this, arguments) || this;
        }
        var _proto = PlatformIOS.prototype;
        _proto.checkLogin = function checkLogin() {
          //        // console.log("checkLogin IOS");

          if (ConfigManager.getInstance().isAppTest) {
            //            //isAppTest
            var token = "901b2a2c689731baf85294757a37e3d4";
            DataManager.instance.setUserDataForKey(UserKey.OID, "uuid_web");
            DataManager.instance.setUserDataForKey(UserKey.SIGN, token);
            NetManager.instance.connect();
          } else {
            var sign = this.callNativeMethod("getToken:", "");
            if (sign) {
              var split = sign.split(",");
              var _token = split[0];
              var gameType = split[1];
              if (gameType) {
                DataManager.instance.setUserDataForKey(UserKey.GAMETYPE, gameType);
              }
              DataManager.instance.setUserDataForKey(UserKey.OID, "uuid_web");
              DataManager.instance.setUserDataForKey(UserKey.TOKEN, _token);
              return true;
            }
          }
          return false;
        };
        _proto.gameExit = function gameExit() {
          this.callNativeMethod("gameExit:", "");
        };
        _proto.copyToClipBoard = function copyToClipBoard(str) {
          this.callNativeMethod("copy:", str);
          Common.showTip(i18n.lang.commonCopy);
        };
        _proto.getDeviceID = function getDeviceID() {
          var param = "act,getUUID";
          return this.method(param, "sdkOpt");
        };
        _proto.share = function share(str) {
          var param = "act,shareText;url," + str;
          this.method(param, "sdkOpt");
        };
        _proto.getApi = function getApi() {
          var api = this.callNativeMethod("getApi:", "");
          return api;
        }
        //    ////////////////////////////////私有函数////////////////////////////////
        ;

        _proto.callNativeMethod = function callNativeMethod(methodName, methodSignature) {
          if (methodSignature === void 0) {
            methodSignature = "";
          }
          return native.reflection.callStaticMethod("NativeFunc", methodName, methodSignature);
        }
        //    //获取系统相关内容
        ;

        _proto.callSystemMethod = function callSystemMethod(methodName, methodSignature) {
          if (methodSignature === void 0) {
            methodSignature = "";
          }
          return native.reflection.callStaticMethod("SystemFunc", methodName, methodSignature);
        };
        _proto.method = function method(arg, funName) {
          return native.reflection.callStaticMethod("AppController", funName + ":", arg);
        };
        _proto.noImplement = function noImplement() {
          Log.warn("\u5E73\u53F0\u65B9\u6848", "该方法未实现IOS版");
        };
        return PlatformIOS;
      }(PlatformBase));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlatformBase.ts", ['cc'], function (exports) {
  var cclegacy, sys;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f4efejSeAhGBowQUVTGq0IB", "PlatformBase", undefined);
      var PlatformBase = exports('default', /*#__PURE__*/function () {
        function PlatformBase() {}
        var _proto = PlatformBase.prototype;
        /**自动登录检测 */
        _proto.checkLogin = function checkLogin() {
          return this.noImplement();
        };
        _proto.gameExit = function gameExit() {
          this.noImplement();
        }

        /**复制功能 */;
        _proto.copyToClipBoard = function copyToClipBoard(str) {
          this.noImplement();
        }

        /**获取版本号 */;
        _proto.getAppVersion = function getAppVersion() {
          return this.noImplement();
        }

        /**获取设备id */;
        _proto.getDeviceID = function getDeviceID() {
          this.noImplement();
        }

        /**分享 */;
        _proto.share = function share(str) {
          this.noImplement();
        }

        /**外部链接跳转 */;
        _proto.openUrl = function openUrl(url) {
          sys.openURL(url);
        }

        /**获取原生相关配置 */;
        _proto.getApi = function getApi() {
          return this.noImplement();
        };
        _proto.sendGoogle = function sendGoogle(action, data) {
          return this.noImplement();
        };
        _proto.showWebview = function showWebview(url) {
          return this.noImplement();
        }

        //打开直播
        ;

        _proto.openStream = function openStream(url) {
          return this.noImplement();
        }

        //关闭直播
        ;

        _proto.closeStream = function closeStream() {
          return this.noImplement();
        };
        _proto.setStreamRect = function setStreamRect(width, height, up) {
          return this.noImplement();
        };
        _proto.setStreamVisible = function setStreamVisible(vs) {
          return this.noImplement();
        };
        _proto.pauseStream = function pauseStream() {
          return this.noImplement();
        };
        _proto.freshVideo = function freshVideo() {
          return this.noImplement();
        };
        _proto.gameWebExit = function gameWebExit() {
          return this.noImplement();
        }

        /**未实现提示 */;
        return PlatformBase;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlatformMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseEvent.ts', './ConfigManager.ts', './PAndroid.ts', './PIOS.ts', './PWindows.ts', './WEB.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, sys, BaseEvent, ConfigManager, PlatformAndroid, PlatformIOS, PlatformWindows, PlatformWeb;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      BaseEvent = module.BaseEvent;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      PlatformAndroid = module.default;
    }, function (module) {
      PlatformIOS = module.default;
    }, function (module) {
      PlatformWindows = module.default;
    }, function (module) {
      PlatformWeb = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8b5ddPR/dBAi5MyKQqubgNL", "PlatformMgr", undefined);
      var PlatformEvent = exports('PlatformEvent', /*#__PURE__*/function (PlatformEvent) {
        PlatformEvent["LOAD_TOKEN"] = "loadToken";
        return PlatformEvent;
      }({}));
      var PlatformType = exports('PlatformType', /*#__PURE__*/function (PlatformType) {
        PlatformType["DEFAULT"] = "default";
        PlatformType["IOS"] = "ios";
        PlatformType["ANDROID"] = "android";
        PlatformType["WEB"] = "web";
        PlatformType["WINDOW"] = "window";
        return PlatformType;
      }({}));
      var Platform = /*#__PURE__*/function (_BaseEvent) {
        _inheritsLoose(Platform, _BaseEvent);
        function Platform() {
          var _this;
          _this = _BaseEvent.call(this) || this;
          _this._plat = void 0;
          _this.type = PlatformType.DEFAULT;
          /**原生token锁 */
          _this.tokenLock = true;
          if (!_this._plat) {
            if (sys.isNative) {
              if (sys.os === sys.OS.ANDROID) {
                _this._plat = new PlatformAndroid();
                _this.type = PlatformType.ANDROID;
                // ConfigManager.instance.initPem();
              } else if (sys.os === sys.OS.IOS) {
                _this._plat = new PlatformIOS();
                _this.type = PlatformType.ANDROID;
              } else if (sys.os === sys.OS.WINDOWS) {
                _this._plat = new PlatformWindows();
                _this.type = PlatformType.WINDOW;
              }
            } else {
              _this._plat = new PlatformWeb();
              _this.type = PlatformType.WEB;
            }
          }
          return _this;
        }
        var _proto = Platform.prototype;
        //重置服务器连接地址
        _proto.resetServer = function resetServer(serverType) {
          ConfigManager.getInstance().serverType = serverType;
          ConfigManager.getInstance().initServer();
        };
        _proto.setHttpAdr = function setHttpAdr(webHost) {
          ConfigManager.getInstance().setHttpAdr(webHost, "");
        };
        _proto.setSocketAdr = function setSocketAdr(wssHost) {
          ConfigManager.getInstance().setSocketAdr(wssHost);
          gts.Debug.enableLog = false;
        };
        _createClass(Platform, [{
          key: "p",
          get: function get() {
            return this._plat;
          }
        }]);
        return Platform;
      }(BaseEvent);
      var PlatformMgr = exports('default', new Platform());

      //全局是为了暴露给原生调用
      window["PlatformMgr"] = PlatformMgr;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProxyMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseEvent.ts', './Log.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _assertThisInitialized, cclegacy, BaseEvent, Log;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseEvent = module.BaseEvent;
    }, function (module) {
      Log = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ca1f8a3m5JGUrG5957e+ZSW", "ProxyMgr", undefined);
      var YDProxy = /*#__PURE__*/function (_BaseEvent) {
        _inheritsLoose(YDProxy, _BaseEvent);
        function YDProxy() {
          var _this;
          _this = _BaseEvent.call(this) || this;
          _this._list = void 0;
          _this._list = new Map();
          return _this;
        }
        var _proto = YDProxy.prototype;
        _proto.add = function add(moduleName, base) {
          this._list.set(moduleName, base);
        };
        _proto.get = function get(moduleName) {
          return this._list.get(moduleName);
        }
        // public command(moduleName: string, funcName: string, ...args) {
        //     let base = this._list.get(moduleName);
        //     if (!base) {
        //         Log.error("Proxy错误", `未找到${moduleName}模块`);
        //         return;
        //     }
        //     if (!(base[funcName] && typeof base[funcName] === "function")) {
        //         Log.error("Proxy错误", `funcName 类型错误`);
        //         return;
        //     }
        //     base[funcName](...args);
        // }
        ;

        _proto.update = function update(moduleName, funcName) {
          var base = this._list.get(moduleName);
          if (!base) {
            Log.error("Proxy错误", "\u672A\u627E\u5230" + moduleName + "\u6A21\u5757");
            return;
          }
          for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
          }
          base.update.apply(base, [funcName].concat(args));
        };
        _proto.close = function close(obj) {
          var modules = this._list.values();
          var i = 0,
            size = this._list.size;
          while (i < size) {
            var base = modules.next().value;
            base.targetOff(obj);
            base.remove(obj);
            i++;
          }
        };
        return YDProxy;
      }(BaseEvent);
      var ProxyMgr = exports('default', new YDProxy());
      var ProxyBase = exports('ProxyBase', /*#__PURE__*/function (_BaseEvent2) {
        _inheritsLoose(ProxyBase, _BaseEvent2);
        function ProxyBase(name) {
          var _this2;
          _this2 = _BaseEvent2.call(this) || this;
          _this2._name = void 0;
          _this2._bindList = [];
          _this2._name = name;
          ProxyMgr.add(_this2._name, _assertThisInitialized(_this2));
          _this2.init();
          return _this2;
        }
        var _proto2 = ProxyBase.prototype;
        _proto2.init = function init() {}
        //    /**绑定代理脚本 */
        ;

        _proto2.bind = function bind(obj) {
          for (var _iterator = _createForOfIteratorHelperLoose(this._bindList), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
            if (i == obj) {
              return;
            }
          }
          this._bindList.push(obj);
        };
        _proto2.remove = function remove(obj) {
          for (var i = 0; i < this._bindList.length; i++) {
            if (this._bindList[i] === obj) {
              this._bindList.splice(i, 1);
              break;
            }
          }
        };
        _proto2.update = function update(funcName) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._bindList), _step2; !(_step2 = _iterator2()).done;) {
            var obj = _step2.value;
            if (!(obj[funcName] && typeof obj[funcName] === "function")) {
              Log.error("Proxy错误", "funcName \u7C7B\u578B\u9519\u8BEF");
              return;
            }
            obj[funcName].apply(obj, args);
          }
        }
        //    /**获取脚本代理 */
        ;

        _proto2.getDelegateList = function getDelegateList() {
          return this._bindList;
        };
        return ProxyBase;
      }(BaseEvent));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/pt.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e859aekWFdOC7YkqlUbJ/Va", "pt", undefined);
      /*
       * @Author: huangww
       * @Date: 2021-09-16 16:34:18
       * @LastEditTime: 2021-11-17 15:03:10
       */
      var pt = exports('pt', {
        lang: "简体中文",
        test: "测试",
        10001: "Saldo insuficiente, por favor, recarregue a tempo",
        //余额不足，请及时充值/
        10002: "Não pode apostar em ambos os lados",
        ///不能下注两边/
        10003: "Escolha as cartas para jogar",
        ///选牌打/
        10004: "Apostar com sucesso",
        ///下注成功/
        10005: "A bandeira de aposta terminou!",
        //  /下注旗已结束/
        10007: "Necessário para preencher",
        ///必要填写/
        10008: "Aposta mínima 1K",
        ///下注最低1K/
        10009: "Por favor aguarde",
        ////// /请稍等/
        10010: "Jogo em andamento",
        ///游戏进行中/
        10011: "Por favor, selecione chips",
        // /请选择筹码/
        10012: "O limite não pode ser ajustado durante o jogo",
        // /游戏进行中不能调限额/
        10013: "Escolher cartas para jogar",
        ///要选牌打
        10014: "Não conformidade com o próximo cartão",
        ///下牌不合规/
        10015: "Não cumprimento de",
        /////不合规/
        10016: "Não conformidade com cartões de saída",
        // /出牌不合规/
        10017: "Replicar com sucesso",
        ///复制成功/
        10018: "Senhas antigas não podem ficar em branco",
        ///旧密码不能空白/
        10019: "Nova senha não pode ser em branco",
        ///新密码不能空白/
        10020: "Por favor, confirme sua senha",
        ///请确认您的密码/
        10021: "As senhas não são consistentes",
        ///密码不一致/
        10022: "Digite o número de celular",
        ///请输入手机号码/
        10023: "Enviado com sucesso",
        ///发送成功/
        10024: "Digite o número de celular",
        // /  请输入手机号码/
        10025: "O código de confirmação não pode estar vazio",
        // /确认码不能为空/
        10026: "Ativação bem sucedida",
        ///激活成功/
        10027: "Senha trocada com sucesso",
        // /换密码成功/
        10028: "Conversão com sucesso",
        // /转换成功/
        10029: "O apelido não pode estar em branco",
        // /昵称不能空白/
        10030: "Definido com sucesso",
        ///设置成功/
        10031: "Conexão de rede falhada",
        // /网络连接不成功/
        10032: "A conta não pode estar em branco",
        // /账号不能空白/
        10033: "A senha não pode estar em branco",
        // /密码不能空白/
        10034: "As senhas não são consistentes",
        ///密码不一致/
        10035: "Por favor, confirme sua senha",
        // /请确认您的密码/
        10036: "Configurar o número da conta bancária com sucesso",
        //  /设置银行账号成功/
        10037: "Comando de recarga enviado com sucesso",
        //   /充值命令提交成功/
        10038: "Recarregado com sucesso",
        //  /充值成功/
        10039: "Valor preenchido incorretamente",
        //  /填写金额错误/
        10040: "Por favor, selecione o montante de recarga",
        //  /请选择充值金额/
        10041: "Por favor preencha o cartão SERI",
        //  /请填写话费卡SERI/
        10042: "Por favor, preencha o número do cartão",
        ////    /请填写话费卡号码/
        10043: "Por favor, insira o número de bônus resgatado",
        //   /请输入兑换奖金号码/
        10044: "Por favor aguarde",
        //  /请稍等/
        10045: "Por favor, insira o valor correto",
        // /请输入正确金额/

        10046: "Os amigos estão a preparar-se. Queres começar?",
        // /玩友还在准备您想开始/
        10047: "Foi atualizado com sucesso. Reinicie o jogo",
        //  /已更新成功，请重启游戏/
        10048: "A conexão ao servidor falhou, tente novamente",
        ///服务器连接失败,请重试
        10049: "Falha na conexão com o servidor, usando um endereço alternativo",
        // /服务器连接失败,使用备用地址
        10050: "A rede está ocupada. Tente novamente.",
        ///网络在忙请重试/
        10051: "Tem a certeza que quer sair?",
        ///您确定要登出/
        10052: "Ganhos não podem ser convertidos",
        ///赢利不能转换/
        10053: "Você está logado em outro dispositivo\nTente fazer login novamente",
        // /您已在其他设备登录/---顶号
        10054: "O pedido de retirada foi processado com sucesso pelo sistema",
        //  /申请取款已成功，等系统处理/
        10055: "Ordem de depósito enviada com sucesso",
        //  /存款命令提交成功/
        10056: "Primeira recarga",
        //首次充值
        10057: "Por favor selecione um tipo",
        //请选择类型
        10058: "Para confirmar, faça login novamente, para cancelar, saia",
        // /您已在其他设备登录!\n确认则重新登录，取消则退出/
        10059: "Sua conta de jogo não está ativa\nTente fazer login novamente",
        //账号失效
        10060: "Salas VIP onde a aposta total mínima deve ser superior a 200.000",
        //
        10061: "Limite de aposta de zona única 5 bilhões",
        //
        10062: "Pontos para apostar até 5 zonas",
        //

        10063: "Salas VIP onde a aposta total m\xEDnima deve ser maior que {0}",
        //
        10064: "Limite de aposta de zona \xFAnica {0}",
        //
        activeBank: "进入银行",
        dxgameTip: "退款 ",
        KenoGameTip: "HOÀN TIỀN CÂN CỬA ",
        commonCopy: "复制成功",
        recordPage: "页面",
        betedExitTip: "下注不能退出房间",
        //#region fishGame
        strLoadingTip: ["还有拉霸游戏...", "龙王驾临.百倍宝箱任您赢！",
        //龙王驾临.百倍宝箱任您赢！
        "拍摄了一个幸运袋来探索海洋的宝藏!", "散弹炮为你提供100发的免费子弹!", "Sjas.Cua的浓度对同时击倒鱼群很特别!"],
        LoadingType: {
          LoadRes: "资源加载中...",
          EnterRoom: "房间进入中..."
        },
        lsGame: {
          Commission: "奖金抽水:  "
        },
        fishTip: {
          gold: "余额不足，请及时充值!",
          //金币不足提示
          noAway: "T比赛正在进行中。 当子弹从池中消失时退出游戏.",
          //不能离开
          fdTip: "\u70B9\u51FB\u4EFB\u610F1\u4E2A\u798F\u888B\u83B7\u5F97\u5956\u52B1\uFF0C<color=#E9F902>{0}</color> \u79D2\u540E\u81EA\u52A8\u9886\u53D6" //福袋提示
        },

        chatErr1: "内容无效",
        chatErr2: "内容中数字不能超过6位",
        chatErr3: "余额不足，不能发送信息",
        allIn: "下注所有",
        chooseGold: "选择下注金额",
        newStart: "新的一局",
        dxgameTimeTip: "Trả tiền cân cửa",
        loadGameErr: "游戏加载错误",
        notOpenTip: "游戏未开放，敬请期待!",
        disableBet: "当前不能下注",
        blackListTip: "该游戏被限制，请尝试其他游戏",
        disableConnect: "Falta de conexão com o servidor. Verifique a rede",
        checkVersion: "检测版本",
        downloading: "downloading...",
        moveHandTip: "移动盘子开奖!",
        kickOut: "确定要踢出房间吗?",
        kickOutTip: "您已被房主请出房间",
        diyTip: "已经存在相同筹码",
        diyFullTip: "最多添加${}个筹码",
        diyTipRemove: "是否移除该筹码?",
        helpPumping: "${} 奖金抽水为 ${}% ",
        devTip: "功能开发中,敬请期待!",
        activityRecvTip: "领取成功",
        activityRecvErr: "活动状态异常",
        netChangeTip: "线路切换成功，请耐心等待",
        chipTip: "请选择筹码",
        chipMainTip: "请先下注主区",
        redPackage: {
          wait: "未开始",
          start: "进行中",
          totalDay: "${} 用时",
          totalReward: "总奖励 đ ${}",
          hasReceive: "已领取",
          noReceiveTip: "未达到领取条件",
          noStart: "活动未开始"
        },
        activityErrCode: {
          30021: "重复领取",
          30027: "您访问的IP地址，参与活动的用户数量超过活动限制"
        },
        ipErrortip: "您访问的IP地址，参与活动的用户数量超过活动限制",
        phom: {
          all: "全部",
          four: "四人桌",
          si: "私人桌",
          man: "四人",
          goldNotEnough: "余额不足,自动退出房间",
          dian: "点"
        },
        lieng: {
          colseBuyIn: "游戏已开始，无法选择带入金额"
        },
        dice: {
          result: {
            0: "小",
            1: "大",
            2: "豹"
          }
        },
        thirdteen: {
          cardType: {
            0: "乌龙",
            1: "同花十三水",
            2: "十三水",
            3: "五对三条",
            4: "三同花",
            5: "三顺子",
            7: "六对半",
            8: "凑一色"
          }
        },
        lhvip: {
          type: {
            1: "龙",
            2: "虎",
            3: "平",
            4: "同花平"
          }
        },
        //#endregion

        //网络错误代码 提示
        errTip: {
          //------------  系统错误  -----------
          302: "Você está logado em outro dispositivo",
          //AccountChanged
          401: "Pedido ilegal, acesso proibido",
          //Forbidden
          402: "Um pedido ilegal",
          //Illegal
          500: "O erro interno",
          //ServerError
          501: "O servidor está ocupado, tente novamente mais tarde.",
          //ServerBusy

          10001: "Faltando o parâmetro key",
          //ErrParams
          10002: "- erro desconhecido-FileOverMax",
          //FileOverMax
          10003: "Parâmetros de ação incorretos",
          //ActionNotFound
          10004: "Método de pagamento erro, entre em contato com o serviço ao cliente",
          //PayMethodIdErr
          10005: "A quantidade de feijão não está dentro dos limites permitidos",
          //DoudouAmountErr
          10006: "Contacte o serviço ao cliente",
          //ConnectCustomerService
          10007: "Esta ação não é permitida para esta conta",
          //AccountNotAllow

          //------------- 一般功能错误  ------------
          20001: "A conta já existe, faça login diretamente",
          //AccountExisted
          20002: "Conta não existe",
          //AccountNotExist
          20003: "Conta ou senha incorreta",
          //PasswordErr
          20004: "Parâmetro tamanho errado",
          //PageSizeErr
          20005: "SMS enviados com demasiada frequência. Por favor, tente novamente em alguns minutos.",
          //SmsSentTooFast
          20006: "Código de verificação incorreto, por favor insira o código de verificação correto",
          //SmsCodeErr
          20007: "O número do telefone já está ligado",
          //PhoneAlreadyBind
          20008: "Formato incorreto do número de celular",
          //PhoneFormatErr
          20009: "--erro desconhecido--useralreadybind",
          //UserAlreadyBind
          20010: "Ainda tens de apostar no beanie.",
          //BetNotEnough
          20011: "Doudou fora dos limites permitidos",
          //AmountNotAllow
          20012: "-- erro desconhecido--DataNotFind",
          //DataNotFind
          20013: "- erro desconhecido-WalletPayErr",
          //WalletPayErr
          20014: "-- erro desconhecido--ChatGroupNotFind",
          //ChatGroupNotFind
          20015: "-- erro desconhecido--NotAvailableSeat",
          //NotAvailableSeat
          20016: "Este jogo é restrito, tente outro jogo",
          //GameDisable
          20017: "Este jogo é restrito, tente outro jogo",
          //UserBlacklist

          30001: "As apostas neste jogo foram descontinuadas. Aguarde até o próximo jogo começar",
          //GameStopBet
          30002: "Você não pode pressionar ambos os lados simultaneamente",
          //dxGameBetErr
          30003: "Seu saldo é insuficiente, por favor, recarregue primeiro",
          //BalanceNotEnough
          30004: "A aposta não pode sair da sala",
          //XiaZhuCantQuit
          30005: "Pelo menos 5 caracteres, não números puros, os símbolos só podem ser em inglês e números",
          //NameFormatError
          30006: "Não pode conter espaços, 6-16 caracteres",
          //PwdFormatError

          30007: "-- erro desconhecido--",
          //

          30008: "Atualmente não é possível apostar",
          //CurCanXiaZhuError
          30009: "Não no quarto",
          //NotInRoomError
          30010: "Não é possível criar uma sala",
          //CantCreateTableError
          30011: "A senha original está incorreta",
          //OldPwdError
          30012: "Duas senhas inconsistentes",
          //PwdNotSameError
          30013: "O número de trocas de feijões atingiu o limite",
          //DouDouCountOverLimit
          30014: "Falha na recolha",
          //ActivityReceiveError
          30015: "O intervalo de tempo de envio é muito curto",
          //TimeIntervalError
          30016: "São necessários 20.000 doubs para conversar.",
          //ChatYxbLimitError
          30017: "Saldo insuficiente da comissão",
          //AgentBalanceNotEnough
          30018: "Código de presente incorreto, insira o código de troca correto",
          //GiftCodeErr
          30019: "O código de presente já está em uso",
          //GiftCodeUsed
          30020: "O apelido já existe",
          //NickNameExistError
          30021: "Você já está vinculado",
          //AlreadyBindBankCard
          30022: "Por favor, ligue a plataforma doudou primeiro",
          //NotBindBtCard
          30023: "A plataforma doudou foi vinculada",
          //BtCardAlreadyBind
          30024: "Por favor, insira a plataforma legal doudou",
          //DouDouNumNotAllow
          30025: "O envio falhou, você ainda tem pedidos de beanie pendentes",
          //UncompleteOrder
          30026: "Cartas jogadas inválidas",
          //InvalidPutPoker
          30027: "Um phom inválido",
          //InvalidPhomPoker
          30028: "Cartas inválidas dadas",
          //InvalidGivePoker
          30029: "Não é possível sair da sala no jogo grátis",
          //FreeGameCantQuit
          30030: "Atualmente não pode roubar a casa",
          //CurGrabDealerError
          30031: "O pedido só pode ser enviado uma vez em cinco minutos",
          //Order5MinuteOnce
          30032: "Contas de jogo acompanhante não permitem o acesso ao jogo",
          //PlayAccountNotAllow
          30033: "Plataforma de ligação doudou não existe",
          //BindBankNotExist
          30034: "Plataforma doudou usado ou preenchido no lugar errado",
          //NapTuDongError
          30035: "Este método de depósito doudou em manutenção",
          //ChargeProtectError
          30036: "Precisa recarregar o doudou primeiro",
          //ActivityNeedChargeError
          30037: "O formato da plataforma doudou não é permitido",
          //DouDouAccountNotAllow
          30038: "A mesma plataforma doudou",
          //DouDouSameBt

          30039: "Beanie quantidade mínima $1",
          //DouDouMinAmount
          30040: "Tipos de loteria desconhecidos",
          //InvalidLotteryCode
          30041: "Número de período errado",
          //LotteryNumberErr
          30042: "Jogando errado com",
          //LotteryPlayErr
          30043: "Nota erro de código único",
          //BetCodeErr
          30044: "Limite de apostas",
          //BetLimit
          30045: "Código de quarto incorreto",
          //

          30101: "Falha ao criar um usuário",
          //ApiCreateUserErr
          30102: "Erro com API tripartida",
          //ApiErr
          30103: "Falha no login tripartido",
          //ApiLoginErr

          30200: "Número de pessoas no quarto",
          //RoomPlayerNumLimit
          30201: "Falta de pontos",
          //PointsNotEnough
          30202: "Por favor desbloqueie primeiro",
          //PleaseUnlockSafe
          30203: "Por favor ative o cofre primeiro",
          //PleaseActivationSafe
          30204: "A detecção do sistema, porque você freqüentemente registra uma nova conta, agora você faz o processamento de controle de risco. O registro da conta é proibido. Em caso de dúvida, entre em contato com o atendimento ao cliente",
          //RegisterLimit
          30205: "Fim do jogo, saída automática da sala",
          //QuitRoomAfterOver
          30206: "Cancelar saída quarto",
          //QuitRoomCancel
          30207: "Você foi convidado para sair do quarto pelo proprietário. Você será automaticamente retirado quando o jogo terminar",
          //kick out tip

          30210: "",
          30211: "Visitantes, apostas não são suportadas no momento"
        },
        gameName: {
          yxx: "鱼虾蟹",
          //鱼虾蟹
          sd: "色碟",
          //色碟
          guessBigSmall: "猜上下",
          //牌猜大小
          roshambo: "石头剪刀布",
          //石头剪刀布
          mini_poker: "迷你扑克",
          //迷你
          dx: "猜大小",
          //色子 大小
          slotLs: "龙神",
          //龙神
          slotCs: "财神到",
          //财神到
          bjl: "百家乐",
          //百家乐
          cardLhd: "龙虎斗",
          //龙虎斗
          fish: "捕鱼",
          //捕鱼
          cardLieng: "三公",
          lieng: "三公",
          cardPhom: "塔拉",
          bigSmallMD5: "大小MD5",
          dx3Min: "大小三分钟",
          slotFruit: "水果机",
          slotXy: "西游",
          dice: "骰宝",
          f35: "F35",
          slotGemstone: "宝石商人",
          slotMj: "麻将",
          slotVigorous: "劲爆777",
          slotSpringFestival: "大过年",
          cardLhd2: "龙虎斗2",
          slotBowl: "聚宝盆",
          slotCat: "招财猫",
          slotPoker: "超级王牌",
          slotBoxing: "拳王",
          slotGod: "赢财神",
          cardSss: "十三水",
          dxLive: "真人大小",
          yxxLive: "真人鱼虾蟹",
          sdLive: "真人色蝶",
          slotGoldenCity: "夺宝黄金城",
          slotFortuneRabbit: "金钱兔",
          slotFortuneTiger: "虎虎生财",
          slotFortuneMouse: "鼠鼠福福",
          slotFortuneOx: "十倍金牛",
          slotPiggyGold: "金猪招财",
          slotGaneshaGold: "福运象财神",
          slotGoldenEmpire: "黄金帝国",
          slotQueenOfBounty: "赏金女王",
          slotCaptainBounty: "海盗船长",
          slotNightCity: "夜上海",
          dxVip: "大小VIP",
          zpVip: "转盘",
          sdVip: "色蝶VIP",
          slotGoldenBook: "黄金之书",
          slotAlibaba: "阿里巴巴",
          keno: "基诺",
          blackJack: "21点",
          plinko: "飞碟",
          slotApotheosis: "封神",
          slotWildBountyShowdown: "赏金大对决",
          slotJLCS: "吉利财神",
          slotWinWinFishPrawnCrab: "赢鱼虾蟹",
          slotWildBandito: "亡灵大道",
          slotCocktailNights: "夜醉佳人",
          slotEmojiRiches: "表情",
          slotGemstone2: "宝石商人2",
          slotMahjongWays2: "麻将胡了2",
          racing: "极速赛车",
          slotKylin: "麒麟送宝",
          slotDreamsofMacau: "澳门豪梦",
          cardLhd3d: "龙虎斗VIP",
          slotChargeBuffalo: "牛牛冲锋",
          slotWildCoaster: "过山车",
          bjl3d: "百家乐 VIP" //百家乐VIP
        },

        gameType: {
          all: "ALL GAMES",
          pai: "GAME BÀI",
          slot: "SLOTS",
          scenes: "GẦN NHẤT"
        },
        gameResult: {
          //大小
          Tai: "大",
          Xiu: "小",
          //色碟
          Chan: "双",
          Le: "单",
          //骰宝
          Bao: "豹子",
          //百家乐
          Player: "闲",
          Tie: "和",
          Banker: "庄",
          PlayerPair: "闲双",
          BankerPair: "庄双",
          //龙虎
          Long: "龙",
          Ho: "虎",
          Hoa: "和",
          red: "红",
          //红
          white: "白",
          //白

          //鱼虾蟹
          xie: "蟹",
          lu: "鹿",
          xia: "虾",
          yu: "鱼",
          ji: "鸡",
          huLu: "葫芦",
          //keno
          jin: "金",
          mu: "木",
          shui: "水",
          huo: "火",
          tu: "土"
        },
        //pg
        "CaptainsBountyPayout": {
          "PayoutMainTitle": "Valores de pagamento dos símbolos",
          "PayoutWild": "Símbolo Wild",
          "PayoutScatter": "Símbolo Scatter",
          "Payout3_Title": "Linhas de aposta vencedoras"
        },
        "CaptainsBountyPayoutAndRulesShared": {
          "Rule1_14_Payout4_3": "Depois de o pagamento de cada ronda ser feito, todos os símbolos vencedores explodirão permitindo que os símbolos por cima deles caiam em cascata para uma nova ronda.",
          "Rule1_15_Payout4_4": "Quaisquer combinações vencedoras serão contabilizadas em todas as rondas até não ser possível contabilizar mais combinações vencedoras.",
          "Rule1_17_Payout1_1": "O símbolo Wild substitui todos os símbolos, exceto símbolos Scatter.",
          "Rule1_18_Payout1_2": "O símbolo Wild aparece apenas nos cilindros 2, 3 e 4.",
          "Rule2_Payout2": "Multiplicador",
          "Rule2_1_Payout2_1": "Durante quaisquer rodadas, todos os prémios serão multiplicados pelo multiplicador mostrado por cima dos cilindros, a começar no x1 na primeira ronda.",
          "Rule2_2_Payout2_2": "Qualquer prémio na primeira ronda aumentará o multiplicador da segunda ronda para x2.",
          "Rule2_3_Payout2_3": "Qualquer prémio na segunda ronda aumentará o multiplicador da terceira ronda para x3.",
          "Rule2_4_Payout2_4": "Qualquer prémio na terceira ronda aumentará o multiplicador da quarta ronda (e posteriores) para x5.",
          "Rule3_Payout_3": "Funcionalidade Rodadas Grátis",
          "Rule3_1_Payout3_1": "3 símbolos Scatter em qualquer posição ativarão a Funcionalidade Rodadas Grátis com 10 rodadas grátis. Cada símbolo Scatter adicional ativará mais 5 rodadas grátis.",
          "Rule3_2_Payout3_2": "Durante a Funcionalidade Rodadas Grátis, os multiplicadores por cima dos cilindros serão aumentados para x3, x6, x9 e x15, respetivamente.",
          "Rule3_3_Payout3_3": "As rodadas grátis podem ser reativadas",
          "Rule4_Payout_4": "Ganho máximo",
          "Rule4_1_Payout4_1": "O montante de ganho máximo corresponde a %{30000}x o montante da aposta.",
          "Rule4_2_Payout4_2": "Se o total de ganhos no jogo principal ou na Funcionalidade Rodadas Grátis atingir %{30000}x o montante da aposta, a rodada termina."
        },
        "SlotRulesBetLineRelated": {
          "WinDetailBreakdown": "O ganho de linha de aposta em dinheiro é igual ao valor apresentado na \"Tabela de pagamentos\", multiplicado pela aposta e pelo nível de aposta.",
          "HighestWinIsPaid": "Apenas é pago o maior ganho por linha de aposta.",
          "WinFromLeftmost": "Ganha com as linhas de aposta, se os símbolos vencedores se sucederem a partir do cilindro mais à esquerda.",
          "SimultanuousWin": "São adicionados os ganhos simultâneos em diferentes linhas de aposta.",
          "SpinAction": "Toque para começar a rodar com as definições atuais de Linhas de aposta, Valor da aposta e Nível de aposta.",
          "PressSpaceAction": "Prima a tecla <Espaço> para começar a rodar com as definições atuais de Linhas de aposta, Valor da aposta e Nível de aposta. "
        },
        "CommonRulesShared": {
          "InGameCurrency": "A moeda do jogo é %{configuredValue}.",
          "CashWallet": "A \"Carteira de dinheiro\" apresenta o dinheiro disponível para apostar.",
          "WinShownInCash": "Todos os ganhos são apresentados em dinheiro.",
          "BackAction": "Toque para sair do jogo e voltar à página anterior.",
          "GameLobbyAction": "Prima para sair do jogo e ir para o Lobby do Jogo PG.",
          "GameHistoryDescription": "Mostra os detalhes dos jogos anteriores. Desliza até ao fim da página para carregar mais registos.",
          "GameHistoryActionWithIcon": "Toque em<img src='game-rules-sprite game-rules-ic_nav_calender'/>para selecionar as datas dos jogos a apresentar no Histórico.",
          "ReturnToPlayerDescription": "O retorno teórico para o jogador (RTP) para este jogo é de %{rtpValue}. Este RTP representa a percentagem estatística a longo prazo do valor total das apostas no jogo que é paga como ganhos ao longo do tempo. O valor do RTP é calculado dividindo o total dos ganhos pelo valor total das apostas com base numa simulação de várias rondas de jogo.",
          "AdditionInfoMalfunctionDescription": "O mau funcionamento anula todos os pagamentos e jogadas.",
          "AdditionInfoInactiveGameSessions": "O jogo regressará automaticamente à sua fase inicial após estar inativo durante: %{dayCount} dias. O progresso e o estado de quaisquer jogos de recolha, jogos grátis não acabados, jogos extra não acabados, etc. já não será mantido.",
          "AdditionInfoInactiveGameSessionsHour": "O jogo regressará automaticamente à sua fase inicial após estar inativo durante: %{hourCount} horas. O progresso e o estado de quaisquer jogos de recolha, jogos grátis não acabados, jogos extra não acabados, etc. já não será mantido.",
          "AdditionInfoDisputeHistoryDescription": "Em caso de disputas sobre os resultados do jogo, todos os resultados do jogo mostrados na página do histórico do jogo são absolutos e finais.",
          "AdditionInfoInactiveGameSessionsAlternate": "No caso de uma ronda de jogo ser interrompida devido a desconexão de rede, problemas técnicos ou se o jogador sair intencionalmente, a ronda de jogo continuará válida e não será perdida. A ronda incompleta será retomada a partir do ponto de interrupção durante a sessão de jogo seguinte do jogador."
        },
        "CaptainsBountySymbolPopOut": {
          "ScatterDesription": "3 ou mais símbolos Scatter em qualquer posição nos cilindros ativam a Funcionalidade de Rodadas Grátis.",
          "WildDescription": "O símbolo Wild substitui todos os símbolos, exceto símbolos Scatter."
        },
        "History": {
          "HistoryMainPageTime": "Tempo",
          "HistoryMainSpinTypeTime": "Transação",
          "HistoryMainPagePayout": "Aposta",
          "HistoryMainPageWin": "Lucro",
          "HistoryRecordTransaction": "Transação",
          "HistoryRecordPayout": "Aposta",
          "HistoryRecordWin": "Lucro",
          "HistoryRecordTotalWin": "Ganho",
          "HistoryRecordBalance": "Saldo",
          "HistoryCalendarDateRange": "Selecionar intervalo de datas",
          "HistoryCalenderToday": "Hoje",
          "HistoryCalenderWeek": "Últimos 7 dias",
          "HistoryCalenderMonth": "Últimos 30 dias",
          "HistoryCalenderCustom": "Personalizado",
          "HistoryCalenderStart": "Iniciar",
          "HistoryCalenderEnd": "Terminar",
          "HistoryCalendarCancel": "Cancelar",
          "HistoryCalendarConfirm": "Confirmar",
          "HistoryRetry": "Repetir",
          "HistoryOK": "OK",
          "HistoryLoadMoreData": "Soltar para começar a carregar",
          "HistoryLoadDataPull": "Puxar para cima para carregar mais",
          "HistoryAllRecordDisplayed": "Todos os registos apresentados",
          "HistoryMainTitle": "Histórico do jogo",
          "HistoryLoading": "A carregar",
          "HistoryNoHistory": "Sem histórico do jogo",
          "HistoryServerFail": "Erro do servidor",
          "HistoryFailLoadTitle": "Falha ao consultar o histórico",
          "HistoryFailLoadSentence": "Verifique as suas definições de rede e tente novamente",
          "HistoryRecordMainTitle": "Detalhes da rodada",
          "HistoryRecordBack": "Voltar",
          "HistoryBarClose": "Fechar",
          "HistoryRecord": "Registo",
          "HistoryRecords": "Registos",
          "HistoryNormalSpin": "Rodada normal",
          "HistoryBetSize": "Aposta ",
          "HistoryBetLevel": "Nível de aposta",
          "HistoryPayout": "Pagamento",
          "HistoryNoWinning": "Sem combinação vencedora",
          "HistoryDetailItemRoundLabel": "Ronda %{currCount}/%{maxCount}",
          "HistoryReplaySpin": "Rep. rodada",
          "HistoryReplayRound": "Rep. ronda",
          "HistoryRecordsDelayed": "Os registos do histórico podem demorar um pouco a aparecer. Volte mais tarde!",
          "HistoryTransactionIdCopied": "A ID da transação %{transactionId} foi copiada para a área de transferência.",
          "HistoryCopy": "Copiar",
          "HistoryProfile": "Histórico",
          "HistoryProfileName": "Jogos",
          "HistoryProfileSpin": "Rodada(s)",
          "HistoryTipsMultiplier": "Multiplicador",
          "HistoryTipsWay": "Sentido(s)",
          "HistoryTipsSymbolCount": "Contagem de símbolos",
          "HistoryTipsBetSize": "Aposta ",
          "HistoryTipsBetLevel": "Nível de aposta",
          "HistoryTipsPayout": "Valores de pagamento dos símbolos",
          "HistoryVrfPopupTitle1": "Jogos PG\r\nOficiais e Genuínos",
          "HistoryVrfPopupTitle2": "<Color> Verifique unicamente \r\ncom </Color>",
          "HistoryVrfPopupDesc1": "Prima <Color>\"Aceitar\"</Color> para verificar\r\na ID da sua Transação",
          "HistoryVrfPopupDesc2": "ou prima <Color>\"Ignorar\"</Color> para saltar \r\na verificação.",
          "HistoryVrfPopupIgnoreBtn": "Ignorar",
          "HistoryVrfPopupAcceptBtn": "Aceitar",
          "HistoryVrfPopupCheckboxLabel": "Não mostrar isto de novo \r\ndurante %{days} dia(s)",
          "HistoryVryBarTitle1": "Clique abaixo para uma <Color>verificação</Color> oficial do jogo PG:",
          "HistoryVrfStep1": "Selecione uma das ID de Transação",
          "HistoryVrfStep2": "Clique no botão <Color>\"Verificar\"</Color>",
          "HistoryVrfStep3": "Ver Resultados",
          "HistoryVrfBarTitle2": "Verifique <Color>exclusivamente</Color> com",
          "HistoryVrfTrusted": "Verificação fiável e segura!",
          "HistoryVrfTransID": "ID da Transação",
          "HistoryVrfBtn": "Verificar",
          "HistoryVrfBrowserErr": "Erro no navegador? Copie e volte a tentar com a ligação abaixo.",
          "HistoryVrfLinkCopied": "Ligação copiada"
        },
        "BetOptions": {
          "BetWord": "Aposta",
          "BetChangeProgressRemind": "Alterar o Valor de aposta irá carregar o progresso de jogo correspondente.",
          "BetOriginalAmountTitle": "Valor de aposta original:",
          "BetSettingWord": "Opções de aposta",
          "ReminderWord": "Lembrete",
          "BiggestBet": "Aposta máxima",
          "Confirm": "Confirmar",
          "BetCurrencyRate": "Aposta",
          "BetMultiple": "Nível de aposta",
          "BetAmountTitle": "Valor de aposta",
          "BetAmount": "Valor de aposta:",
          "SubReminderWord": "Lembrete de hora",
          "BetLines": "Linhas",
          "ReminderHours": "%{value} hora",
          "ReminderMinutes": "%{value} minutos",
          "ReminderSeconds": "%{value} segundo(s)",
          "BetChangeForfeitProgressRemind": "Ao alterar o montante de aposta,\r\nperde o progresso do jogo atual.",
          "MaxPayout": "Pagamento máximo",
          "RTP": "RTP",
          "PayoutProbabilities": "1 em %{value} rodadas"
        },
        "General": {
          "ErrorLoginFailed": "Falha ao iniciar sessão",
          "ErrorTransactionFailed": "Falha ao efetuar a transação",
          "ErrorLaunchFailed": "Falha ao iniciar",
          "ErrorPreloadError": "Carregamento falhou",
          "ErrorChangeFailed": "Falha na troca",
          "DialogRetry": "Repetir",
          "DialogQuit": "Sair",
          "DialogOk": "OK",
          "DialogCancel": "Cancelar",
          "DialogLater": "Mais tarde",
          "DialogContinue": "Continuar",
          "DialogRealMoney": "Modo real",
          "RetryNetwork": "Rede ocupada. A voltar a tentar agora...",
          "LoadingLogin": "A iniciar sessão",
          "LoadingResource": "A carregar recursos",
          "LoadingCompleted": "Concluído",
          "LoadingInfo": "A ler informações",
          "LoadingInfoRetry": "Falha ao ler informações. A voltar a tentar…",
          "ResourceLoadingMessage": "A carregar",
          "ResourceRetryMessage": "Falha ao carregar recursos. A repetir…",
          "MaintenanceTitle": "Aviso de manutenção",
          "MaintenanceMessage": "A manutenção do jogo começa entre %{startDate} e %{startDate}.",
          "ErrorOccur": "Ocorreu um erro desconhecido, tente novamente.",
          "DemoMessage": "Está a jogar no modo Demo!",
          "BaseBet": "Aposta base",
          "BetLines": "Linhas",
          "DialogReload": "Recarregar",
          "Warning": "Aviso",
          "DemoContinue": "Continuar"
        },
        "SpinOptions": {
          "ChooseValue": "Escolher valor",
          "SettingSliderNumNone": "Nenhum",
          "AutoSpinWord": "Rodada automática",
          "AutoSpinWordShort": "Opções de rodada",
          "SpinSpeed": "Velocidade da rodada",
          "NormalSpeed": "Normal",
          "FastSpeed": "Turbo",
          "AutoSpin": "Nº rod. Automáticas",
          "OnceCashLessThanTitle": "Parar se o saldo diminuir em",
          "RequiredTitle": "*Necessário",
          "OnceCashMoreThanTitle": "Parar se o saldo aumentar em",
          "OnceWinAmountTargetTitle": "Parar se um ganho único exceder",
          "StartAutoSpin": "Começar Rodada automática",
          "MoreOptions": "Mais",
          "HideOptions": "Oculto",
          "TotalBet": "Aposta Total"
        },
        "SettingMenu": {
          "WalletLoading": "A carregar",
          "SettingSliderNumNone": "Nenhum",
          "BalanceWord": "Saldo",
          "WinPrizeWord": "Ganhos",
          "WalletRetry": "Repetir",
          "SettingCloseWord": "Fechar",
          "SettingHistoryWord": "Histórico",
          "SettingPayoutWord": "Tabela de pagamentos",
          "SettingRulesWord": "Regras",
          "SettingSoundWord": "Som",
          "TurboSpinEnable": "Rodada turbo ativada",
          "TurboSpinDisable": "Rodada turbo desativada",
          "BiggestBet": "Aposta máxima",
          "SettingSmartBotWord": "SmartBot",
          "SmallestBet": "Aposta mínima",
          "SettingQuitWord": "Sair",
          "Bet": "Aposta",
          "Max": "Máx",
          "FreeGame": "Jogos grátis",
          "RollOver": "Renovação"
        },
        //机翻
        "result": "Resultado",
        "page": "Página",
        "rank": "Classificar",
        "username": "Nome de usuário",
        "reset": "Repor",
        "logOut": "SAIR"
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PWindows.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Log.ts', './DataManager.ts', './PlatformBase.ts'], function (exports) {
  var _inheritsLoose, cclegacy, Log, DataManager, UserKey, PlatformBase;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Log = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      PlatformBase = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8e8f6RwJbRFW6HRnGSKLsDq", "PWindows", undefined); // // const NATIVE_PATH = "org/cocos2dx/javascript/AppActivity";
      var PlatformWindows = exports('default', /*#__PURE__*/function (_PlatformBase) {
        _inheritsLoose(PlatformWindows, _PlatformBase);
        function PlatformWindows() {
          return _PlatformBase.apply(this, arguments) || this;
        }
        var _proto = PlatformWindows.prototype;
        _proto.checkLogin = function checkLogin() {
          var token = "428bd9d1c8add7be6fd4b852209a90c6";
          DataManager.instance.setUserDataForKey(UserKey.OID, "uuid_web");
          DataManager.instance.setUserDataForKey(UserKey.SIGN, token);
          return true;
        };
        _proto.noImplement = function noImplement() {
          Log.warn("\u5E73\u53F0\u65B9\u6848", "该方法未实现Windows版");
        };
        return PlatformWindows;
      }(PlatformBase));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SafeArea.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Widget, sys, view, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Widget = module.Widget;
      sys = module.sys;
      view = module.view;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "77339RSJqBB8pAiaFZLzoKY", "SafeArea", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode,
        requireComponent = _decorator.requireComponent,
        executionOrder = _decorator.executionOrder;
      var SafeArea = exports('default', (_dec = ccclass("SafeArea"), _dec2 = requireComponent(Widget), _dec3 = executionOrder(1000), _dec4 = menu("tools/SafeArea"), _dec5 = property({
        tooltip: "异形屏适配",
        displayName: "适配左边"
      }), _dec6 = property({
        tooltip: "异形屏适配",
        displayName: "适配右边"
      }), _dec(_class = executeInEditMode(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SafeArea, _Component);
        function SafeArea() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "left", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "right", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SafeArea.prototype;
        _proto.onLoad = function onLoad() {
          var widget = this.node.getComponent(Widget);
          if (!widget) {
            return;
          }
          widget.updateAlignment();
          var safeArea = sys.getSafeAreaRect();
          var viewsize = view.getDesignResolutionSize();
          var widthOffset = viewsize.width - safeArea.width;
          if (this.left && widget.isAlignLeft) {
            widget.left += safeArea.x;
          }
          if (this.right && widget.isAlignRight) {
            widget.right += widthOffset - safeArea.x;
          }
          widget.updateAlignment();
        };
        _proto.onEnable = function onEnable() {};
        return SafeArea;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "left", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "right", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class) || _class) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // const { ccclass, property, menu, executeInEditMode, requireComponent, executionOrder } = cc._decorator;
      // @ccclass
      // @executeInEditMode
      // @requireComponent(cc.Widget)
      // @executionOrder(1000)
      // @menu("tools/SafeArea")
      // export default class SafeArea extends cc.Component {
      //     @property({
      //         tooltip: "异形屏适配",
      //         displayName: "适配左边",
      //     })
      //     left: boolean = true;
      //
      //     @property({
      //         tooltip: "异形屏适配",
      //         displayName: "适配右边",
      //     })
      //     right: boolean = false;
      //
      //     onLoad() {
      //         let widget = this.node.getComponent(cc.Widget);
      //         if (!widget) {
      //             return;
      //         }
      //         widget.updateAlignment();
      //
      //         let safeArea = cc.sys.getSafeAreaRect();
      //         let viewsize = cc.winSize;
      //         let widthOffset = viewsize.width - safeArea.width;
      //
      //         if (this.left && widget.isAlignLeft) {
      //             widget.left += safeArea.x;
      //         }
      //
      //         if (this.right && widget.isAlignRight) {
      //             widget.right += widthOffset - safeArea.x;
      //         }
      //
      //         widget.updateAlignment();
      //     }
      //
      //     protected onEnable(): void {}
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SchedulerMgr.ts", ['cc', './Log.ts'], function (exports) {
  var cclegacy, macro, director, Scheduler, Log;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      macro = module.macro;
      director = module.director;
      Scheduler = module.Scheduler;
    }, function (module) {
      Log = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "40b01vRXBBG16hdHSIC68l9", "SchedulerMgr", undefined);
      var YDScheduler = /*#__PURE__*/function () {
        function YDScheduler() {
          this._callBackCallback = [];
          this._callBackCallback = [];
        }

        /**
         * @description: 开启定时器
         * @param {Function} callback
         * @param {any} target
         * @param {number} interval 如果 interval 值为 0，那么回调函数每一帧都会被调用
         * @param {number} repeat 循环次数
         * @param {number} delay 指定延迟时间
         * @return {*}
         */
        var _proto = YDScheduler.prototype;
        _proto.schedule = function schedule(callback, target, interval, repeat, delay) {
          if (this.isScheduled(callback, target)) {
            Log.warn("定时器", "\u5B9A\u65F6\u5668\u91CD\u590D\u5F00\u542F\uFF1A" + target.name);
            return;
          }
          interval = interval || 0;
          repeat = repeat || macro.REPEAT_FOREVER;
          delay = delay || 0;
          director.getScheduler().schedule(callback, target, interval, repeat, delay, false);
          this._push(callback, target);
        };
        _proto.scheduleOnce = function scheduleOnce(callback, target, interval) {
          if (this.isScheduled(callback, target)) {
            Log.warn("定时器", "\u5B9A\u65F6\u5668\u91CD\u590D\u5F00\u542F\uFF1A" + target.name);
            return;
          }
          interval = interval || 0;
          director.getScheduler().schedule(callback, target, interval, 0, 0, false);
        };
        _proto.isScheduled = function isScheduled(callback, target) {
          // cc.director.getScheduler().enableForTarget(target);
          Scheduler.enableForTarget(target);
          return director.getScheduler().isScheduled(callback, target);
        }

        /**
         * @description: 关闭定时器
         * @param {any} target 目标
         * @param {Function} callback 回调
         * @return {*}
         */;
        _proto.unschedule = function unschedule(target, callback) {
          if (!callback) {
            var length = this._callBackCallback.length;
            for (var i = length - 1; i >= 0; i--) {
              if (this._callBackCallback[i].target === target) {
                var _callback = this._callBackCallback[i].callback;
                if (!this.isScheduled(_callback, target)) {
                  Log.warn("定时器", "\u5B9A\u65F6\u5668\u672A\u5F00\u542F\uFF0C\u5173\u95ED\u5931\u8D25\uFF1A" + target.name);
                  return;
                }
                director.getScheduler().unschedule(_callback, target);
                this._callBackCallback.splice(i, 1);
                break;
              }
            }
          } else {
            if (!this.isScheduled(callback, target)) {
              Log.warn("定时器", "\u5B9A\u65F6\u5668\u672A\u5F00\u542F\uFF0C\u5173\u95ED\u5931\u8D25\uFF1A" + target.name);
              return;
            }
            director.getScheduler().unschedule(callback, target);
            this._pop(callback, target);
          }
        };
        _proto.clear = function clear() {
          for (var i = 0; i < this._callBackCallback.length; i++) {
            var _this$_callBackCallba = this._callBackCallback[i],
              callback = _this$_callBackCallba.callback,
              target = _this$_callBackCallba.target;
            if (this.isScheduled(callback, target)) {
              director.getScheduler().unschedule(callback, target);
            }
          }
          this._callBackCallback = [];
        };
        _proto._push = function _push(callback, target) {
          var isExist = false;
          for (var i = 0; i < this._callBackCallback.length; i++) {
            if (this._callBackCallback[i].callback === callback && this._callBackCallback[i].target === target) {
              isExist = true;
              break;
            }
          }
          if (!isExist) {
            this._callBackCallback.push({
              callback: callback,
              target: target
            });
          }
        };
        _proto._pop = function _pop(callback, target) {
          for (var i = 0; i < this._callBackCallback.length; i++) {
            if (this._callBackCallback[i].callback === callback && this._callBackCallback[i].target === target) {
              this._callBackCallback.splice(i, 1);
              break;
            }
          }
        };
        return YDScheduler;
      }();
      var SchedulerMgr = exports('default', new YDScheduler());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ScrollList.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ScrollListDataItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, ScrollView, Prefab, instantiate, Tween, tween, v3, Component, ScrollListDataItem;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      ScrollListDataItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "b3cb0zcuo5CNYA5C/bFXsKy", "ScrollList", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        requireComponent = _decorator.requireComponent,
        disallowMultiple = _decorator.disallowMultiple;
      var ScrollList = exports('default', (_dec = ccclass("ScrollList"), _dec2 = disallowMultiple(), _dec3 = requireComponent(ScrollView), _dec4 = menu("tools/ScrollList"), _dec5 = property(Prefab), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ScrollList, _Component);
        function ScrollList() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_item", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemWidth", _descriptor2, _assertThisInitialized(_this));
          _this._curIndex = void 0;
          _this.list = void 0;
          _this.posList = [];
          _this.halfWidth = 0;
          _this.scroll_list = void 0;
          return _this;
        }
        var _proto = ScrollList.prototype;
        _proto.onLoad = function onLoad() {
          this.scroll_list = this.node.getComponent(ScrollView);
          this.node.on("scrolling", this.onScrolling, this);
          this.node.on("touch-up", this.onScrollEnd, this);
        };
        _proto.onScrolling = function onScrolling() {
          var x = this.node.getComponent(ScrollView).content.getPosition().x;
          for (var i = 0; i < this.posList.length; i++) {
            var pos = this.posList[i];
            if (Math.abs(pos + x) < this.itemWidth / 2) {
              var per = (this.itemWidth / 2 - Math.abs(pos + x)) / (this.itemWidth / 2);
              this.fadeChild(i, per);
            }
          }
        };
        _proto.onScrollEnd = function onScrollEnd() {
          var _this2 = this;
          //@ts-ignore
          var time = this.scroll_list._autoScrollTotalTime;
          var t = time - 1;
          t = t < 0 ? 0 : t;
          this.scheduleOnce(function () {
            _this2.scroll_list.stopAutoScroll();
            var x = _this2.scroll_list.content.getPosition().x;
            for (var i = 0; i < _this2.posList.length; i++) {
              var pos = _this2.posList[i];
              if (Math.abs(pos + x) < _this2.itemWidth / 2) {
                _this2.scrollToIndex(i);
              }
            }
          }, t);
        };
        _proto.initScoreList = function initScoreList(data) {
          var _this3 = this;
          this.scroll_list.content.removeAllChildren();
          var list = data;
          this.list = list;
          this.posList = [];
          this.halfWidth = list.length % 2 == 0 ? this.itemWidth / 2 : 0;
          var index = Math.floor(this.list.length / 2);
          var startX = -index * this.itemWidth + this.halfWidth;
          var length = list.length;
          for (var i = 0; i < length; i++) {
            var node = instantiate(this.pre_item);
            node.getComponent(ScrollListDataItem).setData(list[i]);
            this.scroll_list.content.addChild(node);
            node.name = "" + i;
            this.posList.push(startX + i * this.itemWidth);
          }
          this.scheduleOnce(function () {
            _this3.scrollToIndex(index);
          });
        };
        _proto.init = function init(data) {
          var list = data;
          this.list = list;
          this.posList = [];
          this.halfWidth = list.length % 2 == 0 ? this.itemWidth / 2 : 0;
          var index = Math.floor(this.list.length / 2);
          var startX = -index * this.itemWidth + this.halfWidth;
          var length = list.length;
          for (var i = 0; i < length; i++) {
            this.posList.push(startX + i * this.itemWidth);
          }
        };
        _proto.scrollToIndex = function scrollToIndex(index, percent) {
          if (percent === void 0) {
            percent = 1;
          }
          var pos = this.posList[index];
          var node = this.scroll_list.content;
          this.fadeChild(index, percent);
          // node.stopAllActions();
          Tween.stopAllByTarget(node);
          tween(node).to(0.2, {
            position: v3(-pos)
          }).start();

          //        // console.log("content", index, pos);
        };

        _proto.fadeChild = function fadeChild(index, percent) {
          this._curIndex = index;

          //        // let start = index - 3;
          //        // let father = this.scroll_list.content;
          //        // let children = father.children;

          //        // let scales = [0.8, 0.9, 1.0, 1.1, 1.0, 0.9, 0.8];
          //        // let opacitys = [125, 175, 200, 255, 200, 175, 125];
          //        // for (let child of children) {
          //        //     child.scale = 1;
          //        //     child.opacity = 255;
          //        // }
          //        // for (let i = 0; i < 7; i++) {
          //        //     let name = "" + (start + i);
          //        //     let child = father.getChildByName(name);
          //        //     if (child) {
          //        //         child.scale = 1 + (scales[i] - 1) * percent;
          //        //         child.opacity = opacitys[i];
          //        //     }
          //        // }
        };

        _proto.onClickLeft = function onClickLeft() {
          var index = this._curIndex - 1;
          if (index < 0) {
            return;
          }
          this.scrollToIndex(index);
        };
        _proto.onClickRight = function onClickRight() {
          var index = this._curIndex + 1;
          if (index > this.list.length - 1) {
            return;
          }
          this.scrollToIndex(index);
        };
        return ScrollList;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_item", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      })), _class2)) || _class) || _class) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import ScrollListDataItem from "./ScrollListDataItem";
      //
      // const { ccclass, property, menu, requireComponent, disallowMultiple } = cc._decorator;
      //
      // @ccclass
      // @disallowMultiple()
      // @requireComponent(cc.ScrollView)
      // @menu("tools/ScrollList")
      // export default class ScrollList extends cc.Component {
      //     @property(cc.Prefab)
      //     pre_item: cc.Prefab = null;
      //
      //     @property
      //     itemWidth = 100;
      //
      //     _curIndex: number;
      //
      //     list: number[];
      //
      //     posList: number[] = [];
      //
      //     halfWidth = 0;
      //
      //     scroll_list: cc.ScrollView;
      //
      //     onLoad() {
      //         this.scroll_list = this.node.getComponent(cc.ScrollView);
      //         this.node.on("scrolling", this.onScrolling, this);
      //         this.node.on("touch-up", this.onScrollEnd, this);
      //     }
      //
      //     onScrolling() {
      //         let x = this.node.getComponent(cc.ScrollView).content.x;
      //         for (let i = 0; i < this.posList.length; i++) {
      //             let pos = this.posList[i];
      //             if (Math.abs(pos + x) < this.itemWidth / 2) {
      //                 let per = (this.itemWidth / 2 - Math.abs(pos + x)) / (this.itemWidth / 2);
      //                 this.fadeChild(i, per);
      //             }
      //         }
      //     }
      //     onScrollEnd() {
      //         //@ts-ignore
      //         let time = this.scroll_list._autoScrollTotalTime;
      //
      //         let t = time - 1;
      //         t = t < 0 ? 0 : t;
      //         this.scheduleOnce(() => {
      //             this.scroll_list.stopAutoScroll();
      //             let x = this.scroll_list.content.x;
      //             for (let i = 0; i < this.posList.length; i++) {
      //                 let pos = this.posList[i];
      //                 if (Math.abs(pos + x) < this.itemWidth / 2) {
      //                     this.scrollToIndex(i);
      //                 }
      //             }
      //         }, t);
      //     }
      //
      //     initScoreList(data) {
      //         this.scroll_list.content.removeAllChildren();
      //         let list: [] = data;
      //         this.list = list;
      //         this.posList = [];
      //         this.halfWidth = list.length % 2 == 0 ? this.itemWidth / 2 : 0;
      //
      //         let index = Math.floor(this.list.length / 2);
      //         let startX = -index * this.itemWidth + this.halfWidth;
      //
      //         let length = list.length;
      //         for (let i = 0; i < length; i++) {
      //             let node = cc.instantiate(this.pre_item);
      //             node.getComponent(ScrollListDataItem).setData(list[i]);
      //             this.scroll_list.content.addChild(node);
      //             node.name = "" + i;
      //             this.posList.push(startX + i * this.itemWidth);
      //         }
      //
      //         this.scheduleOnce(() => {
      //             this.scrollToIndex(index);
      //         });
      //     }
      //
      //     init(data) {
      //         let list: [] = data;
      //         this.list = list;
      //         this.posList = [];
      //         this.halfWidth = list.length % 2 == 0 ? this.itemWidth / 2 : 0;
      //
      //         let index = Math.floor(this.list.length / 2);
      //         let startX = -index * this.itemWidth + this.halfWidth;
      //
      //         let length = list.length;
      //         for (let i = 0; i < length; i++) {
      //             this.posList.push(startX + i * this.itemWidth);
      //         }
      //     }
      //
      //     scrollToIndex(index: number, percent = 1) {
      //         let pos = this.posList[index];
      //         let node = this.scroll_list.content;
      //         this.fadeChild(index, percent);
      //         node.stopAllActions();
      //         cc.tween(node).to(0.2, { x: -pos }).start();
      //
      //         // console.log("content", index, pos);
      //     }
      //
      //     fadeChild(index: number, percent = 1) {
      //         this._curIndex = index;
      //
      //         // let start = index - 3;
      //         // let father = this.scroll_list.content;
      //         // let children = father.children;
      //
      //         // let scales = [0.8, 0.9, 1.0, 1.1, 1.0, 0.9, 0.8];
      //         // let opacitys = [125, 175, 200, 255, 200, 175, 125];
      //         // for (let child of children) {
      //         //     child.scale = 1;
      //         //     child.opacity = 255;
      //         // }
      //         // for (let i = 0; i < 7; i++) {
      //         //     let name = "" + (start + i);
      //         //     let child = father.getChildByName(name);
      //         //     if (child) {
      //         //         child.scale = 1 + (scales[i] - 1) * percent;
      //         //         child.opacity = opacitys[i];
      //         //     }
      //         // }
      //     }
      //
      //     onClickLeft() {
      //         let index = this._curIndex - 1;
      //         if (index < 0) {
      //             return;
      //         }
      //         this.scrollToIndex(index);
      //     }
      //
      //     onClickRight() {
      //         let index = this._curIndex + 1;
      //         if (index > this.list.length - 1) {
      //             return;
      //         }
      //         this.scrollToIndex(index);
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ScrollListDataItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "b7ae3RoFLRFfp4+jcdGSPYp", "ScrollListDataItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ScrollListDataItem = exports('default', (_dec = ccclass("ScrollListDataItem"), _dec2 = menu("tools/ScrollListDataItem"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ScrollListDataItem, _Component);
        function ScrollListDataItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._data = void 0;
          return _this;
        }
        var _proto = ScrollListDataItem.prototype;
        _proto.setData = function setData(data) {
          this._data = data;
        };
        _proto.getData = function getData() {
          return this._data;
        };
        return ScrollListDataItem;
      }(Component)) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // const { ccclass, property, menu } = cc._decorator;
      //
      // @ccclass
      // @menu("tools/ScrollListDataItem")
      // export default class ScrollListDataItem extends cc.Component {
      //     _data;
      //     setData(data) {
      //         this._data = data;
      //     }
      //
      //     getData() {
      //         return this._data;
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ScrollNumLabel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './EventManager.ts', './ConfigManager.ts', './GameDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, CCFloat, Component, Common, EventManager, ConfigManager, GameDef;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      CCFloat = module.CCFloat;
      Component = module.Component;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      GameDef = module.GameDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "8c7d7xdj+1BJqqn+Dltka8F", "ScrollNumLabel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        requireComponent = _decorator.requireComponent;
      var ScrollNumLabel = exports('default', (_dec = ccclass("ScrollNumLabel"), _dec2 = requireComponent(Label), _dec3 = menu("tools/ScrollNumLabel"), _dec4 = property({
        type: CCFloat
      }), _dec5 = property(), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ScrollNumLabel, _Component);
        function ScrollNumLabel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "stepCount", _descriptor, _assertThisInitialized(_this));
          _this._step = 0;
          _this._label = void 0;
          _this._oldCount = 0;
          _this._newCount = 0;
          _this.formalPart = "";
          _this._dtframe = 60;
          _this.prefix = "";
          return _this;
        }
        var _proto = ScrollNumLabel.prototype;
        _proto.onLoad = function onLoad() {
          this._label = this.node.getComponent(Label);
        };
        _proto.setPrefix = function setPrefix(prefix) {
          this.prefix = prefix;
        };
        _proto.notify = function notify(newCount) {
          if (this._oldCount == newCount) {
            return;
          }
          this._newCount = newCount;
          this._step = Math.floor((newCount - this._oldCount) / this.stepCount * 60 / this._dtframe);
          if (this._step == 0) {
            this._step = 1;
          }
        };
        _proto.addScount = function addScount(value) {
          var scount = this._newCount + value;
          this.value = scount;
        };
        _proto.reset = function reset(count) {
          if (count === void 0) {
            count = 0;
          }
          this._oldCount = count;
          this._newCount = count;
          if (this._label) this._label.string = this.prefix + Common.numberFormat(this._oldCount / GameDef.Constant.moneyRatio, 2);
        };
        _proto.resetWithString = function resetWithString(str) {
          this.reset();
          if (this._label) this._label.string = str;
        }

        /**
         * 清空
         */;
        _proto.clear = function clear() {
          this._oldCount = 0;
          this._newCount = 0;
          if (this._label) this._label.string = "";
          this._step = 0;
        };
        _proto.updateDTFrame = function updateDTFrame(dt) {
          this._dtframe = Math.floor(1 / dt);
        };
        _proto.update = function update(dt) {
          this.updateDTFrame(dt);
          if (this._step != 0) {
            this._oldCount += this._step;
            if (this._step > 0) {
              if (this._oldCount > this._newCount) {
                this._oldCount = this._newCount;
                this._step = 0;
                EventManager.getInstance().emit(ConfigManager.getInstance().eventTransform.scrollNumberEvent, this._oldCount);
              }
            } else {
              if (this._oldCount < this._newCount) {
                this._oldCount = this._newCount;
                this._step = 0;
                EventManager.getInstance().emit(ConfigManager.getInstance().eventTransform.scrollNumberEvent, this._oldCount);
              }
            }
            this._label.string = this.prefix + Common.numberFormat(this._oldCount / GameDef.Constant.moneyRatio, 2);
          }
        };
        _proto.onDestroy = function onDestroy() {
          //        // cc.director.off('translate', this.translate, this)
        };
        _createClass(ScrollNumLabel, [{
          key: "value",
          get: function get() {
            return this._oldCount;
          },
          set: function set(value) {
            this.notify(value);
          }
        }]);
        return ScrollNumLabel;
      }(Component), (_applyDecoratedDescriptor(_class2.prototype, "value", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "value"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "stepCount", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 60;
        }
      })), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ScrollViewEx.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, ScrollView, Node, isValid, rect, UITransform, v3, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ScrollView = module.ScrollView;
      Node = module.Node;
      isValid = module.isValid;
      rect = module.rect;
      UITransform = module.UITransform;
      v3 = module.v3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class;
      cclegacy._RF.push({}, "2815c2BjTFPz74GD4MvVS9y", "ScrollViewEx", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        requireComponent = _decorator.requireComponent;
      var ScrollViewEx = exports('default', (_dec = ccclass("ScrollViewEx"), _dec2 = requireComponent(ScrollView), _dec3 = menu("tools/ScrollViewEx"), _dec(_class = _dec2(_class = _dec3(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ScrollViewEx, _Component);
        function ScrollViewEx() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._scrollview = void 0;
          _this._skeList = [];
          return _this;
        }
        var _proto = ScrollViewEx.prototype;
        _proto.onLoad = function onLoad() {
          this._scrollview = this.node.getComponent(ScrollView);
        };
        _proto.walk = function walk(comp) {
          this._skeList = [];
          var children = this._scrollview.content.children;
          for (var _iterator = _createForOfIteratorHelperLoose(children), _step; !(_step = _iterator()).done;) {
            var node = _step.value;
            var c_sp = node.getComponent(comp);
            if (c_sp) {
              this._skeList.push(c_sp);
            }
          }
          this.onScroll();
        };
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          this._scrollview.node.on(ScrollView.EventType.SCROLLING, this.onScroll, this);
          this.node.on(Node.EventType.SIZE_CHANGED, function () {
            _this2.scheduleOnce(function () {
              _this2.onScroll();
            });
          }, this);
        };
        _proto.onDisable = function onDisable() {
          this._scrollview.node.off(ScrollView.EventType.SCROLLING, this.onScroll, this);
        };
        _proto.onScroll = function onScroll() {
          if (!isValid(this._scrollview.node)) {
            return;
          }
          var viewRect = rect(0, -this._scrollview.node.getComponent(UITransform).height / 2, this._scrollview.node.getComponent(UITransform).width, this._scrollview.node.getComponent(UITransform).height / 2);
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._skeList), _step2; !(_step2 = _iterator2()).done;) {
            var skeNode = _step2.value;
            if (!isValid(skeNode.node)) {
              return;
            }
            var curPos = this._scrollview.node.getComponent(UITransform).convertToNodeSpaceAR(skeNode.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0)));
            var curRect = rect(curPos.x - skeNode.node.getComponent(UITransform).width / 2.0, curPos.y - skeNode.node.getComponent(UITransform).height / 2.0, skeNode.node.getComponent(UITransform).width, skeNode.node.getComponent(UITransform).height);
            skeNode.setVisible(viewRect.intersects(curRect));
          }
        };
        _proto.onDestroy = function onDestroy() {
          this._skeList.length = 0;
        };
        return ScrollViewEx;
      }(Component)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ScrollViewExItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "6feecxDdl9Kw53o2LiZhpKW", "ScrollViewExItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ScrollViewExItem = exports('ScrollViewExItem', (_dec = ccclass("ScrollViewExItem"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ScrollViewExItem, _Component);
        function ScrollViewExItem() {
          return _Component.apply(this, arguments) || this;
        }
        return ScrollViewExItem;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/server.ts", ['cc', './http_request.ts'], function (exports) {
  var cclegacy, post, get;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      post = module.post;
      get = module.get;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8dcaagl9pNFyYgxVDvr66mi", "server", undefined);
      var server = exports('default', function Server() {
        var protocol = "http";
        var host = "192.168.8.178";
        var port = 83;
        var userId = "1506921611152666626";
        var token = "0a2a3797447f2adf7279f538f33dc226";
        var routeLogin = "yn-user/app/user/phoneLogin";
        var routeUsernfo = "/yn-user/app/user/getInfo";
        function constructURL(route) {
          return protocol + "://" + host + ":" + port + "/" + route;
        }
        return {
          postLogin: function postLogin() {
            return post(constructURL(routeLogin), {
              accounts: "cocostest",
              phone: "18912345678",
              code: "1111"
            }).then(function (res) {
              var data = res.data;
              if (typeof data === "string") data = JSON.parse(data);
              data = data.data;
              userId = data.userId;
              token = data.token;
            });
          },
          getUserInfo: function getUserInfo() {
            return get(constructURL(routeUsernfo), {
              params: {
                userId: userId
              },
              headers: {
                token: token
              }
            }).then(function (res) {
              var data = res.data;
              if (typeof data === "string") data = JSON.parse(data);
              data = data.data;
              return {
                balance: data.balance,
                nickName: data.nickName,
                avatar: data.headPic
              };
            });
          }
        };
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/showMini.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainManager.ts', './Common.ts', './GameDef.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, instantiate, assetManager, Component, MainManager, Common, GameDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      instantiate = module.instantiate;
      assetManager = module.assetManager;
      Component = module.Component;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      GameDef = module.GameDef;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "508b6joHUZNdIm5jj61Ca3l", "showMini", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var showMini = exports('default', (_dec = ccclass("ShowMini"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(showMini, _Component);
        function showMini() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._mainManager = void 0;
          _this._configManager = void 0;
          _this._eventManager = void 0;
          _this._viewManager = void 0;
          _this._dataManager = void 0;
          _this._netManager = void 0;
          _this._startPos = void 0;
          _this._isOpen = false;
          _this._allChang = void 0;
          _this._pos = {
            x: 0,
            y: 0
          };
          return _this;
        }
        var _proto = showMini.prototype;
        _proto.onLoad = function onLoad() {
          this._mainManager = MainManager.getInstance();
          this._eventManager = this._mainManager.getEventManager();
          this._viewManager = this._mainManager.getViewManager();
          this._dataManager = this._mainManager.getDataManager();
          this._configManager = this._mainManager.getConfigManager();
          this._netManager = this._mainManager.getNetManager();
          //        // this.initMiniGame();
        };

        _proto.enterGame = function enterGame(gameType, bundle) {
          if (gameType == "Dxgame" || gameType == "GuessBigSmall" || gameType == "FingGuess" || gameType == "Minipoker") {
            //            //如果小游戏  悬浮类游戏
            var that = this;
            var sceneName = GameDef.eMiniGameScene[gameType];
            var layerPath = "prefab/" + sceneName;
            Common.loadPopBuddle(layerPath, bundle, function (cur, total) {}, function (GameLayer) {
              var gameLayer = instantiate(GameLayer);
              that._viewManager.showPopGame(gameLayer, gameType);
            }, true);
          }
        };
        _proto.miniGame = function miniGame(data) {
          var that = this;
          //        //cc.assetManager.loadAny
          //        //如果已经加载
          assetManager.loadBundle(data, function (err, bundle) {
            Common.showLog("buddle load finish");
            Common.showLog("网页版子游戏下载");
            that.enterGame(data, bundle);
          });
        };
        _proto.initMiniGame = function initMiniGame() {
          var gameName = this._viewManager._popGameName;
          for (var i = 0; i < gameName.length; i++) {
            this.miniGame(gameName[i]);
          }
        };
        _proto.onDestroy = function onDestroy() {
          //        //   this.removeEvent();
        };
        return showMini;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/showScore.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainManager.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Tween, v3, UIOpacity, tween, Component, MainManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Tween = module.Tween;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "952c0GBMk1Ko7tX+kTT8Qi7", "showScore", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var showScore = exports('default', (_dec = ccclass("ShowScore"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(showScore, _Component);
        function showScore() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._mainManager = void 0;
          return _this;
        }
        var _proto = showScore.prototype;
        _proto.onLoad = function onLoad() {
          this._mainManager = MainManager.getInstance();
        };
        _proto.onEnable = function onEnable() {
          // this.node.stopAllActions();
          Tween.stopAllByTarget(this.node);
          this.node.scale = v3(0, 0);
          this.node.getComponent(UIOpacity).opacity = 255;
          tween(this.node).to(0.2, {
            scale: v3(0.6, 0.6, 1)
          }).start();
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        return showScore;
      }(Component)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import MainManager from "../manager/MainManager";
      //
      // const { ccclass, property } = cc._decorator;
      //
      // @ccclass
      // export default class showScore extends cc.Component {
      //     _mainManager: MainManager;
      //
      //     onLoad() {
      //         this._mainManager = MainManager.getInstance();
      //     }
      //     onEnable() {
      //         this.node.stopAllActions();
      //         this.node.scale = 0;
      //         this.node.opacity = 255;
      //         cc.tween(this.node).to(0.2, { scale: 0.6 }).start();
      //     }
      //     start() {}
      //
      //     // update (dt) {}
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/showTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Label, Component, MainManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "30f1fNPLVJGv4nAirAcsjYo", "showTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var showTip = exports('default', (_dec = ccclass("ShowTip"), _dec2 = property(Button), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Label), _dec6 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(showTip, _Component);
        function showTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "buttonsure1", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buttonsure2", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buttonqx", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "textcontent", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "textSubTip", _descriptor5, _assertThisInitialized(_this));
          _this._callback1 = void 0;
          _this._callback2 = void 0;
          return _this;
        }
        var _proto = showTip.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.setTipStatus = function setTipStatus(text, callback1, callback2, strSubTip) {
          this.textcontent.string = text;
          if (strSubTip && this.textSubTip) {
            this.textSubTip.node.active = true;
            this.textSubTip.string = strSubTip;
          }
          var kind = callback2 == null ? 1 : 2;
          if (kind == 1) {
            //            // 提示确认
            this.buttonsure1.node.active = true;
            this.buttonsure2.node.active = false;
            this.buttonqx.node.active = false;
          } //提示取消
          else {
            this.buttonsure1.node.active = false;
            this.buttonsure2.node.active = true;
            this.buttonqx.node.active = true;
          }
          this._callback1 = callback1;
          this._callback2 = callback2;
        };
        _proto.tipSure = function tipSure() {
          var viewManager = MainManager.getInstance().getViewManager();
          viewManager.closePopView();
          if (this._callback1) {
            this._callback1();
          }
        };
        _proto.tipQx = function tipQx() {
          var viewManager = MainManager.getInstance().getViewManager();
          viewManager.closePopView();
          if (this._callback2) {
            this._callback2();
          }
        };
        _proto.start = function start() {};
        _proto.onDisable = function onDisable() {}
        //    // update (dt) {}
        ;

        return showTip;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buttonsure1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buttonsure2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "buttonqx", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "textcontent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "textSubTip", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/showToast.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Tween, UIOpacity, tween, v3, UITransform, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      v3 = module.v3;
      UITransform = module.UITransform;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "d0493ihAJlPWas8emInriPW", "showToast", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var showToast = exports('default', (_dec = ccclass("ShowToast"), _dec2 = property(Label), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(showToast, _Component);
        function showToast() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelBg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moveByNum", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "time1", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "time2", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "timeStay", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isRemove", _descriptor7, _assertThisInitialized(_this));
          _this._orginY = void 0;
          return _this;
        }
        var _proto = showToast.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          this._orginY = this.labelBg.getPosition().y;
        };
        _proto.onEnable = function onEnable() {
          var self = this;
          // this.labelBg.stopAllActions();
          Tween.stopAllByTarget(this.labelBg);
          Tween.stopAllByTarget(this.labelBg.getComponent(UIOpacity));
          this.labelBg.setPosition(this.labelBg.position.x, this._orginY);
          this.labelBg.getComponent(UIOpacity).opacity = 255;
          tween(this.labelBg).to(this.time1, {
            position: v3(this.labelBg.getPosition().x, this.labelBg.getPosition().y + this.moveByNum)
          }).to(this.timeStay, {
            scale: v3(1, 1, 1)
          }).delay(this.time2).call(function () {
            self.labelBg.setPosition(self.labelBg.position.x, self._orginY);
            self.labelBg.getComponent(UIOpacity).opacity = 255;
            if (self.isRemove == true) {
              self.node.removeFromParent();
              self.node.destroy();
            } else {
              self.node.active = false;
            }
          }).start();
          tween(this.labelBg.getComponent(UIOpacity)).delay(this.time1 + this.timeStay).to(this.time2, {
            opacity: 0
          }).start();
        };
        _proto.onDisable = function onDisable() {
          Tween.stopAllByTarget(this.labelBg);
        };
        _proto.setTipsText = function setTipsText(text) {
          this.label.string = text;
          this.labelBg.getComponent(UITransform).width = text.length * 30 + 150;
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        return showToast;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelBg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "moveByNum", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "time1", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "time2", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "timeStay", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "isRemove", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // const { ccclass, property } = cc._decorator;
      //
      // @ccclass
      // export default class showToast extends cc.Component {
      //     @property(cc.Label)
      //     label: cc.Label = null;
      //
      //     @property(cc.Node)
      //     labelBg: cc.Node = null;
      //
      //     @property
      //     moveByNum: number = 100;
      //
      //     @property
      //     time1: number = 0.5;
      //
      //     @property
      //     time2: number = 2;
      //
      //     @property
      //     timeStay: number = 1;
      //
      //     @property
      //     isRemove: boolean = true;
      //
      //     _orginY: number;
      //     // LIFE-CYCLE CALLBACKS:
      //
      //     onLoad() {
      //         this._orginY = this.labelBg.y;
      //     }
      //     onEnable() {
      //         let self = this;
      //         this.labelBg.stopAllActions();
      //         this.labelBg.y = this._orginY;
      //         this.labelBg.opacity = 255;
      //         cc.tween(this.labelBg)
      //             .to(this.time1, { y: this.labelBg.y + this.moveByNum })
      //             .to(this.timeStay, { scale: 1 })
      //             .to(this.time2, { opacity: 0 })
      //             .call(function () {
      //                 self.labelBg.y = self._orginY;
      //                 self.labelBg.opacity = 255;
      //                 if (self.isRemove == true) {
      //                     self.node.removeFromParent();
      //                     self.node.destroy();
      //                 } else {
      //                     self.node.active = false;
      //                 }
      //             })
      //             .start();
      //     }
      //     onDisable() {
      //         this.labelBg.stopAllActions();
      //     }
      //     setTipsText(text: string) {
      //         this.label.string = text;
      //         this.labelBg.width = text.length * 30 + 150;
      //     }
      //     start() {}
      //
      //     // update (dt) {}
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SoundMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './MainManager.ts'], function (exports) {
  var _createClass, cclegacy, assetManager, AudioClip, AudioManager, MainManager;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
      AudioClip = module.AudioClip;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5609bHG8EdErYpj3D+R6QRw", "SoundMgr", undefined);
      var SoundMgr = exports('default', /*#__PURE__*/function () {
        SoundMgr.Alloc = function Alloc(bundleName) {
          return new SoundMgr(bundleName);
        };
        function SoundMgr(bundleName) {
          this._audioMgr = null;
          this._bundleName = "";
          this._map = {};
          this._aids = {};
          this._bundleName = bundleName;
          var mMgr = MainManager.getInstance();
          this._audioMgr = mMgr ? mMgr.getAudioManager() : null;
        }
        var _proto = SoundMgr.prototype;
        _proto.StopSound = function StopSound(url) {
          var aids = this._aids[url];
          if (!aids) {
            return;
          }
          for (var i = 0; i < aids.length; ++i) {
            AudioManager.instance.stopSound(aids[i]);
          }
          this._aids[url] = [];
        };
        _proto.PlaySound = function PlaySound(url, settings) {
          var _this = this;
          var bgm = settings && settings.bgm ? settings.bgm : false;
          var mute = bgm ? this.musicMute : this.soundMute;
          if (mute) {
            return;
          }
          var audio = this._map[url];
          var volume = settings && undefined !== settings.volume && null !== settings.volume ? settings.volume : -1;
          if (volume < 0) {
            volume = bgm ? this.musicVolume : this.soundVolume;
          }
          if (audio) {
            this.PlayAutio(url, audio, bgm, volume);
          } else {
            var bundle = assetManager.getBundle(this._bundleName);
            if (!bundle) {
              gts.Debug.LogErr("# \u52A0\u8F7D Bundle \u5931\u8D25, name = " + this._bundleName);
              return;
            }
            bundle.load(url, AudioClip, function (err, resAudio) {
              if (resAudio) {
                _this._map[url] = resAudio;
                _this.PlayAutio(url, resAudio, bgm, volume);
              } else {
                gts.Debug.LogErr("" + err.toString());
              }
            });
          }
        };
        _proto.PlayAutio = function PlayAutio(url, audio, loop, volume) {
          if (!loop) {
            AudioManager.instance.playOneShot(audio);
          } else {
            if (loop) {
              AudioManager.instance.playGameMusic(audio, true);
              return;
            }
            var aid = AudioManager.instance.playSound(audio, loop);
            var arr = this._aids[url];
            if (!arr) {
              arr = [];
              this._aids[url] = arr;
            }
            arr.push(aid);
            AudioManager.instance.setFinishCallback(aid, function () {
              var idx = arr.indexOf(aid);
              if (idx >= 0) {
                arr.splice(idx, 1);
              }
              //            // gts.Debug.Log(`#SoundMgr, ${url} paly finished`);
            });
          }
        };

        _createClass(SoundMgr, [{
          key: "musicMute",
          get: function get() {
            return this._audioMgr._soundMusic ? false : true;
          }
        }, {
          key: "soundMute",
          get: function get() {
            return this._audioMgr._soundEffect ? false : true;
          }
        }, {
          key: "musicVolume",
          get: function get() {
            return 0.6;
          }
        }, {
          key: "soundVolume",
          get: function get() {
            return 1;
          }
        }]);
        return SoundMgr;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpineRunner.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "eeb43EH1khHooMHeMou+5uW", "SpineRunner", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TipsAni.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, tween, v3, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "da0acq8e8NIUbbyrXYuWkqc", "TipsAni", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TipsAni = exports('default', (_dec = ccclass("TipsAni"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TipsAni, _Component);
        function TipsAni() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = TipsAni.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          // let m1 = cc.scaleTo(0.2, 1.05);
          // let m2 = cc.scaleTo(0.2, 0.95);
          // let seq = cc.sequence([m1, m2]);
          // let repf = cc.repeatForever(seq);
          // this.node.runAction(repf);

          tween(this.node).to(0.2, {
            scale: v3(1.05, 1.05, 1)
          }).to(0.2, {
            scale: v3(0.95, 0.95, 1)
          }).union().repeatForever().start();
        }
        //    // update (dt) {}
        ;

        return TipsAni;
      }(Component)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // const { ccclass, property } = cc._decorator;
      //
      // @ccclass
      // export default class TipsAni extends cc.Component {
      //     // LIFE-CYCLE CALLBACKS:
      //
      //     // onLoad () {}
      //
      //     start() {}
      //     onEnable() {
      //         let m1 = cc.scaleTo(0.2, 1.05);
      //         let m2 = cc.scaleTo(0.2, 0.95);
      //         let seq = cc.sequence([m1, m2]);
      //         let repf = cc.repeatForever(seq);
      //         this.node.runAction(repf);
      //     }
      //
      //     // update (dt) {}
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/tweenBezier.ts", ['cc'], function () {
  var cclegacy, Tween, v3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Tween = module.Tween;
      v3 = module.v3;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c66a69BJ1NL1KOsoUejrCWY", "tweenBezier", undefined);
      Object.assign(Tween.prototype, {
        /**
         * !#en Sets target's position property according to the bezier curve.
         * !#zh 按照贝塞尔路径设置目标的 position 属性。
         * @method bezierTo
         * @param {number} duration
         * @param {cc.Vec2} c1
         * @param {cc.Vec2} c2
         * @param {cc.Vec2} to
         * @return {Tween}
         * @typescript bezierTo(duration: number, c1: Vec2, c2: Vec2, to: Vec2): Tween<T>
         */
        bezierTo: function bezierTo(duration, c1, c2, to, opts) {
          // let c0x = c1.x,
          //     c0y = c1.y,
          //     c1x = c2.x,
          //     c1y = c2.y;
          // opts = opts || Object.create(null);
          // opts.progress = function (start, end, current: Node, t) {
          //     current.setPosition(bezier(start.x, c0x, c1x, end.x, t), bezier(start.y, c0y, c1y, end.y, t));
          //     return current;
          // };
          // return this.to(duration, { position: to }, opts);
          opts = opts || Object.create(null);
          var bezier = function bezier(C1, C2, C3, C4, t) {
            var t1 = 1 - t;
            return t1 * (t1 * (C1 + (C2 * 3 - C1) * t) + C3 * 3 * t * t) + C4 * t * t * t;
          };

          // let twoBezier = (t: number, p1: Vec2, cp: Vec2, p2: Vec3) => {
          //     let x = (1 - t) * (1 - t) * p1.x + 2 * t * (1 - t) * cp.x + t * t * p2.x;
          //     let y = (1 - t) * (1 - t) * p1.y + 2 * t * (1 - t) * cp.y + t * t * p2.y;
          //     return v3(x, y, 0);
          // };
          opts.onUpdate = function (target, ratio) {
            var x = bezier(target.position.x, c1.x, c2.x, to.x, ratio);
            var y = bezier(target.position.y, c1.y, c2.y, to.y, ratio);
            // target.position = twoBezier(ratio, c1, c2, to);
            // console.log("opts.onUpdate", x, y, target);
            // target.setPosition(x, y);
            target.position = v3(x, y, 0);
          };
          // return tween(target).to(duration, {}, opts);
          return this.to(duration, {
            position: to
          }, opts);
        },
        /**
         * 3阶贝塞尔曲线
         * @param target
         * @param t
         * @param p1
         * @param cp1
         * @param cp2
         * @param p2
         * @param opts
         * @returns
         */
        bezierTo3: function bezierTo3(t, p1, cp1, cp2, p2, opts) {
          if (opts === void 0) {
            opts = null;
          }
          opts = opts || Object.create(null);
          var threeBezier = function threeBezier(t, p1, cp1, cp2, p2) {
            var x = (1 - t) * (1 - t) * (1 - t) * p1.x + 3 * t * (1 - t) * (1 - t) * cp1.x + 3 * t * t * (1 - t) * cp2.x + t * t * t * p2.x;
            var y = (1 - t) * (1 - t) * (1 - t) * p1.y + 3 * t * (1 - t) * (1 - t) * cp1.y + 3 * t * t * (1 - t) * cp2.y + t * t * t * p2.y;
            var z = (1 - t) * (1 - t) * (1 - t) * p1.z + 3 * t * (1 - t) * (1 - t) * cp1.z + 3 * t * t * (1 - t) * cp2.z + t * t * t * p2.z;
            return v3(x, y, z);
          };
          opts.onUpdate = function (target, ratio) {
            target.position = threeBezier(ratio, p1, cp1, cp2, p2);
          };
          return this.to(t, {}, opts);
        },
        bezierTo3W: function bezierTo3W(t, p1, cp1, cp2, p2, opts) {
          if (opts === void 0) {
            opts = null;
          }
          opts = opts || Object.create(null);
          var threeBezier = function threeBezier(t, p1, cp1, cp2, p2) {
            var x = (1 - t) * (1 - t) * (1 - t) * p1.x + 3 * t * (1 - t) * (1 - t) * cp1.x + 3 * t * t * (1 - t) * cp2.x + t * t * t * p2.x;
            var y = (1 - t) * (1 - t) * (1 - t) * p1.y + 3 * t * (1 - t) * (1 - t) * cp1.y + 3 * t * t * (1 - t) * cp2.y + t * t * t * p2.y;
            var z = (1 - t) * (1 - t) * (1 - t) * p1.z + 3 * t * (1 - t) * (1 - t) * cp1.z + 3 * t * t * (1 - t) * cp2.z + t * t * t * p2.z;
            return v3(x, y, z);
          };
          opts.onUpdate = function (target, ratio) {
            target.worldPosition = threeBezier(ratio, p1, cp1, cp2, p2);
            if (opts.updateCb) {
              opts.updateCb();
            }
          };
          return this.to(t, {}, opts);
        },
        /**
         * !#en Sets target's position property according to the bezier curve.
         * !#zh 按照贝塞尔路径设置目标的 position 属性。
         * @method bezierBy
         * @param {number} duration
         * @param {cc.Vec2} c1
         * @param {cc.Vec2} c2
         * @param {cc.Vec2} to
         * @return {Tween}
         * @typescript bezierBy(duration: number, c1: Vec2, c2: Vec2, to: Vec2): Tween<T>
         */
        bezierBy: function bezierBy(duration, c1, c2, to, opts) {
          opts = opts || Object.create(null);
          var twoBezier = function twoBezier(t, p1, cp, p2) {
            var x = (1 - t) * (1 - t) * p1.x + 2 * t * (1 - t) * cp.x + t * t * p2.x;
            var y = (1 - t) * (1 - t) * p1.y + 2 * t * (1 - t) * cp.y + t * t * p2.y;
            return v3(x, y, 0);
          };
          opts.onUpdate = function (target, ratio) {
            target.position = twoBezier(ratio, c1, c2, to);
          };
          // return tween(target).to(duration, {}, opts);
          return this.by(duration, {
            position: to
          }, opts);
        },
        /**
        //     *  创建抖动动画
        //     * @param {number} duration     动画持续时长
        //     * @param {number} strength_x   抖动幅度: x方向
        //     * @param {number} strength_y   抖动幅度: y方向
        //     * @returns {Shake}
        //     */
        shake: function shake(duration, strength_x, strength_y, opts) {
          opts = opts || Object.create(null);
          var fgRangeRand = function fgRangeRand(min, max) {
            var rnd = Math.random();
            return rnd * (max - min) + min;
          };
          // public update(time: number): void {
          //     let randx = this.fgRangeRand(-this._strength_x, this._strength_x);
          //     let randy = this.fgRangeRand(-this._strength_y, this._strength_y);
          //     this.getTarget().setPosition(randx + this._initial_x, randy + this._initial_y);
          // }
          var node = this._target;
          var x = node.position.x;
          var y = node.position.y;
          opts.onComplete = function (target) {
            target.position = v3(x, y, 0);
          };
          opts.onUpdate = function (target, ratio) {
            var randx = fgRangeRand(-strength_x, strength_x);
            var randy = fgRangeRand(-strength_y, strength_y);
            target.position = v3(x + randx, y + randy, 0);
          };
          return this.to(duration, {}, opts);
        },
        blink: function blink(duration, times, opts) {
          var slice = 1.0 / times;
          opts = opts || Object.create(null);
          opts.progress = function (start, end, current, t) {
            if (t >= 1) {
              return start;
            } else {
              var m = t % slice;
              return m > slice / 2 ? 255 : 0;
            }
          };
          return this.to(duration, {
            opacity: 1
          }, opts);
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIClock.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Sprite, Label, Color, find, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Label = module.Label;
      Color = module.Color;
      find = module.find;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "af27aIKvDRPfLOCEaWMAkg9", "UIClock", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var UIClock = exports('default', (_dec = ccclass("UIClock"), _dec2 = menu("game/Clock/Clock"), _dec3 = property({
        type: Sprite,
        visible: true
      }), _dec4 = property({
        type: Label,
        visible: true
      }), _dec5 = property({}), _dec6 = property({
        displayName: "是否毫秒模式",
        visible: true
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIClock, _Component);
        function UIClock() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._bined = false;
          _this._hideTime = false;
          _this.nColor = Color.WHITE;
          _this.cColor = Color.RED;
          _initializerDefineProperty(_this, "_bg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_labTime", _descriptor2, _assertThisInitialized(_this));
          //    // @property({ type: BMPFont, visible: true })
          //    // private _bmpLab: BMPFont = null;
          _initializerDefineProperty(_this, "fixEnd", _descriptor3, _assertThisInitialized(_this));
          _this._time = -1;
          _this._autoHideOnZero = false;
          _initializerDefineProperty(_this, "_isMs", _descriptor4, _assertThisInitialized(_this));
          _this._changeColor = false;
          return _this;
        }
        var _proto = UIClock.prototype;
        //    // @property(cc.Node)
        //    // bindNode: cc.Node = null;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.GetBindNode = function GetBindNode() {
          //        // return this.bindNode ? this.bindNode : this.node;
          return this.node;
        };
        UIClock.Bind = function Bind(node) {
          //        // this.bindNode = node;
          //        // this.DoBind();
          var c = node.addComponent(UIClock);
          c.DoBind();
          return c;
        };
        _proto.DoBind = function DoBind() {
          if (this._bined) {
            return;
          }
          this._bined = true;
          if (!this._bg) {
            var ndBg = find(this.bgPath, this.GetBindNode());
            this._bg = ndBg ? ndBg.getComponent(Sprite) : null;
          }
          //        // if (!this._labTime) {
          //        //     this._labTime = cc.find(this.timePath, this.GetBindNode()).getComponent(cc.Label);
          //        // }
        };

        _proto.setLabelColor = function setLabelColor(nomal, change) {
          if (nomal === void 0) {
            nomal = Color.WHITE;
          }
          if (change === void 0) {
            change = Color.RED;
          }
          this.nColor = nomal;
          this.cColor = change;
        };
        _proto.setLabelPosY = function setLabelPosY(posY) {
          if (posY === void 0) {
            posY = 0;
          }
          this._labTime.node.getPosition().y = posY;
        };
        _proto.onLoad = function onLoad() {
          this.DoBind();
        };
        _proto.start = function start() {};
        _proto.update = function update(dt) {
          if (this._time > 0) {
            this._time -= dt * (this._isMs ? 1000 : 1);
            if (this._time <= 0) {
              this._time = 0;
              if (this._autoHideOnZero) {
                this.node.active = false;
              }
            }
            var s = Math.floor(this._time / (this._isMs ? 1000 : 1));
            this._labTime.color = !this._changeColor || s > 3 ? this.nColor : this.cColor;
            if (!this._hideTime) {
              this.SetLabel("" + s + this.fixEnd);
            } else {
              var cnt = 3 - s % 3;
              var str = "";
              for (var i = 0; i < cnt; ++i) {
                str += ".";
              }
              this.SetLabel(str);
            }
          }
        };
        _proto.SetLabel = function SetLabel(value) {
          if (this._labTime) {
            this._labTime.string = value;
          }

          //        // if (this._bmpLab) {
          //        //     this._bmpLab.string = value;
          //        // }
        };

        _proto.Open = function Open(time, autoHideOnZero) {
          if (autoHideOnZero === void 0) {
            autoHideOnZero = false;
          }
          this._time = time;
          this._autoHideOnZero = autoHideOnZero;
          this.node.active = true;
          var stime = time >= 0 ? "" + time + this.fixEnd : "...";
          this.SetLabel(stime);
        };
        _proto.Close = function Close() {
          this.node.active = false;
          this._time = -1;
        };
        _proto.leftTime = function leftTime() {
          return Math.floor(this._time / (this._isMs ? 1000 : 1));
        };
        _createClass(UIClock, [{
          key: "hideTime",
          get: function get() {
            return this._hideTime;
          },
          set: function set(value) {
            this._hideTime = value;
            this._labTime.node.getPosition().y = value ? 8 : 0;
          }
        }, {
          key: "bgPath",
          get: function get() {
            return "bg";
          }
        }, {
          key: "timePath",
          get: function get() {
            return "time";
          }
        }, {
          key: "visible",
          get: function get() {
            return this.GetBindNode() ? this.GetBindNode().active : false;
          },
          set: function set(value) {
            if (!this.GetBindNode()) {
              return;
            }
            this.GetBindNode().active = value;
          }
        }, {
          key: "changeColor",
          set: function set(isChange) {
            this._changeColor = isChange;
          }
        }]);
        return UIClock;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_labTime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "fixEnd", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_isMs", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // const { ccclass, property, menu } = cc._decorator;
      //
      // @ccclass
      // @menu("game/Clock/Clock")
      // export default class UIClock extends cc.Component {
      //     // @property(cc.Node)
      //     // bindNode: cc.Node = null;
      //
      //     // LIFE-CYCLE CALLBACKS:
      //     public GetBindNode(): cc.Node {
      //         // return this.bindNode ? this.bindNode : this.node;
      //         return this.node;
      //     }
      //
      //     public static Bind(node: cc.Node): UIClock {
      //         // this.bindNode = node;
      //         // this.DoBind();
      //         let c: UIClock = node.addComponent(UIClock);
      //         c.DoBind();
      //         return c;
      //     }
      //
      //     private _bined: boolean = false;
      //     private DoBind() {
      //         if (this._bined) {
      //             return;
      //         }
      //         this._bined = true;
      //         if (!this._bg) {
      //             let ndBg = cc.find(this.bgPath, this.GetBindNode());
      //             this._bg = ndBg ? ndBg.getComponent(cc.Sprite) : null;
      //         }
      //         // if (!this._labTime) {
      //         //     this._labTime = cc.find(this.timePath, this.GetBindNode()).getComponent(cc.Label);
      //         // }
      //     }
      //
      //     private _hideTime: boolean = false;
      //     public set hideTime(value: boolean) {
      //         this._hideTime = value;
      //         this._labTime.node.y = value ? 8 : 0;
      //     }
      //
      //     nColor: cc.Color = cc.Color.WHITE;
      //     cColor: cc.Color = cc.Color.RED;
      //
      //     setLabelColor(nomal: cc.Color = cc.Color.WHITE, change: cc.Color = cc.Color.RED) {
      //         this.nColor = nomal;
      //         this.cColor = change;
      //     }
      //
      //     setLabelPosY(posY = 0) {
      //         this._labTime.node.y = posY;
      //     }
      //
      //     public get hideTime(): boolean {
      //         return this._hideTime;
      //     }
      //
      //     @property({
      //         type: cc.Sprite,
      //         visible: true,
      //     })
      //     private _bg: cc.Sprite = null;
      //
      //     @property({
      //         type: cc.Label,
      //         visible: true,
      //     })
      //     private _labTime: cc.Label = null;
      //
      //     // @property({ type: BMPFont, visible: true })
      //     // private _bmpLab: BMPFont = null;
      //
      //     @property({})
      //     fixEnd: string = "";
      //
      //     public get bgPath(): string {
      //         return "bg";
      //     }
      //
      //     public get timePath(): string {
      //         return "time";
      //     }
      //
      //     public set visible(value: boolean) {
      //         if (!this.GetBindNode()) {
      //             return;
      //         }
      //
      //         this.GetBindNode().active = value;
      //     }
      //
      //     public get visible(): boolean {
      //         return this.GetBindNode() ? this.GetBindNode().active : false;
      //     }
      //
      //     onLoad() {
      //         this.DoBind();
      //     }
      //
      //     start() {}
      //
      //     update(dt: number) {
      //         if (this._time > 0) {
      //             this._time -= dt * (this._isMs ? 1000 : 1);
      //             if (this._time <= 0) {
      //                 this._time = 0;
      //                 if (this._autoHideOnZero) {
      //                     this.node.active = false;
      //                 }
      //             }
      //             let s = Math.floor(this._time / (this._isMs ? 1000 : 1));
      //             this._labTime.node.color = !this._changeColor || s > 3 ? this.nColor : this.cColor;
      //             if (!this._hideTime) {
      //                 this.SetLabel(`${s}${this.fixEnd}`);
      //             } else {
      //                 let cnt = 3 - (s % 3);
      //                 let str = "";
      //                 for (let i = 0; i < cnt; ++i) {
      //                     str += ".";
      //                 }
      //                 this.SetLabel(str);
      //             }
      //         }
      //     }
      //
      //     protected SetLabel(value: string) {
      //         if (this._labTime) {
      //             this._labTime.string = value;
      //         }
      //
      //         // if (this._bmpLab) {
      //         //     this._bmpLab.string = value;
      //         // }
      //     }
      //
      //     private _time: number = -1;
      //     private _autoHideOnZero: boolean = false;
      //     @property({ displayName: "是否毫秒模式", visible: true })
      //     private _isMs: boolean = false;
      //     public Open(time: number, autoHideOnZero: boolean = false) {
      //         this._time = time;
      //         this._autoHideOnZero = autoHideOnZero;
      //         this.node.active = true;
      //         let stime = time >= 0 ? `${time}${this.fixEnd}` : "...";
      //         this.SetLabel(stime);
      //     }
      //
      //     public Close() {
      //         this.node.active = false;
      //         this._time = -1;
      //     }
      //
      //     public leftTime() {
      //         return Math.floor(this._time / (this._isMs ? 1000 : 1));
      //     }
      //     _changeColor: boolean = false;
      //     set changeColor(isChange: boolean) {
      //         this._changeColor = isChange;
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIDialog.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoEventNode.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, CCInteger, UIOpacity, BlockInputEvents, v3, tween, AutoEventNode;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      CCInteger = module.CCInteger;
      UIOpacity = module.UIOpacity;
      BlockInputEvents = module.BlockInputEvents;
      v3 = module.v3;
      tween = module.tween;
    }, function (module) {
      AutoEventNode = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "961b5vLExFA1IVU9qzkX5yH", "UIDialog", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIDialog = exports('default', (_dec = ccclass("UIDialog"), _dec2 = property({
        displayName: "背景mask节点",
        type: Node
      }), _dec3 = property({
        displayName: "Mask透明度",
        type: CCInteger,
        range: [0, 255]
      }), _dec4 = property({
        displayName: "Mask层将阻挡触摸"
      }), _dec5 = property({
        displayName: "对话框内容节点",
        type: Node,
        visible: true
      }), _dec6 = property({
        displayName: "关闭按钮",
        type: Node,
        visible: true
      }), _dec7 = property({
        displayName: "关闭后销毁",
        visible: true
      }), _dec8 = property({
        displayName: "动画时间",
        visible: true
      }), _dec9 = property({
        displayName: "最小缩放",
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(UIDialog, _AutoEventNode);
        function UIDialog() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "maskBgNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maskBgNodeAlpha", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maskBgBlockInputEvents", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_dlgFrame", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_btnClose", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_destoryOnClosed", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_duration", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_minScale", _descriptor8, _assertThisInitialized(_this));
          //    // LIFE-CYCLE CALLBACKS:
          //    // onLoad () {}
          _this._allowOpt = true;
          return _this;
        }
        var _proto = UIDialog.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          if (this.maskBgNode) {
            this.maskBgNode.getComponent(UIOpacity).opacity = this.maskBgNodeAlpha;
            if (this.maskBgBlockInputEvents && !this.maskBgNode.getComponent(BlockInputEvents)) {
              this.maskBgNode.addComponent(BlockInputEvents);
            }
          }
          gts.UI.OnClick(this._btnClose, function () {
            _this2.Close(function () {
              _this2.OnClosed();
            }, _this2);
          }, this);
        };
        _proto.start = function start() {
          _AutoEventNode.prototype.start.call(this);
        };
        _proto.OnClosed = function OnClosed() {
          if (this._destoryOnClosed) {
            this.node.removeFromParent();
            this.node.destroy();
          } else {
            this.node.active = false;
          }
        };
        _proto.Open = function Open() {
          var _this3 = this;
          if (!this._allowOpt) {
            return;
          }
          this._allowOpt = false;
          var dlg = this.dlgFrame;
          if (dlg) {
            dlg.active = true;
            dlg.getComponent(UIOpacity).opacity = 0;
            dlg.scale = v3(this._minScale, this._minScale);
            this.scheduleOnce(function () {
              tween(dlg).stop().to(_this3._duration, {
                scale: v3(1, 1, 1)
              }, {
                easing: "backOut"
              }).call(function () {
                _this3._allowOpt = true;
              }).start();
              tween(dlg.getComponent(UIOpacity)).stop().to(_this3._duration, {
                opacity: 255
              }, {
                easing: "backOut"
              }).call(function () {}).start();
            }, 0.1);
          }
          this.MaskAct(this, true);
        };
        _proto.Close = function Close(closedNotify, closedCaller) {
          var _this4 = this;
          if (!this._allowOpt) {
            return;
          }
          var cb = closedNotify ? closedCaller ? closedNotify.bind(closedCaller) : closedNotify : function () {};
          var dlg = this.dlgFrame;
          if (dlg) {
            dlg.active = true;
            tween(dlg).stop().to(this._duration, {
              scale: v3(this._minScale, this._minScale, 1)
            }, {
              easing: "backIn"
            }).call(function () {
              cb(_this4.node);
              dlg.active = false;
              _this4._allowOpt = true;
            }).start();
            tween(dlg.getComponent(UIOpacity)).stop().to(this._duration, {
              opacity: 0
            }, {
              easing: "backOut"
            }).call(function () {}).start();
          }
          this.MaskAct(this, true);
        };
        _proto.MaskAct = function MaskAct(frame, visible) {
          var mask = frame ? frame.dlgMask : null;
          if (mask && mask.node) {
            mask.node.active = true;
            mask.node.getComponent(UIOpacity).opacity = visible ? 0 : mask.maxAlpha;
            tween(mask.node.getComponent(UIOpacity)).stop().to(this._duration, {
              opacity: visible ? mask.maxAlpha : 0
            }).start();
          }
        }
        //    // update (dt) {}
        ;

        _createClass(UIDialog, [{
          key: "dlgFrame",
          get:
          //    /** 对话框内容节点 */
          function get() {
            return this._dlgFrame;
          }
          //    /** 对话框背景遮罩 */
        }, {
          key: "dlgMask",
          get: function get() {
            return {
              node: this.maskBgNode,
              maxAlpha: this.maskBgNodeAlpha
            };
          }
        }]);
        return UIDialog;
      }(AutoEventNode), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "maskBgNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maskBgNodeAlpha", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 180;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maskBgBlockInputEvents", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_dlgFrame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_btnClose", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_destoryOnClosed", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_duration", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.25;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_minScale", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.8;
        }
      })), _class2)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import ActDlgShow from "./ActDlgShow";
      // import AutoEventNode from "./AutoEventNode";
      //
      // const { ccclass, property } = cc._decorator;
      //
      // @ccclass
      // export default class UIDialog extends AutoEventNode {
      //     @property({ displayName: "背景mask节点", type: cc.Node })
      //     protected maskBgNode: cc.Node = null;
      //
      //     @property({ displayName: "Mask透明度", type: cc.Integer, range: [0, 255] })
      //     protected maskBgNodeAlpha: number = 180;
      //
      //     @property({ displayName: "Mask层将阻挡触摸" })
      //     protected maskBgBlockInputEvents: boolean = true;
      //
      //     @property({ displayName: "对话框内容节点", type: cc.Node, visible: true })
      //     protected _dlgFrame: cc.Node = null;
      //
      //     @property({ displayName: "关闭按钮", type: cc.Node, visible: true })
      //     protected _btnClose: cc.Node = null;
      //
      //     @property({ displayName: "关闭后销毁", visible: true })
      //     protected _destoryOnClosed: boolean = true;
      //
      //     /** 对话框内容节点 */
      //     public get dlgFrame(): cc.Node {
      //         return this._dlgFrame;
      //     }
      //     /** 对话框背景遮罩 */
      //     public get dlgMask(): { node: cc.Node; maxAlpha: number } {
      //         return { node: this.maskBgNode, maxAlpha: this.maskBgNodeAlpha };
      //     }
      //
      //     // LIFE-CYCLE CALLBACKS:
      //
      //     onLoad() {
      //         if (this.maskBgNode) {
      //             this.maskBgNode.opacity = this.maskBgNodeAlpha;
      //             if (this.maskBgBlockInputEvents && !this.maskBgNode.getComponent(cc.BlockInputEvents)) {
      //                 this.maskBgNode.addComponent(cc.BlockInputEvents);
      //             }
      //         }
      //
      //         gts.UI.OnClick(
      //             this._btnClose,
      //             () => {
      //                 let act = this.node.getComponent(ActDlgShow);
      //                 if (act) {
      //                     act.Close(() => {
      //                         this.OnClosed();
      //                     }, this);
      //                 } else {
      //                     this.OnClosed();
      //                 }
      //             },
      //             this
      //         );
      //     }
      //
      //     start() {
      //         super.start();
      //     }
      //
      //     protected OnClosed() {
      //         if (this._destoryOnClosed) {
      //             this.node.removeFromParent();
      //             this.node.destroy();
      //         } else {
      //             this.node.active = false;
      //         }
      //     }
      //
      //     public Open() {
      //         this.node.active = true;
      //         let act = this.getComponent(ActDlgShow);
      //         if (act) {
      //             act.Open();
      //         } else {
      //         }
      //     }
      //     // update (dt) {}
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UITransformEx.ts", ['cc'], function () {
  var cclegacy, UITransform;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      UITransform = module.UITransform;
    }],
    execute: function () {
      cclegacy._RF.push({}, "50028xQwPVBNZF/9tJAvcZX", "UITransformEx", undefined);
      (function () {
        //@ts-ignore
        UITransform._sortChildrenSibling = function (node) {
          var siblings = node.children;
          if (siblings) {
            siblings.sort(function (a, b) {
              var aComp = a._uiProps.uiTransformComp;
              var bComp = b._uiProps.uiTransformComp;
              //@ts-ignore
              var ca = aComp ? aComp._priority : 0;
              //@ts-ignore
              var cb = bComp ? bComp._priority : 0;
              var diff = ca - cb;
              if (diff === 0) return a.getSiblingIndex() - b.getSiblingIndex();
              return diff;
            });
            if (node._setChildren) {
              node._setChildren(siblings);
            }
          }
        };
      })();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/unSchedulerTimer.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // import { Director, director, Scheduler } from "cc";
      cclegacy._RF.push({}, "d5191AFRCVM3b2qHp0sN864", "unSchedulerTimer", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UpdateManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseEvent.ts', './GameDef.ts', './ConfigManager.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, BaseEvent, GameDef, ConfigManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseEvent = module.BaseEvent;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      ConfigManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c9ac1dHuVlG5b5may3bCjkS", "UpdateManager", undefined);
      var UpdateState = exports('UpdateState', /*#__PURE__*/function (UpdateState) {
        UpdateState[UpdateState["NORMAL"] = 0] = "NORMAL";
        UpdateState[UpdateState["ERROR"] = 1] = "ERROR";
        UpdateState[UpdateState["PROCESS"] = 2] = "PROCESS";
        UpdateState[UpdateState["FINISH"] = 3] = "FINISH";
        return UpdateState;
      }({}));
      var UpdateManager = exports('default', /*#__PURE__*/function (_BaseEvent) {
        _inheritsLoose(UpdateManager, _BaseEvent);
        function UpdateManager() {
          var _this;
          _this = _BaseEvent.call(this) || this;
          _this._versionCache = void 0;
          _this._loadCache = void 0;
          _this._state = void 0;
          _this._assetManager = null;
          _this._nativeUrl = void 0;
          _this.storagePath = void 0;
          _this._version = "1.0.0";
          _this.serverUrl = void 0;
          _this.gameType = void 0;
          _this._versionCache = new Map();
          _this._loadCache = new Map();
          return _this;
        }
        var _proto = UpdateManager.prototype;
        _proto.cacheVersion = function cacheVersion(data) {
          this.serverUrl = data.url;
          console.log("set serverurl", this.serverUrl);
          var list = data.list;
          for (var _iterator = _createForOfIteratorHelperLoose(list), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
            var gameType = GameDef.GameMap[i.code];
            if (gameType) {
              this._versionCache.set(gameType, i.currentVersion);
            }
          }
        };
        _proto.checkVersion = function checkVersion(gameType) {
          if (gameType === void 0) {
            gameType = "hall";
          }
          console.log("check update", gameType);
          this.gameType = gameType;
          this.changeState(UpdateState.FINISH);
        };
        _proto.getVersion = function getVersion() {
          return this._version;
        };
        _proto.getCacheVersion = function getCacheVersion(gameType) {
          return this._versionCache.get(gameType);
        };
        _proto.versionCompareHandle = function versionCompareHandle(versionA, versionB) {
          console.log("versionCompareHandle", versionA, versionB);
          var vA = versionA.split(".");
          var vB = versionB.split(".");
          for (var i = 0; i < vA.length; ++i) {
            var a = parseInt(vA[i]);
            var b = parseInt(vB[i] || 0);
            if (a === b) {
              continue;
            } else {
              return a - b;
            }
          }
          if (vB.length > vA.length) {
            return -1;
          } else {
            return 0;
          }
        };
        _proto.retry = function retry() {
          this._assetManager.downloadFailedAssets();
        };
        _proto.changeState = function changeState(state) {
          this._state = state;
          switch (state) {
            case UpdateState.ERROR:
              this.emit(ConfigManager.getInstance().eventTransform.hotUpdateFinish, this.gameType);
              this.gameType = null;
              if (this._assetManager) {
                this._assetManager.setEventCallback(null);
                this._assetManager = null;
              }
              break;
            case UpdateState.FINISH:
              this._loadCache.set(this.gameType, true);
              this.emit(ConfigManager.getInstance().eventTransform.hotUpdateFinish, this.gameType);
              this.gameType = null;
              if (this._assetManager) {
                this._assetManager.setEventCallback(null);
                this._assetManager = null;
              }
              break;
          }
        };
        _createClass(UpdateManager, null, [{
          key: "instance",
          get: function get() {
            if (!this._ins) {
              this._ins = new UpdateManager();
            }
            return this._ins;
          }
        }]);
        return UpdateManager;
      }(BaseEvent));
      UpdateManager._ins = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/updateText.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, MainManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "338e00RE29AB4yiGw3XLvEx", "updateText", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var updateText = exports('default', (_dec = ccclass("UpdateText"), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(updateText, _Component);
        function updateText() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));
          _this._eventManager = void 0;
          _this._count = 4;
          _this._text = void 0;
          return _this;
        }
        var _proto = updateText.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          this._eventManager = MainManager.getInstance().getEventManager();
          this._eventManager.on("changeText", this.changeText, this);
        };
        _proto.start = function start() {};
        _proto.changeText = function changeText(text) {
          if (text == "") {
            this.unschedule(this.textAction);
            this.node.active = false;
            return;
          }
          this._text = text;
          this._count = 4;
          this.unschedule(this.textAction);
          this.schedule(this.textAction, 0.3);
        };
        _proto.textAction = function textAction() {
          this.label.string = this._text;
          this._count = this._count + 1;
          if (this._count > 4) {
            this._count = 0;
          }
          for (var i = 0; i < this._count; i++) {
            this.label.string = this.label.string + ".";
          }
        };
        _proto.onDisable = function onDisable() {
          this.unschedule(this.textAction);
        }
        //    // update (dt) {}
        ;

        return updateText;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import EventManager from "../manager/EventManager";
      // import MainManager from "../manager/MainManager";
      //
      // const { ccclass, property } = cc._decorator;
      //
      // @ccclass
      // export default class updateText extends cc.Component {
      //     @property(cc.Label)
      //     label: cc.Label = null;
      //
      //     _eventManager: EventManager;
      //     _count: number = 4;
      //     _text: string;
      //     // LIFE-CYCLE CALLBACKS:
      //
      //     onLoad() {
      //         this._eventManager = MainManager.getInstance().getEventManager();
      //         this._eventManager.on("changeText", this.changeText, this);
      //     }
      //
      //     start() {}
      //     changeText(text: string) {
      //         if (text == "") {
      //             this.unschedule(this.textAction);
      //             this.node.active = false;
      //             return;
      //         }
      //         this._text = text;
      //         this._count = 4;
      //         this.unschedule(this.textAction);
      //         this.schedule(this.textAction, 0.3);
      //     }
      //     textAction() {
      //         this.label.string = this._text;
      //         this._count = this._count + 1;
      //         if (this._count > 4) {
      //             this._count = 0;
      //         }
      //         for (let i = 0; i < this._count; i++) {
      //             this.label.string = this.label.string + ".";
      //         }
      //     }
      //     onDisable() {
      //         this.unschedule(this.textAction);
      //     }
      //     // update (dt) {}
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/URLUtil.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7d3faBrbNRBmJhTbaR204CS", "URLUtil", undefined);
      var URLUtil = exports('URLUtil', /*#__PURE__*/function () {
        function URLUtil() {
          this.params = void 0;
          this.params = new Map();
          this.initParams();
        }
        var _proto = URLUtil.prototype;
        _proto.initParams = function initParams() {
          var search = window.location.search;
          if (search[0] == "?") {
            search = search.substring(1);
          }
          var keyValueList = search.split("&");
          for (var i = 0; i < keyValueList.length; i++) {
            var keyValue = keyValueList[i].split("=");
            var key = keyValue[0];
            var value = keyValue[1];
            this.params.set(key, value);
          }
        };
        _proto.getValue = function getValue(key) {
          var value = this.params.get(key);
          if (value === undefined) {
            return "";
          }
          return value;
        };
        _createClass(URLUtil, [{
          key: "key",
          get: function get() {
            return this.getValue("key");
          }
        }, {
          key: "currency",
          get: function get() {
            var c = this.getValue("currency");
            if (c == "BRL") {
              return "R$";
            }
            if (c == "NGN") {
              return "₦";
            }
            if (c == "MXN") {
              return "Mex$";
            }
            if (c == "BDT") {
              return "৳";
            }
            return "R$";
          }
        }, {
          key: "currencyCode",
          get: function get() {
            var currency = this.getValue("currency");
            if (!currency) {
              currency = "BRL";
            }
            return currency;
          }
        }, {
          key: "lang",
          get: function get() {
            var language = this.getValue("lang");
            if (!language) {
              language = "pt";
            }
            return language;
          }
        }, {
          key: "ssoKey",
          get: function get() {
            return this.getValue("ssoKey");
          }
        }, {
          key: "gameId",
          get: function get() {
            return this.getValue("gameId");
          }
        }, {
          key: "userId",
          get: function get() {
            return this.getValue("userid");
          }
        }, {
          key: "appId",
          get: function get() {
            return this.getValue("appid");
          }
        }]);
        return URLUtil;
      }());
      var urlUtil = exports('urlUtil', new URLUtil());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Util.ts", ['cc'], function (exports) {
  var cclegacy, assetManager, Texture2D;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
      Texture2D = module.Texture2D;
    }],
    execute: function () {
      cclegacy._RF.push({}, "06999Rr+udPIqXj3wiRILb/", "Util", undefined);
      var YDUtil = /*#__PURE__*/function () {
        function YDUtil() {}
        var _proto = YDUtil.prototype;
        /**
         * @description: 根据uiName获取prefab路径
         * @param {string} uiName
         * @return {*}
         */
        _proto.getPrefabPath = function getPrefabPath(uiName) {
          var prefabName = "prefab/" + uiName.replace(/\./g, "/");
          return prefabName;
        }

        /**
         * @description: 获取节点同名脚本
         * @param {cc} node
         * @return {*}
         */;
        _proto.getScript = function getScript(node) {
          var sc = node.getComponent(node.name);
          return sc;
        }

        /**
         * 获取纹理使用情况
         */;
        _proto.getTextureUsage = function getTextureUsage() {
          var count = 0,
            memory = 0;
          assetManager.assets.forEach(function (asset, key) {
            if (asset instanceof Texture2D) {
              count++;
              var pixelSize = asset["_native"] === ".jpg" ? 3 : 4,
                textureSize = asset.width * asset.height * pixelSize / (1024 * 1024);
              memory += textureSize;
            }
          });
          return {
            count: count,
            memory: memory
          };
        };
        return YDUtil;
      }();
      var Util = exports('default', new YDUtil());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ViewManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './GameDef.ts', './HallProxy.ts', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './UpdateManager.ts', './showToast.ts', './showTip.ts', './viewPop.ts', './MiniGameMoveOpacity.ts', './fitCanvas.ts', './Common.ts'], function (exports) {
  var _createClass, cclegacy, assetManager, instantiate, sys, resources, Prefab, isValid, director, UITransform, v2, find, Label, view, v3, game, Scene, Game, i18n, GameDef, HallProxy, AudioManager, ConfigManager, EventManager, NetManager, UpdateManager, showToast, showTip, viewPop, MiniGameMoveOpacity, fitCanvas, Common;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
      instantiate = module.instantiate;
      sys = module.sys;
      resources = module.resources;
      Prefab = module.Prefab;
      isValid = module.isValid;
      director = module.director;
      UITransform = module.UITransform;
      v2 = module.v2;
      find = module.find;
      Label = module.Label;
      view = module.view;
      v3 = module.v3;
      game = module.game;
      Scene = module.Scene;
      Game = module.Game;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      HallProxy = module.default;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      UpdateManager = module.default;
    }, function (module) {
      showToast = module.default;
    }, function (module) {
      showTip = module.default;
    }, function (module) {
      viewPop = module.default;
    }, function (module) {
      MiniGameMoveOpacity = module.default;
    }, function (module) {
      fitCanvas = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "929d55K8ixHM6f/HZPI4u8O", "ViewManager", undefined);
      var ViewManager = exports('default', /*#__PURE__*/function () {
        function ViewManager() {
          this._currentScene = void 0;
          this._currentPopNode = void 0;
          this._popArr = [];
          this._popgameArr = {};
          this._popGameName = [];
          //    //模块缓存
          //    // _buddles = {};
          this._bundles = [];
          this._miniBundles = [];
          this._curBundle = null;
          //    //网络相关标识
          this._nettips = null;
          this._serverid = void 0;
          this.tableid = void 0;
          //    //登录相关标识
          this._gameData = null;
          this._numPop = 0;
          this._wait = null;
          this._isWait = false;
          this._sceneName = "";
          this._isReturnning = false;
          //    //首次弹窗标识
          this.isTanFitst = false;
          //    //游戏连接检测
          this._checkGameType = null;
          this.specialGame = null;
          // 特殊标记，为了解决yxx 、yxxmini问题
          this.hasVideo = false;
          this.isVerticalScene = false;
          //    //迷你浮窗
          this._miniLayer = null;
          //    //聊天
          this.iChatView = null;
          game.on(Game.EVENT_HIDE, function () {
            gts.Debug.Log("hide:close wait service");
            NetManager.instance.removeWaitServicePush();
            EventManager.instance.dispatch("gameHide", null);
            AudioManager.instance.pauseAll();
          });
          game.on(Game.EVENT_SHOW, function () {
            NetManager.instance.waitServiceSendData();
            EventManager.instance.dispatch("gameShow", null);
            AudioManager.instance.resumAll();
          });
          window.onresize = function () {
            //            // MainManager.getInstance().getEventManager().dispatch("resize",null);
          }.bind(this);
          EventManager.getInstance().on(ConfigManager.getInstance().eventTransform.account_disConnect, this.account_disConnect, this);
          EventManager.getInstance().on(ConfigManager.getInstance().eventTransform.checkGame, this.checkGame, this);
          EventManager.getInstance().on(ConfigManager.getInstance().protocolHall.checkGame, this.enterGame, this);
          UpdateManager.instance.on(ConfigManager.getInstance().eventTransform.hotUpdateFinish, this.updateFinish, this);
          UpdateManager.instance.on(ConfigManager.getInstance().eventTransform.reConnect, this.reconnect, this);
          EventManager.instance.on(ConfigManager.getInstance().eventTransform.reConnect, this.reconnect, this);
        }
        var _proto = ViewManager.prototype;
        _proto.addMiniLayer = function addMiniLayer() {
          // if (!this._miniLayer || !this._miniLayer.children) {
          //     cc.resources.load("prefab/hall/MiniLayer", cc.Prefab, (err, MiniLayer: cc.Prefab) => {
          //         if (!err && MiniLayer) {
          //             this._miniLayer = cc.instantiate(MiniLayer);
          //             cc.director.getScene().getChildByName("Canvas").addChild(this._miniLayer);
          //             this._miniLayer.getComponent(cc.UITransform).priority = 3000;
          //             // cc.director.addPersistRootNode(this._miniLayer);
          //         }
          //     });
          // }
        };
        _proto.delMiniLayer = function delMiniLayer() {
          // if (this._miniLayer && this._miniLayer.children) {
          //     // cc.game.removePersistRootNode(this._miniLayer);
          //     this._miniLayer.destroy();
          //     this._miniLayer = null;
          // }
        }
        //    //账号被挤兑或失效 302/401
        ;

        _proto.checkLoginStatus = function checkLoginStatus() {
          if (NetManager.instance.getChangeZh()) {
            //            //账号被挤掉
            this.showAccountTip(302, true);
          } else if (NetManager.instance.getLoginStatus()) {
            //            //切换登录  账号失效
            this.showAccountTip(401, true);
          }
        };
        _proto.showAccountTip = function showAccountTip(code, isReCnn) {
          if (this._currentScene && this._currentScene.getChildByName("_showtip")) {
            return;
          }
          this.showTipPop(code == 302 ? i18n.lang["10053"] : i18n.lang["10059"], function () {
            Common.exitGame();
          });
        }
        //    //isReCnn：reConnect
        ;

        _proto.account_disConnect = function account_disConnect(code, isReCnn) {
          this.showAccountTip(code, isReCnn);
        }
        //    /**
        //     *
        //     * @param gameType 游戏类型
        //     * @param specialType 特殊定义，用于特殊处理小游戏进子游戏
        //     * @param longInfo 长龙信息
        //     * @returns
        //     */
        ;

        _proto.checkGame = function checkGame(gameType, specialType, longInfo) {
          if (specialType === void 0) {
            specialType = null;
          }
          if (longInfo === void 0) {
            longInfo = null;
          }
          if (!NetManager.instance.netState) {
            return;
          }
          if (this._checkGameType) {
            return;
          }
          this.specialGame = specialType;
          this._checkGameType = gameType;
          HallProxy.longInfo = longInfo;
          NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.checkGame, {
            gameName: gameType
          });
          EventManager.getInstance().dispatch(ConfigManager.getInstance().eventTransform.enterUpdate, this._checkGameType, 0);
        };
        _proto.reconnect = function reconnect() {
          this.resetGameType();
        };
        _proto.resetGameType = function resetGameType() {
          this._checkGameType = null;
          this.specialGame = null;
        };
        _proto.updateFinish = function updateFinish(game) {
          var _this = this;
          if (!game) return;
          if (game != GameDef.GameMap[this._checkGameType]) return;
          this.showWait();
          var gameType = GameDef.GameMap[this._checkGameType];
          EventManager.getInstance().dispatch(ConfigManager.getInstance().eventTransform.enterUpdate, this._checkGameType, 0);
          //        // gameType = "XyGame";
          assetManager.loadBundle(gameType, function (err, bundle) {
            _this.closeWait();
            if (err) {
              console.log("loadBundle", err);
              _this.resetGameType();
              _this.showToast(i18n.lang.loadGameErr);
              return;
            }
            _this._curBundle = bundle;
            if (_this.specialGame && _this.specialGame != "") {
              gameType = _this.specialGame;
            }
            if (GameDef.eMiniGame[gameType]) {
              var sceneName = GameDef._gameScene[gameType];
              var layerPath = "prefab/" + sceneName;
              ViewManager.instance.addMiniBundleTag(gameType);
              _this.loadPopBuddle(layerPath, bundle, function (cur, total) {
                var percent = cur / total;
                EventManager.getInstance().dispatch(ConfigManager.getInstance().eventTransform.enterUpdate, _this._checkGameType, percent);
              }, function (GameLayer) {
                EventManager.getInstance().dispatch(ConfigManager.getInstance().eventTransform.enterUpdate, _this._checkGameType, 1);
                var gameLayer = instantiate(GameLayer);
                _this.addPopGame(gameLayer, gameType);
                _this.resetGameType();
                _this.autoReleaseMiniBundle();
              }, true);
            } //进入独立场景没有 loading界面的
            else {
              ViewManager.instance.addBundleTag(gameType);
              _this.changeScene(GameDef._gameScene[gameType], function (cur, total) {
                if (!sys.isNative) {
                  var percent = cur / total;
                  EventManager.getInstance().dispatch(ConfigManager.getInstance().eventTransform.enterUpdate, _this._checkGameType, percent);
                }
              }, function () {
                EventManager.getInstance().dispatch(ConfigManager.getInstance().eventTransform.enterUpdate, _this._checkGameType, 1);
                _this.resetGameType();
              }, true);
            }
          });
        };
        _proto.enterGame = function enterGame(data) {
          if (data.cmd == ConfigManager.getInstance().protocolHall.checkGame) {
            if (data.Code != 0) {
              this.showToast(i18n.lang.blackListTip);
              this.resetGameType();
              EventManager.getInstance().dispatch(ConfigManager.getInstance().eventTransform.enterUpdateCancel);
              return;
            }
            if (!this._checkGameType) {
              console.log("服务器出错", data);
              return;
            }
            UpdateManager.instance.checkVersion(GameDef.GameMap[this._checkGameType]);
          }
        };
        _proto.setGameData = function setGameData(data) {
          this._gameData = data;
        };
        _proto.getGameData = function getGameData() {
          return this._gameData;
        };
        _proto.setListenerGonggao = function setListenerGonggao() {
          EventManager.instance.on(ConfigManager.instance.protocolHall.GongGao, this.gonggao, this);
        };
        _proto.gonggao = function gonggao(data) {
          this.showTipPop(data.data.content, function () {}, null);
        };
        _proto.showToast = function showToast$1(text, isVertical, pos) {
          var that = this;
          resources.load("prefab/public/showToast", Prefab, function (err, tipPre) {
            var showtip = instantiate(tipPre);
            if (!isValid(that._currentScene)) {
              that._currentScene = director.getScene().getChildByName("Canvas");
            }
            that._currentScene.addChild(showtip);
            showtip.getComponent(UITransform).priority = 200000;
            pos = pos || v2(0, 0);
            showtip.setPosition(pos.x, pos.y);
            showtip.getComponent(showToast).setTipsText(text);
          });
        };
        _proto.showNetTipPop = function showNetTipPop() {
          var _this2 = this;
          this._nettips = this._currentScene.getChildByName("_nettips");
          if (!this._nettips) {
            resources.load("prefab/public/showNetTips", Prefab, function (err, tipPre) {
              if (NetManager.instance.netState) {
                return;
              }
              if (!isValid(_this2._currentScene)) {
                _this2._currentScene = director.getScene().getChildByName("Canvas");
              }
              if (_this2._currentScene.getChildByName("_nettips")) {
                return;
              }
              var showtip = instantiate(tipPre);
              showtip.name = "_nettips";
              showtip.getComponent(UITransform).priority = 20000;
              _this2._currentScene.addChild(showtip);
              _this2._nettips = showtip;
              var text_content = find("tip_bg/text_content", showtip);
              text_content.getComponent(Label).string = i18n.lang.disableConnect;
            });
          }
        };
        _proto.closeNetTipPop = function closeNetTipPop() {
          if (this._nettips) {
            this._nettips.removeFromParent();
            this._nettips.destroy();
            this._nettips = null;
          }
        };
        _proto.showTipPop = function showTipPop(text, callback1, callback2) {
          var that = this;
          resources.load("prefab/public/showTips", Prefab, function (err, preTip) {
            var showtip = instantiate(preTip);
            that.popNodeView(showtip, true);
            showtip.getComponent(UITransform).priority = 20000;
            showtip.getComponent(showTip).setTipStatus(text, callback1, callback2);
          });
        };
        _proto.showWait = function showWait() {
          if (this._wait == null) {
            var that = this;
            this._isWait = true;
            resources.load("prefab/public/wait2", Prefab, function (err, tipPre) {
              if (that._isWait == true && that._wait == null) {
                var showtip = instantiate(tipPre);
                if (that._currentScene != null && isValid(that._currentScene)) {
                  that._currentScene.addChild(showtip);
                  showtip.getComponent(UITransform).priority = 30000;
                  that._wait = showtip;
                }
              }
            });
          } else {
            this._wait.active = true;
          }
        };
        _proto.closeWait = function closeWait() {
          if (this._wait != null) {
            this._wait.active = false;
          }
          this._isWait = false;
        };
        _proto.showPopGame = function showPopGame(game, gameType) {
          if (this._popgameArr[gameType] != null && this._popgameArr[gameType] != "undefined") {
            game.getComponent(viewPop)._isPop = false;
            if (!isValid(this._currentScene)) {
              this._currentScene = director.getScene().getChildByName("Canvas");
            }
            this._currentScene.addChild(game);
            this._popgameArr[gameType]["node"] = game;
            game.getComponent(MiniGameMoveOpacity).initMiniByData(this._popgameArr[gameType]);
          }
        };
        _proto.clearPopGame = function clearPopGame() {
          this._popgameArr = {};
        };
        _proto.getMaxMiniZIndex = function getMaxMiniZIndex(popViewIndex) {
          var _this3 = this;
          var curMaxIndex = popViewIndex ? popViewIndex : 100;
          Object.keys(this._popgameArr).forEach(function (value, index) {
            if (_this3._popgameArr[value] && _this3._popgameArr[value]["node"]) {
              var gameNode = _this3._popgameArr[value]["node"];
              curMaxIndex = curMaxIndex < gameNode.zIndex ? gameNode.zIndex : curMaxIndex;
            }
          });
          if (this._currentPopNode) {
            curMaxIndex = curMaxIndex > this._currentPopNode.getComponent(UITransform).priority ? curMaxIndex : this._currentPopNode.getComponent(UITransform).priority;
          }
          return curMaxIndex;
        };
        _proto.addPopGame = function addPopGame(game, gameType) {
          if (this._popgameArr[gameType] == null || this._popgameArr[gameType] == "undefined") {
            this._numPop = this._numPop + 1;
            this._popgameArr[gameType] = {};
            this._popgameArr[gameType]["node"] = game;
            this._popgameArr[gameType]["pos1"] = null;
            this._popgameArr[gameType]["pos2"] = null;
            this._popgameArr[gameType]["opacity"] = true;
            this._popGameName.push(gameType);
            if (!isValid(this._currentScene)) {
              this._currentScene = director.getScene().getChildByName("Canvas");
            }
            game.getComponent(UITransform).priority = this.getMaxMiniZIndex(+1);
            if (gameType == "DxgameMD5") {
              this.adeptPopGameSize(game, 1, 0.675);
            } else {
              this.adeptPopGameSize(game);
            }
            this._currentScene.addChild(game);

            //超过2个移除
            if (this._popGameName.length > 1) {
              var name = this._popGameName.shift();
              this.closePopGame(name);
            }
          }
        };
        _proto.adeptPopGameSize = function adeptPopGameSize(node, bigScale, smallScale) {
          if (bigScale === void 0) {
            bigScale = 1.3;
          }
          if (smallScale === void 0) {
            smallScale = 0.9;
          }
          var size = view.getVisibleSize();
          if (Math.round(size.width) == 1920 || Math.round(size.height) == 1080) {
            node.scale = v3(bigScale, bigScale, 1);
          } else {
            node.scale = v3(smallScale, smallScale, 1);
          }
        };
        _proto.adeptPopLayer = function adeptPopLayer(node) {
          var size = view.getVisibleSize();
          if (Math.round(size.width) == 1920 || Math.round(size.height) == 1080) ;else {
            node.scale = v3(750 / 1080, 750 / 1080, 1);
          }
          if (this.isVerticalScene && sys.isMobile) {
            node.angle = 90;
          }
        };
        _proto.closePopGame = function closePopGame(name) {
          if (this._popgameArr[name] != null && typeof this._popgameArr[name] != "undefined") {
            this._popgameArr[name]["node"].getComponent(viewPop).removePopView();
            this._popgameArr[name] = null;
            this._popGameName = this.removeList(this._popGameName, name);
          }
        };
        _proto.removeList = function removeList(arr, value) {
          var redata = [];
          for (var i = 0; i < arr.length; i++) {
            if (arr[i] != value) {
              redata.push(arr[i]);
            }
          }
          return redata;
        };
        _proto.setPopGamePos = function setPopGamePos(gameType, pos, numBg) {
          if (this._popgameArr[gameType] != null && typeof this._popgameArr[gameType] != "undefined") {
            if (numBg == 1) {
              this._popgameArr[gameType]["pos1"] = pos;
            } else {
              this._popgameArr[gameType]["pos2"] = pos;
            }
          }
        };
        _proto.setPopGameOp = function setPopGameOp(gameType, op) {
          if (this._popgameArr[gameType] != null && typeof this._popgameArr[gameType] != "undefined") {
            this._popgameArr[gameType]["opacity"] = op;
          }
        };
        _proto.setPopGameFirst = function setPopGameFirst(gameType) {
          this._popGameName = this.removeList(this._popGameName, gameType);
          this._popGameName.push(gameType);
        };
        _proto.pushPopNode = function pushPopNode(node) {
          this._currentPopNode = node;
          this._popArr.push(node);
        };
        _proto.popNodeView = function popNodeView(node, isAdd, onlyName) {
          if (onlyName === void 0) {
            onlyName = null;
          }
          if (onlyName) {
            if (this._currentScene) {
              var child = this._currentScene.getChildByName(onlyName);
              if (child) return;
            }
          }
          if (isAdd) {
            if (!isValid(this._currentScene)) {
              this._currentScene = director.getScene().getChildByName("Canvas");
            }
            this._currentScene.addChild(node);
            node.getComponent(UITransform).priority = this.getMaxMiniZIndex(2000 + 1);
          }
          node.active = true;
          if (this.hasVideo) {
            EventManager.getInstance().emit(ConfigManager.getInstance().eventTransform.openPopView);
          }
          this.pushPopNode(node);
        };
        _proto.closePopView = function closePopView(nodeView) {
          if (nodeView && isValid(nodeView)) {
            game.emit("onPopViewClose" + nodeView.name);
            nodeView.getComponent(viewPop).removePopView();
            if (this._popArr) {
              for (var index = 0; index < this._popArr.length; index++) {
                var curNode = this._popArr[index];
                if (nodeView.name == curNode.name) {
                  this._popArr.splice(index, 1);
                  break;
                }
              }
              if (this._popArr.length > 0) {
                this._currentPopNode = this._popArr[this._popArr.length - 1];
              } else {
                this._currentPopNode = null;
              }
            }
            if (this.hasVideo) {
              EventManager.getInstance().emit(ConfigManager.getInstance().eventTransform.closePopView);
            }
            return;
          } else if (this._currentPopNode && this._popArr.length > 0) {
            game.emit("onPopViewClose" + this._currentPopNode.name);
            this._currentPopNode.getComponent(viewPop).removePopView();
            this._popArr.pop();
            if (this._popArr.length > 0) {
              this._currentPopNode = this._popArr[this._popArr.length - 1];
            } else {
              this._currentPopNode = null;
            }
            if (this.hasVideo) {
              EventManager.getInstance().emit(ConfigManager.getInstance().eventTransform.closePopView);
            }
            return true;
          }
          return false;
        };
        _proto.clearCurView = function clearCurView() {
          this._currentPopNode = null;
          this._popArr = [];
          this._currentScene = null;
          this._wait = null;
          this.clearPopGame();
          AudioManager.instance.stopAllEffect();

          //3.8.3spine 回调泄漏问题临时处理
          if (window["TrackEntryListeners"]) {
            window["TrackEntryListeners"]._listenerSet.clear();
          }
        };
        _proto.checkSceneName = function checkSceneName(name) {
          console.log("checkSceneName", this._sceneName);
          if (this._sceneName == name) {
            return true;
          }
          return false;
        };
        _proto.changeScene = function changeScene(name, callback1, callback2, isshowWait) {
          var _this4 = this;
          if (callback1 === void 0) {
            callback1 = null;
          }
          if (callback2 === void 0) {
            callback2 = null;
          }
          if (isshowWait === void 0) {
            isshowWait = true;
          }
          if (isshowWait == true) {
            this.showWait();
          }
          if (name == "LoginScene") {
            this.isTanFitst = false;
          }
          console.time("chageScene " + name);
          director.preloadScene(name, function (completedCount, totalCount, item) {
            completedCount = Math.floor(completedCount / 1.2);
            callback1 && callback1(completedCount, totalCount);
          }, function () {
            console.timeEnd("chageScene " + name);

            // if (isshowWait == true) {
            //     this.closeWait();
            // }
            // callback2 && callback2();
            // this.clearCurView();
            // this._sceneName = name;

            // cc.director.loadScene(name, () => {
            //     this._currentScene = cc.director.getScene().getChildByName("Canvas");
            //     //                    // let safeArea = this._currentScene.addComponent(cc.SafeArea);
            //     //                    // safeArea.updateArea();

            //     if (cc.sys.isBrowser) {
            //         let gameType = this.getGameTypeByScene(name);

            //         let strTitle = gameType ? `LuckyWin-${i18n.lang.gameName[gameType]}` : "LuckyWin-giải trí thời trang";
            //         document.title = strTitle;
            //     }

            //     this.autoReleaseBundle();
            // });

            director.loadSceneWithProgress(name, function (completedCount, totalCount, item) {
              completedCount += Math.floor(totalCount - completedCount) / 1.2;
              callback1 && callback1(completedCount, totalCount);
            }, function () {
              if (isshowWait == true) {
                _this4.closeWait();
              }
              callback2 && callback2();
              _this4.clearCurView();
              _this4._sceneName = name;
              _this4._currentScene = director.getScene().getChildByName("Canvas");
              //                    // let safeArea = this._currentScene.addComponent(cc.SafeArea);
              //                    // safeArea.updateArea();

              var fit = _this4._currentScene.getComponent(fitCanvas);
              if (fit) {
                _this4.isVerticalScene = fit.isVertical;
              } else {
                _this4.isVerticalScene = false;
              }
              _this4.autoReleaseBundle();
            });
          });
        };
        _proto.enterGameScene = function enterGameScene(path, buddle, callback1, callback2, isshowWait) {
          var _this5 = this;
          if (isshowWait) {
            gts.Debug.Log("wait1111");
            this.showWait();
          }
          var self = this;
          buddle.loadScene(path, Scene, function (cur, total) {
            callback1(cur, total);
          }, function (err, GameLayer) {
            if (isshowWait) {
              gts.Debug.Log("wait2222");
              _this5.closeWait();
            }
            callback2();
            self.clearCurView();
            self._sceneName = path;
            director.runScene(GameLayer, function () {}, function () {
              self._currentScene = director.getScene().getChildByName("Canvas");
            });
          });
        }
        //    /**
        //     * 添加bundle管理
        //     * @param bundleName bundleName
        //     */
        ;

        _proto.addBundleTag = function addBundleTag(bundleName) {
          var len = this._bundles.length;
          for (var i = 0; i < len; i++) {
            if (this._bundles[i] == bundleName) {
              this._bundles.splice(i, 1);
              break;
            }
          }
          this._bundles.push(bundleName);
        };
        _proto.addMiniBundleTag = function addMiniBundleTag(bundleName) {
          var len = this._miniBundles.length;
          for (var i = 0; i < len; i++) {
            if (this._miniBundles[i] == bundleName) {
              this._miniBundles.splice(i, 1);
              break;
            }
          }
          this._miniBundles.push(bundleName);
        }

        //    /**
        //     * 自动释放过多的模块的资源
        //     */
        ;

        _proto.autoReleaseBundle = function autoReleaseBundle() {
          //        //最大保留数
          var maxBundleCount = 2;
          var len = this._bundles.length;
          while (len > maxBundleCount) {
            var name = this._bundles.shift();
            len = this._bundles.length;
            var bundle = assetManager.getBundle(name);
            if (bundle) {
              //@ts-ignore
              bundle.releaseUnusedAssets();
              assetManager.removeBundle(bundle);
            }
          }
        };
        _proto.autoReleaseMiniBundle = function autoReleaseMiniBundle() {
          //        //最大保留数
          var maxBundleCount = 2;
          var len = this._miniBundles.length;
          while (len > maxBundleCount) {
            var name = this._miniBundles.shift();
            len = this._miniBundles.length;
            var bundle = assetManager.getBundle(name);
            if (bundle) {
              //@ts-ignore
              bundle.releaseUnusedAssets();
              assetManager.removeBundle(bundle);
            }
          }
        };
        _proto.loadPopPublic = function loadPopPublic(path, callback1, callback2, isshowWait) {
          var _this6 = this;
          if (isshowWait) {
            this.showWait();
          }
          resources.load(path, Prefab, function (completedCount, totalCount, item) {
            callback1(completedCount, totalCount);
          }, function (err, gameLayer) {
            if (isshowWait) {
              _this6.closeWait();
            }
            callback2(gameLayer);
          });
        };
        _proto.loadPopBuddle = function loadPopBuddle(path, buddle, callback1, callback2, isshowWait) {
          var _this7 = this;
          if (isshowWait) {
            this.showWait();
          }
          buddle.load(path, Prefab, function (cur, total) {
            callback1(cur, total);
          }, function (err, GameLayer) {
            if (isshowWait) {
              _this7.closeWait();
            }
            callback2(GameLayer);
          });
        };
        _proto.showLog = function showLog(data) {
          if (ConfigManager.instance.debug == 1) {
            //            //测试
            gts.Debug.Log(data);
          }
        };
        _createClass(ViewManager, [{
          key: "miniLayer",
          get: function get() {
            if (this._miniLayer && this._miniLayer.children) return this._miniLayer;
            return null;
          }
        }, {
          key: "checkGameType",
          get: function get() {
            return this._checkGameType;
          }
        }], [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              this._instance = new ViewManager();
            }
            return this._instance;
          }
        }]);
        return ViewManager;
      }());
      ViewManager._instance = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ViewOpenAnim.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './viewPop.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Widget, Tween, UIOpacity, tween, UITransform, v3, viewPop;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Widget = module.Widget;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      UITransform = module.UITransform;
      v3 = module.v3;
    }, function (module) {
      viewPop = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "17ce2IcdUZJGYXhIGItsq5J", "ViewOpenAnim", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ViewOpenAnim = exports('ViewOpenAnim', (_dec = ccclass('ViewOpenAnim'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_viewPop) {
        _inheritsLoose(ViewOpenAnim, _viewPop);
        function ViewOpenAnim() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _viewPop.call.apply(_viewPop, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "viewBg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "contentBg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "content", _descriptor3, _assertThisInitialized(_this));
          _this.onContentShow = void 0;
          return _this;
        }
        var _proto = ViewOpenAnim.prototype;
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          //return
          this.viewBg.parent.getComponent(Widget).updateAlignment();
          Tween.stopAllByTarget(this.viewBg);
          var viewBgOpacity = this.viewBg.getComponent(UIOpacity);
          var opacity = viewBgOpacity.opacity;
          viewBgOpacity.opacity = 0;
          tween(viewBgOpacity).to(0.2, {
            opacity: opacity
          }).start();
          Tween.stopAllByTarget(this.content);
          this.content.active = false;
          var contentBgWidget = this.contentBg.getComponent(Widget);
          contentBgWidget.updateAlignment();
          contentBgWidget.enabled = false;
          var contentBgHeight = this.contentBg.parent.getComponent(UITransform).height;
          var contentHeight = this.contentBg.getComponent(UITransform).height;
          var y1 = -contentBgHeight / 2 - contentHeight / 2;
          this.contentBg.position = v3(this.contentBg.position.x, y1, this.contentBg.position.z);
          var y2 = -contentBgHeight / 2 + contentHeight / 2;
          Tween.stopAllByTarget(this.contentBg);
          tween(this.contentBg).to(0.2, {
            position: v3(this.contentBg.position.x, y2, this.contentBg.position.z)
          }).delay(0.1).call(function () {
            contentBgWidget.enabled = true;
            _this2.content.active = true;
            var contentUIOpacity = _this2.content.getComponent(UIOpacity);
            contentUIOpacity.opacity = 0;
            tween(contentUIOpacity).to(0.2, {
              opacity: 255
            }).start();
            _this2.onContentShow && _this2.onContentShow();
          }).start();
        };
        _proto.removePopView = function removePopView() {
          var _this3 = this;
          this.content.active = false;
          var viewHeight = this.contentBg.parent.getComponent(UITransform).height;
          var contentHeight = this.contentBg.getComponent(UITransform).height;
          var y = -viewHeight / 2 - contentHeight / 2;
          Tween.stopAllByTarget(this.contentBg);
          tween(this.contentBg).to(0.2, {
            position: v3(this.contentBg.position.x, y, this.contentBg.position.z)
          }).call(function () {
            Tween.stopAllByTarget(_this3.viewBg);
            var viewBgOpacity = _this3.viewBg.getComponent(UIOpacity);
            tween(viewBgOpacity).to(0.1, {
              opacity: 0
            }).call(function () {
              _this3.node.destroy();
            }).start();
          }).start();
        };
        return ViewOpenAnim;
      }(viewPop), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "viewBg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "contentBg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/viewPop.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, NodeEventType, Widget, Tween, UIOpacity, v3, tween, Component, MainManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      NodeEventType = module.NodeEventType;
      Widget = module.Widget;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      v3 = module.v3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "43ee26ZTHBPU7rK2hzsCUZG", "viewPop", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var viewPop = exports('default', (_dec = ccclass("ViewPop"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(viewPop, _Component);
        function viewPop() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "poptime", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startScale", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "airScale", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isremove", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "istouch", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgEvent", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg1", _descriptor8, _assertThisInitialized(_this));
          _this._isPop = true;
          return _this;
        }
        var _proto = viewPop.prototype;
        _proto.onLoad = function onLoad() {
          if (this.istouch) {
            this.bgEvent.on(NodeEventType.TOUCH_END, this.removeSelf, this);
          }
        };
        _proto.removeSelf = function removeSelf() {
          var viewManager = MainManager.getInstance().getViewManager();
          if (!viewManager.closePopView()) {
            this.removePopView();
          }
        };
        _proto.onEnable = function onEnable() {
          if (this._isPop == true) {
            if (this.bg != null) {
              var widget = this.bg.getComponent(Widget);
              var oldEnabled;
              if (widget) {
                if (widget.enabled) {
                  widget.updateAlignment();
                }
                oldEnabled = widget.enabled;
                widget.enabled = false;
              }

              // this.bg.stopAllActions();
              Tween.stopAllByTarget(this.bg);
              this.bg.getComponent(UIOpacity).opacity = 0;
              this.bg.scale = v3(this.startScale, this.startScale, 1);
              tween(this.bg).to(this.poptime, {
                scale: v3(this.airScale, this.airScale, 1)
              }, {
                easing: "backOut"
              }).call(function () {
                if (widget) {
                  widget.enabled = oldEnabled;
                }
              }).start();
              tween(this.bg.getComponent(UIOpacity)).to(this.poptime, {
                opacity: 255
              }, {
                easing: "backOut"
              }).start();
            }
            if (this.bg1 != null && this.bg1.scale.x == 1) {
              Tween.stopAllByTarget(this.bg1);
              this.bg1.getComponent(UIOpacity).opacity = 0;
              this.bg1.scale = v3(this.startScale, this.startScale);
              // cc.tween(this.bg1).to(this.poptime, { scale: this.airScale, opacity: 255 }, { easing: "backOut" }).start();
              tween(this.bg1).to(this.poptime, {
                scale: v3(this.airScale, this.airScale, 1)
              }, {
                easing: "backOut"
              }).start();
              tween(this.bg1.getComponent(UIOpacity)).to(this.poptime, {
                opacity: 255
              }, {
                easing: "backOut"
              }).start();
            }
          }
        };
        _proto.removePopView = function removePopView() {
          if (this.bg1 != null) {
            Tween.stopAllByTarget(this.bg1);
            // cc.tween(this.bg1)
            //     .to(this.poptime - 0.05, { scale: this.startScale, opacity: 0 }, { easing: "backIn" })
            //     .start();

            tween(this.bg1).to(this.poptime - 0.05, {
              scale: v3(this.startScale, this.startScale, 1)
            }, {
              easing: "backIn"
            }).start();
            tween(this.bg1.getComponent(UIOpacity)).to(this.poptime, {
              opacity: 0
            }, {
              easing: "backIn"
            }).start();
          }
          if (this.bg != null) {
            var widget = this.bg.getComponent(Widget);
            var oldEnabled;
            if (widget) {
              oldEnabled = widget.enabled;
              widget.enabled = false;
            }
            var _that = this;
            Tween.stopAllByTarget(this.bg);
            tween(this.bg).to(this.poptime, {
              scale: v3(this.startScale, this.startScale, 1)
            }, {
              easing: "backIn"
            }).call(function () {
              if (widget) {
                widget.enabled = oldEnabled;
              }
              _that.node.active = false;
              if (_that.isremove) {
                _that.node.removeFromParent();
                _that.node.destroy();
              }
            }).start();
            tween(this.bg.getComponent(UIOpacity)).to(this.poptime, {
              opacity: 0
            }, {
              easing: "backIn"
            }).start();
          }
        };
        _proto.onDisable = function onDisable() {
          if (this.istouch) {
            this.bgEvent.off(NodeEventType.TOUCH_END, this.removeSelf);
          }
        };
        return viewPop;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "poptime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.25;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.8;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "airScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "isremove", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "istouch", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bgEvent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bg1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/vn.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9fefbMS62xKOII6cXZHrlbX", "vn", undefined);
      /*
       * @Author: huangww
       * @Date: 2021-09-16 16:34:18
       * @LastEditTime: 2021-11-17 15:03:10
       */
      var vn = exports('vn', {
        lang: "ViệtName",
        test: "thử",
        10001: "Số Dư Không Đủ",
        //余额不足，请及时充值/
        10002: "KHÔNG THỂ CƯỢC HAI BÊN！",
        ///不能下注两边/
        10003: "CHỌN MỘT LÁ BÀI ",
        ///选牌打/
        10004: "Đặt cược thành công!",
        ///下注成功/
        10005: "Đặt cược kỳ này đã kết thúc！",
        //  /下注旗已结束/
        10007: "Không được để trống",
        ///必要填写/
        10008: "Tiền cược 1 con tối thiểu là 1K",
        ///下注最低1K/
        10009: "Vui lòng chờ !",
        ////// /请稍等/
        10010: "Ván cược chưa kết thúc",
        ///游戏进行中/
        10011: "VUI LÒNG LỰA CHỌN CHIP ĐẶT CƯỢC！",
        // /请选择筹码/
        10012: "Không thể đổi mức cược khi ván chơi chưa kết thúc!",
        // /游戏进行中不能调限额/
        10013: "Cần chọn 1 lá bài",
        ///要选牌打
        10014: "Hạ phỏm không hợp lệ",
        ///下牌不合规/
        10015: "Không hợp lệ",
        /////不合规/
        10016: "Ra bài không không hợp lệ",
        // /出牌不合规/
        10017: "Sao chép thành công",
        ///复制成功/
        10018: "Mật khẩu cũ không được để trống",
        ///旧密码不能空白/
        10019: "Mật khẩu mới không được để trống",
        ///新密码不能空白/
        10020: "Vui lòng xác nhận mật khẩu của bạn",
        ///请确认您的密码/
        10021: "Mật khẩu khác nhau",
        ///密码不一致/
        10022: "Cần điền số điện thoại",
        ///请输入手机号码/
        10023: "Gửi thành công",
        ///发送成功/
        10024: "Cần điền số điện thoại",
        // /  请输入手机号码/
        10025: "Cần điền mã xác minh ",
        // /确认码不能为空/
        10026: "Xác minh thành công",
        ///激活成功/
        10027: "Đổi mật khẩu thành công",
        // /换密码成功/
        10028: "Chuyển đổi thành công",
        // /转换成功/
        10029: "Biệt danh không để trống",
        // /昵称不能空白/
        10030: "Cài đặt thành công",
        ///设置成功/
        10031: "Kết nối mạng không thành công",
        // /网络连接不成功/
        10032: "Tài khoản không được để trống",
        // /账号不能空白/
        10033: "Mật khẩu không được để trống",
        // /密码不能空白/
        10034: "Mật khẩu khác nhau",
        ///密码不一致/
        10035: "Vui lòng xác nhận mật khẩu của bạn",
        // /请确认您的密码/
        10036: "Gắn thẻ ngân hàng thành công",
        //  /设置银行账号成功/
        10037: "Đã tạo phiếu nạp thành công",
        //   /充值命令提交成功/
        10038: "Nạp tiền thành công",
        //  /充值成功/
        10039: "Cần điền đúng số tiền đã nạp",
        //  /填写金额错误/
        10040: "Vui lòng chọn số tiền",
        //  /请选择充值金额/
        10041: "Vui lòng nhập số SERI",
        //  /请填写话费卡SERI/
        10042: "Vui lòng nhập mã số thẻ ",
        ////    /请填写话费卡号码/
        10043: "Vui lòng nhập mã đổi thưởng",
        //   /请输入兑换奖金号码/
        10044: "Vui lòng chờ",
        //  /请稍等/
        10045: "Vui lòng nhập số tiền chính xác",
        // /请输入正确金额/

        10046: "Có người chơi chưa sẵn sàng, bạn có muốn bắt đầu",
        // /玩友还在准备您想开始/
        10047: "Đã cập nhập thành công ，vui lòng khởi động lại trò chơi .",
        //  /已更新成功，请重启游戏/
        10048: "KẾT NỐI MÁY CHỦ THẤT BẠI , VUI LÒNG THỬ LẠI",
        ///服务器连接失败,请重试
        10049: "KẾT NỐI MÁY CHỦ THẤT BẠI  , SỬ DỤNG LINK DỰ BỊ",
        // /服务器连接失败,使用备用地址
        10050: "Đường truyền đang bận , vui lòng thử lại!",
        ///网络在忙请重试/
        10051: "Bạn có chắc chắn muốn đăng xuất?",
        ///您确定要登出/
        10052: "KHÔNG ĐỦ DOANH THU ĐỂ CHUYỂN",
        ///赢利不能转换/
        10053: "Bạn đã đăng nhập trên thiết bị khác\nvui lòng đăng nhập lại",
        // /您已在其他设备登录/
        10054: "Lệnh rút đã gửi thành công , vui lòng chờ hệ thống xử lý",
        //  /申请取款已成功，等系统处理/
        10055: "Lệnh nạp đã gửi thành công",
        //  /存款命令提交成功/
        10056: "Khuyến mãi tặng 20%  cho lần nạp đầu , TIỀN NẠP + TIỀN THƯỞNG cần trải qua 10 vòng cược . Click vào XÁC NHẬN để hệ thống kích hoạt khuyến mãi .",
        //首次充值
        10057: "CẦN CHỌN TÊN NGÂN HÀNG",
        //请选择类型

        10058: "Xác nhận đăng nhập lại, hủy bỏ để đăng xuất",
        // /您已在其他设备登录!\n确认则重新登录，取消则退出/
        10059: "Tài khoản đăng nhập đã hết hiệu lực\nvui lòng đăng nhập lại",
        //账号失效
        10060: "Phòng VIP, tổng cược tối thiểu phải lớn hơn 200,000",
        //
        10061: "Giới hạn cược tối đa trong một loại cược là 5 tỷ",
        //
        10062: "Số điểm đặt cược tối đa cho 5 phân khu",
        //
        10063: "Gi\u1EDBi h\u1EA1n c\u01B0\u1EE3c t\u1ED1i \u0111a trong m\u1ED9t lo\u1EA1i c\u01B0\u1EE3c l\xE0 {0}",
        //
        10064: "S\u1ED1 \u0111i\u1EC3m \u0111\u1EB7t c\u01B0\u1EE3c t\u1ED1i \u0111a cho {0}",
        //
        activeBank: "ĐÃ NHẬN THÀNH CÔNG",
        dxgameTip: "HOÀN TIỀN CÂN CỬA ",
        KenoGameTip: "HOÀN TIỀN CÂN CỬA ",
        commonCopy: "Sao chép thành công",
        recordPage: "Trang",
        betedExitTip: "Đặt cược không thể rời khỏi phòng",
        //#region fishGame
        strLoadingTip: ["ĐANG VÀO GAME ...", "Tấn công Long Vương để kiếm phần thưởng lớn lên tới 100 lần!",
        //龙王驾临.百倍宝箱任您赢！
        "Bắn túi vàng may mắn để khám phá kho báu của đại dương!", "Pháo lửa nhanh Firestorm thưởng cho bạn tới 100 viên đạn miễn phí!", "Sử dụng Sứa & Cua đặc biệt để hạ gục các nhóm cá cùng một lúc!"],
        LoadingType: {
          LoadRes: "Đang tải tài nguyên...",
          EnterRoom: "Đang vào phòng...."
        },
        lsGame: {
          Commission: "Tỷ lệ thưởng:  "
        },
        fishTip: {
          gold: "SỐ DƯ KHÔNG ĐỦ CẦN NẠP THÊM !",
          //金币不足提示
          noAway: "Trò chơi đang diễn ra. Hãy bỏ trò chơi khi đạn biến mất khỏi hồ bơi.",
          //不能离开
          fdTip: "Nh\u1EA5p v\xE0o 1 t\xFAi b\u1EA5t k\u1EF3 \u0111\u1EC3 nh\u1EADn \u0111\u01B0\u1EE3c ph\u1EA7n th\u01B0\u1EDFng ho\u1EB7c t\u1EF1 \u0111\u1ED9ng ch\u1ECDn sau <color=#E9F902>{0}</color> gi\xE2y" //福袋提示
        },

        chatErr1: "Nội dung không hợp lệ",
        chatErr2: "Tin nhắn chứa nhiều ký tự số không hợp lệ",
        chatErr3: "Không thể nhắn tin vì số dư nhỏ hơn 1.000.000đ.",
        allIn: "Bạn không đủ số dư. Đặt tất tay.",
        chooseGold: "Vui lòng chọn số tiền cược",
        newStart: "Ván cược mới",
        dxgameTimeTip: "Trả tiền cân cửa",
        loadGameErr: "Lỗi tải trò chơi",
        notOpenTip: "Trò chơi không mở, xin vui lòng chờ đợi!",
        disableBet: "Không thể đặt cược vào lúc này",
        blackListTip: "Trò chơi này bị hạn chế, vui lòng thử trò chơi khác",
        disableConnect: "MẤT KẾT NỐI MÁY CHỦ VUI LÒNG KIỂM TRA ĐƯỜNG TRUYỀN",
        checkVersion: "Kiểm tra phiên bản",
        downloading: "downloading...",
        moveHandTip: "Xin mời nặn！",
        kickOut: "Bạn có chắc chắn muốn đẩy ra khỏi phòng không?",
        kickOutTip: "Bạn đã bị chủ phòng đẩy ra khỏi phòng",
        diyTip: "Cùng một con chip đã tồn tại",
        diyFullTip: "Thêm tối đa ${} chip.",
        diyTipRemove: "Có xóa chip hay không?",
        helpPumping: "${} LuckyWin mang đến cho quý khách một sân chơi hấp dẫn với phế chỉ ${}% trên tiền thưởng",
        devTip: "Chức năng chưa đi vào hoạt động, vui lòng chờ !",
        activityRecvTip: "Nhận thành công",
        activityRecvErr: "Trạng thái hoạt động bất thường",
        netChangeTip: "Đã chuyển đổi đường truyền, vui lòng chờ trong chốc lát.",
        chipTip: "MỜI CHỌN CHIP",
        chipMainTip: "Đặt cược blackjack trước",
        redPackage: {
          wait: "Chờ bắt đầu",
          start: "Đang tiến hành",
          totalDay: "${} ngày gần đây, tiền cược",
          totalReward: "Tổng tiền thưởng lì xì hoạt động lần này đ ${}",
          hasReceive: "Hôm nay bạn đã tham gia rồi",
          noReceiveTip: "Chưa đạt đủ điều kiện nhận thưởng",
          noStart: "Chương trình chưa bắt đầu"
        },
        activityErrCode: {
          30021: "Hôm nay bạn đã tham gia rồi",
          30027: "Địa chỉ IP bạn đang truy cập có lượng người dùng tham gia vượt quá số lượng quy định"
        },
        ipErrortip: "Địa chỉ IP bạn đang truy cập có lượng người dùng tham gia vượt quá số lượng quy định",
        phom: {
          all: "TẤT CẢ",
          four: "BÀN 4 NGƯỜI",
          si: "BÀN RIÊNG",
          man: "4 Người",
          goldNotEnough: "Không đủ số dư, tự động thoát khỏi phòng",
          dian: "điểm"
        },
        lieng: {
          colseBuyIn: "Không thể chọn số tiền mang vào khi bắt đầu trò chơi"
        },
        dice: {
          result: {
            0: "XỈU",
            1: "TÀI",
            2: "BÃO"
          }
        },
        thirdteen: {
          cardType: {
            0: "Binh lủng",
            1: "Sảnh rồng đồng hoa",
            2: "Sảnh rồng",
            3: "5 đôi 1 xám",
            4: "3 thùng",
            5: "3 sảnh",
            7: "6 đôi",
            8: "Đồng hoa"
          }
        },
        lhvip: {
          type: {
            1: "Rồng",
            2: "Hổ",
            3: "Hoà",
            4: "Hoà Đồng Chất"
          }
        },
        //#endregion
        //网络错误代码 提示
        errTip: {
          //------------  系统错误  -----------
          302: "Bạn đã đăng nhập trên một thiết bị khác",
          //AccountChanged
          401: "Yêu cầu bất hợp pháp, không có quyền truy cập",
          //Forbidden
          402: "YÊU CẦU KHÔNG HỢP LỆ",
          //Illegal
          500: "THAO TÁC KHÔNG HỢP LỆ",
          //ServerError
          501: "ĐƯỜNG TRUYỀN KHÔNG ỔN ĐỊNH VUI LÒNG THỬ LẠI SAU",
          //ServerBusy

          10001: "Chưa đạt đủ điều kiện",
          //ErrParams
          10002: "--Lỗi chưa xác định--FileOverMax",
          //FileOverMax
          10003: "THAO TÁC KHÔNG HỢP LỆ",
          //ActionNotFound
          10004: "THANH TOÁN SAI VUI LÒNG LIÊN HỆ CSKH",
          //PayMethodIdErr
          10005: "SỐ TIỀN RÚT KHÔNG NẰM TRONG PHẠM VI CHO PHÉP",
          //DoudouAmountErr
          10006: "VUI LÒNG LIÊN HỆ CSKH",
          //ConnectCustomerService
          10007: "THAO TÁC KHÔNG HỢP LỆ",
          //AccountNotAllow

          //------------- 一般功能错误  ------------
          20001: "TÀI KHOẢN ĐÃ TỒN TẠI VUI LÒNG ĐĂNG NHẬP",
          //AccountExisted
          20002: "TÀI KHOẢN KHÔNG TỒN TẠI",
          //AccountNotExist
          20003: "TÀI KHOẢN HOẶC MẬT KHẨU KHÔNG CHÍNH XÁC",
          //PasswordErr
          20004: "THAO TÁC KHÔNG HỢP LỆ",
          //PageSizeErr
          20005: "GỬI TIN NHẮN LIÊN TỤC VUI LÒNG THỬ LẠI SAU",
          //SmsSentTooFast
          20006: "MÃ XÁC NHẬN KHÔNG CHÍNH XÁC",
          //SmsCodeErr
          20007: "SỐ ĐIỆN THOẠI ĐÃ TỒN TẠI",
          //PhoneAlreadyBind
          20008: "ĐỊNH DẠNG SỐ ĐIỆN THOẠI KHÔNG ĐÚNG",
          //PhoneFormatErr
          20009: "--Lỗi chưa xác định--UserAlreadyBind",
          //UserAlreadyBind
          20010: "CẦN CƯỢC THÊM DOANH SỐ",
          //BetNotEnough
          20011: "SỐ TIỀN KHÔNG NẰM TRONG PHẠM VI CHO PHÉP",
          //AmountNotAllow
          20012: "--Lỗi chưa xác định--DataNotFind",
          //DataNotFind
          20013: "--Lỗi chưa xác định--WalletPayErr",
          //WalletPayErr
          20014: "--Lỗi chưa xác định--ChatGroupNotFind",
          //ChatGroupNotFind
          20015: "--Lỗi chưa xác định--NotAvailableSeat",
          //NotAvailableSeat
          20016: "Trò chơi này bị hạn chế, vui lòng thử trò chơi khác",
          //GameDisable
          20017: "Trò chơi này bị hạn chế, vui lòng thử trò chơi khác",
          //UserBlacklist

          30001: "VÁN CƯỢC ĐÃ NGƯNG VUI LÒNG CHỜ VÁN SAU",
          //GameStopBet
          30002: "KHÔNG THỂ CƯỢC HAI BÊN",
          //dxGameBetErr
          30003: "SỐ DƯ KHÔNG ĐỦ VUI LÒNG NẠP THÊM ",
          //BalanceNotEnough
          30004: "ĐANG TRONG VÁN CƯỢC KHÔNG THỂ THOÁT",
          //XiaZhuCantQuit
          30005: "ĐIỀN ÍT NHẤT 5 KÝ TỰ BAO GỒM CHỮ VÀ SỐ",
          //NameFormatError
          30006: "CẦN VIẾT LIỀN KHÔNG DẤU 6-16 KÝ TỰ ",
          //PwdFormatError

          30007: "--Lỗi chưa xác định--",
          //

          30008: "KHÔNG THỂ ĐẶT CƯỢC",
          //CurCanXiaZhuError
          30009: "KHÔNG TRONG PHÒNG CƯỢC",
          //NotInRoomError
          30010: "KHÔNG THỂ TẠO PHÒNG",
          //CantCreateTableError
          30011: "MẬT KHẨU KHÔNG CHÍNH XÁC",
          //OldPwdError
          30012: "MẬT KHẨU KHÔNG TRÙNG KHỚP",
          //PwdNotSameError
          30013: "ĐÃ VƯỢT SỐ LẦN RÚT TỐI ĐA",
          //DouDouCountOverLimit
          30014: "RÚT TIỀN THẤT BẠI",
          //ActivityReceiveError
          30015: "THỜI GIAN GỬI QUÁ NGẮN",
          //TimeIntervalError
          30016: "ĐỂ THAM GIA CHÁT SỐ DƯ TỐI THIỂU LÀ 20.000",
          //ChatYxbLimitError
          30017: "SỐ DƯ TIỀN HOA HỒNG KHÔNG ĐỦ",
          //AgentBalanceNotEnough
          30018: " MÃ GIFT CODE KHÔNG CHÍNH XÁC",
          //GiftCodeErr
          30019: " MÃ GIFT CODE ĐÃ SỬ DỤNG",
          //GiftCodeUsed
          30020: "TÊN NHÂN VẬT ĐÃ TỒN TẠI",
          //NickNameExistError
          30021: "TÀI KHOẢN NGÂN HÀNG ĐÃ ĐĂNG KÝ",
          //AlreadyBindBankCard
          30022: "VUI LÒNG LIÊN KẾT NGÂN HÀNG",
          //NotBindBtCard
          30023: "TÀI KHOẢN NGÂN HÀNG ĐÃ ĐĂNG KÝ",
          //BtCardAlreadyBind
          30024: "VUI LÒNG NHẬP SỐ THẺ HỢP LỆ",
          //DouDouNumNotAllow
          30025: "THAO TÁC THẤT BẠI LỆNH TRƯỚC ĐANG CHỜ XỬ LÝ ",
          //UncompleteOrder
          30026: "KHÔNG HỢP LỆ",
          //InvalidPutPoker
          30027: "HẠ PHỎM KHÔNG HỢP LỆ",
          //InvalidPhomPoker
          30028: "KHÔNG HỢP LỆ",
          //InvalidGivePoker
          30029: "LƯỢT QUAY MIỄN PHÍ",
          //FreeGameCantQuit
          30030: "KHÔNG THỂ GIÀNH CÁI",
          //CurGrabDealerError
          30031: "TRONG 5 PHÚT CHỈ ĐƯỢC 1 ĐƠN",
          //Order5MinuteOnce
          30032: "TÀI KHOẢN BỊ ĐÌNH CHỈ",
          //PlayAccountNotAllow
          30033: "NGÂN HÀNG KHÔNG TỒN TẠI",
          //BindBankNotExist
          30034: "THẺ ĐÃ SỬ DỤNG HOẶC ĐIỀN SAI SERI MÃ THẺ",
          //NapTuDongError
          30035: "PHƯƠNG THỨC NẠP NÀY ĐANG BẢO TRÌ",
          //ChargeProtectError
          30036: "SỐ DƯ KHÔNG ĐỦ CẦN NẠP THÊM",
          //ActivityNeedChargeError
          30037: "HỌ TÊN KHÔNG ĐIỀN DẤU VÍ DỤ : NGUYEN VAN ANH",
          //DouDouAccountNotAllow
          30038: "SỐ TÀI KHOẢN ĐÃ ĐĂNG KÝ",
          //DouDouSameBt

          30039: "SỐ TIỀN RÚT TỐI THIỂU 200.000 VNĐ",
          //DouDouMinAmount
          30040: "ĐẶT CƯỢC KHÔNG HỢP LỆ",
          //InvalidLotteryCode
          30041: "CƯỢC ĐÃ ĐÓNG",
          //LotteryNumberErr
          30042: "ĐẶT CƯỢC KHÔNG HỢP LỆ",
          //LotteryPlayErr
          30043: "MÃ CƯỢC KHÔNG CHÍNH XÁC",
          //BetCodeErr
          30044: "VƯỢT QUÁ HẠN MỨC CƯỢC",
          //BetLimit
          30045: "Mật khẩu khác nhau",
          //

          30101: "ĐĂNG KÝ TÀI KHOẢN THẤT BẠI",
          //ApiCreateUserErr
          30102: "LỖI API",
          //ApiErr
          30103: "ĐĂNG NHẬP THẤT BẠI",
          //ApiLoginErr

          30200: "PHÒNG ĐÃ ĐẦY",
          //RoomPlayerNumLimit
          30201: "CHƯA ĐỦ COIN",
          //PointsNotEnough
          30202: "CẦN MỞ KHÓA KÉT SẮT",
          //PleaseUnlockSafe
          30203: "CẦN KÍCH HOẠT KÉT SẮT",
          //PleaseActivationSafe
          30204: "IP HOẶC THIẾT BỊ NÀY ĐĂNG KÝ KHÔNG HỢP LỆ",
          //RegisterLimit
          30205: "Bạn đã đăng kí rời phòng thành công",
          //QuitRoomAfterOver
          30206: "Bạn sẽ ở lại chơi tiếp",
          //QuitRoomCancel
          30207: "Bạn đã bị chủ phòng đẩy ra khỏi phòng, tự động thoát ra sau khi trò chơi kết thúc",
          //kick out tip

          30210: "Số tiền đã cược phải lớn hơn ${} trong ${} tiếng, và số dư trong tài khoản cần phải lớn hơn ${}",
          30211: "Bạn đang là khách, hiện không thể đặt cược"
        },
        gameName: {
          yxx: "BẦU CUA",
          //鱼虾蟹
          sd: "XÓC ĐĨA",
          //色碟
          guessBigSmall: "TRÊN DƯỚI",
          //牌猜大小
          roshambo: "OẲN TÙ TỲ",
          //石头剪刀布
          mini_poker: "MINI-POKER",
          //迷你
          dx: "TÀI XỈU",
          //色子 大小
          slotLs: "LONG THẦN",
          //龙神
          slotCs: "THẦN TÀI",
          //财神到
          bjl: "BACCARAT",
          //百家乐
          cardLhd: "LONG HỔ",
          //龙虎斗
          fish: "BẮN CÁ",
          //捕鱼
          cardLieng: "LIÊNG",
          lieng: "LIÊNG",
          cardPhom: "PHOM",
          bigSmallMD5: "TÀI XỈU MD5",
          dx3Min: "TÀI XỈU 3Min",
          slotFruit: "XÈNG HOA QUẢ",
          slotXy: "TÂY DU KÝ",
          dice: "SICBO",
          f35: "F35",
          slotGemstone: "BẢO THẠCH KALA",
          slotMj: "ĐƯỜNG MẠT CHƯỢC",
          slotVigorous: "Thần Tài 777",
          slotSpringFestival: "TẾT NGUYÊN ĐÁN",
          cardLhd2: "LONG HỔ 2",
          slotBowl: "TREASURE BOWL",
          slotCat: "Neko May Mắn",
          slotPoker: "Siêu cấp Ace",
          slotBoxing: "Quyền Vương",
          slotGod: "Chiến thắng Cai Shen",
          cardSss: "Mậu binh",
          dxLive: "TÀI XỈU Trực Tuyến",
          yxxLive: "BẤU CUA Trực Tuyến",
          sdLive: "XÓC ĐĨA Trực Tuyến",
          slotGoldenCity: "Kho Báu Aztec",
          slotFortuneTiger: "Hổ May Mắn",
          slotFortuneRabbit: "Thỏ May Mắn",
          slotFortuneMouse: "Chú Chuột May Mắn",
          slotFortuneOx: "Chú Bò May Mắn",
          slotPiggyGold: "slotPiggyGold",
          slotGaneshaGold: "Ganesha Vàng",
          slotGoldenEmpire: "Golden Empire",
          slotQueenOfBounty: "Nữ Hoàng Tiền Thưởng",
          slotCaptainBounty: "Kho Báu Của Thuyền Trưởng",
          slotSpeedWinner: "Nhà Vô Địch Tốc Độ",
          slotNightCity: "Night City",
          dxVip: "TÀI XỈU VIP",
          slotWildBountyShowdown: "Quyết Chiến Giành Tiền Thưởng",
          sdVip: "XÓC ĐĨA VIP",
          slotApotheosis: "Feng Shen",
          zpVip: "Roulette VIP",
          slotGoldenBook: "Book Of Gold",
          slotJLCS: "Ji Li Cai Shen",
          slotWinWinFishPrawnCrab: "Thắng Bầu Cua Tôm Cá",
          slotAlibaba: "Ali baba",
          keno: "KENO NGŨ HÀNH",
          slotWildBandito: "Wild Đạo Tặc",
          slotCocktailNights: "Đêm Cocktail",
          blackJack: "BLACK JACK",
          plinko: "Plinko",
          slotEmojiRiches: "Kho Báu Cảm Xúc",
          slotGemstone2: "BẢO THẠCH KALA 2",
          slotMahjongWays2: "Đường Mạt Chược 2",
          racing: "SPEED RACING",
          slotKylin: "Kỳ Lân Mách Nước",
          slotDreamsofMacau: "Giấc Mơ Ma Cao",
          cardLhd3d: "LONG HỔ VIP",
          slotChargeBuffalo: "Charge Buffalo",
          slotWildCoaster: "Tàu Lượn Hoang Dã",
          bjl3d: "BACCARAT VIP" //百家乐VIP
        },

        gameType: {
          all: "ALL GAMES",
          pai: "GAME BÀI",
          slot: "SLOTS",
          scenes: "GẦN NHẤT"
        },
        gameResult: {
          //大小
          Tai: "TÀI",
          Xiu: "XỈU",
          //色碟
          Chan: "CHẴN",
          Le: "LẺ",
          //骰宝
          Bao: "BÃO",
          //百家乐
          Player: "PLAYER",
          Tie: "TIE",
          Banker: "BANKER",
          PlayerPair: "PLAYER PAIR",
          BankerPair: "BANKER PAIR",
          //龙虎
          Long: "RỒNG",
          Ho: "HỔ",
          Hoa: "HÒA",
          //色碟
          red: "Đỏ",
          //红
          white: "Trắng",
          //白

          //keno
          xie: "Cua",
          lu: "Nai",
          xia: "Tôm",
          yu: "Cá",
          ji: "Gà",
          huLu: "Bầu",
          jin: "Kim",
          mu: "Mộc",
          shui: "Thủy",
          huo: "Hoả",
          tu: "Thổ"
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/WEB.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './Log.ts', './DataManager.ts', './MainManager.ts', './PlatformBase.ts', './Common.ts', './ConfigManager.ts', './ViewManager.ts'], function (exports) {
  var _inheritsLoose, cclegacy, resources, Prefab, instantiate, sys, i18n, Log, DataManager, UserKey, MainManager, PlatformBase, Common, ConfigManager, ServerType, ViewManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      resources = module.resources;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      sys = module.sys;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      Log = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      PlatformBase = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      ConfigManager = module.default;
      ServerType = module.ServerType;
    }, function (module) {
      ViewManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fc91ezRZg1F+bS+dfrQJl9q", "WEB", undefined);
      var PlatformWeb = exports('default', /*#__PURE__*/function (_PlatformBase) {
        _inheritsLoose(PlatformWeb, _PlatformBase);
        function PlatformWeb() {
          return _PlatformBase.apply(this, arguments) || this;
        }
        var _proto = PlatformWeb.prototype;
        _proto.checkLogin = function checkLogin() {
          console.log("checkLogin WEB");
          var url = window.location.href;
          var param = url.split("?");
          if (param.length > 1) {
            //            //有参数
            var redata = Common.getParams(param[1]);
            //            //游戏类型判断
            var gameType = redata["gameType"];
            if (gameType) {
              DataManager.instance.setUserDataForKey(UserKey.GAMETYPE, gameType);
            }
            var signature = redata["signature"];
            if (signature) {
              DataManager.instance.setUserDataForKey(UserKey.SIGN, signature);
            }
            DataManager.instance.setUserDataForKey(UserKey.TOKEN, redata["token"]);
            DataManager.instance.setUserDataForKey(UserKey.OID, "uuid_web");
            return true;
          } else {
            if (ConfigManager.getInstance().serverType == ServerType.LOCAL) {
              resources.load("prefab/login/login", Prefab, function (err, loginlayer) {
                if (err) {
                  return false;
                }
                var login = instantiate(loginlayer);
                ViewManager.instance.popNodeView(login, true);
              });
            } else {
              DataManager.instance.setUserDataForKey(UserKey.OID, "uuid_web");
              return true;
            }
          }
          return false;
        };
        _proto.gameExit = function gameExit() {
          if (window["MessageDeal"]) {
            //@ts-ignore
            MessageDeal.postMessage("close");
            document.getElementById("content2").innerHTML = "close";
          } else if (window["plus"]) {
            try {
              if (window.document.exitFullscreen) {
                window.document.exitFullscreen();
              }
              window["plus"].navigator.setFullscreen(false);
              if (window.history.length > 1) {
                window.history.back();
              }
            } catch (error) {
              console.log("gameExit err", error);
            }
          } else {
            if (window.history.length > 1) {
              //                // let url = DataManager.instance.getUserDataForKey(UserKey.CURL);
              var url1 = window.location.href;
              window.history.back();
              var url2 = window.location.href;
              if (url1 == url2) {
                var url = DataManager.instance.getUserDataForKey(UserKey.CURL);
                if (sys.isMobile) {
                  var index = url.indexOf("/mobile");
                  if (index > -1) {
                    window.location.href = url.slice(0, index + 7);
                  }
                } else {
                  var _index = url.indexOf("/home");
                  if (_index > -1) {
                    window.location.href = url.slice(0, _index + 5);
                  }
                }
              }
            } else {
              window.close();
            }
          }
        };
        _proto.copyToClipBoard = function copyToClipBoard(str) {
          var textArea = null;
          textArea = document.getElementById("clipBoard");
          if (textArea === null) {
            textArea = document.createElement("textarea");
            textArea.id = "clipBoard";
            textArea.textContent = str;
            document.body.appendChild(textArea);
          }
          textArea.select();
          try {
            var msg = document.execCommand("copy") ? "successful" : "unsuccessful";
            Common.showLog("已经复制到剪贴板");
            Common.showTip(i18n.lang.commonCopy);
            document.body.removeChild(textArea);
          } catch (err) {
            Common.showLog("复制到剪贴板失败");
          }
        };
        _proto.showWebview = function showWebview(url) {
          if (sys.isMobile) {
            window.location.assign(url);
          } else {
            sys.openURL(url);
          }
          //        // cc.sys.openURL(url);
        };

        _proto.getDeviceID = function getDeviceID() {
          var visitorId = "" + MainManager.getInstance().getDataManager().getUserDataForKey(UserKey.VISITOR_ID);
          return visitorId;
        };
        _proto.getApi = function getApi() {
          return null;
        };
        _proto.sendGoogle = function sendGoogle(action, data) {
          if (window["gtag"]) {
            window["gtag"]("event", action, data);
          }
        };
        _proto.noImplement = function noImplement() {
          Log.warn("\u5E73\u53F0\u65B9\u6848", "该方法未实现WEB版");
        };
        return PlatformWeb;
      }(PlatformBase));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/zh.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0b2b3GLlulFrrjCSL6X2vJo", "zh", undefined);
      /*
       * @Author: huangww
       * @Date: 2021-09-16 16:34:18
       * @LastEditTime: 2021-11-17 15:03:10
       */
      var zh = exports('zh', {
        lang: "简体中文",
        test: "测试",
        10001: "余额不足，请及时充值",
        //余额不足，请及时充值/
        10002: "不能下注两边",
        ///不能下注两边/
        10003: "选牌打",
        ///选牌打/
        10004: "下注成功",
        ///下注成功/
        10005: "下注旗已结束！",
        //  /下注旗已结束/
        10007: "必要填写",
        ///必要填写/
        10008: "下注最低1K",
        ///下注最低1K/
        10009: "请稍等",
        ////// /请稍等/
        10010: "游戏进行中",
        ///游戏进行中/
        10011: "请选择筹码",
        // /请选择筹码/
        10012: "游戏进行中不能调限额",
        // /游戏进行中不能调限额/
        10013: "要选牌打",
        ///要选牌打
        10014: "下牌不合规",
        ///下牌不合规/
        10015: "不合规",
        /////不合规/
        10016: "出牌不合规",
        // /出牌不合规/
        10017: "S复制成功",
        ///复制成功/
        10018: "旧密码不能空白",
        ///旧密码不能空白/
        10019: "新密码不能空白",
        ///新密码不能空白/
        10020: "请确认您的密码",
        ///请确认您的密码/
        10021: "密码不一致",
        ///密码不一致/
        10022: "请输入手机号码",
        ///请输入手机号码/
        10023: "发送成功",
        ///发送成功/
        10024: "请输入手机号码",
        // /  请输入手机号码/
        10025: "确认码不能为空",
        // /确认码不能为空/
        10026: "激活成功",
        ///激活成功/
        10027: "换密码成功",
        // /换密码成功/
        10028: "转换成功",
        // /转换成功/
        10029: "昵称不能空白",
        // /昵称不能空白/
        10030: "设置成功",
        ///设置成功/
        10031: "网络连接不成功",
        // /网络连接不成功/
        10032: "账号不能空白",
        // /账号不能空白/
        10033: "密码不能空白",
        // /密码不能空白/
        10034: "密码不一致",
        ///密码不一致/
        10035: "请确认您的密码",
        // /请确认您的密码/
        10036: "设置银行账号成功",
        //  /设置银行账号成功/
        10037: "充值命令提交成功",
        //   /充值命令提交成功/
        10038: "充值成功",
        //  /充值成功/
        10039: "填写金额错误",
        //  /填写金额错误/
        10040: "请选择充值金额",
        //  /请选择充值金额/
        10041: "请填写话费卡SERI",
        //  /请填写话费卡SERI/
        10042: "请填写话费卡号码",
        ////    /请填写话费卡号码/
        10043: "请输入兑换奖金号码",
        //   /请输入兑换奖金号码/
        10044: "请稍等",
        //  /请稍等/
        10045: "请输入正确金额",
        // /请输入正确金额/

        10046: "玩友还在准备您想开始",
        // /玩友还在准备您想开始/
        10047: "已更新成功，请重启游戏",
        //  /已更新成功，请重启游戏/
        10048: "服务器连接失败,请重试",
        ///服务器连接失败,请重试
        10049: "服务器连接失败,使用备用地址",
        // /服务器连接失败,使用备用地址
        10050: "网络在忙请重试",
        ///网络在忙请重试/
        10051: "您确定要登出?",
        ///您确定要登出/
        10052: "赢利不能转换",
        ///赢利不能转换/
        10053: "您已在其他设备登录\n请尝试重新登录",
        // /您已在其他设备登录/---顶号
        10054: "申请取款已成功，等系统处理",
        //  /申请取款已成功，等系统处理/
        10055: "存款命令提交成功",
        //  /存款命令提交成功/
        10056: "首次充值",
        //首次充值
        10057: "请选择类型",
        //请选择类型
        10058: "确认则重新登录，取消则退出",
        // /您已在其他设备登录!\n确认则重新登录，取消则退出/
        10059: "您的游戏账号已失效\n请尝试重新登录",
        //账号失效
        10060: "VIP房间,最低总下注必须大于20万",
        //
        10061: "单区下注上限50亿",
        //
        10062: "点数最多下注5个区域",
        //

        10063: "VIP\u623F\u95F4,\u6700\u4F4E\u603B\u4E0B\u6CE8\u5FC5\u987B\u5927\u4E8E{0}",
        //
        10064: "\u5355\u533A\u4E0B\u6CE8\u4E0A\u9650{0}",
        //
        activeBank: "进入银行",
        dxgameTip: "退款 ",
        KenoGameTip: "HOÀN TIỀN CÂN CỬA ",
        commonCopy: "复制成功",
        recordPage: "页面",
        betedExitTip: "下注不能退出房间",
        //#region fishGame
        strLoadingTip: ["还有拉霸游戏...", "龙王驾临.百倍宝箱任您赢！",
        //龙王驾临.百倍宝箱任您赢！
        "拍摄了一个幸运袋来探索海洋的宝藏!", "散弹炮为你提供100发的免费子弹!", "Sjas.Cua的浓度对同时击倒鱼群很特别!"],
        LoadingType: {
          LoadRes: "资源加载中...",
          EnterRoom: "房间进入中..."
        },
        lsGame: {
          Commission: "奖金抽水:  "
        },
        fishTip: {
          gold: "余额不足，请及时充值!",
          //金币不足提示
          noAway: "T比赛正在进行中。 当子弹从池中消失时退出游戏.",
          //不能离开
          fdTip: "\u70B9\u51FB\u4EFB\u610F1\u4E2A\u798F\u888B\u83B7\u5F97\u5956\u52B1\uFF0C<color=#E9F902>{0}</color> \u79D2\u540E\u81EA\u52A8\u9886\u53D6" //福袋提示
        },

        chatErr1: "内容无效",
        chatErr2: "内容中数字不能超过6位",
        chatErr3: "余额不足，不能发送信息",
        allIn: "下注所有",
        chooseGold: "选择下注金额",
        newStart: "新的一局",
        dxgameTimeTip: "Trả tiền cân cửa",
        loadGameErr: "游戏加载错误",
        notOpenTip: "游戏未开放，敬请期待!",
        disableBet: "当前不能下注",
        blackListTip: "该游戏被限制，请尝试其他游戏",
        disableConnect: "服务器失联，请检查网络",
        checkVersion: "检测版本",
        downloading: "downloading...",
        moveHandTip: "移动盘子开奖!",
        kickOut: "确定要踢出房间吗?",
        kickOutTip: "您已被房主请出房间",
        diyTip: "已经存在相同筹码",
        diyFullTip: "最多添加${}个筹码",
        diyTipRemove: "是否移除该筹码?",
        helpPumping: "${} 奖金抽水为 ${}% ",
        devTip: "功能开发中,敬请期待!",
        activityRecvTip: "领取成功",
        activityRecvErr: "活动状态异常",
        netChangeTip: "线路切换成功，请耐心等待",
        chipTip: "请选择筹码",
        chipMainTip: "请先下注主区",
        redPackage: {
          wait: "未开始",
          start: "进行中",
          totalDay: "${} 用时",
          totalReward: "总奖励 đ ${}",
          hasReceive: "已领取",
          noReceiveTip: "未达到领取条件",
          noStart: "活动未开始"
        },
        activityErrCode: {
          30021: "重复领取",
          30027: "您访问的IP地址，参与活动的用户数量超过活动限制"
        },
        ipErrortip: "您访问的IP地址，参与活动的用户数量超过活动限制",
        phom: {
          all: "全部",
          four: "四人桌",
          si: "私人桌",
          man: "四人",
          goldNotEnough: "余额不足,自动退出房间",
          dian: "点"
        },
        lieng: {
          colseBuyIn: "游戏已开始，无法选择带入金额"
        },
        dice: {
          result: {
            0: "小",
            1: "大",
            2: "豹"
          }
        },
        thirdteen: {
          cardType: {
            0: "乌龙",
            1: "同花十三水",
            2: "十三水",
            3: "五对三条",
            4: "三同花",
            5: "三顺子",
            7: "六对半",
            8: "凑一色"
          }
        },
        lhvip: {
          type: {
            1: "龙",
            2: "虎",
            3: "平",
            4: "同花平"
          }
        },
        //#endregion

        //网络错误代码 提示
        errTip: {
          //------------  系统错误  -----------
          302: "您已在其他设备登录",
          //AccountChanged
          401: "非法请求，禁止访问",
          //Forbidden
          402: "非法请求",
          //Illegal
          500: "内部错误",
          //ServerError
          501: "服务器繁忙，请稍后再试。",
          //ServerBusy

          10001: "缺少参数 key",
          //ErrParams
          10002: "--未知错误--FileOverMax",
          //FileOverMax
          10003: "Action 参数错误",
          //ActionNotFound
          10004: "支付methodId错误，请联系客服",
          //PayMethodIdErr
          10005: "豆豆数量不在允许范围内",
          //DoudouAmountErr
          10006: "请联系客服",
          //ConnectCustomerService
          10007: "该账号不允许此操作",
          //AccountNotAllow

          //------------- 一般功能错误  ------------
          20001: "该账号已存在，请直接登录",
          //AccountExisted
          20002: "账号不存在",
          //AccountNotExist
          20003: "账号或密码错误",
          //PasswordErr
          20004: "size 参数错误",
          //PageSizeErr
          20005: "短信发送太频繁，请稍候再试。",
          //SmsSentTooFast
          20006: "验证码错误，请输入正确的验证码",
          //SmsCodeErr
          20007: "该手机号已被绑定",
          //PhoneAlreadyBind
          20008: "手机号码格式错误",
          //PhoneFormatErr
          20009: "--未知错误--UserAlreadyBind",
          //UserAlreadyBind
          20010: "您仍需投注豆豆",
          //BetNotEnough
          20011: "豆豆不在允许的范围内",
          //AmountNotAllow
          20012: "--未知错误--DataNotFind",
          //DataNotFind
          20013: "--未知错误--WalletPayErr",
          //WalletPayErr
          20014: "--未知错误--ChatGroupNotFind",
          //ChatGroupNotFind
          20015: "--未知错误--NotAvailableSeat",
          //NotAvailableSeat
          20016: "该游戏被限制，请尝试其他游戏",
          //GameDisable
          20017: "该游戏被限制，请尝试其他游戏",
          //UserBlacklist

          30001: "本局游戏已停止下注，请等待下一局开始",
          //GameStopBet
          30002: "您不能同时压两边",
          //dxGameBetErr
          30003: "您的余额不足，请先充值",
          //BalanceNotEnough
          30004: "下注不能退出房间",
          //XiaZhuCantQuit
          30005: "至少5个字符,不能纯数字，符号只能英文和数字",
          //NameFormatError
          30006: "不能包含空格，6-16个字符",
          //PwdFormatError

          30007: "--未知错误--",
          //

          30008: "当前不能下注",
          //CurCanXiaZhuError
          30009: "不在房间中",
          //NotInRoomError
          30010: "不能创建房间",
          //CantCreateTableError
          30011: "原密码不正确",
          //OldPwdError
          30012: "两次密码不一致",
          //PwdNotSameError
          30013: "换豆豆次数已达上限",
          //DouDouCountOverLimit
          30014: "领取失败",
          //ActivityReceiveError
          30015: "发送时间间隔太短",
          //TimeIntervalError
          30016: "需要20000豆豆才能聊天",
          //ChatYxbLimitError
          30017: "佣金余额不足",
          //AgentBalanceNotEnough
          30018: "gift code 错误，请输入正确的兑换码",
          //GiftCodeErr
          30019: "gift code 已经被使用",
          //GiftCodeUsed
          30020: "昵称已存在",
          //NickNameExistError
          30021: "您已经绑定过了",
          //AlreadyBindBankCard
          30022: "请先绑定豆豆平台",
          //NotBindBtCard
          30023: "该豆豆平台已被绑定",
          //BtCardAlreadyBind
          30024: "请输入合法的豆豆平台",
          //DouDouNumNotAllow
          30025: "提交失败，您还有未处理的豆豆订单",
          //UncompleteOrder
          30026: "无效的出牌",
          //InvalidPutPoker
          30027: "无效的phom",
          //InvalidPhomPoker
          30028: "无效的给牌",
          //InvalidGivePoker
          30029: "免费游戏中不能退出房间",
          //FreeGameCantQuit
          30030: "当前不能抢庄",
          //CurGrabDealerError
          30031: "五分钟内只能提交一次订单",
          //Order5MinuteOnce
          30032: "陪玩账号不允许进入该游戏",
          //PlayAccountNotAllow
          30033: "绑定豆豆平台不存在",
          //BindBankNotExist
          30034: "豆豆平台已用过或者填错位置",
          //NapTuDongError
          30035: "此豆豆存款方式在维护",
          //ChargeProtectError
          30036: "需要先充值豆豆",
          //ActivityNeedChargeError
          30037: "豆豆平台格式不允许",
          //DouDouAccountNotAllow
          30038: "豆豆平台相同",
          //DouDouSameBt

          30039: "豆豆最低金额$1",
          //DouDouMinAmount
          30040: "未知彩票类型",
          //InvalidLotteryCode
          30041: "期号错误",
          //LotteryNumberErr
          30042: "玩法错误",
          //LotteryPlayErr
          30043: "注单码错误",
          //BetCodeErr
          30044: "下注上限",
          //BetLimit
          30045: "房间密码错误",
          //

          30101: "创建用户失败",
          //ApiCreateUserErr
          30102: "三方API出错",
          //ApiErr
          30103: "登录三方失败",
          //ApiLoginErr

          30200: "房间人数已满",
          //RoomPlayerNumLimit
          30201: "积分不足",
          //PointsNotEnough
          30202: "请先解锁",
          //PleaseUnlockSafe
          30203: "请先激活保险箱",
          //PleaseActivationSafe
          30204: "系统检测，由于您频繁注册新账号，现对您做出风险控制处理。禁止注册账号，如有疑问，联系客服",
          //RegisterLimit
          30205: "游戏结束，自动退出房间",
          //QuitRoomAfterOver
          30206: "取消退出房间",
          //QuitRoomCancel
          30207: "您已被房主请出房间，游戏结束后将自动退出",
          //kick out tip

          30210: "",
          30211: "游客，暂不支持投注"
        },
        gameName: {
          yxx: "鱼虾蟹",
          //鱼虾蟹
          sd: "色碟",
          //色碟
          guessBigSmall: "猜上下",
          //牌猜大小
          roshambo: "石头剪刀布",
          //石头剪刀布
          mini_poker: "迷你扑克",
          //迷你
          dx: "猜大小",
          //色子 大小
          slotLs: "龙神",
          //龙神
          slotCs: "财神到",
          //财神到
          bjl: "百家乐",
          //百家乐
          cardLhd: "龙虎斗",
          //龙虎斗
          fish: "捕鱼",
          //捕鱼
          cardLieng: "三公",
          lieng: "三公",
          cardPhom: "塔拉",
          bigSmallMD5: "大小MD5",
          dx3Min: "大小三分钟",
          slotFruit: "水果机",
          slotXy: "西游",
          dice: "骰宝",
          f35: "F35",
          slotGemstone: "宝石商人",
          slotMj: "麻将",
          slotVigorous: "劲爆777",
          slotSpringFestival: "大过年",
          cardLhd2: "龙虎斗2",
          slotBowl: "聚宝盆",
          slotCat: "招财猫",
          slotPoker: "超级王牌",
          slotBoxing: "拳王",
          slotGod: "赢财神",
          cardSss: "十三水",
          dxLive: "真人大小",
          yxxLive: "真人鱼虾蟹",
          sdLive: "真人色蝶",
          slotGoldenCity: "夺宝黄金城",
          slotFortuneRabbit: "金钱兔",
          slotFortuneTiger: "虎虎生财",
          slotFortuneMouse: "鼠鼠福福",
          slotFortuneOx: "十倍金牛",
          slotPiggyGold: "金猪招财",
          slotGaneshaGold: "福运象财神",
          slotGoldenEmpire: "黄金帝国",
          slotQueenOfBounty: "赏金女王",
          slotCaptainBounty: "海盗船长",
          slotNightCity: "夜上海",
          dxVip: "大小VIP",
          zpVip: "转盘",
          sdVip: "色蝶VIP",
          slotGoldenBook: "黄金之书",
          slotAlibaba: "阿里巴巴",
          keno: "基诺",
          blackJack: "21点",
          plinko: "飞碟",
          slotApotheosis: "封神",
          slotWildBountyShowdown: "赏金大对决",
          slotJLCS: "吉利财神",
          slotWinWinFishPrawnCrab: "赢鱼虾蟹",
          slotWildBandito: "亡灵大道",
          slotCocktailNights: "夜醉佳人",
          slotEmojiRiches: "表情",
          slotGemstone2: "宝石商人2",
          slotMahjongWays2: "麻将胡了2",
          racing: "极速赛车",
          slotKylin: "麒麟送宝",
          slotDreamsofMacau: "澳门豪梦",
          cardLhd3d: "龙虎斗VIP",
          slotChargeBuffalo: "牛牛冲锋",
          slotWildCoaster: "过山车",
          bjl3d: "百家乐 VIP" //百家乐VIP
        },

        gameType: {
          all: "ALL GAMES",
          pai: "GAME BÀI",
          slot: "SLOTS",
          scenes: "GẦN NHẤT"
        },
        gameResult: {
          //大小
          Tai: "大",
          Xiu: "小",
          //色碟
          Chan: "双",
          Le: "单",
          //骰宝
          Bao: "豹子",
          //百家乐
          Player: "闲",
          Tie: "和",
          Banker: "庄",
          PlayerPair: "闲双",
          BankerPair: "庄双",
          //龙虎
          Long: "龙",
          Ho: "虎",
          Hoa: "和",
          red: "红",
          //红
          white: "白",
          //白

          //鱼虾蟹
          xie: "蟹",
          lu: "鹿",
          xia: "虾",
          yu: "鱼",
          ji: "鸡",
          huLu: "葫芦",
          //keno
          jin: "金",
          mu: "木",
          shui: "水",
          huo: "火",
          tu: "土"
        }
      });
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});