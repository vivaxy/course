!(function(r) {
  var a = {};
  function s(t) {
    if (a[t]) return a[t].exports;
    var e = (a[t] = { i: t, l: !1, exports: {} });
    return r[t].call(e.exports, e, e.exports, s), (e.l = !0), e.exports;
  }
  (s.m = r),
    (s.c = a),
    (s.d = function(r, a, t) {
      s.o(r, a) || Object.defineProperty(r, a, { enumerable: !0, get: t });
    }),
    (s.r = function(r) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(r, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(r, '__esModule', { value: !0 });
    }),
    (s.t = function(r, a) {
      if ((1 & a && (r = s(r)), 8 & a)) return r;
      if (4 & a && 'object' == typeof r && r && r.__esModule) return r;
      var t = Object.create(null);
      if (
        (s.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: r }),
        2 & a && 'string' != typeof r)
      )
        for (var e in r)
          s.d(
            t,
            e,
            function(a) {
              return r[a];
            }.bind(null, e),
          );
      return t;
    }),
    (s.n = function(r) {
      var a =
        r && r.__esModule
          ? function() {
              return r.default;
            }
          : function() {
              return r;
            };
      return s.d(a, 'a', a), a;
    }),
    (s.o = function(r, a) {
      return Object.prototype.hasOwnProperty.call(r, a);
    }),
    (s.p = ''),
    s((s.s = 8));
})([
  function(r, a, s) {
    'use strict';
    var t = s(5),
      e = { body: '', args: [], thisVars: [], localVars: [] };
    function n(r) {
      if (!r) return e;
      for (var a = 0; a < r.args.length; ++a) {
        var s = r.args[a];
        r.args[a] =
          0 === a
            ? { name: s, lvalue: !0, rvalue: !!r.rvalue, count: r.count || 1 }
            : { name: s, lvalue: !1, rvalue: !0, count: 1 };
      }
      return (
        r.thisVars || (r.thisVars = []), r.localVars || (r.localVars = []), r
      );
    }
    function o(r) {
      for (var a = [], s = 0; s < r.args.length; ++s) a.push('a' + s);
      return new Function(
        'P',
        [
          'return function ',
          r.funcName,
          '_ndarrayops(',
          a.join(','),
          ') {P(',
          a.join(','),
          ');return a0}',
        ].join(''),
      )(
        (function(r) {
          return t({
            args: r.args,
            pre: n(r.pre),
            body: n(r.body),
            post: n(r.proc),
            funcName: r.funcName,
          });
        })(r),
      );
    }
    var i = {
      add: '+',
      sub: '-',
      mul: '*',
      div: '/',
      mod: '%',
      band: '&',
      bor: '|',
      bxor: '^',
      lshift: '<<',
      rshift: '>>',
      rrshift: '>>>',
    };
    !(function() {
      for (var r in i) {
        var s = i[r];
        (a[r] = o({
          args: ['array', 'array', 'array'],
          body: { args: ['a', 'b', 'c'], body: 'a=b' + s + 'c' },
          funcName: r,
        })),
          (a[r + 'eq'] = o({
            args: ['array', 'array'],
            body: { args: ['a', 'b'], body: 'a' + s + '=b' },
            rvalue: !0,
            funcName: r + 'eq',
          })),
          (a[r + 's'] = o({
            args: ['array', 'array', 'scalar'],
            body: { args: ['a', 'b', 's'], body: 'a=b' + s + 's' },
            funcName: r + 's',
          })),
          (a[r + 'seq'] = o({
            args: ['array', 'scalar'],
            body: { args: ['a', 's'], body: 'a' + s + '=s' },
            rvalue: !0,
            funcName: r + 'seq',
          }));
      }
    })();
    var u = { not: '!', bnot: '~', neg: '-', recip: '1.0/' };
    !(function() {
      for (var r in u) {
        var s = u[r];
        (a[r] = o({
          args: ['array', 'array'],
          body: { args: ['a', 'b'], body: 'a=' + s + 'b' },
          funcName: r,
        })),
          (a[r + 'eq'] = o({
            args: ['array'],
            body: { args: ['a'], body: 'a=' + s + 'a' },
            rvalue: !0,
            count: 2,
            funcName: r + 'eq',
          }));
      }
    })();
    var h = {
      and: '&&',
      or: '||',
      eq: '===',
      neq: '!==',
      lt: '<',
      gt: '>',
      leq: '<=',
      geq: '>=',
    };
    !(function() {
      for (var r in h) {
        var s = h[r];
        (a[r] = o({
          args: ['array', 'array', 'array'],
          body: { args: ['a', 'b', 'c'], body: 'a=b' + s + 'c' },
          funcName: r,
        })),
          (a[r + 's'] = o({
            args: ['array', 'array', 'scalar'],
            body: { args: ['a', 'b', 's'], body: 'a=b' + s + 's' },
            funcName: r + 's',
          })),
          (a[r + 'eq'] = o({
            args: ['array', 'array'],
            body: { args: ['a', 'b'], body: 'a=a' + s + 'b' },
            rvalue: !0,
            count: 2,
            funcName: r + 'eq',
          })),
          (a[r + 'seq'] = o({
            args: ['array', 'scalar'],
            body: { args: ['a', 's'], body: 'a=a' + s + 's' },
            rvalue: !0,
            count: 2,
            funcName: r + 'seq',
          }));
      }
    })();
    var c = [
      'abs',
      'acos',
      'asin',
      'atan',
      'ceil',
      'cos',
      'exp',
      'floor',
      'log',
      'round',
      'sin',
      'sqrt',
      'tan',
    ];
    !(function() {
      for (var r = 0; r < c.length; ++r) {
        var s = c[r];
        (a[s] = o({
          args: ['array', 'array'],
          pre: { args: [], body: 'this_f=Math.' + s, thisVars: ['this_f'] },
          body: { args: ['a', 'b'], body: 'a=this_f(b)', thisVars: ['this_f'] },
          funcName: s,
        })),
          (a[s + 'eq'] = o({
            args: ['array'],
            pre: { args: [], body: 'this_f=Math.' + s, thisVars: ['this_f'] },
            body: { args: ['a'], body: 'a=this_f(a)', thisVars: ['this_f'] },
            rvalue: !0,
            count: 2,
            funcName: s + 'eq',
          }));
      }
    })();
    var l = ['max', 'min', 'atan2', 'pow'];
    !(function() {
      for (var r = 0; r < l.length; ++r) {
        var s = l[r];
        (a[s] = o({
          args: ['array', 'array', 'array'],
          pre: { args: [], body: 'this_f=Math.' + s, thisVars: ['this_f'] },
          body: {
            args: ['a', 'b', 'c'],
            body: 'a=this_f(b,c)',
            thisVars: ['this_f'],
          },
          funcName: s,
        })),
          (a[s + 's'] = o({
            args: ['array', 'array', 'scalar'],
            pre: { args: [], body: 'this_f=Math.' + s, thisVars: ['this_f'] },
            body: {
              args: ['a', 'b', 'c'],
              body: 'a=this_f(b,c)',
              thisVars: ['this_f'],
            },
            funcName: s + 's',
          })),
          (a[s + 'eq'] = o({
            args: ['array', 'array'],
            pre: { args: [], body: 'this_f=Math.' + s, thisVars: ['this_f'] },
            body: {
              args: ['a', 'b'],
              body: 'a=this_f(a,b)',
              thisVars: ['this_f'],
            },
            rvalue: !0,
            count: 2,
            funcName: s + 'eq',
          })),
          (a[s + 'seq'] = o({
            args: ['array', 'scalar'],
            pre: { args: [], body: 'this_f=Math.' + s, thisVars: ['this_f'] },
            body: {
              args: ['a', 'b'],
              body: 'a=this_f(a,b)',
              thisVars: ['this_f'],
            },
            rvalue: !0,
            count: 2,
            funcName: s + 'seq',
          }));
      }
    })();
    var f = ['atan2', 'pow'];
    !(function() {
      for (var r = 0; r < f.length; ++r) {
        var s = f[r];
        (a[s + 'op'] = o({
          args: ['array', 'array', 'array'],
          pre: { args: [], body: 'this_f=Math.' + s, thisVars: ['this_f'] },
          body: {
            args: ['a', 'b', 'c'],
            body: 'a=this_f(c,b)',
            thisVars: ['this_f'],
          },
          funcName: s + 'op',
        })),
          (a[s + 'ops'] = o({
            args: ['array', 'array', 'scalar'],
            pre: { args: [], body: 'this_f=Math.' + s, thisVars: ['this_f'] },
            body: {
              args: ['a', 'b', 'c'],
              body: 'a=this_f(c,b)',
              thisVars: ['this_f'],
            },
            funcName: s + 'ops',
          })),
          (a[s + 'opeq'] = o({
            args: ['array', 'array'],
            pre: { args: [], body: 'this_f=Math.' + s, thisVars: ['this_f'] },
            body: {
              args: ['a', 'b'],
              body: 'a=this_f(b,a)',
              thisVars: ['this_f'],
            },
            rvalue: !0,
            count: 2,
            funcName: s + 'opeq',
          })),
          (a[s + 'opseq'] = o({
            args: ['array', 'scalar'],
            pre: { args: [], body: 'this_f=Math.' + s, thisVars: ['this_f'] },
            body: {
              args: ['a', 'b'],
              body: 'a=this_f(b,a)',
              thisVars: ['this_f'],
            },
            rvalue: !0,
            count: 2,
            funcName: s + 'opseq',
          }));
      }
    })(),
      (a.any = t({
        args: ['array'],
        pre: e,
        body: {
          args: [{ name: 'a', lvalue: !1, rvalue: !0, count: 1 }],
          body: 'if(a){return true}',
          localVars: [],
          thisVars: [],
        },
        post: { args: [], localVars: [], thisVars: [], body: 'return false' },
        funcName: 'any',
      })),
      (a.all = t({
        args: ['array'],
        pre: e,
        body: {
          args: [{ name: 'x', lvalue: !1, rvalue: !0, count: 1 }],
          body: 'if(!x){return false}',
          localVars: [],
          thisVars: [],
        },
        post: { args: [], localVars: [], thisVars: [], body: 'return true' },
        funcName: 'all',
      })),
      (a.sum = t({
        args: ['array'],
        pre: {
          args: [],
          localVars: [],
          thisVars: ['this_s'],
          body: 'this_s=0',
        },
        body: {
          args: [{ name: 'a', lvalue: !1, rvalue: !0, count: 1 }],
          body: 'this_s+=a',
          localVars: [],
          thisVars: ['this_s'],
        },
        post: {
          args: [],
          localVars: [],
          thisVars: ['this_s'],
          body: 'return this_s',
        },
        funcName: 'sum',
      })),
      (a.prod = t({
        args: ['array'],
        pre: {
          args: [],
          localVars: [],
          thisVars: ['this_s'],
          body: 'this_s=1',
        },
        body: {
          args: [{ name: 'a', lvalue: !1, rvalue: !0, count: 1 }],
          body: 'this_s*=a',
          localVars: [],
          thisVars: ['this_s'],
        },
        post: {
          args: [],
          localVars: [],
          thisVars: ['this_s'],
          body: 'return this_s',
        },
        funcName: 'prod',
      })),
      (a.norm2squared = t({
        args: ['array'],
        pre: {
          args: [],
          localVars: [],
          thisVars: ['this_s'],
          body: 'this_s=0',
        },
        body: {
          args: [{ name: 'a', lvalue: !1, rvalue: !0, count: 2 }],
          body: 'this_s+=a*a',
          localVars: [],
          thisVars: ['this_s'],
        },
        post: {
          args: [],
          localVars: [],
          thisVars: ['this_s'],
          body: 'return this_s',
        },
        funcName: 'norm2squared',
      })),
      (a.norm2 = t({
        args: ['array'],
        pre: {
          args: [],
          localVars: [],
          thisVars: ['this_s'],
          body: 'this_s=0',
        },
        body: {
          args: [{ name: 'a', lvalue: !1, rvalue: !0, count: 2 }],
          body: 'this_s+=a*a',
          localVars: [],
          thisVars: ['this_s'],
        },
        post: {
          args: [],
          localVars: [],
          thisVars: ['this_s'],
          body: 'return Math.sqrt(this_s)',
        },
        funcName: 'norm2',
      })),
      (a.norminf = t({
        args: ['array'],
        pre: {
          args: [],
          localVars: [],
          thisVars: ['this_s'],
          body: 'this_s=0',
        },
        body: {
          args: [{ name: 'a', lvalue: !1, rvalue: !0, count: 4 }],
          body: 'if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}',
          localVars: [],
          thisVars: ['this_s'],
        },
        post: {
          args: [],
          localVars: [],
          thisVars: ['this_s'],
          body: 'return this_s',
        },
        funcName: 'norminf',
      })),
      (a.norm1 = t({
        args: ['array'],
        pre: {
          args: [],
          localVars: [],
          thisVars: ['this_s'],
          body: 'this_s=0',
        },
        body: {
          args: [{ name: 'a', lvalue: !1, rvalue: !0, count: 3 }],
          body: 'this_s+=a<0?-a:a',
          localVars: [],
          thisVars: ['this_s'],
        },
        post: {
          args: [],
          localVars: [],
          thisVars: ['this_s'],
          body: 'return this_s',
        },
        funcName: 'norm1',
      })),
      (a.sup = t({
        args: ['array'],
        pre: {
          body: 'this_h=-Infinity',
          args: [],
          thisVars: ['this_h'],
          localVars: [],
        },
        body: {
          body: 'if(_inline_1_arg0_>this_h)this_h=_inline_1_arg0_',
          args: [{ name: '_inline_1_arg0_', lvalue: !1, rvalue: !0, count: 2 }],
          thisVars: ['this_h'],
          localVars: [],
        },
        post: {
          body: 'return this_h',
          args: [],
          thisVars: ['this_h'],
          localVars: [],
        },
      })),
      (a.inf = t({
        args: ['array'],
        pre: {
          body: 'this_h=Infinity',
          args: [],
          thisVars: ['this_h'],
          localVars: [],
        },
        body: {
          body: 'if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_',
          args: [{ name: '_inline_1_arg0_', lvalue: !1, rvalue: !0, count: 2 }],
          thisVars: ['this_h'],
          localVars: [],
        },
        post: {
          body: 'return this_h',
          args: [],
          thisVars: ['this_h'],
          localVars: [],
        },
      })),
      (a.argmin = t({
        args: ['index', 'array', 'shape'],
        pre: {
          body: '{this_v=Infinity;this_i=_inline_0_arg2_.slice(0)}',
          args: [
            { name: '_inline_0_arg0_', lvalue: !1, rvalue: !1, count: 0 },
            { name: '_inline_0_arg1_', lvalue: !1, rvalue: !1, count: 0 },
            { name: '_inline_0_arg2_', lvalue: !1, rvalue: !0, count: 1 },
          ],
          thisVars: ['this_i', 'this_v'],
          localVars: [],
        },
        body: {
          body:
            '{if(_inline_1_arg1_<this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}',
          args: [
            { name: '_inline_1_arg0_', lvalue: !1, rvalue: !0, count: 2 },
            { name: '_inline_1_arg1_', lvalue: !1, rvalue: !0, count: 2 },
          ],
          thisVars: ['this_i', 'this_v'],
          localVars: ['_inline_1_k'],
        },
        post: {
          body: '{return this_i}',
          args: [],
          thisVars: ['this_i'],
          localVars: [],
        },
      })),
      (a.argmax = t({
        args: ['index', 'array', 'shape'],
        pre: {
          body: '{this_v=-Infinity;this_i=_inline_0_arg2_.slice(0)}',
          args: [
            { name: '_inline_0_arg0_', lvalue: !1, rvalue: !1, count: 0 },
            { name: '_inline_0_arg1_', lvalue: !1, rvalue: !1, count: 0 },
            { name: '_inline_0_arg2_', lvalue: !1, rvalue: !0, count: 1 },
          ],
          thisVars: ['this_i', 'this_v'],
          localVars: [],
        },
        body: {
          body:
            '{if(_inline_1_arg1_>this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}',
          args: [
            { name: '_inline_1_arg0_', lvalue: !1, rvalue: !0, count: 2 },
            { name: '_inline_1_arg1_', lvalue: !1, rvalue: !0, count: 2 },
          ],
          thisVars: ['this_i', 'this_v'],
          localVars: ['_inline_1_k'],
        },
        post: {
          body: '{return this_i}',
          args: [],
          thisVars: ['this_i'],
          localVars: [],
        },
      })),
      (a.random = o({
        args: ['array'],
        pre: { args: [], body: 'this_f=Math.random', thisVars: ['this_f'] },
        body: { args: ['a'], body: 'a=this_f()', thisVars: ['this_f'] },
        funcName: 'random',
      })),
      (a.assign = o({
        args: ['array', 'array'],
        body: { args: ['a', 'b'], body: 'a=b' },
        funcName: 'assign',
      })),
      (a.assigns = o({
        args: ['array', 'scalar'],
        body: { args: ['a', 'b'], body: 'a=b' },
        funcName: 'assigns',
      })),
      (a.equals = t({
        args: ['array', 'array'],
        pre: e,
        body: {
          args: [
            { name: 'x', lvalue: !1, rvalue: !0, count: 1 },
            { name: 'y', lvalue: !1, rvalue: !0, count: 1 },
          ],
          body: 'if(x!==y){return false}',
          localVars: [],
          thisVars: [],
        },
        post: { args: [], localVars: [], thisVars: [], body: 'return true' },
        funcName: 'equals',
      }));
  },
  function(r, a, s) {
    var t = s(7),
      e = s(6),
      n = 'undefined' != typeof Float64Array;
    function o(r, a) {
      return r[0] - a[0];
    }
    function i() {
      var r,
        a = this.stride,
        s = new Array(a.length);
      for (r = 0; r < s.length; ++r) s[r] = [Math.abs(a[r]), r];
      s.sort(o);
      var t = new Array(s.length);
      for (r = 0; r < t.length; ++r) t[r] = s[r][1];
      return t;
    }
    function u(r, a) {
      var s = ['View', a, 'd', r].join('');
      a < 0 && (s = 'View_Nil' + r);
      var e = 'generic' === r;
      if (-1 === a) {
        var n =
          'function ' +
          s +
          '(a){this.data=a;};var proto=' +
          s +
          ".prototype;proto.dtype='" +
          r +
          "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " +
          s +
          '(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_' +
          s +
          '(a){return new ' +
          s +
          '(a);}';
        return new Function(n)();
      }
      if (0 === a) {
        n =
          'function ' +
          s +
          '(a,d) {this.data = a;this.offset = d};var proto=' +
          s +
          ".prototype;proto.dtype='" +
          r +
          "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " +
          s +
          '_copy() {return new ' +
          s +
          '(this.data,this.offset)};proto.pick=function ' +
          s +
          '_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function ' +
          s +
          '_get(){return ' +
          (e ? 'this.data.get(this.offset)' : 'this.data[this.offset]') +
          '};proto.set=function ' +
          s +
          '_set(v){return ' +
          (e ? 'this.data.set(this.offset,v)' : 'this.data[this.offset]=v') +
          '};return function construct_' +
          s +
          '(a,b,c,d){return new ' +
          s +
          '(a,d)}';
        return new Function('TrivialArray', n)(h[r][0]);
      }
      n = ["'use strict'"];
      var o = t(a),
        u = o.map(function(r) {
          return 'i' + r;
        }),
        c =
          'this.offset+' +
          o
            .map(function(r) {
              return 'this.stride[' + r + ']*i' + r;
            })
            .join('+'),
        l = o
          .map(function(r) {
            return 'b' + r;
          })
          .join(','),
        f = o
          .map(function(r) {
            return 'c' + r;
          })
          .join(',');
      n.push(
        'function ' + s + '(a,' + l + ',' + f + ',d){this.data=a',
        'this.shape=[' + l + ']',
        'this.stride=[' + f + ']',
        'this.offset=d|0}',
        'var proto=' + s + '.prototype',
        "proto.dtype='" + r + "'",
        'proto.dimension=' + a,
      ),
        n.push(
          "Object.defineProperty(proto,'size',{get:function " +
            s +
            '_size(){return ' +
            o
              .map(function(r) {
                return 'this.shape[' + r + ']';
              })
              .join('*'),
          '}})',
        ),
        1 === a
          ? n.push('proto.order=[0]')
          : (n.push("Object.defineProperty(proto,'order',{get:"),
            a < 4
              ? (n.push('function ' + s + '_order(){'),
                2 === a
                  ? n.push(
                      'return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})',
                    )
                  : 3 === a &&
                    n.push(
                      'var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})',
                    ))
              : n.push('ORDER})')),
        n.push('proto.set=function ' + s + '_set(' + u.join(',') + ',v){'),
        e
          ? n.push('return this.data.set(' + c + ',v)}')
          : n.push('return this.data[' + c + ']=v}'),
        n.push('proto.get=function ' + s + '_get(' + u.join(',') + '){'),
        e
          ? n.push('return this.data.get(' + c + ')}')
          : n.push('return this.data[' + c + ']}'),
        n.push(
          'proto.index=function ' + s + '_index(',
          u.join(),
          '){return ' + c + '}',
        ),
        n.push(
          'proto.hi=function ' +
            s +
            '_hi(' +
            u.join(',') +
            '){return new ' +
            s +
            '(this.data,' +
            o
              .map(function(r) {
                return [
                  '(typeof i',
                  r,
                  "!=='number'||i",
                  r,
                  '<0)?this.shape[',
                  r,
                  ']:i',
                  r,
                  '|0',
                ].join('');
              })
              .join(',') +
            ',' +
            o
              .map(function(r) {
                return 'this.stride[' + r + ']';
              })
              .join(',') +
            ',this.offset)}',
        );
      var p = o.map(function(r) {
          return 'a' + r + '=this.shape[' + r + ']';
        }),
        g = o.map(function(r) {
          return 'c' + r + '=this.stride[' + r + ']';
        });
      n.push(
        'proto.lo=function ' +
          s +
          '_lo(' +
          u.join(',') +
          '){var b=this.offset,d=0,' +
          p.join(',') +
          ',' +
          g.join(','),
      );
      for (var y = 0; y < a; ++y)
        n.push(
          'if(typeof i' +
            y +
            "==='number'&&i" +
            y +
            '>=0){d=i' +
            y +
            '|0;b+=c' +
            y +
            '*d;a' +
            y +
            '-=d}',
        );
      n.push(
        'return new ' +
          s +
          '(this.data,' +
          o
            .map(function(r) {
              return 'a' + r;
            })
            .join(',') +
          ',' +
          o
            .map(function(r) {
              return 'c' + r;
            })
            .join(',') +
          ',b)}',
      ),
        n.push(
          'proto.step=function ' +
            s +
            '_step(' +
            u.join(',') +
            '){var ' +
            o
              .map(function(r) {
                return 'a' + r + '=this.shape[' + r + ']';
              })
              .join(',') +
            ',' +
            o
              .map(function(r) {
                return 'b' + r + '=this.stride[' + r + ']';
              })
              .join(',') +
            ',c=this.offset,d=0,ceil=Math.ceil',
        );
      for (y = 0; y < a; ++y)
        n.push(
          'if(typeof i' +
            y +
            "==='number'){d=i" +
            y +
            '|0;if(d<0){c+=b' +
            y +
            '*(a' +
            y +
            '-1);a' +
            y +
            '=ceil(-a' +
            y +
            '/d)}else{a' +
            y +
            '=ceil(a' +
            y +
            '/d)}b' +
            y +
            '*=d}',
        );
      n.push(
        'return new ' +
          s +
          '(this.data,' +
          o
            .map(function(r) {
              return 'a' + r;
            })
            .join(',') +
          ',' +
          o
            .map(function(r) {
              return 'b' + r;
            })
            .join(',') +
          ',c)}',
      );
      var d = new Array(a),
        _ = new Array(a);
      for (y = 0; y < a; ++y)
        (d[y] = 'a[i' + y + ']'), (_[y] = 'b[i' + y + ']');
      n.push(
        'proto.transpose=function ' +
          s +
          '_transpose(' +
          u +
          '){' +
          u
            .map(function(r, a) {
              return r + '=(' + r + '===undefined?' + a + ':' + r + '|0)';
            })
            .join(';'),
        'var a=this.shape,b=this.stride;return new ' +
          s +
          '(this.data,' +
          d.join(',') +
          ',' +
          _.join(',') +
          ',this.offset)}',
      ),
        n.push(
          'proto.pick=function ' +
            s +
            '_pick(' +
            u +
            '){var a=[],b=[],c=this.offset',
        );
      for (y = 0; y < a; ++y)
        n.push(
          'if(typeof i' +
            y +
            "==='number'&&i" +
            y +
            '>=0){c=(c+this.stride[' +
            y +
            ']*i' +
            y +
            ')|0}else{a.push(this.shape[' +
            y +
            ']);b.push(this.stride[' +
            y +
            '])}',
        );
      return (
        n.push('var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}'),
        n.push(
          'return function construct_' +
            s +
            '(data,shape,stride,offset){return new ' +
            s +
            '(data,' +
            o
              .map(function(r) {
                return 'shape[' + r + ']';
              })
              .join(',') +
            ',' +
            o
              .map(function(r) {
                return 'stride[' + r + ']';
              })
              .join(',') +
            ',offset)}',
        ),
        new Function('CTOR_LIST', 'ORDER', n.join('\n'))(h[r], i)
      );
    }
    var h = {
      float32: [],
      float64: [],
      int8: [],
      int16: [],
      int32: [],
      uint8: [],
      uint16: [],
      uint32: [],
      array: [],
      uint8_clamped: [],
      buffer: [],
      generic: [],
    };
    r.exports = function(r, a, s, t) {
      if (void 0 === r) return (0, h.array[0])([]);
      'number' == typeof r && (r = [r]), void 0 === a && (a = [r.length]);
      var o = a.length;
      if (void 0 === s) {
        s = new Array(o);
        for (var i = o - 1, c = 1; i >= 0; --i) (s[i] = c), (c *= a[i]);
      }
      if (void 0 === t)
        for (t = 0, i = 0; i < o; ++i) s[i] < 0 && (t -= (a[i] - 1) * s[i]);
      for (
        var l = (function(r) {
            if (e(r)) return 'buffer';
            if (n)
              switch (Object.prototype.toString.call(r)) {
                case '[object Float64Array]':
                  return 'float64';
                case '[object Float32Array]':
                  return 'float32';
                case '[object Int8Array]':
                  return 'int8';
                case '[object Int16Array]':
                  return 'int16';
                case '[object Int32Array]':
                  return 'int32';
                case '[object Uint8Array]':
                  return 'uint8';
                case '[object Uint16Array]':
                  return 'uint16';
                case '[object Uint32Array]':
                  return 'uint32';
                case '[object Uint8ClampedArray]':
                  return 'uint8_clamped';
              }
            return Array.isArray(r) ? 'array' : 'generic';
          })(r),
          f = h[l];
        f.length <= o + 1;

      )
        f.push(u(l, f.length - 1));
      return (0, f[o + 1])(r, a, s, t);
    };
  },
  function(r, a, s) {
    'use strict';
    r.exports = function(r, a, s) {
      return 0 === r.length
        ? r
        : a
        ? (s || r.sort(a),
          (function(r, a) {
            for (var s = 1, t = r.length, e = r[0], n = r[0], o = 1; o < t; ++o)
              if (((n = e), a((e = r[o]), n))) {
                if (o === s) {
                  s++;
                  continue;
                }
                r[s++] = e;
              }
            return (r.length = s), r;
          })(r, a))
        : (s || r.sort(),
          (function(r) {
            for (
              var a = 1, s = r.length, t = r[0], e = r[0], n = 1;
              n < s;
              ++n, e = t
            )
              if (((e = t), (t = r[n]) !== e)) {
                if (n === a) {
                  a++;
                  continue;
                }
                r[a++] = t;
              }
            return (r.length = a), r;
          })(r));
    };
  },
  function(r, a, s) {
    'use strict';
    var t = s(2);
    function e(r, a, s) {
      var t,
        e,
        n = r.length,
        o = a.arrayArgs.length,
        i = a.indexArgs.length > 0,
        u = [],
        h = [],
        c = 0,
        l = 0;
      for (t = 0; t < n; ++t) h.push(['i', t, '=0'].join(''));
      for (e = 0; e < o; ++e)
        for (t = 0; t < n; ++t)
          (l = c),
            (c = r[t]),
            0 === t
              ? h.push(['d', e, 's', t, '=t', e, 'p', c].join(''))
              : h.push(
                  [
                    'd',
                    e,
                    's',
                    t,
                    '=(t',
                    e,
                    'p',
                    c,
                    '-s',
                    l,
                    '*t',
                    e,
                    'p',
                    l,
                    ')',
                  ].join(''),
                );
      for (h.length > 0 && u.push('var ' + h.join(',')), t = n - 1; t >= 0; --t)
        (c = r[t]),
          u.push(['for(i', t, '=0;i', t, '<s', c, ';++i', t, '){'].join(''));
      for (u.push(s), t = 0; t < n; ++t) {
        for (l = c, c = r[t], e = 0; e < o; ++e)
          u.push(['p', e, '+=d', e, 's', t].join(''));
        i &&
          (t > 0 && u.push(['index[', l, ']-=s', l].join('')),
          u.push(['++index[', c, ']'].join(''))),
          u.push('}');
      }
      return u.join('\n');
    }
    function n(r, a, s) {
      for (var t = r.body, e = [], n = [], o = 0; o < r.args.length; ++o) {
        var i = r.args[o];
        if (!(i.count <= 0)) {
          var u = new RegExp(i.name, 'g'),
            h = '',
            c = a.arrayArgs.indexOf(o);
          switch (a.argTypes[o]) {
            case 'offset':
              var l = a.offsetArgIndex.indexOf(o);
              (c = a.offsetArgs[l].array), (h = '+q' + l);
            case 'array':
              h = 'p' + c + h;
              var f = 'l' + o,
                p = 'a' + c;
              if (0 === a.arrayBlockIndices[c])
                1 === i.count
                  ? 'generic' === s[c]
                    ? i.lvalue
                      ? (e.push(['var ', f, '=', p, '.get(', h, ')'].join('')),
                        (t = t.replace(u, f)),
                        n.push([p, '.set(', h, ',', f, ')'].join('')))
                      : (t = t.replace(u, [p, '.get(', h, ')'].join('')))
                    : (t = t.replace(u, [p, '[', h, ']'].join('')))
                  : 'generic' === s[c]
                  ? (e.push(['var ', f, '=', p, '.get(', h, ')'].join('')),
                    (t = t.replace(u, f)),
                    i.lvalue && n.push([p, '.set(', h, ',', f, ')'].join('')))
                  : (e.push(['var ', f, '=', p, '[', h, ']'].join('')),
                    (t = t.replace(u, f)),
                    i.lvalue && n.push([p, '[', h, ']=', f].join('')));
              else {
                for (
                  var g = [i.name], y = [h], d = 0;
                  d < Math.abs(a.arrayBlockIndices[c]);
                  d++
                )
                  g.push('\\s*\\[([^\\]]+)\\]'),
                    y.push('$' + (d + 1) + '*t' + c + 'b' + d);
                if (
                  ((u = new RegExp(g.join(''), 'g')),
                  (h = y.join('+')),
                  'generic' === s[c])
                )
                  throw new Error(
                    'cwise: Generic arrays not supported in combination with blocks!',
                  );
                t = t.replace(u, [p, '[', h, ']'].join(''));
              }
              break;
            case 'scalar':
              t = t.replace(u, 'Y' + a.scalarArgs.indexOf(o));
              break;
            case 'index':
              t = t.replace(u, 'index');
              break;
            case 'shape':
              t = t.replace(u, 'shape');
          }
        }
      }
      return [e.join('\n'), t, n.join('\n')].join('\n').trim();
    }
    r.exports = function(r, a) {
      for (
        var s = (a[1].length - Math.abs(r.arrayBlockIndices[0])) | 0,
          o = new Array(r.arrayArgs.length),
          i = new Array(r.arrayArgs.length),
          u = 0;
        u < r.arrayArgs.length;
        ++u
      )
        (i[u] = a[2 * u]), (o[u] = a[2 * u + 1]);
      var h = [],
        c = [],
        l = [],
        f = [],
        p = [];
      for (u = 0; u < r.arrayArgs.length; ++u) {
        r.arrayBlockIndices[u] < 0
          ? (l.push(0),
            f.push(s),
            h.push(s),
            c.push(s + r.arrayBlockIndices[u]))
          : (l.push(r.arrayBlockIndices[u]),
            f.push(r.arrayBlockIndices[u] + s),
            h.push(0),
            c.push(r.arrayBlockIndices[u]));
        for (var g = [], y = 0; y < o[u].length; y++)
          l[u] <= o[u][y] && o[u][y] < f[u] && g.push(o[u][y] - l[u]);
        p.push(g);
      }
      var d = ['SS'],
        _ = ["'use strict'"],
        b = [];
      for (y = 0; y < s; ++y) b.push(['s', y, '=SS[', y, ']'].join(''));
      for (u = 0; u < r.arrayArgs.length; ++u) {
        for (
          d.push('a' + u), d.push('t' + u), d.push('p' + u), y = 0;
          y < s;
          ++y
        )
          b.push(['t', u, 'p', y, '=t', u, '[', l[u] + y, ']'].join(''));
        for (y = 0; y < Math.abs(r.arrayBlockIndices[u]); ++y)
          b.push(['t', u, 'b', y, '=t', u, '[', h[u] + y, ']'].join(''));
      }
      for (u = 0; u < r.scalarArgs.length; ++u) d.push('Y' + u);
      if (
        (r.shapeArgs.length > 0 && b.push('shape=SS.slice(0)'),
        r.indexArgs.length > 0)
      ) {
        var v = new Array(s);
        for (u = 0; u < s; ++u) v[u] = '0';
        b.push(['index=[', v.join(','), ']'].join(''));
      }
      for (u = 0; u < r.offsetArgs.length; ++u) {
        var m = r.offsetArgs[u],
          j = [];
        for (y = 0; y < m.offset.length; ++y)
          0 !== m.offset[y] &&
            (1 === m.offset[y]
              ? j.push(['t', m.array, 'p', y].join(''))
              : j.push([m.offset[y], '*t', m.array, 'p', y].join('')));
        0 === j.length
          ? b.push('q' + u + '=0')
          : b.push(['q', u, '=', j.join('+')].join(''));
      }
      var V = t(
        []
          .concat(r.pre.thisVars)
          .concat(r.body.thisVars)
          .concat(r.post.thisVars),
      );
      for (
        (b = b.concat(V)).length > 0 && _.push('var ' + b.join(',')), u = 0;
        u < r.arrayArgs.length;
        ++u
      )
        _.push('p' + u + '|=0');
      r.pre.body.length > 3 && _.push(n(r.pre, r, i));
      var w = n(r.body, r, i),
        A = (function(r) {
          for (var a = 0, s = r[0].length; a < s; ) {
            for (var t = 1; t < r.length; ++t)
              if (r[t][a] !== r[0][a]) return a;
            ++a;
          }
          return a;
        })(p);
      A < s
        ? _.push(
            (function(r, a, s, t) {
              for (
                var n = a.length,
                  o = s.arrayArgs.length,
                  i = s.blockSize,
                  u = s.indexArgs.length > 0,
                  h = [],
                  c = 0;
                c < o;
                ++c
              )
                h.push(['var offset', c, '=p', c].join(''));
              for (c = r; c < n; ++c)
                h.push(
                  ['for(var j' + c + '=SS[', a[c], ']|0;j', c, '>0;){'].join(
                    '',
                  ),
                ),
                  h.push(['if(j', c, '<', i, '){'].join('')),
                  h.push(['s', a[c], '=j', c].join('')),
                  h.push(['j', c, '=0'].join('')),
                  h.push(['}else{s', a[c], '=', i].join('')),
                  h.push(['j', c, '-=', i, '}'].join('')),
                  u && h.push(['index[', a[c], ']=j', c].join(''));
              for (c = 0; c < o; ++c) {
                for (var l = ['offset' + c], f = r; f < n; ++f)
                  l.push(['j', f, '*t', c, 'p', a[f]].join(''));
                h.push(['p', c, '=(', l.join('+'), ')'].join(''));
              }
              for (h.push(e(a, s, t)), c = r; c < n; ++c) h.push('}');
              return h.join('\n');
            })(A, p[0], r, w),
          )
        : _.push(e(p[0], r, w)),
        r.post.body.length > 3 && _.push(n(r.post, r, i)),
        r.debug &&
          console.log(
            '-----Generated cwise routine for ',
            a,
            ':\n' + _.join('\n') + '\n----------',
          );
      var k = [
        r.funcName || 'unnamed',
        '_cwise_loop_',
        o[0].join('s'),
        'm',
        A,
        (function(r) {
          for (var a = new Array(r.length), s = !0, t = 0; t < r.length; ++t) {
            var e = r[t],
              n = e.match(/\d+/);
            (n = n ? n[0] : ''),
              0 === e.charAt(0)
                ? (a[t] = 'u' + e.charAt(1) + n)
                : (a[t] = e.charAt(0) + n),
              t > 0 && (s = s && a[t] === a[t - 1]);
          }
          return s ? a[0] : a.join('');
        })(i),
      ].join('');
      return new Function(
        [
          'function ',
          k,
          '(',
          d.join(','),
          '){',
          _.join('\n'),
          '} return ',
          k,
        ].join(''),
      )();
    };
  },
  function(r, a, s) {
    'use strict';
    var t = s(3);
    r.exports = function(r) {
      var a = ["'use strict'", 'var CACHED={}'],
        s = [],
        e = r.funcName + '_cwise_thunk';
      a.push(['return function ', e, '(', r.shimArgs.join(','), '){'].join(''));
      for (
        var n = [],
          o = [],
          i = [
            [
              'array',
              r.arrayArgs[0],
              '.shape.slice(',
              Math.max(0, r.arrayBlockIndices[0]),
              r.arrayBlockIndices[0] < 0
                ? ',' + r.arrayBlockIndices[0] + ')'
                : ')',
            ].join(''),
          ],
          u = [],
          h = [],
          c = 0;
        c < r.arrayArgs.length;
        ++c
      ) {
        var l = r.arrayArgs[c];
        s.push(
          ['t', l, '=array', l, '.dtype,', 'r', l, '=array', l, '.order'].join(
            '',
          ),
        ),
          n.push('t' + l),
          n.push('r' + l),
          o.push('t' + l),
          o.push('r' + l + '.join()'),
          i.push('array' + l + '.data'),
          i.push('array' + l + '.stride'),
          i.push('array' + l + '.offset|0'),
          c > 0 &&
            (u.push(
              'array' +
                r.arrayArgs[0] +
                '.shape.length===array' +
                l +
                '.shape.length+' +
                (Math.abs(r.arrayBlockIndices[0]) -
                  Math.abs(r.arrayBlockIndices[c])),
            ),
            h.push(
              'array' +
                r.arrayArgs[0] +
                '.shape[shapeIndex+' +
                Math.max(0, r.arrayBlockIndices[0]) +
                ']===array' +
                l +
                '.shape[shapeIndex+' +
                Math.max(0, r.arrayBlockIndices[c]) +
                ']',
            ));
      }
      for (
        r.arrayArgs.length > 1 &&
          (a.push(
            'if (!(' +
              u.join(' && ') +
              ")) throw new Error('cwise: Arrays do not all have the same dimensionality!')",
          ),
          a.push(
            'for(var shapeIndex=array' +
              r.arrayArgs[0] +
              '.shape.length-' +
              Math.abs(r.arrayBlockIndices[0]) +
              '; shapeIndex--\x3e0;) {',
          ),
          a.push(
            'if (!(' +
              h.join(' && ') +
              ")) throw new Error('cwise: Arrays do not all have the same shape!')",
          ),
          a.push('}')),
          c = 0;
        c < r.scalarArgs.length;
        ++c
      )
        i.push('scalar' + r.scalarArgs[c]);
      return (
        s.push(['type=[', o.join(','), '].join()'].join('')),
        s.push('proc=CACHED[type]'),
        a.push('var ' + s.join(',')),
        a.push(
          [
            'if(!proc){',
            'CACHED[type]=proc=compile([',
            n.join(','),
            '])}',
            'return proc(',
            i.join(','),
            ')}',
          ].join(''),
        ),
        r.debug &&
          console.log(
            '-----Generated thunk:\n' + a.join('\n') + '\n----------',
          ),
        new Function('compile', a.join('\n'))(t.bind(void 0, r))
      );
    };
  },
  function(r, a, s) {
    'use strict';
    var t = s(4);
    r.exports = function(r) {
      var a = new (function() {
        (this.argTypes = []),
          (this.shimArgs = []),
          (this.arrayArgs = []),
          (this.arrayBlockIndices = []),
          (this.scalarArgs = []),
          (this.offsetArgs = []),
          (this.offsetArgIndex = []),
          (this.indexArgs = []),
          (this.shapeArgs = []),
          (this.funcName = ''),
          (this.pre = null),
          (this.body = null),
          (this.post = null),
          (this.debug = !1);
      })();
      (a.pre = r.pre), (a.body = r.body), (a.post = r.post);
      var s = r.args.slice(0);
      a.argTypes = s;
      for (var e = 0; e < s.length; ++e) {
        var n = s[e];
        if ('array' === n || ('object' == typeof n && n.blockIndices)) {
          if (
            ((a.argTypes[e] = 'array'),
            a.arrayArgs.push(e),
            a.arrayBlockIndices.push(n.blockIndices ? n.blockIndices : 0),
            a.shimArgs.push('array' + e),
            e < a.pre.args.length && a.pre.args[e].count > 0)
          )
            throw new Error('cwise: pre() block may not reference array args');
          if (e < a.post.args.length && a.post.args[e].count > 0)
            throw new Error('cwise: post() block may not reference array args');
        } else if ('scalar' === n)
          a.scalarArgs.push(e), a.shimArgs.push('scalar' + e);
        else if ('index' === n) {
          if (
            (a.indexArgs.push(e),
            e < a.pre.args.length && a.pre.args[e].count > 0)
          )
            throw new Error('cwise: pre() block may not reference array index');
          if (e < a.body.args.length && a.body.args[e].lvalue)
            throw new Error('cwise: body() block may not write to array index');
          if (e < a.post.args.length && a.post.args[e].count > 0)
            throw new Error(
              'cwise: post() block may not reference array index',
            );
        } else if ('shape' === n) {
          if (
            (a.shapeArgs.push(e), e < a.pre.args.length && a.pre.args[e].lvalue)
          )
            throw new Error('cwise: pre() block may not write to array shape');
          if (e < a.body.args.length && a.body.args[e].lvalue)
            throw new Error('cwise: body() block may not write to array shape');
          if (e < a.post.args.length && a.post.args[e].lvalue)
            throw new Error('cwise: post() block may not write to array shape');
        } else {
          if ('object' != typeof n || !n.offset)
            throw new Error('cwise: Unknown argument type ' + s[e]);
          (a.argTypes[e] = 'offset'),
            a.offsetArgs.push({ array: n.array, offset: n.offset }),
            a.offsetArgIndex.push(e);
        }
      }
      if (a.arrayArgs.length <= 0)
        throw new Error('cwise: No array arguments specified');
      if (a.pre.args.length > s.length)
        throw new Error('cwise: Too many arguments in pre() block');
      if (a.body.args.length > s.length)
        throw new Error('cwise: Too many arguments in body() block');
      if (a.post.args.length > s.length)
        throw new Error('cwise: Too many arguments in post() block');
      return (
        (a.debug = !!r.printCode || !!r.debug),
        (a.funcName = r.funcName || 'cwise'),
        (a.blockSize = r.blockSize || 64),
        t(a)
      );
    };
  },
  function(r, a) {
    function s(r) {
      return (
        !!r.constructor &&
        'function' == typeof r.constructor.isBuffer &&
        r.constructor.isBuffer(r)
      );
    }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    r.exports = function(r) {
      return (
        null != r &&
        (s(r) ||
          (function(r) {
            return (
              'function' == typeof r.readFloatLE &&
              'function' == typeof r.slice &&
              s(r.slice(0, 0))
            );
          })(r) ||
          !!r._isBuffer)
      );
    };
  },
  function(r, a, s) {
    'use strict';
    r.exports = function(r) {
      for (var a = new Array(r), s = 0; s < r; ++s) a[s] = s;
      return a;
    };
  },
  function(r, a, s) {
    'use strict';
    s.r(a);
    var t = s(1),
      e = s.n(t),
      n = s(0),
      o = s.n(n);
    const i = document.getElementById('file'),
      u = document.getElementById('canvas').getContext('2d'),
      h = document.querySelector('log');
    function c(r) {
      (h.innerHTML = r), console.log(r);
    }
    const l = new KerasJS.Model({ filepath: './training/dog.bin', gpu: !1 });
    l.events.on('loadingProgress', (r) => {
      c('LoadingProgress: ' + r + '%');
    }),
      i.addEventListener('change', (r) => {
        const a = new FileReader();
        a.addEventListener('load', (r) => {
          c('Receive file success');
          const a = new Image();
          a.addEventListener('load', () => {
            c('Load image success'), u.drawImage(a, 0, 0, 128, 128);
            const r = u.getImageData(0, 0, 128, 128),
              s = e()(new Float32Array(r.data), [r.width, r.height, 4]),
              t = e()(new Float32Array(r.width * r.height * 3), [
                r.width,
                r.height,
                3,
              ]);
            o.a.divseq(s, 255),
              o.a.assign(t.pick(null, null, 0), s.pick(null, null, 0)),
              o.a.assign(t.pick(null, null, 1), s.pick(null, null, 1)),
              o.a.assign(t.pick(null, null, 2), s.pick(null, null, 2));
            const n = t.data;
            l.predict({ [l.inputLayerNames[0]]: new Float32Array(n) })
              .then((r) => {
                c('Predict result: ' + r.output[0]);
              })
              .catch((r) => {
                c('Predict error: ' + r.stack);
              });
          }),
            (a.src = r.target.result);
        }),
          a.readAsDataURL(r.target.files[0]);
      });
  },
]);
