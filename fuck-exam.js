// ==UserScript==
// @name         一个特别神秘的破解版脚本
// @match        https://connect.huaweicloud.com/courses/exam/*
// @match        https://edu.huaweicloud.com/certifications/*
// @match        https://lab.connect.huaweicloud.com/*
// @match        https://edu.huaweicloud.com/signup/*
// @match        https://lab.huaweicloud.com/*
// @match        https://www.huaweicloud.com
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @connect      *
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==
/*
一个特别神秘的破解版脚本
==================================

⚠️ 注意事项：
原脚本作者涉嫌诈骗，遂逆向了一下他的加密，已删除全部AFF。
• 卡密随便输入一个字符就能用！• 卡密随便输入一个字符就能用！• 卡密随便输入一个字符就能用！• 卡密随便输入一个字符就能用！
• 卡密随便输入一个字符就能用！• 卡密随便输入一个字符就能用！• 卡密随便输入一个字符就能用！• 卡密随便输入一个字符就能用！
• 卡密随便输入一个字符就能用！• 卡密随便输入一个字符就能用！• 卡密随便输入一个字符就能用！• 卡密随便输入一个字符就能用！
• 卡密随便输入一个字符就能用！• 卡密随便输入一个字符就能用！• 卡密随便输入一个字符就能用！• 卡密随便输入一个字符就能用！
• 卡密随便输入一个字符就能用！• 卡密随便输入一个字符就能用！• 卡密随便输入一个字符就能用！• 卡密随便输入一个字符就能用！
• 卡密随便输入一个字符就能用！• 卡密随便输入一个字符就能用！• 卡密随便输入一个字符就能用！• 卡密随便输入一个字符就能用！

活动地址：https://edu.huaweicloud.com/   进去后点击 云学堂集证有礼·码力全开 即可开始速通
活动地址：https://edu.huaweicloud.com/   进去后点击 云学堂集证有礼·码力全开 即可开始速通
活动地址：https://edu.huaweicloud.com/   进去后点击 云学堂集证有礼·码力全开 即可开始速通
*/
(function () {
  'use strict';

  let _0x243a16 = GM_getValue('custom_camera_image', '');
  let _0x367a3f = [];
  let _0x523b4e = GM_getValue("performance_mode", false);
  let _0x5adaf4 = GM_getValue('camera_enabled', true);
  let _0x467306 = GM_getValue('anti_switch_enabled', true);
  let _0x1ec0b0 = GM_getValue("question_interceptor_enabled", true);
  let _0x2b4764 = GM_getValue('auto_copy_enabled', true);
  let _0xf1ff1d = {
    'isVerified': GM_getValue('card_verified', false),
    'cardKey': GM_getValue("card_key", ''),
    'deviceId': GM_getValue("device_id", ''),
    'expireTime': GM_getValue("card_expire_time", 0x0),
    'cardType': GM_getValue("card_type", ''),
    'remainingCount': GM_getValue('card_remaining_count', 0x0),
    'totalCount': GM_getValue("card_total_count", 0x0),
    'lastVerifyTime': GM_getValue("last_verify_time", 0x0),
    'allowReverify': GM_getValue("allow_reverify", false)
  };
  let _0x38c5e4 = GM_getValue("ai_provider", 'deepseek');
  function _0x7ff4c6(_0x90e8bc, _0x7442b6) {
    GM_setValue("ai_" + _0x90e8bc + '_api_url', _0x7442b6.apiUrl || '');
    GM_setValue("ai_" + _0x90e8bc + '_api_key', _0x7442b6.apiKey || '');
    GM_setValue('ai_' + _0x90e8bc + "_model", _0x7442b6.model || '');
    GM_setValue("ai_" + _0x90e8bc + "_model_list", _0x7442b6.modelList || []);
  }
  function _0x1d7bb4() {
    const _0x10d43d = GM_getValue("ai_api_url", '');
    const _0x476a1a = GM_getValue("ai_api_key", '');
    const _0x21d025 = GM_getValue('ai_model', '');
    const _0x1e03ef = GM_getValue("ai_model_list", []);
    if (_0x10d43d || _0x476a1a || _0x21d025 || _0x1e03ef && _0x1e03ef.length > 0x0) {
      const _0x582c89 = {
        'apiUrl': GM_getValue('ai_' + _0x38c5e4 + "_api_url", ''),
        'apiKey': GM_getValue("ai_" + _0x38c5e4 + "_api_key", ''),
        'model': GM_getValue("ai_" + _0x38c5e4 + '_model', ''),
        'modelList': GM_getValue("ai_" + _0x38c5e4 + "_model_list", [])
      };
      if (!_0x582c89.apiUrl && !_0x582c89.apiKey) {
        _0x7ff4c6(_0x38c5e4, {
          'apiUrl': _0x10d43d,
          'apiKey': _0x476a1a,
          'model': _0x21d025,
          'modelList': _0x1e03ef
        });
        GM_setValue("ai_api_url", '');
        GM_setValue("ai_api_key", '');
        GM_setValue('ai_model', '');
        GM_setValue('ai_model_list', []);
        console.log("✅ 已迁移旧配置到 " + _0x38c5e4 + " 服务商");
      }
    }
  }
  _0x1d7bb4();
  let _0x3e4d40 = {
    'apiUrl': GM_getValue('ai_' + _0x38c5e4 + "_api_url", ''),
    'apiKey': GM_getValue("ai_" + _0x38c5e4 + "_api_key", ''),
    'model': GM_getValue("ai_" + _0x38c5e4 + '_model', ''),
    'modelList': GM_getValue("ai_" + _0x38c5e4 + "_model_list", [])
  };
  let _0x51dc95 = _0x3e4d40.apiUrl;
  let _0x10d794 = _0x3e4d40.apiKey;
  let _0x11a655 = _0x3e4d40.model;
  let _0x380423 = _0x3e4d40.modelList;
  let _0x1324e8 = GM_getValue("auto_ai_enabled", false);
  let _0x4a2c40 = GM_getValue("debug_log_enabled", false);
  let _0x5681f9 = GM_getValue("auto_submit_enabled", true);
  let _0x51475d = [];
  let _0x1ee911 = [];
  let _0x3d8f25 = false;
  let _0x536fa3 = false;
  let _0x6c24ce = 0x0;
  let _0x508039 = 0x0;
  const _0x2371a4 = {
    'deepseek': {
      'name': 'DeepSeek',
      'defaultUrl': "https://api.deepseek.com",
      'modelsEndpoint': "/models",
      'chatEndpoint': '/chat/completions',
      'defaultModel': "deepseek-chat"
    },
    'openai': {
      'name': 'OpenAI',
      'defaultUrl': "https://api.openai.com/v1",
      'modelsEndpoint': "/models",
      'chatEndpoint': "/chat/completions",
      'defaultModel': "gpt-3.5-turbo"
    },
    'gemini': {
      'name': "Google Gemini",
      'defaultUrl': "https://generativelanguage.googleapis.com/v1beta",
      'modelsEndpoint': "/models",
      'chatEndpoint': "/chat/completions",
      'defaultModel': "gemini-pro"
    },
    'custom': {
      'name': "自定义 (OpenAI API协议)",
      'defaultUrl': '',
      'modelsEndpoint': "/models",
      'chatEndpoint': "/chat/completions",
      'defaultModel': ''
    }
  };
  class _0x4c01e4 {
    static ["generateRandomBase64"](_0x193cc7) {
      let _0x42fd59 = '';
      const _0x23b01f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".length;
      for (let _0x44eff5 = 0x0; _0x44eff5 < _0x193cc7; _0x44eff5++) {
        _0x42fd59 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(Math.floor(Math.random() * _0x23b01f));
      }
      return _0x42fd59;
    }
    static ["generateDeviceId"]() {
      const _0x48b720 = navigator.userAgent + navigator.language + navigator.platform + (navigator.cookieEnabled ? '1' : '0');
      const _0x4d0081 = screen.width + 'x' + screen.height + 'x' + screen.colorDepth + 'x' + (screen.availWidth || 0x0);
      const _0x2b9512 = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const _0x1e2526 = navigator.deviceMemory || "unknown";
      const _0x391e35 = navigator.hardwareConcurrency || "unknown";
      const _0x3790c7 = navigator.languages ? navigator.languages.join(',') : navigator.language;
      const _0x38cb79 = this.getWebGLInfo();
      const _0x4d51fa = this.getCanvasFingerprint();
      const _0x67e7c9 = _0x48b720 + _0x4d0081 + _0x2b9512 + _0x1e2526 + _0x391e35 + _0x3790c7 + _0x38cb79 + _0x4d51fa;
      const _0x34dc70 = this.simpleHash(_0x67e7c9);
      const _0x24463c = this.simpleHash(_0x34dc70 + "HW_CERT_2025");
      return _0x34dc70 + _0x24463c.substring(0x0, 0x4);
    }
    static ["getWebGLInfo"]() {
      try {
        const _0xfc7eb8 = document.createElement("canvas");
        const _0x3c834b = _0xfc7eb8.getContext("webgl") || _0xfc7eb8.getContext("experimental-webgl");
        if (!_0x3c834b) {
          return "no-webgl";
        }
        const _0x4cfe1d = _0x3c834b.getParameter(_0x3c834b.RENDERER);
        const _0x53a878 = _0x3c834b.getParameter(_0x3c834b.VENDOR);
        return _0x4cfe1d + '|' + _0x53a878;
      } catch (_0x2c61f0) {
        return "webgl-error";
      }
    }
    static ["getCanvasFingerprint"]() {
      try {
        const _0x116aa4 = document.createElement("canvas");
        const _0x262df1 = _0x116aa4.getContext('2d');
        _0x116aa4.width = 0xc8;
        _0x116aa4.height = 0x32;
        _0x262df1.textBaseline = 'top';
        _0x262df1.font = "14px Arial";
        _0x262df1.fillStyle = "#f60";
        _0x262df1.fillRect(0x7d, 0x1, 0x3e, 0x14);
        _0x262df1.fillStyle = "#069";
        _0x262df1.fillText("HW认证助手 🔐", 0x2, 0xf);
        _0x262df1.fillStyle = "rgba(102, 204, 0, 0.7)";
        _0x262df1.fillText("Device ID", 0x4, 0x2d);
        return _0x116aa4.toDataURL().substring(0x0, 0x32);
      } catch (_0x5433c5) {
        return "canvas-error";
      }
    }
    static ["simpleHash"](_0x45dbd3) {
      let _0x4ad1b6 = 0x0;
      if (_0x45dbd3.length === 0x0) {
        return _0x4ad1b6;
      }
      for (let _0x4b5378 = 0x0; _0x4b5378 < _0x45dbd3.length; _0x4b5378++) {
        const _0x9d3418 = _0x45dbd3.charCodeAt(_0x4b5378);
        _0x4ad1b6 = (_0x4ad1b6 << 0x5) - _0x4ad1b6 + _0x9d3418;
        _0x4ad1b6 = _0x4ad1b6 & _0x4ad1b6;
      }
      return Math.abs(_0x4ad1b6).toString(0x10);
    }
    static ["formatTime"](_0x4cde78) {
      if (!_0x4cde78) {
        return '无';
      }
      const _0x38afcb = new Date(_0x4cde78 * 0x3e8);
      return _0x38afcb.toLocaleString("zh-CN");
    }
    static ["debounce"](_0x18bb49, _0x2e392d) {
      let _0x5092e2;
      return function _0x59330d(..._0x584b8a) {
        const _0x46cd49 = () => {
          clearTimeout(_0x5092e2);
          _0x18bb49(..._0x584b8a);
        };
        clearTimeout(_0x5092e2);
        _0x5092e2 = setTimeout(_0x46cd49, _0x2e392d);
      };
    }
    static ["imageToBase64"](_0x471208) {
      return new Promise((_0x75f049, _0x2d5a56) => {
        const _0x4ba4ed = new FileReader();
        _0x4ba4ed.onload = () => _0x75f049(_0x4ba4ed.result);
        _0x4ba4ed.onerror = _0x2d5a56;
        _0x4ba4ed.readAsDataURL(_0x471208);
      });
    }
    static ["compressImage"](_0x412f7d, _0x75b1d0 = 0x280, _0x24f64a = 0x1e0, _0x4b3af4 = 0.8) {
      return new Promise(_0x565a99 => {
        const _0x51e1f2 = new Image();
        _0x51e1f2.onload = () => {
          const _0x284b8f = document.createElement('canvas');
          let _0x5d1609 = _0x51e1f2.width;
          let _0x54f8c4 = _0x51e1f2.height;
          if (_0x5d1609 > _0x75b1d0) {
            _0x54f8c4 = _0x54f8c4 * _0x75b1d0 / _0x5d1609;
            _0x5d1609 = _0x75b1d0;
          }
          if (_0x54f8c4 > _0x24f64a) {
            _0x5d1609 = _0x5d1609 * _0x24f64a / _0x54f8c4;
            _0x54f8c4 = _0x24f64a;
          }
          _0x284b8f.width = _0x5d1609;
          _0x284b8f.height = _0x54f8c4;
          const _0x3ad722 = _0x284b8f.getContext('2d');
          _0x3ad722.drawImage(_0x51e1f2, 0x0, 0x0, _0x5d1609, _0x54f8c4);
          _0x565a99(_0x284b8f.toDataURL("image/jpeg", _0x4b3af4));
        };
        _0x51e1f2.src = _0x412f7d;
      });
    }
    static ["makeDraggable"](_0x42b799, _0x35cd1d) {
      let _0x11993c = 0x0;
      let _0x373ec0 = 0x0;
      let _0x5ea2ee = 0x0;
      let _0x428669 = 0x0;
      _0x35cd1d = _0x35cd1d || _0x42b799;
      _0x35cd1d.onmousedown = _0x1834bc;
      function _0x1834bc(_0x46ac76) {
        _0x46ac76 = _0x46ac76 || window.event;
        _0x46ac76.preventDefault();
        _0x5ea2ee = _0x46ac76.clientX;
        _0x428669 = _0x46ac76.clientY;
        document.onmouseup = _0x45f7c4;
        document.onmousemove = _0x3fb815;
      }
      function _0x3fb815(_0x258c75) {
        _0x258c75 = _0x258c75 || window.event;
        _0x258c75.preventDefault();
        _0x11993c = _0x5ea2ee - _0x258c75.clientX;
        _0x373ec0 = _0x428669 - _0x258c75.clientY;
        _0x5ea2ee = _0x258c75.clientX;
        _0x428669 = _0x258c75.clientY;
        _0x42b799.style.top = _0x42b799.offsetTop - _0x373ec0 + 'px';
        _0x42b799.style.left = _0x42b799.offsetLeft - _0x11993c + 'px';
      }
      function _0x45f7c4() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  }
  const DEV_SKIP_CARD_VERIFICATION = true; // 本地调试时设为 true；生产设为 false
  class _0x11d628 {
    constructor() {
      this.apiUrl = "http://hw.api.zcem.eu.org/api/verify.php";
      this.apiKey = "3489b93fc7707a5741085aac9149adea";
      this.maxRetries = 0x3;
      this.timeout = 0x2710;
      if (!_0xf1ff1d.deviceId) {
        _0xf1ff1d.deviceId = _0x4c01e4.generateDeviceId();
        GM_setValue("device_id", _0xf1ff1d.deviceId);
      }
    }
    async ['verifyCard'](_0x497f89) {
	if (typeof DEV_SKIP_CARD_VERIFICATION !== 'undefined' && DEV_SKIP_CARD_VERIFICATION) {
  	const fakeData = {
    	 card_type: "time",
    	 expire_time: "2099-12-31T23:59:59Z",
    	 allow_reverify: true,
    	 remaining_count: 9999,
    	 total_count: 9999};
  	this.saveVerificationState(_0x497f89 || "DEV_CARD", fakeData);
  	return { success: true, code: 0, message: "DEV 模式：模拟验证通过", data: fakeData };}

      _0x170fb8.logInfo('开始卡密验证', {
        'cardKey': _0x497f89 ? _0x497f89.substring(0x0, 0x4) + "***" : '空',
        'deviceId': _0xf1ff1d.deviceId?.["substring"](0x0, 0x8) + "***",
        'apiUrl': this.apiUrl
      });
      if (!_0x497f89 || !_0x497f89.trim()) {
        return {
          'success': false,
          'code': -0x1,
          'message': '请输入卡密'
        };
      }
      const _0x11a573 = _0x497f89.trim();
      for (let _0x284575 = 0x1; _0x284575 <= this.maxRetries; _0x284575++) {
        _0x170fb8.logInfo("卡密验证尝试 " + _0x284575 + '/' + this.maxRetries);
        try {
          const _0xa36ec4 = await this.makeApiRequest(_0x11a573, _0x284575);
          if (_0xa36ec4.success) {
            this.saveVerificationState(_0x11a573, _0xa36ec4.data);
            return _0xa36ec4;
          } else {
            if (_0xa36ec4.code !== 0x3) {
              return _0xa36ec4;
            }
          }
        } catch (_0x469d99) {
          _0x170fb8.logError("卡密验证失败 (尝试 " + _0x284575 + ')', _0x469d99);
          if (_0x284575 === this.maxRetries) {
            return {
              'success': false,
              'code': 0x3,
              'message': "网络连接失败，请检查网络后重试"
            };
          }
        }
        if (_0x284575 < this.maxRetries) {
          await new Promise(_0x45ac7f => setTimeout(_0x45ac7f, 0x3e8 * _0x284575));
        }
      }
    }
    async ["makeApiRequest"](_0x248a9d, _0x22566d) {
      const _0x57402f = {
        'card_key': _0x248a9d,
        'device_id': _0xf1ff1d.deviceId
      };
      const _0x48ccc6 = Date.now();
      _0x170fb8.logInfo("卡密验证请求参数", {
        'cardKey': _0x248a9d.substring(0x0, 0x4) + "***",
        'deviceId': _0xf1ff1d.deviceId?.["substring"](0x0, 0x8) + "***",
        'apiUrl': this.apiUrl,
        'apiKey': this.apiKey.substring(0x0, 0x8) + "***"
      });
      if (typeof GM_xmlhttpRequest === "function") {
        try {
          const _0x36e0e0 = await this.tryGetRequest(_0x248a9d, _0x48ccc6);
          if (_0x36e0e0.success || _0x36e0e0.code !== 0x3) {
            return _0x36e0e0;
          }
          _0x170fb8.logWarning("GET请求失败，尝试POST方式");
        } catch (_0x191daa) {
          _0x170fb8.logWarning("GET请求异常，尝试POST方式", {
            'error': _0x191daa.message
          });
        }
        return new Promise(_0x13dbf4 => {
          const _0x56237d = setTimeout(() => {
            _0x170fb8.logError("卡密验证POST请求超时");
            _0x13dbf4({
              'success': false,
              'code': 0x3,
              'message': "请求超时，请稍后重试"
            });
          }, this.timeout);
          _0x170fb8.logApiRequest('POST', this.apiUrl, {
            'Content-Type': "application/json",
            'X-API-KEY': this.apiKey
          }, JSON.stringify(_0x57402f));
          GM_xmlhttpRequest({
            'method': "POST",
            'url': this.apiUrl,
            'headers': {
              'Content-Type': 'application/json',
              'X-API-KEY': this.apiKey
            },
            'data': JSON.stringify(_0x57402f),
            'timeout': this.timeout,
            'onload': _0x5ee221 => {
              clearTimeout(_0x56237d);
              const _0x41c264 = Date.now() - _0x48ccc6;
              _0x170fb8.logApiResponse(this.apiUrl, _0x5ee221.status, _0x5ee221.statusText, _0x5ee221.responseHeaders, _0x5ee221.responseText, _0x41c264);
              console.log("📤 POST请求响应详情:");
              console.log('状态码:', _0x5ee221.status);
              console.log("状态文本:", _0x5ee221.statusText);
              console.log("响应头:", _0x5ee221.responseHeaders);
              console.log("响应体:", _0x5ee221.responseText);
              console.log("请求数据:", JSON.stringify(_0x57402f));
              if (_0x5ee221.status !== 0xc8) {
                console.error("❌ POST请求HTTP状态错误:", _0x5ee221.status);
                _0x13dbf4({
                  'success': false,
                  'code': _0x5ee221.status === 0x191 ? 0x4 : 0x3,
                  'message': "HTTP错误 " + _0x5ee221.status + ": " + (_0x5ee221.statusText || "未知错误")
                });
                return;
              }
              try {
                const _0x29596a = JSON.parse(_0x5ee221.responseText);
                console.log("🔍 POST解析后的数据:", _0x29596a);
                _0x13dbf4(this.processApiResponse(_0x29596a));
              } catch (_0xaf852f) {
                console.error("❌ POST JSON解析失败:", _0xaf852f);
                _0x170fb8.logError("解析API响应失败", _0xaf852f, {
                  'responseText': _0x5ee221.responseText,
                  'status': _0x5ee221.status
                });
                _0x13dbf4({
                  'success': false,
                  'code': 0x3,
                  'message': "服务器响应格式错误: " + _0xaf852f.message
                });
              }
            },
            'onerror': _0x128928 => {
              clearTimeout(_0x56237d);
              _0x170fb8.logError('卡密验证API请求失败', _0x128928);
              _0x170fb8.logWarning('POST请求失败，尝试GET方式');
              this.tryGetRequest(_0x248a9d, _0x48ccc6).then(_0x13dbf4)["catch"](() => {
                _0x13dbf4({
                  'success': false,
                  'code': 0x3,
                  'message': "网络连接失败"
                });
              });
            },
            'ontimeout': () => {
              clearTimeout(_0x56237d);
              _0x170fb8.logError("卡密验证API请求超时");
              _0x13dbf4({
                'success': false,
                'code': 0x3,
                'message': "请求超时"
              });
            }
          });
        });
      }
      try {
        _0x170fb8.logWarning('使用fetch进行卡密验证', {
          'reason': 'GM_xmlhttpRequest不可用'
        });
        const _0xb145f5 = await fetch(this.apiUrl, {
          'method': "POST",
          'headers': {
            'Content-Type': 'application/json',
            'X-API-KEY': this.apiKey
          },
          'body': JSON.stringify(_0x57402f)
        });
        const _0xdb315 = Date.now() - _0x48ccc6;
        const _0x5b41c9 = await _0xb145f5.text();
        _0x170fb8.logApiResponse(this.apiUrl, _0xb145f5.status, _0xb145f5.statusText, {}, _0x5b41c9, _0xdb315);
        const _0x2f18a4 = JSON.parse(_0x5b41c9);
        return this.processApiResponse(_0x2f18a4);
      } catch (_0x234b68) {
        _0x170fb8.logError("fetch卡密验证失败", _0x234b68);
        return {
          'success': false,
          'code': 0x3,
          'message': 'CORS限制或网络错误'
        };
      }
    }
    async ["tryGetRequest"](_0x469fdd, _0x2e3ba9) {
      return new Promise(_0x5db6ee => {
        const _0x17ef8c = this.apiUrl + "?api_key=" + encodeURIComponent(this.apiKey) + "&card_key=" + encodeURIComponent(_0x469fdd) + "&device_id=" + encodeURIComponent(_0xf1ff1d.deviceId);
        _0x170fb8.logInfo('构建GET请求URL', {
          'baseUrl': this.apiUrl,
          'apiKey': this.apiKey.substring(0x0, 0x8) + "***",
          'cardKey': _0x469fdd.substring(0x0, 0x4) + '***',
          'deviceId': _0xf1ff1d.deviceId?.["substring"](0x0, 0x8) + "***",
          'fullUrl': _0x17ef8c.replace(this.apiKey, this.apiKey.substring(0x0, 0x8) + "***").replace(_0x469fdd, _0x469fdd.substring(0x0, 0x4) + "***")
        });
        _0x170fb8.logApiRequest("GET", _0x17ef8c, {}, null);
        GM_xmlhttpRequest({
          'method': "GET",
          'url': _0x17ef8c,
          'timeout': this.timeout,
          'onload': _0x196550 => {
            const _0x4d9396 = Date.now() - _0x2e3ba9;
            _0x170fb8.logApiResponse(_0x17ef8c, _0x196550.status, _0x196550.statusText, _0x196550.responseHeaders, _0x196550.responseText, _0x4d9396);
            console.log("🌐 GET请求响应详情:");
            console.log("状态码:", _0x196550.status);
            console.log('状态文本:', _0x196550.statusText);
            console.log("响应头:", _0x196550.responseHeaders);
            console.log('响应体:', _0x196550.responseText);
            console.log('请求URL:', _0x17ef8c);
            if (_0x196550.status !== 0xc8) {
              console.error("❌ GET请求HTTP状态错误:", _0x196550.status);
              _0x5db6ee({
                'success': false,
                'code': _0x196550.status === 0x191 ? 0x4 : 0x3,
                'message': "HTTP错误 " + _0x196550.status + ": " + (_0x196550.statusText || '未知错误')
              });
              return;
            }
            try {
              const _0x520c6c = JSON.parse(_0x196550.responseText);
              console.log("🔍 GET解析后的数据:", _0x520c6c);
              _0x5db6ee(this.processApiResponse(_0x520c6c));
            } catch (_0x1fb5fc) {
              console.error("❌ GET JSON解析失败:", _0x1fb5fc);
              _0x170fb8.logError("解析GET响应失败", _0x1fb5fc, {
                'responseText': _0x196550.responseText,
                'status': _0x196550.status
              });
              _0x5db6ee({
                'success': false,
                'code': 0x3,
                'message': "服务器响应格式错误: " + _0x1fb5fc.message
              });
            }
          },
          'onerror': _0x2776d3 => {
            _0x170fb8.logError("GET请求失败", _0x2776d3);
            _0x5db6ee({
              'success': false,
              'code': 0x3,
              'message': "GET请求失败"
            });
          },
          'ontimeout': () => {
            _0x170fb8.logError('GET请求超时');
            _0x5db6ee({
              'success': false,
              'code': 0x3,
              'message': "GET请求超时"
            });
          }
        });
      });
    }
    ["processApiResponse"](_0x62156) {
      _0x170fb8.logInfo("处理卡密验证响应", {
        'code': _0x62156.code,
        'message': _0x62156.message,
        'hasData': !!_0x62156.data
      });
      switch (_0x62156.code) {
        case 0x0:
          return {
            'success': true,
            'code': 0x0,
            'message': _0x62156.message || '验证成功',
            'data': _0x62156.data
          };
        case 0x1:
          return {
            'success': false,
            'code': 0x1,
            'message': _0x62156.message || "卡密无效或已被其他设备使用",
            'userMessage': "❌ 卡密验证失败：" + (_0x62156.message || "卡密不存在或已被其他设备使用")
          };
        case 0x2:
          return {
            'success': false,
            'code': 0x2,
            'message': _0x62156.message || "API接口未启用",
            'userMessage': "⚠️ 服务暂不可用：请联系管理员启用API接口"
          };
        case 0x3:
          return {
            'success': false,
            'code': 0x3,
            'message': _0x62156.message || "服务器内部错误",
            'userMessage': "🔧 系统错误：" + (_0x62156.message || "服务器内部错误，请稍后重试")
          };
        case 0x4:
          return {
            'success': false,
            'code': 0x4,
            'message': _0x62156.message || "API密钥无效",
            'userMessage': "🔑 认证失败：API密钥无效或已被禁用"
          };
        case 0x5:
          return {
            'success': false,
            'code': 0x5,
            'message': _0x62156.message || "卡密已被禁用",
            'userMessage': "🚫 卡密已被禁用：请联系管理员处理"
          };
        case 0x6:
          return {
            'success': false,
            'code': 0x6,
            'message': _0x62156.message || "不允许重复验证",
            'userMessage': "⛔ 不允许重复验证：请联系管理员修改设置"
          };
        case 0x7:
          return {
            'success': false,
            'code': 0x7,
            'message': _0x62156.message || "次数已用完",
            'userMessage': "📊 卡密次数已用完：请联系管理员"
          };
        default:
          return {
            'success': false,
            'code': _0x62156.code,
            'message': _0x62156.message || "未知错误",
            'userMessage': "❓ 未知错误：" + (_0x62156.message || "错误代码: " + _0x62156.code)
          };
      }
    }
    ["saveVerificationState"](_0x3335dc, _0x63e6e0) {
      _0xf1ff1d.isVerified = true;
      _0xf1ff1d.cardKey = _0x3335dc;
      _0xf1ff1d.lastVerifyTime = Math.floor(Date.now() / 0x3e8);
      _0xf1ff1d.cardType = _0x63e6e0.card_type || '';
      _0xf1ff1d.allowReverify = _0x63e6e0.allow_reverify || false;
      if (_0x63e6e0.card_type === "time") {
        _0xf1ff1d.expireTime = this.parseTimeString(_0x63e6e0.expire_time);
      } else if (_0x63e6e0.card_type === "count") {
        _0xf1ff1d.remainingCount = parseInt(_0x63e6e0.remaining_count) || 0x0;
        _0xf1ff1d.totalCount = parseInt(_0x63e6e0.total_count) || 0x0;
      }
      GM_setValue("card_verified", true);
      GM_setValue("card_key", _0x3335dc);
      GM_setValue('card_expire_time', _0xf1ff1d.expireTime);
      GM_setValue('card_type', _0xf1ff1d.cardType);
      GM_setValue("card_remaining_count", _0xf1ff1d.remainingCount);
      GM_setValue("card_total_count", _0xf1ff1d.totalCount);
      GM_setValue("last_verify_time", _0xf1ff1d.lastVerifyTime);
      GM_setValue("allow_reverify", _0xf1ff1d.allowReverify);
      _0x170fb8.logInfo("卡密验证状态已保存", {
        'cardType': _0xf1ff1d.cardType,
        'expireTime': _0xf1ff1d.expireTime,
        'remainingCount': _0xf1ff1d.remainingCount
      });
    }
    ["parseTimeString"](_0x3c1737) {
      if (!_0x3c1737) {
        return 0x0;
      }
      try {
        return Math.floor(new Date(_0x3c1737).getTime() / 0x3e8);
      } catch (_0x497d50) {
        _0x170fb8.logError("解析时间失败", _0x497d50, {
          'timeStr': _0x3c1737
        });
        return 0x0;
      }
    }
    ["checkVerificationStatus"]() {
      if (!_0xf1ff1d.isVerified) {
        return {
          'valid': false,
          'reason': "not_verified",
          'message': "请先进行卡密验证"
        };
      }
      const _0x53670a = Math.floor(Date.now() / 0x3e8);
      if (_0xf1ff1d.cardType === "time") {
        if (_0x53670a > _0xf1ff1d.expireTime) {
          this.clearVerificationState();
          return {
            'valid': false,
            'reason': "expired",
            'message': "卡密已过期，请重新验证"
          };
        }
      } else {
        if (_0xf1ff1d.cardType === "count") {
          if (_0xf1ff1d.remainingCount <= 0x0) {
            this.clearVerificationState();
            return {
              'valid': false,
              'reason': "no_remaining",
              'message': "卡密次数已用完"
            };
          }
        }
      }
      return {
        'valid': true,
        'message': "验证有效"
      };
    }
    ["clearVerificationState"]() {
      _0xf1ff1d.isVerified = false;
      _0xf1ff1d.cardKey = '';
      _0xf1ff1d.expireTime = 0x0;
      _0xf1ff1d.cardType = '';
      _0xf1ff1d.remainingCount = 0x0;
      _0xf1ff1d.totalCount = 0x0;
      _0xf1ff1d.lastVerifyTime = 0x0;
      _0xf1ff1d.allowReverify = false;
      GM_setValue("card_verified", false);
      GM_setValue('card_key', '');
      GM_setValue("card_expire_time", 0x0);
      GM_setValue("card_type", '');
      GM_setValue("card_remaining_count", 0x0);
      GM_setValue('card_total_count', 0x0);
      GM_setValue("last_verify_time", 0x0);
      GM_setValue("allow_reverify", false);
    }
    ["getStatusInfo"]() {
      if (!_0xf1ff1d.isVerified) {
        return {
          'status': "not_verified",
          'message': "未验证",
          'details': null
        };
      }
      const _0x3e0417 = {
        'cardType': _0xf1ff1d.cardType,
        'deviceId': _0xf1ff1d.deviceId?.["substring"](0x0, 0x8) + "***",
        'lastVerifyTime': _0x4c01e4.formatTime(_0xf1ff1d.lastVerifyTime)
      };
      if (_0xf1ff1d.cardType === "time") {
        _0x3e0417.expireTime = _0x4c01e4.formatTime(_0xf1ff1d.expireTime);
        const _0x169c23 = _0xf1ff1d.expireTime - Math.floor(Date.now() / 0x3e8);
        _0x3e0417.remainingTime = _0x169c23 > 0x0 ? Math.floor(_0x169c23 / 0xe10) + " 小时" : "已过期";
      } else if (_0xf1ff1d.cardType === "count") {
        _0x3e0417.remainingCount = _0xf1ff1d.remainingCount;
        _0x3e0417.totalCount = _0xf1ff1d.totalCount;
      }
      return {
        'status': "verified",
        'message': '已验证',
        'details': _0x3e0417
      };
    }
  }
  class _0x170fb8 {
    static ["log"](_0x29b535, _0x277b68, _0x5bec74 = null) {
      if (!_0x4a2c40) {
        return;
      }
      const _0x21af48 = new Date().toISOString();
      const _0x373580 = {
        'timestamp': _0x21af48,
        'type': _0x29b535,
        'message': _0x277b68,
        'data': _0x5bec74 ? JSON.parse(JSON.stringify(_0x5bec74)) : null,
        'id': Date.now() + Math.random()
      };
      _0x1ee911.push(_0x373580);
      const _0x2f0031 = this.getConsoleStyle(_0x29b535);
      console.log("%c[DEBUG " + _0x21af48 + "] [" + _0x29b535 + "] " + _0x277b68, _0x2f0031, _0x5bec74 || '');
      this.notifyLogUpdate();
      if (_0x1ee911.length > 0x3e8) {
        _0x1ee911.splice(0x0, 0x1f4);
      }
    }
    static ["getConsoleStyle"](_0x129796) {
      const _0x2cae9b = {
        'INFO': "color: #4CAF50; font-weight: bold;",
        'API_REQUEST': "color: #2196F3; font-weight: bold;",
        'API_RESPONSE': "color: #00BCD4; font-weight: bold;",
        'ERROR': "color: #f44336; font-weight: bold;",
        'WARNING': "color: #FF9800; font-weight: bold;",
        'PERFORMANCE': "color: #9C27B0; font-weight: bold;"
      };
      return _0x2cae9b[_0x129796] || "color: #888; font-weight: bold;";
    }
    static ["logApiRequest"](_0x2853d9, _0x269281, _0x5e9cbb, _0x56ef70) {
      if (!_0x4a2c40) {
        return;
      }
      const _0x50d407 = {
        'method': _0x2853d9,
        'url': _0x269281,
        'headers': this.sanitizeHeaders(_0x5e9cbb),
        'body': _0x56ef70,
        'bodyPreview': this.truncateBody(_0x56ef70, 0x3e8),
        'bodySize': _0x56ef70 ? new Blob([_0x56ef70]).size : 0x0,
        'bodyType': typeof _0x56ef70,
        'timestamp': new Date().toISOString(),
        'userAgent': navigator.userAgent,
        'origin': window.location.origin
      };
      if (_0x56ef70 && typeof _0x56ef70 === 'string') {
        try {
          const _0x41ef6b = JSON.parse(_0x56ef70);
          _0x50d407.parsedBody = _0x41ef6b;
          _0x50d407.bodyType = 'JSON';
        } catch (_0x11bf0c) {
          _0x50d407.bodyType = "String";
        }
      }
      this.log("API_REQUEST", _0x2853d9 + " " + _0x269281, _0x50d407);
    }
    static ["logApiResponse"](_0x4faad9, _0x57222c, _0x4f4fe3, _0x3d4fe6, _0x2523b0, _0x26e1ef) {
      if (!_0x4a2c40) {
        return;
      }
      const _0x1b74cf = {
        'url': _0x4faad9,
        'status': _0x57222c,
        'statusText': _0x4f4fe3,
        'headers': _0x3d4fe6 || {},
        'response': _0x2523b0,
        'responsePreview': this.truncateBody(_0x2523b0, 0x3e8),
        'responseSize': _0x2523b0 ? new Blob([_0x2523b0]).size : 0x0,
        'duration': _0x26e1ef + 'ms',
        'durationMs': _0x26e1ef,
        'timestamp': new Date().toISOString(),
        'success': _0x57222c >= 0xc8 && _0x57222c < 0x12c,
        'responseType': typeof _0x2523b0
      };
      if (_0x2523b0 && typeof _0x2523b0 === 'string') {
        try {
          const _0x3cf79f = JSON.parse(_0x2523b0);
          _0x1b74cf.parsedResponse = _0x3cf79f;
          _0x1b74cf.responseType = "JSON";
          if (_0x3cf79f.choices && _0x3cf79f.choices[0x0]) {
            _0x1b74cf.aiAnswer = _0x3cf79f.choices[0x0].message?.["content"] || _0x3cf79f.choices[0x0].text;
          }
          if (_0x3cf79f.data && Array.isArray(_0x3cf79f.data)) {
            _0x1b74cf.dataCount = _0x3cf79f.data.length;
          }
        } catch (_0xff7a30) {
          _0x1b74cf.responseType = 'String';
          _0x1b74cf.parseError = _0xff7a30.message;
        }
      }
      this.log("API_RESPONSE", _0x57222c + " " + _0x4f4fe3 + " - " + _0x4faad9 + " (" + _0x26e1ef + "ms)", _0x1b74cf);
    }
    static ["logError"](_0x56afc7, _0xb97c9c, _0x260b82 = {}) {
      if (!_0x4a2c40) {
        return;
      }
      this.log("ERROR", _0x56afc7, {
        'error': {
          'name': _0xb97c9c?.['name'],
          'message': _0xb97c9c?.["message"],
          'stack': _0xb97c9c?.["stack"]
        },
        'context': _0x260b82
      });
    }
    static ["logPerformance"](_0x272b76, _0x5c6122, _0x517bd0 = {}) {
      if (!_0x4a2c40) {
        return;
      }
      this.log('PERFORMANCE', _0x272b76 + " completed in " + _0x5c6122 + 'ms', {
        'operation': _0x272b76,
        'duration': _0x5c6122,
        ..._0x517bd0
      });
    }
    static ["logInfo"](_0x189290, _0x342f37 = null) {
      if (!_0x4a2c40) {
        return;
      }
      this.log("INFO", _0x189290, _0x342f37);
    }
    static ["logWarning"](_0x55c671, _0x4911ba = null) {
      if (!_0x4a2c40) {
        return;
      }
      this.log("WARNING", _0x55c671, _0x4911ba);
    }
    static ['sanitizeHeaders'](_0x114d09) {
      if (!_0x114d09) {
        return {};
      }
      const _0x3ef3e7 = {
        ..._0x114d09
      };
      ["authorization", 'x-api-key', "api-key", "token"].forEach(_0x1aea1a => {
        const _0xc01871 = Object.keys(_0x3ef3e7).find(_0x12127a => _0x12127a.toLowerCase() === _0x1aea1a);
        if (_0xc01871 && _0x3ef3e7[_0xc01871]) {
          const _0x203b84 = _0x3ef3e7[_0xc01871];
          if (typeof _0x203b84 === "string" && _0x203b84.length > 0x8) {
            _0x3ef3e7[_0xc01871] = _0x203b84.substring(0x0, 0x8) + "***";
          } else {
            _0x3ef3e7[_0xc01871] = "***";
          }
        }
      });
      return _0x3ef3e7;
    }
    static ["truncateBody"](_0x48028d, _0x395675 = 0x7d0) {
      if (!_0x48028d) {
        return _0x48028d;
      }
      if (typeof _0x48028d === 'string') {
        return _0x48028d.length > _0x395675 ? _0x48028d.substring(0x0, _0x395675) + "... [truncated]" : _0x48028d;
      }
      try {
        const _0x30e4b0 = JSON.stringify(_0x48028d);
        return _0x30e4b0.length > _0x395675 ? _0x30e4b0.substring(0x0, _0x395675) + "... [truncated]" : _0x30e4b0;
      } catch (_0x5b3ff4) {
        return "[unable to serialize]";
      }
    }
    static ['getAllLogs']() {
      return _0x1ee911.slice();
    }
    static ["clearLogs"]() {
      _0x1ee911.length = 0x0;
    }
    static ["exportLogs"]() {
      return _0x1ee911.map(_0x261d23 => {
        const _0xb5521c = _0x261d23.data ? "\n" + JSON.stringify(_0x261d23.data, null, 0x2) : '';
        return '[' + _0x261d23.timestamp + "] [" + _0x261d23.type + "] " + _0x261d23.message + _0xb5521c;
      }).join("\n\n");
    }
    static ["notifyLogUpdate"]() {
      if (window.debugLogWindow && typeof window.debugLogWindow.updateLogs === "function") {
        window.debugLogWindow.updateLogs();
      }
    }
  }
  class _0x1905b0 {
    constructor() {
      this.isVisible = false;
      this.container = null;
      this.logContainer = null;
      this.autoScroll = true;
      this.maxDisplayLogs = 0xc8;
      this.logs = [];
      this.createWindow();
      window.aiLogWindow = this;
    }
    ["createWindow"]() {
      this.container = document.createElement("div");
      this.container.style.cssText = "\n                position: fixed;\n                top: 80px;\n                left: 10px;\n                width: 500px;\n                height: 60vh;\n                background: rgba(20, 20, 20, 0.95);\n                border: 1px solid #444;\n                border-radius: 8px;\n                z-index: 10001;\n                font-family: 'Consolas', 'Monaco', monospace;\n                font-size: 12px;\n                color: #fff;\n                display: none;\n                box-shadow: 0 4px 20px rgba(0,0,0,0.5);\n                backdrop-filter: blur(10px);\n            ";
      const _0x32cd98 = document.createElement("div");
      _0x32cd98.style.cssText = "\n                background: linear-gradient(45deg, #FF9800, #FF5722);\n                padding: 8px 12px;\n                border-radius: 8px 8px 0 0;\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                cursor: move;\n                user-select: none;\n            ";
      _0x32cd98.innerHTML = "\n                <span style=\"font-weight: bold;\">🤖 AI 答题日志</span>\n                <div>\n                    <button id=\"ai-log-window-minimize\" style=\"background:rgba(255,255,255,0.2);border:none;color:white;padding:2px 6px;margin-right:4px;border-radius:3px;cursor:pointer;\">−</button>\n                    <button id=\"ai-log-window-close\" style=\"background:rgba(255,255,255,0.2);border:none;color:white;padding:2px 6px;border-radius:3px;cursor:pointer;\">×</button>\n                </div>\n            ";
      const _0x3540ce = document.createElement("div");
      _0x3540ce.style.cssText = "\n                padding: 6px 8px;\n                background: rgba(40, 40, 40, 0.8);\n                border-bottom: 1px solid #555;\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                gap: 8px;\n            ";
      _0x3540ce.innerHTML = "\n                <div style=\"display:flex;gap:4px;align-items:center;\">\n                    <button id=\"ai-log-clear-btn\" style=\"background:#f44336;border:none;color:white;padding:2px 8px;border-radius:3px;cursor:pointer;font-size:11px;\">🗑️ 清空</button>\n                    <button id=\"ai-log-copy-btn\" style=\"background:#4CAF50;border:none;color:white;padding:2px 8px;border-radius:3px;cursor:pointer;font-size:11px;\">📋 复制</button>\n\n                    <label style=\"font-size:11px;display:flex;align-items:center;gap:4px;\">\n                        <input id=\"ai-log-auto-scroll\" type=\"checkbox\" checked style=\"margin:0;\">自动滚动\n                    </label>\n                </div>\n\n                <span id=\"ai-log-count\" style=\"color:#888;font-size:11px;\">0 条日志</span>\n            ";
      this.logContainer = document.createElement('div');
      this.logContainer.style.cssText = "\n                flex: 1;\n                overflow-y: auto;\n                padding: 8px;\n                background: rgba(0,0,0,0.3);\n                line-height: 1.4;\n            ";
      this.container.appendChild(_0x32cd98);
      this.container.appendChild(_0x3540ce);
      this.container.appendChild(this.logContainer);
      document.body.appendChild(this.container);
      this.bindEvents(_0x32cd98);
      _0x4c01e4.makeDraggable(this.container, _0x32cd98);
    }
    ["bindEvents"](_0x222fcd) {
      const _0x933151 = this.container.querySelector("#ai-log-window-close");
      _0x933151.addEventListener("click", () => this.hide());
      const _0x5271bc = this.container.querySelector("#ai-log-window-minimize");
      _0x5271bc.addEventListener("click", () => this.toggleMinimize());
      const _0x502c2c = this.container.querySelector("#ai-log-clear-btn");
      _0x502c2c.addEventListener("click", () => this.clearLogs());
      const _0x501e84 = this.container.querySelector("#ai-log-copy-btn");
      _0x501e84.addEventListener("click", () => this.copyLogs());
      const _0x3d93c5 = this.container.querySelector("#ai-log-auto-scroll");
      _0x3d93c5.addEventListener("change", _0x349d33 => {
        this.autoScroll = _0x349d33.target.checked;
      });
    }
    ["show"]() {
      this.isVisible = true;
      this.container.style.display = "flex";
      this.container.style.flexDirection = 'column';
      this.updateLogCount();
    }
    ["hide"]() {
      this.isVisible = false;
      this.container.style.display = "none";
    }
    ["toggle"]() {
      if (this.isVisible) {
        this.hide();
      } else {
        this.show();
      }
    }
    ['toggleMinimize']() {
      const _0x45e58f = this.container.style.height === '40px';
      if (_0x45e58f) {
        this.container.style.height = "60vh";
        this.container.querySelector("#ai-log-window-minimize").textContent = '−';
      } else {
        this.container.style.height = "40px";
        this.container.querySelector("#ai-log-window-minimize").textContent = '+';
      }
    }
    ["addLog"](_0x406056, _0x5c3802 = "info") {
      const _0x80625 = new Date().toLocaleTimeString();
      const _0x173436 = {
        'timestamp': new Date(),
        'message': _0x406056,
        'type': _0x5c3802
      };
      this.logs.push(_0x173436);
      if (this.logs.length > this.maxDisplayLogs) {
        this.logs = this.logs.slice(-this.maxDisplayLogs);
      }
      if (this.isVisible) {
        const _0x5c3ad0 = document.createElement("div");
        _0x5c3ad0.style.cssText = "\n                    margin-bottom: 4px;\n                    padding: 4px 6px;\n                    background: rgba(255,255,255,0.05);\n                    border-radius: 3px;\n                    border-left: 3px solid " + this.getTypeColor(_0x5c3802) + ";\n                    font-size: 11px;\n                ";
        _0x5c3ad0.innerHTML = "\n                    <span style=\"color: #888; font-size: 10px;\">[" + _0x80625 + "]</span>\n                    <span style=\"color: " + this.getTypeColor(_0x5c3802) + ";\">" + _0x406056 + "</span>\n                ";
        this.logContainer.appendChild(_0x5c3ad0);
        if (this.autoScroll) {
          this.logContainer.scrollTop = this.logContainer.scrollHeight;
        }
        this.updateLogCount();
      }
    }
    ["getTypeColor"](_0x50ae90) {
      const _0x15cabb = {
        'info': "#4CAF50",
        'warning': "#FF9800",
        'error': "#f44336",
        'success': '#00BCD4'
      };
      return _0x15cabb[_0x50ae90] || "#ddd";
    }
    ["clearLogs"]() {
      this.logs = [];
      this.logContainer.innerHTML = '';
      this.updateLogCount();
    }
    async ["copyLogs"]() {
      const _0x23a977 = this.logs.map(_0x3ea5ad => {
        const _0x2e7513 = _0x3ea5ad.timestamp.toLocaleTimeString();
        return '[' + _0x2e7513 + "] " + _0x3ea5ad.message;
      }).join("\n");
      if (!_0x23a977) {
        this.addLog('日志为空，无内容可复制', 'warning');
        return;
      }
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(_0x23a977);
          this.addLog("已将AI日志复制到剪贴板", "success");
        } else {
          const _0x13b57a = document.createElement("textarea");
          _0x13b57a.value = _0x23a977;
          _0x13b57a.style.position = 'fixed';
          _0x13b57a.style.left = "-9999px";
          document.body.appendChild(_0x13b57a);
          _0x13b57a.select();
          const _0x28f6e6 = document.execCommand("copy");
          document.body.removeChild(_0x13b57a);
          if (_0x28f6e6) {
            this.addLog("已将AI日志复制到剪贴板 (回退方法)", "success");
          } else {
            this.addLog("复制AI日志失败", "error");
          }
        }
      } catch (_0x2c3b76) {
        this.addLog("复制AI日志失败: " + (_0x2c3b76.message || _0x2c3b76), "error");
      }
    }
    ["updateLogCount"]() {
      const _0xc876fe = this.container.querySelector("#ai-log-count");
      if (_0xc876fe) {
        _0xc876fe.textContent = this.logs.length + " 条日志";
      }
    }
    ["refreshDisplay"]() {
      if (!this.isVisible) {
        return;
      }
      this.logContainer.innerHTML = '';
      this.logs.forEach(_0x2eabe6 => {
        const _0x3b784e = _0x2eabe6.timestamp.toLocaleTimeString();
        const _0x23dc67 = document.createElement("div");
        _0x23dc67.style.cssText = "\n                    margin-bottom: 4px;\n                    padding: 4px 6px;\n                    background: rgba(255,255,255,0.05);\n                    border-radius: 3px;\n                    border-left: 3px solid " + this.getTypeColor(_0x2eabe6.type) + ";\n                    font-size: 11px;\n                ";
        _0x23dc67.innerHTML = "\n                    <span style=\"color: #888; font-size: 10px;\">[" + _0x3b784e + "]</span>\n                    <span style=\"color: " + this.getTypeColor(_0x2eabe6.type) + ";\">" + _0x2eabe6.message + "</span>\n                ";
        this.logContainer.appendChild(_0x23dc67);
      });
      if (this.autoScroll) {
        this.logContainer.scrollTop = this.logContainer.scrollHeight;
      }
      this.updateLogCount();
    }
  }
  class _0x243ae1 {
    constructor() {
      this.isVisible = false;
      this.container = null;
      this.logContainer = null;
      this.filterType = "all";
      this.filterProvider = "all";
      this.filterStatus = "all";
      this.filterKeyword = '';
      this.filterTimeRange = null;
      this.autoScroll = true;
      this.showDetails = false;
      this.isPaused = false;
      this.maxDisplayLogs = 0x1f4;
      this.createWindow();
      window.debugLogWindow = this;
    }
    ["createWindow"]() {
      this.container = document.createElement('div');
      this.container.style.cssText = "\n                position: fixed;\n                top: 10px;\n                right: 10px;\n                width: 600px;\n                height: 80vh;\n                background: rgba(20, 20, 20, 0.95);\n                border: 1px solid #444;\n                border-radius: 8px;\n                z-index: 10002;\n                font-family: 'Consolas', 'Monaco', monospace;\n                font-size: 12px;\n                color: #fff;\n                display: none;\n                box-shadow: 0 4px 20px rgba(0,0,0,0.5);\n                backdrop-filter: blur(10px);\n            ";
      const _0x14cfde = document.createElement("div");
      _0x14cfde.style.cssText = "\n                background: linear-gradient(45deg, #2196F3, #21CBF3);\n                padding: 8px 12px;\n                border-radius: 8px 8px 0 0;\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                cursor: move;\n                user-select: none;\n            ";
      _0x14cfde.innerHTML = "\n                <span style=\"font-weight: bold;\">🐛 调试日志监控</span>\n                <div>\n                    <button id=\"debug-window-minimize\" style=\"background:rgba(255,255,255,0.2);border:none;color:white;padding:2px 6px;margin-right:4px;border-radius:3px;cursor:pointer;\">−</button>\n                    <button id=\"debug-window-close\" style=\"background:rgba(255,255,255,0.2);border:none;color:white;padding:2px 6px;border-radius:3px;cursor:pointer;\">×</button>\n                </div>\n            ";
      const _0x3a9e31 = document.createElement('div');
      _0x3a9e31.style.cssText = "\n                padding: 8px 12px;\n                border-bottom: 1px solid #444;\n                display: flex;\n                gap: 8px;\n                align-items: center;\n                flex-wrap: wrap;\n                background: rgba(30, 30, 30, 0.8);\n            ";
      _0x3a9e31.innerHTML = "\n                <div style=\"display:flex;gap:4px;align-items:center;flex-wrap:wrap;\">\n                    <select id=\"debug-filter-type\" style=\"background:#333;color:white;border:1px solid #555;padding:2px 4px;border-radius:3px;font-size:11px;\">\n                        <option value=\"all\">全部日志</option>\n                        <option value=\"INFO\">📋 信息</option>\n                        <option value=\"API_REQUEST\">📤 API请求</option>\n                        <option value=\"API_RESPONSE\">📥 API响应</option>\n                        <option value=\"ERROR\">❌ 错误</option>\n                        <option value=\"WARNING\">⚠️ 警告</option>\n                        <option value=\"PERFORMANCE\">⚡ 性能</option>\n                    </select>\n\n                    <select id=\"debug-filter-provider\" style=\"background:#333;color:white;border:1px solid #555;padding:2px 4px;border-radius:3px;font-size:11px;\">\n                        <option value=\"all\">所有服务商</option>\n                        <option value=\"deepseek\">DeepSeek</option>\n                        <option value=\"openai\">OpenAI</option>\n                        <option value=\"gemini\">Gemini</option>\n                        <option value=\"custom\">自定义</option>\n                    </select>\n\n                    <select id=\"debug-filter-status\" style=\"background:#333;color:white;border:1px solid #555;padding:2px 4px;border-radius:3px;font-size:11px;\">\n                        <option value=\"all\">所有状态</option>\n                        <option value=\"success\">✅ 成功</option>\n                        <option value=\"error\">❌ 失败</option>\n                    </select>\n\n                    <input id=\"debug-filter-keyword\" type=\"text\" placeholder=\"搜索关键词...\" style=\"background:#333;color:white;border:1px solid #555;padding:2px 6px;border-radius:3px;font-size:11px;width:100px;\">\n\n                    <input id=\"debug-filter-time-range\" type=\"number\" placeholder=\"最近N分钟\" min=\"1\" max=\"1440\" style=\"background:#333;color:white;border:1px solid #555;padding:2px 4px;border-radius:3px;font-size:11px;width:80px;\">\n                </div>\n\n                <div style=\"display:flex;gap:4px;align-items:center;\">\n                    <button id=\"debug-clear-btn\" style=\"background:#f44336;border:none;color:white;padding:2px 8px;border-radius:3px;cursor:pointer;font-size:11px;\">🗑️ 清空</button>\n                    <button id=\"debug-export-btn\" style=\"background:#4CAF50;border:none;color:white;padding:2px 8px;border-radius:3px;cursor:pointer;font-size:11px;\">💾 导出</button>\n                    <button id=\"debug-pause-btn\" style=\"background:#FF9800;border:none;color:white;padding:2px 8px;border-radius:3px;cursor:pointer;font-size:11px;\">⏸️ 暂停</button>\n\n                    <label style=\"font-size:11px;display:flex;align-items:center;gap:4px;\">\n                        <input id=\"debug-auto-scroll\" type=\"checkbox\" checked style=\"margin:0;\">自动滚动\n                    </label>\n\n                    <label style=\"font-size:11px;display:flex;align-items:center;gap:4px;\">\n                        <input id=\"debug-show-details\" type=\"checkbox\" style=\"margin:0;\">默认展开\n                    </label>\n\n                    <span id=\"debug-log-count\" style=\"color:#888;font-size:11px;margin-left:8px;\">0 条日志</span>\n                </div>\n            ";
      this.logContainer = document.createElement("div");
      this.logContainer.style.cssText = "\n                flex: 1;\n                overflow-y: auto;\n                padding: 8px;\n                background: rgba(0,0,0,0.3);\n                line-height: 1.4;\n            ";
      this.container.appendChild(_0x14cfde);
      this.container.appendChild(_0x3a9e31);
      this.container.appendChild(this.logContainer);
      document.body.appendChild(this.container);
      this.bindEvents(_0x14cfde);
      _0x4c01e4.makeDraggable(this.container, _0x14cfde);
    }
    ['bindEvents'](_0x10d9c1) {
      const _0x3c5290 = this.container.querySelector("#debug-window-close");
      _0x3c5290.addEventListener('click', () => this.hide());
      const _0x2d1cbd = this.container.querySelector("#debug-window-minimize");
      _0x2d1cbd.addEventListener("click", () => this.toggleMinimize());
      const _0x5dfbe2 = this.container.querySelector('#debug-filter-type');
      _0x5dfbe2.addEventListener("change", _0x262824 => {
        this.filterType = _0x262824.target.value;
        this.updateLogs();
      });
      const _0x1f4ae4 = this.container.querySelector("#debug-filter-provider");
      _0x1f4ae4.addEventListener("change", _0xd0b3bd => {
        this.filterProvider = _0xd0b3bd.target.value;
        this.updateLogs();
      });
      const _0x2b40e8 = this.container.querySelector("#debug-filter-status");
      _0x2b40e8.addEventListener("change", _0x36c078 => {
        this.filterStatus = _0x36c078.target.value;
        this.updateLogs();
      });
      const _0x58f5f9 = this.container.querySelector('#debug-filter-keyword');
      _0x58f5f9.addEventListener("input", _0x5c5b0c => {
        this.filterKeyword = _0x5c5b0c.target.value.toLowerCase();
        this.updateLogs();
      });
      const _0x3f50a7 = this.container.querySelector("#debug-filter-time-range");
      _0x3f50a7.addEventListener("input", _0x6adf17 => {
        this.filterTimeRange = _0x6adf17.target.value ? parseInt(_0x6adf17.target.value) : null;
        this.updateLogs();
      });
      const _0x3ede1c = this.container.querySelector("#debug-clear-btn");
      _0x3ede1c.addEventListener('click', () => {
        _0x170fb8.clearLogs();
        this.updateLogs();
      });
      const _0x587aa7 = this.container.querySelector("#debug-export-btn");
      _0x587aa7.addEventListener('click', _0x3c152c => this.showExportMenu(_0x3c152c));
      const _0x214c68 = this.container.querySelector("#debug-pause-btn");
      _0x214c68.addEventListener('click', () => this.togglePause(_0x214c68));
      const _0x46a2f1 = this.container.querySelector("#debug-auto-scroll");
      _0x46a2f1.addEventListener('change', _0x4e277e => {
        this.autoScroll = _0x4e277e.target.checked;
      });
      const _0xe1aa7d = this.container.querySelector("#debug-show-details");
      _0xe1aa7d.addEventListener('change', _0x2df0d9 => {
        this.showDetails = _0x2df0d9.target.checked;
        this.updateLogs();
      });
    }
    ['show']() {
      this.isVisible = true;
      this.container.style.display = "flex";
      this.container.style.flexDirection = "column";
      this.updateLogs();
    }
    ["hide"]() {
      this.isVisible = false;
      this.container.style.display = "none";
    }
    ["toggle"]() {
      if (this.isVisible) {
        this.hide();
      } else {
        this.show();
      }
    }
    ["toggleMinimize"]() {
      const _0x33652e = this.container.style.height === "40px";
      if (_0x33652e) {
        this.container.style.height = "80vh";
        this.container.querySelector("#debug-window-minimize").textContent = '−';
      } else {
        this.container.style.height = '40px';
        this.container.querySelector('#debug-window-minimize').textContent = '+';
      }
    }
    ["togglePause"](_0x76b59e) {
      this.isPaused = !this.isPaused;
      if (this.isPaused) {
        _0x76b59e.innerHTML = "▶️ 继续";
        _0x76b59e.style.background = "#4CAF50";
      } else {
        _0x76b59e.innerHTML = "⏸️ 暂停";
        _0x76b59e.style.background = "#FF9800";
        this.updateLogs();
      }
    }
    ['updateLogs']() {
      if (!this.isVisible || this.isPaused) {
        return;
      }
      const _0x3b8217 = _0x170fb8.getAllLogs();
      const _0x4e6330 = this.filterLogs(_0x3b8217);
      const _0x3edfc7 = this.container.querySelector("#debug-log-count");
      const _0xacafe6 = this.isPaused ? " (已暂停)" : '';
      _0x3edfc7.textContent = _0x4e6330.length + '/' + _0x3b8217.length + " 条日志" + _0xacafe6;
      this.logContainer.innerHTML = '';
      const _0x353acc = _0x4e6330.slice(-this.maxDisplayLogs);
      _0x353acc.forEach(_0x2b9c59 => {
        const _0x25d6e2 = this.createLogElement(_0x2b9c59);
        this.logContainer.appendChild(_0x25d6e2);
      });
      if (this.autoScroll) {
        this.logContainer.scrollTop = this.logContainer.scrollHeight;
      }
    }
    ['filterLogs'](_0x406eed) {
      return _0x406eed.filter(_0x24e694 => {
        if (this.filterType !== "all" && _0x24e694.type !== this.filterType) {
          return false;
        }
        if (this.filterProvider !== "all") {
          const _0x376ef2 = _0x24e694.data?.["provider"] || _0x24e694.data?.["url"] || '';
          if (!_0x376ef2.toLowerCase().includes(this.filterProvider)) {
            return false;
          }
        }
        if (this.filterStatus !== "all") {
          const _0x2f980c = _0x24e694.type === "ERROR" || _0x24e694.data && _0x24e694.data.error;
          const _0x599011 = !_0x2f980c && (_0x24e694.type === 'API_RESPONSE' || _0x24e694.type === "INFO");
          if (this.filterStatus === "error" && !_0x2f980c) {
            return false;
          }
          if (this.filterStatus === 'success' && !_0x599011) {
            return false;
          }
        }
        if (this.filterTimeRange) {
          const _0x1cb660 = new Date(_0x24e694.timestamp);
          const _0x13a5a6 = new Date();
          const _0x52b4cc = (_0x13a5a6 - _0x1cb660) / 60000;
          if (_0x52b4cc > this.filterTimeRange) {
            return false;
          }
        }
        if (this.filterKeyword) {
          const _0xf618d = (_0x24e694.message + " " + JSON.stringify(_0x24e694.data || {})).toLowerCase();
          if (!_0xf618d.includes(this.filterKeyword)) {
            return false;
          }
        }
        return true;
      });
    }
    ["createLogElement"](_0x4f663d) {
      const _0x7b0200 = document.createElement("div");
      _0x7b0200.style.cssText = "\n                margin-bottom: 8px;\n                padding: 8px;\n                background: rgba(255,255,255,0.05);\n                border-radius: 4px;\n                border-left: 3px solid " + this.getLogTypeColor(_0x4f663d.type) + ";\n            ";
      const _0x2c05f7 = new Date(_0x4f663d.timestamp).toLocaleTimeString();
      const _0x45928c = document.createElement('div');
      _0x45928c.style.cssText = "\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                margin-bottom: 4px;\n                font-weight: bold;\n            ";
      _0x45928c.innerHTML = "\n                <span style=\"color: " + this.getLogTypeColor(_0x4f663d.type) + ";\">[" + _0x4f663d.type + "] " + _0x4f663d.message + "</span>\n                <span style=\"color: #888; font-size: 10px;\">" + _0x2c05f7 + "</span>\n            ";
      const _0x27bbf3 = document.createElement('div');
      _0x27bbf3.style.cssText = "\n                color: #ddd;\n                margin-bottom: 4px;\n            ";
      _0x7b0200.appendChild(_0x45928c);
      _0x7b0200.appendChild(_0x27bbf3);
      if (_0x4f663d.data) {
        const _0x56b7eb = document.createElement("div");
        _0x56b7eb.style.cssText = "\n                    cursor: pointer;\n                    color: #2196F3;\n                    font-size: 11px;\n                    margin-top: 4px;\n                ";
        _0x56b7eb.textContent = "▶ 展开详情";
        const _0x5b6b77 = document.createElement('pre');
        const _0x366ff5 = this.showDetails ? "block" : "none";
        const _0xcf9014 = this.showDetails ? "▼ 收起详情" : "▶ 展开详情";
        _0x5b6b77.style.cssText = "\n                    background: rgba(0,0,0,0.3);\n                    padding: 8px;\n                    border-radius: 3px;\n                    font-size: 10px;\n                    color: #ccc;\n                    overflow-x: auto;\n                    margin-top: 4px;\n                    display: " + _0x366ff5 + ";\n                    max-height: 300px;\n                    overflow-y: auto;\n                ";
        _0x5b6b77.textContent = JSON.stringify(_0x4f663d.data, null, 0x2);
        _0x56b7eb.textContent = _0xcf9014;
        _0x56b7eb.addEventListener('click', () => {
          const _0x411b8d = _0x5b6b77.style.display !== "none";
          _0x5b6b77.style.display = _0x411b8d ? "none" : "block";
          _0x56b7eb.textContent = _0x411b8d ? "▶ 展开详情" : "▼ 收起详情";
        });
        _0x7b0200.appendChild(_0x56b7eb);
        _0x7b0200.appendChild(_0x5b6b77);
      }
      return _0x7b0200;
    }
    ["getLogTypeColor"](_0x1aa523) {
      const _0x3fc2c1 = {
        'INFO': "#4CAF50",
        'API_REQUEST': '#2196F3',
        'API_RESPONSE': "#00BCD4",
        'ERROR': "#f44336",
        'WARNING': "#FF9800",
        'PERFORMANCE': '#9C27B0'
      };
      return _0x3fc2c1[_0x1aa523] || '#888';
    }
    ['showExportMenu'](_0x55b2fb) {
      const _0xa55916 = document.querySelector(".debug-export-menu");
      if (_0xa55916) {
        _0xa55916.remove();
        return;
      }
      const _0x7e5235 = document.createElement("div");
      _0x7e5235.className = "debug-export-menu";
      _0x7e5235.style.cssText = "\n                position: fixed;\n                background: rgba(30, 30, 30, 0.95);\n                border: 1px solid #555;\n                border-radius: 4px;\n                padding: 8px 0;\n                z-index: 10003;\n                box-shadow: 0 2px 10px rgba(0,0,0,0.5);\n                min-width: 150px;\n            ";
      const _0x38404d = _0x55b2fb.target.getBoundingClientRect();
      _0x7e5235.style.top = _0x38404d.bottom + 0x5 + 'px';
      _0x7e5235.style.left = _0x38404d.left + 'px';
      const _0x407be3 = [{
        'text': "📋 复制为 JSON",
        'action': () => this.exportLogs("json")
      }, {
        'text': "📄 复制为 CSV",
        'action': () => this.exportLogs('csv')
      }, {
        'text': "📝 复制为文本",
        'action': () => this.exportLogs("text")
      }, {
        'text': "💾 下载 JSON 文件",
        'action': () => this.downloadLogs("json")
      }, {
        'text': "💾 下载 CSV 文件",
        'action': () => this.downloadLogs("csv")
      }];
      _0x407be3.forEach(_0x9ce443 => {
        const _0x3b82f9 = document.createElement('div');
        _0x3b82f9.style.cssText = "\n                    padding: 8px 16px;\n                    color: white;\n                    cursor: pointer;\n                    font-size: 11px;\n                    border-bottom: 1px solid #444;\n                ";
        _0x3b82f9.innerHTML = _0x9ce443.text;
        _0x3b82f9.addEventListener("click", () => {
          _0x9ce443.action();
          _0x7e5235.remove();
        });
        _0x3b82f9.addEventListener("mouseenter", () => {
          _0x3b82f9.style.background = "rgba(33, 150, 243, 0.3)";
        });
        _0x3b82f9.addEventListener('mouseleave', () => {
          _0x3b82f9.style.background = 'transparent';
        });
        _0x7e5235.appendChild(_0x3b82f9);
      });
      setTimeout(() => {
        document.addEventListener("click", function _0xa17fae() {
          _0x7e5235.remove();
          document.removeEventListener("click", _0xa17fae);
        });
      }, 0x64);
      document.body.appendChild(_0x7e5235);
    }
    async ['exportLogs'](_0x934309 = "json") {
      const _0x3596a2 = this.filterLogs(_0x170fb8.getAllLogs());
      let _0x95fa2b = '';
      switch (_0x934309) {
        case "json":
          const _0x20b186 = {
            'exportTime': new Date().toISOString(),
            'totalLogs': _0x3596a2.length,
            'filters': {
              'type': this.filterType,
              'provider': this.filterProvider,
              'status': this.filterStatus,
              'keyword': this.filterKeyword,
              'timeRange': this.filterTimeRange
            },
            'logs': _0x3596a2
          };
          _0x95fa2b = JSON.stringify(_0x20b186, null, 0x2);
          break;
        case "csv":
          const _0x3e28d0 = _0x3596a2.map(_0x1cf911 => {
            const _0x447e38 = new Date(_0x1cf911.timestamp).toISOString();
            const _0x32ae73 = _0x1cf911.type;
            const _0x4fee63 = (_0x1cf911.message || '').replace(/"/g, "\"\"");
            const _0x291446 = _0x1cf911.data?.["provider"] || '';
            const _0x24ec30 = _0x1cf911.type === "ERROR" ? 'Error' : "Success";
            const _0x5a94fd = JSON.stringify(_0x1cf911.data || {}).replace(/"/g, "\"\"");
            return "\"" + _0x447e38 + "\",\"" + _0x32ae73 + "\",\"" + _0x4fee63 + "\",\"" + _0x291446 + "\",\"" + _0x24ec30 + "\",\"" + _0x5a94fd + "\"";
          }).join("\n");
          _0x95fa2b = "Timestamp,Type,Message,Provider,Status,Data\n" + _0x3e28d0;
          break;
        case 'text':
          _0x95fa2b = _0x3596a2.map(_0x3f9b4c => {
            const _0x458944 = new Date(_0x3f9b4c.timestamp).toLocaleString();
            const _0x17b9e7 = _0x3f9b4c.data ? "\n  " + JSON.stringify(_0x3f9b4c.data, null, 0x2).replace(/\n/g, "\n  ") : '';
            return '[' + _0x458944 + "] [" + _0x3f9b4c.type + "] " + _0x3f9b4c.message + _0x17b9e7;
          }).join("\n\n");
          break;
      }
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(_0x95fa2b);
          this.showNotification(_0x934309.toUpperCase() + " 格式日志已复制到剪贴板", "success");
        } else {
          const _0x24b9b4 = document.createElement("textarea");
          _0x24b9b4.value = _0x95fa2b;
          _0x24b9b4.style.position = "fixed";
          _0x24b9b4.style.left = "-9999px";
          document.body.appendChild(_0x24b9b4);
          _0x24b9b4.select();
          const _0x436f19 = document.execCommand('copy');
          document.body.removeChild(_0x24b9b4);
          if (_0x436f19) {
            this.showNotification(_0x934309.toUpperCase() + " 格式日志已复制到剪贴板", "success");
          } else {
            this.showNotification('复制失败，请手动复制', "error");
          }
        }
      } catch (_0x40a8ca) {
        this.showNotification("导出失败: " + _0x40a8ca.message, "error");
      }
    }
    ["downloadLogs"](_0x4d401b = "json") {
      const _0xcea3e1 = this.filterLogs(_0x170fb8.getAllLogs());
      let _0x268375 = '';
      let _0x47f902 = '';
      let _0x2030bd = '';
      const _0x48f1ac = new Date().toISOString().replace(/[:.]/g, '-');
      switch (_0x4d401b) {
        case 'json':
          const _0x448e8b = {
            'exportTime': new Date().toISOString(),
            'totalLogs': _0xcea3e1.length,
            'filters': {
              'type': this.filterType,
              'provider': this.filterProvider,
              'status': this.filterStatus,
              'keyword': this.filterKeyword,
              'timeRange': this.filterTimeRange
            },
            'logs': _0xcea3e1
          };
          _0x268375 = JSON.stringify(_0x448e8b, null, 0x2);
          _0x47f902 = "debug-logs-" + _0x48f1ac + '.json';
          _0x2030bd = "application/json";
          break;
        case "csv":
          const _0x11d218 = _0xcea3e1.map(_0x569f2e => {
            const _0x40709b = new Date(_0x569f2e.timestamp).toISOString();
            const _0x5325de = _0x569f2e.type;
            const _0x4b0d11 = (_0x569f2e.message || '').replace(/"/g, "\"\"");
            const _0xe74d84 = _0x569f2e.data?.["provider"] || '';
            const _0x3d1ad9 = _0x569f2e.type === "ERROR" ? "Error" : "Success";
            const _0x5b3309 = JSON.stringify(_0x569f2e.data || {}).replace(/"/g, "\"\"");
            return "\"" + _0x40709b + "\",\"" + _0x5325de + "\",\"" + _0x4b0d11 + "\",\"" + _0xe74d84 + "\",\"" + _0x3d1ad9 + "\",\"" + _0x5b3309 + "\"";
          }).join("\n");
          _0x268375 = "Timestamp,Type,Message,Provider,Status,Data\n" + _0x11d218;
          _0x47f902 = "debug-logs-" + _0x48f1ac + '.csv';
          _0x2030bd = "text/csv";
          break;
      }
      try {
        const _0x10954e = new Blob([_0x268375], {
          'type': _0x2030bd
        });
        const _0x411dc6 = URL.createObjectURL(_0x10954e);
        const _0x2858a4 = document.createElement('a');
        _0x2858a4.href = _0x411dc6;
        _0x2858a4.download = _0x47f902;
        _0x2858a4.style.display = "none";
        document.body.appendChild(_0x2858a4);
        _0x2858a4.click();
        document.body.removeChild(_0x2858a4);
        URL.revokeObjectURL(_0x411dc6);
        this.showNotification(_0x4d401b.toUpperCase() + " 文件下载已开始", "success");
      } catch (_0x57f1c8) {
        this.showNotification("下载失败: " + _0x57f1c8.message, "error");
      }
    }
    ['showNotification'](_0x5d4f43, _0x405ddb = "info") {
      const _0xe044d = document.createElement("div");
      _0xe044d.style.cssText = "\n                position: fixed;\n                top: 20px;\n                right: 20px;\n                background: " + (_0x405ddb === "error" ? '#f44336' : _0x405ddb === "success" ? '#4CAF50' : "#2196F3") + ";\n                color: white;\n                padding: 12px 16px;\n                border-radius: 4px;\n                z-index: 10003;\n                font-size: 12px;\n                opacity: 0;\n                transition: opacity 0.3s;\n            ";
      _0xe044d.textContent = _0x5d4f43;
      document.body.appendChild(_0xe044d);
      setTimeout(() => _0xe044d.style.opacity = '1', 0x64);
      setTimeout(() => {
        _0xe044d.style.opacity = '0';
        setTimeout(() => document.body.removeChild(_0xe044d), 0x12c);
      }, 0xbb8);
    }
  }
  class _0x475063 {
    constructor() {
      this.isVisible = GM_getValue("control_panel_visible", true);
      this.createUI();
    }
    ["createUI"]() {
      const _0x29aaba = document.createElement("div");
      _0x29aaba.id = 'huawei-helper-control-panel';
      _0x29aaba.style.cssText = "\n                all: initial;\n                position: fixed;\n                top: 50px;\n                right: 10px;\n                z-index: 2147483646;\n                background-color: rgba(0, 0, 0, 0.8);\n                border-radius: 8px;\n                padding: 10px;\n                font-family: Arial, sans-serif;\n                font-size: 12px;\n                color: white;\n                min-width: 200px;\n                box-shadow: 0 2px 10px rgba(0,0,0,0.5);\n                user-select: none;\n            ";
      document.body.appendChild(_0x29aaba);
      const _0x3b15b1 = _0x29aaba.attachShadow({
        'mode': 'closed'
      });
      _0x3b15b1.innerHTML = "\n                <style>\n                .control-panel {\n                    width: 100%;\n                }\n                .panel-header {\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                    margin-bottom: 10px;\n                    padding-bottom: 5px;\n                    border-bottom: 1px solid #444;\n                    cursor: move;\n                }\n                .panel-title {\n                    font-weight: bold;\n                    font-size: 14px;\n                }\n                .toggle-btn {\n                    background: none;\n                    border: none;\n                    color: white;\n                    cursor: pointer;\n                    font-size: 16px;\n                }\n                .control-item {\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                    margin: 4px 0;\n                }\n                .switch {\n                    position: relative;\n                    display: inline-block;\n                    width: 40px;\n                    height: 20px;\n                }\n                .switch input {\n                    opacity: 0;\n                    width: 0;\n                    height: 0;\n                }\n                .slider {\n                    position: absolute;\n                    cursor: pointer;\n                    top: 0;\n                    left: 0;\n                    right: 0;\n                    bottom: 0;\n                    background-color: #ccc;\n                    transition: .4s;\n                    border-radius: 20px;\n                }\n                .slider:before {\n                    position: absolute;\n                    content: \"\";\n                    height: 16px;\n                    width: 16px;\n                    left: 2px;\n                    bottom: 2px;\n                    background-color: white;\n                    transition: .4s;\n                    border-radius: 50%;\n                }\n                input:checked + .slider {\n                    background-color: #2196F3;\n                }\n                input:checked + .slider:before {\n                    transform: translateX(20px);\n                }\n                .upload-btn {\n                    background-color: #2196F3;\n                    border: none;\n                    padding: 5px 10px;\n                    border-radius: 4px;\n                    cursor: pointer;\n                    color: white;\n                    width: 100%;\n                    margin-top: 5px;\n                    text-align: center;\n                }\n                .upload-btn:hover {\n                    background-color: #1976D2;\n                }\n                .hidden {\n                    display: none;\n                }\n            </style>\n                <div class=\"control-panel\">\n                    <div class=\"panel-header\" id=\"panel-header\">\n                        <div class=\"panel-title\">华为认证助手</div>\n                        <button class=\"toggle-btn\" id=\"toggle-panel\">−</button>\n                    </div>\n                    <div class=\"panel-content\" id=\"panel-content\">\n                        <!-- 第一行开关 -->\n                        <div style=\"display:flex;gap:8px;margin-bottom:4px;\">\n                            <div class=\"control-item\" style=\"flex:1;\">\n                                <label>摄像头劫持</label>\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" id=\"camera-toggle\" " + (_0x5adaf4 ? "checked" : '') + ">\n                                    <span class=\"slider\"></span>\n                                </label>\n                            </div>\n                            <div class=\"control-item\" style=\"flex:1;\">\n                                <label>防切屏保护</label>\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" id=\"anti-switch-toggle\" " + (_0x467306 ? "checked" : '') + ">\n                                    <span class=\"slider\"></span>\n                                </label>\n                            </div>\n                        </div>\n\n                        <!-- 第二行开关 -->\n                        <div style=\"display:flex;gap:8px;margin-bottom:4px;\">\n                            <div class=\"control-item\" style=\"flex:1;\">\n                                <label>题目拦截</label>\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" id=\"question-interceptor-toggle\" " + (_0x1ec0b0 ? "checked" : '') + ">\n                                    <span class=\"slider\"></span>\n                                </label>\n                            </div>\n                            <div class=\"control-item\" style=\"flex:1;\">\n                                <label>自动复制</label>\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" id=\"auto-copy-toggle\" " + (_0x2b4764 ? "checked" : '') + ">\n                                    <span class=\"slider\"></span>\n                                </label>\n                            </div>\n                        </div>\n\n                        <!-- 第三行开关 -->\n                        <div style=\"display:flex;gap:8px;margin-bottom:4px;\">\n                            <div class=\"control-item\" style=\"flex:1;\">\n                                <label>性能模式</label>\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" id=\"performance-toggle\" " + (_0x523b4e ? "checked" : '') + ">\n                                    <span class=\"slider\"></span>\n                                </label>\n                            </div>\n                            <!-- 占位空白区域 -->\n                            <div style=\"flex:1;\"></div>\n                        </div>\n                        <button class=\"upload-btn\" id=\"upload-image-btn\">上传摄像头背景</button>\n                        <div style=\"margin-top:8px;border-top:1px solid #444;padding-top:8px;\">\n                            <div style=\"margin-bottom:6px;font-weight:bold\">AI 自动答题</div>\n\n                            <!-- AI 服务商选择 -->\n                            <div style=\"margin-bottom:6px;font-size:11px\">AI 服务商</div>\n                            <select id=\"ai-provider-select\" style=\"width:100%;padding:6px;border-radius:4px;border:1px solid #444;background:#2d2d2d;color:white;margin-bottom:6px;\">\n                                <option value=\"deepseek\" " + (_0x38c5e4 === "deepseek" ? "selected" : '') + ">DeepSeek</option>\n                                <option value=\"openai\" " + (_0x38c5e4 === "openai" ? 'selected' : '') + ">OpenAI</option>\n                                <option value=\"gemini\" " + (_0x38c5e4 === 'gemini' ? "selected" : '') + ">Google Gemini</option>\n                                <option value=\"custom\" " + (_0x38c5e4 === "custom" ? "selected" : '') + ">自定义 (OpenAI API协议)</option>\n                            </select>\n\n                            <!-- API URL -->\n                            <div style=\"margin-bottom:6px;font-size:11px\">API URL</div>\n                            <input id=\"ai-api-url\" type=\"text\" placeholder=\"" + (_0x2371a4[_0x38c5e4]?.["defaultUrl"] || 'https://api.example.com/v1') + "\" style=\"width:100%;padding:6px;border-radius:4px;border:1px solid #444;background:transparent;color:white;margin-bottom:6px;\" value=\"" + _0x51dc95 + "\">\n\n                            <!-- API Key -->\n                            <div style=\"margin-bottom:6px;font-size:11px\">API Key</div>\n                            <input id=\"ai-api-key\" type=\"password\" placeholder=\"API Key\" style=\"width:100%;padding:6px;border-radius:4px;border:1px solid #444;background:transparent;color:white;margin-bottom:6px;\" value=\"" + _0x10d794 + "\">\n\n                            <!-- 模型选择和获取按钮 -->\n                            <div style=\"display:flex;gap:4px;margin-bottom:6px;\">\n                                <div style=\"flex:1;\">\n                                    <div style=\"margin-bottom:4px;font-size:11px\">AI 模型</div>\n                                    <select id=\"ai-model-select\" style=\"width:100%;padding:6px;border-radius:4px;border:1px solid #444;background:#2d2d2d;color:white;\">\n                                        <option value=\"\">请先获取模型列表</option>\n                                    </select>\n                                </div>\n                                <div style=\"display:flex;flex-direction:column;gap:2px;\">\n                                    <button id=\"ai-fetch-models-btn\" style=\"padding:4px 8px;border-radius:4px;border:1px solid #444;background:#333;color:white;font-size:10px;cursor:pointer;\">获取模型</button>\n                                    <button id=\"ai-test-connection-btn\" style=\"padding:4px 8px;border-radius:4px;border:1px solid #444;background:#333;color:white;font-size:10px;cursor:pointer;\">测试连接</button>\n                                </div>\n                            </div>\n\n                            <!-- AI功能开关 -->\n                            <div style=\"display:flex;gap:8px;margin-bottom:4px;\">\n                                <div class=\"control-item\" style=\"flex:1;\">\n                                    <label>启用 AI 自动答题</label>\n                                    <label class=\"switch\">\n                                        <input type=\"checkbox\" id=\"ai-auto-toggle\" " + (_0x1324e8 ? "checked" : '') + ">\n                                        <span class=\"slider\"></span>\n                                    </label>\n                                </div>\n                                <div class=\"control-item\" style=\"flex:1;\">\n                                    <label>启用自动交卷</label>\n                                    <label class=\"switch\">\n                                        <input type=\"checkbox\" id=\"auto-submit-toggle\" " + (_0x5681f9 ? "checked" : '') + ">\n                                        <span class=\"slider\"></span>\n                                    </label>\n                                </div>\n                            </div>\n\n                            <!-- 调试开关 -->\n                            <div class=\"control-item\">\n                                <label>启用调试日志</label>\n                                <label class=\"switch\">\n                                    <input type=\"checkbox\" id=\"debug-log-toggle\" " + (_0x4a2c40 ? "checked" : '') + ">\n                                    <span class=\"slider\"></span>\n                                </label>\n                            </div>\n\n                            <!-- 第一行: AI答题控制按钮 -->\n                            <div style=\"display:flex;gap:4px;margin-top:6px;\">\n                                <button class=\"upload-btn\" id=\"ai-start-btn\" style=\"flex:1;\">开始/终止答题</button>\n                                <button class=\"upload-btn\" id=\"ai-pause-btn\" style=\"flex:1;\">暂停/继续答题</button>\n                            </div>\n\n                            <!-- 第二行: 调试监控和AI日志按钮 -->\n                            <div style=\"display:flex;gap:4px;margin-top:4px;\">\n                                <button class=\"upload-btn\" id=\"debug-window-toggle-btn\" style=\"flex:1;font-size:10px;background:#9C27B0;\">🐛 调试监控</button>\n                                <button class=\"upload-btn\" id=\"ai-log-window-toggle-btn\" style=\"flex:1;font-size:10px;background:#FF5722;\">🤖 AI日志</button>\n                            </div>\n\n                            <!-- 第三行: 日志管理按钮 -->\n                            <div style=\"display:flex;gap:2px;margin-top:4px;\">\n                                <button class=\"upload-btn\" id=\"debug-copy-log-btn\" style=\"flex:1;font-size:9px;\">复制调试日志</button>\n                                <button class=\"upload-btn\" id=\"debug-clear-log-btn\" style=\"flex:1;font-size:9px;\">清空调试日志</button>\n                                <button class=\"upload-btn\" id=\"ai-copy-log-btn\" style=\"flex:1;font-size:9px;\">复制AI答题日志</button>\n                                <button class=\"upload-btn\" id=\"ai-clear-log-btn\" style=\"flex:1;font-size:9px;\">清空AI答题日志</button>\n                            </div>\n\n                            <!-- 进度和状态 -->\n                            <div id=\"ai-progress\" style=\"margin-top:8px;font-size:12px;color:#ddd\">进度: 0/0</div>\n                            <div id=\"ai-status\" style=\"margin-top:4px;font-size:11px;color:#aaa\">状态: 未配置</div>\n\n                            <!-- AI答题日志显示区域 -->\n                            <div id=\"ai-log\" style=\"margin-top:8px;max-height:120px;overflow-y:auto;font-size:10px;color:#ccc;background:rgba(0,0,0,0.3);border-radius:4px;padding:6px;line-height:1.3;\"></div>\n                        </div>\n                    </div>\n                </div>\n            ";
      _0x4c01e4.makeDraggable(_0x29aaba, _0x3b15b1.getElementById("panel-header"));
      const _0x587b28 = _0x3b15b1.getElementById("toggle-panel");
      const _0x3c071a = _0x3b15b1.getElementById('panel-content');
      _0x587b28.addEventListener("click", () => {
        this.isVisible = !this.isVisible;
        _0x3c071a.classList.toggle("hidden", !this.isVisible);
        _0x587b28.textContent = this.isVisible ? '−' : '+';
        GM_setValue("control_panel_visible", this.isVisible);
      });
      if (!this.isVisible) {
        _0x3c071a.classList.add("hidden");
        _0x587b28.textContent = '+';
      }
      _0x3b15b1.getElementById("camera-toggle").addEventListener("change", _0x4193c5 => {
        _0x5adaf4 = _0x4193c5.target.checked;
        GM_setValue("camera_enabled", _0x5adaf4);
        if (_0x5adaf4) {
          _0x495070.hookMediaDevices();
        } else {
          _0x495070.unhookMediaDevices();
        }
      });
      _0x3b15b1.getElementById('anti-switch-toggle').addEventListener('change', _0x5c9a29 => {
        _0x467306 = _0x5c9a29.target.checked;
        GM_setValue("anti_switch_enabled", _0x467306);
        if (_0x467306) {
          _0x1a5a17();
        } else {
          console.log("防切屏功能已禁用");
        }
      });
      _0x3b15b1.getElementById("question-interceptor-toggle").addEventListener("change", _0x9d4e58 => {
        _0x1ec0b0 = _0x9d4e58.target.checked;
        GM_setValue("question_interceptor_enabled", _0x1ec0b0);
        if (_0x1ec0b0) {
          _0x2ae86d = _0x559006();
        } else if (_0x2ae86d) {
          _0x2ae86d.disable();
          _0x2ae86d = null;
        }
      });
      _0x3b15b1.getElementById('auto-copy-toggle').addEventListener("change", _0x52ee84 => {
        _0x2b4764 = _0x52ee84.target.checked;
        GM_setValue("auto_copy_enabled", _0x2b4764);
      });
      _0x3b15b1.getElementById('performance-toggle').addEventListener("change", _0x20b7a4 => {
        _0x523b4e = _0x20b7a4.target.checked;
        GM_setValue('performance_mode', _0x523b4e);
      });
      _0x3b15b1.getElementById("upload-image-btn").addEventListener("click", () => {
        _0x8105b8.show();
      });
      const _0xd901da = _0x3b15b1.getElementById("ai-provider-select");
      const _0x44334c = _0x3b15b1.getElementById("ai-api-url");
      const _0x34fb13 = _0x3b15b1.getElementById("ai-api-key");
      const _0x32b4e7 = _0x3b15b1.getElementById('ai-model-select');
      const _0x4f2457 = _0x3b15b1.getElementById("ai-fetch-models-btn");
      const _0x48dc24 = _0x3b15b1.getElementById('ai-test-connection-btn');
      const _0x1794df = _0x3b15b1.getElementById("ai-auto-toggle");
      const _0x1ada45 = _0x3b15b1.getElementById("debug-log-toggle");
      const _0x51e188 = _0x3b15b1.getElementById("auto-submit-toggle");
      const _0x4fe890 = _0x3b15b1.getElementById("ai-start-btn");
      const _0x524912 = _0x3b15b1.getElementById("ai-pause-btn");
      const _0x1d46d6 = _0x3b15b1.getElementById("ai-progress");
      const _0x28b608 = _0x3b15b1.getElementById("ai-status");
      const _0xe99776 = _0x3b15b1.getElementById("ai-log");
      const _0x10680c = _0x3b15b1.getElementById("debug-copy-log-btn");
      const _0x2daded = _0x3b15b1.getElementById("debug-clear-log-btn");
      const _0x46f9dd = _0x3b15b1.getElementById("debug-window-toggle-btn");
      const _0x209c1a = _0x3b15b1.getElementById("ai-log-window-toggle-btn");
      function _0x4c720c(_0x51ef5d, _0xc06be0 = false) {
        if (_0x28b608) {
          _0x28b608.textContent = "状态: " + _0x51ef5d;
          _0x28b608.style.color = _0xc06be0 ? "#ff6b6b" : "#aaa";
        }
      }
      function _0x3e80b9(_0xe12e44) {
        _0x32b4e7.innerHTML = "<option value=\"\">请选择模型</option>";
        if (_0xe12e44 && _0xe12e44.length > 0x0) {
          _0xe12e44.forEach(_0x5a7bfe => {
            const _0x4eb24f = document.createElement("option");
            _0x4eb24f.value = _0x5a7bfe.id;
            _0x4eb24f.textContent = _0x5a7bfe.name + " (" + _0x5a7bfe.owned_by + ')';
            _0x4eb24f.selected = _0x5a7bfe.id === _0x11a655;
            _0x32b4e7.appendChild(_0x4eb24f);
          });
          _0x4c720c("已加载 " + _0xe12e44.length + " 个模型");
        } else {
          _0x4c720c("未找到可用模型", true);
        }
      }
      function _0x42d207() {
        if (_0x44334c.value !== _0x51dc95 || _0x34fb13.value !== _0x10d794) {
          _0x7ff4c6(_0x38c5e4, {
            'apiUrl': _0x44334c.value,
            'apiKey': _0x34fb13.value,
            'model': _0x11a655,
            'modelList': _0x380423
          });
        }
        const _0x29cf12 = {
          'apiUrl': GM_getValue('ai_' + _0x38c5e4 + "_api_url", ''),
          'apiKey': GM_getValue("ai_" + _0x38c5e4 + "_api_key", ''),
          'model': GM_getValue("ai_" + _0x38c5e4 + '_model', ''),
          'modelList': GM_getValue("ai_" + _0x38c5e4 + "_model_list", [])
        };
        _0x51dc95 = _0x29cf12.apiUrl;
        _0x10d794 = _0x29cf12.apiKey;
        _0x11a655 = _0x29cf12.model;
        _0x380423 = _0x29cf12.modelList;
        const _0x5025ab = _0x2371a4[_0x38c5e4] || _0x2371a4.deepseek;
        _0x44334c.placeholder = _0x5025ab.defaultUrl || "https://api.example.com/v1";
        _0x44334c.value = _0x51dc95;
        _0x34fb13.value = _0x10d794;
        if (!_0x51dc95 && _0x5025ab.defaultUrl) {
          _0x44334c.value = _0x5025ab.defaultUrl;
          _0x51dc95 = _0x5025ab.defaultUrl;
          _0x7ff4c6(_0x38c5e4, {
            'apiUrl': _0x51dc95,
            'apiKey': _0x10d794,
            'model': _0x11a655,
            'modelList': _0x380423
          });
        }
        if (_0x380423 && _0x380423.length > 0x0) {
          _0x3e80b9(_0x380423);
          if (_0x11a655) {
            _0x32b4e7.value = _0x11a655;
          }
        } else {
          _0x32b4e7.innerHTML = "<option value=\"\">请先获取模型列表</option>";
          _0x4c720c('请配置API信息后获取模型列表');
        }
      }
      _0x42d207();
      if (_0x380423 && _0x380423.length > 0x0) {
        _0x3e80b9(_0x380423);
      } else {
        _0x4c720c("请配置API信息后获取模型列表");
      }
      _0xd901da.addEventListener("change", _0x190ede => {
        _0x38c5e4 = _0x190ede.target.value;
        GM_setValue('ai_provider', _0x38c5e4);
        _0x42d207();
        _0x275185(_0xe99776, "已切换到 " + _0x2371a4[_0x38c5e4]?.['name'] + " 服务商");
      });
      _0x44334c.addEventListener("change", _0x51fa4f => {
        _0x51dc95 = _0x51fa4f.target.value.trim();
        _0x7ff4c6(_0x38c5e4, {
          'apiUrl': _0x51dc95,
          'apiKey': _0x10d794,
          'model': _0x11a655,
          'modelList': _0x380423
        });
        _0x4c720c("URL已更新，请重新获取模型列表");
      });
      _0x34fb13.addEventListener("change", _0x14594a => {
        _0x10d794 = _0x14594a.target.value.trim();
        _0x7ff4c6(_0x38c5e4, {
          'apiUrl': _0x51dc95,
          'apiKey': _0x10d794,
          'model': _0x11a655,
          'modelList': _0x380423
        });
        _0x4c720c("API Key已更新，请重新获取模型列表");
      });
      _0x32b4e7.addEventListener("change", _0x1adfb7 => {
        _0x11a655 = _0x1adfb7.target.value;
        _0x7ff4c6(_0x38c5e4, {
          'apiUrl': _0x51dc95,
          'apiKey': _0x10d794,
          'model': _0x11a655,
          'modelList': _0x380423
        });
        if (_0x11a655) {
          _0x4c720c("已选择模型: " + _0x11a655);
        } else {
          _0x4c720c("请选择模型");
        }
      });
      _0x4f2457.addEventListener("click", async () => {
        if (!_0x51dc95 || !_0x10d794) {
          _0x4c720c("请先填写API URL和API Key", true);
          _0x275185(_0xe99776, "请先配置API URL和API Key");
          return;
        }
        _0x4f2457.textContent = "获取中...";
        _0x4f2457.disabled = true;
        _0x4c720c("正在获取模型列表...");
        try {
          const _0x5dd978 = await _0x74db4e();
          if (_0x5dd978.ok && _0x5dd978.models) {
            _0x380423 = _0x5dd978.models;
            _0x7ff4c6(_0x38c5e4, {
              'apiUrl': _0x51dc95,
              'apiKey': _0x10d794,
              'model': _0x11a655,
              'modelList': _0x380423
            });
            _0x3e80b9(_0x5dd978.models);
            _0x275185(_0xe99776, "成功获取 " + _0x5dd978.models.length + " 个模型");
            if (!_0x11a655 && _0x5dd978.models.length > 0x0) {
              const _0x2d3de0 = _0x5dd978.models[0x0];
              _0x11a655 = _0x2d3de0.id;
              _0x32b4e7.value = _0x2d3de0.id;
              _0x7ff4c6(_0x38c5e4, {
                'apiUrl': _0x51dc95,
                'apiKey': _0x10d794,
                'model': _0x11a655,
                'modelList': _0x380423
              });
              _0x4c720c("已自动选择模型: " + _0x2d3de0.name);
            }
          } else {
            _0x4c720c("获取模型失败", true);
            _0x275185(_0xe99776, "获取模型失败: " + _0x5dd978.error);
          }
        } catch (_0x5685ae) {
          _0x4c720c("获取模型出错", true);
          _0x275185(_0xe99776, "获取模型出错: " + (_0x5685ae.message || _0x5685ae));
        } finally {
          _0x4f2457.textContent = "获取模型";
          _0x4f2457.disabled = false;
        }
      });
      _0x48dc24.addEventListener("click", async () => {
        if (!_0x51dc95 || !_0x10d794) {
          _0x4c720c("请先填写API URL和API Key", true);
          _0x275185(_0xe99776, "请先配置API URL和API Key");
          return;
        }
        _0x48dc24.textContent = "测试中...";
        _0x48dc24.disabled = true;
        _0x4c720c("正在测试连接...");
        try {
          const _0x1385d4 = await _0x4a679c();
          if (_0x1385d4.ok) {
            _0x4c720c('连接测试成功');
            _0x275185(_0xe99776, "连接测试成功: " + _0x1385d4.message);
          } else {
            _0x4c720c("连接测试失败", true);
            _0x275185(_0xe99776, "连接测试失败: " + _0x1385d4.error);
          }
        } catch (_0x46d2e7) {
          _0x4c720c('连接测试出错', true);
          _0x275185(_0xe99776, "连接测试出错: " + (_0x46d2e7.message || _0x46d2e7));
        } finally {
          _0x48dc24.textContent = '测试连接';
          _0x48dc24.disabled = false;
        }
      });
      _0x1794df.addEventListener("change", _0x4a58ab => {
        _0x1324e8 = _0x4a58ab.target.checked;
        GM_setValue("auto_ai_enabled", _0x1324e8);
        if (!_0x1324e8 && _0x3d8f25) {
          _0x31dba0(true, _0x1d46d6, _0xe99776);
        }
      });
      _0x1ada45.addEventListener("change", _0x2ab132 => {
        _0x4a2c40 = _0x2ab132.target.checked;
        GM_setValue("debug_log_enabled", _0x4a2c40);
        const _0x423854 = _0x4a2c40 ? "已启用" : "已禁用";
        _0x275185(_0xe99776, '调试日志' + _0x423854);
        _0x170fb8.logInfo("调试日志" + _0x423854, {
          'enabled': _0x4a2c40
        });
        if (_0x4a2c40) {
          _0x4c720c("调试模式已启用");
        } else {
          _0x4c720c('调试模式已禁用');
        }
      });
      _0x51e188.addEventListener('change', _0x58139a => {
        _0x5681f9 = _0x58139a.target.checked;
        GM_setValue('auto_submit_enabled', _0x5681f9);
        const _0x187e0f = _0x5681f9 ? '已启用' : '已禁用';
        _0x275185(_0xe99776, "自动交卷" + _0x187e0f);
        _0x170fb8.logInfo("自动交卷" + _0x187e0f, {
          'enabled': _0x5681f9
        });
        if (_0x5681f9) {
          _0x4c720c("自动交卷已启用");
        } else {
          _0x4c720c('自动交卷已禁用');
        }
      });
      _0x10680c.addEventListener("click", async () => {
        const _0x2613b8 = _0x170fb8.exportLogs();
        if (!_0x2613b8) {
          _0x275185(_0xe99776, "调试日志为空");
          return;
        }
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(_0x2613b8);
            _0x275185(_0xe99776, "已将调试日志复制到剪贴板");
          } else {
            const _0x456875 = document.createElement("textarea");
            _0x456875.value = _0x2613b8;
            _0x456875.style.position = "fixed";
            _0x456875.style.left = "-9999px";
            document.body.appendChild(_0x456875);
            _0x456875.select();
            const _0x53a35f = document.execCommand("copy");
            document.body.removeChild(_0x456875);
            if (_0x53a35f) {
              _0x275185(_0xe99776, "已将调试日志复制到剪贴板 (回退方法)");
            } else {
              _0x275185(_0xe99776, '复制调试日志失败');
            }
          }
        } catch (_0x3268ce) {
          _0x275185(_0xe99776, "复制调试日志失败: " + (_0x3268ce.message || _0x3268ce));
        }
      });
      _0x2daded.addEventListener("click", () => {
        _0x170fb8.clearLogs();
        _0x275185(_0xe99776, "已清空调试日志");
      });
      _0x46f9dd.addEventListener("click", () => {
        if (!window.debugLogWindow) {
          window.debugLogWindow = new _0x243ae1();
        }
        window.debugLogWindow.toggle();
        const _0x2c7180 = window.debugLogWindow.isVisible;
        _0x46f9dd.style.background = _0x2c7180 ? '#4CAF50' : "#9C27B0";
        if (window.aiLogWindow) {
          window.aiLogWindow.addLog("调试监控窗口" + (_0x2c7180 ? "已打开" : "已关闭"), "info");
        }
      });
      _0x209c1a.addEventListener("click", () => {
        if (!_0x55fbc5) {
          _0x55fbc5 = new _0x1905b0();
        }
        _0x55fbc5.toggle();
        const _0x398935 = _0x55fbc5.isVisible;
        _0x209c1a.style.background = _0x398935 ? "#4CAF50" : "#FF5722";
        _0x55fbc5.addLog('AI日志窗口' + (_0x398935 ? "已打开" : '已关闭'), "info");
      });
      const _0x34918b = _0x3b15b1.getElementById("ai-copy-log-btn");
      _0x34918b.addEventListener('click', async () => {
        const _0x2b520b = _0x51475d && _0x51475d.length ? _0x51475d.join("\n") : '';
        if (!_0x2b520b) {
          _0x275185(_0xe99776, "日志为空，无内容可复制");
          return;
        }
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(_0x2b520b);
            _0x275185(_0xe99776, "已将 AI 日志复制到剪贴板 (Clipboard API)");
            return;
          }
        } catch (_0x54ed45) {
          _0x275185(_0xe99776, "Clipboard API 复制失败，尝试回退方法: " + (_0x54ed45 && _0x54ed45.message ? _0x54ed45.message : _0x54ed45));
        }
        try {
          const _0x30907b = document.createElement("textarea");
          _0x30907b.value = _0x2b520b;
          _0x30907b.style.position = "fixed";
          _0x30907b.style.left = "-9999px";
          document.body.appendChild(_0x30907b);
          _0x30907b.select();
          const _0x4b2796 = document.execCommand("copy");
          document.body.removeChild(_0x30907b);
          if (_0x4b2796) {
            _0x275185(_0xe99776, "已将 AI 日志复制到剪贴板 (execCommand 回退)");
          } else {
            _0x275185(_0xe99776, "复制日志失败：execCommand 返回 false");
          }
        } catch (_0x5045d7) {
          _0x275185(_0xe99776, "复制日志回退方法出错: " + (_0x5045d7 && _0x5045d7.message ? _0x5045d7.message : _0x5045d7));
        }
      });
      const _0x38b22e = _0x3b15b1.getElementById("ai-clear-log-btn");
      _0x38b22e.addEventListener("click", () => {
        if (!_0x51475d || _0x51475d.length === 0x0) {
          _0x275185(_0xe99776, "日志已为空");
          return;
        }
        if (confirm("确定要清空AI答题日志吗？")) {
          _0x51475d.length = 0x0;
          _0xe99776.textContent = '';
          _0x275185(_0xe99776, "AI答题日志已清空");
        }
      });
      if (!_0x4fe890) {
        console.error("AI开始按钮未找到");
        _0x275185(_0xe99776, "AI开始按钮未找到，请检查页面是否正确加载");
        return;
      }
      if (!_0x524912) {
        console.error('AI暂停按钮未找到');
        _0x275185(_0xe99776, 'AI暂停按钮未找到，请检查页面是否正确加载');
        return;
      }
      console.log("AI按钮已正确获取，开始绑定事件监听器");
      _0x524912.disabled = true;
      _0x4fe890.textContent = '开始答题';
      _0x524912.textContent = '暂停答题';
      _0x4fe890.addEventListener("click", async () => {
        console.log("AI开始按钮被点击");
        _0x275185(_0xe99776, "AI开始按钮被点击");
        if (!_0x1324e8) {
          _0x275185(_0xe99776, "请先启用 AI 自动答题开关");
          return;
        }
        if (!_0x51dc95 || !_0x10d794) {
          _0x275185(_0xe99776, "请先配置 AI API URL 与 API Key");
          return;
        }
        if (!_0x11a655) {
          _0x275185(_0xe99776, "请先选择 AI 模型");
          return;
        }
        if (!_0x3d8f25) {
          _0x1066e9 = false;
          _0x536fa3 = false;
          _0x4fe890.textContent = "终止答题";
          _0x524912.disabled = false;
          _0x524912.textContent = "暂停答题";
          _0x275185(_0xe99776, "开始使用 " + _0x2371a4[_0x38c5e4]?.["name"] + " - " + _0x11a655 + " 进行自动答题");
          _0xf8331(_0x1d46d6, _0xe99776);
        } else {
          _0x31dba0(true, _0x1d46d6, _0xe99776);
          _0x4fe890.textContent = "开始答题";
          _0x524912.disabled = true;
          _0x524912.textContent = "暂停答题";
          _0x536fa3 = false;
        }
      });
      _0x524912.addEventListener("click", async () => {
        console.log("AI暂停按钮被点击");
        _0x275185(_0xe99776, "AI暂停按钮被点击");
        if (!_0x3d8f25) {
          _0x275185(_0xe99776, "请先开始答题");
          return;
        }
        if (!_0x536fa3) {
          _0x536fa3 = true;
          _0x524912.textContent = "继续答题";
          _0x275185(_0xe99776, "已暂停答题，当前进度: " + _0x6c24ce + '/' + _0x508039);
        } else {
          _0x536fa3 = false;
          _0x524912.textContent = "暂停答题";
          _0x275185(_0xe99776, "继续答题，从第 " + (_0x6c24ce + 0x1) + " 题开始");
        }
      });
      this.aiProgressEl = _0x1d46d6;
      this.aiLogEl = _0xe99776;
    }
  }
  class _0xbc2ef3 {
    constructor() {
      this.container = null;
      this.isVisible = false;
      this.cardVerification = new _0x11d628();
      this.createUI();
    }
    ["createUI"]() {
      const _0x33333c = document.createElement("div");
      _0x33333c.style.cssText = "\n                position: fixed;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                background: rgba(0, 0, 0, 0.8);\n                z-index: 99999;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                backdrop-filter: blur(5px);\n            ";
      this.container = document.createElement("div");
      this.container.style.cssText = "\n                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n                border-radius: 15px;\n                padding: 0;\n                width: 450px;\n                max-width: 90vw;\n                box-shadow: 0 20px 40px rgba(0,0,0,0.3);\n                position: relative;\n                overflow: hidden;\n            ";
      this.container.innerHTML = "\n                <div style=\"\n                    background: white;\n                    padding: 30px;\n                    text-align: center;\n                    position: relative;\n                \">\n                    <div style=\"\n                        position: absolute;\n                        top: -50px;\n                        left: 50%;\n                        transform: translateX(-50%);\n                        width: 100px;\n                        height: 100px;\n                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n                        border-radius: 50%;\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        color: white;\n                        font-size: 40px;\n                        box-shadow: 0 10px 20px rgba(0,0,0,0.2);\n                    \">\n                        🔐\n                    </div>\n\n                    <div style=\"margin-top: 40px;\">\n                        <h2 style=\"\n                            color: #333;\n                            margin: 0 0 10px 0;\n                            font-size: 24px;\n                            font-weight: bold;\n                        \">华为认证助手</h2>\n                        <p style=\"\n                            color: #666;\n                            margin: 0 0 30px 0;\n                            font-size: 14px;\n                        \">请输入您的卡密以验证使用权限</p>\n                    </div>\n\n                    <div style=\"margin-bottom: 20px;\">\n                        <input\n                            id=\"card-key-input\"\n                            type=\"text\"\n                            placeholder=\"请输入卡密\"\n                            style=\"\n                                width: 100%;\n                                padding: 15px;\n                                border: 2px solid #e0e0e0;\n                                border-radius: 10px;\n                                font-size: 16px;\n                                outline: none;\n                                transition: border-color 0.3s;\n                                box-sizing: border-box;\n                            \"\n                        />\n                    </div>\n\n                    <div id=\"card-status-message\" style=\"\n                        margin-bottom: 20px;\n                        padding: 10px;\n                        border-radius: 8px;\n                        font-size: 14px;\n                        min-height: 20px;\n                        display: none;\n                    \"></div>\n\n                    <div id=\"card-verification-info\" style=\"\n                        margin-bottom: 20px;\n                        padding: 15px;\n                        background: #f8f9fa;\n                        border-radius: 8px;\n                        font-size: 12px;\n                        color: #666;\n                        text-align: left;\n                        display: none;\n                    \"></div>\n\n                    <div style=\"display: flex; gap: 10px;\">\n                        <button\n                            id=\"card-verify-btn\"\n                            style=\"\n                                flex: 1;\n                                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n                                color: white;\n                                border: none;\n                                padding: 15px;\n                                border-radius: 10px;\n                                font-size: 16px;\n                                font-weight: bold;\n                                cursor: pointer;\n                                transition: transform 0.2s;\n                            \"\n                            onmouseover=\"this.style.transform='translateY(-2px)'\"\n                            onmouseout=\"this.style.transform='translateY(0px)'\"\n                        >\n                            验证卡密\n                        </button>\n\n                        <button\n                            id=\"card-status-btn\"\n                            style=\"\n                                background: #6c757d;\n                                color: white;\n                                border: none;\n                                padding: 15px 20px;\n                                border-radius: 10px;\n                                font-size: 14px;\n                                cursor: pointer;\n                                transition: transform 0.2s;\n                            \"\n                            onmouseover=\"this.style.transform='translateY(-2px)'\"\n                            onmouseout=\"this.style.transform='translateY(0px)'\"\n                        >\n                            状态\n                        </button>\n                    </div>\n\n                    <div style=\"\n                        margin-top: 20px;\n                        padding-top: 20px;\n                        border-top: 1px solid #eee;\n                        font-size: 12px;\n                        color: #999;\n                    \">\n                        设备ID: " + _0xf1ff1d.deviceId?.["substring"](0x0, 0x8) + "***<br>\n                        每个卡密只能绑定一个设备使用\n                    </div>\n                </div>\n            ";
      _0x33333c.appendChild(this.container);
      document.body.appendChild(_0x33333c);
      this.overlay = _0x33333c;
      this.bindEvents();
      this.updateStatusDisplay();
    }
    ['bindEvents']() {
      const _0x2e823a = this.container.querySelector('#card-key-input');
      const _0x527d91 = this.container.querySelector("#card-verify-btn");
      const _0x3b073b = this.container.querySelector("#card-status-btn");
      _0x2e823a.addEventListener("input", () => {
        _0x2e823a.style.borderColor = "#e0e0e0";
        this.hideMessage();
      });
      _0x2e823a.addEventListener('focus', () => {
        _0x2e823a.style.borderColor = '#667eea';
      });
      _0x2e823a.addEventListener("blur", () => {
        _0x2e823a.style.borderColor = "#e0e0e0";
      });
      _0x2e823a.addEventListener("keypress", _0x1a5432 => {
        if (_0x1a5432.key === "Enter") {
          this.handleVerify();
        }
      });
      _0x527d91.addEventListener("click", () => this.handleVerify());
      _0x3b073b.addEventListener("click", () => this.showStatusInfo());
      this.overlay.addEventListener("click", _0x2a4e42 => {
        _0x2a4e42.stopPropagation();
      });
    }
    async ['handleVerify']() {
      const _0x38579e = this.container.querySelector("#card-key-input");
      const _0x113f9e = this.container.querySelector("#card-verify-btn");
      const _0xfdc0e9 = _0x38579e.value.trim();
      if (!_0xfdc0e9) {
        this.showMessage('请输入卡密', "error");
        _0x38579e.focus();
        return;
      }
      _0x113f9e.disabled = true;
      _0x113f9e.textContent = "验证中...";
      _0x113f9e.style.background = '#6c757d';
      this.showMessage("正在验证卡密，请稍候...", 'info');
      try {
        const _0x394797 = await this.cardVerification.verifyCard(_0xfdc0e9);
        if (_0x394797.success) {
          this.showMessage("✅ " + _0x394797.message, "success");
          _0x38579e.value = '';
          setTimeout(() => {
            this.showVerificationSuccess(_0x394797.data);
          }, 0x3e8);
          setTimeout(() => {
            this.hide();
            if (typeof window.initMainScript === 'function') {
              window.initMainScript();
            }
          }, 0xbb8);
        } else {
          const _0x1a3b84 = _0x394797.userMessage || "❌ " + _0x394797.message;
          this.showMessage(_0x1a3b84, "error");
          _0x38579e.style.borderColor = "#dc3545";
          console.group("🚨 卡密验证失败详情");
          console.log("错误码:", _0x394797.code);
          console.log('错误消息:', _0x394797.message);
          console.log("用户消息:", _0x394797.userMessage);
          console.log("完整结果:", _0x394797);
          console.log("使用的卡密:", _0xfdc0e9.substring(0x0, 0x4) + '***');
          console.log("设备ID:", _0xf1ff1d.deviceId?.["substring"](0x0, 0x8) + "***");
          console.groupEnd();
          if (_0x394797.code === 0x1) {
            setTimeout(() => {
              _0x38579e.focus();
              _0x38579e.select();
            }, 0x7d0);
          } else if (_0x394797.code >= 0x2 && _0x394797.code <= 0x7) {
            this.showAdditionalHelp(_0x394797.code);
          }
        }
      } catch (_0x60e4dc) {
        _0x170fb8.logError("卡密验证UI处理错误", _0x60e4dc);
        this.showMessage("❌ 验证过程出现错误", "error");
      } finally {
        _0x113f9e.disabled = false;
        _0x113f9e.textContent = "验证卡密";
        _0x113f9e.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      }
    }
    ["showVerificationSuccess"](_0x3ce0b5) {
      const _0x429434 = this.container.querySelector("#card-verification-info");
      let _0x32fbf6 = "<strong>✅ 验证成功！</strong><br><br>";
      if (_0x3ce0b5.card_type === "time") {
        _0x32fbf6 += "\n                    <div><strong>卡密类型：</strong>时间卡密</div>\n                    <div><strong>到期时间：</strong>" + _0x4c01e4.formatTime(this.cardVerification.parseTimeString(_0x3ce0b5.expire_time)) + "</div>\n                ";
      } else if (_0x3ce0b5.card_type === 'count') {
        _0x32fbf6 += "\n                    <div><strong>卡密类型：</strong>次数卡密</div>\n                    <div><strong>剩余次数：</strong>" + _0x3ce0b5.remaining_count + '/' + _0x3ce0b5.total_count + "</div>\n                ";
      }
      _0x32fbf6 += "\n                <div><strong>设备绑定：</strong>已绑定当前设备</div>\n                <br>\n                <div style=\"color: #28a745;\">3秒后自动进入脚本...</div>\n            ";
      _0x429434.innerHTML = _0x32fbf6;
      _0x429434.style.display = "block";
    }
    ["showStatusInfo"]() {
      const _0x1adbc4 = this.cardVerification.getStatusInfo();
      const _0x36d1db = this.container.querySelector("#card-verification-info");
      let _0x9cbd06 = "<strong>📊 当前状态：" + _0x1adbc4.message + "</strong><br><br>";
      if (_0x1adbc4.details) {
        _0x9cbd06 += "\n                    <div><strong>卡密类型：</strong>" + (_0x1adbc4.details.cardType || '未知') + "</div>\n                    <div><strong>设备ID：</strong>" + _0x1adbc4.details.deviceId + "</div>\n                    <div><strong>验证时间：</strong>" + _0x1adbc4.details.lastVerifyTime + "</div>\n                ";
        if (_0x1adbc4.details.expireTime) {
          _0x9cbd06 += "\n                        <div><strong>到期时间：</strong>" + _0x1adbc4.details.expireTime + "</div>\n                        <div><strong>剩余时间：</strong>" + _0x1adbc4.details.remainingTime + "</div>\n                    ";
        }
        if (typeof _0x1adbc4.details.remainingCount !== "undefined") {
          _0x9cbd06 += "\n                        <div><strong>剩余次数：</strong>" + _0x1adbc4.details.remainingCount + '/' + _0x1adbc4.details.totalCount + "</div>\n                    ";
        }
      }
      _0x36d1db.innerHTML = _0x9cbd06;
      _0x36d1db.style.display = 'block';
    }
    ["showMessage"](_0x44187f, _0x2a2a49 = 'info') {
      const _0x457f1b = this.container.querySelector("#card-status-message");
      const _0x17c18e = {
        'success': {
          'bg': "#d4edda",
          'border': "#c3e6cb",
          'text': '#155724'
        },
        'error': {
          'bg': '#f8d7da',
          'border': '#f5c6cb',
          'text': "#721c24"
        },
        'warning': {
          'bg': '#fff3cd',
          'border': '#ffeaa7',
          'text': "#856404"
        },
        'info': {
          'bg': '#d1ecf1',
          'border': "#bee5eb",
          'text': "#0c5460"
        }
      };
      const _0x54f2f3 = _0x17c18e[_0x2a2a49] || _0x17c18e.info;
      _0x457f1b.style.background = _0x54f2f3.bg;
      _0x457f1b.style.borderLeft = "4px solid " + _0x54f2f3.border;
      _0x457f1b.style.color = _0x54f2f3.text;
      _0x457f1b.textContent = _0x44187f;
      _0x457f1b.style.display = 'block';
    }
    ['hideMessage']() {
      const _0xe4de7f = this.container.querySelector("#card-status-message");
      _0xe4de7f.style.display = "none";
    }
    ["updateStatusDisplay"]() {
      const _0x13fee4 = this.cardVerification.checkVerificationStatus();
      if (_0x13fee4.valid) {
        this.hide();
        if (typeof window.initMainScript === "function") {
          window.initMainScript();
        }
      }
    }
    ["showAdditionalHelp"](_0x5b0f3b) {
      const _0x29d742 = {
        0x2: "💡 提示：API接口可能正在维护中，请稍后再试",
        0x3: "💡 提示：网络连接不稳定，请检查网络后重试",
        0x4: "💡 提示：这通常是配置问题，请联系技术支持",
        0x5: "💡 提示：您的卡密可能违反了使用条款",
        0x6: "💡 提示：该卡密设置了特殊限制，请联系客服",
        0x7: "💡 提示：您可以购买新的卡密或联系客服续费"
      };
      const _0x17df26 = _0x29d742[_0x5b0f3b];
      if (_0x17df26) {
        setTimeout(() => {
          this.showMessage(_0x17df26, "info");
        }, 0xbb8);
      }
    }
    ['show']() {
      this.isVisible = true;
      this.overlay.style.display = "flex";
      setTimeout(() => {
        const _0xba29e0 = this.container.querySelector("#card-key-input");
        if (_0xba29e0) {
          _0xba29e0.focus();
        }
      }, 0x64);
    }
    ["hide"]() {
      this.isVisible = false;
      this.overlay.style.display = 'none';
    }
    ["destroy"]() {
      if (this.overlay && this.overlay.parentNode) {
        this.overlay.parentNode.removeChild(this.overlay);
      }
    }
  }
  class _0x4a4925 {
    constructor() {
      this.isVisible = false;
      this.createUI();
    }
    ['createUI']() {
      const _0x126ffe = document.createElement("div");
      _0x126ffe.id = "huawei-helper-image-upload";
      _0x126ffe.style.cssText = "\n                all: initial;\n                position: fixed;\n                bottom: 100px;\n                right: 10px;\n                z-index: 2147483645;\n                background-color: rgba(0, 0, 0, 0.8);\n                padding: 10px;\n                border-radius: 8px;\n                font-family: Arial, sans-serif;\n                font-size: 12px;\n                box-shadow: 0 2px 10px rgba(0,0,0,0.3);\n                display: none;\n            ";
      document.body.appendChild(_0x126ffe);
      const _0x4eb658 = _0x126ffe.attachShadow({
        'mode': "closed"
      });
      _0x4eb658.innerHTML = "\n                <style>\n                #upload-container {\n                    width: 100%;\n                }\n                #upload-header {\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                    margin-bottom: 10px;\n                    padding-bottom: 5px;\n                    border-bottom: 1px solid #444;\n                    cursor: move;\n                }\n                #upload-title {\n                    color: white;\n                    font-weight: bold;\n                }\n                #close-btn {\n                    background: none;\n                    border: none;\n                    color: white;\n                    cursor: pointer;\n                    font-size: 16px;\n                }\n                #upload-button {\n                    background-color: #2196F3;\n                    border: none;\n                    padding: 8px 16px;\n                    border-radius: 4px;\n                    cursor: pointer;\n                    color: white;\n                    font-weight: bold;\n                    transition: background-color 0.2s;\n                    width: 100%;\n                }\n                #upload-button:hover {\n                    background-color: #1976D2;\n                }\n                #upload-button.success {\n                    background-color: #4CAF50;\n                }\n                #file-input {\n                    display: none;\n                }\n                #preview-container {\n                    margin-top: 10px;\n                    display: none;\n                }\n                #preview-image {\n                    max-width: 100px;\n                    max-height: 100px;\n                    border-radius: 4px;\n                }\n                #remove-button {\n                    background-color: #f44336;\n                    border: none;\n                    padding: 4px 8px;\n                    border-radius: 4px;\n                    cursor: pointer;\n                    color: white;\n                    font-size: 10px;\n                    margin-top: 5px;\n                    width: 100%;\n                }\n            </style>\n                <div id=\"upload-container\">\n                    <div id=\"upload-header\">\n                        <div id=\"upload-title\">摄像头背景图</div>\n                        <button id=\"close-btn\">×</button>\n                    </div>\n                    <button id=\"upload-button\">上传图片</button>\n                    <input type=\"file\" id=\"file-input\" accept=\"image/*\">\n                    <div id=\"preview-container\">\n                        <img id=\"preview-image\" src=\"\">\n                        <button id=\"remove-button\">移除图片</button>\n                    </div>\n                </div>\n            ";
      _0x4c01e4.makeDraggable(_0x126ffe, _0x4eb658.getElementById('upload-header'));
      const _0x46098a = _0x4eb658.getElementById('upload-button');
      const _0x189611 = _0x4eb658.getElementById("file-input");
      const _0x19bc41 = _0x4eb658.getElementById("preview-container");
      const _0x102f97 = _0x4eb658.getElementById("preview-image");
      const _0x29b27b = _0x4eb658.getElementById("remove-button");
      const _0x4d78c7 = _0x4eb658.getElementById("close-btn");
      if (_0x243a16) {
        _0x102f97.src = _0x243a16;
        _0x19bc41.style.display = "block";
        _0x46098a.textContent = "更换图片";
      }
      _0x46098a.onclick = () => _0x189611.click();
      _0x189611.onchange = async _0x3f4385 => {
        const _0x22ac36 = _0x3f4385.target.files[0x0];
        if (_0x22ac36) {
          try {
            _0x46098a.textContent = "处理中...";
            _0x46098a.disabled = true;
            let _0x18d8a2 = await _0x4c01e4.imageToBase64(_0x22ac36);
            _0x18d8a2 = await _0x4c01e4.compressImage(_0x18d8a2);
            _0x243a16 = _0x18d8a2;
            GM_setValue("custom_camera_image", _0x18d8a2);
            _0x102f97.src = _0x18d8a2;
            _0x19bc41.style.display = "block";
            _0x46098a.textContent = "更换图片";
            _0x46098a.classList.add("success");
            setTimeout(() => {
              _0x46098a.classList.remove("success");
            }, 0x7d0);
            console.log("✅ 图片上传成功");
          } catch (_0x39bbc1) {
            console.error("❌ 图片上传失败:", _0x39bbc1);
            alert("❌ 图片上传失败，请重试");
          } finally {
            _0x46098a.disabled = false;
            _0x189611.value = '';
          }
        }
      };
      _0x29b27b.onclick = () => {
        _0x243a16 = '';
        GM_setValue("custom_camera_image", '');
        _0x19bc41.style.display = "none";
        _0x46098a.textContent = "上传图片";
        console.log("✅ 图片已移除");
      };
      _0x4d78c7.onclick = () => {
        this.hide();
      };
      this.container = _0x126ffe;
      this.shadow = _0x4eb658;
    }
    ["show"]() {
      this.container.style.display = 'block';
      this.isVisible = true;
    }
    ["hide"]() {
      this.container.style.display = "none";
      this.isVisible = false;
    }
  }
  class _0x3e6f78 {
    constructor() {
      this.createUI();
    }
    ["createUI"]() {
      const _0x1b00cb = document.createElement('div');
      _0x1b00cb.style.all = "initial";
      document.documentElement.appendChild(_0x1b00cb);
      const _0x56b319 = _0x1b00cb.attachShadow({
        'mode': 'closed'
      });
      const _0x3d22bf = document.createElement('template');
      _0x3d22bf.innerHTML = "\n                <style>\n                :host { all: initial; }\n                #copy-container {\n                    position: fixed;\n                    bottom: 10px;\n                    right: 10px;\n                    z-index: 2147483644;\n                    background-color: rgba(0, 0, 0, 0.8);\n                    padding: 10px;\n                    border-radius: 7px;\n                    transition: opacity 0.3s ease-in-out;\n                    font-family: Arial, sans-serif;\n                    font-size: 12px;\n                    box-sizing: border-box;\n                    width: auto;\n                    max-width: 200px;\n                    opacity: 0.8;\n                    cursor: move;\n                }\n                #copy-container:hover {\n                    opacity: 1;\n                }\n                #copy-button {\n                    background-color: rgba(0, 0, 0, 0.2);\n                    border: none;\n                    padding: 5px;\n                    border-radius: 5px;\n                    cursor: pointer;\n                    font-size: inherit;\n                    width: 100%;\n                    text-align: center;\n                    color: white;\n                    transition: background-color 0.25s ease-in-out;\n                }\n                #copy-button:hover {\n                    background-color: rgba(25, 25, 25, 0.6);\n                }\n                #copy-button.success {\n                    background-color: rgba(0, 220, 0, 0.6);\n                }\n                #copy-title {\n                    color: white;\n                    margin-bottom: 5px;\n                    font-weight: bold;\n                    text-align: center;\n                }\n            </style>\n                <div id=\"copy-container\">\n                    <div id=\"copy-title\">题目操作</div>\n                    <button id=\"copy-button\">手动复制题目</button>\n                </div>\n            ";
      _0x56b319.appendChild(_0x3d22bf.content.cloneNode(true));
      const _0x5415e5 = _0x56b319.getElementById('copy-button');
      const _0x19ebd8 = _0x56b319.getElementById("copy-container");
      const _0x47ce7e = _0x4c01e4.debounce(this.handleCopy.bind(this), 0x12c);
      _0x4c01e4.makeDraggable(_0x19ebd8);
      _0x5415e5.onclick = _0x47ce7e;
    }
    ['handleCopy']() {
      if (_0x367a3f.length === 0x0) {
        alert("⚠️ 尚未拦截到题目！");
        return;
      }
      const _0x232ce3 = _0x367a3f.map(_0x49a454 => _0x49a454[0x0] + "\n" + _0x49a454[0x1] + "\n").join("\n");
      navigator.clipboard.writeText(_0x232ce3).then(() => {
        const _0x4e42e5 = this.shadow.getElementById("copy-button");
        if (_0x4e42e5) {
          _0x4e42e5.textContent = "复制成功 ✓";
          _0x4e42e5.classList.add('success');
        }
        console.log("✅ 手动复制题目成功");
        setTimeout(() => {
          if (_0x4e42e5) {
            _0x4e42e5.textContent = "手动复制题目";
            _0x4e42e5.classList.remove("success");
          }
        }, 0x7d0);
      })["catch"](_0x72a077 => {
        console.error("❌ 复制失败:", _0x72a077);
        alert("❌ 题目复制失败");
      });
    }
  }
  class _0x5aa3a9 {
    constructor() {
      this.width = _0x523b4e ? 0x140 : 0x280;
      this.height = _0x523b4e ? 0xf0 : 0x1e0;
      this.fps = _0x523b4e ? 0xa : 0xf;
      this.noiseLayer = null;
      this.initNoiseLayer();
    }
    async ["initNoiseLayer"]() {
      const _0x37efbb = document.createElement("canvas");
      _0x37efbb.width = this.width;
      _0x37efbb.height = this.height;
      const _0x26561b = _0x37efbb.getContext('2d');
      const _0xde3000 = _0x26561b.createImageData(this.width, this.height);
      const _0x5e2b22 = _0xde3000.data;
      for (let _0x337d3e = 0x0; _0x337d3e < _0x5e2b22.length; _0x337d3e += 0x4) {
        const _0x5971c7 = Math.random() * 0xff;
        _0x5e2b22[_0x337d3e] = _0x5e2b22[_0x337d3e + 0x1] = _0x5e2b22[_0x337d3e + 0x2] = _0x5971c7;
        _0x5e2b22[_0x337d3e + 0x3] = 0x5;
      }
      _0x26561b.putImageData(_0xde3000, 0x0, 0x0);
      this.noiseLayer = _0x37efbb;
    }
    ['drawImageCovered'](_0x466897, _0x25dbbd, _0x1f4dea, _0x26a541, _0x17c977, _0x33c616) {
      const _0x2ddc37 = _0x25dbbd.width / _0x25dbbd.height;
      const _0x1c820b = _0x17c977 / _0x33c616;
      let _0x147dc0;
      let _0x2224ca;
      let _0x3998d5;
      let _0x1e5d6a;
      if (_0x2ddc37 > _0x1c820b) {
        _0x1e5d6a = _0x25dbbd.height;
        _0x3998d5 = _0x1e5d6a * _0x1c820b;
        _0x147dc0 = (_0x25dbbd.width - _0x3998d5) / 0x2;
        _0x2224ca = 0x0;
      } else {
        _0x3998d5 = _0x25dbbd.width;
        _0x1e5d6a = _0x3998d5 / _0x1c820b;
        _0x147dc0 = 0x0;
        _0x2224ca = (_0x25dbbd.height - _0x1e5d6a) / 0x2;
      }
      _0x466897.drawImage(_0x25dbbd, _0x147dc0, _0x2224ca, _0x3998d5, _0x1e5d6a, _0x1f4dea, _0x26a541, _0x17c977, _0x33c616);
    }
    async ["createVirtualStream"]() {
      const _0x50ecbf = document.createElement('canvas');
      _0x50ecbf.width = this.width;
      _0x50ecbf.height = this.height;
      const _0x302cb7 = _0x50ecbf.getContext('2d');
      const _0xb8ea71 = GM_getValue('custom_camera_image', '');
      if (!_0xb8ea71) {
        _0x302cb7.fillStyle = "#2c3e50";
        _0x302cb7.fillRect(0x0, 0x0, this.width, this.height);
        this.addNoise(_0x302cb7);
        return _0x50ecbf.captureStream(this.fps);
      }
      const _0x27691a = new Image();
      _0x27691a.src = _0xb8ea71;
      await new Promise(_0x1848b3 => _0x27691a.onload = _0x1848b3);
      const _0x3e3361 = document.createElement("canvas");
      _0x3e3361.width = this.width;
      _0x3e3361.height = this.height;
      const _0x595d42 = _0x3e3361.getContext('2d');
      this.drawImageCovered(_0x595d42, _0x27691a, 0x0, 0x0, _0x3e3361.width, _0x3e3361.height);
      let _0x2778e7 = 0x0;
      const _0x4d2692 = 0x3e8 / this.fps;
      const _0x58c283 = _0x50ecbf.captureStream(this.fps);
      const _0x531bb5 = _0x43d485 => {
        if (!_0x2778e7) {
          _0x2778e7 = _0x43d485;
        }
        const _0x29a63c = _0x43d485 - _0x2778e7;
        if (_0x29a63c >= _0x4d2692) {
          this.generateFrame(_0x302cb7, _0x3e3361);
          _0x2778e7 = _0x43d485 - _0x29a63c % _0x4d2692;
        }
        requestAnimationFrame(_0x531bb5);
      };
      requestAnimationFrame(_0x531bb5);
      return _0x58c283;
    }
    ["addNoise"](_0x429af6) {
      const _0x17c776 = _0x429af6.createImageData(this.width, this.height);
      const _0x572684 = _0x17c776.data;
      for (let _0x450955 = 0x0; _0x450955 < _0x572684.length; _0x450955 += 0x4) {
        if (Math.random() > 0.95) {
          const _0x38fb6f = Math.random() * 0x32;
          _0x572684[_0x450955] = _0x572684[_0x450955 + 0x1] = _0x572684[_0x450955 + 0x2] = _0x38fb6f;
          _0x572684[_0x450955 + 0x3] = 0xff;
        }
      }
      _0x429af6.putImageData(_0x17c776, 0x0, 0x0);
    }
    ['generateFrame'](_0x141738, _0x49d9cc) {
      _0x141738.clearRect(0x0, 0x0, this.width, this.height);
      _0x141738.drawImage(_0x49d9cc, 0x0, 0x0);
      if (!_0x523b4e) {
        const _0x5f450a = Date.now() / 0x4e20 % 0x168;
        _0x141738.filter = "hue-rotate(" + _0x5f450a + "deg) brightness(99.8%)";
        _0x141738.globalAlpha = 0.05;
        _0x141738.drawImage(this.noiseLayer, 0x0, 0x0);
        _0x141738.globalAlpha = 0x1;
        _0x141738.filter = "none";
      }
    }
  }
  function _0x1a5a17() {
    const _0x33ea23 = _0x372af8 => {
      _0x372af8.stopImmediatePropagation();
      _0x372af8.stopPropagation();
      _0x372af8.preventDefault();
      return false;
    };
    const _0x4b9f80 = ["blur", "focus", "focusin", "focusout", "pageshow", "pagehide", "visibilitychange", "fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange"];
    _0x4b9f80.forEach(_0x3910ca => {
      unsafeWindow.addEventListener(_0x3910ca, _0x33ea23, true);
      unsafeWindow.document.addEventListener(_0x3910ca, _0x33ea23, true);
    });
    Object.defineProperty(unsafeWindow.document, "visibilityState", {
      'configurable': true,
      'get': function () {
        return "visible";
      }
    });
    Object.defineProperty(unsafeWindow.document, "hidden", {
      'configurable': true,
      'get': function () {
        return false;
      }
    });
    Object.defineProperty(unsafeWindow.document, "fullscreenElement", {
      'configurable': true,
      'get': function () {
        return unsafeWindow.document.documentElement;
      }
    });
    Object.defineProperty(unsafeWindow.document, "fullscreenEnabled", {
      'configurable': true,
      'get': function () {
        return true;
      }
    });
    unsafeWindow.Element.prototype.requestFullscreen = function () {
      return new Promise((_0x3babf5, _0x550eb7) => {
        _0x3babf5();
      });
    };
    unsafeWindow.document.exitFullscreen = function () {
      return new Promise((_0x5d3a91, _0xe762fc) => {
        _0x5d3a91();
      });
    };
    if (unsafeWindow.screen.orientation) {
      unsafeWindow.screen.orientation.addEventListener('change', _0x33ea23, true);
    }
    unsafeWindow.addEventListener("orientationchange", _0x33ea23, true);
    Object.defineProperty(unsafeWindow, 'innerWidth', {
      'configurable': true,
      'get': function () {
        return unsafeWindow.screen.width;
      }
    });
    Object.defineProperty(unsafeWindow, "innerHeight", {
      'configurable': true,
      'get': function () {
        return unsafeWindow.screen.height;
      }
    });
    console.log('完整防切屏功能已启用');
  }
  class _0x2838c5 {
    constructor() {
      this.methodsLookupTable = new WeakMap();
      this.virtualDeviceId = _0x4c01e4.generateRandomBase64(0x2b) + '=';
      this.virtualGroupId = _0x4c01e4.generateRandomBase64(0x2b) + '=';
      this.isHooked = false;
      this.originalMethods = {};
      if (_0x5adaf4) {
        this.hookMediaDevices();
      }
    }
    ["hookMediaDevices"]() {
      if (this.isHooked) {
        return;
      }
      this.originalMethods.enumerateDevices = navigator.mediaDevices.enumerateDevices;
      this.originalMethods.getUserMedia = navigator.mediaDevices.getUserMedia;
      navigator.mediaDevices.enumerateDevices = async () => {
        const _0x508a33 = await this.originalMethods.enumerateDevices.call(navigator.mediaDevices);
        const _0x12dec0 = _0x508a33.some(_0xb3469 => _0xb3469.deviceId === this.virtualDeviceId && _0xb3469.kind === "videoinput");
        if (!_0x12dec0) {
          const _0x2a014b = {
            'deviceId': this.virtualDeviceId,
            'groupId': this.virtualGroupId,
            'kind': 'videoinput',
            'label': "华为认证专用摄像头",
            'toJSON': function () {
              return {
                'deviceId': this.deviceId,
                'groupId': this.groupId,
                'kind': this.kind,
                'label': this.label
              };
            }
          };
          return [_0x2a014b, ..._0x508a33];
        }
        return _0x508a33;
      };
      navigator.mediaDevices.getUserMedia = async _0x565574 => {
        if (_0x565574 && _0x565574.video) {
          console.log('检测到摄像头请求，返回优化虚拟摄像头流');
          return await new _0x5aa3a9().createVirtualStream();
        }
        return this.originalMethods.getUserMedia.call(navigator.mediaDevices, _0x565574);
      };
      this.isHooked = true;
      console.log("摄像头劫持已启用");
    }
    ['unhookMediaDevices']() {
      if (!this.isHooked) {
        return;
      }
      if (this.originalMethods.enumerateDevices) {
        navigator.mediaDevices.enumerateDevices = this.originalMethods.enumerateDevices;
      }
      if (this.originalMethods.getUserMedia) {
        navigator.mediaDevices.getUserMedia = this.originalMethods.getUserMedia;
      }
      this.isHooked = false;
      console.log('摄像头劫持已禁用');
    }
  }
  function _0x3d958a() {
    setTimeout(() => {
      try {
        const _0x4bffe9 = JSON.parse(this.responseText);
        const _0x4d82c2 = _0x4bffe9.result.questions.map((_0x456a30, _0x1c3269) => [_0x1c3269 + 0x1 + '/' + (_0x456a30.type == 0x2 ? '判断' : _0x456a30.type == 0x0 ? '单选' : '多选') + ": " + _0x456a30.content, _0x456a30.options.map((_0x3ced67, _0x36370f) => (_0x3ced67.optionOrder ?? String.fromCharCode(0x41 + _0x36370f)) + ": " + _0x3ced67.optionContent).join("\n")]);
        console.log("拦截到题目数量:", _0x4d82c2.length);
        _0x367a3f = _0x4d82c2;
        _0x508039 = _0x367a3f.length;
        _0x6c24ce = 0x0;
        if (_0x2b4764) {
          navigator.clipboard.writeText(_0x4d82c2.map(_0x38ff1b => _0x38ff1b[0x0] + "\n" + _0x38ff1b[0x1] + "\n").join("\n")).then(() => console.log("✅ 成功复制题目到剪贴板"))["catch"](_0x2971fe => console.error("❌ 复制题目失败:", _0x2971fe));
        }
      } catch (_0x30c359) {
        console.error('解析考试数据失败：', _0x30c359);
      }
    }, 0x64);
  }
  function _0x559006() {
    const _0x49ab5c = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (_0x4c3630, _0x1993a9) {
      if (_0x4c3630 === "POST" && typeof _0x1993a9 === 'string' && _0x1993a9.includes("/svc/innovation/userapi/exam2d/so/servlet/getExamPaper")) {
        this.addEventListener('load', _0x3d958a, {
          'once': true
        });
      }
      return _0x49ab5c.apply(this, arguments);
    };
    return {
      'disable': () => {
        XMLHttpRequest.prototype.open = _0x49ab5c;
      }
    };
  }
  function _0x16ea95(_0x45fbdb) {
    const _0x18f23a = _0x2371a4[_0x38c5e4] || _0x2371a4.deepseek;
    const _0x1c5ce6 = _0x51dc95 || _0x18f23a.defaultUrl;
    return _0x1c5ce6.replace(/\/+$/, '') + _0x45fbdb;
  }
  async function _0x74db4e() {
    const _0x22fb02 = Date.now();
    const _0x1600e5 = _0x2371a4[_0x38c5e4] || _0x2371a4.deepseek;
    _0x170fb8.logInfo("开始获取模型列表", {
      'provider': _0x38c5e4,
      'providerConfig': _0x1600e5
    });
    if (_0x38c5e4 === "gemini") {
      return await _0x218e36();
    }
    const _0x9739c7 = _0x16ea95(_0x1600e5.modelsEndpoint);
    const _0x4ba0f9 = {
      'Authorization': "Bearer " + _0x10d794,
      'Content-Type': "application/json"
    };
    _0x170fb8.logApiRequest("GET", _0x9739c7, _0x4ba0f9, null);
    if (typeof GM_xmlhttpRequest === "function" || typeof GM_xmlhttpRequest === 'object') {
      return await new Promise(_0x40f16d => {
        try {
          GM_xmlhttpRequest({
            'method': "GET",
            'url': _0x9739c7,
            'headers': _0x4ba0f9,
            'timeout': 0x3a98,
            'onload': function (_0x1fe625) {
              const _0x43d7b3 = Date.now() - _0x22fb02;
              const _0x5f316f = _0x1fe625.getAllResponseHeaders ? _0x1fe625.getAllResponseHeaders() : _0x1fe625.responseHeaders || {};
              _0x170fb8.logApiResponse(_0x9739c7, _0x1fe625.status, _0x1fe625.statusText || '', _0x5f316f, _0x1fe625.responseText, _0x43d7b3);
              try {
                if (_0x1fe625.status < 0xc8 || _0x1fe625.status >= 0x12c) {
                  const _0x89da7 = "HTTP " + _0x1fe625.status + ": " + _0x1fe625.responseText;
                  _0x170fb8.logError('获取模型列表失败', new Error(_0x89da7), {
                    'url': _0x9739c7,
                    'status': _0x1fe625.status
                  });
                  _0x40f16d({
                    'ok': false,
                    'error': _0x89da7
                  });
                  return;
                }
                const _0x278460 = JSON.parse(_0x1fe625.responseText);
                let _0x343c0c = [];
                if (_0x278460.data && Array.isArray(_0x278460.data)) {
                  _0x343c0c = _0x278460.data.map(_0x4d3616 => ({
                    'id': _0x4d3616.id,
                    'name': _0x4d3616.id,
                    'owned_by': _0x4d3616.owned_by || "unknown"
                  }));
                } else if (Array.isArray(_0x278460)) {
                  _0x343c0c = _0x278460.map(_0xe4c59a => ({
                    'id': _0xe4c59a.id || _0xe4c59a.name,
                    'name': _0xe4c59a.id || _0xe4c59a.name,
                    'owned_by': _0xe4c59a.owned_by || "unknown"
                  }));
                }
                _0x170fb8.logPerformance('获取模型列表', _0x43d7b3, {
                  'modelsCount': _0x343c0c.length,
                  'provider': _0x38c5e4
                });
                _0x40f16d({
                  'ok': true,
                  'models': _0x343c0c
                });
              } catch (_0x3150a0) {
                const _0x267e34 = "解析返回 JSON 失败: " + (_0x3150a0.message || _0x3150a0);
                _0x170fb8.logError('解析模型列表JSON失败', _0x3150a0, {
                  'url': _0x9739c7,
                  'responseText': _0x1fe625.responseText
                });
                _0x40f16d({
                  'ok': false,
                  'error': _0x267e34
                });
              }
            },
            'onerror': function (_0x4d3fa3) {
              const _0x38263a = Date.now() - _0x22fb02;
              const _0xa18258 = "网络请求失败: " + (_0x4d3fa3.error || "未知错误");
              _0x170fb8.logError('获取模型列表网络错误', new Error(_0xa18258), {
                'url': _0x9739c7,
                'error': _0x4d3fa3,
                'duration': _0x38263a
              });
              _0x40f16d({
                'ok': false,
                'error': _0xa18258
              });
            },
            'ontimeout': function () {
              const _0x390435 = Date.now() - _0x22fb02;
              _0x170fb8.logError("获取模型列表超时", new Error("请求超时"), {
                'url': _0x9739c7,
                'timeout': 0x3a98,
                'duration': _0x390435
              });
              _0x40f16d({
                'ok': false,
                'error': "请求超时"
              });
            }
          });
        } catch (_0x37dd04) {
          _0x170fb8.logError("GM_xmlhttpRequest异常", _0x37dd04, {
            'url': _0x9739c7
          });
          _0x40f16d({
            'ok': false,
            'error': _0x37dd04.message || String(_0x37dd04)
          });
        }
      });
    }
    _0x170fb8.logWarning("使用fetch回退方法", {
      'url': _0x9739c7,
      'reason': "GM_xmlhttpRequest不可用"
    });
    try {
      const _0x46e443 = Date.now();
      const _0x5b353a = await fetch(_0x9739c7, {
        'method': 'GET',
        'headers': _0x4ba0f9
      });
      const _0x5bf824 = Date.now() - _0x46e443;
      const _0x19c786 = await _0x5b353a.text();
      _0x170fb8.logApiResponse(_0x9739c7, _0x5b353a.status, _0x5b353a.statusText, Object.fromEntries(_0x5b353a.headers.entries()), _0x19c786, _0x5bf824);
      if (!_0x5b353a.ok) {
        const _0x306904 = "HTTP " + _0x5b353a.status + ": " + _0x19c786;
        _0x170fb8.logError("Fetch获取模型列表失败", new Error(_0x306904), {
          'url': _0x9739c7,
          'status': _0x5b353a.status,
          'method': 'fetch'
        });
        return {
          'ok': false,
          'error': _0x306904
        };
      }
      const _0x3dfd08 = JSON.parse(_0x19c786);
      let _0x513a26 = [];
      if (_0x3dfd08.data && Array.isArray(_0x3dfd08.data)) {
        _0x513a26 = _0x3dfd08.data.map(_0x44b445 => ({
          'id': _0x44b445.id,
          'name': _0x44b445.id,
          'owned_by': _0x44b445.owned_by || "unknown"
        }));
      } else if (Array.isArray(_0x3dfd08)) {
        _0x513a26 = _0x3dfd08.map(_0x3345a3 => ({
          'id': _0x3345a3.id || _0x3345a3.name,
          'name': _0x3345a3.id || _0x3345a3.name,
          'owned_by': _0x3345a3.owned_by || 'unknown'
        }));
      }
      return {
        'ok': true,
        'models': _0x513a26
      };
    } catch (_0xe101fd) {
      return {
        'ok': false,
        'error': _0xe101fd.message || String(_0xe101fd)
      };
    }
  }
  async function _0x218e36() {
    const _0x3a6221 = _0x16ea95("/models") + ("?key=" + _0x10d794);
    if (typeof GM_xmlhttpRequest === "function" || typeof GM_xmlhttpRequest === "object") {
      return await new Promise(_0x2db2d7 => {
        try {
          GM_xmlhttpRequest({
            'method': "GET",
            'url': _0x3a6221,
            'timeout': 0x3a98,
            'onload': function (_0x5aa694) {
              try {
                if (_0x5aa694.status < 0xc8 || _0x5aa694.status >= 0x12c) {
                  _0x2db2d7({
                    'ok': false,
                    'error': "HTTP " + _0x5aa694.status + ": " + _0x5aa694.responseText
                  });
                  return;
                }
                const _0x42b2b8 = JSON.parse(_0x5aa694.responseText);
                let _0x3d9466 = [];
                if (_0x42b2b8.models && Array.isArray(_0x42b2b8.models)) {
                  _0x3d9466 = _0x42b2b8.models.filter(_0x5c32ba => _0x5c32ba.supportedGenerationMethods?.["includes"]("generateContent")).map(_0x46b853 => ({
                    'id': _0x46b853.name.replace("models/", ''),
                    'name': _0x46b853.displayName || _0x46b853.name.replace("models/", ''),
                    'owned_by': "google"
                  }));
                }
                _0x2db2d7({
                  'ok': true,
                  'models': _0x3d9466
                });
              } catch (_0x114104) {
                _0x2db2d7({
                  'ok': false,
                  'error': "解析返回 JSON 失败: " + (_0x114104.message || _0x114104)
                });
              }
            },
            'onerror': function (_0x135807) {
              _0x2db2d7({
                'ok': false,
                'error': "网络请求失败: " + (_0x135807.error || "未知错误")
              });
            },
            'ontimeout': function () {
              _0x2db2d7({
                'ok': false,
                'error': "请求超时"
              });
            }
          });
        } catch (_0x293fac) {
          _0x2db2d7({
            'ok': false,
            'error': _0x293fac.message || String(_0x293fac)
          });
        }
      });
    }
    try {
      const _0x3cda09 = await fetch(_0x3a6221, {
        'method': "GET"
      });
      if (!_0x3cda09.ok) {
        const _0x2a4de6 = await _0x3cda09.text();
        return {
          'ok': false,
          'error': "HTTP " + _0x3cda09.status + ": " + _0x2a4de6
        };
      }
      const _0x18438e = await _0x3cda09.json();
      let _0x552766 = [];
      if (_0x18438e.models && Array.isArray(_0x18438e.models)) {
        _0x552766 = _0x18438e.models.filter(_0x197b6f => _0x197b6f.supportedGenerationMethods?.["includes"]("generateContent")).map(_0x5ba163 => ({
          'id': _0x5ba163.name.replace("models/", ''),
          'name': _0x5ba163.displayName || _0x5ba163.name.replace("models/", ''),
          'owned_by': "google"
        }));
      }
      return {
        'ok': true,
        'models': _0x552766
      };
    } catch (_0x3ac254) {
      return {
        'ok': false,
        'error': _0x3ac254.message || String(_0x3ac254)
      };
    }
  }
  async function _0x4a679c() {
    if (_0x38c5e4 === "gemini") {
      return await _0x5aa7f2();
    }
    const _0x52b3ed = await _0x74db4e();
    return _0x52b3ed.ok && _0x52b3ed.models && _0x52b3ed.models.length > 0x0 ? {
      'ok': true,
      'message': "连接成功，找到 " + _0x52b3ed.models.length + " 个模型"
    } : {
      'ok': false,
      'error': _0x52b3ed.error || "连接失败"
    };
  }
  async function _0x5aa7f2() {
    const _0x5f417c = await _0x218e36();
    return _0x5f417c.ok && _0x5f417c.models && _0x5f417c.models.length > 0x0 ? {
      'ok': true,
      'message': "Gemini 连接成功，找到 " + _0x5f417c.models.length + " 个模型"
    } : {
      'ok': false,
      'error': _0x5f417c.error || "Gemini 连接失败"
    };
  }
  async function _0x4d2308(_0x5d87a2, _0x2ae048 = false) {
    const _0xd85cfe = Date.now();
    const _0x20c56 = _0x2371a4[_0x38c5e4] || _0x2371a4.deepseek;
    const _0xbcf1b5 = _0x11a655 || _0x20c56.defaultModel;
    _0x170fb8.logInfo("开始AI API调用", {
      'provider': _0x38c5e4,
      'model': _0xbcf1b5,
      'promptLength': _0x5d87a2 ? _0x5d87a2.length : 0x0,
      'promptPreview': _0x5d87a2 ? _0x5d87a2.substring(0x0, 0xc8) + (_0x5d87a2.length > 0xc8 ? "..." : '') : ''
    });
    if (!_0xbcf1b5) {
      _0x170fb8.logError("AI API调用失败", new Error('请先选择AI模型'), {
        'provider': _0x38c5e4,
        'selectedModel': _0xbcf1b5
      });
      return {
        'ok': false,
        'error': '请先选择AI模型'
      };
    }
    if (_0x38c5e4 === "gemini") {
      return await _0x5b62ef(_0x5d87a2, _0xbcf1b5, _0x2ae048);
    }
    const _0x2a4268 = _0x16ea95(_0x20c56.chatEndpoint);
    let _0x572480 = "你是一个考试助手，只返回最可能的选项字母或编号，格式例如：A 或 1 或 A,B（若多选）";
    if (_0xbcf1b5 && _0xbcf1b5.includes("reasoner")) {
      if (_0x2ae048) {
        _0x572480 = "你是一个考试助手。请分析题目后，在推理的最后明确写出\"答案是：A,B\"（多个选项用逗号分隔）的格式。对于多选题，请选择所有正确的选项。";
      } else {
        _0x572480 = "你是一个考试助手。请分析题目后，在推理的最后明确写出\"答案是：A\"（或相应选项）的格式。只返回选项字母，不要其他解释。";
      }
    }
    const _0x587add = {
      'model': _0xbcf1b5,
      'messages': [{
        'role': "system",
        'content': _0x572480
      }, {
        'role': "user",
        'content': _0x5d87a2
      }],
      'temperature': 0x0,
      'max_tokens': 0xc8
    };
    const _0x50f970 = JSON.stringify(_0x587add);
    const _0xc651e6 = {
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + _0x10d794
    };
    _0x170fb8.logApiRequest("POST", _0x2a4268, _0xc651e6, _0x50f970);
    if (typeof GM_xmlhttpRequest === "function" || typeof GM_xmlhttpRequest === 'object') {
      return await new Promise(_0x5db5ec => {
        try {
          GM_xmlhttpRequest({
            'method': 'POST',
            'url': _0x2a4268,
            'data': _0x50f970,
            'headers': _0xc651e6,
            'timeout': 0x4e20,
            'onload': function (_0x4845dc) {
              const _0x1490e3 = Date.now() - _0xd85cfe;
              const _0x58b584 = _0x4845dc.getAllResponseHeaders ? _0x4845dc.getAllResponseHeaders() : _0x4845dc.responseHeaders || {};
              _0x170fb8.logApiResponse(_0x2a4268, _0x4845dc.status, _0x4845dc.statusText || '', _0x58b584, _0x4845dc.responseText, _0x1490e3);
              try {
                if (_0x4845dc.status < 0xc8 || _0x4845dc.status >= 0x12c) {
                  const _0x5387c7 = "HTTP " + _0x4845dc.status + ": " + _0x4845dc.responseText;
                  _0x170fb8.logError("AI API调用失败", new Error(_0x5387c7), {
                    'url': _0x2a4268,
                    'status': _0x4845dc.status,
                    'provider': _0x38c5e4,
                    'model': _0xbcf1b5,
                    'duration': _0x1490e3
                  });
                  _0x5db5ec({
                    'ok': false,
                    'error': _0x5387c7,
                    'status': _0x4845dc.status,
                    'responseText': _0x4845dc.responseText,
                    'targetUrl': _0x2a4268
                  });
                  return;
                }
                const _0x24ad3d = JSON.parse(_0x4845dc.responseText);
                _0x170fb8.logInfo(_0x38c5e4 + "响应数据解析", {
                  'hasData': !!_0x24ad3d,
                  'hasChoices': !!(_0x24ad3d && _0x24ad3d.choices),
                  'choicesLength': _0x24ad3d && _0x24ad3d.choices ? _0x24ad3d.choices.length : 0x0,
                  'firstChoice': _0x24ad3d && _0x24ad3d.choices && _0x24ad3d.choices[0x0] ? {
                    'hasMessage': !!_0x24ad3d.choices[0x0].message,
                    'hasContent': !!(_0x24ad3d.choices[0x0].message && _0x24ad3d.choices[0x0].message.content),
                    'hasText': !!_0x24ad3d.choices[0x0].text,
                    'contentLength': _0x24ad3d.choices[0x0].message && _0x24ad3d.choices[0x0].message.content ? _0x24ad3d.choices[0x0].message.content.length : 0x0,
                    'contentPreview': _0x24ad3d.choices[0x0].message && _0x24ad3d.choices[0x0].message.content ? _0x24ad3d.choices[0x0].message.content.substring(0x0, 0x64) : null,
                    'textPreview': _0x24ad3d.choices[0x0].text ? _0x24ad3d.choices[0x0].text.substring(0x0, 0x64) : null,
                    'choiceKeys': Object.keys(_0x24ad3d.choices[0x0])
                  } : null,
                  'dataKeys': Object.keys(_0x24ad3d),
                  'hasAlternativeFields': {
                    'answer': !!_0x24ad3d.answer,
                    'result': !!_0x24ad3d.result,
                    'output': !!_0x24ad3d.output,
                    'outputs': !!(_0x24ad3d.outputs && _0x24ad3d.outputs[0x0])
                  }
                });
                let _0x12cb41 = null;
                if (_0x24ad3d) {
                  if (_0x24ad3d.choices && _0x24ad3d.choices[0x0]) {
                    if (_0x24ad3d.choices[0x0].message && _0x24ad3d.choices[0x0].message.content) {
                      _0x12cb41 = _0x24ad3d.choices[0x0].message.content;
                    } else {
                      if (_0x24ad3d.choices[0x0].text) {
                        _0x12cb41 = _0x24ad3d.choices[0x0].text;
                      } else {
                        if (_0x24ad3d.choices[0x0].message && _0x24ad3d.choices[0x0].message.reasoning_content) {
                          const _0x147491 = _0x24ad3d.choices[0x0].message.reasoning_content;
                          _0x12cb41 = _0x4db2e4(_0x147491, _0x2ae048);
                          if (_0x12cb41) {
                            _0x170fb8.logInfo("从DeepSeek推理内容中提取答案", {
                              'extractedAnswer': _0x12cb41,
                              'reasoningPreview': _0x147491.substring(0x0, 0xc8)
                            });
                          } else {
                            _0x170fb8.logWarning("未能从DeepSeek推理内容中提取答案", {
                              'reasoningContent': _0x147491.substring(0x0, 0x1f4),
                              'possibleMatches': [_0x147491.includes('正确') ? 'A(正确)' : null, _0x147491.includes('错误') ? "B(错误)" : null, _0x147491.match(/[ABC]/g)].filter(Boolean)
                            });
                          }
                        }
                      }
                    }
                  }
                  if (!_0x12cb41 && _0x24ad3d.answer) {
                    _0x12cb41 = _0x24ad3d.answer;
                  }
                  if (!_0x12cb41 && _0x24ad3d.result) {
                    _0x12cb41 = _0x24ad3d.result;
                  }
                  if (!_0x12cb41 && _0x24ad3d.output) {
                    _0x12cb41 = _0x24ad3d.output;
                  }
                  if (!_0x12cb41 && _0x24ad3d.outputs && _0x24ad3d.outputs[0x0]) {
                    _0x12cb41 = _0x24ad3d.outputs[0x0].text || _0x24ad3d.outputs[0x0].content;
                  }
                }
                if (!_0x12cb41) {
                  _0x170fb8.logWarning(_0x38c5e4 + "响应中未找到答案内容", {
                    'expectedPaths': ["data.choices[0].message.content", "data.choices[0].text", "data.answer", "data.result", "data.output", "data.outputs[0].text/content"],
                    'actualStructure': _0x24ad3d,
                    'url': _0x2a4268
                  });
                }
                _0x170fb8.logPerformance("AI API调用成功", _0x1490e3, {
                  'provider': _0x38c5e4,
                  'model': _0xbcf1b5,
                  'answerLength': _0x12cb41 ? _0x12cb41.length : 0x0,
                  'hasAnswer': !!_0x12cb41,
                  'finalAnswer': _0x12cb41
                });
                _0x5db5ec({
                  'ok': true,
                  'data': _0x24ad3d,
                  'answer': _0x12cb41,
                  'targetUrl': _0x2a4268
                });
              } catch (_0x25399f) {
                const _0x26f95e = "解析返回 JSON 失败: " + (_0x25399f.message || _0x25399f);
                _0x170fb8.logError("AI API响应解析失败", _0x25399f, {
                  'url': _0x2a4268,
                  'responseText': _0x4845dc.responseText,
                  'duration': _0x1490e3
                });
                _0x5db5ec({
                  'ok': false,
                  'error': _0x26f95e,
                  'raw': _0x4845dc.responseText,
                  'targetUrl': _0x2a4268
                });
              }
            },
            'onerror': function (_0x479dca) {
              const _0x556634 = Date.now() - _0xd85cfe;
              const _0x542f2c = _0x479dca && _0x479dca.error ? _0x479dca.error : "GM_xmlhttpRequest error";
              _0x170fb8.logError("AI API网络错误", new Error(_0x542f2c), {
                'url': _0x2a4268,
                'provider': _0x38c5e4,
                'model': _0xbcf1b5,
                'duration': _0x556634,
                'rawError': _0x479dca
              });
              _0x5db5ec({
                'ok': false,
                'error': _0x542f2c,
                'rawErr': _0x479dca,
                'targetUrl': _0x2a4268
              });
            },
            'ontimeout': function () {
              const _0x1db1c6 = Date.now() - _0xd85cfe;
              _0x170fb8.logError("AI API调用超时", new Error("请求超时"), {
                'url': _0x2a4268,
                'provider': _0x38c5e4,
                'model': _0xbcf1b5,
                'timeout': 0x4e20,
                'duration': _0x1db1c6
              });
              _0x5db5ec({
                'ok': false,
                'error': "请求超时",
                'targetUrl': _0x2a4268
              });
            }
          });
        } catch (_0x5f0887) {
          const _0x343784 = Date.now() - _0xd85cfe;
          _0x170fb8.logError("GM_xmlhttpRequest异常", _0x5f0887, {
            'url': _0x2a4268,
            'provider': _0x38c5e4,
            'model': _0xbcf1b5,
            'duration': _0x343784
          });
          _0x5db5ec({
            'ok': false,
            'error': _0x5f0887.message || String(_0x5f0887)
          });
        }
      });
    }
    _0x170fb8.logWarning("AI API使用fetch回退方法", {
      'url': _0x2a4268,
      'reason': 'GM_xmlhttpRequest不可用',
      'provider': _0x38c5e4,
      'model': _0xbcf1b5
    });
    try {
      const _0x8fc56a = Date.now();
      const _0x4e9c21 = await fetch(_0x2a4268, {
        'method': "POST",
        'headers': _0xc651e6,
        'body': _0x50f970
      });
      const _0x545b0f = Date.now() - _0x8fc56a;
      const _0x5281e8 = await _0x4e9c21.text();
      _0x170fb8.logApiResponse(_0x2a4268, _0x4e9c21.status, _0x4e9c21.statusText, Object.fromEntries(_0x4e9c21.headers.entries()), _0x5281e8, _0x545b0f);
      if (!_0x4e9c21.ok) {
        const _0x3159e1 = "HTTP " + _0x4e9c21.status + ": " + _0x5281e8;
        _0x170fb8.logError("Fetch AI API调用失败", new Error(_0x3159e1), {
          'url': _0x2a4268,
          'status': _0x4e9c21.status,
          'provider': _0x38c5e4,
          'model': _0xbcf1b5,
          'method': "fetch",
          'duration': _0x545b0f
        });
        return {
          'ok': false,
          'error': _0x3159e1,
          'status': _0x4e9c21.status,
          'responseText': _0x5281e8,
          'targetUrl': _0x2a4268
        };
      }
      const _0x415b83 = JSON.parse(_0x5281e8);
      let _0x16ca72 = null;
      if (_0x415b83) {
        if (_0x415b83.choices && _0x415b83.choices[0x0]) {
          if (_0x415b83.choices[0x0].message && _0x415b83.choices[0x0].message.content) {
            _0x16ca72 = _0x415b83.choices[0x0].message.content;
          } else {
            if (_0x415b83.choices[0x0].text) {
              _0x16ca72 = _0x415b83.choices[0x0].text;
            }
          }
        }
        if (!_0x16ca72 && _0x415b83.answer) {
          _0x16ca72 = _0x415b83.answer;
        }
        if (!_0x16ca72 && _0x415b83.result) {
          _0x16ca72 = _0x415b83.result;
        }
        if (!_0x16ca72 && _0x415b83.output) {
          _0x16ca72 = _0x415b83.output;
        }
        if (!_0x16ca72 && _0x415b83.outputs && _0x415b83.outputs[0x0]) {
          _0x16ca72 = _0x415b83.outputs[0x0].text || _0x415b83.outputs[0x0].content;
        }
      }
      return {
        'ok': true,
        'data': _0x415b83,
        'answer': _0x16ca72,
        'targetUrl': _0x2a4268
      };
    } catch (_0x5e9e6e) {
      return {
        'ok': false,
        'error': _0x5e9e6e.message || String(_0x5e9e6e),
        'targetUrl': _0x2a4268
      };
    }
  }
  function _0x4db2e4(_0x38192d, _0x1fb6b7 = false) {
    if (!_0x38192d || typeof _0x38192d !== "string") {
      return null;
    }
    if (_0x1fb6b7) {
      let _0x8d6fc5 = _0x38192d.match(/答案是[：:]\s*([A-D][,，、\s]+[A-D](?:[,，、\s]*[A-D])*)/i) || _0x38192d.match(/最终答案[：:]\s*([A-D][,，、\s]+[A-D](?:[,，、\s]*[A-D])*)/i) || _0x38192d.match(/选择[：:]\s*([A-D][,，、\s]+[A-D](?:[,，、\s]*[A-D])*)/i) || _0x38192d.match(/([A-D][,，、\s]+[A-D](?:[,，、\s]*[A-D])*)\s*[。，]/);
      if (_0x8d6fc5) {
        return _0x8d6fc5[0x1].replace(/[，、\s]/g, ',').replace(/,+/g, ',').replace(/,$/, '');
      }
    }
    let _0x5dcabd = _0x38192d.match(/答案是[：:]\s*([A-D])/i) || _0x38192d.match(/答案[应该]*是[：:]\s*([A-D]|正确|错误)/i) || _0x38192d.match(/最终答案[：:]\s*([A-D])/i) || _0x38192d.match(/选择\s*([A-D])/i) || _0x38192d.match(/([A-D])\s*[-–—]\s*这[似看]起来是[正确对的]/i) || _0x38192d.match(/所以[，,]\s*([A-D])/i) || _0x38192d.match(/因此[，,]\s*([A-D])/i) || _0x38192d.match(/([A-D])\s*[。，]/);
    if (_0x5dcabd) {
      return _0x5dcabd[0x1];
    }
    if (_0x38192d.includes("陈述似乎正确") || _0x38192d.includes('陈述正确') || _0x38192d.includes('是正确的') || _0x38192d.includes("应该是正确") || _0x38192d.includes("似乎是正确") || _0x38192d.includes("确实正确")) {
      return 'A';
    } else {
      if (_0x38192d.includes("陈述似乎错误") || _0x38192d.includes("陈述错误") || _0x38192d.includes("不正确") || _0x38192d.includes('是错误的') || _0x38192d.includes("应该是错误") || _0x38192d.includes('似乎错误')) {
        return 'B';
      }
    }
    if (_0x1fb6b7) {
      const _0x365170 = _0x38192d.match(/[A-D]/g);
      if (_0x365170 && _0x365170.length > 0x1) {
        const _0x11f5f9 = [...new Set(_0x365170)].sort();
        return _0x11f5f9.join(',');
      }
    }
    const _0x35178e = _0x38192d.match(/[A-D]/g);
    if (_0x35178e && _0x35178e.length > 0x0) {
      return _0x35178e[_0x35178e.length - 0x1];
    }
    return null;
  }
  async function _0x5b62ef(_0x4aac9f, _0x1c5e05, _0x1f065d = false) {
    const _0x1c39fa = _0x51dc95 + "/models/" + _0x1c5e05 + ":generateContent?key=" + _0x10d794;
    let _0x58a436 = "你是一个考试助手，只返回最可能的选项字母或编号，格式例如：A 或 1 或 A,B（若多选）";
    if (_0x1f065d) {
      _0x58a436 = "你是一个考试助手。对于多选题，请选择所有正确的选项，用逗号分隔，格式例如：A,B,C";
    }
    const _0x4cd681 = _0x58a436 + "\n\n" + _0x4aac9f;
    const _0x2eee97 = {
      'contents': [{
        'parts': [{
          'text': _0x4cd681
        }]
      }],
      'generationConfig': {
        'temperature': 0x0,
        'maxOutputTokens': 0xc8,
        'topP': 0x1,
        'topK': 0x1
      }
    };
    const _0x1b1770 = JSON.stringify(_0x2eee97);
    if (typeof GM_xmlhttpRequest === "function" || typeof GM_xmlhttpRequest === "object") {
      return await new Promise(_0x230bdf => {
        try {
          GM_xmlhttpRequest({
            'method': "POST",
            'url': _0x1c39fa,
            'data': _0x1b1770,
            'headers': {
              'Content-Type': "application/json"
            },
            'timeout': 0x4e20,
            'onload': function (_0x27e9e6) {
              try {
                if (_0x27e9e6.status < 0xc8 || _0x27e9e6.status >= 0x12c) {
                  _0x170fb8.logError("Gemini API HTTP错误", new Error("HTTP " + _0x27e9e6.status), {
                    'status': _0x27e9e6.status,
                    'responseText': _0x27e9e6.responseText,
                    'url': _0x1c39fa
                  });
                  _0x230bdf({
                    'ok': false,
                    'error': "HTTP " + _0x27e9e6.status + ": " + _0x27e9e6.responseText,
                    'status': _0x27e9e6.status,
                    'responseText': _0x27e9e6.responseText,
                    'targetUrl': _0x1c39fa
                  });
                  return;
                }
                const _0x41fd03 = JSON.parse(_0x27e9e6.responseText);
                _0x170fb8.logApiResponse(_0x1c39fa, _0x27e9e6.status, 'OK', {}, _0x27e9e6.responseText);
                _0x170fb8.logInfo("Gemini响应数据解析", {
                  'hasData': !!_0x41fd03,
                  'hasCandidates': !!(_0x41fd03 && _0x41fd03.candidates),
                  'candidatesLength': _0x41fd03 && _0x41fd03.candidates ? _0x41fd03.candidates.length : 0x0,
                  'firstCandidate': _0x41fd03 && _0x41fd03.candidates && _0x41fd03.candidates[0x0] ? {
                    'hasContent': !!_0x41fd03.candidates[0x0].content,
                    'hasParts': !!(_0x41fd03.candidates[0x0].content && _0x41fd03.candidates[0x0].content.parts),
                    'partsLength': _0x41fd03.candidates[0x0].content && _0x41fd03.candidates[0x0].content.parts ? _0x41fd03.candidates[0x0].content.parts.length : 0x0,
                    'firstPartText': _0x41fd03.candidates[0x0].content && _0x41fd03.candidates[0x0].content.parts && _0x41fd03.candidates[0x0].content.parts[0x0] ? _0x41fd03.candidates[0x0].content.parts[0x0].text : null,
                    'candidateKeys': Object.keys(_0x41fd03.candidates[0x0])
                  } : null,
                  'dataKeys': Object.keys(_0x41fd03)
                });
                let _0x4e19a8 = null;
                if (_0x41fd03 && _0x41fd03.candidates && _0x41fd03.candidates[0x0]) {
                  const _0x222820 = _0x41fd03.candidates[0x0];
                  if (_0x222820.content && _0x222820.content.parts && _0x222820.content.parts[0x0]) {
                    _0x4e19a8 = _0x222820.content.parts[0x0].text;
                  }
                }
                if (!_0x4e19a8) {
                  _0x170fb8.logWarning("Gemini响应中未找到答案内容", {
                    'expectedPath': "data.candidates[0].content.parts[0].text",
                    'actualStructure': _0x41fd03,
                    'url': _0x1c39fa
                  });
                }
                _0x230bdf({
                  'ok': true,
                  'data': _0x41fd03,
                  'answer': _0x4e19a8,
                  'targetUrl': _0x1c39fa
                });
              } catch (_0x51106a) {
                _0x170fb8.logError("Gemini响应JSON解析失败", _0x51106a, {
                  'responseText': _0x27e9e6.responseText,
                  'url': _0x1c39fa
                });
                _0x230bdf({
                  'ok': false,
                  'error': "解析返回 JSON 失败: " + (_0x51106a.message || _0x51106a),
                  'raw': _0x27e9e6.responseText,
                  'targetUrl': _0x1c39fa
                });
              }
            },
            'onerror': function (_0x23797d) {
              _0x230bdf({
                'ok': false,
                'error': _0x23797d && _0x23797d.error ? _0x23797d.error : "GM_xmlhttpRequest error",
                'rawErr': _0x23797d,
                'targetUrl': _0x1c39fa
              });
            },
            'ontimeout': function () {
              _0x230bdf({
                'ok': false,
                'error': "请求超时",
                'targetUrl': _0x1c39fa
              });
            }
          });
        } catch (_0x2a9466) {
          _0x230bdf({
            'ok': false,
            'error': _0x2a9466.message || String(_0x2a9466)
          });
        }
      });
    }
    try {
      const _0x3f01aa = await fetch(_0x1c39fa, {
        'method': "POST",
        'headers': {
          'Content-Type': "application/json",
          'Authorization': "Bearer " + _0x10d794
        },
        'body': _0x1b1770
      });
      if (!_0x3f01aa.ok) {
        const _0x36f961 = await _0x3f01aa.text();
        return {
          'ok': false,
          'error': "HTTP " + _0x3f01aa.status + ": " + _0x36f961,
          'status': _0x3f01aa.status,
          'responseText': _0x36f961,
          'targetUrl': _0x1c39fa
        };
      }
      const _0x2843b5 = await _0x3f01aa.json();
      _0x170fb8.logInfo("Gemini Fetch响应数据解析", {
        'hasData': !!_0x2843b5,
        'hasChoices': !!(_0x2843b5 && _0x2843b5.choices),
        'choicesLength': _0x2843b5 && _0x2843b5.choices ? _0x2843b5.choices.length : 0x0,
        'firstChoice': _0x2843b5 && _0x2843b5.choices && _0x2843b5.choices[0x0] ? {
          'hasMessage': !!_0x2843b5.choices[0x0].message,
          'hasContent': !!(_0x2843b5.choices[0x0].message && _0x2843b5.choices[0x0].message.content),
          'contentLength': _0x2843b5.choices[0x0].message && _0x2843b5.choices[0x0].message.content ? _0x2843b5.choices[0x0].message.content.length : 0x0,
          'contentPreview': _0x2843b5.choices[0x0].message && _0x2843b5.choices[0x0].message.content ? _0x2843b5.choices[0x0].message.content.substring(0x0, 0x64) : null,
          'messageKeys': _0x2843b5.choices[0x0].message ? Object.keys(_0x2843b5.choices[0x0].message) : [],
          'choiceKeys': Object.keys(_0x2843b5.choices[0x0])
        } : null,
        'dataKeys': Object.keys(_0x2843b5)
      });
      let _0x3ffafd = null;
      if (_0x2843b5 && _0x2843b5.candidates && _0x2843b5.candidates[0x0]) {
        const _0x124554 = _0x2843b5.candidates[0x0];
        if (_0x124554.content && _0x124554.content.parts && _0x124554.content.parts[0x0]) {
          _0x3ffafd = _0x124554.content.parts[0x0].text;
        }
      }
      if (!_0x3ffafd) {
        _0x170fb8.logWarning("Gemini Fetch响应中未找到答案内容", {
          'expectedPath': 'data.candidates[0].content.parts[0].text',
          'actualStructure': _0x2843b5,
          'url': _0x1c39fa
        });
      }
      return {
        'ok': true,
        'data': _0x2843b5,
        'answer': _0x3ffafd,
        'targetUrl': _0x1c39fa
      };
    } catch (_0x35da55) {
      return {
        'ok': false,
        'error': _0x35da55.message || String(_0x35da55),
        'targetUrl': _0x1c39fa
      };
    }
  }
  function _0x275185(_0x378601, _0x119617, _0xdac3da = "info") {
    const _0x4d85b3 = new Date().toLocaleTimeString();
    _0x51475d.push('[' + _0x4d85b3 + "] " + _0x119617);
    if (_0x55fbc5 && typeof _0x55fbc5.addLog === "function") {
      _0x55fbc5.addLog(_0x119617, _0xdac3da);
    }
    let _0x5e15bc = _0x378601;
    if (!_0x5e15bc && _0x22746a && _0x22746a.aiLogEl) {
      _0x5e15bc = _0x22746a.aiLogEl;
    }
    if (_0x5e15bc) {
      const _0x4343b2 = document.createElement("div");
      _0x4343b2.textContent = '[' + _0x4d85b3 + "] " + _0x119617;
      _0x4343b2.style.cssText = 'margin-bottom:2px;word-wrap:break-word;';
      _0x5e15bc.appendChild(_0x4343b2);
      _0x5e15bc.scrollTop = _0x5e15bc.scrollHeight;
      while (_0x5e15bc.children.length > 0x64) {
        _0x5e15bc.removeChild(_0x5e15bc.firstChild);
      }
    }
    console.log('[AI]', _0x119617);
  }
  function _0x3dcbff(_0xbf8be) {
    if (!_0xbf8be) {
      return;
    }
    _0xbf8be.textContent = "进度: " + _0x6c24ce + '/' + _0x508039;
  }
  function _0x31dba0(_0x27d99e, _0x260e4a) {
    _0x31dba0(false, _0x27d99e, _0x260e4a);
  }
  function _0x31dba0(_0x47fda1, _0x26fa89, _0x10e870) {
    if (typeof _0x47fda1 !== 'boolean') {
      _0x10e870 = _0x26fa89;
      _0x26fa89 = _0x47fda1;
      _0x47fda1 = false;
    }
    _0x3d8f25 = false;
    _0x536fa3 = false;
    if (_0x47fda1) {
      _0x1066e9 = true;
    }
    _0x275185(_0x10e870, "已停止自动答题" + (_0x47fda1 ? "（用户手动停止）" : ''));
    if (_0x26fa89) {
      _0x3dcbff(_0x26fa89);
    }
  }
  async function _0x497bdb(_0x1f47d5 = 0x1388, _0xb00670) {
    try {
      if (!_0x5681f9) {
        _0x275185(_0xb00670, '自动交卷已禁用，跳过交卷');
        return false;
      }
      if (_0x3baa56) {
        _0x275185(_0xb00670, "自动交卷已执行过，跳过");
        return false;
      }
      _0x275185(_0xb00670, "等待 " + _0x1f47d5 + "ms 后尝试自动交卷...");
      await new Promise(_0x42187f => setTimeout(_0x42187f, _0x1f47d5));
      const _0x1baeb4 = Array.from(document.querySelectorAll("span"));
      const _0x325981 = _0x1baeb4.find(_0x455653 => _0x455653.textContent && _0x455653.textContent.trim() === '交卷' && _0x455653.getAttribute('data-v-bd93ab26') !== null);
      if (!_0x325981) {
        _0x275185(_0xb00670, "未找到匹配的交卷元素");
        return false;
      }
      let _0x479edf = _0x325981;
      let _0x32c4a9 = 0x0;
      while (_0x479edf && _0x32c4a9 < 0x6) {
        if (_0x479edf.tagName && /^(BUTTON|A)$/.test(_0x479edf.tagName)) {
          break;
        }
        const _0x224394 = _0x479edf.getAttribute && _0x479edf.getAttribute("role");
        const _0x2d7720 = _0x479edf.getAttribute && _0x479edf.getAttribute('tabindex');
        if (_0x224394 === "button" || _0x2d7720 !== null && _0x2d7720 !== '-1') {
          break;
        }
        _0x479edf = _0x479edf.parentElement;
        _0x32c4a9++;
      }
      if (!_0x479edf) {
        _0x479edf = _0x325981;
      }
      try {
        _0x479edf.click();
        _0x275185(_0xb00670, "已触发交卷点击（click()）");
        _0x3baa56 = true;
        try {
          await _0xe42c59(0x320, 0xa, _0xb00670);
        } catch (_0x254fc9) {
          _0x275185(_0xb00670, "尝试自动确认交卷时出错: " + _0x254fc9);
        }
        return true;
      } catch (_0x81f056) {
        _0x275185(_0xb00670, "click() 触发失败，尝试构造鼠标事件: " + _0x81f056);
        try {
          const _0x57c814 = new MouseEvent("click", {
            'bubbles': true,
            'cancelable': true,
            'view': window
          });
          _0x479edf.dispatchEvent(_0x57c814);
          _0x275185(_0xb00670, "已通过 dispatchEvent 触发交卷");
          _0x3baa56 = true;
          try {
            await _0xe42c59(0x320, 0xa, _0xb00670);
          } catch (_0x4081da) {
            _0x275185(_0xb00670, "尝试自动确认交卷时出错: " + _0x4081da);
          }
          return true;
        } catch (_0x247a55) {
          _0x275185(_0xb00670, "dispatchEvent 触发失败: " + _0x247a55);
          return false;
        }
      }
    } catch (_0x35ca60) {
      _0x275185(_0xb00670, "attemptAutoSubmit 出错: " + _0x35ca60);
      return false;
    }
  }
  async function _0xe42c59(_0x130eee = 0x320, _0x23a7a4 = 0xa, _0x5caebc) {
    try {
      if (_0x7a03b3) {
        _0x275185(_0x5caebc, "自动确认交卷已执行过，跳过");
        return false;
      }
      _0x275185(_0x5caebc, "开始轮询查找并点击“确认交卷”，最多 " + _0x23a7a4 + " 次，间隔 " + _0x130eee + 'ms');
      for (let _0x35dfc4 = 0x0; _0x35dfc4 < _0x23a7a4; _0x35dfc4++) {
        const _0x103600 = Array.from(document.querySelectorAll('span'));
        const _0x51b9cf = _0x103600.find(_0xff1e9a => _0xff1e9a.textContent && _0xff1e9a.textContent.trim() === "确认交卷" && _0xff1e9a.getAttribute("data-v-bd93ab26") !== null);
        if (_0x51b9cf) {
          let _0x47bb79 = _0x51b9cf;
          let _0x59b308 = 0x0;
          while (_0x47bb79 && _0x59b308 < 0x6) {
            if (_0x47bb79.tagName && /^(BUTTON|A)$/.test(_0x47bb79.tagName)) {
              break;
            }
            const _0x178210 = _0x47bb79.getAttribute && _0x47bb79.getAttribute("role");
            const _0x3688cf = _0x47bb79.getAttribute && _0x47bb79.getAttribute("tabindex");
            if (_0x178210 === 'button' || _0x3688cf !== null && _0x3688cf !== '-1') {
              break;
            }
            _0x47bb79 = _0x47bb79.parentElement;
            _0x59b308++;
          }
          if (!_0x47bb79) {
            _0x47bb79 = _0x51b9cf;
          }
          try {
            _0x47bb79.click();
            _0x275185(_0x5caebc, "已触发确认交卷点击（click()）");
            _0x7a03b3 = true;
            return true;
          } catch (_0x1e8e90) {
            try {
              const _0x510e00 = new MouseEvent("click", {
                'bubbles': true,
                'cancelable': true,
                'view': window
              });
              _0x47bb79.dispatchEvent(_0x510e00);
              _0x275185(_0x5caebc, "已通过 dispatchEvent 触发确认交卷");
              _0x7a03b3 = true;
              return true;
            } catch (_0x205ffd) {
              _0x275185(_0x5caebc, "触发确认交卷失败: " + _0x205ffd);
              return false;
            }
          }
        }
        await new Promise(_0x5bef58 => setTimeout(_0x5bef58, _0x130eee));
      }
      _0x275185(_0x5caebc, "轮询结束，未找到确认交卷元素");
      return false;
    } catch (_0x414114) {
      _0x275185(_0x5caebc, "attemptConfirmSubmit 出错: " + _0x414114);
      return false;
    }
  }
  async function _0xf8331(_0x37fbb1, _0x50f30a) {
    _0x170fb8.logInfo("尝试启动自动答题", {
      'autoAnswerRunning': _0x3d8f25,
      'interceptedQuestionsCount': _0x367a3f ? _0x367a3f.length : 0x0,
      'aiProvider': _0x38c5e4,
      'aiModel': _0x11a655,
      'hasApiKey': !!_0x10d794,
      'hasApiUrl': !!_0x51dc95
    });
    if (_0x3d8f25) {
      return;
    }
    if (!_0x367a3f || _0x367a3f.length === 0x0) {
      _0x275185(_0x50f30a, "当前没有拦截到题目，无法开始");
      _0x170fb8.logWarning("自动答题启动失败", {
        'reason': "no_intercepted_questions"
      });
      return;
    }
    _0x3d8f25 = true;
    _0x508039 = _0x367a3f.length;
    _0x6c24ce = 0x0;
    _0x170fb8.logInfo("开始自动答题会话", {
      'totalQuestions': _0x508039,
      'aiProvider': _0x38c5e4,
      'aiModel': _0x11a655,
      'questionsPreview': _0x367a3f.slice(0x0, 0x3).map(_0x8f8520 => ({
        'title': _0x8f8520[0x0]?.['substring'](0x0, 0x32) + (_0x8f8520[0x0]?.["length"] > 0x32 ? "..." : ''),
        'optionsCount': _0x8f8520[0x1] ? _0x8f8520[0x1].split("\n").length : 0x0
      }))
    });
    _0x275185(_0x50f30a, "开始自动答题，共 " + _0x508039 + " 题");
    while (_0x3d8f25 && _0x6c24ce < _0x508039) {
      while (_0x536fa3 && _0x3d8f25) {
        await new Promise(_0x232b12 => setTimeout(_0x232b12, 0x1f4));
      }
      if (!_0x3d8f25) {
        break;
      }
      const _0x5ad1b2 = _0x367a3f[_0x6c24ce];
      const _0x2fa964 = _0x5ad1b2[0x0];
      const _0x327d52 = _0x5ad1b2[0x1];
      _0x170fb8.logInfo("处理题目 " + (_0x6c24ce + 0x1) + '/' + _0x508039, {
        'questionNumber': _0x6c24ce + 0x1,
        'totalQuestions': _0x508039,
        'title': _0x2fa964?.['substring'](0x0, 0x64) + (_0x2fa964?.['length'] > 0x64 ? "..." : ''),
        'optionsText': _0x327d52?.["substring"](0x0, 0xc8) + (_0x327d52?.["length"] > 0xc8 ? "..." : ''),
        'titleLength': _0x2fa964?.["length"] || 0x0,
        'optionsLength': _0x327d52?.['length'] || 0x0
      });
      _0x275185(_0x50f30a, "处理题目 " + (_0x6c24ce + 0x1) + ": " + _0x2fa964);
      const _0x1039f9 = (_0x2fa964 || '').toString().includes('多选');
      const _0x409cba = '题目：' + _0x2fa964 + "\n选项：\n" + _0x327d52 + "\n请给出最可能的答案，仅返回选项字母或序号（例如 A 或 1），如果是多选则用逗号分隔。";
      const _0x352d93 = Date.now();
      const _0x4df3b6 = await _0x4d2308(_0x409cba, _0x1039f9);
      const _0x148628 = Date.now() - _0x352d93;
      if (!_0x4df3b6.ok) {
        _0x170fb8.logError("AI请求失败", new Error(_0x4df3b6.error), {
          'questionNumber': _0x6c24ce + 0x1,
          'title': _0x2fa964,
          'promptLength': _0x409cba.length,
          'duration': _0x148628,
          'provider': _0x38c5e4,
          'model': _0x11a655
        });
        _0x275185(_0x50f30a, "AI 请求失败: " + _0x4df3b6.error);
        _0x6c24ce++;
        _0x3dcbff(_0x37fbb1);
        continue;
      }
      _0x170fb8.logInfo("AI响应原始数据检查", {
        'questionNumber': _0x6c24ce + 0x1,
        'hasResponse': !!_0x4df3b6,
        'responseKeys': _0x4df3b6 ? Object.keys(_0x4df3b6) : [],
        'hasAnswer': !!_0x4df3b6.answer,
        'answerType': typeof _0x4df3b6.answer,
        'answerValue': _0x4df3b6.answer,
        'hasData': !!_0x4df3b6.data,
        'dataKeys': _0x4df3b6.data ? Object.keys(_0x4df3b6.data) : [],
        'dataStructure': _0x4df3b6.data
      });
      const _0x5d3038 = (_0x4df3b6.answer || '').toString().trim();
      _0x170fb8.logInfo("AI响应成功", {
        'questionNumber': _0x6c24ce + 0x1,
        'aiAnswer': _0x5d3038,
        'answerLength': _0x5d3038.length,
        'duration': _0x148628,
        'provider': _0x38c5e4,
        'model': _0x11a655,
        'hasData': !!_0x4df3b6.data,
        'promptLength': _0x409cba.length,
        'originalAnswer': _0x4df3b6.answer,
        'isEmpty': _0x5d3038 === ''
      });
      if (_0x5d3038 === '') {
        _0x170fb8.logWarning('AI返回答案为空', {
          'questionNumber': _0x6c24ce + 0x1,
          'provider': _0x38c5e4,
          'model': _0x11a655,
          'responseStructure': _0x4df3b6
        });
      }
      _0x275185(_0x50f30a, "AI 返回: " + (_0x5d3038 || "[空答案]"));
      const _0x5dbb34 = Date.now();
      const _0x30aebb = await _0xfcf5a9(_0x5d3038, _0x2fa964, _0x327d52, _0x50f30a);
      const _0xba3fff = Date.now() - _0x5dbb34;
      _0x170fb8.logPerformance("页面答案选择", _0xba3fff, {
        'questionNumber': _0x6c24ce + 0x1,
        'success': _0x30aebb,
        'aiAnswer': _0x5d3038,
        'title': _0x2fa964?.['substring'](0x0, 0x32) + (_0x2fa964?.["length"] > 0x32 ? "..." : '')
      });
      _0x275185(_0x50f30a, "尝试在页面选择答案: " + (_0x30aebb ? '成功' : '失败'));
      try {
        const _0x27d45d = ["button.submit", 'button.confirm', "button[aria-label*=确认]", "button[aria-label*=提交]", ".submit-btn", ".confirm-btn", ".btn-submit", ".btn-confirm"];
        for (const _0xda806e of _0x27d45d) {
          const _0x54b70c = document.querySelector(_0xda806e);
          if (_0x54b70c) {
            try {
              _0x54b70c.click();
              _0x275185(_0x50f30a, "尝试点击提交/确认按钮");
            } catch (_0x4ed7ff) {
              _0x54b70c.dispatchEvent(new MouseEvent("click", {
                'bubbles': true
              }));
            }
            break;
          }
        }
      } catch (_0x5c88f4) {}
      const _0x334ac3 = (_0x2fa964 || '').toString().includes('多选');
      if (_0x334ac3) {
        try {
          function _0x3a19b8() {
            const _0x2393f9 = Array.from(document.querySelectorAll("span, div")).find(_0x57f458 => (_0x57f458.innerText || _0x57f458.textContent || '').trim().includes("下一题"));
            if (_0x2393f9) {
              return _0x2393f9;
            }
            const _0x4ff62d = ["button.next", ".nextBtn", ".next-question", "button[aria-label*=下]", "button[aria-label*=下一]", "[data-action*=next]", "[data-next]"];
            for (const _0x5a69e8 of _0x4ff62d) {
              const _0x446600 = document.querySelector(_0x5a69e8);
              if (_0x446600) {
                return _0x446600;
              }
            }
            const _0x13421e = Array.from(document.querySelectorAll("button, a, [role=\"button\"], .btn"));
            for (const _0x5c363b of _0x13421e) {
              const _0xc5e7fa = (_0x5c363b.innerText || _0x5c363b.textContent || '').trim();
              if (!_0xc5e7fa) {
                continue;
              }
              const _0x4aa569 = _0xc5e7fa.replace(/\s+/g, '');
              if (_0x4aa569.includes('下一') || _0x4aa569.includes("下一题") || /next/i.test(_0x4aa569)) {
                return _0x5c363b;
              }
            }
            return document.querySelector("[id*=next], [class*=next]");
          }
          const _0x4432bf = _0x3a19b8();
          if (_0x4432bf) {
            try {
              _0x4432bf.click();
            } catch (_0x5698f6) {
              _0x4432bf.dispatchEvent(new MouseEvent("click", {
                'bubbles': true
              }));
            }
            _0x275185(_0x50f30a, "多选：点击下一题按钮");
          } else {
            _0x275185(_0x50f30a, "多选：未找到下一题按钮，等待页面更新");
          }
        } catch (_0x3154cd) {
          _0x275185(_0x50f30a, "多选 点击下一题失败: " + _0x3154cd);
        }
      } else {
        const _0x4f612c = (_0x2fa964 || '').toString().slice(0x0, 0x28);
        let _0x35e030 = false;
        const _0x5ab03a = Date.now();
        while (Date.now() - _0x5ab03a < 0x384) {
          try {
            if (!document.body.innerText.includes(_0x4f612c)) {
              _0x35e030 = true;
              break;
            }
          } catch (_0x21bc71) {}
          await new Promise(_0x2f6f68 => setTimeout(_0x2f6f68, 0x96));
        }
        if (_0x35e030) {
          _0x275185(_0x50f30a, '页面已自动跳转，无需点击下一题');
        } else {
          try {
            function _0x2177f1() {
              const _0x29938c = Array.from(document.querySelectorAll("span, div")).find(_0x11ae44 => (_0x11ae44.innerText || _0x11ae44.textContent || '').trim().includes("下一题"));
              if (_0x29938c) {
                return _0x29938c;
              }
              const _0x4d3856 = ["button.next", ".nextBtn", ".next-question", 'button[aria-label*=下]', 'button[aria-label*=下一]', "[data-action*=next]", "[data-next]"];
              for (const _0x42ca8b of _0x4d3856) {
                const _0x2be4bf = document.querySelector(_0x42ca8b);
                if (_0x2be4bf) {
                  return _0x2be4bf;
                }
              }
              const _0x2a1d84 = Array.from(document.querySelectorAll("button, a, [role=\"button\"], .btn"));
              for (const _0x20f6cd of _0x2a1d84) {
                const _0x53247e = (_0x20f6cd.innerText || _0x20f6cd.textContent || '').trim();
                if (!_0x53247e) {
                  continue;
                }
                const _0x33e884 = _0x53247e.replace(/\s+/g, '');
                if (_0x33e884.includes('下一') || _0x33e884.includes("下一题") || /next/i.test(_0x33e884)) {
                  return _0x20f6cd;
                }
              }
              const _0x4dbae3 = document.querySelector("[id*=next], [class*=next]");
              if (_0x4dbae3) {
                return _0x4dbae3;
              }
              return null;
            }
            const _0x16604a = _0x2177f1();
            if (_0x16604a) {
              try {
                _0x16604a.click();
              } catch (_0x537399) {
                _0x16604a.dispatchEvent(new MouseEvent("click", {
                  'bubbles': true
                }));
              }
              _0x275185(_0x50f30a, "点击下一题按钮");
            } else {
              _0x275185(_0x50f30a, "未找到下一题按钮，等待页面更新");
            }
          } catch (_0x1204b1) {
            _0x275185(_0x50f30a, "点击下一题失败: " + _0x1204b1);
          }
        }
      }
      _0x6c24ce++;
      _0x3dcbff(_0x37fbb1);
      await new Promise(_0x597e84 => setTimeout(_0x597e84, 0x320));
    }
    _0x3d8f25 = false;
    _0x275185(_0x50f30a, '自动答题循环结束');
    try {
      if (!_0x1066e9) {
        await _0x497bdb(0x1388, _0x50f30a);
      } else {
        _0x275185(_0x50f30a, '检测到用户手动停止，已跳过自动交卷');
      }
    } catch (_0x2ba084) {
      _0x275185(_0x50f30a, "自动交卷调用异常: " + _0x2ba084);
    }
  }
  async function _0xfcf5a9(_0x259649, _0x5616ae, _0x55a64f, _0x24aaf2) {
    if (!_0x259649) {
      return false;
    }
    const _0x387540 = (_0x259649 || '').toString().trim();
    try {
      const _0x13979b = Array.from(document.querySelectorAll(".exam-content"));
      let _0x153756 = null;
      const _0x4cccdc = _0x5616ae.replace(/^\d+\/.+?:\s*/, '').split("\n")[0x0].trim().slice(0x0, 0x50);
      for (const _0x18569b of _0x13979b) {
        try {
          const _0xf1b3a3 = _0x18569b.querySelector('.the-exam-page-html');
          const _0xc14e04 = (_0xf1b3a3 && (_0xf1b3a3.innerText || _0xf1b3a3.textContent) || _0x18569b.innerText || _0x18569b.textContent || '').replace(/\s+/g, " ").trim();
          if (_0xc14e04 && _0xc14e04.includes(_0x4cccdc)) {
            _0x153756 = _0x18569b;
            break;
          }
        } catch (_0x17e038) {}
      }
      if (!_0x153756 && _0x13979b.length > 0x0) {
        _0x153756 = _0x13979b.find(_0x483889 => _0x483889.offsetParent !== null) || _0x13979b[0x0];
      }
      if (!_0x153756) {
        _0x275185(_0x24aaf2, "未找到题目容器 (.exam-content)");
        return false;
      }
      const _0x5a3268 = _0x153756.querySelector(".el-radio-group, .el-checkbox-group") || _0x153756.querySelector(".options") || _0x153756;
      const _0x318aae = [];
      const _0x3d477c = Array.from(_0x5a3268.querySelectorAll("label.el-radio, label.el-checkbox, label"));
      for (const _0x5f1f30 of _0x3d477c) {
        const _0x57ce33 = _0x5f1f30.querySelector("input[type=radio], input[type=checkbox]") || (_0x5f1f30.control ? _0x5f1f30.control : null);
        const _0x253574 = _0x5f1f30.querySelector(".el-radio__label, .el-checkbox__label") || _0x5f1f30.querySelector(".el-radio__label div") || _0x5f1f30;
        const _0xfb2341 = (_0x253574 && (_0x253574.innerText || _0x253574.textContent) || _0x5f1f30.innerText || _0x5f1f30.textContent || '').replace(/\s+/g, " ").trim();
        if (_0xfb2341) {
          _0x318aae.push({
            'el': _0x5f1f30,
            'input': _0x57ce33,
            'text': _0xfb2341
          });
        }
      }
      if (_0x318aae.length === 0x0) {
        const _0x3f9ac7 = Array.from(_0x5a3268.querySelectorAll(".el-radio__label, .option-text, .choice-text, div"));
        for (const _0x20d679 of _0x3f9ac7) {
          const _0x42fe66 = _0x20d679.closest("label") || _0x20d679;
          const _0x23ed16 = _0x42fe66.querySelector("input[type=radio], input[type=checkbox]");
          const _0x4c91a4 = (_0x20d679.innerText || _0x20d679.textContent || '').replace(/\s+/g, " ").trim();
          if (_0x4c91a4) {
            _0x318aae.push({
              'el': _0x42fe66,
              'input': _0x23ed16,
              'text': _0x4c91a4
            });
          }
        }
      }
      if (_0x318aae.length === 0x0) {
        _0x275185(_0x24aaf2, "未在题目容器内找到任何选项元素");
        return false;
      }
      _0x275185(_0x24aaf2, "候选选项数量: " + _0x318aae.length);
      const _0x3eeb97 = _0x387540.toUpperCase();
      const _0x3987d1 = _0x329d58 => new Promise(_0x51114f => setTimeout(_0x51114f, _0x329d58));
      function _0x552aa3(_0xbf3189) {
        if (!_0xbf3189) {
          return false;
        }
        let _0x312cf6 = false;
        try {
          const _0x4735ca = _0xbf3189.input || _0xbf3189.el || _0xbf3189;
          if (_0xbf3189.input) {
            try {
              _0xbf3189.input.checked = true;
            } catch (_0xb607db) {}
            try {
              _0xbf3189.input.dispatchEvent(new Event('input', {
                'bubbles': true
              }));
            } catch (_0xf02cb7) {}
            try {
              _0xbf3189.input.dispatchEvent(new Event("change", {
                'bubbles': true
              }));
            } catch (_0x3c4dd8) {}
            try {
              _0xbf3189.input.click();
              _0x312cf6 = true;
            } catch (_0x78eb6a) {}
          }
          if (!_0x312cf6 && _0xbf3189.el) {
            try {
              _0xbf3189.el.click();
              _0x312cf6 = true;
            } catch (_0x3168f3) {}
          }
          if (!_0x312cf6 && _0x4735ca && _0x4735ca.dispatchEvent) {
            try {
              _0x4735ca.dispatchEvent(new MouseEvent("mousedown", {
                'bubbles': true
              }));
            } catch (_0x37300e) {}
            try {
              _0x4735ca.dispatchEvent(new MouseEvent("mouseup", {
                'bubbles': true
              }));
            } catch (_0x3488ec) {}
            try {
              _0x4735ca.dispatchEvent(new MouseEvent("click", {
                'bubbles': true
              }));
              _0x312cf6 = true;
            } catch (_0x48db12) {}
          }
        } catch (_0x32cc38) {}
        return _0x312cf6;
      }
      const _0x39d141 = async _0x207e27 => {
        const _0x539681 = _0x552aa3(_0x207e27);
        await _0x3987d1(0x78);
        return _0x539681;
      };
      const _0x47fdad = {
        'TRUE': ['TRUE', '正确', "TRUE(TRUE)", 'T', '是', '对'],
        'FALSE': ['FALSE', '错误', "FALSE(FALSE)", 'F', '否', '不对']
      };
      for (const [_0x2b1a86, _0x50004e] of Object.entries(_0x47fdad)) {
        for (const _0x37f1ef of _0x50004e) {
          if (_0x3eeb97.includes(_0x37f1ef.toUpperCase())) {
            for (const _0xa3cb5d of _0x318aae) {
              if (_0xa3cb5d.text.toUpperCase().includes(_0x37f1ef.toUpperCase()) || _0x37f1ef.toUpperCase().includes(_0xa3cb5d.text.toUpperCase())) {
                const _0x3dd20e = await _0x39d141(_0xa3cb5d);
                _0x275185(_0x24aaf2, "点击选项: " + _0xa3cb5d.text + " " + (_0x3dd20e ? '(已触发)' : "(触发失败)"));
                if (_0x3dd20e) {
                  return true;
                }
              }
            }
          }
        }
      }
      const _0x2afbdf = /[,;\s，、；和及与]+/;
      const _0x53da37 = _0x3eeb97.match(/[A-Z](?:[,;\s，、；和及与]|$)/);
      if (_0x53da37) {
        const _0x1e83a8 = _0x387540.split(_0x2afbdf).map(_0x571dce => _0x571dce.trim()).filter(Boolean);
        const _0x284aa0 = [];
        for (const _0xc46b88 of _0x1e83a8) {
          const _0x2da1fd = _0xc46b88.toUpperCase().replace(/[^A-Z]/g, '');
          if (!_0x2da1fd) {
            continue;
          }
          const _0xe4cdd8 = _0x2da1fd.charCodeAt(0x0) - 0x41;
          if (_0xe4cdd8 >= 0x0 && _0xe4cdd8 < _0x318aae.length) {
            _0x284aa0.push(_0x318aae[_0xe4cdd8]);
          }
        }
        if (_0x284aa0.length > 0x0) {
          let _0x5010c9 = false;
          for (const _0x3ca4af of _0x284aa0) {
            const _0x419a03 = await _0x39d141(_0x3ca4af);
            _0x275185(_0x24aaf2, "点击选项: " + _0x3ca4af.text + " " + (_0x419a03 ? '(已触发)' : "(触发失败)"));
            _0x5010c9 = _0x5010c9 || _0x419a03;
          }
          if (_0x5010c9) {
            return true;
          }
        }
      }
      const _0x2e910f = _0x387540.match(/\d+(?:[,;\s，、；和及与]|$)/);
      if (_0x2e910f) {
        const _0x95c079 = _0x387540.split(_0x2afbdf).map(_0x3c7a98 => _0x3c7a98.trim()).filter(Boolean);
        const _0x389545 = [];
        for (const _0x14a420 of _0x95c079) {
          const _0x2f51f8 = parseInt(_0x14a420, 0xa);
          if (!isNaN(_0x2f51f8)) {
            const _0x238726 = _0x2f51f8 - 0x1;
            if (_0x238726 >= 0x0 && _0x238726 < _0x318aae.length) {
              _0x389545.push(_0x318aae[_0x238726]);
            }
          }
        }
        if (_0x389545.length > 0x0) {
          let _0x531d38 = false;
          for (const _0x4a3d5b of _0x389545) {
            const _0x192b2d = await _0x39d141(_0x4a3d5b);
            _0x275185(_0x24aaf2, "点击选项: " + _0x4a3d5b.text + " " + (_0x192b2d ? "(已触发)" : "(触发失败)"));
            _0x531d38 = _0x531d38 || _0x192b2d;
          }
          if (_0x531d38) {
            return true;
          }
        }
      }
      const _0x4b7c92 = _0x387540.replace(/^选择[:：\s]*/i, '').trim();
      const _0x99a820 = _0x4b7c92.split(_0x2afbdf).map(_0x17fc4b => _0x17fc4b.trim()).filter(Boolean);
      if (_0x99a820.length > 0x1) {
        let _0x10d5ef = false;
        for (const _0x307c02 of _0x99a820) {
          for (const _0x9d9895 of _0x318aae) {
            const _0x29eb05 = (_0x9d9895.text || '').replace(/^[A-Z0-9][:\.)\s]+/, '').trim();
            if (!_0x29eb05) {
              continue;
            }
            if (_0x29eb05 === _0x307c02 || _0x29eb05.includes(_0x307c02) || _0x307c02.includes(_0x29eb05) || _0x29eb05.toUpperCase().includes(_0x307c02.toUpperCase()) || _0x307c02.toUpperCase().includes(_0x29eb05.toUpperCase())) {
              try {
                const _0x46da1e = await _0x39d141(_0x9d9895);
                _0x275185(_0x24aaf2, "点击匹配文本选项: " + _0x9d9895.text + " " + (_0x46da1e ? "(已触发)" : "(触发失败)"));
                _0x10d5ef = _0x10d5ef || _0x46da1e;
                break;
              } catch (_0x169b67) {}
            }
          }
        }
        if (_0x10d5ef) {
          return true;
        }
      }
      for (const _0x5ab9cf of _0x318aae) {
        const _0x47ad16 = (_0x5ab9cf.text || '').replace(/^[A-Z0-9][:\.)\s]+/, '').trim();
        if (!_0x47ad16) {
          continue;
        }
        if (_0x47ad16 === _0x4b7c92 || _0x47ad16.includes(_0x4b7c92) || _0x4b7c92.includes(_0x47ad16) || _0x47ad16.toUpperCase().includes(_0x4b7c92.toUpperCase()) || _0x4b7c92.toUpperCase().includes(_0x47ad16.toUpperCase())) {
          try {
            const _0x44b736 = await _0x39d141(_0x5ab9cf);
            _0x275185(_0x24aaf2, "点击匹配文本选项: " + _0x5ab9cf.text + " " + (_0x44b736 ? "(已触发)" : "(触发失败)"));
            if (_0x44b736) {
              return true;
            }
          } catch (_0xcf278a) {}
        }
      }
      _0x275185(_0x24aaf2, "未能匹配 AI 返回: " + _0x259649);
    } catch (_0x3b24c9) {
      _0x275185(_0x24aaf2, "选择答案出错: " + _0x3b24c9);
    }
    return false;
  }
  let _0x495070;
  let _0x2ae86d;
  let _0x22746a;
  let _0x8105b8;
  let _0x2f3432;
  let _0x55fbc5;
  let _0x265bc2;
  let _0x4733b0;
  let _0x3baa56 = false;
  let _0x7a03b3 = false;
  let _0x1066e9 = false;
  function _0x4fb09e() {
    _0x170fb8.logInfo("开始卡密验证检查", {
      'timestamp': new Date().toISOString(),
      'url': window.location.href,
      'deviceId': _0xf1ff1d.deviceId?.["substring"](0x0, 0x8) + "***"
    });
    _0x4733b0 = new _0x11d628();
    const _0x56c70d = _0x4733b0.checkVerificationStatus();
    _0x170fb8.logInfo("卡密验证状态检查结果", {
      'valid': _0x56c70d.valid,
      'reason': _0x56c70d.reason || 'valid',
      'message': _0x56c70d.message,
      'cardType': _0xf1ff1d.cardType,
      'isVerified': _0xf1ff1d.isVerified
    });
    if (_0x56c70d.valid) {
      _0x170fb8.logInfo("卡密验证有效，启动主脚本");
      initMainScript();
    } else {
      _0x170fb8.logInfo("需要进行卡密验证", {
        'reason': _0x56c70d.reason
      });
      _0x265bc2 = new _0xbc2ef3();
      _0x265bc2.show();
    }
  }
  window.initMainScript = function () {
    console.log("华为认证助手 - 主功能模块启动...");
    _0x170fb8.logInfo('开始初始化主脚本模块', {
      'timestamp': new Date().toISOString(),
      'url': window.location.href,
      'readyState': document.readyState,
      'cardVerified': _0xf1ff1d.isVerified,
      'cardType': _0xf1ff1d.cardType,
      'enabledModules': {
        'antiSwitch': _0x467306,
        'camera': _0x5adaf4,
        'questionInterceptor': _0x1ec0b0,
        'autoCopy': _0x2b4764,
        'performanceMode': _0x523b4e,
        'aiAutoAnswer': _0x1324e8,
        'debugLog': _0x4a2c40,
        'autoSubmit': _0x5681f9
      },
      'aiConfiguration': {
        'provider': _0x38c5e4,
        'hasApiUrl': !!_0x51dc95,
        'hasApiKey': !!_0x10d794,
        'selectedModel': _0x11a655,
        'modelListCount': _0x380423 ? _0x380423.length : 0x0
      }
    });
    if (_0x467306) {
      _0x170fb8.logInfo("初始化防切屏功能");
      _0x1a5a17();
    }
    _0x170fb8.logInfo("初始化摄像头劫持模块");
    _0x243a16 = GM_getValue("custom_camera_image", '');
    _0x495070 = new _0x2838c5();
    _0x170fb8.logInfo("初始化控制面板");
    _0x22746a = new _0x475063();
    _0x170fb8.logInfo("初始化AI日志窗口");
    _0x55fbc5 = new _0x1905b0();
    if (_0x4a2c40) {
      _0x170fb8.logInfo("初始化调试日志窗口");
      const _0x996bb0 = new _0x243ae1();
      document.addEventListener('keydown', _0x497236 => {
        if (_0x497236.ctrlKey && _0x497236.shiftKey && _0x497236.key === 'D') {
          _0x497236.preventDefault();
          _0x996bb0.toggle();
          _0x170fb8.logInfo("通过快捷键切换调试窗口", {
            'visible': _0x996bb0.isVisible
          });
        } else if (_0x497236.ctrlKey && _0x497236.shiftKey && _0x497236.key === 'A') {
          _0x497236.preventDefault();
          _0x55fbc5.toggle();
          _0x55fbc5.addLog('通过快捷键切换AI日志窗口', "info");
        }
      });
    } else {
      document.addEventListener("keydown", _0x466869 => {
        if (_0x466869.ctrlKey && _0x466869.shiftKey && _0x466869.key === 'A') {
          _0x466869.preventDefault();
          _0x55fbc5.toggle();
          _0x55fbc5.addLog("通过快捷键切换AI日志窗口", "info");
        }
      });
    }
    _0x170fb8.logInfo("初始化图片上传UI");
    _0x8105b8 = new _0x4a4925();
    _0x170fb8.logInfo("初始化题目复制UI");
    _0x2f3432 = new _0x3e6f78();
    if (_0x1ec0b0) {
      _0x170fb8.logInfo("初始化题目拦截器");
      _0x2ae86d = _0x559006();
    }
    try {
      if (_0x22746a && _0x22746a.aiLogEl) {
        _0x275185(_0x22746a.aiLogEl, "脚本已启动，AI 自动答题 " + (_0x1324e8 ? "已启用" : "未启用") + "，自动交卷 " + (_0x5681f9 ? "已启用" : '已禁用'));
      }
      if (_0x22746a && _0x22746a.aiProgressEl) {
        _0x3dcbff(_0x22746a.aiProgressEl);
      }
    } catch (_0x5bb6d2) {
      console.warn("初始化 AI 面板引用失败", _0x5bb6d2);
    }
    if (_0x22746a && _0x22746a.container) {
      _0x1bd695();
    }
    console.log("华为认证助手优化版已启动");
    _0x170fb8.logInfo("主脚本模块启动完成", {
      'url': window.location.href,
      'userAgent': navigator.userAgent,
      'timestamp': new Date().toISOString(),
      'scriptVersion': '2025优化版',
      'debugMode': _0x4a2c40,
      'cardVerificationInfo': _0x4733b0 ? _0x4733b0.getStatusInfo() : null,
      'configuration': {
        'aiProvider': _0x38c5e4,
        'hasApiKey': !!_0x10d794,
        'hasApiUrl': !!_0x51dc95,
        'selectedModel': _0x11a655,
        'isAutoAiEnabled': _0x1324e8,
        'isCameraEnabled': _0x5adaf4,
        'isAntiSwitchEnabled': _0x467306,
        'isQuestionInterceptorEnabled': _0x1ec0b0,
        'isAutoCopyEnabled': _0x2b4764,
        'isPerformanceMode': _0x523b4e,
        'isAutoSubmitEnabled': _0x5681f9
      }
    });
    _0x170fb8.logInfo('运行环境', {
      'tampermonkey': typeof GM_xmlhttpRequest !== "undefined",
      'violentmonkey': typeof VM !== "undefined",
      'greasemonkey': typeof GM !== 'undefined',
      'clipboardAPI': !!navigator.clipboard,
      'fetchAPI': typeof fetch !== "undefined",
      'windowFeatures': {
        'localStorage': typeof localStorage !== "undefined",
        'sessionStorage': typeof sessionStorage !== "undefined",
        'indexedDB': typeof indexedDB !== "undefined"
      }
    });
  };
  function _0x1bd695() {
    if (!_0x22746a || !_0x22746a.container) {
      return;
    }
    try {
      const _0x3383c9 = _0x4733b0.getStatusInfo();
      const _0x21bd8e = document.createElement("div");
      _0x21bd8e.style.cssText = "\n                margin: 10px 0;\n                padding: 10px;\n                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n                border-radius: 8px;\n                color: white;\n                font-size: 12px;\n            ";
      let _0x5503dd = "\n                <div style=\"display: flex; align-items: center; gap: 8px; margin-bottom: 8px;\">\n                    <span style=\"font-size: 16px;\">🔐</span>\n                    <strong>卡密状态：" + _0x3383c9.message + "</strong>\n                </div>\n            ";
      if (_0x3383c9.details) {
        _0x5503dd += "<div style=\"font-size: 11px; opacity: 0.9;\">";
        if (_0x3383c9.details.cardType === "time") {
          _0x5503dd += "\n                        <div>类型：时间卡密</div>\n                        <div>剩余：" + _0x3383c9.details.remainingTime + "</div>\n                    ";
        } else if (_0x3383c9.details.cardType === "count") {
          _0x5503dd += "\n                        <div>类型：次数卡密</div>\n                        <div>剩余：" + _0x3383c9.details.remainingCount + '/' + _0x3383c9.details.totalCount + " 次</div>\n                    ";
        }
        _0x5503dd += "</div>";
      }
      _0x21bd8e.innerHTML = _0x5503dd;
      _0x22746a.container.insertBefore(_0x21bd8e, _0x22746a.container.firstChild);
    } catch (_0x558fd0) {
      _0x170fb8.logError("添加卡密状态到控制面板失败", _0x558fd0);
    }
  }
  function _0x2a54a1() {
    console.log("%c华为认证助手优化版 v2025.9.17", "color: #667eea; font-size: 16px; font-weight: bold;");
    console.log("%c🔐 卡密验证系统已激活", "color: #4CAF50; font-weight: bold;");
    console.log("%c📋 API地址: http://hw.api.zcem.eu.org/api/verify.php", "color: #2196F3;");
    console.log("%c⚡ 支持POST/GET双重请求模式", "color: #FF9800;");
    console.log("%c🛡️ 增强设备指纹识别", "color: #9C27B0;");
    GM_registerMenuCommand("🔐 卡密验证", () => {
      if (_0x265bc2) {
        _0x265bc2.show();
      } else {
        _0x265bc2 = new _0xbc2ef3();
        _0x265bc2.show();
      }
    });
    GM_registerMenuCommand("📊 卡密状态", () => {
      if (_0x4733b0) {
        const _0x21468c = _0x4733b0.getStatusInfo();
        let _0x5bc651 = "卡密状态：" + _0x21468c.message + "\n";
        if (_0x21468c.details) {
          _0x5bc651 += "\n设备ID：" + _0x21468c.details.deviceId;
          _0x5bc651 += "\n验证时间：" + _0x21468c.details.lastVerifyTime;
          if (_0x21468c.details.cardType === "time") {
            _0x5bc651 += "\n卡密类型：时间卡密";
            _0x5bc651 += "\n到期时间：" + _0x21468c.details.expireTime;
            _0x5bc651 += "\n剩余时间：" + _0x21468c.details.remainingTime;
          } else if (_0x21468c.details.cardType === "count") {
            _0x5bc651 += "\n卡密类型：次数卡密";
            _0x5bc651 += "\n剩余次数：" + _0x21468c.details.remainingCount + '/' + _0x21468c.details.totalCount;
          }
        }
        alert(_0x5bc651);
      }
    });
    GM_registerMenuCommand("🔄 重置卡密", () => {
      if (confirm("确定要清除当前卡密验证状态吗？\n清除后需要重新验证卡密。")) {
        if (_0x4733b0) {
          _0x4733b0.clearVerificationState();
        }
        location.reload();
      }
    });
    GM_registerMenuCommand("🧪 测试API连接", async () => {
      const _0xa52547 = prompt("输入测试卡密：", "A69ULQBF6WIK5laZbF1t");
      if (_0xa52547) {
        console.log("🧪 开始测试API连接...");
        console.log("测试卡密:", _0xa52547);
        console.log("设备ID:", _0xf1ff1d.deviceId);
        console.log("API地址:", "http://hw.api.zcem.eu.org/api/verify.php");
        console.log("API密钥:", "3489b93fc7707a5741085aac9149adea".substring(0x0, 0x8) + "***");
        console.log("📡 测试网络连通性...");
        try {
          const _0x16ac8e = await fetch("http://hw.api.zcem.eu.org/api/verify.php?test=1", {
            'method': 'GET',
            'timeout': 0x1388
          });
          console.log("✅ 网络连通性测试通过，状态码:", _0x16ac8e.status);
        } catch (_0x8fc953) {
          console.warn("⚠️ 网络连通性测试失败:", _0x8fc953.message);
        }
        if (!_0x4733b0) {
          _0x4733b0 = new _0x11d628();
        }
        _0x4733b0.verifyCard(_0xa52547).then(_0x423921 => {
          console.log("📋 测试结果:", _0x423921);
          let _0x4f4208 = "测试结果：\n" + (_0x423921.success ? "✅ 成功" : "❌ 失败") + "\n";
          _0x4f4208 += "消息：" + (_0x423921.message || _0x423921.userMessage) + "\n";
          _0x4f4208 += "代码：" + _0x423921.code + "\n\n";
          _0x4f4208 += "请求参数：\n";
          _0x4f4208 += "• 卡密：" + _0xa52547 + "\n";
          _0x4f4208 += "• 设备ID：" + _0xf1ff1d.deviceId + "\n";
          _0x4f4208 += "• API地址：http://hw.api.zcem.eu.org/api/verify.php";
          alert(_0x4f4208);
        })['catch'](_0x2e9db3 => {
          console.error("🚨 测试异常:", _0x2e9db3);
          alert("测试异常：" + _0x2e9db3.message);
        });
      }
    });
    console.log("%c🚀 正在启动卡密验证系统...", "color: #667eea; font-weight: bold;");
    _0x4fb09e();
  }
  if (document.readyState === "loading") {
    _0x170fb8.logInfo("页面加载状态", {
      'state': "loading",
      'event': "DOMContentLoaded"
    });
    document.addEventListener("DOMContentLoaded", _0x2a54a1);
  } else {
    _0x170fb8.logInfo("页面加载状态", {
      'state': document.readyState,
      'delay': '1000ms'
    });
    setTimeout(_0x2a54a1, 0x3e8);
  }
})();
